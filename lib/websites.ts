// Canonical order for the Next/Previous links on each website case study —
// same order the homepage grid uses. biointeractive is deliberately left
// out: it isn't on the homepage grid either (still an open question, not a
// finished case study), so it shouldn't surface via prev/next cycling when
// nothing else on the site links to it.
//
// Named for websites rather than "projects" since v8.2: /projects is now its
// own section of self-initiated work (see lib/projects.ts), and a
// `projectOrder` holding client websites would be actively misleading.
export const websiteOrder = [
  { slug: "brookings", title: "The Brookings Institution" },
  { slug: "homeplanetfund", title: "Home Planet Fund" },
  { slug: "vilcek", title: "The Vilcek Foundation" },
  { slug: "sontag", title: "The Sontag Foundation" },
];

export function getAdjacentWebsites(slug: string) {
  const index = websiteOrder.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  const previous = websiteOrder[(index - 1 + websiteOrder.length) % websiteOrder.length];
  const next = websiteOrder[(index + 1) % websiteOrder.length];
  return { previous, next };
}
