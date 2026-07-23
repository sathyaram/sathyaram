import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colophon",
};

type ColophonItem = { title: string; detail: string; href?: string };

const sections: { heading: string; items: ColophonItem[] }[] = [
  {
    heading: "Framework",
    items: [
      { title: "Next.js 16", detail: "App Router, Turbopack" },
      { title: "React 19", detail: "" },
      { title: "TypeScript", detail: "" },
    ],
  },
  {
    heading: "Design & Motion",
    items: [
      { title: "Tailwind CSS v4", detail: "styling" },
      { title: "three.js", detail: "the starfield" },
      { title: "Bricolage Grotesque", detail: "display type" },
      { title: "Work Sans", detail: "body type" },
    ],
  },
  {
    heading: "Built with",
    items: [{ title: "Claude Code", detail: "pair-programmed the build" }],
  },
  {
    heading: "Inspiration",
    items: [
      {
        title: "Seán Halpin",
        detail: "card hover easing, light-mode gradient",
        href: "https://seanhalpin.xyz",
      },
      {
        title: "Yasin Genc",
        detail: "per-letter text reveal",
        href: "https://yasingenc.net",
      },
    ],
  },
];

export default function Colophon() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Colophon
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          Notes on what this site is built with, and where a few ideas came
          from.
        </p>

        {sections.map((section) => (
          <div key={section.heading} className="mt-12">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
              {section.heading}
            </h2>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-3"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-accent"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span className="font-medium">{item.title}</span>
                  )}
                  {item.detail && (
                    <span className="text-sm text-muted">{item.detail}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
