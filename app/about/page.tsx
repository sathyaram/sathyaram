import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ScrollGroup from "@/components/ScrollGroup";

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

const certifications = [
  { title: "Google Analytics", detail: "Certification" },
  { title: "Acquia Certified Front End Specialist", detail: "Certification" },
];

// Two-column section: a script heading in the left column (right-aligned
// into the gutter) beside larger body copy on the right — the editorial
// layout from the old site's About page. Stacks on mobile.
const sectionGrid =
  "mt-16 grid gap-2 sm:mt-24 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-12";
// Left-aligned in its own column. The padding-bottom is not decorative:
// Californication is a script face with long descenders, and leading-none
// clips them without a little room underneath.
const scriptHeading =
  "font-script text-3xl leading-none text-foreground gradient-text-name pb-2 transition-all duration-700 dark:text-logo-blue sm:pt-1.5 sm:text-[2.5rem]";

export default function About() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal
          as="h1"
          className="block text-center font-display font-bold leading-[1.05] tracking-[-0.035em] text-logo-blue text-[clamp(2.5rem,7.4vw,5.75rem)]"
          text="About"
        />

        {sections.map((section) => (
          <ScrollGroup key={section.heading} className={sectionGrid}>
            <h2 className={scriptHeading}>{section.heading}</h2>
            <div className="space-y-5 text-lg leading-relaxed text-foreground transition-all duration-700 sm:text-xl">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ScrollGroup>
        ))}

        <ScrollGroup className={sectionGrid}>
          <h2 className={scriptHeading}>Awards &amp; Publications</h2>
          <ul className="space-y-3 transition-all duration-700">
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
                    className="text-lg font-medium hover:text-accent"
                  >
                    {award.title}
                  </a>
                ) : (
                  <span className="text-lg font-medium">{award.title}</span>
                )}
                <span className="text-sm text-muted">{award.detail}</span>
              </li>
            ))}
          </ul>
        </ScrollGroup>

        <ScrollGroup className={sectionGrid}>
          <h2 className={scriptHeading}>Certifications</h2>
          <ul className="space-y-3 transition-all duration-700">
            {certifications.map((cert) => (
              <li
                key={cert.title}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-3"
              >
                <span className="text-lg font-medium">{cert.title}</span>
                <span className="text-sm text-muted">{cert.detail}</span>
              </li>
            ))}
          </ul>
        </ScrollGroup>
      </div>
    </div>
  );
}
