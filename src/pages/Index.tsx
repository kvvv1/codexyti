import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import { CodexyShowcase } from "@/components/sections/CodexyShowcase";
import { MobileShowcase } from "@/components/sections/MobileShowcase";
import { DoctorShowcase } from "@/components/sections/DoctorShowcase";
import { ImperialShowcase } from "@/components/sections/ImperialShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="portfolio-showcase relative isolate overflow-hidden bg-[hsl(var(--primary))] pt-20 text-white [background-image:radial-gradient(circle_at_18%_8%,hsl(var(--accent)/0.16),transparent_34%),radial-gradient(circle_at_82%_38%,hsl(var(--primary-glow)/0.22),transparent_36%),linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_8%,hsl(var(--primary)/0.96)_18%,hsl(var(--tech-blue-light))_52%,hsl(var(--primary))_100%)]">
        <CodexyShowcase />
        <MobileShowcase />
        <DoctorShowcase />
        <ImperialShowcase />
      </div>
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
