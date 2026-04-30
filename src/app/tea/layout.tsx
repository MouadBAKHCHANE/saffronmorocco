import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saffron Tea Online — Sencha, Rooibos & Chai Infusions",
  description:
    "Premium saffron tea hand-blended with Grade A Taliouine saffron. Saffron Sencha, Saffron Rooibos, and Saffron Chai infusions. 12-sachet tins, worldwide shipping.",
  keywords: [
    "saffron tea",
    "buy saffron tea online",
    "saffron sencha",
    "saffron rooibos",
    "saffron chai",
    "moroccan saffron tea",
    "herbal saffron infusion",
  ],
  alternates: { canonical: "/tea" },
  openGraph: {
    title: "Saffron Tea Online — Sencha, Rooibos & Chai Infusions",
    description:
      "Premium saffron tea hand-blended with Grade A Taliouine saffron threads.",
    type: "website",
    url: "https://saffronmorocco.com/tea",
  },
};

export default function TeaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
