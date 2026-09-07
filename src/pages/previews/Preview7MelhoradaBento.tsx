import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Globe, Smartphone, MessageSquare, Settings2, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "/logo.png";

const services = [
  { title: "Desenvolvimento Web", desc: "Sites institucionais, landing pages e lojas virtuais.", Icon: Globe, big: true },
  { title: "Apps Mobile", desc: "Aplicativos nativos e híbridos sob medida.", Icon: Smartphone, big: false },
  { title: "Automação e Chatbots", desc: "WhatsApp, Instagram, e-mail e CRM integrados.", Icon: MessageSquare, big: false },
  { title: "Sistemas Personalizados", desc: "Agendamento, diário de obra, CRM, estoque, OS.", Icon: Settings2, big: false },
];

const testimonials = [
  { name: "Cristhian Oliveira", role: "Fundador, Coruja Cortes", content: "A CODEXY transformou completamente nossa presença digital. O aplicativo que desenvolveram aumentou nossas vendas em 300% no primeiro trimestre." },
  { name: "Gabriela Nassif", role: "Fundadora, Clínica Gabriela Nassif", content: "Profissionalismo excepcional e entrega dentro do prazo. A solução de automação implementada reduziu nossos custos operacionais significativamente." },
  { name: "Tiago Hauque", role: "Fundador, Seu Expresso", content: "Desde o primeiro contato até a entrega final, a CODEXY demonstrou expertise técnica e compreensão do nosso negócio." },
];

const DURATION = 5000;

export default function Preview7MelhoradaBento() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
      setTick((t) => t + 1);
    }, DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Homepage — Proposta 7 (Melhorada · Bento) | CODEXY"
        description="Proposta de homepage: variante da homepage atual com grid bento animado e depoimentos em carrossel automático estilo stories."
        path="/preview/melhorada-bento"
        noIndex
      />

      <section className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/10" />
        </div>
        <div className="relative z-20 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <img src={logo} alt="Logo Codexy" className="h-16 md:h-20 w-auto mx-auto" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-2xl lg:text-3xl font-light text-tech-gray"
              style={{ backgroundSize: "200% auto" }}
            >
              Transformamos ideias em{" "}
              <motion.span
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent"
                style={{ backgroundSize: "200% auto" }}
                animate={{ backgroundPositionX: ["0%", "200%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                soluções digitais
              </motion.span>{" "}
              que impulsionam o futuro da sua empresa.
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="group px-8 py-6 text-lg font-semibold tech-glow">
                  Começar Projeto
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold tech-card border-primary/20 hover:border-accent">
                  <Play className="mr-2 h-5 w-5" /> Ver Portfólio
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">
            Nossas <span className="gradient-text">Soluções</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`tech-card rounded-2xl p-7 hover:tech-glow transition-shadow duration-300 ${s.big ? "sm:col-span-2 lg:row-span-2 lg:col-span-1" : ""}`}
              >
                <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-5">
                  <s.Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-tech-gray">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </motion.h2>
          <div className="max-w-xl mx-auto">
            <div className="flex gap-1.5 mb-6">
              {testimonials.map((_, i) => (
                <div key={i} className="flex-1 h-1 rounded-full bg-tech-gray-light overflow-hidden">
                  {i === active && <motion.div key={tick} className="h-full bg-accent" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: DURATION / 1000, ease: "linear" }} />}
                  {i < active && <div className="h-full bg-accent w-full" />}
                </div>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className="tech-card rounded-2xl p-8 relative"
              >
                <Quote className="absolute top-6 right-6 w-6 h-6 text-accent opacity-20" />
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <p className="text-tech-gray leading-relaxed mb-6">"{testimonials[active].content}"</p>
                <div className="border-t border-tech-gray-light pt-4">
                  <div className="font-semibold text-primary">{testimonials[active].name}</div>
                  <div className="text-sm text-tech-gray">{testimonials[active].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
