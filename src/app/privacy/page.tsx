import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import FadeUp from '@/components/animations/FadeUp';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How iD BAKHCHANE collects, uses, and safeguards your personal data.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h1 className="font-headline text-5xl md:text-7xl mb-12">Privacy Policy</h1>
            <p className="text-body-lg text-stone-400 mb-16 italic font-light">
              Last updated: April 2026. Your privacy is fundamental to our relationship.
            </p>
          </FadeUp>

          <div className="prose prose-invert prose-stone max-w-none space-y-12">
            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">Introduction</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                At iD BAKHCHANE, we respect your privacy and are committed to protecting the personal data you share with us. This policy describes how we collect, use, and safeguard your information when you visit our website or purchase our premium saffron.
              </p>
            </section>

            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">Data Collection</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                We collect personal information that you voluntarily provide, such as your name, email address, shipping address, and payment details when making a purchase. This data is essential for fulfilling your orders and providing exceptional service.
              </p>
            </section>

            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">Use of Information</h2>
              <ul className="list-none space-y-4 text-stone-300 font-light">
                <li className="flex gap-4">
                  <span className="text-primary/40">—</span>
                  To process and ship your saffron orders directly from the cooperative.
                </li>
                <li className="flex gap-4">
                  <span className="text-primary/40">—</span>
                  To communicate order status and respond to your inquiries.
                </li>
                <li className="flex gap-4">
                  <span className="text-primary/40">—</span>
                  To send periodic newsletters or heritage updates if you have opted in.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-primary font-headline text-2xl tracking-widest uppercase mb-4">Security</h2>
              <p className="text-stone-300 leading-relaxed font-light">
                We implement industry-standard security measures, including SSL encryption, to protect your sensitive data. We do not sell or trade your personal information to third parties.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
