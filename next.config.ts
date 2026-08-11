import type { NextConfig } from "next";

// The v7 site (Pages Router) served case studies from the root — /brookings,
// /sontag, and so on. The rebuild nests them under /websites/, and renamed
// hhmi to biointeractive, so every one of those URLs would otherwise 404 for
// anyone arriving from a search result or an old link.
const CASE_STUDY_MOVES: Record<string, string> = {
  brookings: "brookings",
  sontag: "sontag",
  vilcek: "vilcek",
  homeplanetfund: "homeplanetfund",
  hhmi: "biointeractive",
};

// The Designs section isn't rebuilt yet (planned for v8.1). Sending these to
// the homepage rather than letting them 404, and deliberately NOT permanent:
// a 301 would get cached by browsers and search engines, which we'd then have
// to fight once the real pages exist again. 307 keeps that door open.
const DESIGN_PAGES = [
  "lehigh2018",
  "portal",
  "engineering",
  "fudtruk",
  "lehigh",
  "pokelogos",
  "logos",
];

// Apps that live in their own adjacent repo, exported to static files and
// dropped into public/<slug>/ (see scripts/embed-app.sh). Next serves anything
// in public/ verbatim, so their assets already resolve — but a bare /<slug>
// with no extension isn't a file, and static serving does no directory-index
// resolution, so each one needs an explicit rewrite to its index.html.
//
// Listed here rather than inferred from the directory because next.config runs
// before the filesystem is a safe thing to read at build time on Vercel, and
// because an explicit list is what makes it obvious why /springtuner works.
// Note these are the APPS' own names, which don't all match the slug of the
// case study describing them — the spellbook is written up at
// /projects/spellbook but lives at /harrypotterspellbook, because the route is
// the thing being linked around and the longer name is the recognisable one.
//
// The value is any route the app has BEYOND its index, which needs its own
// rewrite for exactly the same reason the index does — /exhaustnotes/compare
// isn't a file either; the export writes it as compare.html. Most of these
// apps are a single page and so have none.
const EMBEDDED_APPS: Record<string, string[]> = {
  springtuner: [],
  harrypotterspellbook: [],
  unslop: [],
  exhaustnotes: ["compare"],
};

const nextConfig: NextConfig = {
  async rewrites() {
    return Object.entries(EMBEDDED_APPS).flatMap(([slug, routes]) => [
      { source: `/${slug}`, destination: `/${slug}/index.html` },
      { source: `/${slug}/`, destination: `/${slug}/index.html` },
      ...routes.flatMap((route) => [
        { source: `/${slug}/${route}`, destination: `/${slug}/${route}.html` },
        { source: `/${slug}/${route}/`, destination: `/${slug}/${route}.html` },
      ]),
    ]);
  },
  images: {
    // Next 16 defaults images.qualities to [75] and coerces anything else
    // to the nearest allowed value; the panorama + lightbox photos ask for
    // 90, so allow it explicitly (otherwise they silently render at 75).
    qualities: [75, 90],
    // Serve AVIF first (much smaller than WebP), falling back to WebP then
    // the original — addresses Lighthouse's "improve image delivery" on the
    // photography images. Order matters: first Accept-header match wins.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Vercel gives every project a <name>.vercel.app domain and, unlike the
      // custom domains you add yourself, it can't be removed once a real one
      // is attached — so sathyaram.vercel.app serves this entire site a second
      // time, crawlably and identically. Two hosts serving the same pages is
      // duplicate content, and it lets a search engine pick its own preferred
      // one and hold a different snapshot of each.
      //
      // The canonical tags added in lib/seo.ts are the advisory half of the
      // fix; this is the half with teeth. A redirect beats the X-Robots-Tag
      // noindex header Vercel's own guidance suggests, because the duplicate
      // host stops serving the pages at all rather than serving them and
      // asking not to be indexed.
      //
      // Matching the production alias exactly is what keeps preview
      // deployments working: those are sathyaram-git-<branch>-*.vercel.app and
      // sathyaram-<hash>-*.vercel.app, neither of which contains this string.
      // Broadening it to all of .vercel.app would redirect every preview
      // straight to production and make branch deploys impossible to review.
      // It has to stay first in this list, so a request on the wrong host is
      // sent home before any path-level rule rewrites it there.
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "sathyaram.vercel.app" }],
        destination: "https://sathyaram.com/:path*",
        permanent: true,
      },
      ...Object.entries(CASE_STUDY_MOVES).map(([from, to]) => ({
        source: `/${from}`,
        destination: `/websites/${to}`,
        permanent: true,
      })),
      ...DESIGN_PAGES.map((slug) => ({
        source: `/${slug}`,
        destination: "/",
        permanent: false,
      })),
      // Every URL the resume has ever been served from, all pointing at the
      // current file. These are the links most likely to be sitting in
      // someone's inbox or attached to a job application, so they're worth
      // keeping alive even though the file has been renamed twice.
      //
      // The 2025 filename matters for a second reason: Google indexed it, and
      // it was still being surfaced next to the current one. The file itself
      // is long gone from the repo, so nothing outdated was being *served* —
      // but a bare 404 leaves the stale entry to age out on its own schedule,
      // while a 301 consolidates it onto /resume.pdf and gets anyone who
      // clicks the old search result the current document instead of a dead
      // end. Same reasoning for anything else that gets renamed later: add
      // the old name here rather than letting it 404.
      ...["/SathyaRam_Resume2025.pdf", "/SathyaRam_Resume2026.pdf"].map(
        (source) => ({ source, destination: "/resume.pdf", permanent: true }),
      ),
      // A stable, version-free URL to hand out, so the next rename doesn't
      // strand another batch of links. /resume is the thing to put on an
      // application; /resume.pdf stays the file it resolves to.
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
