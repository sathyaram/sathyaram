import Reveal from "./Reveal";
import BrowserMockup from "./BrowserMockup";
import CodeBlock, { type CodeLine } from "./CodeBlock";

type Stat = { label: string; value: string };

type WebsiteCaseStudyProps = {
  title: string;
  subtitle: string;
  year: string;
  agency: string;
  tags: string[];
  url: string;
  link: string;
  image: string;
  description: string;
  stats: Stat[];
  overview: string[];
  contributions: string[];
  codeFilename: string;
  codeLines: CodeLine[];
};

export default function WebsiteCaseStudy({
  title,
  subtitle,
  year,
  agency,
  tags,
  url,
  link,
  image,
  description,
  stats,
  overview,
  contributions,
  codeFilename,
  codeLines,
}: WebsiteCaseStudyProps) {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted">
          {agency} · {year}
        </p>
        <Reveal
          as="h1"
          className="mt-2 block text-center font-display font-bold leading-[1.05] tracking-[-0.035em] text-logo-blue text-[clamp(2.5rem,7.4vw,5.75rem)]"
          text={title}
        />
        <p className="mt-4 text-center text-lg text-muted">{subtitle}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Timeline / Role / Stack — same "stat row under the title" beat
            as the reference case studies this layout is inspired by. */}
        <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-6">
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

        <div className="mt-10">
          <BrowserMockup url={url} image={image} alt={`${title} website preview`} priority />
        </div>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground">
          {description}
        </p>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold tracking-tight">Overview</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground">
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold tracking-tight">What I built</h2>
          <ul className="mt-4 space-y-3">
            {contributions.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground">
                <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <CodeBlock filename={codeFilename} lines={codeLines} />
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-foreground/30"
        >
          Visit {url} ↗
        </a>
      </div>
    </div>
  );
}
