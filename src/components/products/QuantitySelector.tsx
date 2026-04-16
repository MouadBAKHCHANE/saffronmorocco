"use client";

import { useState } from "react";

const QUANTITIES = ["1g", "2g", "5g", "10g", "50g", "100g", "250g", "500g"] as const;

interface QuantitySelectorProps {
  currentWeight?: string;
}

export default function QuantitySelector({ currentWeight }: QuantitySelectorProps) {
  const normalised = currentWeight?.toLowerCase().replace(/\s+/g, "") ?? "";
  const [selected, setSelected] = useState(
    QUANTITIES.includes(normalised as typeof QUANTITIES[number])
      ? normalised
      : QUANTITIES[0]
  );

  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-3">
        Quantity
      </p>
      <div className="flex flex-wrap gap-2">
        {QUANTITIES.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => setSelected(q)}
            className={`px-4 py-2.5 text-xs uppercase tracking-widest font-bold border rounded-sm transition-all duration-300 ${
              selected === q
                ? "border-primary bg-primary/10 text-primary"
                : "border-outline-variant/20 text-stone-400 hover:border-primary/40 hover:text-stone-200"
            }`}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
