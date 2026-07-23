import type { ElementType } from "react";

type Segment = { text: string; className?: string };

type RevealProps = {
  /** Plain string, or segments so parts can carry their own class (e.g. the
   *  glowing part of the hero name) while sharing one continuous stagger. */
  text?: string;
  segments?: Segment[];
  as?: ElementType;
  className?: string;
  /** ms before the first letter starts. */
  delay?: number;
  /** ms between successive letters. */
  step?: number;
};

/**
 * Splits text into per-letter spans that rise + fade into place with a
 * stagger (the CSS lives in .reveal-letter / @keyframes letter-rise). The
 * whole string is exposed to assistive tech via aria-label while the letter
 * spans are hidden from it.
 */
export default function Reveal({
  text,
  segments,
  as: Tag = "span",
  className,
  delay = 0,
  step = 26,
}: RevealProps) {
  const parts: Segment[] = segments ?? [{ text: text ?? "" }];
  const label = parts.map((part) => part.text).join("");

  let letterIndex = 0;

  return (
    <Tag className={className} aria-label={label}>
      {parts.map((part, partIndex) =>
        Array.from(part.text).map((char, charIndex) => {
          const index = letterIndex++;
          return (
            <span
              key={`${partIndex}-${charIndex}`}
              aria-hidden="true"
              className={`reveal-letter ${part.className ?? ""}`}
              style={{ animationDelay: `${delay + index * step}ms` }}
            >
              {char === " " ? " " : char}
            </span>
          );
        }),
      )}
    </Tag>
  );
}
