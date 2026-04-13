"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_INFO } from "@/lib/constants";

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Wholesale Order",
  "Partnership",
  "Other",
] as const;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<string>(SUBJECT_OPTIONS[0]);
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
          Message Sent
        </h3>
        <p className="text-on-surface-variant font-light mb-8">
          Your inquiry has been prepared. If your email client didn&apos;t open automatically, please reach us at <span className="text-primary font-medium">{CONTACT_INFO.email}</span>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs uppercase tracking-widest text-primary font-bold border-b border-primary pb-1"
        >
          Send another message
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
              Full Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-surface border-b border-outline-variant py-3 px-0 text-on-surface outline-none focus:border-primary transition-colors font-light placeholder:text-on-surface-variant/30"
              placeholder="E.g. Elias Bakhchane"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2 block"
            >
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface border-b border-outline-variant py-3 px-0 text-on-surface outline-none focus:border-primary transition-colors font-light placeholder:text-on-surface-variant/30"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2 block"
          >
            Subject
          </label>
          <select
            id="contact-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-surface border-b border-outline-variant py-3 px-0 text-on-surface outline-none focus:border-primary transition-colors font-light appearance-none"
          >
            {SUBJECT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2 block"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-surface border-b border-outline-variant py-3 px-0 text-on-surface outline-none focus:border-primary transition-colors font-light placeholder:text-on-surface-variant/30 resize-none"
            placeholder="How can we assist you today?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 rounded-sm mt-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
