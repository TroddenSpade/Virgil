// The Virgil monogram: a Roman "V" within a laurel wreath.
export default function Logo({ size = 34, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Virgil"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <circle cx="32" cy="32" r="25.5" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.35" />
      {/* laurel sprigs */}
      <g fill="currentColor" opacity="0.85">
        <path d="M20 18c3 4 4.5 9 4 15-2.5-3-4.5-6-5-9-.5-2.5-.1-4.6 1-6Z" />
        <path d="M15.5 24c3 3 5 7 5.5 12-2.6-2.4-4.6-5-5.5-7.8-.7-2-.6-3.6 0-4.2Z" />
        <path d="M44 18c-3 4-4.5 9-4 15 2.5-3 4.5-6 5-9 .5-2.5.1-4.6-1-6Z" />
        <path d="M48.5 24c-3 3-5 7-5.5 12 2.6-2.4 4.6-5 5.5-7.8.7-2 .6-3.6 0-4.2Z" />
      </g>
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontFamily="'Cinzel', Georgia, serif"
        fontSize="30"
        fontWeight="700"
        fill="currentColor"
      >
        V
      </text>
    </svg>
  )
}
