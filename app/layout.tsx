import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";
import StarFieldThree from "@/components/StarFieldThree";
import RouteTransition from "@/components/RouteTransition";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const californication = localFont({
  src: "./fonts/Californication.ttf",
  variable: "--font-script",
  display: "swap",
});

// Google Analytics 4 — same property as the current live site
// (sathyaram.com), loaded via next/script afterInteractive so it stays off
// the critical render path.
const GA_ID = "G-V2ZX65PRKW";

export const metadata: Metadata = {
  metadataBase: new URL("https://sathyaram.com"),
  title: {
    // Sub-pages read "About | Sathya Ram" (specific first, brand last, so
    // tabs/search snippets stay useful when truncated). The homepage is the
    // exception — it leads with the brand + role rather than a throwaway
    // "Home", since it owns the strongest SEO slot on the site.
    template: "%s | Sathya Ram",
    default: "Sathya Ram — Developer & Designer",
  },
  description: "Portfolio of Sathya Ram — websites, design, and photography.",
};

// Dark is the default, so <html> ships with the class and this only strips
// it back off for visitors who explicitly chose light. Runs before paint.
const themeInitScript = `(function () {
  try {
    var stored = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", stored !== "light");
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${workSans.variable} ${californication.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="relative min-h-full flex flex-col font-sans">
        {/* Shared gradient def for the footer icons (dark mode) — the same
            light-blue-to-dark-blue gradient as the logo mark's own R-line
            (components/Logo.tsx), kept in constant motion (via the
            rotating gradientTransform below) the same way the hero name
            and section kickers pan. SVG fill/stroke can reference this by
            id from anywhere on the page. */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="brand-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 0.5 0.5"
                to="360 0.5 0.5"
                dur="8s"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#70d5ff" />
              <stop offset="100%" stopColor="#0059bc" />
            </linearGradient>
          </defs>
        </svg>
        <GradientBackground />
        <StarFieldThree />
        <Nav />
        <main className="flex-1">
          <RouteTransition>{children}</RouteTransition>
        </main>
        <Footer />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
