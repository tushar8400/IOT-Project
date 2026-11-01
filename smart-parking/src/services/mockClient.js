import { config } from '../config'

/**
 * Simulated broker so the UI works with no backend.
 * Same interface as createMqttClient. Emits the same topics/payloads
 * that your ESP32 should publish.
 */
export function createMockClient({ onMessage, onStatus }) {
  const { topics, slotCount } = config
  const timers = []
  let entries = 18
  let exits = 23

  setTimeout(() => {
    onStatus({ mqtt: true })
    onMessage(topics.esp32Status, 'online')
    onMessage(topics.gateStatus, 'CLOSED')
    onMessage(topics.stats, JSON.stringify({ entries, exits }))
    for (let i = 1; i <= slotCount; i++) emitSlot(i, 18 + Math.random())
  }, 600)

  function emitSlot(id, distance) {
    onMessage(
      `${topics.slotPrefix}/${id}`,
      JSON.stringify({ distance: Number(distance.toFixed(1)) }),
    )
  }

  // slow jitter on distances + occasional car arriving/leaving
  const occupied = {}
  timers.push(
    setInterval(() => {
      for (let i = 1; i <= slotCount; i++) {
        if (Math.random() < 0.08) occupied[i] = !occupied[i]
        const base = occupied[i] ? 4 : 18.7
        emitSlot(i, base + (Math.random() - 0.5) * 0.4)
      }
    }, 2000),
  )

  return {
    publish: (topic, message) => {
      if (topic !== topics.gateCommand) return
      const next = message === 'OPEN' ? 'OPEN' : 'CLOSED'
      setTimeout(() => {
        onMessage(topics.gateStatus, next)
        if (next === 'OPEN') {
          entries += 1
          onMessage(topics.stats, JSON.stringify({ entries, exits }))
        }
      }, 700)
    },
    disconnect: () => timers.forEach(clearInterval),
  }
}
