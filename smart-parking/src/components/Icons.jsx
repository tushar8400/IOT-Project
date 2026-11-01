const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconCar = (p) => (
  <svg {...base} {...p}>
    <path d="M5 17h14M3 13l2-6a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 7l2 6v4a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1H6.5v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    <circle cx="7.5" cy="14" r=".8" fill="currentColor" />
    <circle cx="16.5" cy="14" r=".8" fill="currentColor" />
  </svg>
)
export const IconCheck = (p) => (
  <svg {...base} strokeWidth={3} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)
export const IconArrowRight = (p) => (
  <svg {...base} strokeWidth={2.6} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)
export const IconHome = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 3 2 11.5h2.8V20h5.4v-5.5h3.6V20h5.4v-8.5H22z" />
  </svg>
)
export const IconLock = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M7 10V8a5 5 0 0 1 10 0v2h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm2 0h6V8a3 3 0 0 0-6 0zm3 4a1.6 1.6 0 0 0-.8 3v1.6h1.6V17A1.6 1.6 0 0 0 12 14z" />
  </svg>
)
export const IconUnlock = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M7 10V8a5 5 0 0 1 9.6-2l-1.9.7A3 3 0 0 0 9 8v2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm5 4a1.6 1.6 0 0 0-.8 3v1.6h1.6V17A1.6 1.6 0 0 0 12 14z" />
  </svg>
)
export const IconParkingP = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M8 4h5.2a4.8 4.8 0 0 1 0 9.6H10.6V20H8zm2.6 2.4v4.8h2.4a2.4 2.4 0 0 0 0-4.8z" />
  </svg>
)
export const IconChart = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm3 11.5 3.5-4 3 2.5 4.5-5.5 1.4 1.1-5.8 7-3-2.5-2.5 2.9z" />
  </svg>
)
export const IconGear = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M19.4 13a7.7 7.7 0 0 0 0-2l2-1.6a.5.5 0 0 0 .1-.6l-1.9-3.3a.5.5 0 0 0-.6-.2l-2.4 1a7.4 7.4 0 0 0-1.7-1l-.4-2.5a.5.5 0 0 0-.5-.4h-3.8a.5.5 0 0 0-.5.4l-.4 2.5a7.4 7.4 0 0 0-1.7 1l-2.4-1a.5.5 0 0 0-.6.2L2.5 8.8a.5.5 0 0 0 .1.6l2 1.6a7.7 7.7 0 0 0 0 2l-2 1.6a.5.5 0 0 0-.1.6l1.9 3.3c.1.2.4.3.6.2l2.4-1c.5.4 1.1.7 1.7 1l.4 2.5c0 .2.2.4.5.4h3.8c.3 0 .5-.2.5-.4l.4-2.5c.6-.3 1.2-.6 1.7-1l2.4 1c.2.1.5 0 .6-.2l1.9-3.3a.5.5 0 0 0-.1-.6zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
  </svg>
)
export const IconShield = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5zm-1 14-3.5-3.5 1.4-1.4L11 13.2l4.1-4.1 1.4 1.4z" />
  </svg>
)
export const IconChip = (p) => (
  <svg {...base} {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>
)
export const IconRuler = (p) => (
  <svg {...base} {...p}>
    <path d="M3 17 17 3l4 4L7 21z" />
    <path d="M7 13l2 2M10 10l2 2M13 7l2 2" />
  </svg>
)
export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)
export const IconRefresh = (p) => (
  <svg {...base} strokeWidth={2.4} {...p}>
    <path d="M20 11a8 8 0 1 0-2.3 6.1" />
    <path d="M20 4v7h-7" />
  </svg>
)
export const IconSearch = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)
export const IconWifi = (p) => (
  <svg {...base} strokeWidth={2.6} {...p}>
    <path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0" />
    <circle cx="12" cy="19.5" r="1" fill="currentColor" />
  </svg>
)
export const IconPulse = (p) => (
  <svg {...base} {...p}>
    <path d="M2 12h5l2-6 4 12 2.5-6H22" />
  </svg>
)
export const IconBroker = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="m7 15 3-3 2 2 4-5" />
  </svg>
)
export const IconSocket = (p) => (
  <svg {...base} {...p}>
    <path d="M4 14l6-6 2 2-6 6zM14 4l6 6M12 12l3 3M17 7l-3 3" />
    <path d="M10 18l-2 2" />
  </svg>
)
export const IconChevronDown = (p) => (
  <svg {...base} strokeWidth={2.6} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)
