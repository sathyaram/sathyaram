// Canonical order for the Next/Previous project links on each case study —
// same order the homepage grid uses. biointeractive is deliberately left
// out: it isn't on the homepage grid either (still an open question, not a
// finished case study), so it shouldn't surface via prev/next cycling when
// nothing else on the site links to it.
export const projectOrder = [
  { slug: "brookings", title: "The Brookings Institution" },
  { slug: "homeplanetfund", title: "Home Planet Fund" },
  { slug: "vilcek", title: "The Vilcek Foundation" },
  { slug: "sontag", title: "The Sontag Foundation" },
];

export function getAdjacentProjects(slug: string) {
  const index = projectOrder.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  const previous = projectOrder[(index - 1 + projectOrder.length) % projectOrder.length];
  const next = projectOrder[(index + 1) % projectOrder.length];
  return { previous, next };
}
