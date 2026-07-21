import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  {
    // Framer Motion and next/image need inline styles; JSON-LD needs inline
    // scripts, hence 'unsafe-inline'. No external script/style sources are
    // loaded except Google Fonts / Material Icons CSS.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  // Note: www → non-www and *.vercel.app → main domain redirects are configured
  // at the Vercel edge in Project → Settings → Domains (308 Permanent Redirect).
  async redirects() {
    return [
      // Blog post slug changes — preserve link equity from old indexed URLs.
      { source: "/blog/taliouine-saffron-best-in-world", destination: "/blog/what-is-taliouine-saffron", permanent: true },
      { source: "/blog/how-to-identify-real-saffron", destination: "/blog/saffron-buyers-guide", permanent: true },
      { source: "/blog/how-to-identify-real-saffron-a-buyers-guide", destination: "/blog/saffron-buyers-guide", permanent: true },
      { source: "/blog/saffron-harvest-flower-to-thread", destination: "/blog/saffron-harvest-season", permanent: true },
      { source: "/blog/5-ways-to-use-saffron-kitchen", destination: "/blog/easy-saffron-recipes", permanent: true },
      { source: "/blog/why-chefs-choose-moroccan-saffron", destination: "/blog/moroccan-saffron-for-chefs", permanent: true },
      { source: "/blog/saffron-cooperatives-morocco-empowering-communities", destination: "/blog/moroccan-saffron-cooperative-fair-trade", permanent: true },
      // Demo blog slugs that were once linked from the homepage BlogSection —
      // crawled by Google, so 301 them to the closest real article.
      { source: "/blog/golden-risotto-mastery", destination: "/blog/easy-saffron-recipes", permanent: true },
      { source: "/blog/science-of-sunshine-spice", destination: "/blog/saffron-health-benefits-2026", permanent: true },
      { source: "/blog/red-gold-skincare-protocol", destination: "/blog/what-is-taliouine-saffron", permanent: true },
      // Legacy WordPress-era URLs still in Google's index.
      { source: "/products/saffron-tea-rose-saffron-blend", destination: "/tea", permanent: true },
      { source: "/products/saffron-tea-cardamom-saffron-blend", destination: "/products/saffron-chai", permanent: true },
      { source: "/products/starter-bundle-threads-powder", destination: "/bundles", permanent: true },
      { source: "/selection", destination: "/products", permanent: true },
      { source: "/the-golden-threads-of-morocco-discovering-authentic-taliouine-saffron", destination: "/blog/what-is-taliouine-saffron", permanent: true },
    ];
  },
};

export default nextConfig;
