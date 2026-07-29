import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 defaults images.qualities to [75] and coerces anything else
    // to the nearest allowed value; the panorama + lightbox photos ask for
    // 90, so allow it explicitly (otherwise they silently render at 75).
    qualities: [75, 90],
    // Serve AVIF first (much smaller than WebP), falling back to WebP then
    // the original — addresses Lighthouse's "improve image delivery" on the
    // photography images. Order matters: first Accept-header match wins.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
