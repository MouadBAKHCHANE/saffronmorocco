import type { Metadata } from "next";
import { IMAGE_URLS } from "@/lib/constants";
import HeroBanner from "@/components/sections/HeroBanner";
import Container from "@/components/layout/Container";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FadeUp from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bakhchane Cooperative. Wholesale inquiries, partnerships, and general questions welcome.",
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with Bakhchane Cooperative for wholesale inquiries, partnerships, and more.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroBanner
        title="Contact Us"
        overline="Reach Out"
        backgroundImage={IMAGE_URLS.harvestHands}
      />
      <Container className="py-section-gap">
        <FadeUp>
          <div className="grid gap-16 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </FadeUp>
      </Container>
    </>
  );
}
