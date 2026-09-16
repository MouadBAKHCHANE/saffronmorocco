import { alternatesFor } from "@/i18n/routing";
import { ld, collectionPage } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saffron Tea | Sencha, Rooibos & Chai",
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
  alternates: alternatesFor("/tea"),
  openGraph: {
    title: "Saffron Tea | Sencha, Rooibos & Chai",
    description:
      "Premium saffron tea hand-blended with Grade A Taliouine saffron threads.",
    type: "website",
    url: "https://saffronmorocco.com/tea",
  },
};

export default function TeaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(collectionPage({
        path: "/tea",
        name: "Saffron Tea Infusions",
        description:
          "Sencha, rooibos and chai blended with Taliouine saffron threads.",
        crumbs: [{ name: "Home", path: "" }, { name: "Saffron Tea Infusions", path: "/tea" }],
      }))} />
      {children}
    </>
  );
}
