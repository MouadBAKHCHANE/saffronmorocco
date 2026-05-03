"use client";

import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import { useT } from "@/i18n/LocaleProvider";

type LegalKind = "privacy" | "terms" | "shipping";

interface Props {
  kind: LegalKind;
}

export default function LegalPageContent({ kind }: Props) {
  const t = useT();

  let titleKey: string;
  let subtitleKey: string;
  let sections: { headingKey: string; bodyKey?: string; listKeys?: string[] }[];

  if (kind === "privacy") {
    titleKey = "legal.privacyTitle";
    subtitleKey = "legal.privacySubtitle";
    sections = [
      { headingKey: "legal.privacyIntro",          bodyKey: "legal.privacyIntroBody" },
      { headingKey: "legal.privacyDataCollection", bodyKey: "legal.privacyDataCollectionBody" },
      { headingKey: "legal.privacyUseInfo",        listKeys: ["legal.privacyUseInfo1", "legal.privacyUseInfo2", "legal.privacyUseInfo3"] },
      { headingKey: "legal.privacySecurity",       bodyKey: "legal.privacySecurityBody" },
    ];
  } else if (kind === "terms") {
    titleKey = "legal.termsTitle";
    subtitleKey = "legal.termsSubtitle";
    sections = [
      { headingKey: "legal.termsAcceptance",    bodyKey: "legal.termsAcceptanceBody" },
      { headingKey: "legal.termsQuality",       bodyKey: "legal.termsQualityBody" },
      { headingKey: "legal.termsConduct",       bodyKey: "legal.termsConductBody" },
      { headingKey: "legal.termsModifications", bodyKey: "legal.termsModificationsBody" },
    ];
  } else {
    titleKey = "legal.shippingTitle";
    subtitleKey = "legal.shippingSubtitle";
    sections = [
      { headingKey: "legal.shippingOrigin",         bodyKey: "legal.shippingOriginBody" },
      { headingKey: "legal.shippingInternational",  bodyKey: "legal.shippingInternationalBody" },
      { headingKey: "legal.shippingPackaging",      bodyKey: "legal.shippingPackagingBody" },
      { headingKey: "legal.shippingCustoms",        bodyKey: "legal.shippingCustomsBody" },
    ];
  }

  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h1 className="font-headline text-5xl md:text-7xl mb-12">{t(titleKey)}</h1>
            <p className="text-body-lg text-stone-400 mb-16 italic font-light">
              {t(subtitleKey)}
            </p>
          </FadeUp>

          <div className="prose prose-invert prose-stone max-w-none space-y-12">
            {sections.map((section) => (
              <section key={section.headingKey}>
                <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">
                  {t(section.headingKey)}
                </h2>
                {section.bodyKey && (
                  <p className="text-stone-300 leading-relaxed font-light">
                    {t(section.bodyKey)}
                  </p>
                )}
                {section.listKeys && (
                  <ul className="list-none space-y-4 text-stone-300 font-light">
                    {section.listKeys.map((k) => (
                      <li key={k} className="flex gap-4">
                        <span className="text-primary/40">—</span>
                        {t(k)}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
