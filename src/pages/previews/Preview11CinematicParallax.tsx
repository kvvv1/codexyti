import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, Quote, Code, Cpu, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import logo from "/logo.png";

const services = [
  { title: "Desenvolvimento Web", desc: "Sites institucionais, landing pages e lojas virtuais." },
  { title: "Apps Mobile", desc: "Aplicativos nativos e híbridos sob medida." },
  { title: "Automação e Chatbots", desc: "WhatsApp, Instagram, e-mail e CRM integrados." },
  { title: "Sistemas Personalizados", desc: "Agendamento, diário de obra, CRM, estoque, OS." },
];

const testimonials = [
  { name: "Cristhian Oliveira", role: "Fundador, Coruja Cortes", content: "A CODEXY transformou completamente nossa presença digital. Aumentou nossas vendas em 300%.", from: -260 },
  { name: "Gabriela Nassif", role: "Fundadora, Clínica Gabriela Nassif", content: "Profissionalismo excepcional e entrega dentro do prazo, reduzindo nossos custos.", from: 260 },
  { name: "Tiago Hauque", role: "Fundador, Seu Expresso", content: "Desde o primeiro contato, expertise técnica e compreensão do nosso negócio.", from: 0 },
];

function TestimonialCard({ t, progress }: { t: (typeof testimonials)[number]; progress: MotionValue<number> }) {
  const x = useTransform(progress, [0, 1], [t.from, 0]);
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  return (
    <motion.div style={{ x, opacity }} className="tech-card rounded-xl p-8 relative">
      <Quote className="absolute top-6 right-6 w-6 h-6 text-accent opacity-20" />
      <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
      <p className="text-tech-gray leading-relaxed mb-6">"{t.content}"</p>
      <div className="border-t border-tech-gray-light pt-4">
        <div className="font-semibold text-primary">{t.name}</div>
        <div className="text-sm text-tech-gray">{t.role}</div>
      </div>
    </motion.div>
  );
}

export default function Preview11CinematicParallax() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const midRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const fgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const fgScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const testiRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: testiProgress } = useScroll({ target: testiRef, offset: ["start end", "start 0.3"] });

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Homepage — Proposta 11 (Cinemática · Parallax em Camadas) | CODEXY"
        description="Proposta de homepage: hero com três planos de profundidade se movendo em velocidades diferentes no scroll, e depoimentos que convergem de lados opostos."
        path="/preview/cinematic-parallax"
        noIndex
      />

      <div ref={heroRef} className="relative hero-gradient overflow-hidden" style={{ height: "220vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
          </motion.div>

          <motion.div style={{ y: midY, rotate: midRotate }} className="absolute inset-0 pointer-events-none">
            {[
              { Icon: Cpu, pos: "top-[20%] left-[15%]" },
              { Icon: Zap, pos: "top-[30%] right-[18%]" },
              { Icon: Sparkles, pos: "bottom-[25%] left-[22%]" },
              { Icon: Code, pos: "bottom-[30%] right-[15%]" },
            ].map(({ Icon, pos }, i) => (
              <div key={i} className={`absolute ${pos} w-14 h-14 tech-card rounded-xl flex items-center justify-center`}>
                <Icon className="w-7 h-7 text-accent" />
              </div>
            ))}
          </motion.div>

          <motion.div style={{ y: fgY, opacity: fgOpacity, scale: fgScale }} className="relative z-10 flex flex-col items-center text-center px-6">
            <img src={logo} alt="Logo Codexy" className="h-16 md:h-24 w-auto mb-8" />
            <h1 className="text-2xl md:text-4xl font-light text-tech-gray max-w-xl">
              Transformamos ideias em <span className="text-accent font-semibold">soluções digitais</span>
            </h1>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8">
              <Button size="lg" className="group px-8 py-6 text-lg font-semibold tech-glow">
                Começar Projeto
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">
            Nossas <span className="gradient-text">Soluções</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="tech-card rounded-xl p-6 hover:tech-glow transition-shadow duration-300"
              >
                <h3 className="font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-tech-gray">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div ref={testiRef} className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-16">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} progress={testiProgress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
