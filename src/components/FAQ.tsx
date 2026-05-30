"use client";

import { useState } from "react";
import { ChevronDown } from "./icons";

const faqs = [
  {
    q: "Does EIGEN contain nicotine?",
    a: "No. EIGEN is completely nicotine-free. There is no tobacco or nicotine of any kind in EIGEN pouches. The product was designed specifically to offer a clean focus ritual without dependency risk.",
  },
  {
    q: "How long do I keep it in?",
    a: "Most people use it for 20–45 minutes. You don't need to keep it in for your entire work session. EIGEN is designed as a ritual to help you begin, not something to use all day. Remove it when you're ready.",
  },
  {
    q: "How much caffeine is in one pouch?",
    a: "Each EIGEN pouch contains a moderate amount of caffeine, comparable to about half a cup of coffee. We recommend not exceeding two pouches per day, and avoiding use close to bedtime. If you are sensitive to caffeine or have a medical condition, consult a healthcare professional before use.",
  },
  {
    q: "Is this for studying?",
    a: "Yes, studying is one of EIGEN's primary use cases. But it's designed broadly for any focused work: coding, writing, financial analysis, building. Anywhere you need to sit down and produce something.",
  },
  {
    q: "How many pouches come in a can?",
    a: "Each can contains 15 pouches, enough for 15 focus sessions.",
  },
  {
    q: "Can I use more than one per day?",
    a: "You can use up to two pouches per day. We recommend spacing them out by several hours and paying attention to how you personally respond to caffeine. Do not exceed two per day.",
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
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-zinc-500 text-sm font-light leading-relaxed pb-5 pr-8">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <p className="text-zinc-400 tracking-[0.22em] text-xs font-medium uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-4xl font-light text-zinc-900 leading-snug tracking-tight">
              Common questions.
            </h2>
            <p className="text-zinc-500 font-light mt-4 leading-relaxed text-sm max-w-xs">
              Something else on your mind? Reach out at{" "}
              <span className="text-zinc-700">hello@eigenpouch.com</span>
            </p>
          </div>

          {/* Right */}
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
