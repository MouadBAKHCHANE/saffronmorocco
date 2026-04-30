import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Note: www → non-www and *.vercel.app → main domain redirects are configured
  // at the Vercel edge in Project → Settings → Domains (308 Permanent Redirect).
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
