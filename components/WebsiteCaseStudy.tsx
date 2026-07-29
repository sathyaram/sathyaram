import Link from "next/link";
import Reveal from "./Reveal";
import ScrollGroup from "./ScrollGroup";
import BrowserMockup from "./BrowserMockup";
import CodeBlock, { type CodeLine } from "./CodeBlock";
import { getAdjacentProjects } from "@/lib/projects";

type Stat = { label: string; value: string };

/** A single build detail worth calling out — a punchy name plus a short
 *  paragraph, following the pattern on seanhalpin.xyz/work/docs where each
 *  notable piece of work gets its own named section rather than becoming
 *  another bullet. */
type Highlight = { title: string; body: string };

type WebsiteCaseStudyProps = {
  /** Matches the entry in lib/projects.ts — drives the Next/Previous links
   *  at the bottom of the page. */
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  agency: string;
  /** The project's two-stop brand gradient, matching its homepage card
   *  (see `featured` in app/page.tsx) — used behind the title text. */
  gradientFrom: string;
  gradientTo: string;
  url: string;
  link: string;
  description: string;
  /** Screenshot shown inside the browser chrome. Optional: the mockup is
   *  simply skipped until a real screenshot exists for the project, so
   *  adding one here is all it takes to bring the frame back. */
  image?: string;
  stats: Stat[];
  overview: string[];
  contributions: string[];
  /** Optional named build details, rendered between "What I built" and the
   *  code sample. */
  highlights?: Highlight[];
  codeFilename: string;
  codeLines: CodeLine[];
};

export default function WebsiteCaseStudy({
  slug,
  title,
  subtitle,
  year,
  agency,
  gradientFrom,
  gradientTo,
  url,
  link,
  description,
  image,
  stats,
  overview,
  contributions,
  highlights,
  codeFilename,
  codeLines,
}: WebsiteCaseStudyProps) {
  const { previous, next } = getAdjacentProjects(slug);

  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <ScrollGroup>
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted transition-all duration-700">
            {agency} · {year}
          </p>
          <Reveal
            as="h1"
            segments={[{ text: title, className: "gradient-text-name" }]}
            className="mt-2 block text-center font-display font-bold leading-[1.05] tracking-[-0.035em] text-logo-blue text-[clamp(2.5rem,7.4vw,5.75rem)] transition-all duration-700"
            style={
              {
                "--name-gradient": `linear-gradient(120deg, ${gradientFrom}, ${gradientTo})`,
              } as React.CSSProperties
            }
          />
          <p className="mt-4 text-center text-lg text-muted transition-all duration-700">
            {subtitle}
          </p>
        </ScrollGroup>

        <ScrollGroup>
          <div className="mt-8 flex flex-col items-center gap-3 transition-all duration-700">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              // No overflow-hidden here — the pill needs to visually escape
              // the button's left edge, so each background layer clips
              // itself (rounded-2xl on the layer, not the parent) instead.
              // gap-4 is what actually keeps the url text clear of the
              // pill: real flex spacing scales with however wide "https"
              // renders, unlike a padding value tuned by eye for one string.
              className="group relative inline-flex items-center gap-4 rounded-2xl py-4 pl-6 pr-7 shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Base gradient layer and the hover wipe are separate
                  stacked layers (not a background swap) so the wipe can
                  slide in from the left instead of cross-fading. Revealed
                  via clip-path, not a scaleX transform — scaling the box
                  stretches its already-computed border-radius along with
                  it, so the rounded corners visibly warp into ellipses
                  mid-transition. clip-path just masks a static, correctly-
                  rounded box, so the corners stay true at every frame. */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(120deg, ${gradientFrom}, ${gradientTo})`,
                }}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-foreground transition-[clip-path] duration-500 ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)]"
              />

              {/* The https chip sits in normal flex flow, not absolutely
                  positioned — a negative margin nudges it left, past the
                  button's own edge, without needing to know the button's
                  size the way an absolute `left` value would. The button's
                  own pl-6 stays intact (unlike a margin that exactly
                  cancelled the padding) so the pill visibly pokes out past
                  the edge instead of sitting flush in the corner. Same
                  "browser address bar" motif as BrowserMockup's URL bar,
                  turned up for a CTA. Stays green through the hover wipe
                  rather than inverting with the rest of the button, so it
                  still reads as its own fixed badge. */}
              <span className="relative z-10 -ml-10 shrink-0 rounded-full bg-emerald-300 px-3 py-1.5 text-xs font-semibold text-emerald-950 shadow-md">
                https
              </span>

              <span className="relative z-10 font-display text-xl font-bold text-white transition-colors duration-500 group-hover:text-background">
                {url}
              </span>
            </a>
          </div>
        </ScrollGroup>

        {/* Timeline / Role / Stack — same "stat row under the title" beat
            as the reference case studies this layout is inspired by. */}
        <ScrollGroup>
          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-6 transition-all duration-700">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="glow-label text-[11px] font-medium uppercase tracking-widest text-muted dark:text-white">
                  {stat.label}
                </p>
                <p className="mt-1 font-display text-sm font-semibold sm:text-base">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </ScrollGroup>

        {image && (
          <ScrollGroup>
            <div className="mt-10 transition-all duration-700">
              <BrowserMockup
                url={url}
                image={image}
                alt={`${title} website preview`}
                priority
              />
            </div>
          </ScrollGroup>
        )}

        <ScrollGroup>
          <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-foreground transition-all duration-700">
            {description}
          </p>
        </ScrollGroup>

        <ScrollGroup className="mx-auto mt-14 max-w-lg">
          <h2 className="font-display text-2xl font-bold tracking-tight transition-all duration-700">
            Overview
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground transition-all duration-700">
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ScrollGroup>

        <ScrollGroup className="mx-auto mt-14 max-w-lg">
          <h2 className="font-display text-2xl font-bold tracking-tight transition-all duration-700">
            What I built
          </h2>
          <ul className="mt-4 space-y-3 transition-all duration-700">
            {contributions.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground">
                <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollGroup>

        {/* Named build details — each gets its own heading and paragraph
            rather than being flattened into the bullet list above. */}
        {highlights?.map((highlight) => (
          <ScrollGroup key={highlight.title} className="mx-auto mt-14 max-w-lg">
            <h2 className="font-display text-2xl font-bold tracking-tight transition-all duration-700">
              {highlight.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground transition-all duration-700">
              {highlight.body}
            </p>
          </ScrollGroup>
        ))}

        <ScrollGroup>
          <div className="mt-14 mb-4 transition-all duration-700">
            <CodeBlock filename={codeFilename} lines={codeLines} />
          </div>
        </ScrollGroup>

        {/* Previously a dead end — landing on a case study meant either
            hitting the browser back button or hunting for the nav. This
            keeps people moving through the other projects instead. */}
        {previous && next && (
          <ScrollGroup className="mx-auto mt-14 max-w-lg">
            <nav
              aria-label="More projects"
              className="grid grid-cols-2 gap-4 border-t border-border pt-8 transition-all duration-700"
            >
              <Link
                href={`/websites/${previous.slug}`}
                className="group rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  ← Previous
                </p>
                <p className="mt-1 font-display font-semibold transition-colors duration-300 group-hover:text-accent">
                  {previous.title}
                </p>
              </Link>
              <Link
                href={`/websites/${next.slug}`}
                className="group rounded-2xl border border-border p-5 text-right transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  Next →
                </p>
                <p className="mt-1 font-display font-semibold transition-colors duration-300 group-hover:text-accent">
                  {next.title}
                </p>
              </Link>
            </nav>
          </ScrollGroup>
        )}
      </div>
    </div>
  );
}
