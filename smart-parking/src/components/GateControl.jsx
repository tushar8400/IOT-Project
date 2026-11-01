import { IconLock, IconShield, IconUnlock } from './Icons'

function GateIllustration({ open }) {
  return (
    <div
      className="relative min-h-52 overflow-hidden bg-linear-to-b from-[#cfe0d3] to-[#b9c4cf]"
      aria-hidden="true"
    >
      <svg className="absolute inset-0 size-full" viewBox="0 0 320 200" preserveAspectRatio="xMidYMax slice">
        {/* building + trees */}
        <rect x="120" y="14" width="210" height="140" fill="#cfd4da" />
        <rect x="120" y="14" width="210" height="14" fill="#aeb6bf" />
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <rect key={`${r}-${c}`} x={134 + c * 40} y={38 + r * 28} width="28" height="16" fill="#8fb4d6" opacity=".75" />
          )),
        )}
        <circle cx="30" cy="40" r="38" fill="#4f8a4a" />
        <circle cx="75" cy="30" r="32" fill="#5e9a58" />
        <circle cx="12" cy="86" r="26" fill="#3f7a3f" />
        <rect x="0" y="146" width="320" height="6" fill="#7d8791" />
        <rect y="150" width="320" height="50" fill="#9aa3ad" />
        <path d="M0 200 60 150h50L90 200z" fill="#e8c33a" opacity=".9" />

        {/* barrier arm */}
        <g
          style={{
            transformOrigin: '70px 108px',
            transform: open ? 'rotate(-62deg)' : 'rotate(-6deg)',
            transition: 'transform .8s cubic-bezier(.4,0,.2,1)',
          }}
        >
          <rect x="66" y="100" width="250" height="14" rx="3" fill="#fff" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={96 + i * 40} y="100" width="20" height="14" fill="#e03131" />
          ))}
        </g>

        {/* housing */}
        <rect x="18" y="62" width="52" height="108" rx="6" fill="#f29a1f" />
        <rect x="18" y="62" width="52" height="14" rx="6" fill="#ffb84d" />
        <rect x="28" y="90" width="32" height="40" rx="4" fill="#d9820e" />
        <circle cx="70" cy="108" r="9" fill="#2b3442" />
        <circle cx="70" cy="108" r="3.5" fill="#cfd6e0" />
      </svg>
    </div>
  )
}

export default function GateControl({ gate, pending, onOpen, onClose, disabled }) {
  const open = gate === 'OPEN'

  return (
    <section className="flex flex-col overflow-hidden rounded-[22px] border border-slate-200/70 bg-white shadow-card">
      <header className="flex items-center gap-3.5 px-5 pb-3 pt-4">
        <IconShield width={40} height={40} className="text-brand-600" />
        <div>
          <h3 className="text-[22px] font-bold tracking-tight">Gate Control</h3>
          <p className="mt-0.5 text-[15px] text-slate-600">Control the parking gate</p>
        </div>
      </header>

      <div className="grid flex-1 grid-cols-1 md:grid-cols-[1fr_1.1fr]">
        <GateIllustration open={open} />

        <div className="flex flex-col justify-center gap-4 p-5">
          <div className="flex items-center gap-4 rounded-2xl bg-slate-100 px-5 py-4">
            <span
              className={`grid size-14 place-items-center rounded-full ${
                open ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
              }`}
            >
              {open ? <IconUnlock width={30} height={30} /> : <IconLock width={30} height={30} />}
            </span>
            <div>
              <span className="block text-base font-medium">Current Status</span>
              <strong
                className={`text-3xl font-extrabold tracking-tight ${open ? 'text-orange-600' : 'text-green-600'}`}
              >
                {pending ? '...' : open ? 'OPEN' : 'CLOSED'}
              </strong>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            <button
              onClick={onOpen}
              disabled={disabled || pending || open}
              className="flex items-center justify-center gap-2.5 rounded-xl bg-linear-to-b from-brand-500 to-brand-700 px-3 py-3.5 text-base font-semibold text-white shadow-glow-blue transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              <IconUnlock width={20} height={20} />
              Open Gate
            </button>
            <button
              onClick={onClose}
              disabled={disabled || pending || !open}
              className="flex items-center justify-center gap-2.5 rounded-xl border-[1.5px] border-slate-300 bg-white px-3 py-3.5 text-base font-semibold text-slate-800 transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              <IconLock width={20} height={20} />
              Close Gate
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
