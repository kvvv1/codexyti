import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";
import { TrilhaDevShowcase } from "@/components/sections/TrilhaDevShowcase";
import { MobileShowcase } from "@/components/sections/MobileShowcase";
import { DoctorShowcase } from "@/components/sections/DoctorShowcase";
import { ImperialShowcase } from "@/components/sections/ImperialShowcase";
import NicheDirectory from "@/components/NicheDirectory";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageSeo
        title="CODEXY — Chatbot de WhatsApp e Soluções Digitais para Empresas"
        description="A CODEXY desenvolve chatbot de WhatsApp, automação de atendimento, sites e apps sob medida — pra sua empresa atender melhor e vender mais, 24 horas por dia."
        path="/"
        keywords="chatbot whatsapp, automação de atendimento, desenvolvimento web, aplicativos mobile, chatbots, tecnologia"
        imageAlt="Logo da CODEXY"
      />
      <HeroSection />
      <div className="h-56 bg-gradient-to-b from-background to-[hsl(var(--primary))]" />
      <div
        id="projetos"
        data-section="projects"
        className="portfolio-showcase relative isolate overflow-hidden bg-[hsl(var(--primary))] pt-0 text-white"
      >
        <TrilhaDevShowcase />
        <MobileShowcase />
        <DoctorShowcase />
        <ImperialShowcase />
      </div>
      <div className="h-56 bg-gradient-to-b from-[hsl(var(--primary))] to-secondary" />
      <ServicesSection />
      <NicheDirectory />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <div className="h-56 bg-gradient-to-b from-secondary to-[hsl(var(--primary))]" />
      <Footer />
    </div>
  );
};

export default Index;
