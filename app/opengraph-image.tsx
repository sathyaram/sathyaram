import { ImageResponse } from "next/og";

export const alt = "Sathya Ram — Developer & Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/*
 * The social card people see when the site is shared. Rendered at build time
 * rather than kept as a binary, so it can't drift out of sync with the site's
 * own colours.
 *
 * Deliberately no custom font: the display faces come from next/font/google,
 * which only leaves hashed .woff2 files in .next — a format satori can't read,
 * and a path that isn't stable to depend on. Brand recognition here rests on
 * the exact palette and the logo mark instead of the typeface.
 */

// Fixed rather than random so the card is byte-identical between builds.
const stars = [
  { x: 6, y: 14, r: 3, o: 0.9 }, { x: 14, y: 62, r: 2, o: 0.5 },
  { x: 22, y: 28, r: 2, o: 0.7 }, { x: 31, y: 78, r: 3, o: 0.6 },
  { x: 40, y: 12, r: 2, o: 0.45 }, { x: 47, y: 52, r: 2, o: 0.35 },
  { x: 58, y: 22, r: 3, o: 0.75 }, { x: 66, y: 70, r: 2, o: 0.5 },
  { x: 73, y: 34, r: 2, o: 0.6 }, { x: 81, y: 84, r: 3, o: 0.55 },
  { x: 88, y: 20, r: 2, o: 0.8 }, { x: 94, y: 56, r: 3, o: 0.65 },
  { x: 10, y: 88, r: 2, o: 0.4 }, { x: 52, y: 90, r: 2, o: 0.45 },
  { x: 36, y: 44, r: 2, o: 0.3 }, { x: 78, y: 8, r: 2, o: 0.5 },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b0f1a",
          padding: "0 88px",
          position: "relative",
        }}
      >
        {stars.map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.r * 2,
              height: s.r * 2,
              borderRadius: s.r * 2,
              background: "#ffffff",
              opacity: s.o,
            }}
          />
        ))}

        {/* The SR monogram, same geometry as components/Logo.tsx. */}
        <svg width="150" height="69" viewBox="0 0 62.5 28.7" style={{ marginBottom: 44 }}>
          <polygon
            fill="#ffffff"
            points="27.9,14.4 13,8.1 23.4,19.8 4.5,28.4 15.7,18.4 0.4,0.3 27.9,7.1"
          />
          <polyline
            fill="#3b9fe0"
            points="30.1,6.8 30.1,28.4 35.8,13.9 49.6,8.1 39.2,19.8 58,28.5 46.9,18.4 62.3,0.4 30.1,6.8"
          />
        </svg>

        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 700,
            letterSpacing: "-0.035em",
            color: "#70d5ff",
            lineHeight: 1.05,
          }}
        >
          Sathya Ram
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#f2f0ec",
            marginTop: 10,
          }}
        >
          Developer &amp; Designer
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9a9a9a",
            marginTop: 34,
            letterSpacing: "0.08em",
          }}
        >
          sathyaram.com
        </div>
      </div>
    ),
    size,
  );
}
