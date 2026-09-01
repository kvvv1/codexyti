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
      className="relative w-[220px] md:w-[236px] shrink-0"
    >
      <div className="absolute inset-[-34px] rounded-full bg-[#8be04a]/10 blur-[52px]" />
      <div className="relative rounded-[40px] bg-[#141414] p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.08)]">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-5 w-[70px] rounded-full bg-[#0a0a0a] z-10" />
        <div className="relative rounded-[30px] overflow-hidden bg-[#0b0f0c] aspect-[9/19.5] flex flex-col px-4 pt-8 pb-4">
          {/* header */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#8be04a]">
              <img src="/trilhadev-logo.png" alt="" className="h-4 w-4 rounded-full object-cover" />
              TrilhaDev
            </span>
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative bg-transparent py-4 md:py-6"
      >
        <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/trilhadev-logo.png"
                alt="Logo do TrilhaDev"
                loading="lazy"
                decoding="async"
                className="h-12 w-12 rounded-2xl border border-[#001b4d]/10 object-cover shadow-[0_8px_24px_rgba(0,27,77,0.12)]"
              />
              <div>
                <div className="font-display text-lg font-bold text-[#001b4d]">TrilhaDev</div>
                <div className="text-xs font-medium text-[#001b4d]/50">Aprendizado gamificado para devs</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-[#001b4d]/10 bg-[#001b4d]/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#001b4d]/65">
                Case Codexy
              </span>
              <span className="rounded-full border border-[#58a900]/20 bg-[#8be04a]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#397900]">
                119 lições · 12 fases · gratuito
              </span>
            </div>

            <h3 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#001b4d] md:text-5xl">
              Aprenda a programar<br />
              <span className="bg-gradient-to-r from-[#0066ff] to-[#55ad00] bg-clip-text text-transparent">
                de verdade.
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#001b4d]/60 md:text-lg">
              Uma trilha gamificada que leva quem está começando da lógica de programação aos fundamentos técnicos — com prática, progresso e ritmo próprio.
            </p>

            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-[#001b4d]/75">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-primary shadow-[0_0_12px_hsl(var(--accent)/0.45)]">
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.trilhadev.app&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Baixar o TrilhaDev no Google Play"
                className="inline-flex rounded-xl outline-none transition duration-200 hover:-translate-y-0.5 hover:drop-shadow-[0_12px_24px_rgba(0,27,77,0.16)] focus-visible:ring-2 focus-visible:ring-[#0066ff] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
              >
                <img
                  src="/google-play-badge.png"
                  alt="Disponível no Google Play"
                  loading="lazy"
                  decoding="async"
                  className="h-[58px] w-auto"
                />
              </a>
              <a
                href="https://trilhadev.app.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#001b4d]/10 bg-[#001b4d]/[0.03] px-5 text-sm font-medium text-[#001b4d] transition hover:border-[#0066ff]/30 hover:bg-[#0066ff]/[0.06]"
              >
                Acessar plataforma <ExternalLink size={14} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-[#001b4d]/[0.07] pt-6">
              {stack.map((item) => (
                <span key={item} className="rounded-lg border border-[#001b4d]/[0.08] bg-[#001b4d]/[0.025] px-3 py-1.5 font-mono text-[11px] text-[#001b4d]/50">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
