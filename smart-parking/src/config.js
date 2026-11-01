const env = import.meta.env

// strip inline "# comments" if someone copies .env.example verbatim
const clean = (v, fallback) => (v ?? fallback).toString().split('#')[0].trim()

export const config = {
  useMock: clean(env.VITE_USE_MOCK, 'true') === 'true',
  mqttUrl: clean(env.VITE_MQTT_URL, 'ws://localhost:9001'),
  mqttUsername: clean(env.VITE_MQTT_USERNAME, ''),
  mqttPassword: clean(env.VITE_MQTT_PASSWORD, ''),
  slotCount: Number(clean(env.VITE_SLOT_COUNT, '3')),
  occupiedThresholdCm: Number(clean(env.VITE_OCCUPIED_THRESHOLD_CM, '10')),
  topics: {
    slotPrefix: clean(env.VITE_TOPIC_SLOT_PREFIX, 'parking/slot'),
    gateStatus: clean(env.VITE_TOPIC_GATE_STATUS, 'parking/gate/status'),
    gateCommand: clean(env.VITE_TOPIC_GATE_COMMAND, 'parking/gate/command'),
    stats: clean(env.VITE_TOPIC_STATS, 'parking/stats'),
    esp32Status: clean(env.VITE_TOPIC_ESP32_STATUS, 'parking/esp32/status'),
  },
}
