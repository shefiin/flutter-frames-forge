import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <ExperiencesSection />
      <SustainabilitySection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
