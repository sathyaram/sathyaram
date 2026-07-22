import Link from "next/link";

const categories = [
  {
    href: "/websites",
    eyebrow: "Development",
    title: "Websites",
  },
  {
    href: "/designs",
    eyebrow: "Design",
    title: "Graphic & Interface",
  },
  {
    href: "/photography",
    eyebrow: "Photography",
    title: "In my free time",
  },
];

export default function Home() {
  return (
    <div className="px-6 py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Websites · Design · Photography
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-accent">Hi, I&apos;m Sathya.</span>
          <br />
          <span>I build & design things.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          I build institutional websites, design brand and interface work,
          and shoot photography on the side.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="block rounded-3xl border border-border p-6 transition-colors hover:border-foreground/30"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-muted">
                {category.eyebrow}
              </p>
              <p className="mt-2 font-display text-xl font-semibold">
                {category.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
