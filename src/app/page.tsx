import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PurchaseCard from "@/components/PurchaseCard";
import DeepWork from "@/components/DeepWork";
import HowItWorks from "@/components/HowItWorks";
import WorkBlockEquation from "@/components/WorkBlockEquation";
import WhyNoNicotine from "@/components/WhyNoNicotine";
import Ingredients from "@/components/Ingredients";
import Comparison from "@/components/Comparison";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

function FuckAdderall() {
  return (
    <div className="border-y border-zinc-100 py-10 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p
          className="text-zinc-900 text-2xl md:text-3xl font-light tracking-tight"
          style={{ letterSpacing: "-0.01em" }}
        >
          F*ck Adderall.
        </p>
        <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
          No prescription. No crash. No dependence. Just a clean start to a work block — whenever
          you need one.
        </p>
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
      <DeepWork />
      <HowItWorks />
      <WorkBlockEquation />
      <WhyNoNicotine />
      <Ingredients />
      <Comparison />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}
