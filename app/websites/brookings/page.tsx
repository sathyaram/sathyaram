import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "Brookings",
};

export default function Brookings() {
  return (
    <WebsiteCaseStudy
      title="The Brookings Institute"
      subtitle="A mission-driven thinktank center."
      year="2024"
      agency="Teal Media"
      tags={["WordPress", "JavaScript", "Custom HTML+CSS"]}
      url="brookings.edu"
      link="https://brookings.edu"
      image="/websites/assets/brookings.webp"
      description="Brookings is a nonprofit public policy organization based in Washington, D.C. Working with Teal Media, I helped build out custom WordPress templates for their research-heavy content, balancing dense policy content with a clean, readable layout."
    />
  );
}
