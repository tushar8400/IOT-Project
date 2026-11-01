# Smart Parking Dashboard (React + Vite + Tailwind CSS v4)

## Run
```bash
npm install
npm run dev        # http://localhost:5173
```
Runs in **mock mode** by default (simulated data, no backend needed).

## Connect your real MQTT broker
1. `cp .env.example .env`
2. Set `VITE_USE_MOCK=false` and `VITE_MQTT_URL` to your broker's **WebSocket** listener.
   - Mosquitto: add to `mosquitto.conf`:
     ```
     listener 1883
     listener 9001
     protocol websockets
     allow_anonymous true
     ```
3. Restart `npm run dev`.

## Topics (editable in `.env`)
| Direction | Topic | Payload |
|---|---|---|
| ESP32 → UI | `parking/slot/<n>` | `{"distance":18.6}` or `{"distance":18.6,"occupied":false}` or just `18.6` |
| ESP32 → UI | `parking/gate/status` | `OPEN` / `CLOSED` |
| ESP32 → UI | `parking/stats` | `{"entries":18,"exits":23}` |
| ESP32 → UI | `parking/esp32/status` | `online` / `offline` (use MQTT Last Will for `offline`) |
| UI → ESP32 | `parking/gate/command` | `OPEN` / `CLOSE` |

If only a distance is sent, a slot is "occupied" when distance < `VITE_OCCUPIED_THRESHOLD_CM` (default 10).

## Structure
- `src/config.js` – env + topics
- `src/services/mqttClient.js` – real MQTT (mqtt.js over WebSocket)
- `src/services/mockClient.js` – simulator
- `src/hooks/useParkingData.js` – single state hook used by the UI
- `src/index.css` – Tailwind import + theme tokens
- `src/components/*` – TopBar (brand bar + status bar), Hero, StatCards, ParkingSlots, GateControl, SystemInfo

## Photos
Cars, gate and garage are drawn in SVG. To use real photos, put `hero.jpg` in `public/` (it's layered over the hero automatically).
