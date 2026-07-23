"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { photos, CAMERA, CATEGORIES, type Category } from "@/lib/photos";
import { CloseIcon } from "./icons";

// Degrees between neighbouring slides on the cylinder. The reference slider
// uses 30°, which reads as a gentle panorama rather than a carousel.
const ANGLE = 30;
// Beyond ~2.5 steps a slide is near edge-on (75°+) and just balloons toward
// the camera, so we fade it out rather than render it.
const VISIBLE_RANGE = 2.5;

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

export default function PanoramaSlider() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [active, setActive] = useState(0);
  const [slideWidth, setSlideWidth] = useState(320);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

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

  // Slide width drives the cylinder radius, so it has to react to layout.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const width = el.clientWidth;
      if (!width) return;
      setSlideWidth(Math.round(Math.min(width * 0.34, 420)));
    };
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const radius = slideWidth / (2 * Math.tan(toRadians(ANGLE) / 2));

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
        if (event.key === "Escape") setLightbox(null);
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
  }, [count, lightbox]);

  // Don't let the page scroll behind an open lightbox.
  useEffect(() => {
    if (lightbox === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lightbox]);

  const endDrag = () => {
    if (dragStart.current === null) return;
    dragStart.current = null;
    setIsDragging(false);
    const steps = Math.round(-dragDelta / (slideWidth * 0.6));
    if (steps !== 0) step(steps);
    setDragDelta(0);
  };

  const current = visible[safeActive];

  return (
    <div className="select-none">
      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2 px-6">
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
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                isOn
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Photography"
        className="relative mx-auto h-[clamp(20rem,42vw,30rem)] w-full touch-pan-y overflow-hidden"
        style={{ perspective: "1200px" }}
        onPointerDown={(event) => {
          dragStart.current = event.clientX;
          didDrag.current = false;
          setIsDragging(true);
        }}
        onPointerMove={(event) => {
          if (dragStart.current === null) return;
          const delta = event.clientX - dragStart.current;
          if (Math.abs(delta) > 8) didDrag.current = true;
          setDragDelta(delta);
        }}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          key={filter}
          className="absolute inset-0 animate-[photo-fade_450ms_ease-out] motion-reduce:animate-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {visible.map((photo, index) => {
            let offset = index - safeActive;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const fractional = offset - dragDelta / slideWidth;
            const theta = fractional * ANGLE;
            const radians = toRadians(theta);

            const x = radius * Math.sin(radians);
            // Damped cylinder depth — at full strength the outer slides rush
            // the camera and balloon past the frame.
            const z = radius * (1 - Math.cos(radians)) * 0.7 - radius * 0.35;
            const hidden = Math.abs(fractional) > VISIBLE_RANGE;

            return (
              <button
                key={photo.id}
                type="button"
                aria-hidden={hidden}
                tabIndex={hidden ? -1 : 0}
                aria-label={`Open ${photo.title}`}
                onClick={() => {
                  // A drag shouldn't also open the lightbox.
                  if (didDrag.current) return;
                  if (offset !== 0) go(index);
                  else setLightbox(index);
                }}
                className="absolute left-1/2 top-1/2 block cursor-pointer overflow-hidden rounded-2xl border border-white/10"
                style={{
                  width: slideWidth,
                  height: "88%",
                  // Percentage margins resolve against the container's *width*,
                  // so centring has to be done with a translate instead.
                  transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${-theta}deg)`,
                  transition: isDragging
                    ? "none"
                    : hidden
                      ? // Wrapping slide: reposition instantly while invisible,
                        // otherwise it visibly flies across the frame.
                        "opacity 400ms ease"
                      : "transform 500ms cubic-bezier(0.22,1,0.36,1), opacity 400ms ease",
                  opacity: hidden ? 0 : 1,
                  pointerEvents: hidden ? "none" : "auto",
                  zIndex: 100 - Math.round(Math.abs(fractional) * 10),
                }}
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(min-width: 640px) 420px, 62vw"
                  className="object-cover"
                  draggable={false}
                  priority={index < 3}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Caption + controls */}
      <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-4 px-6 text-center">
        <div>
          <p className="font-display text-lg font-semibold">{current?.title}</p>
          <p className="mt-1 text-xs text-muted">{CAMERA}</p>
        </div>

        <div className="flex items-center gap-4">
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
      </div>

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
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-10"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
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
                src={visible[lightbox].image}
                alt={visible[lightbox].title}
                fill
                sizes="(min-width: 640px) 60rem, 90vw"
                className="rounded-2xl object-contain"
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
