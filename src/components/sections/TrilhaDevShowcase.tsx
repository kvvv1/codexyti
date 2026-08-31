import { motion } from "framer-motion";
import { Check, ExternalLink, Lock, Play, Zap } from "lucide-react";
import { Section } from "@/components/Section";

const features = [
  "Trilha gamificada com fases e XP",
  "Lições do zero: lógica, variáveis, loops",
  "Ranking e conquistas",
  "Artigos técnicos e blog gratuitos",
  "100% gratuito, sem mensalidade",
  "App nativo Android na Play Store",
];

const stack = ["React", "Vite", "Capacitor", "Node.js", "Postgres", "Android"];

function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[200px] shrink-0"
    >
      <div className="relative rounded-[40px] bg-[#141414] p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.08)]">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-5 w-[70px] rounded-full bg-[#0a0a0a] z-10" />
        <div className="relative rounded-[30px] overflow-hidden bg-[#0b0f0c] aspect-[9/19.5] flex flex-col px-4 pt-8 pb-4">
          {/* header */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#8be04a]">TrilhaDev</span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.06] text-[9px] font-semibold text-[#8be04a]">
              <Zap size={9} className="fill-[#8be04a]" /> 480
            </span>
          </div>
          <div className="mt-3 px-2.5 py-2 rounded-lg bg-[#8be04a]/10 border border-[#8be04a]/20">
            <span className="text-[8px] font-bold uppercase tracking-wide text-[#8be04a]">Fase 1 · Lógica de programação</span>
          </div>

          {/* path */}
          <div className="flex-1 flex flex-col items-center justify-center gap-0 mt-2">
            <div className="h-7 w-7 rounded-full bg-[#8be04a] grid place-items-center shadow-[0_0_14px_rgba(139,224,74,0.6)]">
              <Check size={13} className="text-[#0b0f0c]" />
            </div>
            <div className="h-4 w-0.5 bg-[#8be04a]/40" />
            <div className="h-7 w-7 rounded-full bg-[#8be04a] grid place-items-center shadow-[0_0_14px_rgba(139,224,74,0.6)]">
              <Check size={13} className="text-[#0b0f0c]" />
            </div>
            <div className="h-4 w-0.5 bg-[#8be04a]/40" />
            <div className="h-8 w-8 rounded-full bg-[#8be04a] grid place-items-center shadow-[0_0_18px_rgba(139,224,74,0.75)]">
              <Play size={14} className="text-[#0b0f0c] fill-[#0b0f0c]" />
            </div>
            <span className="mt-1.5 text-[8px] font-semibold text-white/80">Loops (for/while)</span>
            <div className="h-4 w-0.5 border-l border-dashed border-white/15 mt-1" />
            <div className="h-7 w-7 rounded-full bg-white/[0.06] border border-white/10 grid place-items-center">
              <Lock size={11} className="text-white/25" />
            </div>
          </div>
        </div>
        <div className="absolute -right-[3px] top-20 h-8 w-1 rounded-full bg-white/10" />
        <div className="absolute -left-[3px] top-16 h-7 w-1 rounded-full bg-white/10" />
        <div className="absolute -left-[3px] top-28 h-7 w-1 rounded-full bg-white/10" />
        <div className="mt-1.5 mx-auto h-1 w-16 rounded-full bg-white/15" />
      </div>
    </motion.div>
  );
}

export function TrilhaDevShowcase() {
  return (
    <Section
      id="trilhadev"
      eyebrow="App Mobile · Educação"
      description="Plataforma gratuita de ensino de programação, com trilha estruturada em fases para quem está iniciando na área."
      title={
        <>
          TrilhaDev
        </>
      }
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* left: phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <PhoneMockup />
        </motion.div>

        {/* right: info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            Plataforma de ensino de programação com trilha de fases, lições práticas e comunidade — desenvolvida para acompanhar o aluno desde os primeiros conceitos até o primeiro projeto real.
          </p>

          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                <span className="h-5 w-5 rounded-full bg-gradient-primary grid place-items-center shrink-0 shadow-[0_0_12px_hsl(var(--accent)/0.45)]">
                  <Check size={11} className="text-white" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-lg tech-card text-xs font-mono text-muted-foreground">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.trilhadev.app"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-primary font-semibold text-white text-sm shadow-[0_0_24px_hsl(var(--accent)/0.35)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.55)] transition-all"
            >
              <ExternalLink size={14} /> Baixar na Play Store
            </a>
            <a
              href="https://trilhadev.app.br"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl tech-card hover:bg-secondary/40 font-medium text-sm text-foreground transition-all"
            >
              Acessar trilhadev.app.br
            </a>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
