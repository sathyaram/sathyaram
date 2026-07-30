import Link from "next/link";
import ScrollGroup from "./ScrollGroup";
import { contactLinks, socialLinks } from "@/lib/social";
import { projectOrder } from "@/lib/projects";

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
      <Icon className={compact ? "h-5 w-5" : "h-6 w-6"} />
      {label}
    </a>
  );
}

const columnHeading =
  "text-[11px] font-medium uppercase tracking-widest text-muted";
const columnLink =
  "text-sm text-muted transition-colors duration-300 hover:text-foreground";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/*
        Sitemap columns. Work is the load-bearing one: before this, the case
        studies were only reachable from the homepage grid (and prev/next
        between themselves), so nothing else on the site linked to them.
        Both Work and Elsewhere are generated from the same lists that drive
        the homepage grid and the social row, so the footer can't drift out
        of sync with what actually exists.
      */}
      <div className="mx-auto max-w-5xl px-6 pt-12 pb-10">
        <ScrollGroup className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          <nav aria-label="Work">
            <h2 className={columnHeading}>Work</h2>
            <ul className="mt-4 space-y-2.5">
              {projectOrder.map((project) => (
                <li key={project.slug}>
                  <Link href={`/websites/${project.slug}`} className={columnLink}>
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site">
            <h2 className={columnHeading}>Site</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/about" className={columnLink}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className={columnLink}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/colophon" className={columnLink}>
                  Colophon
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact keeps its icons — these are actions (open mail, open the
              CV), not navigation, so they read differently from the plain
              text links either side. */}
          <nav aria-label="Contact" className="col-span-2 sm:col-span-1">
            <h2 className={columnHeading}>Get in touch</h2>
            <ul className="mt-4 space-y-2.5">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink {...item} />
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere" className="col-span-2 sm:col-span-1">
            <h2 className={columnHeading}>Elsewhere</h2>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink {...item} />
                </li>
              ))}
            </ul>
          </nav>
        </ScrollGroup>
      </div>

      <div className="border-t border-border px-6 py-4">
        {/* A 3-column grid rather than flex justify-between — with only
            two items, justify-between pushes them to the edges and any
            third item just gets squeezed into whatever space is left,
            which isn't the same as being centered on the row. Grid columns
            give the location its own slot genuinely centered on the row,
            independent of how wide the other two happen to be. */}
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center text-xs text-muted sm:grid sm:grid-cols-3 sm:text-left">
          <p className="sm:justify-self-start">Developer &amp; Designer</p>
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
