import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, Quote, Globe, Smartphone, MessageSquare, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import logo from "/logo.png";

const services = [
  { title: "Desenvolvimento Web", desc: "Sites institucionais, landing pages e lojas virtuais que convertem visitante em cliente.", Icon: Globe },
  { title: "Apps Mobile", desc: "Aplicativos nativos e híbridos sob medida pro seu negócio e pro seu cliente.", Icon: Smartphone },
  { title: "Automação e Chatbots", desc: "WhatsApp, Instagram, e-mail e CRM conversando entre si, sem esforço manual.", Icon: MessageSquare },
  { title: "Sistemas Personalizados", desc: "Agendamento, diário de obra, CRM, estoque e OS — feito do seu jeito.", Icon: Settings2 },
];

const testimonials = [
  { name: "Cristhian Oliveira", role: "Fundador, Coruja Cortes", content: "A CODEXY transformou completamente nossa presença digital. O aplicativo que desenvolveram aumentou nossas vendas em 300% no primeiro trimestre." },
  { name: "Gabriela Nassif", role: "Fundadora, Clínica Gabriela Nassif", content: "Profissionalismo excepcional e entrega dentro do prazo. A solução de automação implementada reduziu nossos custos operacionais significativamente." },
  { name: "Tiago Hauque", role: "Fundador, Seu Expresso", content: "Desde o primeiro contato até a entrega final, a CODEXY demonstrou expertise técnica e compreensão do nosso negócio." },
];

export default function Preview9CinematicHorizontal() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.9]);

  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: trackProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const x = useTransform(trackProgress, [0, 1], ["2%", `-${services.length * 25 - 25}%`]);

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Homepage — Proposta 9 (Cinemática · Horizontal) | CODEXY"
        description="Proposta de homepage: hero cinemático seguido de galeria de serviços que desliza na horizontal conforme o scroll vertical."
        path="/preview/cinematic-horizontal"
        noIndex
      />

      <div ref={heroRef} className="relative h-screen hero-gradient flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="flex flex-col items-center text-center px-6">
          <img src={logo} alt="Logo Codexy" className="h-16 md:h-24 w-auto mb-8" />
          <h1 className="text-2xl md:text-4xl font-light text-tech-gray max-w-xl">
            Transformamos ideias em <span className="text-accent font-semibold">soluções digitais</span>
          </h1>
        </motion.div>
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-tech-gray text-sm"
        >
          <span>role pra explorar</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="w-px h-8 bg-tech-gray/40" />
        </motion.div>
      </div>

      <div ref={trackRef} style={{ height: `${services.length * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-secondary/50">
          <div className="absolute top-14 left-0 right-0 text-center z-10">
            <h2 className="text-3xl font-bold">Nossas <span className="gradient-text">Soluções</span></h2>
          </div>
          <motion.div style={{ x }} className="flex gap-8 px-[12vw]">
            {services.map((s) => (
              <div key={s.title} className="tech-card rounded-3xl p-10 flex-shrink-0" style={{ width: "70vw", maxWidth: 520 }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-8 tech-glow">
                  <s.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{s.title}</h3>
                <p className="text-tech-gray text-lg leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="tech-card rounded-xl p-8 relative">
                <Quote className="absolute top-6 right-6 w-6 h-6 text-accent opacity-20" />
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <p className="text-tech-gray leading-relaxed mb-6">"{t.content}"</p>
                <div className="border-t border-tech-gray-light pt-4">
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-sm text-tech-gray">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50 text-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
          <Button size="lg" className="group px-8 py-6 text-lg font-semibold tech-glow">
            Começar Projeto
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
