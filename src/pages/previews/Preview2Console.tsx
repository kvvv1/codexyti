import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Star, Quote } from "lucide-react";
import PageSeo from "@/components/PageSeo";

const CONVERSATION = [
  { who: "Cliente", text: "Oi, vocês têm horário pra amanhã de manhã?" },
  { who: "Assistente CODEXY", bot: true, text: "Temos sim! Tenho 9h ou 10h30 livres. Qual prefere?" },
  { who: "Cliente", text: "10h30 pra mim" },
  { who: "Assistente CODEXY", bot: true, text: "Agendado ✓ Te mando lembrete 1h antes." },
];

const services = [
  { icon: "💬", label: "Automação e Chatbot", status: "ativo", desc: "Agendamento e dúvida frequente sem espera." },
  { icon: "🧩", label: "Sistemas Internos", status: "sob medida", desc: "Painel, estoque ou CRM feito pro seu fluxo." },
  { icon: "📱", label: "Sites e Apps", status: "multiplataforma", desc: "Conectado no mesmo número, mesmo painel." },
];

const testimonials = [
  { who: "Cristhian Oliveira", co: "Coruja Cortes", text: "O aplicativo que a CODEXY fez mudou como a gente vende." },
  { who: "Gabriela Nassif", co: "Clínica Gabriela Nassif", text: "Entregaram no prazo e entenderam o que a clínica precisava." },
  { who: "Tiago Hauque", co: "Seu Expresso", text: "Da primeira conversa até a entrega, muita clareza técnica." },
];

export default function Preview2Console() {
  const [visible, setVisible] = useState(1);
  useEffect(() => {
    const id = setInterval(() => setVisible((v) => (v < CONVERSATION.length ? v + 1 : 1)), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#0d1316", color: "#e9eef0", fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}>
      <PageSeo title="Homepage — Proposta 2 (Console)" description="Proposta de homepage" noIndex />
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Hanken+Grotesk:wght@500;700;800&display=swap" rel="stylesheet" />

      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between py-6 border-b" style={{ borderColor: "#243035" }}>
          <div className="flex items-center gap-2 font-extrabold">
            <span className="w-2 h-2 rounded-full" style={{ background: "#3ddc8a", boxShadow: "0 0 10px #3ddc8a" }} />
            CODEXY
          </div>
          <a href="#" className="text-xs font-mono font-semibold px-4 py-2 rounded-md" style={{ background: "#3ddc8a", color: "#08150f" }}>
            Falar no WhatsApp
          </a>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl overflow-hidden border"
          style={{ borderColor: "#243035", background: "#141d21" }}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "#243035", background: "#1a2429" }}>
            {["#e07a5f", "#e0a83d", "#3ddc8a"].map((c) => <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
            <span className="ml-2 text-xs font-mono" style={{ color: "#8fa0a7" }}>atendimento@sua-empresa · online</span>
          </div>
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="p-10 md:p-14">
              <div className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "#3ddc8a" }}>$ status: atendendo 24 horas</div>
              <h1 className="font-extrabold leading-[1.05] mb-5" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
                Seu WhatsApp<br /><span style={{ color: "#8fa0a7" }}>respondendo sozinho,</span><br />enquanto você trabalha.
              </h1>
              <p className="max-w-md mb-8" style={{ color: "#8fa0a7", fontSize: "1.05rem", lineHeight: 1.6 }}>
                A CODEXY monta o chatbot, conecta no número que você já usa e cuida da manutenção.
              </p>
              <div className="flex gap-3 flex-wrap">
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#" className="font-bold px-6 py-3 rounded-lg inline-flex items-center gap-2" style={{ background: "#3ddc8a", color: "#08150f" }}>
                  Agendar uma conversa <ArrowRight className="w-4 h-4" />
                </motion.a>
                <a href="#" className="font-mono text-sm px-6 py-3 rounded-lg border" style={{ borderColor: "#243035" }}>→ ver como funciona</a>
              </div>
            </div>
            <div className="p-7 flex flex-col gap-3 font-mono text-sm border-t md:border-t-0 md:border-l" style={{ borderColor: "#243035", background: "#1a2429" }}>
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "#8fa0a7" }}>Conversa em andamento</div>
              <AnimatePresence>
                {CONVERSATION.slice(0, visible).map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-lg p-3 border"
                    style={m.bot ? { borderColor: "rgba(61,220,138,0.35)", background: "rgba(61,220,138,0.06)" } : { borderColor: "#243035", background: "#141d21" }}
                  >
                    <div className="text-xs mb-1" style={{ color: m.bot ? "#3ddc8a" : "#8fa0a7" }}>{m.who}</div>
                    {m.text}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="flex items-center gap-2 text-xs mt-1" style={{ color: "#8fa0a7" }}>
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full" style={{ background: "#3ddc8a" }} />
                Resposta média: poucos segundos
              </div>
            </div>
          </div>
        </motion.div>

        <section className="py-20">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold mb-10">
            Um sistema por trás do número que você já usa
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-px rounded-2xl overflow-hidden border" style={{ borderColor: "#243035", background: "#243035" }}>
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7"
                style={{ background: "#141d21" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#1a2429" }}>{s.icon}</div>
                  <span className="text-[0.65rem] font-mono uppercase px-2 py-1 rounded-full border" style={{ color: "#3ddc8a", borderColor: "rgba(61,220,138,0.3)", background: "rgba(61,220,138,0.08)" }}>{s.status}</span>
                </div>
                <h3 className="font-bold mb-2">{s.label}</h3>
                <p className="text-sm" style={{ color: "#8fa0a7" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold mb-10">
            Negócio pequeno, atendimento de grande
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.who} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border p-6" style={{ borderColor: "#243035", background: "#141d21" }}>
                <Quote className="w-5 h-5 mb-3" style={{ color: "#3ddc8a" }} />
                <p className="mb-4" style={{ fontSize: "0.94rem" }}>"{t.text}"</p>
                <div className="font-mono text-xs" style={{ color: "#8fa0a7" }}><b style={{ color: "#3ddc8a" }}>{t.who}</b> — {t.co}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
