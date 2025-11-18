import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import BeginSection from "@/components/BeginSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickAccess />
      <HowItWorks />
      <Features />
      <Benefits />
      <BeginSection />
    </main>
  );
}