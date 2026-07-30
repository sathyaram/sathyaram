import type { MetadataRoute } from "next";
import { projectOrder } from "@/lib/projects";

const SITE = "https://sathyaram.com";

/**
 * Case studies come straight from lib/projects.ts — the same list that drives
 * the homepage grid and the prev/next links — so the sitemap can't drift out
 * of sync with what the site actually presents.
 *
 * That deliberately means four, not five. The biointeractive page exists but
 * nothing links to it yet (it's slated for v8.1), and pointing crawlers at an
 * orphan page nobody can navigate to isn't doing it any favours. It gets
 * added here the same day it's linked from the grid.
 *
 * Priorities are relative, not absolute — the homepage leads, the work
 * itself comes next, then supporting pages. Deliberately omits /api/* and
 * the v7 redirect sources, which should not be indexed as destinations.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const caseStudies = projectOrder.map((project) => ({
    url: `${SITE}/websites/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

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
