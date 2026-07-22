import Image from "next/image";

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
}: WebsiteCaseStudyProps) {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          {agency} · {year}
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted">{subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl border border-border">
          <Image
            src={image}
            alt={`${title} website preview`}
            fill
            className="object-cover"
          />
        </div>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-foreground/30"
        >
          Visit {url} ↗
        </a>
      </div>
    </div>
  );
}
