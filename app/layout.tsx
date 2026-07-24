import type { Metadata } from "next";
import { Bricolage_Grotesque, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";
import StarFieldThree from "@/components/StarFieldThree";
import RouteTransition from "@/components/RouteTransition";
import IntroLoader from "@/components/IntroLoader";
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

export const metadata: Metadata = {
  title: {
    template: "%s | Sathya Ram",
    default: "Sathya Ram",
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
        {/* Shared gradient def for the footer icons (dark mode) — same
            stops as the logo mark's own gradient. SVG fill/stroke can
            reference this by id from anywhere on the page. */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="brand-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#70d5ff" />
              <stop offset="35%" stopColor="#c9a9e0" />
              <stop offset="65%" stopColor="#0059bc" />
              <stop offset="100%" stopColor="#8fd9c4" />
            </linearGradient>
          </defs>
        </svg>
        <IntroLoader />
        <GradientBackground />
        <StarFieldThree />
        <Nav />
        <main className="flex-1">
          <RouteTransition>{children}</RouteTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
