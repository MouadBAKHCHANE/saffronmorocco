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
            src="/images/heritage-hero-mountains.jpg"
            alt="Cinematic wide shot of the Taliouine mountains at dawn"
            fill
            priority
            className="object-cover brightness-50 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
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
              <span className="material-icons-outlined text-primary text-4xl animate-bounce">
                keyboard_double_arrow_down
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── The Dawn Gathering ── */}
      <section className="py-32 px-8 md:px-24 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeUp>
              <div className="inline-block px-4 py-1 rounded-full border border-outline-variant/30 text-primary text-[10px] tracking-widest uppercase mb-8">
                Stage One: 05:00 AM
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-headline text-4xl md:text-6xl mb-8 leading-tight text-on-surface">
                The Dawn <span className="italic">Gathering</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-xl">
                Before the first ray of sun touches the Taliouine valleys, our
                harvesters begin their work. Each Crocus sativus flower must be
                hand-picked while still closed, protecting the delicate stigmas
                within from the heat of the Moroccan sun.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex items-center space-x-4">
                <div className="h-px w-12 bg-primary-container" />
                <p className="font-headline italic text-xl text-primary">
                  Preserving the soul of the flower.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeIn className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/heritage-dawn-gathering.jpg"
                  alt="Close up of hands gently picking a purple crocus flower at early dawn"
                  fill
                  className="object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-surface-container-high p-4 hidden md:block">
                <p className="text-[10px] tracking-tighter uppercase text-on-surface-variant leading-tight">
                  Harvesting takes place only two weeks a year, a fleeting
                  window of perfection.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── The Heart of the Process ── */}
      <section className="py-32 px-8 md:px-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-24">
              <h2 className="font-headline text-5xl md:text-7xl italic text-on-surface">
                The Heart of the Process
              </h2>
              <div className="w-24 h-1 bg-primary-container mx-auto mt-6" />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn className="md:col-span-2">
              <div className="relative aspect-video overflow-hidden rounded-sm group">
                <Image
                  src="/images/heritage-separation.jpg"
                  alt="Artisanal separation process where women remove red saffron stigmas from purple crocus petals"
                  fill
                  className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/80 to-transparent flex items-center p-12">
                  <div className="max-w-md">
                    <h3 className="font-headline text-3xl mb-4 text-primary">
                      The Separation
                    </h3>
                    <p className="text-on-surface-variant">
                      The delicate extraction of the three red stigmas is
                      performed by the expert hands of the local
                      cooperative&apos;s women, a tradition passed down through
                      generations.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-surface-container-high p-12 flex flex-col justify-center h-full">
                <div className="mb-6">
                  <span className="material-icons-outlined text-primary text-5xl">
                    pan_tool_alt
                  </span>
                </div>
                <h4 className="uppercase tracking-widest text-xs mb-4 text-on-surface">
                  Precision Mastery
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  It takes over 150,000 flowers to produce just one kilogram of
                  iD BAKHCHANE saffron. Every thread is a testament to human
                  patience and precision.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Natural Drying & Curing ── */}
      <section className="py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <FadeUp className="lg:col-span-7">
              <div className="bg-surface-container-highest p-12 md:p-24 flex flex-col justify-center h-full">
                <p className="text-primary uppercase tracking-[0.3em] text-[10px] mb-6">
                  Ancestral Wisdom
                </p>
                <h2 className="font-headline text-4xl md:text-6xl mb-10 leading-none text-on-surface">
                  Natural Drying <br />
                  &amp; <span className="italic">Curing</span>
                </h2>
                <div className="space-y-8 max-w-xl">
                  <div className="flex gap-6">
                    <div className="shrink-0 font-headline text-2xl text-primary/30">
                      01
                    </div>
                    <p className="text-on-surface-variant">
                      Unlike industrial methods using artificial heat, our
                      threads are laid on fine silk screens in shaded,
                      temperature-controlled rooms.
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 font-headline text-2xl text-primary/30">
                      02
                    </div>
                    <p className="text-on-surface-variant">
                      This slow evaporation locks in the Safranal and Crocin
                      levels, ensuring a fragrance that is both deep and
                      ethereal.
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 font-headline text-2xl text-primary/30">
                      03
                    </div>
                    <p className="text-on-surface-variant">
                      The cured saffron is then stored in airtight containers to
                      mature, allowing the flavor profile to reach its peak
                      complexity.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeIn delay={0.2} className="lg:col-span-5">
              <div className="relative min-h-[500px] h-full">
                <Image
                  src="/images/heritage-saffron-jar.jpg"
                  alt="Macro shot of dried deep red saffron threads in a luxury glass jar"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── The Standard of Purity ── */}
      <section
        id="sustainability"
        className="py-32 px-8 md:px-24 bg-surface-container-lowest"
      >
        <div className="max-w-5xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-headline text-4xl md:text-5xl mb-16 text-on-surface">
              The Standard of <span className="italic">Purity</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "verified",
                label: "ISO 3632-1",
                text: "Every batch is laboratory tested to meet the highest international grade for color, flavor, and aroma intensity.",
              },
              {
                icon: "eco",
                label: "Pure Origin",
                text: "100% organic practices. No additives, no synthetic dyes: just the pure essence of the Taliouine harvest.",
              },
              {
                icon: "groups",
                label: "Ethical Source",
                text: "Supporting local cooperatives ensures fair wages and the preservation of Moroccan agricultural heritage.",
              },
            ].map((card, i) => (
              <FadeUp key={card.label} delay={0.1 * i}>
                <div className="p-8 border border-outline-variant/10 rounded-sm hover:bg-surface-container transition-colors duration-500">
                  <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center mx-auto mb-6">
                    <span className="material-icons-outlined text-primary">
                      {card.icon}
                    </span>
                  </div>
                  <h4 className="uppercase tracking-widest text-xs mb-4 text-on-surface">
                    {card.label}
                  </h4>
                  <p className="text-sm text-on-surface-variant">{card.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div className="mt-24">
              <Link
                href="/products"
                className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-container to-primary px-10 py-5 rounded-sm hover:opacity-90 transition-opacity"
              >
                <span className="uppercase tracking-[0.2em] text-xs text-on-primary font-bold">
                  Discover the Collection
                </span>
                <span className="material-icons-outlined text-on-primary">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
