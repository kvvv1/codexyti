import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "/logo.png";

const scrollToContact = () =>
  document.querySelector('[data-section="contact"]')?.scrollIntoView({ behavior: "smooth" });

const scrollToProjects = () =>
  document.querySelector('[data-section="projects"]')?.scrollIntoView({ behavior: "smooth" });

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative hero-gradient overflow-hidden" style={{ height: "170vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="CODEXY Hero Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/10" />
        </div>

        <motion.div style={{ scale: glowScale }} className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-56 h-56 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/5 w-48 h-48 sm:w-80 sm:h-80 bg-primary/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }} />

        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="relative z-20 container mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-card text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-tech-gray">Inovação em Tecnologia</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src={logo} alt="Logo Codexy" className="h-14 sm:h-16 md:h-20 w-auto mx-auto" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-tech-gray font-light"
            >
              Transformamos ideias em <span className="text-accent font-semibold">soluções digitais</span> que
              impulsionam o futuro da sua empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold tech-glow w-full sm:w-auto"
                  onClick={scrollToContact}
                >
                  Começar Projeto
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold tech-card border-primary/20 hover:border-accent w-full sm:w-auto"
                  onClick={scrollToProjects}
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Ver Portfólio
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 max-w-md mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">30+</div>
                <div className="text-xs sm:text-sm text-tech-gray">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">99%</div>
                <div className="text-xs sm:text-sm text-tech-gray">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs sm:text-sm text-tech-gray">Suporte</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-tech-gray text-xs sm:text-sm"
        >
          <span>role pra continuar</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-6 sm:h-8 bg-tech-gray/40"
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </div>
    </div>
  );
};

export default HeroSection;
