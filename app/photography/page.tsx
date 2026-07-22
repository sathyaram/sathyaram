import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Photography",
};

const photos = [
  {
    id: "lily",
    title: "Lily, in the Graveyard",
    image: "/photography/lily-one.jpg",
    url: "https://www.instagram.com/p/CVOJv9OlBSo/",
  },
  {
    id: "rania",
    title: "Rania, in the Studio",
    image: "/photography/rania-one.jpg",
    url: "https://www.instagram.com/p/CTiCXeQnF9z/?img_index=1",
  },
  {
    id: "jack",
    title: "Jack, in the Forest",
    image: "/photography/jack-one.jpg",
    url: "https://www.instagram.com/p/CFFxPX3hefW/?img_index=1",
  },
  {
    id: "rachel",
    title: "Rachel, on the Monument",
    image: "/photography/rachel-one.jpg",
    url: "https://www.instagram.com/p/CbImqJZOS1N/?img_index=1",
  },
  {
    id: "jordan",
    title: "Jordan, at the Wharf",
    image: "/photography/jordan-one.jpg",
    url: "https://www.instagram.com/p/CM5VE9WhF3S/?img_index=1",
  },
  {
    id: "gabby",
    title: "Gabby, in the Car",
    image: "/photography/gabby-one.jpg",
    url: "https://www.instagram.com/p/CUasaVdF6qh/?img_index=1",
  },
  {
    id: "daniel",
    title: "Daniel, on the Boardwalk",
    image: "/photography/daniel-one.jpg",
    url: "https://www.instagram.com/p/CUSxiCSrGME/?img_index=1",
  },
  {
    id: "kacey",
    title: "Kacey, on the Scene",
    image: "/photography/kacey.jpg",
    url: "https://www.instagram.com/p/CQrRenyBPvH/?img_index=1",
  },
];

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
              <p className="text-xs text-muted">Sony A7RIV · Sigma 35mm 1.2</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
