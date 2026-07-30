import Link from "next/link";
import ScrollGroup from "./ScrollGroup";
import { contactLinks, socialLinks } from "@/lib/social";

type LinkItem = {
  label: string;
  href: string;
  icon: (props: { className?: string }) => React.ReactElement;
  compact?: boolean;
};

/*
 * Solid brand blue in light mode; the same gradient as the logo mark in dark
 * mode, animated the way the Services/Work/Photography kickers pan (see
 * .icon-gradient-fill / -stroke plus the gradient's own <animateTransform>
 * in layout.tsx). The label itself doesn't gradiate — it just tracks the
 * theme foreground colour. Stroke-drawn icons read larger than the filled
 * brand marks at the same box size, so `compact` sizes those down.
 */
function FooterLink({
  label,
  href,
  icon: Icon,
  compact,
  className = "",
  ...rest
}: LinkItem & React.ComponentPropsWithoutRef<"a">) {
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

const columnHeading =
  "text-[11px] font-medium uppercase tracking-widest text-muted";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/*
        Two columns of links: ways to reach me, and places I post work. The
        pair is centred as a unit on desktop (a max-width block inside an
        auto-margin wrapper) rather than spread across the full width, so the
        two lists stay visually related instead of drifting to opposite edges.
        Both come from the same lists the mobile nav menu uses, so they can't
        drift out of sync.
      */}
      {/* A ScrollGroup per column rather than one around the grid: as the
          grid's wrapper it only had two direct children to stagger (the two
          navs), so each column arrived as a single block. Inside each nav it
          staggers the heading and the list separately. Not nested, since two
          layers of ScrollGroup would both be driving opacity on the same
          subtree. Every staggered child needs its own `transition`, or the
          opacity/transform snap and the inline delay has nothing to delay. */}
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-8">
        {/* From sm the grid shrinks to its content (w-fit) instead of holding a
            fixed max-w-md. With the fixed width each 208px column carried only
            ~100px of ink, so ~110px of dead space per column sat to the right
            of the labels and dragged the whole visible block ~53px left of the
            page centre — the box was centred, but the part you can actually see
            wasn't. Sizing to content makes those two the same thing. Mobile
            keeps the fixed-width behaviour, which already reads fine at that
            width. */}
        <div className="mx-auto grid max-w-md grid-cols-2 gap-x-8 gap-y-8 sm:w-fit sm:max-w-none sm:gap-x-16">
          <nav aria-label="Contact">
            <ScrollGroup>
              <h2 className={`${columnHeading} transition-all duration-700`}>
                Get in touch
              </h2>
              <ul className="mt-4 space-y-2.5 transition-all duration-700">
                {contactLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            </ScrollGroup>
          </nav>

          <nav aria-label="Elsewhere">
            <ScrollGroup>
              <h2 className={`${columnHeading} transition-all duration-700`}>
                Elsewhere
              </h2>
              <ul className="mt-4 space-y-2.5 transition-all duration-700">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            </ScrollGroup>
          </nav>
        </div>
      </div>

      <div className="border-t border-border px-6 py-4">
        {/* A 3-column grid rather than flex justify-between — with only
            two items, justify-between pushes them to the edges and any
            third item just gets squeezed into whatever space is left,
            which isn't the same as being centered on the row. Grid columns
            give the location its own slot genuinely centered on the row,
            independent of how wide the other two happen to be. */}
        <ScrollGroup className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center text-xs text-muted sm:grid sm:grid-cols-3 sm:text-left">
          <Link
            href="/colophon"
            className="underline underline-offset-4 transition-all duration-700 hover:text-foreground sm:justify-self-start"
          >
            Colophon
          </Link>
          <p className="transition-all duration-700 sm:justify-self-center sm:text-center">
            Based in the DMV area (DC · MD · VA)
          </p>
          <p className="transition-all duration-700 sm:justify-self-end sm:text-right">
            &copy; {new Date().getFullYear()} Sathya Ram.
          </p>
        </ScrollGroup>
      </div>
    </footer>
  );
}
