import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServicesOverview } from "@/components/ServicesOverview";
import { IndustriesServed } from "@/components/IndustriesServed";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FeatureVisual } from "@/components/FeatureVisual";
import { AboutSnapshot } from "@/components/AboutSnapshot";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <ServicesOverview />
        <IndustriesServed />
        <WhyChooseUs />
        <AboutSnapshot />
        <FeatureVisual />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
