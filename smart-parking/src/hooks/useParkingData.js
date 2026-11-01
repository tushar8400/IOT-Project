import { useCallback, useEffect, useRef, useState } from 'react'
import { config } from '../config'
import { createMqttClient } from '../services/mqttClient'
import { createMockClient } from '../services/mockClient'

const initialSlots = Array.from({ length: config.slotCount }, (_, i) => ({
  id: i + 1,
  status: 'unknown', // 'available' | 'occupied' | 'unknown'
  distance: null,
}))

const initialState = {
  mqtt: false,
  esp32: false,
  gate: 'CLOSED', // 'OPEN' | 'CLOSED'
  gatePending: false,
  entries: 0,
  exits: 0,
  slots: initialSlots,
  lastUpdate: null,
}

export function useParkingData() {
  const [state, setState] = useState(initialState)
  const clientRef = useRef(null)

  const handleMessage = useCallback((topic, raw) => {
    const { topics } = config
    const now = new Date()

    setState((prev) => {
      const next = { ...prev, lastUpdate: now }

      if (topic.startsWith(`${topics.slotPrefix}/`)) {
        const id = Number(topic.split('/').pop())
        let distance = null
        let status = null
        try {
          const data = JSON.parse(raw)
          if (typeof data === 'number') distance = data
          else {
            distance = data.distance ?? null
            if (typeof data.occupied === 'boolean') {
              status = data.occupied ? 'occupied' : 'available'
            } else if (typeof data.status === 'string') {
              status = data.status.toLowerCase()
            }
          }
        } catch {
          distance = Number(raw)
          if (Number.isNaN(distance)) distance = null
        }
        if (!status) {
          status =
            distance == null
              ? 'unknown'
              : distance < config.occupiedThresholdCm
                ? 'occupied'
                : 'available'
        }
        const exists = prev.slots.some((s) => s.id === id)
        const updated = exists
          ? prev.slots.map((s) => (s.id === id ? { ...s, status, distance } : s))
          : [...prev.slots, { id, status, distance }].sort((a, b) => a.id - b.id)
        next.slots = updated
      } else if (topic === topics.gateStatus) {
        next.gate = raw.trim().toUpperCase() === 'OPEN' ? 'OPEN' : 'CLOSED'
        next.gatePending = false
      } else if (topic === topics.stats) {
        try {
          const d = JSON.parse(raw)
          if (d.entries != null) next.entries = d.entries
          if (d.exits != null) next.exits = d.exits
        } catch {
          /* ignore malformed */
        }
      } else if (topic === topics.esp32Status) {
        next.esp32 = raw.trim().toLowerCase() === 'online'
      }
      return next
    })
  }, [])

  const handleStatus = useCallback((patch) => {
    setState((prev) => ({
      ...prev,
      ...patch,
      // if the broker drops, we can't trust the device state
      ...(patch.mqtt === false ? { esp32: false } : {}),
    }))
  }, [])

  useEffect(() => {
    const factory = config.useMock ? createMockClient : createMqttClient
    clientRef.current = factory({ onMessage: handleMessage, onStatus: handleStatus })
    return () => clientRef.current?.disconnect()
  }, [handleMessage, handleStatus])

  const sendGateCommand = useCallback((cmd) => {
    setState((p) => ({ ...p, gatePending: true }))
    clientRef.current?.publish(config.topics.gateCommand, cmd)
    // safety: clear pending if device never confirms
    setTimeout(() => setState((p) => ({ ...p, gatePending: false })), 5000)
  }, [])

  const refresh = useCallback(() => {
    setState((p) => ({ ...p, lastUpdate: new Date() }))
  }, [])

  const total = state.slots.length
  const available = state.slots.filter((s) => s.status === 'available').length
  const occupied = state.slots.filter((s) => s.status === 'occupied').length
  const unknown = state.slots.filter((s) => s.status === 'unknown').length

  return {
    ...state,
    total,
    available,
    occupied,
    unknown,
    allOnline: state.mqtt && state.esp32,
    openGate: () => sendGateCommand('OPEN'),
    closeGate: () => sendGateCommand('CLOSE'),
    refresh,
  }
}
