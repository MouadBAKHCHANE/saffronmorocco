import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/test-assets"],
      },
      // Answer engines: explicit allow so citation crawlers are not left to
      // infer access from the wildcard rule.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-User",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "Amazonbot",
          "Bingbot",
          "CCBot",
        ],
        allow: ["/"],
        disallow: ["/api/", "/test-assets"],
      },
    ],
    sitemap: "https://saffronmorocco.com/sitemap.xml",
    host: "https://saffronmorocco.com",
  };
}
