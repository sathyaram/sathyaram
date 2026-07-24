import type { CSSProperties, ElementType } from "react";

type Segment = { text: string; className?: string };

type Letter = { char: string; className?: string };

type RevealProps = {
  /** Plain string, or segments so parts can carry their own class (e.g. the
   *  glowing part of the hero name) while sharing one continuous stagger. */
  text?: string;
  segments?: Segment[];
  as?: ElementType;
  className?: string;
  /** Passed straight through to the outer Tag — e.g. a per-instance
   *  `--name-gradient` custom property for gradient-text-name callers that
   *  aren't the fixed hero palette. */
  style?: CSSProperties;
  /** ms before the first letter starts. */
  delay?: number;
  /** ms between successive letters. */
  step?: number;
};

/**
 * Splits text into per-letter spans that rise + fade into place with a
 * stagger (the CSS lives in .reveal-letter / @keyframes letter-rise).
 *
 * Each letter is its own `inline-block`, which is what makes the animation
 * possible — but it also means the browser treats the gap between *any* two
 * letters as a valid line-break point, not just the gaps between words. So
 * letters are grouped into per-word wrappers (`white-space: nowrap`) here:
 * a line can still break between words, exactly like normal text, but never
 * inside one.
 */
export default function Reveal({
  text,
  segments,
  as: Tag = "span",
  className,
  style,
  delay = 0,
  step = 26,
}: RevealProps) {
  const parts: Segment[] = segments ?? [{ text: text ?? "" }];
  const label = parts.map((part) => part.text).join("");

  // Flatten to words (each a run of letters, carrying its segment's class)
  // and the spaces between them, so word boundaries survive even when a
  // styled segment (like the glowing name) starts or ends mid-string.
  const words: Letter[][] = [[]];
  for (const part of parts) {
    for (const char of part.text) {
      if (char === " ") {
        words.push([]);
      } else {
        words[words.length - 1].push({ char, className: part.className });
      }
    }
  }

  let letterIndex = 0;

  return (
    <Tag className={className} style={style}>
      {/* The animated per-letter spans below are aria-hidden, so the real,
          readable text lives here as a visually-hidden copy. This gives
          assistive tech (and the heading's accessible name, when Tag is an
          h1/h2/h3) the actual words — without putting an aria-label on a
          generic <span>, which ARIA prohibits (Lighthouse flags it). */}
      <span className="sr-only">{label}</span>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {wordIndex > 0 ? " " : ""}
          {word.map((letter, charIndex) => {
            const index = letterIndex++;
            return (
              <span
                key={charIndex}
                aria-hidden="true"
                className={`reveal-letter ${letter.className ?? ""}`}
                style={{ animationDelay: `${delay + index * step}ms` }}
              >
                {letter.char}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
