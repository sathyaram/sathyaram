import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Websites",
};

const websites = [
  {
    slug: "brookings",
    title: "The Brookings Institute",
    subtitle: "A mission-driven thinktank center.",
    year: "2020",
    agency: "Teal Media",
    tags: ["WordPress", "JavaScript", "Custom HTML+CSS"],
    accent: "#93b8f2",
  },
  {
    slug: "vilcek",
    title: "Vilcek Foundation",
    subtitle: "A celebration of immigrants & the arts.",
    year: "2020",
    agency: "ForumOne",
    tags: ["WordPress", "JavaScript", "Styled Components"],
    accent: "#c9a9e0",
  },
  {
    slug: "biointeractive",
    title: "HHMI BioInteractive",
    subtitle: "Netflixing science, for kids.",
    year: "2020",
    agency: "ForumOne",
    tags: ["Drupal 8", "JavaScript", "Styled Components"],
    accent: "#f2b880",
  },
  {
    slug: "sontag",
    title: "The Sontag Foundation",
    subtitle: "The definitive enterprise for brain cancer research.",
    year: "2021",
    agency: "Push10",
    tags: ["WordPress", "JavaScript", "Styled Components"],
    accent: "#f0a8b4",
  },
  {
    slug: "homeplanetfund",
    title: "Home Planet Fund",
    subtitle: "Patagonia's greenroots foundation.",
    year: "2024",
    agency: "Teal Media",
    tags: ["WordPress", "Custom CSS", "JavaScript"],
    accent: "#8fd9c4",
  },
];

export default function Websites() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Websites
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          A selection of institutional and foundation websites I&apos;ve built.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {websites.map((site) => (
            <Link
              key={site.slug}
              href={`/websites/${site.slug}`}
              className="block overflow-hidden rounded-3xl border border-border transition-colors hover:border-foreground/30"
            >
              <div className="h-1.5" style={{ backgroundColor: site.accent }} />
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  {site.agency} · {site.year}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold">
                  {site.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{site.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {site.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
