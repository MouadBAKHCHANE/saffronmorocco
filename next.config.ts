import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saffronmorocco.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "slategrey-hedgehog-998664.hostingersite.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
