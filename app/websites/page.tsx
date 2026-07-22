import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Websites",
};

const websites = [
  { slug: "brookings", name: "Brookings" },
  { slug: "vilcek", name: "Vilcek" },
  { slug: "biointeractive", name: "HHMI BioInteractive" },
  { slug: "sontag", name: "Sontag" },
  { slug: "homeplanetfund", name: "Home Planet Fund" },
];

export default function Websites() {
  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-semibold mb-8">Websites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {websites.map((site) => (
          <Link
            key={site.slug}
            href={`/websites/${site.slug}`}
            className="block rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <h2 className="text-lg font-medium">{site.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}