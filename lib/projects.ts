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
  /** Screenshot of the running app, shown in the card corner. */
  screenshot?: string;
  /** Address shown in the screenshot browser bar. */
  screenshotUrl?: string;
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
    screenshot: "/projects/exhaust-notes.jpg",
    title: "Exhaust Notes",
    year: "2026",
    tech: "Next.js",
    blurb: "Real exhaust recordings, played side by side.",
    // Deep ruby into the brighter red, rather than the shallower pair it had.
    // Ordered ruby-first for the usual reason — the title sits over that
    // corner, where the bright red alone is 4.04:1 against white.
    from: "#6e1119",
    to: "#f42737",
    onHomepage: true,
  },
  {
    slug: "springtuner",
    screenshot: "/projects/springtuner.jpg",
    screenshotUrl: "sathyaram.com/springtuner",
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
    screenshot: "/projects/harrypotterspellbook.jpg",
    screenshotUrl: "sathyaram.com/harrypotterspellbook",
    title: "Harry Potter Spellbook",
    year: "2026",
    tech: "Next.js",
    blurb: "Ninety-two spells, and a wand to practise them.",
    // Deep purple through rich purple, with the gold arriving only in the last
    // stretch. A straight two-stop purple-to-gold split the card evenly and the
    // gold ended up co-leading; holding purple to ~68% keeps the card reading
    // as purple with gold as the accent. The deep end also replaces a
    // near-black that was fine behind white card text but left the case-study
    // title's opening letters at 1.06:1 against the dark page.
    from: "#2e1650",
    to: "#c9a227",
    gradient:
      "linear-gradient(135deg, #2e1650 0%, #5b2f8c 42%, #7c47b5 68%, #c9a227 100%)",
    onHomepage: true,
  },
  {
    slug: "unslop",
    screenshot: "/projects/unslop.jpg",
    title: "Unslop",
    year: "2026",
    tech: "Next.js",
    blurb: "Strips the tells out of AI-written text.",
    // The app itself is deliberately monochrome, which gives a card nothing to
    // sample, so process colour stands in — on-topic for a tool about cleaning
    // up copy. Cyan is gone: it made the fill drift blue, and worse, the
    // from/to pair also drives the hover ring, so cyan-to-yellow interpolated
    // straight through green and the outline came out a colour that appears
    // nowhere on the card. K still leads, since magenta alone is 4.25:1
    // against white and the title sits over that corner.
    from: "#ec008c",
    to: "#fff200",
    gradient: "linear-gradient(135deg, #1c1c1c 0%, #ec008c 58%, #fff200 100%)",
    onHomepage: true,
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
