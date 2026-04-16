"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  variants?: readonly string[];
}

export default function QuantitySelector({ variants }: QuantitySelectorProps) {
  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(variants?.[0] ?? "");

  return (
    <div className="space-y-4">
      {/* Weight variants */}
      {variants && variants.length > 1 && (
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-3">
            Weight
          </p>
          <div className="flex flex-wrap gap-2">
            {variants.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setSelectedVariant(v)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-bold border rounded-sm transition-all duration-300 ${
                  selectedVariant === v
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-outline-variant/20 text-stone-400 hover:border-primary/40 hover:text-stone-200"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity counter */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-outline-variant/20 rounded-sm">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-11 h-11 flex items-center justify-center text-stone-400 hover:text-primary transition-colors"
          >
            <span className="material-icons-outlined text-lg">remove</span>
          </button>
          <span className="w-12 text-center text-on-surface text-sm font-bold tabular-nums">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="w-11 h-11 flex items-center justify-center text-stone-400 hover:text-primary transition-colors"
          >
            <span className="material-icons-outlined text-lg">add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
