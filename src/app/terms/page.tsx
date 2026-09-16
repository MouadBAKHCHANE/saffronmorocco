import { ld, webPage } from "@/lib/schema";
import type { Metadata } from "next";
import LegalPageContent from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Conditions of use for iD BAKHCHANE platform and artisanal services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ld(
          webPage({
            path: "/terms",
            name: "Terms of Service",
            description: "Terms of Service for iD BAKHCHANE — saffronmorocco.com.",
            crumbs: [{ name: "Home", path: "" }, { name: "Terms of Service", path: "/terms" }],
          })
        )}
      />
      <LegalPageContent kind="terms" />
    </>
  );
}
