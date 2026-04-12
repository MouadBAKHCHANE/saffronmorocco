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
      <div className="rounded-card bg-warm-gray-light p-8 text-center">
        <h3 className="font-heading text-h3 tracking-heading text-text-primary">
          Thank you!
        </h3>
        <p className="mt-3 text-text-secondary">
          Your email client should have opened with your message. If it
          didn&apos;t, please email us directly at{" "}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-burgundy underline"
          >
            {CONTACT_INFO.email}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setSubject(SUBJECT_OPTIONS[0]);
            setMessage("");
          }}
          className="mt-6 text-small font-medium text-burgundy transition-colors hover:text-burgundy-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-small font-medium text-text-primary"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-card border-none bg-warm-gray-light p-4 text-base text-text-primary outline-none ring-0 transition-shadow focus:ring-2 focus:ring-burgundy"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-small font-medium text-text-primary"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-card border-none bg-warm-gray-light p-4 text-base text-text-primary outline-none ring-0 transition-shadow focus:ring-2 focus:ring-burgundy"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-2 block text-small font-medium text-text-primary"
        >
          Subject
        </label>
        <select
          id="contact-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-card border-none bg-warm-gray-light p-4 text-base text-text-primary outline-none ring-0 transition-shadow focus:ring-2 focus:ring-burgundy"
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
          className="mb-2 block text-small font-medium text-text-primary"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y rounded-card border-none bg-warm-gray-light p-4 text-base text-text-primary outline-none ring-0 transition-shadow focus:ring-2 focus:ring-burgundy"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full rounded-button bg-burgundy px-8 py-4 text-small font-semibold uppercase tracking-button text-off-white transition-colors hover:bg-burgundy-dark"
      >
        Send Message
      </button>
    </form>
  );
}
