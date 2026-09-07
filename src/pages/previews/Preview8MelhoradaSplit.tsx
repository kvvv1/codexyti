import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Play, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "/logo.png";

const HEADLINE_LINES = ["Transformamos ideias", "em soluções digitais", "que impulsionam seu futuro."];

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

function TestimonialStack() {
  const [stack, setStack] = useState([0, 1, 2]);
  const dismiss = () => setStack((s) => [...s.slice(1), s[0]]);

  return (
    <div className="relative w-full max-w-md mx-auto" style={{ height: 320 }}>
      <AnimatePresence>
        {stack.map((tIdx, pos) => {
          const t = testimonials[tIdx];
          const isTop = pos === 0;
          return (
            <motion.div
              key={tIdx}
              className="absolute inset-0 tech-card rounded-2xl p-7"
              style={{ zIndex: stack.length - pos }}
              initial={false}
              animate={{ scale: 1 - pos * 0.05, y: pos * 14, opacity: pos > 2 ? 0 : 1 }}
              exit={{ x: 300, opacity: 0, rotate: 15, transition: { duration: 0.3 } }}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 100) dismiss();
              }}
              whileTap={isTop ? { cursor: "grabbing" } : undefined}
            >
              <Quote className="w-6 h-6 text-accent opacity-20 mb-2" />
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
              <p className="text-tech-gray leading-relaxed mb-6 text-sm">"{t.content}"</p>
              <div className="border-t border-tech-gray-light pt-4">
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-sm text-tech-gray">{t.role}</div>
              </div>
              {isTop && <div className="absolute bottom-3 left-0 right-0 text-center text-xs text-tech-gray">arraste pra ver o próximo →</div>}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default function Preview8MelhoradaSplit() {
  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Homepage — Proposta 8 (Melhorada · Split) | CODEXY"
        description="Proposta de homepage: variante da homepage atual com hero dividido em diagonal, headline revelada linha a linha e depoimentos em pilha arrastável."
        path="/preview/melhorada-split"
        noIndex
      />

      <section className="relative min-h-screen bg-background overflow-hidden grid lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 md:px-16 py-24 relative z-10">
          <motion.img initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} src={logo} alt="Logo Codexy" className="h-14 w-auto mb-8" />
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {HEADLINE_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === 1 ? (
                    <>
                      em <span className="gradient-text">soluções digitais</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.7 }} className="h-1 w-24 bg-accent rounded-full mb-8 origin-left" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-lg text-tech-gray max-w-md mb-10">
            A CODEXY entrega tecnologia sob medida — do site à automação — pra pequenos e médios negócios que querem crescer sem complicar a rotina.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }} className="flex gap-4 flex-wrap">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="group px-8 py-6 text-lg font-semibold tech-glow">
                Começar Projeto
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-primary/20 hover:border-accent">
                <Play className="mr-2 h-5 w-5" /> Ver Portfólio
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative hidden lg:block overflow-hidden">
          <motion.div
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img src={heroImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">
            Nossas <span className="gradient-text">Soluções</span>
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`tech-card rounded-xl p-6 flex items-center gap-6 ${i % 2 === 1 ? "flex-row-reverse text-right" : ""}`}
              >
                <span className="text-3xl font-bold text-accent/30 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{s.title}</h3>
                  <p className="text-sm text-tech-gray">{s.desc}</p>
                </div>
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
          <TestimonialStack />
        </div>
      </section>
    </div>
  );
}
