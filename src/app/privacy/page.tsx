import { ld, webPage } from "@/lib/schema";
import type { Metadata } from "next";
import LegalPageContent from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How iD BAKHCHANE collects, uses, and safeguards your personal data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ld(
          webPage({
            path: "/privacy",
            name: "Privacy Policy",
            description: "Privacy Policy for iD BAKHCHANE — saffronmorocco.com.",
            crumbs: [{ name: "Home", path: "" }, { name: "Privacy Policy", path: "/privacy" }],
          })
        )}
      />
      <LegalPageContent kind="privacy" />
    </>
  );
}
