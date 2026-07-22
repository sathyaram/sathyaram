"use client";

import { useEffect, useRef } from "react";

function mulberry32(seed: number) {
  return function random() {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateStars(count: number, seed: number) {
  const random = mulberry32(seed);
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = (random() * 100).toFixed(2);
    const y = (random() * 100).toFixed(2);
    shadows.push(`${x}vw ${y}vh #fff`);
  }
  return shadows.join(", ");
}

const smallStars = generateStars(140, 1);
const bigStars = generateStars(50, 2);

// How far each layer shifts opposite the cursor, in pixels. Big/"closer"
// stars move much more than small/"farther" ones — the depth cue is what
// sells the effect, and it should read immediately, not subtly.
const SMALL_LAYER_REACH = 35;
const BIG_LAYER_REACH = 85;
const EASE = 0.08;

export default function StarField() {
  const smallRef = useRef<HTMLDivElement>(null);
  const bigRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    function handlePointerMove(event: PointerEvent) {
      target.x = event.clientX / window.innerWidth - 0.5;
      target.y = event.clientY / window.innerHeight - 0.5;
    }

    function animate() {
      current.x += (target.x - current.x) * EASE;
      current.y += (target.y - current.y) * EASE;

      if (smallRef.current) {
        smallRef.current.style.transform = `translate(${current.x * -SMALL_LAYER_REACH}px, ${current.y * -SMALL_LAYER_REACH}px)`;
      }
      if (bigRef.current) {
        bigRef.current.style.transform = `translate(${current.x * -BIG_LAYER_REACH}px, ${current.y * -BIG_LAYER_REACH}px)`;
      }

      frame = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", handlePointerMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden dark:block"
    >
      {/* Outer layers drift on their own via CSS; inner refs get the
          cursor-driven transform in JS. Nesting keeps the two transforms
          from fighting over the same element's `transform` property. */}
      <div className="absolute inset-0 animate-[star-drift-small_70s_ease-in-out_infinite] motion-reduce:animate-none">
        <div
          ref={smallRef}
          className="absolute h-[1px] w-[1px] animate-[star-twinkle_5s_ease-in-out_infinite] rounded-full bg-white motion-reduce:animate-none"
          style={{ boxShadow: smallStars }}
        />
      </div>
      <div className="absolute inset-0 animate-[star-drift-big_50s_ease-in-out_infinite] motion-reduce:animate-none">
        <div
          ref={bigRef}
          className="absolute h-[2px] w-[2px] animate-[star-twinkle_7s_ease-in-out_infinite] rounded-full bg-white motion-reduce:animate-none"
          style={{ boxShadow: bigStars, animationDelay: "2s" }}
        />
      </div>
    </div>
  );
}
