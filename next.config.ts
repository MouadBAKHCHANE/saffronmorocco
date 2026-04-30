import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Note: www → non-www and *.vercel.app → main domain redirects are configured
  // at the Vercel edge in Project → Settings → Domains (308 Permanent Redirect).
  async redirects() {
    return [
      // Blog post slug changes — preserve link equity from old indexed URLs.
      { source: "/blog/taliouine-saffron-best-in-world", destination: "/blog/what-is-taliouine-saffron", permanent: true },
      { source: "/blog/how-to-identify-real-saffron", destination: "/blog/saffron-buyers-guide", permanent: true },
      { source: "/blog/saffron-harvest-flower-to-thread", destination: "/blog/saffron-harvest-season", permanent: true },
      { source: "/blog/5-ways-to-use-saffron-kitchen", destination: "/blog/easy-saffron-recipes", permanent: true },
      { source: "/blog/why-chefs-choose-moroccan-saffron", destination: "/blog/moroccan-saffron-for-chefs", permanent: true },
      { source: "/blog/saffron-cooperatives-morocco-empowering-communities", destination: "/blog/moroccan-saffron-cooperative-fair-trade", permanent: true },
    ];
  },
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
