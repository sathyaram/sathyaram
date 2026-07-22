import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Designs",
};

const designs = [
  {
    slug: "graphic-design",
    title: "Graphic Design",
    subtitle: "Branding, logos, and print work.",
    accent: "#c9a9e0",
  },
  {
    slug: "interface-design",
    title: "Interface Design",
    subtitle: "UI, motion, and interaction work.",
    accent: "#93b8f2",
  },
];

export default function Designs() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Designs
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Brand, print, and interface work.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {designs.map((item) => (
            <Link
              key={item.slug}
              href={`/designs/${item.slug}`}
              className="block overflow-hidden rounded-3xl border border-border transition-colors hover:border-foreground/30"
            >
              <div className="h-1.5" style={{ backgroundColor: item.accent }} />
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
