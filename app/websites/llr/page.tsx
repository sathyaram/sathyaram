import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = pageMetadata({
  title: "South Carolina LLR",
  description:
    "Front-end development for the South Carolina Department of Labor, Licensing and Regulation with ForumOne: a Grav CMS build spanning professional licensing, OSHA, the state fire marshal, and elevator and amusement-ride inspection.",
  path: "/websites/llr",
  hasOwnCard: true,
});

export default function LLR() {
  return (
    <CaseStudy
      section="websites"
      slug="llr"
      title="South Carolina LLR"
      subtitle="Licensing and workplace safety for a whole state, on a flat-file Grav build where every service sits one search or two clicks from the front page."
      year="2019"
      agency="ForumOne"
      // Ruby into sapphire, both from the agency's shield mark, matching the
      // homepage card. Ruby leads because the title sits over it.
      gradientFrom="#b11e3a"
      gradientTo="#3f8ba2"
      url="llr.sc.gov"
      link="https://llr.sc.gov"
      description="South Carolina's Department of Labor, Licensing and Regulation licenses most of the regulated professions in the state. It also runs the state's OSHA program, the fire marshal's office, and the inspection of every elevator and amusement ride in South Carolina. One site, and the audience is essentially everyone who works."
      // Sector sits where the other client work carries a timeline, because I
      // don't have one for this engagement and a guessed duration would be the
      // only invented thing on the page. Role and Stack stay in columns two
      // and three, which is what keeps the row consistent site-wide.
      stats={[
        { label: "Sector", value: "State government" },
        { label: "Role", value: "Front-End Developer" },
        { label: "Stack", value: "Grav CMS · HTML/CSS · JS" },
      ]}
      overview={[
        "LLR is not one service, it is dozens. Apply for a license, check where an application got to, renew before it lapses, verify somebody else's license, print a replacement card, file a complaint, find when a board next meets. Each of those belongs to a different division, and almost nobody arrives knowing which one.",
        "So the front end's real job was navigation: make that surface crossable without flattening what is genuinely underneath it. Grav suited the content. It is flat-file, with no database behind it, and this is a site made overwhelmingly of structured pages that change on a schedule rather than by the minute.",
      ]}
      contributions={[
        "Built the Grav templates and the shared front-end component set used across divisions, boards and service pages",
        "Developed the task-led landing patterns that route people by what they came to do rather than by which division owns it",
        "Coded responsive layouts for license lookup, application status, renewals and complaint filing",
        "Implemented accessible navigation and forms for a site whose audience is the working population of an entire state",
      ]}
      highlights={[
        {
          title: "Organized by task, not by org chart",
          body:
            "The obvious way to structure a government site is by department, because that is how the organization understands itself. It is also the least useful structure for the person visiting, who wants to renew a license and has no reason to know which division issues it. The primary navigation leads with the verbs instead: apply, renew, verify, look up, file. The divisional structure is still there, one level down, for the people who do think that way, and for the staff who have to maintain it.",
        },
        {
          title: "Seven divisions, one front door",
          body:
            "SC OSHA. Wages and Child Labor. Labor Mediation. Immigration Compliance. Investigations and Enforcement. State Fire. Elevators and Amusement Rides. These have almost nothing in common except the agency they report to, and each arrives with its own forms, its own vocabulary and its own idea of who it is talking to. Holding them in one component set, rather than letting each division grow its own microsite, is most of what keeps the place coherent.",
        },
        {
          title: "Accessibility is the job, not the last step",
          body:
            "A state agency's site is not optional for the people using it. If you cannot renew your license, you cannot work. That puts keyboard paths, focus order, contrast and screen-reader labeling in the same category as whether the page loads at all, rather than in the category of things you audit the week before launch. It is also the difference between a government site that technically exists and one that actually functions as a public service.",
        },
      ]}
    />
  );
}
