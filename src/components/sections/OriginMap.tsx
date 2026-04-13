import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';
import FadeIn from '@/components/animations/FadeIn';
import Container from '@/components/layout/Container';
import { IMAGE_URLS } from '@/lib/constants';

export default function OriginMap() {
  return (
    <section className="bg-[#12100E] min-h-[90vh] flex items-center py-24 md:py-32 overflow-hidden border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Map Left */}
          <FadeIn className="relative aspect-square lg:aspect-auto lg:h-[70vh]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[120px] opacity-30" />
            <Image
              src={IMAGE_URLS.moroccoPremium}
              alt="Premium 3D Map of Morocco highlighting Taliouine"
              fill
              priority
              className="object-contain drop-shadow-[0_0_80px_rgba(0,0,0,0.6)] transform scale-110 transition-transform duration-1000 hover:scale-115"
            />
            {/* Legend/Location Label */}
            <div className="absolute bottom-10 left-10 border-l border-primary/40 pl-4 py-2 bg-black/20 backdrop-blur-sm rounded-r-lg">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Origin Point</p>
              <h4 className="font-headline text-xl text-off-white italic">Taliouine</h4>
              <p className="text-[10px] text-warm-gray mt-1 opacity-60">30.5284° N, 7.8920° W</p>
            </div>
          </FadeIn>

          {/* Text Right */}
          <div className="space-y-8 max-w-xl">
            <FadeUp>
              <div className="inline-flex items-center gap-4">
                <div className="h-[1px] w-8 bg-primary/40" />
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary brightness-150">
                  The Dawn
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-headline text-5xl md:text-7xl font-light text-off-white leading-[0.95] tracking-tight">
                Taliouine,<br />
                <span className="italic font-light text-primary pr-4">Morocco</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-6">
                <p className="font-light leading-relaxed text-warm-gray text-lg md:text-xl opacity-90">
                  Our saffron is cultivated in the mountainous heart of the Souss-Massa region.
                  The extreme temperature fluctuations from frost-driven nights to sun-
                  drenched days force the plant to concentrate its precious essential oils.
                </p>
                
                <p className="font-light leading-relaxed text-stone-500 text-lg">
                  Every gram of Bakhchane saffron is hand-harvested by our local cooperative 
                  at the exact moment of dawn, when the crocus flowers first open to the Moroccan sky.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3} className="pt-8">
              <div className="p-8 border border-outline-variant/30 bg-white/5 backdrop-blur-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150" />
                <h4 className="text-white font-headline text-2xl italic mb-4">Terroir of Excellence</h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                  The unique mineral composition of the Anti-Atlas soil provides the complex aromatic 
                  profile that defines "iD Bakhchane" saffron.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
