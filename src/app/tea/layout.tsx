import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saffron Tea Infusions",
  description:
    "Hand-blended saffron tea collection from iD BAKHCHANE — Saffron Sencha, Rooibos, and Chai infusions crafted with Grade A Taliouine saffron.",
  alternates: { canonical: "/tea" },
  openGraph: {
    title: "Saffron Tea Infusions",
    description:
      "Hand-blended saffron tea collection — Sencha, Rooibos, and Chai with Grade A Taliouine saffron.",
    type: "website",
    url: "https://saffronmorocco.com/tea",
  },
};

export default function TeaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
