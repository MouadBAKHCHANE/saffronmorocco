import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, CONTACT_INFO, IMAGE_URLS } from "@/lib/constants";
import FadeUp from "@/components/animations/FadeUp";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Heritage | The Artisanal Journey",
  description:
    "Trace the origins of crimson gold. Discover how iD BAKHCHANE saffron is hand-harvested, separated, and cured by the women of Taliouine.",
  openGraph: {
    title: "Heritage | The Artisanal Journey",
    description:
      "Trace the origins of crimson gold. Discover how iD BAKHCHANE saffron is hand-harvested, separated, and cured by the women of Taliouine.",
    type: "website",
  },
};

export default function HeritagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: "https://saffronmorocco.com",
    logo: IMAGE_URLS.logoColor,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address[0],
      addressLocality: "Taliouine",
      addressRegion: "Souss-Massa",
      addressCountry: "MA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      contactType: "customer service",
    },
    description:
      "Premium Moroccan saffron cooperative based in Taliouine, cultivated by women, rooted in tradition.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heritage-hero-mountains.webp"
            alt="Cinematic wide shot of the Taliouine mountains at dawn"
            fill
            priority
            className="object-cover brightness-110 transition-all duration-1000"
          />
          {/* Top Protection - Header visibility */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />
          
          {/* Central Protection - Specialized for High-Contrast Text Legibility */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.45)_0%,_transparent_60%)] opacity-80" />
          </div>

          {/* Seamless Transition to Content */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-surface via-surface/40 to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary mb-6">
              Tracing the origins of crimson gold
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-on-surface tracking-tighter italic leading-none">
              The Artisanal Journey
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-12 flex justify-center">
              <span className="material-icons-outlined text-primary text-4xl animate-bounce scale-[0.7] opacity-60">
                keyboard_double_arrow_down
              </span>
            </div>
          </FadeUp>
        </div>
      </section>
      <div className="relative overflow-hidden">
        {/* Cinematic Vertical Timeline Line - Only on Large Screens */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 -translate-x-1/2 hidden lg:block z-0" />

        {/* ── Phase 01: The Dawn Gathering ── */}
        <section className="relative pb-20 pt-16 px-8 md:px-24 bg-surface z-10">
          <div className="max-w-7xl mx-auto">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-12">
              <FadeUp>
                <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-6 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-2xl text-primary italic">01</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-4">Stage One: Harvesting</p>
                <h2 className="font-headline text-5xl md:text-7xl mb-8 leading-tight text-on-surface">
                  The Dawn <span className="italic">Gathering</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeUp className="order-2 lg:order-1">
                <div className="max-w-xl">
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                    Before the first ray of sun touches the Taliouine valleys, our
                    harvesters begin their work. Each Crocus sativus flower must be
                    hand-picked while still closed, protecting the delicate stigmas
                    within from the heat of the Moroccan sun.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="h-px w-12 bg-primary/40" />
                    <p className="font-headline italic text-xl text-primary opacity-80">
                      Preserving the soul of the flower.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeIn className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                    <Image
                      src="/images/gathering.webp"
                      alt="Close up of hands gently picking a purple crocus flower at early dawn"
                      fill
                      className="object-cover transition-all duration-700"
                    />
                  </div>
                  {/* Floating Stat Card */}
                  <div className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 z-20 overflow-hidden rounded-sm shadow-2xl max-w-[180px] md:max-w-[200px]">
                    <div className="glass-effect p-5 md:p-8 border border-white/20 backdrop-blur-md">
                      <div className="relative text-center">
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 md:mb-3">Window</p>
                        <p className="font-headline text-3xl md:text-4xl text-on-surface italic mb-3">3 Weeks</p>
                        <p className="text-[9px] md:text-[10px] tracking-[0.1em] uppercase text-on-surface/90 leading-relaxed font-light">
                          The fleeting annual window of perfection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Phase 02: The Separation ── */}
        <section className="relative py-20 px-8 md:px-24 bg-surface z-10">
          <div className="max-w-7xl mx-auto">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-12">
              <FadeUp>
                <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-6 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-2xl text-primary italic">02</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-4">Stage Two: Extraction</p>
                <h2 className="font-headline text-5xl md:text-7xl mb-8 leading-tight text-on-surface">
                  The <span className="italic">Separation</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <FadeIn className="md:col-span-12">
                <div className="relative aspect-[21/9] overflow-hidden rounded-sm group shadow-2xl">
                  <Image
                    src="/images/heritage-separation.webp"
                    alt="Artisanal separation process"
                    fill
                    className="object-cover brightness-75 group-hover:scale-[1.02] transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/60 md:to-transparent flex items-center p-8 md:p-20">
                    <div className="max-w-xl glass-effect p-8 md:p-12 border border-white/10 rounded-sm">
                      <p className="text-on-surface text-lg md:text-xl leading-relaxed italic font-headline mb-6">
                        "A tradition passed down through generations, performed by expert hands."
                      </p>
                      <p className="text-on-surface/80 text-sm md:text-base leading-relaxed font-light">
                        The delicate extraction of the three red stigmas is
                        performed by the expert hands of our cooperative's women. It takes over 150,000 flowers 
                        to produce just one kilogram of iD BAKHCHANE saffron.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Phase 03: Natural Drying & Curing ── */}
        <section className="relative py-20 bg-surface z-10">
          <div className="max-w-7xl mx-auto px-8">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-12">
              <FadeUp>
                <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-6 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-2xl text-primary italic">03</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-4">Stage Three: Preservation</p>
                <h2 className="font-headline text-5xl md:text-7xl mb-8 leading-tight text-on-surface">
                  Drying &amp; <span className="italic">Curing</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-sm shadow-2xl border border-outline-variant/10">
              <FadeUp>
                <div className="bg-surface-container-highest p-10 md:p-20 flex flex-col justify-center h-full">
                  <div className="space-y-12 max-w-xl">
                    <div className="flex gap-8 group/item">
                      <div className="shrink-0 font-headline text-5xl text-primary/80 transition-transform duration-500 group-hover/item:scale-110">01</div>
                      <p className="text-on-surface-variant text-base leading-relaxed pt-2">
                        Natural evaporation on fine silk screens in shaded, temperature-controlled rooms, preserving every trace of aroma.
                      </p>
                    </div>
                    <div className="flex gap-8 group/item">
                      <div className="shrink-0 font-headline text-5xl text-primary/80 transition-transform duration-500 group-hover/item:scale-110">02</div>
                      <p className="text-on-surface-variant text-base leading-relaxed pt-2">
                        Storing in airtight containers to reach peak flavor complexity, locking in record-high Crocin levels.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
              <FadeIn delay={0.2}>
                <div className="relative min-h-[400px] h-full">
                  <Image
                    src="/images/heritage-drying-premium.webp"
                    alt="Premium red saffron threads drying"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Phase 04: The Standard of Purity ── */}
        <section className="relative py-20 md:py-32 bg-surface z-10">
          <div className="max-w-7xl mx-auto px-8">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-12">
              <FadeUp>
                <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-6 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-2xl text-primary italic">04</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-4">Stage Four: Verification</p>
                <h2 className="font-headline text-5xl md:text-7xl mb-8 leading-tight text-on-surface">
                  The Standard of <span className="italic">Purity</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/10 border-y border-outline-variant/10 bg-surface-container-lowest/30 backdrop-blur-sm">
              {[
                {
                  label: "ISO 3632-1",
                  title: "Grade I Testing",
                  text: "Rigorously analyzed to exceed international standards for color, flavor, and purity.",
                },
                {
                  label: "PURE ORIGIN",
                  title: "100% Organic",
                  text: "Zero additives. Zero dyes. Just the pure soil of Taliouine and the morning dew.",
                },
                {
                  label: "ETHICAL",
                  title: "Social Impact",
                  text: "Directly supporting the women's cooperatives that safeguard this heritage.",
                },
              ].map((card, i) => (
                <FadeUp key={card.label} delay={0.1 * i}>
                  <div className="p-12 md:p-16 flex flex-col items-center text-center hover:bg-surface-container-low transition-colors duration-700 h-full group">
                    <span className="font-headline text-primary text-3xl italic mb-6 block transform group-hover:scale-110 transition-transform duration-700">
                      {card.label}
                    </span>
                    <h4 className="text-on-surface text-[10px] uppercase tracking-[0.2em] mb-4 font-bold">
                      {card.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light px-4">
                      {card.text}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Phase 05: The Art of Precision ── */}
        <section className="relative py-20 pb-32 bg-surface z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-12">
              <FadeUp>
                <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-6 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-2xl text-primary italic">05</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-4">Stage Five: Final Perfection</p>
                <h2 className="font-headline text-5xl md:text-7xl mb-8 leading-tight text-on-surface">
                  Art of <span className="italic">Precision</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <FadeIn className="relative">
                <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm shadow-2xl group">
                  <Image
                    src="/images/pdt1.webp"
                    alt="iD BAKHCHANE luxury packaging"
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                </div>
              </FadeIn>

              <FadeUp delay={0.2}>
                <div className="max-w-xl">
                  <div className="space-y-10">
                    <p className="text-on-surface-variant text-lg font-light leading-relaxed italic border-l-2 border-primary/20 pl-8">
                      "Every gram is weighed with pharmaceutical-grade accuracy, protected in medical-grade glass to preserve it forever."
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                      <div>
                        <h4 className="text-[9px] uppercase tracking-widest font-bold text-primary mb-3">Vial Selection</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          Violet glass protection to block UV rays and lock in potency.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[9px] uppercase tracking-widest font-bold text-primary mb-3">Sealed Legacy</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          Individually hand-sealed for guaranteed authenticity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </div>

      {/* ── Final Unified CTA ── */}
      <section className="py-24 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 text-center pt-12">
          <FadeUp>
            <p className="text-primary uppercase tracking-[0.4em] text-[10px] mb-8 font-bold">
              The Journey is Complete
            </p>
            <div className="flex justify-center">
              <Link
                href="/products"
                className="btn-primary group !px-16 !py-6 shadow-2xl hover:shadow-primary/30 transition-all duration-700 hover:-translate-y-2 scale-110"
              >
                <span className="uppercase tracking-[0.4em] text-[11px] text-white font-bold">
                  Enter the Collection
                </span>
                <span className="material-icons-outlined text-white group-hover:translate-x-3 transition-transform duration-500">
                  trending_flat
                </span>
              </Link>
            </div>
            <p className="mt-16 text-on-surface-variant/40 text-[9px] uppercase tracking-[0.5em] font-light">
              Experience the pinnacle of Taliouine's Heritage
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
