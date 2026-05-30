"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setJoined(true);
  };

  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-zinc-600 tracking-[0.22em] text-xs font-medium uppercase mb-6">
          Launching soon
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-4">
          Built for people
          <br className="hidden sm:block" /> who need to lock in.
        </h2>
        <p className="text-zinc-400 font-light mb-12 max-w-sm mx-auto text-base leading-relaxed">
          Join the first drop. Be notified when EIGEN ships.
        </p>

        {joined ? (
          <div className="inline-flex items-center gap-3 bg-zinc-800 border border-zinc-700 text-zinc-300 px-8 py-4 rounded-2xl text-sm">
            <span className="text-zinc-500">✓</span>
            You&apos;re on the list. We&apos;ll be in touch.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-zinc-800 text-white placeholder-zinc-600 text-sm px-5 py-3.5 rounded-2xl border border-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors duration-150"
            />
            <button
              type="submit"
              className="bg-white text-zinc-900 text-sm font-medium px-6 py-3.5 rounded-2xl hover:bg-zinc-100 active:scale-[0.98] transition-all duration-150 whitespace-nowrap"
            >
              Join waitlist
            </button>
          </form>
        )}

        <p className="text-zinc-700 text-xs mt-6">
          No spam. No pressure. Just a heads-up when we&apos;re ready.
        </p>
      </div>
    </section>
  );
}
