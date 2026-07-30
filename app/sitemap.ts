import type { MetadataRoute } from "next";
import { projectOrder } from "@/lib/projects";

const SITE = "https://sathyaram.com";

/**
 * Case study entries are derived from lib/projects.ts rather than hardcoded,
 * so the sitemap can't silently drift out of sync with the pages that
 * actually exist. biointeractive is deliberately listed separately: it isn't
 * in projectOrder (it's not linked from the homepage grid yet, pending
 * v8.1), but the page is live and worth indexing.
 *
 * Priorities are relative, not absolute — the homepage leads, the work
 * itself comes next, then supporting pages. Deliberately omits /api/* and
 * the v7 redirect sources, which should not be indexed as destinations.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const caseStudies = [...projectOrder.map((p) => p.slug), "biointeractive"].map(
    (slug) => ({
      url: `${SITE}/websites/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    }),
  );

  return [
    {
      url: SITE,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...caseStudies,
    {
      url: `${SITE}/about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE}/contact`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE}/colophon`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
