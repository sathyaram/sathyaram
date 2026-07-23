/**
 * Ported from the old site's nav monogram: an "S" mark plus an "R" mark,
 * the R carrying the original blue gradient. The S uses currentColor so it
 * still reads in both themes.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 62.5 28.7"
      role="img"
      aria-label="Sathya Ram"
      className={className}
    >
      <linearGradient id="logo-gradient" gradientUnits="userSpaceOnUse" fy="90%">
        <stop offset="0" stopColor="rgba(112, 213, 255, 0.92)" />
        <stop offset="1" stopColor="rgba(0, 89, 188, 0.92)" />
      </linearGradient>
      <polygon
        fill="currentColor"
        points="27.9,14.4 13,8.1 23.4,19.8 4.5,28.4 15.7,18.4 0.4,0.3 27.9,7.1"
      />
      <polyline
        fill="url(#logo-gradient)"
        points="30.1,6.8 30.1,28.4 35.8,13.9 49.6,8.1 39.2,19.8 58,28.5 46.9,18.4 62.3,0.4 30.1,6.8"
      />
    </svg>
  );
}
