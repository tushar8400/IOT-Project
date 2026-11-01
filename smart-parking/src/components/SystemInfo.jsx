import { IconBroker, IconChip, IconClock, IconPulse, IconSocket } from './Icons'

const fmt = (d) =>
  d
    ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    : '--:--:--'

function Row({ icon: Icon, label, value, ok, plain }) {
  return (
    <li className="flex items-center gap-4 border-b border-slate-200/70 py-3.5 text-base last:border-b-0">
      <span className="grid w-6 place-items-center text-indigo-700/80">
        <Icon width={22} height={22} />
      </span>
      <span className="flex-1 font-medium">{label}</span>
      {plain ? (
        <span className="inline-flex items-center gap-2.5 font-semibold tabular-nums">
          <IconClock width={20} height={20} />
          {value}
        </span>
      ) : (
        <span className={`inline-flex items-center gap-2.5 font-medium ${ok ? 'text-green-600' : 'text-red-600'}`}>
          <i
            className={`size-2.5 rounded-full ${
              ok ? 'bg-emerald-500 ring-4 ring-emerald-500/20' : 'bg-red-500 ring-4 ring-red-500/20'
            }`}
          />
          {value}
        </span>
      )}
    </li>
  )
}

export default function SystemInfo({ mqtt, esp32, lastUpdate }) {
  return (
    <section className="rounded-[22px] border border-slate-200/70 bg-white px-6 pb-3 pt-4 shadow-card">
      <header className="flex items-center gap-4 border-b border-slate-200/70 pb-3">
        <span className="grid size-11 place-items-center rounded-[10px] bg-brand-50 text-brand-600">
          <IconChip width={34} height={34} />
        </span>
        <h3 className="text-[21px] font-bold tracking-tight">System Information</h3>
        <IconPulse className="ml-auto text-green-600" width={52} height={30} />
      </header>

      <ul>
        <Row icon={IconBroker} label="MQTT Broker" ok={mqtt} value={mqtt ? 'Connected' : 'Disconnected'} />
        <Row icon={IconChip} label="ESP32 Device" ok={esp32} value={esp32 ? 'ONLINE' : 'OFFLINE'} />
        <Row icon={IconSocket} label="WebSocket" ok={mqtt} value={mqtt ? 'Connected' : 'Disconnected'} />
        <Row icon={IconClock} label="Last Update" plain value={fmt(lastUpdate)} />
      </ul>
    </section>
  )
}
