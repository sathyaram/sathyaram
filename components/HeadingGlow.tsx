"use client";

import { useEffect } from "react";

// Section headings light up while they sit in a strip near the top of the
// viewport (roughly the top 300px) and unlight once they scroll out of it.
// This toggles the `is-lit` class on every [data-glow-heading]; the actual
// glow lives in globals.css (.heading-glow / .dark .heading-glow.is-lit).
const BAND_TOP = 30;
const BAND_BOTTOM = 300;

export default function HeadingGlow() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      document
        .querySelectorAll<HTMLElement>("[data-glow-heading]")
        .forEach((el) => {
          const { top } = el.getBoundingClientRect();
          el.classList.toggle("is-lit", top > BAND_TOP && top < BAND_BOTTOM);
        });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
