import type { SocialLink } from "@/lib/social";

/*
 * One "icon + label" row from lib/social.ts, shared by the footer and the
 * mobile menu so the two can't drift apart in styling the way they already
 * can't in content.
 *
 * Solid brand blue in light mode; the same gradient as the logo mark in dark
 * mode, animated the way the section kickers pan (see .icon-gradient-fill /
 * -stroke plus the gradient's own <animateTransform> in layout.tsx). The label
 * itself doesn't gradiate — it just tracks the theme foreground colour.
 * Stroke-drawn icons read larger than the filled brand marks at the same box
 * size, so `compact` sizes those down.
 */
export default function SocialLinkRow({
  label,
  href,
  icon: Icon,
  compact,
  className = "",
  ...rest
}: SocialLink & React.ComponentPropsWithoutRef<"a">) {
  const external = !href.startsWith("mailto:");
  return (
    <a
      href={href}
      // A mailto opened in a new tab leaves an empty tab behind once the mail
      // client takes over, so only real URLs get target/rel.
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      // ScrollGroup clones its stagger class, inline delay and data-visible
      // onto whatever its DIRECT children are — which is this component, not
      // the anchor. They have to be forwarded through, or the link keeps
      // .scroll-stagger-item's opacity:0 and never reveals.
      className={`inline-flex items-center gap-2.5 text-sm text-foreground transition-all duration-300 hover:opacity-80 ${className}`}
      {...rest}
    >
      {/* Fixed 24px slot so every row is the same height regardless of
          `compact`. Sizing the glyph directly meant the all-compact Contact
          column had 20px rows against Elsewhere's 24px, and with the same
          space-y on both lists the two columns visibly drifted out of step.
          The optical correction still happens, just inside a constant box. */}
      <span className="flex h-6 w-6 shrink-0 items-center justify-center">
        <Icon className={compact ? "h-5 w-5" : "h-6 w-6"} />
      </span>
      {label}
    </a>
  );
}
