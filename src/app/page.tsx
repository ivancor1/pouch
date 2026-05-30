import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PurchaseCard from "@/components/PurchaseCard";
import WhatItDoes from "@/components/WhatItDoes";
import WorkBlockEquation from "@/components/WorkBlockEquation";
import WhyNoNicotine from "@/components/WhyNoNicotine";
import Ingredients from "@/components/Ingredients";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

function FuckAdderall() {
  return (
    <div className="border-t border-b border-zinc-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-zinc-900 text-4xl md:text-5xl font-light tracking-tight">
          F*ck Adderall.
        </p>
      </div>
    </div>
  );
}

function WorkBlockBridge() {
  return (
    <div className="py-14 border-t border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-3">
        <p
          className="text-zinc-400 text-sm"
          style={{ fontFamily: "ui-monospace, Menlo, monospace" }}
        >
          One pouch = one work block.
        </p>
        <div className="w-px h-6 bg-zinc-200" />
        <p className="text-zinc-500 text-sm font-light">So what is a work block?</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <PurchaseCard />
      <FuckAdderall />
      <WhatItDoes />
      <WorkBlockBridge />
      <WorkBlockEquation />
      <WhyNoNicotine />
      <Ingredients />
      <FAQ />
      <Footer />
    </main>
  );
}
