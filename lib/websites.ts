// Canonical order for the Next/Previous links on each website case study —
// same order the homepage grid uses, and the same list the sitemap reads.
// biointeractive used to sit outside this list because nothing linked to it;
// it joined the grid in v8.2 and so joined this on the same day, which is the
// rule the sitemap comment describes.
//
// The order follows the grid's span rhythm (2-3 / 3-2 / 2-3) rather than
// date — see the note on `featured` in app/page.tsx.
//
// Named for websites rather than "projects" since v8.2: /projects is now its
// own section of self-initiated work (see lib/projects.ts), and a
// `projectOrder` holding client websites would be actively misleading.
export const websiteOrder = [
  { slug: "brookings", title: "The Brookings Institution" },
  { slug: "homeplanetfund", title: "Home Planet Fund" },
  { slug: "vilcek", title: "The Vilcek Foundation" },
  { slug: "sontag", title: "The Sontag Foundation" },
  { slug: "biointeractive", title: "Howard Hughes' BioInteractive" },
  { slug: "llr", title: "South Carolina LLR" },
];

export function getAdjacentWebsites(slug: string) {
  const index = websiteOrder.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  const previous = websiteOrder[(index - 1 + websiteOrder.length) % websiteOrder.length];
  const next = websiteOrder[(index + 1) % websiteOrder.length];
  return { previous, next };
}
