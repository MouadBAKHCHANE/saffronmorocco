import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/test-assets"],
      },
    ],
    sitemap: "https://saffronmorocco.com/sitemap.xml",
    host: "https://saffronmorocco.com",
  };
}
