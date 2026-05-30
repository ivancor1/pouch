"use client";

import { useState, useEffect } from "react";
import { WaveLogo } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <WaveLogo className="w-6 h-4 text-zinc-900" />
          <span className="font-medium tracking-[0.28em] text-zinc-900 text-sm">EIGEN</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
          <a href="#how-it-works" className="hover:text-zinc-900 transition-colors duration-150">
            How it works
          </a>
          <a href="#ingredients" className="hover:text-zinc-900 transition-colors duration-150">
            Ingredients
          </a>
          <a href="#faq" className="hover:text-zinc-900 transition-colors duration-150">
            FAQ
          </a>
        </div>

        <a
          href="#buy"
          className="bg-zinc-900 text-white text-sm px-5 py-2 rounded-full hover:bg-zinc-700 transition-all duration-150 font-medium hover:scale-[1.02] active:scale-[0.98]"
        >
          Buy EIGEN
        </a>
      </div>
    </nav>
  );
}
