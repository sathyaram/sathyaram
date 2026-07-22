import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Designs",
};

const designs = [
  { slug: "graphic-design", name: "Graphic Design" },
  { slug: "interface-design", name: "Interface Design" },
];

export default function Designs() {
  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-semibold mb-8">Designs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {designs.map((item) => (
          <Link
            key={item.slug}
            href={`/designs/${item.slug}`}
            className="block rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <h2 className="text-lg font-medium">{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}