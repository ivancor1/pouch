import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PurchaseCard from "@/components/PurchaseCard";
import DeepWork from "@/components/DeepWork";
import HowItWorks from "@/components/HowItWorks";
import Ingredients from "@/components/Ingredients";
import Comparison from "@/components/Comparison";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <PurchaseCard />
      <DeepWork />
      <HowItWorks />
      <Ingredients />
      <Comparison />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}
