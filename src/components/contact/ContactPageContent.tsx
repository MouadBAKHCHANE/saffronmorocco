"use client";

import { IMAGE_URLS } from "@/lib/constants";
import HeroBanner from "@/components/sections/HeroBanner";
import Container from "@/components/layout/Container";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FadeUp from "@/components/animations/FadeUp";
import { useT } from "@/i18n/LocaleProvider";

export default function ContactPageContent() {
  const t = useT();
  return (
    <>
      <HeroBanner
        title={t("contactPage.title")}
        overline={t("contactPage.overline")}
        subtitle={
          <span>{t("contactPage.subtitle")}</span>
        }
        backgroundImage={IMAGE_URLS.heroPoster}
        overlayOpacity={50}
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
              <h4 className="font-headline text-xl text-on-surface mb-2">{t("contact.responseTime")}</h4>
              <p className="text-on-surface-variant font-light">{t("contactInfo.callOrWhatsApp")}</p>
            </div>
            <a
              href="https://wa.me/212611714711"
              className="px-8 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <span className="material-icons-outlined text-sm">chat</span>
              {t("contactPage.whatsapp")}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
