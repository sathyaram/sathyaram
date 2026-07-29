import Image from "next/image";

type BrowserMockupProps = {
  url: string;
  image: string;
  alt: string;
  priority?: boolean;
};

/**
 * Frames a real screenshot in a browser-chrome shell — window dots + an
 * address bar showing the live URL — so it reads as "here's the actual
 * site" rather than a bare cropped image.
 */
export default function BrowserMockup({ url, image, alt, priority }: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
      <div className="flex items-center gap-3 border-b border-border bg-foreground/[0.03] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 truncate rounded-md bg-foreground/5 px-3 py-1 text-center text-xs text-muted">
          {url}
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image src={image} alt={alt} fill priority={priority} className="object-cover object-top" />
      </div>
    </div>
  );
}
