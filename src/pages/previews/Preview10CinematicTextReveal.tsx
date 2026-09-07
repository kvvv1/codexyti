import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";

const HEADLINE = "Transformamos ideias em soluções digitais que impulsionam o futuro da sua empresa".split(" ");

const stats = [
  { to: 30, suffix: "+", label: "Projetos" },
  { to: 99, suffix: "%", label: "Satisfação" },
  { to: 24, suffix: "/7", label: "Suporte" },
];

const testimonials = [
  { name: "Cristhian Oliveira", role: "Fundador, Coruja Cortes", content: "A CODEXY transformou completamente nossa presença digital. O aplicativo que desenvolveram aumentou nossas vendas em 300% no primeiro trimestre." },
  { name: "Gabriela Nassif", role: "Fundadora, Clínica Gabriela Nassif", content: "Profissionalismo excepcional e entrega dentro do prazo. A solução de automação implementada reduziu nossos custos operacionais significativamente." },
  { name: "Tiago Hauque", role: "Fundador, Seu Expresso", content: "Desde o primeiro contato até a entrega final, a CODEXY demonstrou expertise técnica e compreensão do nosso negócio." },
];

function Word({ word, i, total, progress }: { word: string; i: number; total: number; progress: MotionValue<number> }) {
  const start = i / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const blur = useTransform(progress, [start, end], [6, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  return (
    <motion.span style={{ opacity, filter }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

function StatNumber({ to, suffix, progress, range }: { to: number; suffix: string; progress: MotionValue<number>; range: [number, number] }) {
  const raw = useTransform(progress, range, [0, to]);
  const rounded = useTransform(raw, (v) => Math.round(v).toString());
  return (
    <span className="text-4xl font-bold text-primary">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function Preview10CinematicTextReveal() {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: textProgress } = useScroll({ target: textRef, offset: ["start start", "end end"] });

  const statsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: statsProgress } = useScroll({ target: statsRef, offset: ["start end", "end end"] });

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Homepage — Proposta 10 (Cinemática · Revelação de Texto) | CODEXY"
        description="Proposta de homepage: headline revelada palavra por palavra e estatísticas contadas conforme o scroll, com foco pin-and-scrub."
        path="/preview/cinematic-textreveal"
        noIndex
      />

      <div ref={textRef} className="relative hero-gradient" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center px-6">
          <p className="max-w-3xl text-3xl md:text-5xl font-bold leading-tight text-center text-tech-gray/40">
            {HEADLINE.map((w, i) => (
              <Word key={i} word={w} i={i} total={HEADLINE.length} progress={textProgress} />
            ))}
          </p>
        </div>
      </div>

      <div ref={statsRef} className="relative py-32 bg-secondary/50">
        <div className="container mx-auto px-6 grid grid-cols-3 gap-8 max-w-2xl">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <StatNumber to={s.to} suffix={s.suffix} progress={statsProgress} range={[i * 0.25, i * 0.25 + 0.4]} />
              <div className="text-sm text-tech-gray mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="tech-card rounded-xl p-8 relative">
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
          <div className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button size="lg" className="group px-8 py-6 text-lg font-semibold tech-glow">
                Começar Projeto
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
