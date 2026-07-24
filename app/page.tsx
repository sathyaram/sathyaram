import Link from "next/link";
import Image from "next/image";
import Sparkle from "@/components/Sparkle";
import PanoramaSlider from "@/components/PanoramaSlider";
import Reveal from "@/components/Reveal";
import ScrollGroup from "@/components/ScrollGroup";

// Springy overshoot easing — the "delight" curve Seán Halpin uses on his cards.
const SPRING = "cubic-bezier(0.175,0.885,0.32,1.275)";

// Colours sampled from each client's live site. Each gradient runs from a
// deep shade (top-left, behind the text) to the brand colour (bottom-right,
// behind the artwork) so light type stays legible across the whole card.
const services = [
  {
    emoji: "💻",
    title: "Development",
    blurb: "Institutional and nonprofit websites, built with React, Next.js, and WordPress.",
  },
  {
    emoji: "🎨",
    title: "Design",
    blurb:
      "Brand identity, interface design, and prototyping in Figma and Illustrator.",
  },
  {
    emoji: "📷",
    title: "Photography",
    blurb: "Portrait, event, and fine art photography, shot on a Sony A7RIV.",
  },
  {
    emoji: "🏎️",
    title: "Car Buying Help",
    blurb: "Helping you find and buy a used car — now at CarMax.",
  },
  {
    emoji: "🎙️",
    title: "Voice Narration",
    blurb: "Voiceover and narration for video, animation, and audio projects.",
  },
  {
    emoji: "🃏",
    title: "Magic Deck Tech",
    blurb: "Commander (EDH) deckbuilding, tuning, and deck tech breakdowns.",
  },
];

const featured = [
  {
    slug: "brookings",
    title: "The Brookings Institute",
    year: "2024",
    blurb: "A mission-driven thinktank center.",
    tags: ["WordPress", "JavaScript", "Custom HTML+CSS"],
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
    tags: ["WordPress", "Custom CSS", "JavaScript"],
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
    tags: ["WordPress", "JavaScript", "Styled Components"],
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
    tags: ["WordPress", "JavaScript", "Styled Components"],
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
      <section className="relative mx-auto max-w-6xl pt-20 pb-24 text-center sm:pt-28 sm:pb-36">
        {/* Decorative sparkles, positioned asymmetrically around the headline */}
        <Sparkle className="absolute right-[6%] top-[14%] hidden h-10 w-10 animate-[sparkle-float_6s_ease-in-out_infinite] text-sparkle motion-reduce:animate-none sm:block sm:h-14 sm:w-14 dark:text-white" />
        <Sparkle className="absolute left-[4%] top-[52%] hidden h-8 w-8 animate-[sparkle-float_7s_ease-in-out_infinite] text-sparkle [animation-delay:-2s] motion-reduce:animate-none sm:block sm:h-11 sm:w-11 dark:text-white" />
        <Sparkle className="absolute bottom-[8%] right-[18%] hidden h-6 w-6 animate-[sparkle-float_8s_ease-in-out_infinite] text-sparkle/70 [animation-delay:-4s] motion-reduce:animate-none md:block dark:text-white/70" />

        <h1
          className="font-display font-bold leading-[1.05] tracking-[-0.035em] text-[clamp(2.5rem,7.4vw,5.75rem)]"
        >
          <Reveal
            as="span"
            className="text-logo-blue"
            segments={[
              { text: "Hi! I'm " },
              { text: "Sathya Ram", className: "gradient-text-name name-glow" },
            ]}
          />
          {/* A little version tag, ported from the old site's hero (v7.3
              there — bumped for this rebuild). Plain inline <sup>, letting
              Tailwind's preflight reset (position: relative; top: -0.5em;
              font-size: 75%) do the actual raising. The em unit needs the
              h1 itself to carry the headline's font-size (moved up from
              the Reveal span below it) — em on a sibling of the
              actually-sized element resolves against the inherited
              ~16px default, not the visible text size. */}
          <sup className="ml-1 text-[0.15em] font-sans font-normal tracking-wide text-muted">
            v8.0
          </sup>
          <Reveal
            as="span"
            className="mt-2 block text-[clamp(1.75rem,5.1vw,3.9rem)]"
            text="Developer & Designer"
            delay={340}
          />
        </h1>
      </section>

      {/* ---------- Services ---------- */}
      <section className="mx-auto mb-28 max-w-5xl sm:mb-36">
        <div className="mb-10 text-center">
          <h2 className="font-script leading-none text-logo-blue gradient-text-name text-[clamp(2.75rem,11vw,5rem)] pb-1 sm:pb-2">
            Services
          </h2>
          <p className="mx-auto max-w-md text-sm leading-normal text-muted sm:text-base">
            I build institutional websites, design brand and interface work,
            and shoot photography on the side.
          </p>
        </div>

        <ScrollGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-border p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60"
            >
              <div
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-3xl transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110"
              >
                {service.emoji}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.blurb}
              </p>
            </div>
          ))}
        </ScrollGroup>
      </section>

      {/* ---------- Featured work: 2×2 full-width grid ---------- */}
      {/*
        The 40/60 asymmetric split only has room for a single-line title once
        a column is wide enough — below that, cards stack one-per-row instead
        (grid-cols-1 all the way up to lg), rather than squeezing into a
        column too narrow for the title.
      */}
      <section id="work" className="mx-auto max-w-[1600px] scroll-mt-28">
        <div className="mb-10 text-center">
          <h2 className="font-script leading-none text-logo-blue gradient-text-name text-[clamp(2.75rem,11vw,5rem)] pb-1 sm:pb-2">
            Work
          </h2>
          <p className="mx-auto max-w-md text-sm leading-normal text-muted sm:text-base">
            A selection of institutional and nonprofit websites I&apos;ve
            designed and built for real clients.
          </p>
        </div>

        <ScrollGroup className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-8">
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
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-500 group-hover:text-foreground/60">
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
                //
                // Light mode: once the fill dissolves on hover, white text
                // would sit straight on the beige page background with
                // barely any contrast, so it swaps to the theme foreground
                // colour instead (near-black in light mode, still
                // effectively white in dark mode).
                className="mt-2 block overflow-hidden text-ellipsis whitespace-nowrap font-display font-bold leading-[1.05] text-white transition-colors duration-500 group-hover:text-foreground [font-size:clamp(1.125rem,7.5cqw,2.5rem)]"
                text={project.title}
              />
              <p className="mt-3 max-w-sm text-sm text-white/75 transition-colors duration-500 group-hover:text-foreground/75">
                {project.blurb}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/25 px-2.5 py-1 text-xs text-white/70 transition-colors duration-500 group-hover:border-foreground/20 group-hover:text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
        </ScrollGroup>
      </section>

      {/* ---------- Photography panorama ---------- */}
      {/*
        A single fade-up for the whole section rather than a per-photo
        stagger: the slides inside PanoramaSlider are already positioned
        and faded via their own 3D-carousel transform logic, and layering
        a second, independent reveal system onto each slide risked
        fighting that rather than complementing it.
      */}
      <section className="mx-auto mt-28 max-w-[1600px] sm:mt-36">
        <ScrollGroup>
          {/* transition-all here since this div has no other hover
              transition of its own to piggyback on (unlike the service
              and project cards) — see the comment on .scroll-stagger-item
              in globals.css for why ScrollGroup doesn't set one itself. */}
          <div className="transition-all duration-700">
            <div className="mb-10 text-center">
              <h2 className="font-script leading-none text-logo-blue gradient-text-name text-[clamp(2.75rem,11vw,5rem)] pb-1 sm:pb-2">
                Photography
              </h2>
              <p className="mx-auto max-w-md text-sm leading-normal text-muted sm:text-base">
                Portrait, travel, and fine art photography I shoot on the
                side, mostly on a Sony A7RIV.
              </p>
            </div>

            <div className="relative w-screen ml-[calc(50%-50vw)]">
              <PanoramaSlider />
            </div>
          </div>
        </ScrollGroup>
      </section>
    </div>
  );
}
