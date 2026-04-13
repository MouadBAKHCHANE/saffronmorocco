import Container from '@/components/layout/Container';
import FadeUp from '@/components/animations/FadeUp';

export default function ShippingPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h1 className="font-headline text-5xl md:text-7xl mb-12">Shipping Policy</h1>
            <p className="text-body-lg text-stone-400 mb-16 italic font-light">
              Our journey from the fields of Taliouine to your world.
            </p>
          </FadeUp>

          <div className="prose prose-invert prose-stone max-w-none space-y-12">
            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">Origin of Shipping</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                All our saffron is packaged and shipped directly from our cooperative facilities in Morocco. This ensures the integrity of the harvest and supports the local economy of our farmers.
              </p>
            </section>

            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">International Delivery</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                We ship globally using premium secure courier services (DHL, FedEx). Delivery times typically range between 5 to 10 business days depending on your location.
              </p>
            </section>

            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">Packaging & Care</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                Our saffron is double-sealed in air-tight, UV-protective jars to preserve aroma and potency during transit. We take extreme care to ensure your order arrives in pristine condition.
              </p>
            </section>

            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">Customs & Duties</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                Please note that international orders may be subject to local import duties and taxes. These charges are the responsibility of the recipient and are not included in our shipping rates.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
