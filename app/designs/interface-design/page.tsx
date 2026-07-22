import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Interface Design",
};

const pieces = [
  {
    id: "portal",
    title: "Lehigh University's Campus Portal",
    image: "/designs/portal/portal.jpg",
  },
  {
    id: "lehigh2018",
    title: "Lehigh2018 Web Theme Style Guide",
    image: "/designs/lehigh2018-one.jpg",
  },
  {
    id: "engineering",
    title: "Lehigh University's College of Engineering",
    image: "/designs/lehighengineering.jpg",
  },
];

export default function InterfaceDesign() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Interface Design
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          UI, motion, and interaction work.
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
