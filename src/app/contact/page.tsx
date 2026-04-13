import type { Metadata } from "next";
import { IMAGE_URLS } from "@/lib/constants";
import HeroBanner from "@/components/sections/HeroBanner";
import Container from "@/components/layout/Container";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FadeUp from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Contact Us - Bakhchane Cooperative",
  description:
    "Get in touch with Bakhchane Cooperative. Wholesale inquiries, partnerships, and general questions welcome.",
  openGraph: {
    title: "Contact Us - Bakhchane Cooperative",
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
        overline="Get in Touch"
        subtitle="We value our connections across the globe. Reach out for partnerships, wholesale inquiries, or to learn more about our traditional harvest."
        backgroundImage={IMAGE_URLS.heroPoster}
        overlayOpacity={85}
        align="right"
      />
      <div className="bg-surface py-24 md:py-32">
        <Container>
          <FadeUp>
            <div className="grid gap-20 lg:grid-cols-[1fr_1.5fr] items-start">
              <ContactInfo />
              <ContactForm />
            </div>
          </FadeUp>
        </Container>
      </div>

      {/* WhatsApp Section */}
      <section className="bg-surface-container-low py-16 border-t border-outline-variant/10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="font-headline text-xl text-on-surface mb-2">Need immediate assistance?</h4>
              <p className="text-on-surface-variant font-light">Our team typically responds to WhatsApp messages within 2 hours.</p>
            </div>
            <a 
              href="https://wa.me/212661582348" 
              className="px-8 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <span className="material-icons-outlined text-sm">chat</span>
              WhatsApp Support
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
