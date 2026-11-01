/** Front-view white sedan (inline SVG, no external image needed). */
export default function CarImage({ className = '', dimmed = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: dimmed ? 0.35 : 1, filter: dimmed ? 'grayscale(1)' : 'none' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="c-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".55" stopColor="#eef1f6" />
          <stop offset="1" stopColor="#c9d1dd" />
        </linearGradient>
        <linearGradient id="c-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7d8da3" />
          <stop offset=".5" stopColor="#3b4758" />
          <stop offset="1" stopColor="#1b2330" />
        </linearGradient>
        <linearGradient id="c-bumper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfe5ee" />
          <stop offset="1" stopColor="#aab4c4" />
        </linearGradient>
        <radialGradient id="c-lamp" cx=".5" cy=".5" r=".6">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".5" stopColor="#bfe3ff" />
          <stop offset="1" stopColor="#7aa5c9" />
        </radialGradient>
      </defs>

      <ellipse cx="100" cy="91" rx="82" ry="6" fill="rgba(15,23,42,.22)" />

      {/* mirrors */}
      <rect x="26" y="36" width="14" height="9" rx="4" fill="#e3e8f0" stroke="#aab4c3" strokeWidth=".8" />
      <rect x="160" y="36" width="14" height="9" rx="4" fill="#e3e8f0" stroke="#aab4c3" strokeWidth=".8" />

      {/* body */}
      <path
        d="M22 72c0-9 3-15 10-18l12-24c3-7 9-11 17-11h78c8 0 14 4 17 11l12 24c7 3 10 9 10 18v8c0 3-2 5-5 5h-15v-5H42v5H27c-3 0-5-2-5-5z"
        fill="url(#c-body)"
        stroke="#b3bdcb"
        strokeWidth="1"
      />
      {/* roof */}
      <path d="M58 20h84l-6-6c-2-2-5-3-8-3H72c-3 0-6 1-8 3z" fill="#fff" opacity=".9" />

      {/* windshield */}
      <path d="M52 34l9-16c1-2 3-3 5-3h68c2 0 4 1 5 3l9 16z" fill="url(#c-glass)" />
      <path d="M63 32l6-12h22l-5 12z" fill="#fff" opacity=".2" />
      <path d="M118 32l4-12h14l5 12z" fill="#fff" opacity=".1" />
      <line x1="100" y1="16" x2="100" y2="34" stroke="#0f1720" strokeWidth="1" opacity=".4" />

      {/* hood */}
      <path d="M46 46h108l4 8H42z" fill="#f8fafc" />
      <path d="M62 46l8 8M138 46l-8 8" stroke="#c9d1dd" strokeWidth="1.2" />

      {/* headlights */}
      <path d="M32 55c8-2 17 0 26 5l-1 9c-9-1-18-3-25-7z" fill="#f4f7fb" stroke="#9fabbc" strokeWidth=".8" />
      <path d="M168 55c-8-2-17 0-26 5l1 9c9-1 18-3 25-7z" fill="#f4f7fb" stroke="#9fabbc" strokeWidth=".8" />
      <ellipse cx="46" cy="62" rx="6" ry="4" fill="url(#c-lamp)" />
      <ellipse cx="154" cy="62" rx="6" ry="4" fill="url(#c-lamp)" />
      <path d="M36 58c6-1 12 0 18 2" stroke="#5aa9e6" strokeWidth="1.4" fill="none" />
      <path d="M164 58c-6-1-12 0-18 2" stroke="#5aa9e6" strokeWidth="1.4" fill="none" />

      {/* grille */}
      <path d="M72 58h56l3 12H69z" fill="#262e3a" />
      <path d="M74 62h52M73 66h54" stroke="#4b5667" strokeWidth="1" />
      <circle cx="100" cy="64" r="5" fill="#d7dde7" stroke="#7d8999" />
      <circle cx="100" cy="64" r="2" fill="#4b5667" />

      {/* bumper + plate */}
      <path d="M38 72h124l-3 9H41z" fill="url(#c-bumper)" />
      <rect x="86" y="73" width="28" height="7" rx="1.5" fill="#fff" stroke="#8d99ab" strokeWidth=".8" />
      <rect x="62" y="75" width="18" height="3.5" rx="1.7" fill="#2b3442" opacity=".7" />
      <rect x="120" y="75" width="18" height="3.5" rx="1.7" fill="#2b3442" opacity=".7" />

      {/* wheels */}
      <rect x="27" y="72" width="17" height="17" rx="4" fill="#161b23" />
      <rect x="156" y="72" width="17" height="17" rx="4" fill="#161b23" />
    </svg>
  )
}
