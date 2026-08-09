import type { MetadataRoute } from "next";
import { projectOrder } from "@/lib/projects";
import { websiteOrder } from "@/lib/websites";
import { SITE_URL } from "@/lib/site";

/**
 * Both sets of case studies come straight from their lib/ lists — the same
 * ones that drive the homepage grids and the prev/next links — so the sitemap
 * can't drift out of sync with what the site actually presents.
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

  const caseStudies = websiteOrder.map((website) => ({
    url: `${SITE_URL}/websites/${website.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const projects = projectOrder.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...caseStudies,
    ...projects,
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/colophon`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
