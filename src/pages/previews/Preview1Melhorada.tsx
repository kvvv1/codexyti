import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Code, Cpu, Zap, Sparkles, Play, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageSeo from "@/components/PageSeo";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "/logo.png";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  useMotionValueEvent(spring, "change", (v) => setValue(Math.round(v)));
  return (
    <span
      ref={ref}
      onViewportEnter={() => spring.set(to)}
      style={{ display: "inline-block" }}
    >
      {value}{suffix}
    </span>
  );
}

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

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

export default function Preview1Melhorada() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <PageSeo title="Homepage — Proposta 1 (Melhorada)" description="Proposta de homepage" noIndex />

      <section ref={heroRef} className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/10" />
        </div>

        <motion.div style={{ y: orbY1 }} className="absolute top-24 left-10 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
        <motion.div style={{ y: orbY2 }} className="absolute top-40 right-24 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
        <motion.div style={{ y: orbY1 }} className="absolute bottom-32 left-1/4 w-14 h-14 bg-accent/25 rounded-full blur-lg" />

        <motion.div style={{ opacity: heroFade }} className="relative z-20 container mx-auto px-6">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-card text-sm font-medium">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-tech-gray">Inovação em Tecnologia</span>
              </motion.div>

              <motion.div variants={item}>
                <img src={logo} alt="Logo Codexy" className="h-16 md:h-20 w-auto" />
              </motion.div>

              <motion.p variants={item} className="text-xl lg:text-2xl text-tech-gray font-light max-w-lg">
                Transformamos ideias em <span className="text-accent font-semibold">soluções digitais</span> que impulsionam o futuro da sua empresa.
              </motion.p>

              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="group px-8 py-6 text-lg font-semibold tech-glow w-full sm:w-auto">
                    Começar Projeto
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold tech-card border-primary/20 hover:border-accent w-full sm:w-auto">
                    <Play className="mr-2 h-5 w-5" /> Ver Portfólio
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div variants={item} className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary"><Counter to={30} suffix="+" /></div>
                  <div className="text-sm text-tech-gray">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent"><Counter to={99} suffix="%" /></div>
                  <div className="text-sm text-tech-gray">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-tech-gray">Suporte</div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={item} className="relative hidden lg:block">
              <div className="relative w-80 h-80 mx-auto">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-xl"
                />
                <div className="relative w-full h-full rounded-full tech-card flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center tech-glow">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-accent/30"
                />
                {[
                  { Icon: Cpu, pos: "-top-8 -left-8", delay: 0 },
                  { Icon: Zap, pos: "-top-4 -right-12", delay: 0.4 },
                  { Icon: Sparkles, pos: "-bottom-8 -left-4", delay: 0.8 },
                ].map(({ Icon, pos, delay }, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${pos} w-16 h-16 tech-card rounded-xl flex items-center justify-center`}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
                  >
                    <Icon className="w-8 h-8 text-accent" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl font-bold text-center mb-14"
          >
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
              >
                <Card className="tech-card border-0 h-full hover:tech-glow transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">{s.title}</h3>
                    <p className="text-sm text-tech-gray">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-14"
          >
            O que nossos <span className="gradient-text">clientes</span> dizem
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="tech-card border-0 relative h-full">
                  <CardContent className="p-8">
                    <Quote className="absolute top-6 right-6 w-6 h-6 text-accent opacity-20" />
                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
                    <p className="text-tech-gray leading-relaxed mb-6">"{t.content}"</p>
                    <div className="border-t border-tech-gray-light pt-4">
                      <div className="font-semibold text-primary">{t.name}</div>
                      <div className="text-sm text-tech-gray">{t.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
