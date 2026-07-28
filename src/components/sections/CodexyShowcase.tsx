import { motion } from "framer-motion";
import { Check, ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/Section";

const features = [
  "Times de 6 agentes paralelos (Tech + Marketing)",
  "Streaming em tempo real via SSE",
  "Síntese executiva combinando todas respostas",
  "Contexto de repositório Git injetado nos prompts",
  "Histórico de runs + memória de projeto",
  "Autenticação cookie-based",
];

const stack = [
  { label: "Framework", value: "Next.js 13.5" },
  { label: "Linguagem", value: "TypeScript" },
  { label: "Estilo", value: "Tailwind + Radix UI" },
  { label: "Animação", value: "Framer Motion" },
  { label: "LLM", value: "Ollama (qwen2.5:7b)" },
  { label: "Streaming", value: "SSE" },
  { label: "Deploy", value: "Netlify" },
  { label: "Testes", value: "Vitest" },
];

function BrowserMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full"
    >
      <div className="absolute inset-[-30px] rounded-3xl bg-accent/10 blur-[60px]" />
      <div className="relative rounded-xl bg-[#141414] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.08)]">
        {/* browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-white/[0.05] text-[10px] font-mono text-white/30 truncate">
            codexy-agents · devroom1921
          </div>
        </div>
        {/* screen */}
        <div className="aspect-[16/9] overflow-hidden bg-[#0d0f1a]">
          <img
            src="/codexy.jpg"
            alt="Codexy Agents"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-left-top"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function CodexyShowcase() {
  return (
    <Section
      id="codexy"
      eyebrow="Agentes de IA"
      description="Um centro de operações inteligente para coordenar times de agentes, automatizar análises e acelerar decisões técnicas com contexto real do projeto."
      title={
        <>
          Codexy Agents
        </>
      }
    >
      {/* browser mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <BrowserMockup />
      </motion.div>

      {/* info grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* left: description + features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            Centro de operações de IA com times de agentes paralelos. Orquestra múltiplos agentes respondendo à mesma tarefa simultaneamente — com streaming em tempo real e síntese executiva.
          </p>

          <ul className="mt-7 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                <span className="h-5 w-5 rounded-full bg-gradient-primary grid place-items-center shrink-0 shadow-[0_0_12px_hsl(var(--accent)/0.45)]">
                  <Check size={11} className="text-white" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <a
              href="https://github.com/Lucasmagdev/devroom1921"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:bg-white/5 font-medium text-sm transition-all"
            >
              <Github size={15} /> GitHub
            </a>
          </div>
        </motion.div>

        {/* right: stack table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="px-5 py-3 border-b border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Stack técnica</span>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {stack.map((s) => (
                <div key={s.label} className="flex items-center justify-between px-5 py-3">
                  <span className="text-xs text-muted-foreground font-mono">{s.label}</span>
                  <span className="text-xs font-medium text-white/80">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
