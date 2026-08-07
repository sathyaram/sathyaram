export type Theme = "light" | "dark";

const listeners = new Set<() => void>();

export function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// Dark (the starfield) is the site's default; light is opt-in.
export function getServerTheme(): Theme {
  return "dark";
}

/** Matches `transition: color 200ms` on body in globals.css — see below for
 *  why the suppression window has to outlast it rather than the flip itself. */
const THEME_FADE_MS = 200;

let releaseTimer: ReturnType<typeof setTimeout> | undefined;

export function setTheme(theme: Theme) {
  const root = document.documentElement;

  // Suppress the hero's own transition while the theme flips. .name-glow
  // carries a 2s `color` transition for its hover-glow fade, so left alone it
  // arrives at the new colour seconds behind the rest of the page. The CSS
  // rule this enables is scoped to .name-glow alone — every other element
  // keeps its colour transition through the switch, which is the look we want.
  root.classList.add("theme-switching");

  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  listeners.forEach((listener) => listener());

  // Held for the whole of body's colour fade, not just the frame that flips
  // the class. Those letters set no colour of their own — they inherit it from
  // body, all the way up through the hero — and body is itself animating over
  // THEME_FADE_MS. So the value .name-glow inherits keeps changing long after
  // the flip. Releasing after a frame or two (as this used to) handed the
  // letters back their 2s transition ~16% into body's fade, and they spent the
  // next two seconds easing toward a target that had already arrived: the
  // visible lag on the hero tagline.
  //
  // Kept off for the full fade instead, the letters have no transition to
  // apply, so each frame they simply take body's current animated value —
  // fading in exact lockstep with the rest of the page.
  clearTimeout(releaseTimer);
  releaseTimer = setTimeout(() => {
    root.classList.remove("theme-switching");
  }, THEME_FADE_MS + 50);
}

export function subscribeTheme(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
