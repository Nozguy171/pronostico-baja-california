export function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="19" stroke="currentColor" strokeWidth="1.4" opacity=".35" />
        <path
          d="M14 26.5c0-3.9 3.1-7 7-7 .4-3.7 3.5-6.5 7.3-6.5 4.1 0 7.5 3.3 7.5 7.4 0 3.7-2.7 6.8-6.3 7.4H14Z"
          fill="currentColor"
          opacity=".22"
        />
        <path d="M10 29.5h18.5M15 33h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 12v4M11 14h4" stroke="var(--sun)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  )
}
