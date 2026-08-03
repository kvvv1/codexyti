import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";

// Below-the-fold portfolio screenshots — biggest chunk of the homepage's
// asset weight, split out so the initial bundle doesn't pay for them upfront.
const CodexyShowcase = lazy(() =>
  import("@/components/sections/CodexyShowcase").then((m) => ({ default: m.CodexyShowcase }))
);
const MobileShowcase = lazy(() =>
  import("@/components/sections/MobileShowcase").then((m) => ({ default: m.MobileShowcase }))
);
const DoctorShowcase = lazy(() =>
  import("@/components/sections/DoctorShowcase").then((m) => ({ default: m.DoctorShowcase }))
);
const ImperialShowcase = lazy(() =>
  import("@/components/sections/ImperialShowcase").then((m) => ({ default: m.ImperialShowcase }))
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="h-56 bg-gradient-to-b from-background to-[hsl(var(--primary))]" />
      <div
        data-section="projects"
        className="portfolio-showcase relative isolate overflow-hidden bg-[hsl(var(--primary))] pt-0 text-white [background-image:radial-gradient(circle_at_18%_28%,hsl(var(--accent)/0.16),transparent_34%),radial-gradient(circle_at_82%_38%,hsl(var(--primary-glow)/0.22),transparent_36%),linear-gradient(180deg,hsl(var(--primary))_0%,hsl(var(--primary)/0.96)_8%,hsl(var(--tech-blue-light))_52%,hsl(var(--primary))_100%)]"
      >
        <Suspense fallback={null}>
          <CodexyShowcase />
          <MobileShowcase />
          <DoctorShowcase />
          <ImperialShowcase />
        </Suspense>
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
