import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "South Carolina LLR",
  description:
    "Front-end development for the South Carolina Department of Labor, Licensing and Regulation with ForumOne: a Grav CMS build covering licensing, OSHA, fire safety and elevator inspection for a statewide agency.",
};

export default function LLR() {
  return (
    <CaseStudy
      section="websites"
      slug="llr"
      title="South Carolina LLR"
      subtitle="Licensing and workplace safety for a whole state, on a Grav CMS build that keeps hundreds of boards, permits and services findable."
      year="2019"
      agency="ForumOne"
      // Ruby into sapphire, both from the agency's shield mark, matching the
      // homepage card. Ruby leads because the title sits over it.
      gradientFrom="#b11e3a"
      gradientTo="#3f8ba2"
      url="llr.sc.gov"
      link="https://llr.sc.gov"
      description="South Carolina's Department of Labor, Licensing and Regulation is the agency behind almost every licensed profession in the state, plus workplace safety, fire, and elevator and amusement-ride inspection. Its site has to serve a barber renewing a licence and a contractor filing a complaint equally well."
      stats={[
        { label: "Role", value: "Front-End Developer" },
        { label: "Stack", value: "Grav CMS · HTML/CSS · JS" },
        { label: "Sector", value: "State government" },
      ]}
      overview={[
        "LLR is not one service, it is dozens: apply for a licence, check an application, renew, verify someone else's licence, print a card, file a complaint, look up a board's calendar. Each belongs to a different division, and most visitors arrive knowing what they want to do rather than which division owns it.",
        "The front end's job was to make that surface navigable without flattening it. Built on Grav CMS, a flat-file system with no database behind it, which suits an agency site that is mostly structured content and needs to stay fast and cheap to host.",
      ]}
      contributions={[
        "Built the Grav templates and the front-end component set shared across divisions, boards and service pages",
        "Developed the task-led landing patterns that route visitors by what they want to do rather than by which division owns it",
        "Coded the responsive layouts for licence lookup, application status and complaint flows",
        "Implemented accessible navigation for a site whose audience is the entire adult population of a state",
      ]}
      highlights={[
        {
          title: "Organised by task, not by org chart",
          body:
            "The natural way to structure a government site is by department, because that is how the organisation understands itself. It is also the least useful structure for a visitor, who arrives wanting to renew a licence and has no idea which of the divisions owns that. The primary navigation leads with the verbs — apply, renew, verify, look up, file — and lets the divisional structure sit behind it for the people who do think that way.",
        },
        {
          title: "Flat files, on purpose",
          body:
            "Grav keeps content as files on disk rather than rows in a database. For an agency site that is overwhelmingly structured pages — boards, professions, forms, notices — that trade is a good one: nothing to keep patched, nothing to fall over under a traffic spike when a licence deadline lands, and a content model that a non-developer can reason about.",
        },
        {
          title: "Accessibility as the baseline, not the audit",
          body:
            "A state agency's site is not optional for the people using it — if you cannot renew your licence, you cannot work. That puts keyboard paths, focus order, contrast and screen-reader labelling in the same category as whether the page loads at all, rather than in the category of things you check before launch.",
        },
      ]}
    />
  );
}
