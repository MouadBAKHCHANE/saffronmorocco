import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact iD BAKHCHANE — Wholesale Saffron Inquiries & Partnerships",
  description:
    "Contact the Bakhchane Saffron Cooperative in Taliouine, Morocco. Wholesale orders, restaurant partnerships, retailer inquiries, custom packaging. Reply within 24 hours.",
  keywords: [
    "wholesale saffron inquiry",
    "buy moroccan saffron contact",
    "saffron supplier morocco",
    "bakhchane cooperative contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact iD BAKHCHANE — Wholesale Saffron Inquiries & Partnerships",
    description:
      "Contact the Bakhchane Cooperative in Taliouine for wholesale, partnerships, and retail inquiries.",
    type: "website",
    url: "https://saffronmorocco.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
