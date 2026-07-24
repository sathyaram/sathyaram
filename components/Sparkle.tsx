/**
 * Four-point sparkle, ported 1:1 from seanhalpin.xyz's hero flourish
 * (hp/star-1.svg). Inherits color via `currentColor`.
 */
export default function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 68 68"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z" />
    </svg>
  );
}
