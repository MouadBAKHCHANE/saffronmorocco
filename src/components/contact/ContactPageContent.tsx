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
      <div className="bg-surface py-20 md:py-24">
        <Container>
          <FadeUp>
            <div className="grid gap-20 lg:grid-cols-[1fr_1.5fr] items-start">
              <ContactInfo />
              <ContactForm />
            </div>
          </FadeUp>
        </Container>
      </div>

    </>
  );
}
