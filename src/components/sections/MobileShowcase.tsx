import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/Section";

const features = [
  "Diário de obras digital",
  "Pontos e comunicados internos",
  "Registro de fatos observados",
  "Painel administrativo web",
  "Indicação de obras e oportunidades",
  "Cursos e provas integrados",
];

const stack = ["React", "PWA", "Node.js", "MySQL", "Linux", "Express"];

function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[200px] shrink-0"
    >
      <div className="relative rounded-[40px] bg-[#141414] p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.08)]">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-5 w-[70px] rounded-full bg-[#0a0a0a] z-10" />
        <div className="relative rounded-[30px] overflow-hidden bg-[#0d0d0d] aspect-[9/19.5]">
          <img src="/app-gontijo.jpg" alt="App mobile" loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
          <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </div>
        <div className="absolute -right-[3px] top-20 h-8 w-1 rounded-full bg-white/10" />
        <div className="absolute -left-[3px] top-16 h-7 w-1 rounded-full bg-white/10" />
        <div className="absolute -left-[3px] top-28 h-7 w-1 rounded-full bg-white/10" />
        <div className="mt-1.5 mx-auto h-1 w-16 rounded-full bg-white/15" />
      </div>
    </motion.div>
  );
}

function BrowserMockup() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="relative flex-1 min-w-0"
    >
      <div className="relative rounded-xl bg-[#141414] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.08)]">
        {/* browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-white/[0.05] text-[10px] font-mono text-white/30 truncate">
            app.gontijo.com.br/admin
          </div>
        </div>
        {/* screen */}
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src="/appgontijoweb.png"
            alt="Painel administrativo"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-left-top"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function MobileShowcase() {
  return (
    <Section
      id="app-gontijo"
      eyebrow="Mobile PWA + Admin Web"
      description="Operação de campo e gestão administrativa conectadas em uma experiência rápida, responsiva e pronta para a rotina de equipes distribuídas."
      title={
        <>
          App Gontijo Fundações
        </>
      }
    >
      {/* mockups row */}
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-16">
        <PhoneMockup />
        <BrowserMockup />
      </div>

      {/* info row */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-base leading-relaxed">
            Aplicativo PWA para a equipe operacional da Gontijo Fundações — substitui processos manuais por fluxos digitais acessíveis de qualquer celular, com painel administrativo web completo.
          </p>
          <ul className="mt-6 space-y-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                <span className="h-5 w-5 rounded-full bg-gradient-primary grid place-items-center shrink-0 shadow-[0_0_12px_hsl(var(--accent)/0.45)]">
                  <Check size={11} className="text-white" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <div className="tech-card rounded-2xl p-5">
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Mobile PWA</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Interface otimizada para celular. Funciona offline, instalável como app nativo. Usado diariamente pelos colaboradores em campo.
            </p>
          </div>
          <div className="tech-card rounded-2xl p-5">
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Admin Web</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Painel administrativo completo para gestores: visualização de diários, relatórios, controle de usuários e configurações do sistema.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-lg tech-card text-xs font-mono text-muted-foreground">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
