import { IconParkingP, IconRefresh, IconRuler } from './Icons'

const STATUS = {
  available: { label: 'Available', ring: 'ring-green-500', badge: 'bg-green-500 text-white' },
  occupied: { label: 'Occupied', ring: 'ring-red-500', badge: 'bg-red-500 text-white' },
  unknown: { label: 'Unknown', ring: 'ring-amber-500', badge: 'bg-amber-500 text-white' },
}

export default function ParkingSlots({ slots, unknown, onRefresh }) {
  return (
    <section className="rounded-[22px] border border-slate-200/70 bg-white p-5 shadow-card">
      <header className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="grid size-10 place-items-center rounded-lg bg-linear-to-br from-brand-500 to-brand-700 text-white">
            <IconParkingP width={26} height={26} />
          </span>
          <h3 className="text-[22px] font-bold tracking-tight">Parking Slots</h3>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-slate-100 px-4 py-2 text-[13px] font-medium">
            <i
              className={`size-2.5 rounded-full ${
                unknown === 0 ? 'bg-emerald-500 ring-4 ring-emerald-500/20' : 'bg-amber-500 ring-4 ring-amber-500/20'
              }`}
            />
            {unknown} sensor(s) unknown
          </span>
          <button
            onClick={onRefresh}
            aria-label="Refresh"
            className="group grid size-10 place-items-center rounded-full bg-brand-50 text-brand-600"
          >
            <IconRefresh width={20} height={20} className="transition-transform duration-300 group-hover:rotate-180" />
          </button>
        </div>
      </header>

      {/* ↓↓↓ the new block replaces the old grid ↓↓↓ */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {slots.map((slot) => {
          const s = STATUS[slot.status]
          return (
            <article
              key={slot.id}
              className={`group relative aspect-4/3 overflow-hidden rounded-2xl shadow-card ring-4 ${s.ring}`}
            >
              {/* slot picture */}
              <img
                src="/parking-slot.png"
                alt={`Parking slot ${slot.id}`}
                draggable="false"
                className={`absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105 ${
                  slot.status === 'unknown' ? 'opacity-60 grayscale' : ''
                }`}
              />

              {/* top: slot name + status */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-linear-to-b from-black/60 to-transparent p-4">
                <h4 className="text-xl font-bold text-white drop-shadow">Slot {slot.id}</h4>
                <span className={`rounded-full px-4 py-1.5 text-sm font-semibold shadow ${s.badge}`}>{s.label}</span>
              </div>

              {/* bottom: distance */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2.5 rounded-xl bg-white/90 px-3.5 py-2 shadow backdrop-blur">
                <IconRuler width={22} height={22} className="text-slate-500" />
                <div className="flex flex-col text-xs leading-tight text-slate-500">
                  <span>Distance</span>
                  <strong className="text-base font-semibold text-slate-900">
                    {slot.distance == null ? '—' : `${Number(slot.distance).toFixed(1)} cm`}
                  </strong>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}