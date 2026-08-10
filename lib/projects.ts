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
  /** Shown next to the year on the card. */
  tech: string;
  /** One line, same register as the website cards: what it is, not how it works. */
  blurb: string;
  /** Two-stop fallback, and the hover outline's colours in every case — see
   *  .gradient-ring in globals.css, which only ever takes a from/to pair. */
  from: string;
  to: string;
  /** Full gradient string, for the cards whose palette doesn't reduce to two
   *  stops. Overrides from/to on the card fill only. */
  gradient?: string;
  /** Whether it appears on the homepage. Its case study stays live and
   *  linkable either way — this only governs whether anything on the site
   *  points at it. */
  onHomepage: boolean;
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
    tech: "Next.js",
    blurb: "Real exhaust recordings, played side by side.",
    from: "#a51a26",
    to: "#f42737",
    onHomepage: false,
  },
  {
    slug: "springtuner",
    title: "Spring Tuner",
    year: "2026",
    tech: "Next.js",
    blurb: "Spring easing for CSS, tuned by feel.",
    // The app's own sky blue, run against a navy. Ordered navy-first because
    // the card's title and blurb sit over the top-left corner: white on
    // #7dd3fc measures 1.67:1, where the same pair the other way round is
    // 15.5:1. Same two colours, only the end they start from differs.
    from: "#12305f",
    to: "#7dd3fc",
    onHomepage: true,
  },
  {
    slug: "spellbook",
    title: "Harry Potter Spellbook",
    year: "2026",
    tech: "Next.js",
    blurb: "Ninety-two spells, and a wand to practise them.",
    // Rich purple into a muted gold. The purple replaces a near-black that
    // was fine behind the card's white text but left the case-study title's
    // opening letters at 1.06:1 against the dark page — this reads as a colour
    // rather than as an absence, and still carries white type at 9.4:1.
    from: "#5b2f8c",
    to: "#c9a227",
    onHomepage: true,
  },
  {
    slug: "unslop",
    title: "Unslop",
    year: "2026",
    tech: "Next.js",
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
    onHomepage: false,
  },
];

/**
 * The ones the site actually points at. Everything downstream reads this
 * rather than projectOrder — the grid, the sitemap, and the prev/next cycle
 * below — so hiding a project removes it from all three at once and can't
 * leave it half-listed.
 *
 * Same convention the websites use for biointeractive: a case study that
 * nothing links to stays reachable by URL but isn't advertised, and it goes
 * into the sitemap the day it goes onto the grid.
 */
export const homepageProjects = projectOrder.filter((p) => p.onHomepage);

export function getAdjacentProjects(slug: string) {
  // Cycles the visible set only. Paging out of a listed project and into an
  // unlisted one would surface exactly what hiding it was meant to avoid, and
  // an unlisted project gets no prev/next at all (findIndex returns -1, and
  // the case study renders the nav only when both ends exist).
  const index = homepageProjects.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  const count = homepageProjects.length;
  const previous = homepageProjects[(index - 1 + count) % count];
  const next = homepageProjects[(index + 1) % count];
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
