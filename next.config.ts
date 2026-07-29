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

const nextConfig: NextConfig = {
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
      // The resume was served under its versioned filename and is the link
      // most likely to be sitting in someone's inbox or a job application,
      // so it's worth keeping alive even though the file was renamed.
      {
        source: "/SathyaRam_Resume2026.pdf",
        destination: "/resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
