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
      <Icon className={compact ? "h-6 w-6" : "h-7 w-7"} />
      {label}
    </a>
  );
}

const row = "flex flex-wrap items-center justify-center gap-x-7 gap-y-3";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Two rows: ways to reach me, then profiles on platforms. They're
          different kinds of link, so they don't share a line. The rule
          between them sits outside the max-width wrapper so it runs the
          full width of the page, matching the one above the copyright. */}
      <div className="mx-auto max-w-5xl px-6 pb-6 pt-8">
        <nav aria-label="Contact">
          <ScrollGroup className={row}>
            {contactLinks.map((item) => (
              <FooterLink key={item.label} {...item} />
            ))}
          </ScrollGroup>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <nav aria-label="Elsewhere">
            <ScrollGroup className={row}>
              {socialLinks.map((item) => (
                <FooterLink key={item.label} {...item} />
              ))}
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
            independent of how wide Colophon or the copyright happen to be. */}
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center text-xs text-muted sm:grid sm:grid-cols-3 sm:text-left">
          <Link
            href="/colophon"
            className="underline underline-offset-4 transition-colors hover:text-foreground sm:justify-self-start"
          >
            Colophon
          </Link>
          <p className="sm:justify-self-center sm:text-center">
            Based in the DMV area (DC · MD · VA)
          </p>
          <p className="sm:justify-self-end sm:text-right">
            &copy; {new Date().getFullYear()} Sathya Ram.
          </p>
        </div>
      </div>
    </footer>
  );
}
