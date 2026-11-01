import { IconChevronDown, IconWifi } from './Icons'
import GarageArt from './GarageArt'

const fmt = (d) =>
  d
    ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    : '--:--:--'

function Dot({ ok }) {
  return (
    <i
      className={`inline-block size-2.5 shrink-0 rounded-full ${ok ? 'bg-emerald-400 ring-4 ring-emerald-400/25' : 'bg-red-500 ring-4 ring-red-500/25'
        }`}
    />
  )
}

export default function Header({ mqtt, esp32, allOnline, lastUpdate }) {
  return (
    <header className="relative overflow-hidden bg-neutral-700 pb-16 text-white">
      {/* background: garage picture; a real photo at public/hero.jpg overrides it */}
      <GarageArt className="absolute inset-0 size-full" />
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />
      {/* neutral dark overlay (no blue) so the text stays readable */}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-black/10" />

      <div className="relative px-6 lg:px-10">
        {/* 1) brand */}
        <div className="flex items-center gap-3 py-3">
          <div className="grid size-11 place-items-center rounded-xl bg-white text-2xl font-extrabold text-neutral-900 shadow-lg">
            P
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-extrabold tracking-tight">Smart Parking</h1>
            <span className="text-xs text-white/70">Parking Management</span>
          </div>
        </div>

        {/* 2) title */}
        <div className="pt-8">
          <h2 className="text-4xl font-extrabold leading-none tracking-tighter drop-shadow sm:text-5xl">
            Smart Parking
          </h2>
          <p className="mt-2 text-xl tracking-tight text-white/85 sm:text-2xl">
            Parking Management Dashboard
          </p>
        </div>
      </div>
    </header>


  )
}