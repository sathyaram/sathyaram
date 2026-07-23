import type { Metadata } from "next";
import Image from "next/image";
import { photos, CAMERA } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photography",
};

export default function Photography() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Photography
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Portraits, shot on a Sony A7RIV with a Sigma 35mm 1.2.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {photos.map((photo) => (
            <a
              key={photo.id}
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{photo.title}</p>
              <p className="text-xs text-muted">{CAMERA}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
