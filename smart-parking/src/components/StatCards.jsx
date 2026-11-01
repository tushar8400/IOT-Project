import { IconArrowRight, IconCar, IconCheck } from './Icons'

const TONES = {
  blue: {
    card: 'from-white from-55% to-blue-100',
    icon: 'from-blue-400 to-blue-700',
    sub: 'text-blue-600',
    wave: 'fill-blue-500/20',
    d: 'M0 48C20 46 30 38 50 34s30-4 40-16 20-14 30-18v50H0z',
  },
  green: {
    card: 'from-white from-55% to-emerald-100',
    icon: 'from-green-400 to-green-700',
    sub: 'text-green-600',
    wave: 'fill-green-500/20',
    d: 'M0 48C25 48 35 42 55 34s30-18 65-12v28H0z',
  },
  orange: {
    card: 'from-white from-55% to-amber-100',
    icon: 'from-amber-300 to-orange-500',
    sub: 'text-slate-500',
    wave: 'fill-amber-500/25',
    d: 'M0 48C30 48 40 44 60 30s35-20 60-10v30H0z',
  },
  purple: {
    card: 'from-white from-50% to-violet-100',
    icon: 'from-violet-400 to-violet-700',
    sub: 'text-slate-500',
    wave: '',
    d: '',
  },
}

function StatCard({ tone, icon: Icon, label, value, sub, bars }) {
  const t = TONES[tone]
  return (
    <article
      className={`relative flex min-h-35 items-center gap-4 overflow-hidden rounded-[20px] bg-linear-to-br p-5 shadow-card ${t.card}`}
    >
      <div
        className={`grid size-[72px] shrink-0 place-items-center rounded-full bg-linear-to-br text-white shadow-[inset_0_-6px_12px_rgba(0,0,0,0.18),0_8px_16px_rgba(0,0,0,0.14)] ${t.icon}`}
      >
        <Icon width={34} height={34} />
      </div>

      <div className="relative z-10 flex flex-col">
        <span className="text-[15px] font-semibold">{label}</span>
        <strong className="my-0.5 text-[40px] font-extrabold leading-tight tracking-tighter">
          {value}
        </strong>
        <span className={`text-[13px] font-medium ${t.sub}`}>{sub}</span>
      </div>

      {t.d && (
        <svg
          className={`absolute bottom-0 right-0 h-[55%] w-[55%] ${t.wave}`}
          viewBox="0 0 120 50"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={t.d} />
        </svg>
      )}

      {bars && (
        <div className="absolute bottom-4 right-4 flex items-end gap-1.5" aria-hidden="true">
          {[14, 22, 30, 40, 54].map((h) => (
            <span
              key={h}
              className="w-2.5 rounded-[3px] bg-linear-to-b from-violet-400 to-violet-600"
              style={{ height: h }}
            />
          ))}
        </div>
      )}
    </article>
  )
}

export default function StatCards({ total, available, occupied, entries, exits }) {
  return (
    <section className="relative z-10 -mt-10 grid grid-cols-1 gap-4 px-1 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard tone="blue" icon={IconCar} label="Total Slots" value={total} sub="Parking capacity" />
      <StatCard tone="green" icon={IconCheck} label="Available Slots" value={available} sub="Currently available" />
      <StatCard tone="orange" icon={IconCar} label="Occupied Slots" value={occupied} sub="Currently occupied" />
      <StatCard tone="purple" icon={IconArrowRight} label="Total Entries" value={entries} sub={`Exits: ${exits}`} bars />
    </section>
  )
}
