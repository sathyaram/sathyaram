import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type CardData = {
  title: string;
  /** The one-liner the case study opens with. */
  blurb: string;
  /** "TEAL MEDIA · 2024" on client work, "2026 · NEXT.JS" on projects. */
  kicker: string;
  from: string;
  to: string;
  gradient?: string;
};

/**
 * The social card for a single case study.
 *
 * Every page used to share the site's one generic card, so a link to a
 * specific project looked identical to a link to the homepage. This gives each
 * one its own, built from the same data the homepage card renders from, so the
 * two can't drift and neither can go stale when a gradient changes.
 *
 * Deliberately no custom font, matching app/opengraph-image.tsx: the display
 * faces come from next/font/google, which leaves only hashed .woff2 files in
 * .next — a format satori can't read, at a path not worth depending on.
 * Recognition rests on the palette instead.
 */
export function caseStudyOgImage({ title, blurb, kicker, from, to, gradient }: CardData) {
  const fill = gradient ?? `linear-gradient(135deg, ${from} 0%, ${to} 100%)`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0f1a",
          padding: 72,
          position: "relative",
        }}
      >
        {/* The project's own gradient, as the card's ground. Inset rather than
            full-bleed so the site's near-black still frames it and the whole
            set reads as one family at thumbnail size. */}
        <div
          style={{
            position: "absolute",
            // Explicit box, not `inset: 0`: satori does not implement the
            // inset shorthand, so the layer collapses to nothing and the card
            // renders as bare background with no error to explain it.
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            // backgroundImage, not the background shorthand: satori parses
            // gradients only from the longhand and silently renders nothing
            // from the shorthand, which is a blank card rather than an error.
            backgroundImage: fill,
          }}
        />
        {/* Darkens the lower half so white type stays legible over whichever
            end of the gradient lands there. Several of these palettes finish
            on a bright stop: Unslop ends on yellow, BioInteractive on lime. */}
        <div
          style={{
            position: "absolute",
            // Explicit box, not `inset: 0`: satori does not implement the
            // inset shorthand, so the layer collapses to nothing and the card
            // renders as bare background with no error to explain it.
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundImage:
              "linear-gradient(180deg, rgba(11,15,26,0.10) 0%, rgba(11,15,26,0.72) 100%)",
          }}
        />

        <div style={{ display: "flex", position: "relative" }}>
          {/* The SR monogram, same geometry as components/Logo.tsx. */}
          <svg width="104" height="48" viewBox="0 0 62.5 28.7">
            <polygon
              fill="#ffffff"
              points="27.9,14.4 13,8.1 23.4,19.8 4.5,28.4 15.7,18.4 0.4,0.3 27.9,7.1"
            />
            <polyline
              fill="#ffffff"
              points="30.1,6.8 30.1,28.4 35.8,13.9 49.6,8.1 39.2,19.8 58,28.5 46.9,18.4 62.3,0.4 30.1,6.8"
            />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.72)",
              marginBottom: 18,
            }}
          >
            {kicker.toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "rgba(255,255,255,0.82)",
              marginTop: 20,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {blurb}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(255,255,255,0.6)",
              marginTop: 30,
              letterSpacing: "0.08em",
            }}
          >
            sathyaram.com
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
