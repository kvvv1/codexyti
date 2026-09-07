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
      <div id="projetos" data-section="projects" className="portfolio-showcase relative isolate bg-background pt-0">
        <div className="relative pb-[45vh]">
          <div className="sticky top-0 bg-background" style={{ zIndex: 1 }}>
            <TrilhaDevShowcase />
          </div>
        </div>
        <div className="relative pb-[45vh]">
          <div className="sticky top-0 bg-background" style={{ zIndex: 2 }}>
            <MobileShowcase />
          </div>
        </div>
        <div className="relative pb-[45vh]">
          <div className="sticky top-0 bg-background" style={{ zIndex: 3 }}>
            <DoctorShowcase />
          </div>
        </div>
        <div className="relative">
          <div className="sticky top-0 bg-background" style={{ zIndex: 4 }}>
            <ImperialShowcase />
          </div>
        </div>
      </div>
      <ServicesSection />
      <NicheDirectory />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
