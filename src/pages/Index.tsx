import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import PageSeo from "@/components/PageSeo";
import { CodexyShowcase } from "@/components/sections/CodexyShowcase";
import { MobileShowcase } from "@/components/sections/MobileShowcase";
import { DoctorShowcase } from "@/components/sections/DoctorShowcase";
import { ImperialShowcase } from "@/components/sections/ImperialShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageSeo
        title="CODEXY - Soluções Digitais e Desenvolvimento Web"
        description="A CODEXY desenvolve sites, aplicativos, automações, chatbots e soluções digitais personalizadas para impulsionar empresas."
        path="/"
        keywords="desenvolvimento web, aplicativos mobile, automação, chatbots, marketing digital, Belo Horizonte, tecnologia"
        imageAlt="Logo da CODEXY"
      />
      <HeroSection />
      <div className="h-56 bg-gradient-to-b from-background to-[hsl(var(--primary))]" />
      <div
        data-section="projects"
        className="portfolio-showcase relative isolate overflow-hidden bg-[hsl(var(--primary))] pt-0 text-white [background-image:radial-gradient(circle_at_18%_28%,hsl(var(--accent)/0.16),transparent_34%),radial-gradient(circle_at_82%_38%,hsl(var(--primary-glow)/0.22),transparent_36%),linear-gradient(180deg,hsl(var(--primary))_0%,hsl(var(--primary)/0.96)_8%,hsl(var(--tech-blue-light))_52%,hsl(var(--primary))_100%)]"
      >
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
