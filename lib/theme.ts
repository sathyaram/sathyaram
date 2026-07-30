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

export function setTheme(theme: Theme) {
  const root = document.documentElement;

  // Suppress the hero's transition for exactly the frame the theme flips.
  // .name-glow carries a 2s `color` transition for its hover-glow fade, so a
  // theme switch would drag the hero to its new colour seconds behind the
  // rest of the page. The CSS rule this enables is scoped to .name-glow
  // alone — every other element keeps its colour transition through the
  // switch, which is the look we want.
  root.classList.add("theme-switching");

  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  listeners.forEach((listener) => listener());

  // Two rAFs: the first lets the new colours get committed with transitions
  // still off, the second re-enables them once that paint has happened. One
  // frame isn't always enough — the class removal can land in the same paint
  // as the colour change, which is exactly what we're trying to avoid.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove("theme-switching");
    });
  });
}

export function subscribeTheme(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
