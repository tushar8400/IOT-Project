const PILLARS = [
  // [x, ceilingY, floorY, width]
  [70, 14, 166, 26], [150, 30, 142, 18], [215, 42, 124, 12], [262, 52, 111, 8],
  [645, 14, 166, 26], [572, 30, 142, 18], [517, 42, 124, 12], [482, 52, 111, 8],
]
const CARS = [
  // [x, y, width, height, color]
  [585, 120, 58, 24, '#1c232c'], [532, 108, 38, 16, '#2a323d'],
  [10, 128, 56, 24, '#8d96a2'], [110, 112, 40, 18, '#1c232c'], [345, 88, 22, 9, '#2a323d'],
]
const LIGHTS = [
  [120, 0, 318, 59], [260, 0, 345, 59], [380, 0, 380, 59], [500, 0, 415, 59], [640, 0, 442, 59],
]
const LANES = [
  [90, 190, 318, 100], [250, 190, 350, 100], [450, 190, 410, 100], [610, 190, 440, 100],
]

export default function GarageArt({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 700 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="g-ceil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#262c34" /><stop offset="1" stopColor="#59626d" />
        </linearGradient>
        <linearGradient id="g-floor" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#3b434c" /><stop offset="1" stopColor="#8a949f" />
        </linearGradient>
        <linearGradient id="g-wall" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#707a86" /><stop offset="1" stopColor="#9aa4af" />
        </linearGradient>
        <radialGradient id="g-glow" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#fff" stopOpacity=".85" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <pattern id="g-stripe" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="4" height="8" fill="#1a1d22" /><rect x="4" width="4" height="8" fill="#e9c12f" />
        </pattern>
      </defs>

      {/* room */}
      <rect width="700" height="190" fill="#6b7580" />
      <polygon points="0,0 700,0 460,60 300,60" fill="url(#g-ceil)" />
      <polygon points="0,190 700,190 460,100 300,100" fill="url(#g-floor)" />
      <polygon points="0,0 300,60 300,100 0,190" fill="url(#g-wall)" />
      <polygon points="700,0 460,60 460,100 700,190" fill="url(#g-wall)" opacity=".9" />
      <rect x="300" y="60" width="160" height="40" fill="#b3bcc6" />
      <rect x="330" y="72" width="40" height="28" fill="#4a525c" />

      {/* ceiling lights */}
      {LIGHTS.map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth="9" opacity=".18" strokeLinecap="round" />
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth="3.2" strokeDasharray="22 12" opacity=".95" />
        </g>
      ))}

      {/* floor lanes + glow */}
      {LANES.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth="2.5" opacity=".45" />
      ))}
      <ellipse cx="380" cy="150" rx="190" ry="26" fill="url(#g-glow)" opacity=".5" />

      {/* parked cars */}
      {CARS.map(([x, y, w, h, c], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx={h * 0.35} fill={c} />
          <rect x={x + w * 0.18} y={y + h * 0.12} width={w * 0.64} height={h * 0.38} rx={h * 0.18} fill="#0e1318" opacity=".7" />
          <circle cx={x + w * 0.22} cy={y + h * 0.78} r={h * 0.1} fill="#ff4d4d" opacity=".8" />
          <circle cx={x + w * 0.78} cy={y + h * 0.78} r={h * 0.1} fill="#ff4d4d" opacity=".8" />
        </g>
      ))}

      {/* pillars with yellow/black base */}
      {PILLARS.map(([x, c, f, w], i) => {
        const h = f - c
        const band = h * 0.2
        return (
          <g key={i}>
            <rect x={x} y={c} width={w} height={h} fill="#cdd2d8" />
            <rect x={x} y={c} width={w * 0.28} height={h} fill="#fff" opacity=".35" />
            <rect x={x + w * 0.75} y={c} width={w * 0.25} height={h} fill="#000" opacity=".12" />
            <rect x={x} y={f - band} width={w} height={band} fill="url(#g-stripe)" />
          </g>
        )
      })}

      {/* P sign */}
      <g transform="translate(0 26)">
        <rect x="476" y="20" width="4" height="62" fill="#4d5560" />
        <rect x="462" y="2" width="32" height="34" rx="4" fill="#1d5fe0" stroke="#fff" strokeWidth="2.5" />
        <text x="478" y="28" textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff" fontFamily="Inter,sans-serif">P</text>
      </g>
    </svg>
  )
}