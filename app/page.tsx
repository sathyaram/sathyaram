import Link from "next/link";
import Image from "next/image";
import Sparkle from "@/components/Sparkle";
import PanoramaSlider from "@/components/PanoramaSlider";
import Reveal from "@/components/Reveal";

// Springy overshoot easing — the "delight" curve Seán Halpin uses on his cards.
const SPRING = "cubic-bezier(0.175,0.885,0.32,1.275)";

// Colours sampled from each client's live site. Each gradient runs from a
// deep shade (top-left, behind the text) to the brand colour (bottom-right,
// behind the artwork) so light type stays legible across the whole card.
const services = [
  {
    title: "Development",
    blurb:
      "Institutional and nonprofit websites, built with React, Next.js, WordPress, and Drupal.",
  },
  {
    title: "Design",
    blurb:
      "Brand identity, interface design, and prototyping in Figma and Illustrator.",
  },
  {
    title: "Photography",
    blurb: "Portrait, event, and fine art photography, shot on a Sony A7RIV.",
  },
];

const featured = [
  {
    slug: "brookings",
    title: "The Brookings Institute",
    year: "2024",
    blurb: "A mission-driven thinktank center.",
    from: "#022A4E",
    to: "#00649F",
    span: "sm:col-span-2",
    image: "/websites/assets/brookings.webp",
  },
  {
    slug: "homeplanetfund",
    title: "Home Planet Fund",
    year: "2024",
    blurb: "Patagonia's greenroots foundation.",
    from: "#8C382C",
    to: "#F59431",
    span: "sm:col-span-3",
    image: "/websites/assets/homeplanet.png",
  },
  {
    slug: "vilcek",
    title: "Vilcek Foundation",
    year: "2020",
    blurb: "A celebration of immigrants & the arts.",
    from: "#5C4433",
    to: "#E3D2B4",
    span: "sm:col-span-3",
    image: "/websites/assets/vilcek.png",
  },
  {
    slug: "sontag",
    title: "The Sontag Foundation",
    year: "2021",
    blurb: "The definitive enterprise for brain cancer research.",
    from: "#042342",
    to: "#2B86E0",
    span: "sm:col-span-2",
    image: "/websites/assets/sontag.png",
  },
];

export default function Home() {
  return (
    <div className="px-4 pb-24 sm:px-6">
      {/* ---------- Hero ---------- */}
      <section className="relative mx-auto max-w-6xl pt-20 pb-32 text-center sm:pt-28 sm:pb-44">
        {/* Decorative sparkles, positioned asymmetrically around the headline */}
        <Sparkle className="absolute right-[6%] top-[14%] hidden h-10 w-10 animate-[sparkle-float_6s_ease-in-out_infinite] text-accent motion-reduce:animate-none sm:block sm:h-14 sm:w-14 dark:text-white" />
        <Sparkle className="absolute left-[4%] top-[52%] hidden h-8 w-8 animate-[sparkle-float_7s_ease-in-out_infinite] text-accent [animation-delay:-2s] motion-reduce:animate-none sm:block sm:h-11 sm:w-11 dark:text-white" />
        <Sparkle className="absolute bottom-[8%] right-[18%] hidden h-6 w-6 animate-[sparkle-float_8s_ease-in-out_infinite] text-accent/70 [animation-delay:-4s] motion-reduce:animate-none md:block dark:text-white/70" />

        <h1 className="font-display font-bold leading-[1.05] tracking-[-0.035em]">
          <Reveal
            as="span"
            className="block text-[clamp(2.5rem,7.4vw,5.75rem)] text-logo-blue"
            segments={[
              { text: "Hi! I'm " },
              { text: "Sathya Ram", className: "name-glow" },
              { text: "." },
            ]}
          />
          <Reveal
            as="span"
            className="mt-2 block text-[clamp(1.75rem,5.1vw,3.9rem)]"
            text="Developer & Designer"
            delay={340}
          />
        </h1>

        <p className="reveal-block mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted [animation-delay:900ms] sm:text-xl">
          I build institutional websites, design brand and interface work, and
          shoot photography on the side.
        </p>
      </section>

      {/* ---------- Services ---------- */}
      <section className="mx-auto mb-28 max-w-5xl sm:mb-36">
        <div className="mb-12 text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted">
            Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            What I do.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-border p-7"
            >
              <h3 className="font-display text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.blurb}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Featured work: 2×2 full-width grid ---------- */}
      {/*
        The 40/60 asymmetric split only has room for a single-line title once
        a column is wide enough — below that, cards stack one-per-row instead
        (grid-cols-1 all the way up to lg), rather than squeezing into a
        column too narrow for the title.
      */}
      <section id="work" className="mx-auto max-w-[1600px] scroll-mt-28">
        <div className="mb-12 text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted">
            Work
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Selected projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-8">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/websites/${project.slug}`}
            style={{ transitionTimingFunction: SPRING }}
            className={`group @container relative min-h-[22rem] overflow-hidden rounded-[2.5rem] p-9 transition-all duration-500 hover:-translate-y-2 sm:min-h-[28rem] sm:rounded-[4rem] sm:p-12 ${project.span}`}
          >
            {/* The brand fill lives on its own layer so hover can dissolve it,
                leaving just the outline with the starfield showing through. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
              style={{
                background: `linear-gradient(135deg, ${project.from} 0%, ${project.to} 100%)`,
              }}
            />

            {/* ...and the same gradient takes over as the outline. */}
            <div
              aria-hidden="true"
              className="gradient-ring pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={
                {
                  "--ring-from": project.from,
                  "--ring-to": project.to,
                } as React.CSSProperties
              }
            />

            {/* Artwork tucked into the bottom-left corner, peeking out. */}
            <div
              className="absolute bottom-0 right-6 h-[46%] w-[72%] overflow-hidden rounded-t-3xl transition-transform duration-500 group-hover:-translate-y-2 sm:right-10"
              style={{ transitionTimingFunction: SPRING }}
            >
              <Image
                src={project.image}
                alt={`${project.title} website`}
                fill
                sizes="(min-width: 640px) 40vw, 72vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                style={{ transitionTimingFunction: SPRING }}
              />
            </div>

            <Sparkle className="absolute right-8 top-8 h-7 w-7 translate-y-2 text-white/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-10 sm:top-10" />

            <div className="relative">
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/60">
                {project.year}
              </p>
              <Reveal
                as="h3"
                // Sized off the card's own width (cqw), not the viewport —
                // the asymmetric grid gives some cards a much narrower
                // column than others, so a vw-based size would either
                // overflow the narrow ones or stay too small on the wide
                // ones. whitespace-nowrap is the hard rule (never wrap);
                // overflow+ellipsis is just a safety net for an edge case
                // the clamp doesn't cover.
                className="mt-2 block overflow-hidden text-ellipsis whitespace-nowrap font-display font-bold leading-[1.05] text-white [font-size:clamp(1.125rem,7.5cqw,2.5rem)]"
                text={project.title}
              />
              <p className="mt-3 max-w-sm text-sm text-white/75">
                {project.blurb}
              </p>
            </div>
          </Link>
        ))}
        </div>
      </section>

      {/* ---------- Photography panorama ---------- */}
      <section className="mx-auto mt-28 max-w-[1600px] sm:mt-36">
        <div className="mb-12 text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted">
            Photography
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            In my free time.
          </h2>
        </div>

        <div className="relative w-screen ml-[calc(50%-50vw)]">
          <PanoramaSlider />
        </div>
      </section>
    </div>
  );
}
