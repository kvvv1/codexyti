import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PageSeo from "@/components/PageSeo";

const HEADLINE = "Toda mensagem recebe resposta na hora";

const WIRE_ROWS = [
  { time: "09:14:02", tag: "in", text: '"Vocês fecham que horas hoje?"' },
  { time: "09:14:03", tag: "out", text: '"Hoje até 19h! Posso ajudar com mais alguma coisa?"' },
  { time: "09:16:40", tag: "in", text: '"Quero marcar horário pra sexta"' },
  { time: "09:16:41", tag: "out", text: '"Sexta às 14h ficou reservado pra você ✓"' },
  { time: "09:22:11", tag: "in", text: '"Qual o endereço de vocês?"' },
  { time: "09:22:11", tag: "out", text: '"Rua das Flores, 128 — te mando o mapa"' },
];

const wires = [
  { idx: "01", title: "Automação e chatbot", desc: "Perguntas repetidas, agendamento e pedido simples resolvidos sem intervenção manual." },
  { idx: "02", title: "Sistemas sob medida", desc: "Painel, estoque e CRM desenhados pro fluxo real da sua operação." },
  { idx: "03", title: "Presença digital", desc: "Site e app que levam o visitante direto pra conversa, sem fricção." },
];

const dispatches = [
  { src: "Coruja Cortes", who: "Cristhian Oliveira", quote: "A CODEXY transformou completamente nossa presença digital." },
  { src: "Clínica Gabriela Nassif", who: "Gabriela Nassif", quote: "Profissionalismo excepcional e entrega dentro do prazo." },
  { src: "Seu Expresso", who: "Tiago Hauque", quote: "Desde o primeiro contato, expertise técnica e clareza." },
];

function Typewriter({ text }: { text: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= text.length) return;
    const id = setTimeout(() => setN((v) => v + 1), 28);
    return () => clearTimeout(id);
  }, [n, text]);
  return <>{text.slice(0, n)}<motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ opacity: n < text.length ? 1 : 0 }}>|</motion.span></>;
}

export default function Preview4Despacho() {
  const [visibleRows, setVisibleRows] = useState(2);
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef });

  useEffect(() => {
    const id = setInterval(() => setVisibleRows((v) => (v < WIRE_ROWS.length ? v + 1 : 2)), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen" style={{ background: "#f5f4f1", color: "#12151c", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
      <PageSeo title="Homepage — Proposta 4 (Despacho)" description="Proposta de homepage" noIndex />
      <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,600;1,400;1,500&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <motion.div style={{ scaleX: scrollYProgress, transformOrigin: "0%", background: "#d94f31" }} className="fixed top-0 left-0 right-0 h-[3px] z-50" />

      <div className="max-w-6xl mx-auto px-7">
        <nav className="flex items-center justify-between py-6 border-b" style={{ borderColor: "#dedbd3" }}>
          <div style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 600, fontSize: "1.3rem" }}>Codexy</div>
          <a href="#" className="font-semibold text-sm px-4.5 py-2.5 rounded" style={{ background: "#12151c", color: "#f5f4f1" }}>Falar no WhatsApp</a>
        </nav>

        <div className="grid md:grid-cols-[130px_1fr] gap-10 py-14 md:py-16">
          <div className="flex md:flex-col gap-5 md:gap-6 flex-wrap border-b md:border-b-0 md:border-r pb-6 md:pb-0 md:pr-10" style={{ borderColor: "#dedbd3" }}>
            {[["Canal", "WhatsApp"], ["Tempo de resposta", "segundos"], ["Cobertura", "24 horas"]].map(([label, val]) => (
              <div key={label} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#5a5f6b" }}>
                {label}<b style={{ display: "block", color: "#12151c", fontSize: "0.85rem", marginTop: 3, fontFamily: "'IBM Plex Sans', sans-serif" }}>{val}</b>
              </div>
            ))}
          </div>

          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#d94f31", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
              despacho automático · sempre ativo
            </motion.div>
            <h1 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, fontSize: "clamp(2.1rem,4.4vw,3.6rem)", lineHeight: 1.1, marginBottom: 22, minHeight: "3.4em" }}>
              <Typewriter text={HEADLINE} /><br />
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} style={{ fontStyle: "italic", color: "#d94f31" }}>na hora</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}> — mesmo quando você não está.</motion.span>
            </h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} className="max-w-md mb-8" style={{ color: "#5a5f6b", fontSize: "1.05rem", lineHeight: 1.6 }}>
              A CODEXY conecta um sistema de resposta automática direto no seu WhatsApp comercial. Cada pergunta chega, é entendida e respondida — sem fila, sem demora.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1 }} className="flex gap-3.5 flex-wrap mb-11">
              <motion.a whileHover={{ scale: 1.03 }} href="#" className="font-semibold px-6 py-3.5 rounded" style={{ background: "#d94f31", color: "#fff5f2" }}>Solicitar demonstração</motion.a>
              <a href="#" className="font-semibold px-6 py-3.5 rounded border" style={{ borderColor: "#dedbd3" }}>Ver funcionamento</a>
            </motion.div>

            <div className="border-t pt-5" style={{ borderColor: "#dedbd3" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#5a5f6b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>
                Registro de despacho — ao vivo
              </div>
              <AnimatePresence mode="popLayout">
                {WIRE_ROWS.slice(0, visibleRows).map((r) => (
                  <motion.div
                    key={r.time}
                    layout
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="grid gap-3.5 py-2.5 items-center border-b border-dashed"
                    style={{ gridTemplateColumns: "90px auto 1fr", borderColor: "#dedbd3", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem" }}
                  >
                    <span style={{ color: "#5a5f6b" }}>{r.time}</span>
                    <span
                      className="text-[0.65rem] px-2 py-0.5 rounded font-semibold uppercase tracking-wide whitespace-nowrap"
                      style={r.tag === "out" ? { background: "#d94f31", color: "#fff5f2" } : { background: "#fff", border: "1px solid #dedbd3", color: "#5a5f6b" }}
                    >
                      {r.tag === "out" ? "respondido" : "recebido"}
                    </span>
                    <span>{r.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <section className="py-16 border-t" style={{ borderColor: "#dedbd3" }}>
          <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-11">
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#d94f31", textTransform: "uppercase", letterSpacing: "0.08em" }}>a operação</div>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, fontSize: "2rem" }}>Três frentes, um número só</h2>
          </div>
          <div className="grid md:grid-cols-3 border rounded-md overflow-hidden" style={{ borderColor: "#dedbd3" }}>
            {wires.map((w, i) => (
              <motion.div key={w.idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-7 border-r last:border-r-0" style={{ borderColor: "#dedbd3" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.76rem", color: "#d94f31", marginBottom: 16 }}>{w.idx}</div>
                <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: "1.22rem", fontWeight: 500, marginBottom: 10 }}>{w.title}</h3>
                <p style={{ color: "#5a5f6b", fontSize: "0.9rem", lineHeight: 1.6 }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t" style={{ borderColor: "#dedbd3" }}>
          <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-8">
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#d94f31", textTransform: "uppercase", letterSpacing: "0.08em" }}>correspondência recebida</div>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, fontSize: "2rem" }}>O que voltou depois da entrega</h2>
          </div>
          <div className="border-t" style={{ borderColor: "#dedbd3" }}>
            {dispatches.map((d, i) => (
              <motion.div key={d.who} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="grid md:grid-cols-[200px_1fr] gap-8 py-6 border-b" style={{ borderColor: "#dedbd3" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#5a5f6b" }}>
                  {d.src}<b style={{ display: "block", color: "#12151c", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "0.95rem", fontWeight: 600, marginTop: 3 }}>{d.who}</b>
                </div>
                <blockquote className="m-0" style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.55 }}>"{d.quote}"</blockquote>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="py-8 border-t flex justify-between" style={{ borderColor: "#dedbd3", color: "#5a5f6b", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>
          <span>© 2026 CODEXY</span>
          <span>(31) 99166-6106</span>
        </footer>
      </div>
    </div>
  );
}
