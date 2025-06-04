import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
};

export default Index;
