/**
 * Client website work. The whole card definition lives here rather than in
 * app/page.tsx, matching lib/projects.ts, because four things read it now: the
 * homepage grid, the prev/next links, the sitemap, and each case study's
 * social card. It used to be split across two lists that had to be kept in
 * step by hand, which is exactly the kind of duplication that quietly rots.
 *
 * The order follows the grid's span rhythm (2-3 / 3-2 / 2-3) rather than date.
 * Naming the section "websites" rather than "projects" matters since v8.2:
 * /projects is now its own section of self-initiated work.
 */
export type Website = {
  slug: string;
  title: string;
  year: string;
  /** Shown next to the year on the card. */
  tech: string;
  /** One line, the same sentence its case study opens with. */
  blurb: string;
  /** Hover-outline colours, and the fill unless `gradient` overrides it. */
  from: string;
  to: string;
  gradient?: string;
  span: string;
  /** A cut-out standing in for the client, floated on the gradient. */
  image: string;
  imageScale: number;
};

// Colours sampled from each client's live site. Each gradient runs from a deep
// shade (top-left, behind the text) to the brand colour (bottom-right, behind
// the artwork) so light type stays legible across the whole card.
export const websiteCards: Website[] = [
  {
    slug: "brookings",
    title: "The Brookings Institution",
    year: "2024",
    tech: "WordPress",
    blurb: "Nonpartisan research for decisionmakers.",
    from: "#022A4E",
    to: "#00649F",
    span: "lg:col-span-2",
    image: "/websites/assets/brookings.webp",
    imageScale: 1.25,
  },
  {
    slug: "homeplanetfund",
    title: "Home Planet Fund",
    year: "2024",
    tech: "WordPress",
    blurb: "Patagonia's grassroots climate fund.",
    from: "#8C382C",
    to: "#F59431",
    span: "lg:col-span-3",
    image: "/websites/assets/homeplanet.png",
    imageScale: 1.4,
  },
  {
    slug: "vilcek",
    title: "The Vilcek Foundation",
    year: "2020",
    tech: "WordPress",
    blurb: "A celebration of immigrants & the arts.",
    from: "#5C4433",
    to: "#E3D2B4",
    span: "lg:col-span-3",
    image: "/websites/assets/vilcek.webp",
    imageScale: 1.55,
  },
  {
    slug: "sontag",
    title: "The Sontag Foundation",
    year: "2021",
    tech: "WordPress",
    blurb: "The definitive enterprise for brain cancer research.",
    from: "#042342",
    to: "#2B86E0",
    span: "lg:col-span-2",
    image: "/websites/assets/sontag.png",
    imageScale: 1.25,
  },
  {
    slug: "biointeractive",
    title: "Howard Hughes' BioInteractive",
    year: "2019",
    tech: "Drupal 8",
    blurb: "Netflixing science, for kids.",
    // Their own teal and lime, but starting a step deeper than the brand teal:
    // #058d96 puts white title text at 3.99:1, under the 4.5 needed, where
    // #04646f reads 6.87:1 and is still recognisably the same colour.
    from: "#04646f",
    to: "#8ac341",
    span: "lg:col-span-2",
    // The gecko from the BioInteractive logo, lifted out of the wordmark as
    // its own vector so it scales cleanly at card size.
    image: "/websites/assets/biointeractive-gecko.svg",
    imageScale: 1.15,
  },
  {
    slug: "llr",
    title: "South Carolina LLR",
    year: "2019",
    tech: "Grav CMS",
    blurb: "Licensing and workplace safety for a whole state.",
    // Ruby straight into sapphire, both from their shield mark. The mark also
    // carries a green, but running all three put a band of it across the
    // middle of the card and the gradient stopped reading as one move. Ruby
    // leads because the title sits over it and it holds white at 6.74:1.
    from: "#b11e3a",
    to: "#3f8ba2",
    span: "lg:col-span-3",
    image: "/websites/assets/llr-badge.svg",
    imageScale: 1.05,
  },
];

/** Order for the Next/Previous links, derived so it can't drift from the grid. */
export const websiteOrder = websiteCards.map(({ slug, title }) => ({ slug, title }));

export function getAdjacentWebsites(slug: string) {
  const index = websiteOrder.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  const previous = websiteOrder[(index - 1 + websiteOrder.length) % websiteOrder.length];
  const next = websiteOrder[(index + 1) % websiteOrder.length];
  return { previous, next };
}
