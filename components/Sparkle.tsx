/**
 * Four-point sparkle, our own construction (a single cubic-bezier curve
 * repeated in each quadrant) — tuned for a slightly sharper waist and more
 * elongated points than a plain pinwheel. Inherits color via `currentColor`.
 */
export default function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0c.5 5.4 6.6 11.5 12 12-5.4.5-11.5 6.6-12 12-.5-5.4-6.6-11.5-12-12C5.4 11.5 11.5 5.4 12 0Z" />
    </svg>
  );
}
