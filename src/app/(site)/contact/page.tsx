import { alternatesFor } from "@/i18n/routing";
import { ld, webPage } from "@/lib/schema";
import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Wholesale Moroccan Saffron Inquiries",
  description:
    "Contact the Bakhchane Saffron Cooperative in Taliouine, Morocco. Wholesale orders, restaurant partnerships, retailer inquiries, custom packaging. Reply within 24 hours.",
  keywords: [
    "wholesale saffron inquiry",
    "buy moroccan saffron contact",
    "saffron supplier morocco",
    "bakhchane cooperative contact",
  ],
  alternates: alternatesFor("/contact"),
  openGraph: {
    title: "Contact | Wholesale Moroccan Saffron Inquiries",
    description:
      "Contact the Bakhchane Cooperative in Taliouine for wholesale, partnerships, and retail inquiries.",
    type: "website",
    url: "https://saffronmorocco.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ld(
          webPage({
            path: "/contact",
            name: "Contact iD BAKHCHANE",
            description:
              "Contact the Bakhchane Cooperative in Taliouine for wholesale, partnerships, and retail inquiries.",
            type: "ContactPage",
            crumbs: [{ name: "Home", path: "" }, { name: "Contact", path: "/contact" }],
          })
        )}
      />
      <ContactPageContent />
    </>
  );
}
