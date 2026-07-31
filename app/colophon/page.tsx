import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ScrollGroup from "@/components/ScrollGroup";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "The tools, type, and technology behind sathyaram.com.",
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
      { title: "Californication", detail: "script type" },
    ],
  },
];

export default function Colophon() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Reveal
          as="h1"
          className="block text-center font-display font-bold leading-[1.05] tracking-[-0.035em] text-logo-blue text-[clamp(2.5rem,7.4vw,5.75rem)]"
          text="Colophon"
        />
        <p className="mt-4 text-center text-muted">
          Notes on what this site is built with, and where a few ideas came
          from.
        </p>

        {sections.map((section) => (
          <ScrollGroup key={section.heading} className="mt-12">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted transition-all duration-700">
              {section.heading}
            </h2>
            <ul className="mt-4 space-y-3 transition-all duration-700">
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
          </ScrollGroup>
        ))}
      </div>
    </div>
  );
}
