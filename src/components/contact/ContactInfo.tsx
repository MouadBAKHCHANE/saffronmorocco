"use client";

import { CONTACT_INFO } from "@/lib/constants";
import { useT } from "@/i18n/LocaleProvider";

export default function ContactInfo() {
  const t = useT();
  return (
    <div className="space-y-12">
      <div>
        <h3 className="font-headline text-3xl font-light text-on-surface mb-8">
          {t('contactInfo.reachOutTitle')} <span className="italic text-primary">{t('contactInfo.reachOutAccent')}</span>
        </h3>
        <p className="text-on-surface-variant font-light leading-relaxed mb-12">
          {t('contactInfo.reachOutDesc')}
        </p>
      </div>

      <div className="grid gap-10">
        {/* Location */}
        <div className="flex gap-6 group">
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-outline-variant group-hover:bg-primary/10 transition-colors">
            <span className="material-icons-outlined text-primary">location_on</span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">{t('contactInfo.origin')}</p>
            <a 
              href={CONTACT_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="block group/address"
            >
              <address className="not-italic leading-relaxed text-on-surface-variant font-light group-hover/address:text-primary transition-colors">
                {CONTACT_INFO.address.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < CONTACT_INFO.address.length - 1 && <br />}
                  </span>
                ))}
              </address>
              <span className="text-[10px] text-primary/60 opacity-0 group-hover/address:opacity-100 transition-opacity mt-1 block">{t('contactInfo.viewMaps')}</span>
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-6 group">
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-outline-variant group-hover:bg-primary/10 transition-colors">
            <span className="material-icons-outlined text-primary">mail</span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">{t('contactInfo.emailUsLabel')}</p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-on-surface-variant font-medium transition-colors hover:text-primary transition-opacity"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        {/* Phone & WhatsApp */}
        <div className="flex gap-6 group">
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-outline-variant group-hover:bg-primary/10 transition-colors">
            <span className="material-icons-outlined text-primary">call</span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">{t('contactInfo.callOrWhatsApp')}</p>
            <div className="flex flex-col space-y-1">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="text-on-surface-variant font-light transition-colors hover:text-primary"
              >
                {CONTACT_INFO.phone}
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                {t('contactInfo.messageOnWhatsApp')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
