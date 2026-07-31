import Link from "next/link";
import Image from "next/image";
import Sparkle from "@/components/Sparkle";
import PanoramaSlider from "@/components/PanoramaSlider";
import Reveal from "@/components/Reveal";
import ScrollGroup from "@/components/ScrollGroup";
import HeadingGlow from "@/components/HeadingGlow";
import { SPRING } from "@/lib/site";

// Colours sampled from each client's live site. Each gradient runs from a
// deep shade (top-left, behind the text) to the brand colour (bottom-right,
// behind the artwork) so light type stays legible across the whole card.
const services = [
  {
    emoji: "💻",
    emojiBack: "⚡",
    title: "Development",
    blurb:
      "React, Next.js, and WordPress builds with polished interactions and purposeful animation.",
  },
  {
    emoji: "🎨",
    emojiBack: "✨",
    title: "Design",
    blurb:
      "Logos, interfaces, and design systems crafted with clarity, purpose, and attention to detail.",
  },
  {
    emoji: "📷",
    emojiBack: "🌄",
    title: "Photography",
    blurb:
      "Expressive portraiture and cinematic imagery that feels natural, vibrant, and distinctly human.",
  },
];

const featured = [
  {
    slug: "brookings",
    title: "The Brookings Institute",
    year: "2024",
    blurb:
      "A mission-driven think tank, built on reusable WordPress templates and a research library that filters as you type.",
    from: "#022A4E",
    to: "#00649F",
    span: "sm:col-span-2",
    image: "/websites/assets/brookings.webp",
    imageScale: 1.25,
  },
  {
    slug: "homeplanetfund",
    title: "Home Planet Fund",
    year: "2024",
    blurb:
      "Patagonia's grassroots climate fund, on a custom WordPress theme with grant and initiative archives its editors run themselves.",
    from: "#8C382C",
    to: "#F59431",
    span: "sm:col-span-3",
    image: "/websites/assets/homeplanet.png",
    imageScale: 1.4,
  },
  {
    slug: "vilcek",
    title: "Vilcek Foundation",
    year: "2020",
    blurb:
      "A celebration of immigrants & the arts, with flexible honoree profiles and award archives that filter on demand.",
    from: "#5C4433",
    to: "#E3D2B4",
    span: "sm:col-span-3",
    image: "/websites/assets/vilcek.webp",
    imageScale: 1.55,
  },
  {
    slug: "sontag",
    title: "The Sontag Foundation",
    year: "2021",
    blurb:
      "The definitive enterprise for brain cancer research, with accessible fellowship templates and grant guidelines built to be scanned.",
    from: "#042342",
    to: "#2B86E0",
    span: "sm:col-span-2",
    image: "/websites/assets/sontag.png",
    imageScale: 1.25,
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

        {/* Version tag, ported from the old site's hero (v7.3 there, bumped
            for this rebuild). Sits on its own centered line above the
            headline rather than as an inline <sup> inside it, where it took
            up real space on that line and pushed the name around at narrow
            widths. */}
        <p className="mb-3 text-center text-[8px] font-normal text-muted sm:mb-4">
          v8.05
        </p>

        {/* The whole line shares one font-size (on this div), but only
            "Sathya Ram" is the <h1> — the greeting is a plain span so the
            indexed heading is just the name, not "Hi! I'm ...". Both are
            inline so they still read as one headline. */}
        {/* Only the clamp FLOOR is tuned for mobile; the vw term and the cap
            are untouched, so every viewport from ~540px up renders exactly as
            before (above that width the 7.4vw term is the larger value and the
            floor stops applying at all).

            2.45rem is derived, not eyeballed: "Hi! I'm Sathya Ram" measures
            8.44px of width per 1px of font-size at this weight and tracking,
            and the narrowest target (375px, minus the page's px-4) leaves
            343px, so anything over ~40.7px wraps to a second line. The old
            2.85rem floor was 45.6px and needed 385px.

            The min() is what covers 320-360px (SE, most Androids), where even
            2.45rem still wraps. 11.4vw - 4px is that same 8.44 measurement
            solved for the available width, so it tracks the widest the line can
            be and still fit; min() takes it only while it is the smaller of the
            two, which is below ~375px. From there up the fixed 2.45rem wins and
            this term stops mattering, so it can't grow the name anywhere. */}
        <div className="font-display font-bold leading-[1.05] tracking-[-0.035em] text-[clamp(min(2.45rem,11.4vw_-_4px),7.4vw,5.75rem)]">
          <Reveal as="span" className="text-logo-blue" text="Hi! I'm " />
          <Reveal
            as="h1"
            className="inline text-logo-blue"
            segments={[
              { text: "Sathya Ram", className: "gradient-text-name name-glow" },
            ]}
            delay={156}
          />
        </div>
        {/* The tagline is its own heading a step down from the name. Its floor
            drops by the same proportion as the name's, so the name-to-tagline
            ratio stays 1.47 at every width — the same step down the cap pair
            (5.75rem / 3.9rem) produces on desktop. Leaving this floor at
            1.95rem would have squeezed that step to 1.26 on mobile, which is
            the hierarchy problem rather than a fix for it. */}
        <Reveal
          as="h2"
          className="mt-2 block font-display font-bold leading-[1.05] tracking-[-0.035em] text-[clamp(1.66rem,5.1vw,3.9rem)]"
          segments={[{ text: "Developer & Designer", className: "name-glow" }]}
          delay={340}
        />
        {/* The positioning line the headline deliberately doesn't carry. It
            sits here, at body size, so "Developer & Designer" keeps both its
            brevity and the clamp sizing tuned to that exact string, while a
            visitor still learns within the first screen who the work is for.
            Plain fade-up rather than a per-letter Reveal: at this length the
            letter stagger reads as noise, and it should settle after the
            headline, not compete with it. */}
        <p className="load-rise mx-auto mt-6 max-w-xl text-balance text-base text-muted motion-reduce:animate-none sm:mt-7 sm:text-lg" style={{ animationDelay: "620ms" }}>
          I make stylish, accessible, interactive websites for boutique brands,
          nonprofits, and institutions built around a mission.
        </p>
      </section>

      {/* ---------- Services ---------- */}
      <section className="mx-auto mb-28 max-w-5xl sm:mb-36">
        {/* The visible "Services" title is gone: with three cells that each
            carry their own heading, the label was naming something the row
            already says. Kept as sr-only rather than deleted outright so the
            section still has an accessible name and the heading outline
            doesn't jump h1 -> h3 at the service titles. */}
        <h2 className="sr-only">Services</h2>

        {/* Full-bleed grid — same w-screen breakout the Photography
            panorama uses below, so Services isn't the only section that
            escapes the page's max-width.

            No outer frame: the only rules are the ones BETWEEN cells, drawn
            by .service-cell's ::after (see globals.css) rather than by border
            utilities. A border on the cell would run its full edge, corner to
            corner; the pseudo-element can be inset from both ends, so each
            rule floats clear of the section's top and bottom instead of
            boxing the row in. It also flips axis on its own at sm, which is
            the "separators stack on mobile" half of this.

            Mobile is one column rather than two on purpose: three cells in a
            2-up grid leaves an orphan in the second row. */}
        <div className="w-screen ml-[calc(50%-50vw)]">
          {/* ScrollGroup *is* the grid rather than wrapping one, so each cell
              is both a direct child (and therefore gets its own staggered
              reveal — ScrollGroup only clones onto direct children) and a
              real grid item, which the divider classes below depend on.
              Same arrangement the Work grid uses. */}
          <ScrollGroup className="grid grid-cols-1 sm:grid-cols-3">
            {services.map((service) => {
                return (
                  <div
                    key={service.title}
                    // transition-all, not transition-colors: the staggered
                    // reveal animates opacity + transform, neither of which
                    // transition-colors covers — it would snap into place
                    // despite the delay. duration-700 matches the site's other
                    // reveals. No hover background on the cell: the icon flip
                    // is the whole hover story here, and a wash behind it just
                    // competed with the flip for attention.
                    className="service-cell group relative flex flex-col items-center px-4 py-8 text-center transition-all duration-700 sm:px-10 sm:py-14"
                  >
                    {/* Icon in its own fixed circular badge — the emoji sits
                        in its own inner square with leading-none rather
                        than being centered as loose inline text, since
                        different glyphs carry very different built-in
                        ascent/descent padding at the same font-size (a
                        camera renders "taller" within its line box than a
                        palette, say). That fixed inner box, plus a fixed
                        margin to the title and no vertical centering of the
                        column as a whole, is what keeps every title sitting
                        at the same height below its icon regardless of how
                        tall a neighboring cell's blurb wraps to. */}
                    <span className="service-badge flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 sm:h-16 sm:w-16">
                      {/* Two-faced coin flip on hover. The whole thing is
                          aria-hidden and decorative, which is the point: no
                          copy is parked behind a hover state, so touch and
                          keyboard users lose nothing by never triggering it.
                          Hiding the blurb until hover would have failed that
                          test, and left three tall cells looking empty. */}
                      <span
                        aria-hidden="true"
                        className="service-badge-inner relative flex h-7 w-7 items-center justify-center sm:h-8 sm:w-8"
                      >
                        <span className="service-face text-2xl leading-none sm:text-3xl">
                          {service.emoji}
                        </span>
                        <span className="service-face service-face-back text-2xl leading-none sm:text-3xl">
                          {service.emojiBack}
                        </span>
                      </span>
                    </span>
                    <h3 className="mt-3 font-display text-base font-semibold sm:mt-5 sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 max-w-[16rem] text-[13px] leading-relaxed text-muted sm:mt-2 sm:text-sm">
                      {service.blurb}
                    </p>
                  </div>
                );
              })}
          </ScrollGroup>
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
        <ScrollGroup className="mb-10 text-center">
          <h2 className="font-script leading-none text-foreground dark:text-logo-blue gradient-text-name text-[clamp(3rem,7.4vw,4.5rem)] pb-1 transition-all duration-700 sm:pb-2">
            {/* "Selected Works", not "Work": the cards run 2024, 2024, 2020,
                2021 because the order is driven by the grid's asymmetric span
                rhythm (2-3 / 3-2), not by date. Naming the section for a
                curated selection makes that intentional rather than reading as
                a broken sort, without forcing a date order that would break the
                layout. */}
            <span className="heading-glow" data-glow-heading>
              Selected Works
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
                // Scaled per-project so each object reads at the right size
                // on its card — a jug and a brain don't fill the same frame
                // at the same scale. Tailwind's arbitrary-value classes have
                // to be static strings, so the number comes in via a CSS var
                // instead of being interpolated into the class name. Grown
                // from the bottom edge (origin-bottom) so it stays planted
                // there instead of drifting off the card as it enlarges;
                // the hover bump stays proportional to the base scale.
                className="origin-bottom scale-[var(--img-scale)] object-contain object-bottom transition-transform duration-500 group-hover:scale-[calc(var(--img-scale)*1.05)]"
                style={
                  {
                    transitionTimingFunction: SPRING,
                    "--img-scale": project.imageScale,
                  } as React.CSSProperties
                }
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
              {/* One sentence carrying both what the client is and what I
                  built for them: the organisation alone tells a visitor
                  nothing about the contribution, and a second, differently
                  weighted line read as a caption bolted underneath. Drawn from
                  each case study's own text, so a card can't drift from the
                  page it links to. */}
              <p className="card-blurb mt-3 max-w-md text-sm text-white/75 transition-colors duration-500 group-hover:text-foreground/75">
                {project.blurb}
              </p>
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

      {/* ---------- CTA ---------- */}
      {/* The homepage previously had no on-page prompt to get in touch at
          all — Contact only lived in the nav. Closing section, after
          everything else has made the case — the last thing someone reads
          before they'd otherwise just leave. Button reuses the one primary-
          button style that already exists (ContactForm's submit), rather
          than inventing a new one. */}
      {/* mt-24 flat, with no sm: step: the space below this section is the page
          wrapper's pb-24, which is 6rem at every width, so a top margin that
          grew to 9rem on desktop left the closing section visibly hung toward
          the footer rather than sitting evenly between the two. */}
      <section className="mx-auto mt-24 max-w-xl text-center">
        {/* Each of the three needs its own `transition` for the staggered
            reveal to animate at all — ScrollGroup sets an inline
            transitionDelay per child, but .scroll-stagger-item's
            opacity/translate change snaps instantly without a transition
            property to delay. duration-700 matches every other ScrollGroup
            child on the page. */}
        <ScrollGroup>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] transition-all duration-700 sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-muted transition-all duration-700">
            I&apos;d love to hear about it. Reach out and let&apos;s talk
            through what you&apos;re building.
          </p>
          {/* The button sits in a wrapper rather than being the stagger
              target itself: the reveal wants duration-700 to match its
              siblings, but the hover lift wants to stay snappy at 300ms,
              and one element can't carry both on `transition-all`. The
              wrapper reveals, the Link keeps its own hover timing. */}
          <div className="mt-6 transition-all duration-700">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              style={{ transitionTimingFunction: SPRING }}
            >
              Get in Touch
            </Link>
          </div>
        </ScrollGroup>
      </section>
    </div>
  );
}
