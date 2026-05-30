"use client";

import { useState } from "react";
import { ChevronDown } from "./icons";

const faqs = [
  {
    q: "Does EIGEN contain nicotine?",
    a: "No. EIGEN is nicotine-free by design. We leave nicotine out because focus should not come with nicotine dependence.",
  },
  {
    q: "How long do I keep it in?",
    a: "Use one pouch for 20–45 minutes, then dispose of it. The pouch is for starting the work block, not staying in all day.",
  },
  {
    q: "How much caffeine is in one pouch?",
    a: "The final caffeine amount will be published before launch. The goal is a moderate dose — enough to begin a work block, not an energy drink spike.",
  },
  {
    q: "How many pouches come in a can?",
    a: "Each can contains 15 pouches — 15 work blocks.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-6 group"
      >
        <span className="text-zinc-900 font-medium text-sm leading-snug">{faq.q}</span>
        <span className="shrink-0 text-zinc-400 group-hover:text-zinc-600 transition-colors duration-150">
          <ChevronDown open={open} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-zinc-500 text-sm font-light leading-relaxed pb-5 pr-8">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-zinc-400 tracking-[0.22em] text-xs font-medium uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-4xl font-light text-zinc-900 leading-snug tracking-tight">
              Questions.
            </h2>
            <p className="text-zinc-500 font-light mt-4 text-sm max-w-xs">
              Anything else? Reach out at{" "}
              <span className="text-zinc-700">hello@eigenpouch.com</span>
            </p>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
