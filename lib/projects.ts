import type { CSSProperties } from "react";

/**
 * Self-initiated work — the things nobody briefed. Unlike lib/websites.ts,
 * which only carries slug + title (its card data lives in app/page.tsx), the
 * whole card definition lives here: the homepage grid, the prev/next links and
 * the sitemap all read this one array, so a project can't appear in one and go
 * missing from another. Worth doing here because there are three consumers
 * from day one rather than a list that grew a second use later.
 */
export type Project = {
  slug: string;
  title: string;
  year: string;
  /** One line, same register as the website cards: what it is, not how it works. */
  blurb: string;
  /** Two-stop fallback, and the hover outline's colours in every case — see
   *  .gradient-ring in globals.css, which only ever takes a from/to pair. */
  from: string;
  to: string;
  /** Full gradient string, for the cards whose palette doesn't reduce to two
   *  stops. Overrides from/to on the card fill only. */
  gradient?: string;
  span: string;
};

// Colours sampled from each app's own globals.css, the same way the website
// cards are sampled from each client's live site. Same convention too: the
// deep end sits top-left behind the text so white type stays legible, and the
// brand colour runs to the bottom-right.
export const projectOrder: Project[] = [
  {
    slug: "exhaust-notes",
    title: "Exhaust Notes",
    year: "2026",
    blurb: "Real exhaust recordings, played side by side.",
    from: "#a51a26",
    to: "#f42737",
    span: "sm:col-span-2",
  },
  {
    slug: "springtuner",
    title: "Spring Tuner",
    year: "2026",
    blurb: "Spring easing for CSS, tuned by feel.",
    // Its own sky blue and fuchsia, over a deepened blue — the darks in its
    // stylesheet are UI greys rather than brand colours, so the deep end is
    // derived from the sky stop instead of borrowed from the chrome.
    from: "#123047",
    to: "#f0abfc",
    gradient: "linear-gradient(135deg, #123047 0%, #7dd3fc 55%, #f0abfc 100%)",
    span: "sm:col-span-3",
  },
  {
    slug: "spellbook",
    title: "Harry Potter Spellbook",
    year: "2026",
    blurb: "Ninety-two spells, and a wand to practise them.",
    // Deliberately stops at the deep gold rather than running on to the
    // parchment tones further up its palette: those measure ~1.2:1 on the
    // light-mode background, the same trap the Vilcek card's light stop falls
    // into.
    from: "#05060c",
    to: "#c39a2e",
    span: "sm:col-span-3",
  },
  {
    slug: "unslop",
    title: "Unslop",
    year: "2026",
    blurb: "Strips the tells out of AI-written text.",
    // The app itself is deliberately monochrome, which gives a card nothing to
    // sample. CMYK stands in — literally all four inks, and process colour is
    // at least on-topic for a tool about cleaning up copy. K leads because the
    // title sits over that corner; C/M/Y on their own are far too light to
    // carry white text.
    from: "#00aeef",
    to: "#fff200",
    gradient:
      "linear-gradient(135deg, #1c1c1c 0%, #00aeef 38%, #ec008c 70%, #fff200 100%)",
    span: "sm:col-span-2",
  },
];

export function getAdjacentProjects(slug: string) {
  const index = projectOrder.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  const previous = projectOrder[(index - 1 + projectOrder.length) % projectOrder.length];
  const next = projectOrder[(index + 1) % projectOrder.length];
  return { previous, next };
}

/** The card fill: the multi-stop string where one is given, the two-stop
 *  construction otherwise. Kept here so the card doesn't have to know which
 *  projects needed the extra stops. */
export function projectGradient(project: Project): CSSProperties["background"] {
  return (
    project.gradient ??
    `linear-gradient(135deg, ${project.from} 0%, ${project.to} 100%)`
  );
}
