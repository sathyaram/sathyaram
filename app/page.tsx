import Link from "next/link";
import Image from "next/image";
import Sparkle from "@/components/Sparkle";
import PanoramaSlider from "@/components/PanoramaSlider";
import Reveal from "@/components/Reveal";
import ScrollGroup from "@/components/ScrollGroup";
import HeadingGlow from "@/components/HeadingGlow";

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
    image: "/websites/assets/vilcek.webp",
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
      <HeadingGlow />
      {/* ---------- Hero ---------- */}
      <section className="relative mx-auto max-w-6xl pt-32 pb-32 text-center sm:pt-[200px] sm:pb-[200px]">
        {/* Decorative sparkles, positioned asymmetrically around the
            headline. Each sits on a wrapper span that pops it in on load
            (the scale entrance can't share the element with the float loop,
            since both animate transform); the Sparkle keeps the float. */}
        <span
          className="sparkle-pop absolute right-[6%] top-[14%] hidden motion-reduce:animate-none sm:block"
          style={{ animationDelay: "450ms" }}
        >
          <Sparkle className="h-10 w-10 animate-[sparkle-float_6s_ease-in-out_infinite] text-sparkle motion-reduce:animate-none sm:h-14 sm:w-14 dark:text-white" />
        </span>
        <span
          className="sparkle-pop absolute left-[4%] top-[52%] hidden motion-reduce:animate-none sm:block"
          style={{ animationDelay: "600ms" }}
        >
          <Sparkle className="h-8 w-8 animate-[sparkle-float_7s_ease-in-out_infinite] text-sparkle [animation-delay:-2s] motion-reduce:animate-none sm:h-11 sm:w-11 dark:text-white" />
        </span>
        <span
          className="sparkle-pop absolute bottom-[8%] right-[18%] hidden motion-reduce:animate-none md:block"
          style={{ animationDelay: "750ms" }}
        >
          <Sparkle className="h-6 w-6 animate-[sparkle-float_8s_ease-in-out_infinite] text-sparkle/70 [animation-delay:-4s] motion-reduce:animate-none dark:text-white/70" />
        </span>

        {/* The whole line shares one font-size (on this div), but only
            "Sathya Ram" is the <h1> — the greeting is a plain span so the
            indexed heading is just the name, not "Hi! I'm ...". Both are
            inline so they still read as one headline. */}
        <div className="font-display font-bold leading-[1.05] tracking-[-0.035em] text-[clamp(2.85rem,7.4vw,5.75rem)]">
          <Reveal as="span" className="text-logo-blue" text="Hi! I'm " />
          <Reveal
            as="h1"
            className="inline text-logo-blue"
            segments={[
              { text: "Sathya Ram", className: "gradient-text-name name-glow" },
            ]}
            delay={156}
          />
          {/* A little version tag, ported from the old site's hero (v7.3
              there — bumped for this rebuild). Plain inline <sup>, letting
              Tailwind's preflight reset (position: relative; top: -0.5em;
              font-size: 75%) do the actual raising. The em unit needs the
              wrapping div to carry the headline's font-size so the sup
              resolves against the visible text size, not the inherited
              ~16px default. */}
          <sup className="ml-1 top-[-4em] text-[0.15em] font-sans font-normal tracking-wide text-muted">
            v8.0
          </sup>
        </div>
        {/* The tagline is its own heading a step down from the name. */}
        <Reveal
          as="h2"
          className="mt-2 block font-display font-bold leading-[1.05] tracking-[-0.035em] text-[clamp(1.95rem,5.1vw,3.9rem)]"
          segments={[{ text: "Developer & Designer", className: "name-glow" }]}
          delay={340}
        />
      </section>

      {/* ---------- Services ---------- */}
      <section className="mx-auto mb-28 max-w-5xl sm:mb-36">
        <ScrollGroup className="mb-10 text-center">
          <h2 className="font-script leading-none text-foreground dark:text-logo-blue gradient-text-name text-[clamp(3rem,7.4vw,4.5rem)] pb-1 transition-all duration-700 sm:pb-2">
            <span className="heading-glow" data-glow-heading>
              Services
            </span>
          </h2>
        </ScrollGroup>

        <ScrollGroup className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex min-h-[12rem] flex-col items-center justify-center p-4 text-center transition-all duration-300 ease-out hover:-translate-y-1"
            >
              {/* A diamond outline framing the icon itself — a rotated
                  square centered behind the emoji, so it tracks the icon
                  instead of the whole card (which left it misaligned). */}
              <span className="relative flex h-20 w-20 items-center justify-center">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rotate-45 rounded-xl border border-border transition-colors duration-300 ease-out group-hover:border-accent/60"
                />
                <span
                  aria-hidden="true"
                  className="relative text-4xl transition-transform duration-300 ease-out group-hover:scale-110"
                >
                  {service.emoji}
                </span>
              </span>
              <h3 className="relative z-[1] -mt-2 font-display text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted">
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
        <ScrollGroup className="mb-10 text-center">
          <h2 className="font-script leading-none text-foreground dark:text-logo-blue gradient-text-name text-[clamp(3rem,7.4vw,4.5rem)] pb-1 transition-all duration-700 sm:pb-2">
            <span className="heading-glow" data-glow-heading>
              Work
            </span>
          </h2>
        </ScrollGroup>

        <ScrollGroup className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-8">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/websites/${project.slug}`}
            style={{ transitionTimingFunction: SPRING }}
            className={`group relative min-h-[22rem] overflow-hidden rounded-[2.5rem] p-9 transition-all duration-500 hover:-translate-y-2 sm:min-h-[28rem] sm:rounded-[4rem] sm:p-12 ${project.span}`}
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

            {/* A single object standing in for each client, sitting on the
                bottom edge of the card. object-contain (not cover) and no
                clipping frame, so the whole thing is visible and never
                cropped or stretched — these are transparent cut-outs meant
                to float on the gradient, not photos in a window. */}
            <div
              // Centred horizontally via inset-x-0 + mx-auto rather than a
              // translate, so it doesn't fight the hover lift below.
              // The source art is trimmed to its own edges (no transparent
              // padding), so this offset moves the object itself rather than
              // an empty box — it hangs past the card's bottom edge and gets
              // clipped there, so it reads as tucked in behind it.
              className="pointer-events-none absolute inset-x-0 -bottom-[50px] mx-auto h-[58%] w-[58%] transition-transform duration-500 group-hover:-translate-y-2"
              style={{ transitionTimingFunction: SPRING }}
            >
              <Image
                src={project.image}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 640px) 30vw, 58vw"
                // Scaled up so the object reads boldly on the card. Grown
                // from the bottom edge (origin-bottom) so it stays planted
                // there instead of drifting off the card as it enlarges;
                // the hover bump stays proportional to the base scale.
                className="origin-bottom scale-[1.4] object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.47]"
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
                // One shared viewport-based size across every card, so the
                // titles all read at the same scale regardless of how wide
                // their grid column is. (An earlier cqw version sized off
                // each card's own width, which made the narrow cards'
                // titles noticeably smaller.) Long titles wrap onto another
                // line rather than shrinking to fit.
                //
                // Light mode: once the fill dissolves on hover, white text
                // would sit straight on the beige page background with
                // barely any contrast, so it swaps to the theme foreground
                // colour instead (near-black in light mode, still
                // effectively white in dark mode).
                className="mt-2 block font-display font-bold leading-[1.05] text-white transition-colors duration-500 group-hover:text-foreground text-[clamp(1.75rem,3vw,2.5rem)]"
                text={project.title}
              />
              <p className="mt-3 max-w-sm text-sm text-white/75 transition-colors duration-500 group-hover:text-foreground/75">
                {project.blurb}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/25 px-2.5 py-1 text-[10px] text-white/70 transition-colors duration-500 group-hover:border-foreground/20 group-hover:text-foreground/70"
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
        The heading gets its own stagger here at the page level; the filter
        pills, each photo, and the caption/pagination stagger independently
        inside PanoramaSlider itself (see the comment there on why the
        photos use a JS-driven opacity stagger rather than the
        .scroll-stagger-item class the rest of the site uses).
      */}
      <section className="mx-auto mt-28 max-w-[1600px] sm:mt-36">
        <ScrollGroup className="mb-10 text-center">
          <h2 className="font-script leading-none text-foreground dark:text-logo-blue gradient-text-name text-[clamp(3rem,7.4vw,4.5rem)] pb-1 transition-all duration-700 sm:pb-2">
            <span className="heading-glow" data-glow-heading>
              Photography
            </span>
          </h2>
        </ScrollGroup>

        <div className="relative w-screen ml-[calc(50%-50vw)]">
          <PanoramaSlider />
        </div>
      </section>
    </div>
  );
}
