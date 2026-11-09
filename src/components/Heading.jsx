export default function Heading({ id, color, children }) {
  return (
    <h2 id={id}>
      {children}
      <svg viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true">
        <path d="M2 8c10-8 18 6 29-1s18 5 29-1 18 5 29-1 18 4 29-2" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    </h2>
  )
}
