import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function TestAssets() {
  return (
    <div className="p-20 bg-surface">
      <h1 className="text-white mb-10">Asset Test</h1>
      <div className="space-y-10">
        <div>
          <p className="text-stone-500 mb-2">Logo White:</p>
          <img src="/images/logo-white.png" alt="Logo White" className="h-20 bg-primary p-4" />
        </div>
        <div>
          <p className="text-stone-500 mb-2">Logo Color:</p>
          <img src="/images/logo-color.png" alt="Logo Color" className="h-20" />
        </div>
        <div>
          <p className="text-stone-500 mb-2">Hero GIF (36MB - may take time):</p>
          <img src="/images/hero-crocus.gif" alt="Hero GIF" className="w-full max-w-xl" />
        </div>
      </div>
    </div>
  );
}
