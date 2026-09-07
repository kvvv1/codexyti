import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import logo from "/logo.png";

const beats = [
  { label: "01", title: "Sites e Apps", desc: "Uma presença digital que leva o visitante direto pra conversa." },
  { label: "02", title: "Automação e Chatbots", desc: "WhatsApp, Instagram e e-mail respondendo sozinhos, 24 horas." },
  { label: "03", title: "Sistemas Personalizados", desc: "Agendamento, estoque, CRM e OS desenhados pro seu fluxo real." },
];

const testimonials = [
  { name: "Cristhian Oliveira", role: "Coruja Cortes", content: "A CODEXY transformou completamente nossa presença digital. O aplicativo que desenvolveram aumentou nossas vendas em 300% no primeiro trimestre." },
  { name: "Gabriela Nassif", role: "Clínica Gabriela Nassif", content: "Profissionalismo excepcional e entrega dentro do prazo. A solução de automação implementada reduziu nossos custos operacionais significativamente." },
  { name: "Tiago Hauque", role: "Seu Expresso", content: "Desde o primeiro contato até a entrega final, a CODEXY demonstrou expertise técnica e compreensão do nosso negócio." },
];

function Beat({ beat, i, progress }: { beat: typeof beats[0]; i: number; progress: any }) {
  const start = i / beats.length;
  const mid = (i + 0.5) / beats.length;
  const end = (i + 1) / beats.length;
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, mid], [40, 0]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <span className="text-accent font-mono text-sm mb-4 tracking-widest">{beat.label}</span>
      <h3 className="text-3xl md:text-5xl font-bold text-primary mb-4 max-w-2xl">{beat.title}</h3>
      <p className="text-lg text-tech-gray max-w-md">{beat.desc}</p>
    </motion.div>
  );
}

export default function Preview5Cinematic() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end end"] });

  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -60]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 2.6]);

  return (
    <div className="min-h-screen bg-background">
      <PageSeo title="Homepage — Proposta 5 (Cinemática)" description="Proposta de homepage" noIndex />

      <div ref={scrollRef} className="relative" style={{ height: "420vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden hero-gradient flex items-center justify-center">
          <motion.div style={{ scale: glowScale }} className="absolute w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl" />

          <motion.div style={{ scale: heroScale, opacity: heroOpacity, y: heroY }} className="relative z-10 flex flex-col items-center text-center px-6">
            <img src={logo} alt="Logo Codexy" className="h-16 md:h-24 w-auto mb-8" />
            <h1 className="text-2xl md:text-4xl font-light text-tech-gray max-w-xl">
              Transformamos ideias em <span className="text-accent font-semibold">soluções digitais</span>
            </h1>
          </motion.div>

          {beats.map((b, i) => (
            <Beat key={b.label} beat={b} i={i} progress={scrollYProgress} />
          ))}

          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [1, 0, 0, 1]) }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-tech-gray text-sm"
          >
            <span>role pra continuar</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="w-px h-8 bg-tech-gray/40" />
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">
            Pronto pra ver isso <span className="gradient-text">no seu negócio?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-tech-gray text-lg mb-10">
            30+ projetos entregues, satisfação de 99%, suporte 24/7.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" className="group px-8 py-6 text-lg font-semibold tech-glow">
                Começar Projeto
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
    </div>
  );
}
