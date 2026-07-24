import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 defaults images.qualities to [75] and coerces anything else
    // to the nearest allowed value; the panorama + lightbox photos ask for
    // 90, so allow it explicitly (otherwise they silently render at 75).
    qualities: [75, 90],
  },
};

export default nextConfig;
