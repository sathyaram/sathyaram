"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { photos, CAMERA, CATEGORIES, type Category } from "@/lib/photos";
import { CloseIcon } from "./icons";
import ScrollGroup from "./ScrollGroup";

// Degrees between neighbouring slides on the cylinder. The reference slider
// uses 30°, which reads as a gentle panorama rather than a carousel.
const ANGLE = 30;
// Beyond ~2.5 steps a slide is near edge-on (75°+) and just balloons toward
// the camera, so we fade it out rather than render it.
const VISIBLE_RANGE = 2.5;

// Breathing room between neighbouring photos, in px. Folding this into the
// radius spreads the slides apart instead of letting them overlap.
const SLIDE_GAP = 34;

// Fraction of the container's height a slide occupies (the rest is breathing
// room so the shadow/edges aren't clipped).
const SLIDE_HEIGHT_RATIO = 0.88;

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

export default function PanoramaSlider() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [active, setActive] = useState(0);
  const [slideWidth, setSlideWidth] = useState(320);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  // Drives the photos' own one-time stagger-in (see the note above the
  // slide's style prop for why this can't just be the .scroll-stagger-item
  // class everything else uses). Lazy-initialized so reduced-motion starts
  // already revealed, same as ScrollGroup does.
  const [revealed, setRevealed] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  // Cleared back to "no delay" once the stagger has had time to finish, so
  // it doesn't linger and delay every later opacity change (e.g. paging
  // through the carousel after the reveal already played).
  const [revealSettled, setRevealSettled] = useState(revealed);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);
  // Synchronous flag: `dragDelta` is state, so it can still read stale inside
  // the click handler and wrongly swallow a plain click.
  const didDrag = useRef(false);

  const visible = useMemo(
    () => (filter === "all" ? photos : photos.filter((p) => p.category === filter)),
    [filter],
  );
  const count = visible.length;
  // Guard against a filter change leaving `active` past the end of the list.
  const safeActive = Math.min(active, Math.max(count - 1, 0));

  // Fade the lightbox out before unmounting it (matches the lightbox-out
  // animation duration) rather than having it vanish instantly.
  const closeLightbox = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setLightbox(null);
      setClosing(false);
    }, 200);
  }, []);

  // Slide width drives the cylinder radius, so it has to react to layout.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const width = el.clientWidth;
      const height = el.clientHeight;
      if (!width || !height) return;
      // Every photo is natively 2:3, so size the slide to that exact ratio
      // (off the height it actually occupies) and nothing gets cropped.
      const slideHeight = height * SLIDE_HEIGHT_RATIO;
      setSlideWidth(
        Math.round(Math.min(slideHeight * (2 / 3), width * 0.42)),
      );
    };
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Same trigger ScrollGroup uses elsewhere — fires once, when the carousel
  // itself scrolls into view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || revealed) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  useEffect(() => {
    if (!revealed || revealSettled) return;
    const timeout = setTimeout(() => setRevealSettled(true), count * 60 + 900);
    return () => clearTimeout(timeout);
  }, [revealed, revealSettled, count]);

  const radius = (slideWidth + SLIDE_GAP) / (2 * Math.tan(toRadians(ANGLE) / 2));

  const go = (next: number) => {
    setActive(((next % count) + count) % count);
  };

  // Functional updater so rapid presses each build on the previous value.
  const step = (delta: number) => {
    setActive((prev) => (((prev + delta) % count) + count) % count);
  };

  // Arrow keys drive the slider whenever it's on screen — no click required.
  // Left/right arrows don't scroll the page vertically, so claiming them
  // while the slider is in view doesn't fight normal scrolling.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightbox !== null) {
        if (event.key === "Escape") closeLightbox();
        if (event.key === "ArrowLeft")
          setLightbox((i) => (i === null ? i : (i - 1 + count) % count));
        if (event.key === "ArrowRight")
          setLightbox((i) => (i === null ? i : (i + 1) % count));
        return;
      }

      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

      // Measure on the keypress itself rather than tracking scroll — it only
      // runs when an arrow is actually pressed, so it's cheaper than an
      // observer and has no setup/teardown to get out of sync.
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const onScreen =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      if (onScreen < rect.height * 0.4) return;

      event.preventDefault();
      setActive((prev) =>
        ((((prev + (event.key === "ArrowLeft" ? -1 : 1)) % count) + count) %
          count),
      );
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [count, lightbox, closeLightbox]);

  // Don't let the page scroll behind an open lightbox.
  useEffect(() => {
    if (lightbox === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lightbox]);

  /**
   * Chromium doesn't hit-test through to the slides: they're 3D-transformed
   * inside a preserve-3d/perspective subtree, so a real pointer click lands on
   * the wrapper and the button's own onClick never fires (synthetic .click()
   * does work, which is what made this look fine in testing). So we listen on
   * the container and resolve which slide is genuinely under the cursor.
   */
  const resolveSlideIndex = (event: React.MouseEvent): number | null => {
    // Keyboard activation targets the button directly.
    const direct = (event.target as HTMLElement).closest?.("[data-slide-index]");
    if (direct) return Number((direct as HTMLElement).dataset.slideIndex);

    if (!event.clientX && !event.clientY) return null;
    const hit = document
      .elementsFromPoint(event.clientX, event.clientY)
      .find((node) => (node as HTMLElement).dataset?.slideIndex !== undefined);
    return hit ? Number((hit as HTMLElement).dataset.slideIndex) : null;
  };

  const openSlide = (event: React.MouseEvent) => {
    if (didDrag.current) return;
    const index = resolveSlideIndex(event);
    if (index === null || Number.isNaN(index)) return;
    if (index !== safeActive) go(index);
    setClosing(false);
    setLightbox(index);
  };

  const endDrag = () => {
    if (dragStart.current === null) return;
    dragStart.current = null;
    setIsDragging(false);
    const steps = Math.round(-dragDelta / (slideWidth * 0.6));
    if (steps !== 0) step(steps);
    setDragDelta(0);
    if (containerRef.current) containerRef.current.style.cursor = "";
  };

  const current = visible[safeActive];

  return (
    <div className="select-none">
      {/* Filters */}
      <ScrollGroup className="mb-8 flex flex-wrap items-center justify-center gap-2 px-6">
        {CATEGORIES.map((category) => {
          const isOn = filter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setFilter(category.id);
                setActive(0);
              }}
              aria-pressed={isOn}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                isOn
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </ScrollGroup>

      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Photography"
        className="relative mx-auto h-[clamp(22rem,46vw,34rem)] w-full touch-pan-y overflow-hidden"
        style={{ perspective: "1200px" }}
        onPointerDown={(event) => {
          dragStart.current = event.clientX;
          didDrag.current = false;
          setIsDragging(true);
          if (containerRef.current) containerRef.current.style.cursor = "grabbing";
        }}
        onPointerMove={(event) => {
          // Slides are 3D-transformed, so the browser hit-tests to the wrapper
          // and never applies their cursor. Work out what's actually under the
          // pointer and set the cursor here instead. pointermove is already
          // rate-limited by the browser, so this needs no extra throttling.
          const container = containerRef.current;

          if (dragStart.current !== null) {
            if (container) container.style.cursor = "grabbing";
            const delta = event.clientX - dragStart.current;
            if (Math.abs(delta) > 8) didDrag.current = true;
            setDragDelta(delta);
            return;
          }

          if (container) {
            const overSlide = document
              .elementsFromPoint(event.clientX, event.clientY)
              .some(
                (node) =>
                  (node as HTMLElement).dataset?.slideIndex !== undefined,
              );
            container.style.cursor = overSlide ? "pointer" : "";
          }
        }}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClick={openSlide}
      >
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {visible.map((photo, index) => {
            let offset = index - safeActive;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const fractional = offset - dragDelta / slideWidth;
            const theta = fractional * ANGLE;
            const radians = toRadians(theta);

            // A true concave cylinder: each photo sits on a ring, the centre
            // one flat against the viewing plane and the rest receding behind
            // it. x = R·sinθ, z = -R·(1-cosθ), and the panel rotates by +θ to
            // stay tangent to the ring. (The earlier damped version flipped
            // the rotation sign, which is what made the tilt look off.)
            const x = radius * Math.sin(radians);
            const z = -radius * (1 - Math.cos(radians));
            const hidden = Math.abs(fractional) > VISIBLE_RANGE;

            // Reveal cascade follows visual position, not DOM order: the
            // rightmost visible slide (largest offset, ~+2 at the visible
            // edge) fades in first, then each slide to its left a beat
            // later. Cleared to 0 once the one-time reveal has settled.
            const revealDelay = revealSettled ? 0 : Math.max(0, 2 - offset) * 60;

            return (
              <button
                key={photo.id}
                type="button"
                aria-hidden={hidden}
                tabIndex={hidden ? -1 : 0}
                aria-label={`Open ${photo.title}`}
                data-slide-index={index}
                className="absolute left-1/2 top-1/2 block cursor-pointer overflow-hidden rounded-2xl border border-white/10"
                style={{
                  width: slideWidth,
                  height: "88%",
                  // Percentage margins resolve against the container's *width*,
                  // so centring has to be done with a translate instead.
                  transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${theta}deg)`,
                  // The reveal stagger only touches opacity, given its own
                  // delay right in this same transition value — never the
                  // .scroll-stagger-item class, and never the transform,
                  // both of which are already fully owned by the carousel's
                  // own position math above (an inline style always wins
                  // over a CSS class for the same property, and a second
                  // Y-offset folded into this transform would fight the
                  // x/z/theta positioning).
                  transition: isDragging
                    ? "none"
                    : hidden
                      ? // Wrapping slide: reposition instantly while invisible,
                        // otherwise it visibly flies across the frame.
                        `opacity 400ms ease ${revealDelay}ms`
                      : `transform 500ms cubic-bezier(0.22,1,0.36,1), opacity 400ms ease ${revealDelay}ms`,
                  opacity: hidden ? 0 : revealed ? 1 : 0,
                  pointerEvents: hidden ? "none" : "auto",
                  zIndex: 100 - Math.round(Math.abs(fractional) * 10),
                }}
              >
                <Image
                  key={filter}
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(min-width: 640px) 380px, 60vw"
                  quality={90}
                  className="object-cover animate-[photo-fade_450ms_ease-out] motion-reduce:animate-none"
                  draggable={false}
                  priority={index < 3}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Caption + controls — title, camera line, and the control row each
          stagger in as their own beat. No shared `gap` here (that would
          also land between title and camera, which need to stay tight
          together) — the old gap-8 between the caption and the controls is
          reproduced as an explicit mt-8 on the controls row instead. */}
      <ScrollGroup className="mx-auto mt-4 flex max-w-xl flex-col items-center px-6 text-center">
        <p className="font-display text-lg font-semibold transition-all duration-700">
          {current?.title}
        </p>
        <p className="mt-1 text-xs text-muted transition-all duration-700">{CAMERA}</p>

        <div className="mt-8 flex items-center gap-4 transition-all duration-700">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/5"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="flex items-center gap-2">
            {visible.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => go(index)}
                aria-label={`Go to ${photo.title}`}
                aria-current={index === safeActive}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === safeActive
                    ? "w-6 bg-foreground"
                    : "w-2 bg-foreground/25 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/5"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </ScrollGroup>

      {/* Lightbox — portalled to <body>: an ancestor with a transform (the
          full-bleed wrapper, or the route-transition wrapper) would otherwise
          become the containing block for position:fixed. */}
      {lightbox !== null &&
        visible[lightbox] &&
        createPortal(
          <div
          role="dialog"
          aria-modal="true"
          aria-label={visible[lightbox].title}
          onClick={closeLightbox}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm motion-reduce:animate-none sm:p-10 ${
            closing
              ? "animate-[lightbox-out_200ms_ease-in_forwards]"
              : "animate-[lightbox-in_250ms_ease-out]"
          }`}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-8 sm:top-8"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              setLightbox((i) => (i === null ? i : (i - 1 + count) % count));
            }}
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:left-8"
          >
            <span aria-hidden="true">←</span>
          </button>

          {/* Stop clicks on the figure itself from closing the dialog. */}
          <figure
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full flex-col items-center gap-4"
          >
            <div className="relative h-[70vh] w-[min(90vw,60rem)]">
              <Image
                key={visible[lightbox].id}
                src={visible[lightbox].image}
                alt={visible[lightbox].title}
                fill
                sizes="(min-width: 640px) 60rem, 90vw"
                quality={90}
                className="rounded-2xl object-contain animate-[photo-fade_300ms_ease-out] motion-reduce:animate-none"
                priority
              />
            </div>
            <figcaption className="text-center">
              <p className="font-display text-lg font-semibold text-white">
                {visible[lightbox].title}
              </p>
              <p className="mt-1 text-xs text-white/60">{CAMERA}</p>
              <a
                href={visible[lightbox].url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-white/80 underline underline-offset-4 hover:text-white"
              >
                View on Instagram ↗
              </a>
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              setLightbox((i) => (i === null ? i : (i + 1) % count));
            }}
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-8"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>,
          document.body,
        )}
    </div>
  );
}
