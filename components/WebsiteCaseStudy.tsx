import Reveal from "./Reveal";
import ScrollGroup from "./ScrollGroup";
import BrowserMockup from "./BrowserMockup";
import CodeBlock, { type CodeLine } from "./CodeBlock";

type Stat = { label: string; value: string };

/** A single build detail worth calling out — a punchy name plus a short
 *  paragraph, following the pattern on seanhalpin.xyz/work/docs where each
 *  notable piece of work gets its own named section rather than becoming
 *  another bullet. */
type Highlight = { title: string; body: string };

type WebsiteCaseStudyProps = {
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
  image: string;
  description: string;
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
  title,
  subtitle,
  year,
  agency,
  gradientFrom,
  gradientTo,
  url,
  link,
  image,
  description,
  stats,
  overview,
  contributions,
  highlights,
  codeFilename,
  codeLines,
}: WebsiteCaseStudyProps) {
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
          <div className="mt-6 flex justify-center transition-all duration-700">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border-logo inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-medium transition-opacity hover:opacity-80"
            >
              {url} ↗
            </a>
          </div>
        </ScrollGroup>

        {/* Timeline / Role / Stack — same "stat row under the title" beat
            as the reference case studies this layout is inspired by. */}
        <ScrollGroup>
          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-6 transition-all duration-700">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-[11px] font-medium uppercase tracking-widest text-muted">
                  {stat.label}
                </p>
                <p className="mt-1 font-display text-sm font-semibold sm:text-base">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </ScrollGroup>

        <ScrollGroup>
          <div className="mt-10 transition-all duration-700">
            <BrowserMockup url={url} image={image} alt={`${title} website preview`} priority />
          </div>
        </ScrollGroup>

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
      </div>
    </div>
  );
}
