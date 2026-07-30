import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";
import StarFieldThree from "@/components/StarFieldThree";
import RouteTransition from "@/components/RouteTransition";
import { socialLinks } from "@/lib/social";
import { SITE_URL } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    // Brand first, consistently: every page reads "Sathya Ram | <page>", so
    // the tab keeps the same leading text as you navigate around instead of
    // flipping word order between the homepage and everywhere else. It also
    // means the brand survives a truncated tab, which the reverse order
    // ("About | Sathya Ram") doesn't.
    template: "Sathya Ram | %s",
    default: "Sathya Ram | Developer & Designer",
  },
  description: "Portfolio of Sathya Ram — websites, design, and photography.",
  // The card shown when the site is shared. og:image / twitter:image come
  // from app/opengraph-image.tsx automatically via the file convention.
  openGraph: {
    type: "website",
    siteName: "Sathya Ram",
    title: "Sathya Ram | Developer & Designer",
    description:
      "Portfolio of Sathya Ram — websites, design, and photography.",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathya Ram | Developer & Designer",
    description:
      "Portfolio of Sathya Ram — websites, design, and photography.",
  },
};

// Person schema for search engines / AI — a freelance individual, not a
// registered business, so Person is the accurate type rather than
// ProfessionalService. sameAs pulls straight from the same social list the
// footer renders, so the two can't drift apart.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sathya Ram",
  url: SITE_URL,
  jobTitle: "Web Developer & Designer",
  email: "mailto:sathyatheram@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "MD",
    addressCountry: "US",
  },
  sameAs: socialLinks.map((link) => link.href),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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
