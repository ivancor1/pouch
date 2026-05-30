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
    <section id="buy" className="py-24 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: product info */}
          <div className="space-y-4">
            <div className="shrink-0">
              <ProductCan size="md" />
            </div>
            <div className="space-y-1 pt-2">
              <h2 className="text-zinc-900 font-medium text-lg tracking-wide">EIGEN Focus Pouches</h2>
              <p className="text-zinc-400 text-sm">Mint &middot; 15 work blocks per can</p>
            </div>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs">
              A clean, nicotine-free pouch for getting focused work started. One pouch, one work
              block.
            </p>
          </div>

          {/* Right: purchase card */}
          <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm p-8 space-y-6">
            {/* Price */}
            <div className="flex items-baseline gap-2.5">
              <span className="text-4xl font-light text-zinc-900">${unitPrice.toFixed(2)}</span>
              {plan === "subscribe" && (
                <>
                  <span className="text-sm text-zinc-300 line-through">${basePrice.toFixed(2)}</span>
                  <span className="text-xs text-zinc-400 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-full">
                    15% off
                  </span>
                </>
              )}
            </div>

            {/* Plan */}
            <div className="space-y-2.5">
              {(
                [
                  { value: "one-time" as const, label: "One-time purchase", sublabel: `$${basePrice.toFixed(2)}` },
                  { value: "subscribe" as const, label: "Subscribe & save 15%", sublabel: `$${(basePrice * 0.85).toFixed(2)}/mo` },
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
                      {plan === opt.value && <div className="w-2 h-2 rounded-full bg-zinc-900" />}
                    </div>
                    <span className={`text-sm font-medium ${plan === opt.value ? "text-zinc-900" : "text-zinc-500"}`}>
                      {opt.label}
                    </span>
                  </div>
                  <span className={`text-sm ${plan === opt.value ? "text-zinc-900 font-medium" : "text-zinc-400"}`}>
                    {opt.sublabel}
                  </span>
                </button>
              ))}
            </div>

            {/* Qty */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">Quantity</span>
              <div className="flex items-center gap-5 bg-zinc-50 border border-zinc-100 rounded-full px-5 py-2.5">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="text-zinc-400 hover:text-zinc-900 transition-colors duration-150 text-base leading-none"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="text-zinc-900 font-medium text-sm w-4 text-center tabular-nums">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="text-zinc-400 hover:text-zinc-900 transition-colors duration-150 text-base leading-none"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleReserve}
              disabled={reserved}
              className={`w-full py-4 rounded-2xl text-sm font-medium transition-all duration-200 ${
                reserved
                  ? "bg-zinc-100 text-zinc-500 cursor-default"
                  : "bg-zinc-900 text-white hover:bg-zinc-700 active:scale-[0.99]"
              }`}
            >
              {reserved ? "Reserved ✓" : `Join first drop · $${total}`}
            </button>

            <p className="text-center text-xs text-zinc-400">
              Nicotine-free. Sugar-free. Built for focused work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
