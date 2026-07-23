import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Graphic Design",
  // Section is hidden from the nav for now; keep it out of search too.
  robots: { index: false, follow: false },
};

const pieces = [
  { id: "frost", title: "Frost Logo Concepts", image: "/designs/logos/frostlogoconcepts.jpg" },
  { id: "indify", title: "Indify Logo Concept", image: "/designs/logos/indifylogoconcept.jpg" },
  { id: "loewy", title: "Loewy Institute", image: "/designs/logos/loewyinstitute.jpg" },
  { id: "mosaic", title: "Mosaic Logo Concepts", image: "/designs/logos/mosiaclogoconcepts.jpg" },
  { id: "powerhouse", title: "Powerhouse Logo Concepts", image: "/designs/logos/powerhouselogoconcepts.jpg" },
  { id: "treeteck", title: "Treeteck Logo Concepts", image: "/designs/logos/treetecklogoconcepts.jpg" },
  { id: "vertra", title: "Vertra Logos", image: "/designs/logos/vertralogos.jpg" },
  { id: "fudtruk", title: "Fudtruk Vinyl Wrap", image: "/designs/fudtruk.webp" },
];

export default function GraphicDesign() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Graphic Design
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Branding, logo concepts, and print work.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pieces.map((piece) => (
            <div key={piece.id}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{piece.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
