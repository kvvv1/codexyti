import { useEffect, useRef, useState } from "react";

const steps = [
  {
    label: "01",
    eyebrow: "App Mobile · Educação",
    title: "TrilhaDev",
    desc: "Plataforma gratuita de ensino de programação, com trilha estruturada em fases para quem está iniciando na área.",
  },
  {
    label: "02",
    eyebrow: "Mobile PWA + Admin Web",
    title: "App Gontijo Fundações",
    desc: "Operação de campo e gestão administrativa conectadas em uma experiência rápida, responsiva e pronta para equipes distribuídas.",
  },
  {
    label: "03",
    eyebrow: "SaaS · IA",
    title: "DoctorChatBot",
    desc: "Atendimento médico mais ágil com agenda inteligente, automação via WhatsApp e uma jornada clara para clínicas que precisam ganhar escala.",
  },
  {
    label: "04",
    eyebrow: "E-commerce · Enterprise",
    title: "Imperial Flow Gold",
    desc: "Uma solução completa para vendas, pedidos e gestão interna, combinando experiência mobile pro cliente e painel robusto pra operação.",
  },
];

function useScrollProgress(ref: React.RefObject<HTMLDivElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const p = Math.min(Math.max(-rect.top / total, 0), 1);
      setProgress(p);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [ref]);

  return progress;
}

const HEAD_SPAN = 0.08;

function Step({ step, i, progress }: { step: (typeof steps)[number]; i: number; progress: number }) {
  const stepsSpan = 1 - HEAD_SPAN;
  const start = HEAD_SPAN + (i / steps.length) * stepsSpan;
  const end = HEAD_SPAN + ((i + 1) / steps.length) * stepsSpan;
  const margin = Math.min(0.04, (end - start) / 3);
  const fadeIn = start + margin;
  const fadeOut = end - margin;

  let opacity = 0;
  if (progress <= start || progress >= end) opacity = 0;
  else if (progress < fadeIn) opacity = (progress - start) / margin;
  else if (progress > fadeOut) opacity = (end - progress) / margin;
  else opacity = 1;

  const yStart = Math.min(Math.max((progress - start) / margin, 0), 1);
  const y = 32 * (1 - yStart);

  return (
    <div
      style={{ opacity, transform: `translateY(${y}px)` }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6"
    >
      <span className="font-mono text-sm text-accent tracking-widest mb-4">{step.label}</span>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-5">
        {step.eyebrow}
      </div>
      <h3 className="text-3xl md:text-5xl font-bold text-primary mb-4 max-w-2xl">{step.title}</h3>
      <p className="text-base md:text-lg text-muted-foreground max-w-lg">{step.desc}</p>
    </div>
  );
}

export function PortfolioIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  const headOpacity = Math.max(1 - progress / 0.05, 0);

  return (
    <div ref={containerRef} className="relative bg-background" style={{ height: "320vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div
          style={{ opacity: headOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Portfólio
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary">
            Projetos que já <span className="gradient-text">saíram do papel</span>
          </h2>
        </div>

        {steps.map((step, i) => (
          <Step key={step.label} step={step} i={i} progress={progress} />
        ))}
      </div>
    </div>
  );
}
