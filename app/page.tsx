import Link from "next/link";
import Image from "next/image";
import Sparkle from "@/components/Sparkle";
import PanoramaSlider from "@/components/PanoramaSlider";

// Springy overshoot easing — the "delight" curve Seán Halpin uses on his cards.
const SPRING = "cubic-bezier(0.175,0.885,0.32,1.275)";

const featured = [
  {
    slug: "brookings",
    title: "The Brookings Institute",
    eyebrow: "Teal Media · 2020",
    blurb: "A mission-driven thinktank center.",
    color: "#93b8f2",
    image: "/websites/assets/brookings.webp",
  },
  {
    slug: "homeplanetfund",
    title: "Home Planet Fund",
    eyebrow: "Teal Media · 2024",
    blurb: "Patagonia's greenroots foundation.",
    color: "#8fd9c4",
    image: "/websites/assets/homeplanet.png",
  },
  {
    slug: "vilcek",
    title: "Vilcek Foundation",
    eyebrow: "ForumOne · 2020",
    blurb: "A celebration of immigrants & the arts.",
    color: "#c9a9e0",
    image: "/websites/assets/vilcek.png",
  },
  {
    slug: "sontag",
    title: "The Sontag Foundation",
    eyebrow: "Push10 · 2021",
    blurb: "The definitive enterprise for brain cancer research.",
    color: "#f0a8b4",
    image: "/websites/assets/sontag.png",
  },
];

export default function Home() {
  return (
    <div className="px-4 pb-24 sm:px-6">
      {/* ---------- Hero ---------- */}
      <section className="relative mx-auto max-w-5xl py-20 text-center sm:py-28">
        {/* Decorative sparkles, positioned asymmetrically around the headline */}
        <Sparkle className="absolute right-[6%] top-[14%] hidden h-10 w-10 animate-[sparkle-float_6s_ease-in-out_infinite] text-accent motion-reduce:animate-none sm:block sm:h-14 sm:w-14 dark:text-white" />
        <Sparkle className="absolute left-[4%] top-[52%] hidden h-8 w-8 animate-[sparkle-float_7s_ease-in-out_infinite] text-accent [animation-delay:-2s] motion-reduce:animate-none sm:block sm:h-11 sm:w-11 dark:text-white" />
        <Sparkle className="absolute bottom-[8%] right-[18%] hidden h-6 w-6 animate-[sparkle-float_8s_ease-in-out_infinite] text-accent/70 [animation-delay:-4s] motion-reduce:animate-none md:block dark:text-white/70" />

        <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.035em]">
          <span className="block text-accent">Hi. I&apos;m Sathya.</span>
          <span className="block">A Designer.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          I build institutional websites, design brand and interface work, and
          shoot photography on the side.
        </p>
      </section>

      {/* ---------- Featured work: 2×2 full-width grid ---------- */}
      <section className="mx-auto grid max-w-[1600px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/websites/${project.slug}`}
            style={{ backgroundColor: project.color, transitionTimingFunction: SPRING }}
            className="group relative flex min-h-[26rem] flex-col overflow-hidden rounded-[2.5rem] p-8 transition-transform duration-500 hover:-translate-y-2 sm:min-h-[34rem] sm:rounded-[4rem] sm:p-10"
          >
            {/* Flourish: pops in on hover, like Seán's card icons */}
            <Sparkle
              className="absolute right-8 top-8 h-7 w-7 translate-y-2 text-[#171412]/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-10 sm:top-10"
            />

            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#171412]/60">
              {project.eyebrow}
            </p>
            <h2 className="mt-2 max-w-[85%] font-display text-3xl font-bold leading-[1.05] text-[#171412] sm:text-[2.5rem]">
              {project.title}
            </h2>
            <p className="mt-3 max-w-sm text-sm text-[#171412]/70">
              {project.blurb}
            </p>

            {/* Screenshot fills the remaining space and eases up on hover */}
            <div
              className="relative mt-8 min-h-0 flex-1 overflow-hidden rounded-3xl shadow-lg transition-transform duration-500 group-hover:-translate-y-1"
              style={{ transitionTimingFunction: SPRING }}
            >
              <Image
                src={project.image}
                alt={`${project.title} website`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ transitionTimingFunction: SPRING }}
              />
            </div>
          </Link>
        ))}
      </section>

      <div className="mx-auto mt-12 max-w-[1600px] text-center">
        <Link
          href="/websites"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/30"
        >
          View all websites
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* ---------- Photography panorama ---------- */}
      <section className="mx-auto mt-28 max-w-[1600px] sm:mt-36">
        <div className="mb-12 text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted">
            Photography
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            In my free time.
          </h2>
        </div>

        <PanoramaSlider />

        <div className="mt-12 text-center">
          <Link
            href="/photography"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/30"
          >
            View all photography
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
