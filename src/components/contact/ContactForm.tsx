"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_INFO } from "@/lib/constants";
import { useT } from "@/i18n/LocaleProvider";

const SUBJECT_KEYS = [
  "contact.subjectGeneral",
  "contact.subjectWholesale",
  "contact.subjectPartnership",
  "contact.subjectOther",
] as const;

export default function ContactForm() {
  const t = useT();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<string>(t(SUBJECT_KEYS[0]));
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-surface-container p-12 text-center rounded-sm border border-outline-variant/10">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-icons-outlined text-primary text-3xl">check</span>
        </div>
        <h3 className="font-headline text-2xl text-on-surface mb-4">
          {t("cta.sendMessage")}
        </h3>
        <p className="text-on-surface-variant font-light mb-8">
          <span className="text-primary font-medium">{CONTACT_INFO.email}</span>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs uppercase tracking-widest text-primary font-bold border-b border-primary pb-1"
        >
          {t("cta.sendMessage")}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low p-8 md:p-12 rounded-sm border border-outline-variant/20 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="contact-name"
              className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2 block"
            >
              {t("contact.name")}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-surface border-b border-outline-variant py-3 px-0 text-base text-on-surface outline-none focus:border-primary transition-colors font-headline placeholder:text-on-surface-variant/30"
              placeholder={t("contact.namePlaceholder")}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2 block"
            >
              {t("contact.email")}
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface border-b border-outline-variant py-3 px-0 text-base text-on-surface outline-none focus:border-primary transition-colors font-headline placeholder:text-on-surface-variant/30"
              placeholder={t("contact.emailPlaceholder")}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2 block"
          >
            {t("contact.title")}
          </label>
          <div className="relative">
            <select
              id="contact-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-surface border-b border-outline-variant py-3 px-0 text-base text-on-surface outline-none focus:border-primary transition-colors font-headline appearance-none pr-8"
            >
              {SUBJECT_KEYS.map((key) => (
                <option key={key} value={t(key)} className="bg-surface-container-low font-sans py-2">
                  {t(key)}
                </option>
              ))}
            </select>
            <span className="material-icons-outlined absolute right-0 top-1/2 -translate-y-1/2 text-primary/60 pointer-events-none text-xl transition-all">expand_more</span>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2 block"
          >
            {t("contact.message")}
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-surface border-b border-outline-variant py-3 px-0 text-base text-on-surface outline-none focus:border-primary transition-colors font-headline placeholder:text-on-surface-variant/30 resize-none"
            placeholder={t("contact.messagePlaceholder")}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 rounded-sm mt-4"
        >
          {t("contact.sendMessage")}
        </button>
      </form>
    </div>
  );
}
