'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeUp from '@/components/animations/FadeUp';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';
import { IMAGE_URLS } from '@/lib/constants';

const sections = [
  {
    tag: "Botany",
    title: "The Enigma of Crocus Sativus",
    description: "Saffron is not a mere spice; it is a botanical miracle. Derived from the Crocus Sativus flower, it belongs to the Iridaceae family. Its unique trait? It is sterile. Without the patient intervention of human hands to divide its bulbs, this flower would vanish. It lives against the grain, dormant during the summer heat and only awakening at the first autumn frost.",
    image: IMAGE_URLS.aboutBotany,
    alignment: "left"
  }
];

export default function AboutSaffronPage() {
  return (
    <main className="min-h-screen bg-surface selection:bg-primary/30">
      {/* ── Hero Section ── */}
      <section className="relative h-screen flex items-end justify-start overflow-hidden pb-16 md:pb-32 px-8 sm:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_URLS.aboutHero}
            alt="Premium Saffron Threads"
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Top Shadow for Header Visibility */}
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />
          
          {/* Strengthened Bottom/Left Gradient for Title Visibility */}
          <div className="absolute inset-x-0 bottom-0 h-[70vh] bg-gradient-to-t from-surface via-black/60 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 text-left max-w-4xl">
          <FadeUp>
            <span className="text-white text-[10px] sm:text-xs font-bold tracking-[0.5em] uppercase mb-1 block">
              Understanding & Excellence
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="font-headline text-6xl sm:text-9xl text-white italic leading-[0.95]">
              About <br/><span className="text-primary not-italic">Saffron</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="mt-8 text-stone-300 max-w-lg text-sm sm:text-lg tracking-wide leading-relaxed font-light">
              Discover the soul of Moroccan Red Gold, from its botanical secrets to the sacred terroir of Taliouine.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Feature Sections ── */}
      <div className="py-20 space-y-0">
        {sections.map((section, idx) => (
          <section key={section.title} className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
              <div className={section.alignment === 'right' ? 'lg:order-2' : ''}>
                <FadeUp>
                  <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                    {section.tag}
                  </span>
                  <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-on-surface mb-8 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-stone-500 leading-relaxed text-base sm:text-lg font-light">
                    {section.description}
                  </p>
                </FadeUp>
              </div>
              <div className={section.alignment === 'right' ? 'lg:order-1' : ''}>
                <ScaleIn>
                  <div className="relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl group">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </div>
                </ScaleIn>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── Authenticity section ── */}
      <section className="py-20 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="lg:order-2">
              <FadeUp>
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                  The Label of Purity
                </span>
                <h2 className="font-headline text-5xl sm:text-7xl text-on-surface mb-8 leading-tight">
                  Identify <br/><span className="italic">The Truth</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-stone-500 leading-relaxed font-light">
                    Facing a global fraud estimate of 80%, iD BAKHCHANE is committed to absolute transparency. Here is how to identify our certified <strong className="text-on-surface">ISO 3632 Grade 1</strong> saffron:
                  </p>
                  <ul className="space-y-4">
                    {[
                      { l: "The Shape", d: "Stigmas must be trumpet-shaped, wide at the top and thin at the base." },
                      { l: "The Color", d: "A uniform blood red. No traces of yellow or white, which indicate poor quality." },
                      { l: "The Texture", d: "Slightly curved and rigid. They should not feel greasy to the touch." }
                    ].map(item => (
                      <li key={item.l} className="flex gap-4 group">
                        <span className="text-primary font-bold italic">/</span>
                        <div className="flex flex-col">
                          <span className="text-on-surface font-headline text-xl mb-1">{item.l}</span>
                          <span className="text-stone-500 text-sm font-light leading-relaxed">{item.d}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>
            <div className="lg:order-1">
              <ScaleIn>
                <div className="relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl group">
                  <Image
                    src={IMAGE_URLS.aboutTerroir}
                    alt="Saffron Quality Detail"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Medical/Science Section with Sticky Title ── */}
      <section className="relative py-32 bg-surface">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_URLS.aboutHarvestDetail}
            alt="Saffron Macro Detail"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            {/* Left Column: Fixed (Sticky) Header Content */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <FadeUp>
                <div className="max-w-sm">
                  <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                    Wellness & Science
                  </span>
                  <h2 className="font-headline text-5xl sm:text-7xl text-white mb-8 leading-tight">
                    Benefits & <br/>
                    <span className="italic text-primary">Alchemy</span>
                  </h2>
                  <p className="text-stone-400 font-light leading-relaxed">
                    Far more than a spice, saffron is an ancestral remedy whose exceptional virtues are confirmed by modern science. It acts as a bridge between age-old wisdom and contemporary pharmacological excellence.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Scrollable Cards */}
            <div className="lg:w-2/3 space-y-8">
              {[
                {
                  title: "DEPRESSION & ANXIETY",
                  subtitle: "Mood Regulation",
                  text: "Known as the 'Sunshine Spice', saffron contains natural compounds that boost serotonin levels, acting as a gentle yet potent emotional stabilizer.",
                  icon: "psychology"
                },
                {
                  title: "IMMUNE FUNCTION",
                  subtitle: "Natural Defense",
                  text: "Packed with carotenoids and Vitamin C, it strengthens the body's natural defenses and provides deep cellular protection against oxidative stress.",
                  icon: "shield"
                },
                {
                  title: "ACNE & HYPERPIGMENTATION",
                  subtitle: "Dermatological Care",
                  text: "Its anti-inflammatory and antibacterial properties make it a sacred ingredient for skin health, brightening the complexion and fading dark spots.",
                  icon: "face"
                },
                {
                  title: "MENSTRUAL DISCOMFORT/PMS",
                  subtitle: "Analgesic Support",
                  text: "A traditional ally for women's health, it effectively relieves PMS symptoms and menstrual cramps through its antispasmodic properties.",
                  icon: "water_drop"
                },
                {
                  title: "HIGH BLOOD PRESSURE",
                  subtitle: "Cardiovascular Vitality",
                  text: "The combination of crocin and potassium helps manage blood pressure levels and supports overall heart health and circulation.",
                  icon: "favorite"
                }
              ].map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.1}>
                  <div className="p-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/40 hover:bg-white/[0.08] transition-all group flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
                    <span className="material-icons-outlined text-primary text-5xl group-hover:scale-110 transition-transform flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                        {item.subtitle}
                      </p>
                      <h3 className="font-headline text-2xl text-white mb-4 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-stone-400 text-sm leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── Final CTA ── */}
      <section className="py-20 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-8">
          <FadeUp>
            <h2 className="font-headline text-5xl sm:text-7xl text-on-surface mb-12 italic">
              Excellence within <br/>a <span className="not-italic text-primary">stigma</span>'s reach.
            </h2>
            <div className="flex flex-wrap justify-center gap-8 items-center border-t border-outline-variant/10 pt-16">
              <Link
                href="/products"
                className="px-12 py-5 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
              >
                Explore Boutique
              </Link>
              <Link
                href="/heritage"
                className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
              >
                Our Heritage
                <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
