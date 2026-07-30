import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "Home Planet Fund",
};

export default function HomePlanetFund() {
  return (
    <WebsiteCaseStudy
      slug="homeplanetfund"
      title="Home Planet Fund"
      subtitle="Patagonia's greenroots foundation."
      year="2024"
      agency="Teal Media"
      gradientFrom="#8C382C"
      gradientTo="#F59431"
      url="homeplanetfund.org"
      link="https://homeplanetfund.org"
      image="/websites/assets/homeplanet-hero.webp"
      description="Home Planet Fund is Patagonia's grassroots climate action fund. Working with Teal Media, I helped build a custom WordPress site with hand-tuned CSS to match Patagonia's distinct brand system across grant and initiative pages."
      stats={[
        { label: "Timeline", value: "2 months" },
        { label: "Role", value: "Front-End Developer" },
        { label: "Stack", value: "WordPress · CSS · JS" },
      ]}
      overview={[
        "Home Planet Fund moves grant money to grassroots climate groups, and the site's job is to make that work legible, who's funded, what they're doing, how to apply. It also had to carry Patagonia's brand system without just being a Patagonia microsite.",
        "I worked from Teal Media's design files into a custom WordPress theme, writing the CSS by hand to hit Patagonia's exact type scale and color system, then wiring up the grant and initiative archives so new funding rounds could go live without a developer touching code.",
      ]}
      contributions={[
        "Translated Patagonia's brand guidelines into a reusable WordPress theme design system",
        "Built the grant and initiative archive templates with custom taxonomy-based filtering",
        "Hand-coded CSS to match Patagonia's type and color system pixel-for-pixel",
        "Optimized image loading across the photo-heavy initiative pages",
      ]}
      highlights={[
        {
          title: "The cursor as a lens",
          body:
            "My favorite detail on the site: hovering a feature image doesn't just tint it, it inverts it. A diamond mask follows the pointer and everything inside it flips: colors reverse, the photo reads like a negative, so the image feels like it's being examined through a lens rather than covered by an overlay. It's built with mix-blend-mode and an inverted layer clipped to the cursor's position, which means it stays GPU-composited and costs nothing at scroll time.",
        },
        {
          title: "Brand fidelity without a framework",
          body:
            "Patagonia's system has opinions, a specific type scale, specific color relationships, specific spacing rhythm. Rather than fight a CSS framework's defaults, I wrote the theme's CSS by hand against custom properties, so every token maps directly to the brand guideline it came from. It made the pixel-matching straightforward and left the stylesheet small enough to read top to bottom.",
        },
        {
          title: "Archives that don't need a developer",
          body:
            "Grant rounds and initiatives change constantly, so the archive templates run entirely off WordPress taxonomies. The team adds a term and the filtering, counts, and landing pages update themselves, no template edits, no deploy, no ticket to me.",
        },
      ]}
      codeFilename="brand.css"
      codeLines={[
        [{ text: "/* brand.css: Patagonia design tokens */", type: "comment" }],
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
