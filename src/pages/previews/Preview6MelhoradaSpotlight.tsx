import { motion, useMotionValue, useMotionTemplate, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Play, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "/logo.png";

const services = [
  { title: "Desenvolvimento Web", desc: "Sites institucionais, landing pages e lojas virtuais." },
  { title: "Apps Mobile", desc: "Aplicativos nativos e híbridos sob medida." },
  { title: "Automação e Chatbots", desc: "WhatsApp, Instagram, e-mail e CRM integrados." },
  { title: "Sistemas Personalizados", desc: "Agendamento, diário de obra, CRM, estoque, OS." },
];

const testimonials = [
  { name: "Cristhian Oliveira", role: "Fundador, Coruja Cortes", content: "A CODEXY transformou completamente nossa presença digital. O aplicativo que desenvolveram aumentou nossas vendas em 300% no primeiro trimestre." },
  { name: "Gabriela Nassif", role: "Fundadora, Clínica Gabriela Nassif", content: "Profissionalismo excepcional e entrega dentro do prazo. A solução de automação implementada reduziu nossos custos operacionais significativamente." },
  { name: "Tiago Hauque", role: "Fundador, Seu Expresso", content: "Desde o primeiro contato até a entrega final, a CODEXY demonstrou expertise técnica e compreensão do nosso negócio." },
];

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 14 });
  const y = useSpring(0, { stiffness: 200, damping: 14 });
  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Preview6MelhoradaSpotlight() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, hsl(var(--accent) / 0.18), transparent 75%)`;

  const [activeService, setActiveService] = useState(0);
  const [testiIndex, setTestiIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTesti = (i: number) => {
    setDirection(i > testiIndex ? 1 : -1);
    setTestiIndex((i + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Homepage — Proposta 6 (Melhorada · Spotlight) | CODEXY"
        description="Proposta de homepage: variante da homepage atual com spotlight que segue o cursor e botões magnéticos."
        path="/preview/melhorada-spotlight"
        noIndex
      />

      <section
        ref={heroRef}
        onMouseMove={(e) => {
          const rect = heroRef.current!.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }}
        className="relative min-h-screen hero-gradient overflow-hidden flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/10" />
        </div>
        <motion.div style={{ background: spotlight }} className="absolute inset-0 z-[1] pointer-events-none" />

        <div className="relative z-20 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <img src={logo} alt="Logo Codexy" className="h-16 md:h-20 w-auto mx-auto" />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xl lg:text-2xl text-tech-gray font-light">
              Transformamos ideias em <span className="text-accent font-semibold">soluções digitais</span> que impulsionam o futuro da sua empresa.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button size="lg" className="group px-8 py-6 text-lg font-semibold tech-glow">
                  Começar Projeto
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold tech-card border-primary/20 hover:border-accent">
                  <Play className="mr-2 h-5 w-5" /> Ver Portfólio
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">
            Nossas <span className="gradient-text">Soluções</span>
          </motion.h2>
          <div className="grid md:grid-cols-[auto_1fr] gap-10 max-w-4xl mx-auto items-start">
            <div className="hidden md:flex flex-col gap-6 pt-2">
              {services.map((_, i) => (
                <button key={i} onClick={() => setActiveService(i)} className="relative w-3 h-3">
                  {activeService === i && (
                    <motion.span layoutId="activeDot" className="absolute inset-0 rounded-full bg-accent" transition={{ type: "spring", stiffness: 300, damping: 25 }} />
                  )}
                  {activeService !== i && <span className="absolute inset-0 rounded-full bg-tech-gray/30" />}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  onMouseEnter={() => setActiveService(i)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  animate={{ scale: activeService === i ? 1.02 : 1 }}
                  className={`tech-card rounded-xl p-6 cursor-pointer transition-shadow ${activeService === i ? "tech-glow" : ""}`}
                >
                  <h3 className="font-semibold text-primary mb-1">{s.title}</h3>
                  <p className="text-sm text-tech-gray">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </motion.h2>
          <div className="max-w-xl mx-auto relative">
            <div
              className="overflow-hidden"
              onPanEnd={(_, info) => {
                if (info.offset.x < -60) goTesti(testiIndex + 1);
                else if (info.offset.x > 60) goTesti(testiIndex - 1);
              }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={testiIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 60 }}
                  transition={{ duration: 0.35 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  className="tech-card rounded-xl p-8 relative cursor-grab active:cursor-grabbing"
                >
                  <Quote className="absolute top-6 right-6 w-6 h-6 text-accent opacity-20" />
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
                  <p className="text-tech-gray leading-relaxed mb-6">"{testimonials[testiIndex].content}"</p>
                  <div className="border-t border-tech-gray-light pt-4">
                    <div className="font-semibold text-primary">{testimonials[testiIndex].name}</div>
                    <div className="text-sm text-tech-gray">{testimonials[testiIndex].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={() => goTesti(testiIndex - 1)} className="w-9 h-9 rounded-full tech-card flex items-center justify-center"><ChevronLeft className="w-4 h-4" /></button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTesti(i)} className="relative w-2.5 h-2.5">
                  {testiIndex === i && <motion.span layoutId="testiDot" className="absolute inset-0 rounded-full bg-accent" />}
                  {testiIndex !== i && <span className="absolute inset-0 rounded-full bg-tech-gray/30" />}
                </button>
              ))}
              <button onClick={() => goTesti(testiIndex + 1)} className="w-9 h-9 rounded-full tech-card flex items-center justify-center"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
