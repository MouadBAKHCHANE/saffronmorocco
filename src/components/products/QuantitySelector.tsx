"use client";

import { useState } from "react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
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
  );
}
