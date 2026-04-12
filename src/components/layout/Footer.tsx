'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, SITE_NAME, IMAGE_URLS, CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#1E1B18]">
      <div className="mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)] py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description */}
          <div className="space-y-6">
            <Image
              src={IMAGE_URLS.logoWhite}
              alt={SITE_NAME}
              width={180}
              height={45}
              className="h-11 w-auto"
            />
            <p className="max-w-xs text-xs uppercase tracking-[0.2em] leading-relaxed text-stone-500">
              Dedicated to the preservation of
              saffron heritage since the dawn of the
              cooperative.
            </p>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 mb-2">
              Menu
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact with icons */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 mb-2">
              Contact
            </p>
            <a
              href={CONTACT_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition-colors hover:text-primary group"
            >
              <span className="material-icons-outlined text-base text-stone-600 mt-0.5 group-hover:text-primary">location_on</span>
              <p className="text-xs leading-relaxed text-stone-500 group-hover:text-primary">
                {CONTACT_INFO.address[0]}
                <br />
                {CONTACT_INFO.address[1]}
              </p>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-3 text-xs text-stone-500 transition-colors hover:text-primary"
            >
              <span className="material-icons-outlined text-base text-stone-600">phone</span>
              {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 text-xs text-stone-500 transition-colors hover:text-primary"
            >
              <span className="material-icons-outlined text-base text-stone-600">mail</span>
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 mb-2">
              Newsletter
            </p>
            <p className="text-xs leading-relaxed text-stone-500">
              Subscribe to receive updates on harvests, recipes, and exclusive offers.
            </p>
            <form className="flex gap-0 mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-surface-container-lowest px-4 py-3 text-xs text-on-surface placeholder:text-stone-600 outline-none border border-outline-variant/20 border-r-0 rounded-l-sm focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary-container to-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white rounded-r-sm hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-outline-variant/10">
        <div className="mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)] py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
            &copy; 2026 {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
