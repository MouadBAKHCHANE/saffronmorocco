import Container from '@/components/layout/Container';
import FadeUp from '@/components/animations/FadeUp';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h1 className="font-headline text-5xl md:text-7xl mb-12">Terms of Service</h1>
            <p className="text-body-lg text-stone-400 mb-16 italic font-light">
              Conditions of use for our platform and artisanal services.
            </p>
          </FadeUp>

          <div className="prose prose-invert prose-stone max-w-none space-y-12">
            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">Acceptance</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                By accessing this website, you agree to be bound by these terms of service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">Artisanal Quality</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                Every order from iD BAKHCHANE consists of high-quality, hand-harvested saffron. Variations in harvest color and aroma are natural characteristics of the Crocus sativus and a testament to its authentic, organic origin.
              </p>
            </section>

            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">User Conduct</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                Users are encouraged to explore our heritage and products for personal, non-commercial use. The reproduction of any brand assets, photography, or editorial content without explicit written consent is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">Modifications</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                We reserve the right to revise these terms of service at any time without notice. By using this website, you agree to be bound by the then-current version of these terms.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
