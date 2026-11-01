import mqtt from 'mqtt'
import { config } from '../config'

/**
 * Real MQTT client (over WebSockets).
 * Calls onMessage(topic, payloadString) and onStatus({ mqtt: boolean }).
 * Returns { publish(topic, message), disconnect() }.
 */
export function createMqttClient({ onMessage, onStatus }) {
  const { topics } = config

  const client = mqtt.connect(config.mqttUrl, {
    username: config.mqttUsername || undefined,
    password: config.mqttPassword || undefined,
    clientId: `smart-parking-web-${Math.random().toString(16).slice(2, 10)}`,
    reconnectPeriod: 3000,
    connectTimeout: 8000,
    clean: true,
  })

  client.on('connect', () => {
    onStatus({ mqtt: true })
    client.subscribe(
      [
        `${topics.slotPrefix}/+`,
        topics.gateStatus,
        topics.stats,
        topics.esp32Status,
      ],
      { qos: 0 },
    )
  })

  client.on('message', (topic, payload) => onMessage(topic, payload.toString()))
  client.on('close', () => onStatus({ mqtt: false }))
  client.on('offline', () => onStatus({ mqtt: false }))
  client.on('error', (err) => console.error('[MQTT]', err.message))

  return {
    publish: (topic, message) => client.publish(topic, message, { qos: 1 }),
    disconnect: () => client.end(true),
  }
}
