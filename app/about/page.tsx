import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const sections = [
  {
    heading: "Synopsis",
    paragraphs: [
      "Hi there! I'm Sathya Ram.",
      "I design and develop modern websites — engaging layouts, user interfaces, and delightful web animations and interactions.",
      "I'm also an avid photographer and freelancer.",
      "Combining these skills, I bring beautiful digital experiences to life. At heart, I'm a creator: I believe in aesthetics with purpose.",
    ],
  },
  {
    heading: "At a Glance",
    paragraphs: [
      "I build websites with WordPress, Drupal, Next.js, and Webflow.",
      "I write HTML, CSS, Sass, front-end JavaScript, React, PHP, and Twig.",
      "I design and prototype in Figma and Adobe Illustrator.",
      "I capture photos with a Sony A7RIV.",
    ],
  },
  {
    heading: "Bio",
    paragraphs: [
      "I double majored in Design and Studio Art at Lehigh University. In my last year of college, I taught myself how to code and push my designs to the world wide web.",
      "After a couple years of agency experience, it became clear that web design and development was my passion — so I learned programming fundamentals in a formal setting, at a coding bootcamp called General Assembly, where I picked up JavaScript and React.js in a rigorous environment.",
      "I've since operated my own freelance website development, interface design, and photography practice, working with institutional and nonprofit clients.",
    ],
  },
];

const awards = [
  {
    title: "Leonard B. Pool Prize",
    detail: "Competitive Entrepreneurial Scholarship",
    href: "https://www2.lehigh.edu/news/36th-honors-convocation-celebrates-academic-excellence",
  },
  {
    title: "Olympus InVision Photography Festival",
    detail: "Second Place",
    href: "https://www.bananafactory.org/2015/11/11/2015-olympus-invision-college-photo-competition-winners-announced/",
  },
  {
    title: "PA BUG Best Portal Design Award",
    detail: "First Place",
    href: "https://pabug.org/",
  },
  { title: "Lehigh Acumen", detail: "Published Photography" },
  { title: "InStyle Magazine", detail: "Published Photography" },
  { title: "Hazl Magazine", detail: "Published Photography" },
];

export default function About() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          About
        </h1>

        {sections.map((section) => (
          <div key={section.heading} className="mt-12">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
            Awards &amp; Publications
          </h2>
          <ul className="mt-4 space-y-3">
            {awards.map((award) => (
              <li
                key={award.title}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-3"
              >
                {award.href ? (
                  <a
                    href={award.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-accent"
                  >
                    {award.title}
                  </a>
                ) : (
                  <span className="font-medium">{award.title}</span>
                )}
                <span className="text-sm text-muted">{award.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
