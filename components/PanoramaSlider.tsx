"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { photos, CAMERA } from "@/lib/photos";

// Degrees between neighbouring slides on the cylinder. The reference slider
// uses 30°, which reads as a gentle panorama rather than a carousel.
const ANGLE = 30;
// Beyond ~2.5 steps a slide is near edge-on (75°+) and just balloons toward
// the camera, so we fade it out rather than render it.
const VISIBLE_RANGE = 2.5;

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

export default function PanoramaSlider() {
  const [active, setActive] = useState(0);
  const [slideWidth, setSlideWidth] = useState(320);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);

  // Slide width drives the cylinder radius, so it has to react to layout.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const width = el.clientWidth;
      if (!width) return;
      setSlideWidth(Math.round(Math.min(width * 0.62, 380)));
    };
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Radius that seats slides of this width edge-to-edge around the cylinder.
  const radius = slideWidth / (2 * Math.tan(toRadians(ANGLE) / 2));

  const go = (next: number) => {
    const count = photos.length;
    setActive(((next % count) + count) % count);
  };

  const endDrag = () => {
    if (dragStart.current === null) return;
    dragStart.current = null;
    setIsDragging(false);
    const steps = Math.round(-dragDelta / (slideWidth * 0.6));
    if (steps !== 0) go(active + steps);
    setDragDelta(0);
  };

  return (
    <div className="select-none">
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Photography"
        className="relative mx-auto h-[clamp(20rem,42vw,30rem)] w-full touch-pan-y overflow-hidden"
        style={{ perspective: "1200px" }}
        onPointerDown={(event) => {
          dragStart.current = event.clientX;
          setIsDragging(true);
        }}
        onPointerMove={(event) => {
          if (dragStart.current === null) return;
          setDragDelta(event.clientX - dragStart.current);
        }}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {photos.map((photo, index) => {
            // Shortest signed distance from the active slide, so the
            // panorama wraps around instead of dead-ending.
            let offset = index - active;
            if (offset > photos.length / 2) offset -= photos.length;
            if (offset < -photos.length / 2) offset += photos.length;

            // Fold the in-progress drag in as a fractional offset so the
            // whole cylinder turns with the pointer.
            const fractional = offset - dragDelta / slideWidth;
            const theta = fractional * ANGLE;
            const radians = toRadians(theta);

            const x = radius * Math.sin(radians);
            // True cylinder depth is radius * (1 - cos θ), but at full strength
            // the outer slides rush the camera and balloon past the frame.
            // Damping the excursion (and pushing the whole ring back) keeps the
            // curve readable while holding the panorama feel.
            const z = radius * (1 - Math.cos(radians)) * 0.7 - radius * 0.35;
            const hidden = Math.abs(fractional) > VISIBLE_RANGE;
            const isActive = offset === 0;

            return (
              <a
                key={photo.id}
                href={photo.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={hidden}
                tabIndex={hidden ? -1 : 0}
                draggable={false}
                onClick={(event) => {
                  // A drag shouldn't also open the link.
                  if (Math.abs(dragDelta) > 6) event.preventDefault();
                }}
                className="absolute left-1/2 top-1/2 block overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                style={{
                  width: slideWidth,
                  height: "100%",
                  // Percentage margins resolve against the container's *width*,
                  // so centring has to be done with a translate instead.
                  transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${-theta}deg)`,
                  transition: isDragging
                    ? "none"
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
                  sizes="(min-width: 640px) 380px, 62vw"
                  className="object-cover"
                  draggable={false}
                  priority={index < 3}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/40 transition-opacity duration-500"
                  // Enough to recede behind the active slide, but light enough
                  // that already-dark photos don't crush to black.
                  style={{ opacity: isActive ? 0 : 0.3 }}
                />
              </a>
            );
          })}
        </div>
      </div>

      {/* Caption + controls */}
      <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-4 px-6 text-center">
        <div>
          <p className="font-display text-lg font-semibold">
            {photos[active].title}
          </p>
          <p className="mt-1 text-xs text-muted">{CAMERA}</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous photo"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/5"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="flex items-center gap-2">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => go(index)}
                aria-label={`Go to ${photo.title}`}
                aria-current={index === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-6 bg-foreground"
                    : "w-2 bg-foreground/25 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next photo"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/5"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
