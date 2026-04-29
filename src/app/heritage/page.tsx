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
  alternates: { canonical: "/heritage" },
  openGraph: {
    title: "Heritage | The Artisanal Journey",
    description:
      "Trace the origins of crimson gold. Discover how iD BAKHCHANE saffron is hand-harvested, separated, and cured by the women of Taliouine.",
    type: "website",
    url: "https://saffronmorocco.com/heritage",
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
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white mb-6">
              Tracing the origins of crimson gold
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-on-surface tracking-tighter italic leading-none">
              The Artisanal <span className="text-primary not-italic">Journey</span>
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

        {/* ── Phases 01–06: The Cultivation Cycle ── */}
        <section className="relative min-h-screen flex items-center py-12 px-8 md:px-24 bg-surface z-10">
          <div className="max-w-7xl mx-auto w-full">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">01&nbsp;—&nbsp;06</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">Stages One–Six: Cultivation</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-3 leading-tight text-on-surface">
                  The Cultivation <span className="italic">Cycle</span>
                </h2>
                <p className="text-on-surface-variant text-sm md:text-base max-w-2xl leading-relaxed font-light">
                  From soil to flower, the six agricultural rituals that precede every harvest in the Taliouine highlands.
                </p>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/10 border border-outline-variant/10 rounded-sm overflow-hidden">
              {[
                {
                  num: "01",
                  title: "Crop Rotation",
                  text: "Saffron bulbs are rotated every 5–9 years. Fields are regenerated by planting legumes, cereals, or crucifers to restore soil vitality.",
                },
                {
                  num: "02",
                  title: "Soil Preparation",
                  text: "One month before flowering, the earth is worked by hand with rakes on smaller plots, or mechanically on larger modern fields.",
                },
                {
                  num: "03",
                  title: "Plantation",
                  text: "Planting begins in September at 50–70 bulbs per hectare. All bulbs are produced locally to guarantee the authenticity of Taliouine saffron.",
                },
                {
                  num: "04",
                  title: "Irrigation",
                  text: "Traditional gravity irrigation sustains nearly every farm, while drip-irrigation systems are being introduced across select modern fields.",
                },
                {
                  num: "05",
                  title: "Fertilization",
                  text: "Only organic matter — natural manure and compost — nourishes the soil. No chemical fertilizers or synthetic treatments are ever used.",
                },
                {
                  num: "06",
                  title: "Cultivation",
                  text: "Weeding starts in March, performed entirely by hand. The uprooted weeds are gathered and given to livestock, closing the cycle.",
                },
              ].map((step, i) => (
                <FadeUp key={step.num} delay={0.05 * i}>
                  <div className="bg-surface hover:bg-surface-container-low transition-colors duration-700 p-5 md:p-6 h-full flex flex-col group">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-headline text-3xl text-primary/80 italic transition-transform duration-500 group-hover:scale-110 origin-left">
                        {step.num}
                      </span>
                      <div className="h-px flex-1 bg-outline-variant/20" />
                    </div>
                    <h3 className="font-headline text-xl md:text-2xl text-on-surface mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                      {step.text}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Phase 07: The Dawn Gathering ── */}
        <section className="relative md:min-h-screen flex items-center py-6 md:py-12 px-8 md:px-24 bg-surface z-10">
          <div className="max-w-7xl mx-auto w-full">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">07</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">Stage Seven: Harvesting</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-2 leading-tight text-on-surface">
                  The Dawn <span className="italic">Gathering</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <FadeUp className="order-2 lg:order-1">
                <div className="max-w-xl">
                  <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                    Before the first ray of sun touches the Taliouine valleys, our
                    harvesters begin their work, picking each Crocus sativus flower
                    by hand while it is still closed, shielding the delicate stigmas
                    within from the heat of the Moroccan sun. This pre-dawn ritual is
                    a delicate, demanding task performed in the cold, and it is carried
                    out almost entirely by women, who make up close to 70% of the pickers.
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

        {/* ── Phase 08: The Separation ── */}
        <section className="relative md:min-h-screen flex items-center py-6 md:py-12 px-8 md:px-24 bg-surface z-10">
          <div className="max-w-7xl mx-auto w-full">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">08</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">Stage Eight: Extraction</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-2 leading-tight text-on-surface">
                  The <span className="italic">Separation</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <FadeIn className="md:col-span-12">
                <div className="flex flex-col md:block relative md:aspect-[21/9] overflow-hidden rounded-sm group shadow-2xl">
                  <div className="relative aspect-video md:aspect-auto md:absolute md:inset-0">
                    <Image
                      src="/images/heritage-separation.webp"
                      alt="Artisanal separation process"
                      fill
                      className="object-cover brightness-90 md:brightness-75 md:group-hover:scale-[1.02] transition-transform duration-[3000ms]"
                    />
                  </div>
                  <div className="relative md:absolute md:inset-0 bg-surface md:bg-black/40 md:bg-gradient-to-r md:from-black/60 md:to-transparent flex items-center p-6 md:p-20">
                    <div className="max-w-xl md:glass-effect p-0 md:p-12 md:border md:border-white/10 rounded-sm">
                      <p className="text-on-surface text-lg md:text-xl leading-relaxed italic font-headline mb-4 md:mb-6">
                        "A tradition passed down through generations, performed by expert hands."
                      </p>
                      <p className="text-on-surface-variant md:text-on-surface/80 text-sm md:text-base leading-relaxed font-light">
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

        {/* ── Phase 09: Natural Drying & Curing ── */}
        <section className="relative md:min-h-screen flex items-center py-6 md:py-12 bg-surface z-10">
          <div className="max-w-7xl mx-auto px-8 w-full">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">09</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">Stage Nine: Preservation</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-2 leading-tight text-on-surface">
                  Drying &amp; <span className="italic">Curing</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-sm shadow-2xl border border-outline-variant/10">
              <FadeUp>
                <div className="bg-surface-container-highest p-8 md:p-12 flex flex-col justify-center h-full">
                  <div className="space-y-6 max-w-xl">
                    <div className="flex gap-6 group/item">
                      <div className="shrink-0 font-headline text-4xl text-primary/80 transition-transform duration-500 group-hover/item:scale-110">01</div>
                      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-1">
                        Natural evaporation on fine silk screens in shaded, temperature-controlled rooms, preserving every trace of aroma.
                      </p>
                    </div>
                    <div className="flex gap-6 group/item">
                      <div className="shrink-0 font-headline text-4xl text-primary/80 transition-transform duration-500 group-hover/item:scale-110">02</div>
                      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-1">
                        Storing in airtight containers to reach peak flavor complexity, locking in record-high Crocin levels.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
              <FadeIn delay={0.2}>
                <div className="relative min-h-[280px] h-full">
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

        {/* ── Phase 10: The Standard of Purity ── */}
        <section className="relative md:min-h-screen flex items-center py-6 md:py-12 bg-surface z-10">
          <div className="max-w-7xl mx-auto px-8 w-full">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">10</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">Stage Ten: Verification</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-2 leading-tight text-on-surface">
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
                  <div className="p-8 md:p-10 flex flex-col items-center text-center hover:bg-surface-container-low transition-colors duration-700 h-full group">
                    <span className="font-headline text-primary text-2xl italic mb-3 block transform group-hover:scale-110 transition-transform duration-700">
                      {card.label}
                    </span>
                    <h4 className="text-on-surface text-[10px] uppercase tracking-[0.2em] mb-3 font-bold">
                      {card.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light px-2">
                      {card.text}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Phase 11: The Art of Precision ── */}
        <section className="relative md:min-h-screen flex items-center py-6 md:py-12 bg-surface z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 w-full">
            {/* Phase Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">11</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">Stage Eleven: Final Perfection</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-2 leading-tight text-on-surface">
                  Art of <span className="italic">Precision</span>
                </h2>
              </FadeUp>
            </div>

            <div className="space-y-6">
              <FadeUp delay={0.1}>
                <div className="max-w-3xl mx-auto">
                  <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed italic border-l-2 border-primary/20 pl-8">
                    "Every gram is weighed with pharmaceutical-grade accuracy, protected in medical-grade glass to preserve it forever."
                  </p>
                </div>
              </FadeUp>

              <FadeIn className="relative">
                <div className="flex flex-col md:block relative md:aspect-[21/9] overflow-hidden rounded-sm shadow-2xl group">
                  <div className="relative aspect-video md:aspect-auto md:absolute md:inset-0">
                    <Image
                      src="/images/pdt-page-hero.png"
                      alt="iD BAKHCHANE luxury packaging"
                      fill
                      className="object-cover md:transition-transform md:duration-[2000ms] md:group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 md:bg-gradient-to-t md:from-black/80 md:via-black/40 md:to-transparent" />
                  </div>

                  <div className="relative md:absolute md:inset-x-0 md:bottom-0 p-6 md:p-16 bg-surface md:bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-5xl mx-auto">
                      <div>
                        <h4 className="text-[10px] md:text-base uppercase tracking-widest font-bold text-primary mb-2 md:mb-3">Vial Selection</h4>
                        <p className="text-xs md:text-lg text-on-surface-variant md:text-white/90 leading-snug md:leading-relaxed font-light">
                          Violet glass protection to block UV rays and lock in potency.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[10px] md:text-base uppercase tracking-widest font-bold text-primary mb-2 md:mb-3">Sealed Legacy</h4>
                        <p className="text-xs md:text-lg text-on-surface-variant md:text-white/90 leading-snug md:leading-relaxed font-light">
                          Individually hand-sealed for guaranteed authenticity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
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
                className="btn-primary group !px-10 !py-4 shadow-2xl hover:shadow-primary/30 transition-all duration-700 hover:-translate-y-1 scale-100"
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
