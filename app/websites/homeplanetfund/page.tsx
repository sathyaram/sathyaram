import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "Home Planet Fund",
};

export default function HomePlanetFund() {
  return (
    <WebsiteCaseStudy
      title="Home Planet Fund"
      subtitle="Patagonia's greenroots foundation."
      year="2024"
      agency="Teal Media"
      tags={["WordPress", "Custom CSS", "JavaScript"]}
      url="homeplanetfund.org"
      link="https://homeplanetfund.org"
      image="/websites/assets/homeplanet.png"
      description="Home Planet Fund is Patagonia's grassroots climate action fund. Working with Teal Media, I helped build a custom WordPress site with hand-tuned CSS to match Patagonia's distinct brand system across grant and initiative pages."
      stats={[
        { label: "Timeline", value: "2 months" },
        { label: "Role", value: "Front-End Developer" },
        { label: "Stack", value: "WordPress · CSS · JS" },
      ]}
      overview={[
        "Home Planet Fund moves grant money to grassroots climate groups, and the site's job is to make that work legible — who's funded, what they're doing, how to apply. It also had to carry Patagonia's brand system without just being a Patagonia microsite.",
        "I worked from Teal Media's design files into a custom WordPress theme, writing the CSS by hand to hit Patagonia's exact type scale and color system, then wiring up the grant and initiative archives so new funding rounds could go live without a developer touching code.",
      ]}
      contributions={[
        "Translated Patagonia's brand guidelines into a reusable WordPress theme design system",
        "Built the grant and initiative archive templates with custom taxonomy-based filtering",
        "Hand-coded CSS to match Patagonia's type and color system pixel-for-pixel",
        "Optimized image loading across the photo-heavy initiative pages",
      ]}
      codeFilename="brand.css"
      codeLines={[
        [{ text: "/* brand.css — Patagonia design tokens */", type: "comment" }],
        [{ text: ":root", type: "tag" }, { text: " {" }],
        [{ text: "  --hpf-forest", type: "attr" }, { text: ": " }, { text: "#1d3c2f", type: "value" }, { text: ";" }],
        [{ text: "  --hpf-sun", type: "attr" }, { text: ": " }, { text: "#f5a623", type: "value" }, { text: ";" }],
        [{ text: "  --hpf-type", type: "attr" }, { text: ": " }, { text: "\"National\", sans-serif", type: "string" }, { text: ";" }],
        [{ text: "}" }],
        [],
        [{ text: ".initiative-card", type: "tag" }, { text: " {" }],
        [{ text: "  border-radius", type: "attr" }, { text: ": " }, { text: "12px", type: "value" }, { text: ";" }],
        [{ text: "  font-family", type: "attr" }, { text: ": " }, { text: "var(--hpf-type)", type: "value" }, { text: ";" }],
        [{ text: "}" }],
      ]}
    />
  );
}
