import type { Metadata } from "next";
import Link from "next/link";
import Sparkle from "@/components/Sparkle";
import PanoramaSlider from "@/components/PanoramaSlider";
import Reveal from "@/components/Reveal";
import ScrollGroup from "@/components/ScrollGroup";
import HeadingGlow from "@/components/HeadingGlow";
import WorkCard from "@/components/WorkCard";
import { homepageProjects } from "@/lib/projects";
import { services } from "@/lib/services";
import { websiteCards } from "@/lib/websites";

// The homepage is the one route whose title, description and social card are
// already right in the root layout, so it doesn't go through pageMetadata() —
// it only needs the canonical. That still can't move up into the layout: the
// shallow merge would hand the same "/" canonical to every page that doesn't
// override it. See lib/seo.ts.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Colours sampled from each client's live site. Each gradient runs from a
// deep shade (top-left, behind the text) to the brand colour (bottom-right,
// behind the artwork) so light type stays legible across the whole card.
// flipDuration / flipDelay drive the idle flip loop (see .service-badge-spin
// in globals.css). The three durations are deliberately coprime — 11s, 13s,
// 15s only realign every 2145s — so the row never settles into a shared beat
// the way three equal durations would, no matter how the delays are staggered.


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
          v8.3
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
                      {/* Two-faced coin flip. The whole thing is aria-hidden
                          and decorative, which is the point: no copy is parked
                          behind a hover state, so touch and keyboard users lose
                          nothing by never triggering it. Hiding the blurb until
                          hover would have failed that test, and left three tall
                          cells looking empty.

                          Two nested rotators rather than one, because the idle
                          loop and the hover flip both want the same rotateY and
                          a keyframe animation always beats a transition on the
                          same property — one element could run the loop or
                          answer the hover, not both. Split across a layer each,
                          the two rotations compose (preserve-3d passes the
                          faces' 3D positions down), so hover reliably reads as
                          "flip from whatever face is showing" whether the idle
                          animation happens to be resting at 0deg or 180deg. */}
                      <span
                        aria-hidden="true"
                        className="service-badge-spin relative block h-7 w-7 sm:h-8 sm:w-8"
                        style={
                          {
                            "--flip-duration": service.flipDuration,
                            "--flip-delay": service.flipDelay,
                          } as React.CSSProperties
                        }
                      >
                        <span className="service-badge-inner absolute inset-0">
                          <span className="service-face text-2xl leading-none sm:text-3xl">
                            {service.emoji}
                          </span>
                          <span className="service-face service-face-back text-2xl leading-none sm:text-3xl">
                            {service.emojiBack}
                          </span>
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
            {/* "Websites", plainly — it says what these are, and it pairs
                against Projects below as client work vs self-initiated, which
                is the distinction that actually matters now that both exist.
                The cards run 2024, 2024, 2020, 2021 because the order follows
                the grid's asymmetric span rhythm (2-3 / 3-2) rather than date;
                a section named for what it contains, rather than for being a
                selection, carries that just as well. */}
            <span className="heading-glow" data-glow-heading>
              Websites
            </span>
          </h2>
        </ScrollGroup>

        <ScrollGroup className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-8">
        {websiteCards.map((project) => (
          <WorkCard
            key={project.slug}
            href={`/websites/${project.slug}`}
            {...project}
          />
        ))}
        </ScrollGroup>
      </section>

      {/* ---------- Projects: the same grid, self-initiated work ---------- */}
      {/*
        Deliberately identical to Featured Work rather than differentiated —
        same card, same span rhythm, same sizes. The distinction between the
        two sections is what's IN them (client briefs vs things nobody asked
        for), and the headings already say that; giving Projects its own card
        treatment would have implied a difference in status rather than in
        origin.

        Data comes from lib/projects.ts rather than a local array like
        `featured` above, because the prev/next links and the sitemap read the
        same list — see the note there.

        An even two-up rather than the websites' asymmetric 2-3 / 3-2 rhythm:
        that rhythm needs four cards to resolve, and with two it would just
        read as one card being arbitrarily wider than the other. The cards
        themselves carry no span here — the grid gives them equal width.
      */}
      <section id="projects" className="mx-auto mt-28 max-w-[1600px] scroll-mt-28 sm:mt-36">
        <ScrollGroup className="mb-10 text-center">
          <h2 className="font-script leading-none text-foreground dark:text-logo-blue gradient-text-name text-[clamp(3rem,7.4vw,4.5rem)] pb-1 transition-all duration-700 sm:pb-2">
            <span className="heading-glow" data-glow-heading>
              Projects
            </span>
          </h2>
        </ScrollGroup>

        <ScrollGroup className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
        {homepageProjects.map((project) => (
          <WorkCard
            key={project.slug}
            href={`/projects/${project.slug}`}
            // Taller again now the screenshot is in the corner — the height
            // was cut back when these cards were text-only and the lower half
            // was just void. Still short of the website cards, whose cut-outs
            // need the full depth to sit in.
            // 24rem at the bottom end is what the stacked card needs: the
            // title wraps to two lines there, pushing the text ~37px further
            // down than it sits once the card is wide enough to hold it on
            // one. Solved against measured text positions so the gap below
            // the blurb lands at ~30px from 375px through 1920px.
            heightClass="min-h-[24rem] lg:min-h-[28rem]"
            {...project}
          />
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
              siblings, but the hover wipe runs on its own clock, and one
              element can't carry both on `transition-all`. The wrapper
              reveals, the Link keeps its own hover timing. */}
          <div className="mt-6 transition-all duration-700">
            {/* Same left-to-right wipe as the case studies' "visit the site"
                buttons: two stacked layers rather than a background swap, so
                the fill slides in from one edge instead of cross-fading.
                Revealed with clip-path, not a scaleX transform — scaling the
                box stretches its already-computed border-radius along with it
                and the pill's ends warp into ellipses mid-transition, whereas
                clip-path just masks a static, correctly-rounded box.

                Accent is what wipes in because it's the one colour that works
                against `text-background` in BOTH themes: near-black text on
                light cyan in dark mode, beige text on deep blue in light. */}
            <Link
              href="/contact"
              className="group relative inline-block rounded-full px-8 py-3.5 text-sm font-medium text-background"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-foreground"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-accent transition-[clip-path] duration-500 ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)]"
              />
              <span className="relative">Get in Touch</span>
            </Link>
          </div>
        </ScrollGroup>
      </section>
    </div>
  );
}
