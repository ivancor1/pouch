"use client";

import { useState } from "react";
import ProductCan from "./ProductCan";

export default function PurchaseCard() {
  const [qty, setQty] = useState(1);
  const [plan, setPlan] = useState<"one-time" | "subscribe">("one-time");
  const [reserved, setReserved] = useState(false);

  const basePrice = 24;
  const unitPrice = plan === "subscribe" ? basePrice * 0.85 : basePrice;
  const total = (unitPrice * qty).toFixed(2);

  const handleReserve = () => {
    setReserved(true);
    setTimeout(() => setReserved(false), 2200);
  };

  return (
    <section id="buy" className="py-24 bg-zinc-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm p-8 space-y-6">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <div>
                  <h2 className="text-zinc-900 font-medium text-base tracking-wide">
                    EIGEN Focus Pouches
                  </h2>
                  <p className="text-zinc-400 text-sm mt-1">15 work blocks per can</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Mint", "Nicotine-free", "Sugar-free"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-zinc-500 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <ProductCan size="sm" />
              </div>
            </div>

            {/* Price display */}
            <div className="flex items-baseline gap-2.5">
              <span className="text-4xl font-light text-zinc-900">${unitPrice.toFixed(2)}</span>
              {plan === "subscribe" && (
                <span className="text-sm text-zinc-300 line-through">${basePrice.toFixed(2)}</span>
              )}
              {plan === "subscribe" && (
                <span className="text-xs text-zinc-400 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-full">
                  15% off
                </span>
              )}
            </div>

            {/* Plan selector */}
            <div className="space-y-2.5">
              {(
                [
                  {
                    value: "one-time" as const,
                    label: "One-time purchase",
                    sublabel: `$${basePrice.toFixed(2)}`,
                  },
                  {
                    value: "subscribe" as const,
                    label: "Subscribe & save 15%",
                    sublabel: `$${(basePrice * 0.85).toFixed(2)}/mo`,
                  },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setPlan(opt.value)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-150 ${
                    plan === opt.value
                      ? "border-zinc-900 bg-zinc-50/80"
                      : "border-zinc-100 hover:border-zinc-200 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-150 ${
                        plan === opt.value ? "border-zinc-900" : "border-zinc-300"
                      }`}
                    >
                      {plan === opt.value && (
                        <div className="w-2 h-2 rounded-full bg-zinc-900" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        plan === opt.value ? "text-zinc-900" : "text-zinc-500"
                      }`}
                    >
                      {opt.label}
                    </span>
                  </div>
                  <span
                    className={`text-sm ${
                      plan === opt.value ? "text-zinc-900 font-medium" : "text-zinc-400"
                    }`}
                  >
                    {opt.sublabel}
                  </span>
                </button>
              ))}
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">Quantity</span>
              <div className="flex items-center gap-5 bg-zinc-50 border border-zinc-100 rounded-full px-5 py-2.5">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="text-zinc-400 hover:text-zinc-900 transition-colors duration-150 text-base leading-none font-light"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="text-zinc-900 font-medium text-sm w-4 text-center tabular-nums">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="text-zinc-400 hover:text-zinc-900 transition-colors duration-150 text-base leading-none font-light"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleReserve}
              disabled={reserved}
              className={`w-full py-4 rounded-2xl text-sm font-medium transition-all duration-200 ${
                reserved
                  ? "bg-zinc-100 text-zinc-500 cursor-default"
                  : "bg-zinc-900 text-white hover:bg-zinc-700 active:scale-[0.99] hover:scale-[1.005]"
              }`}
            >
              {reserved ? "Reserved ✓" : `Reserve your can · $${total}`}
            </button>

            {/* Trust line */}
            <p className="text-center text-xs text-zinc-400 leading-relaxed">
              Nicotine-free. Sugar-free. Designed for focused work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
