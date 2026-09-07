import { motion } from "framer-motion";
import PageSeo from "@/components/PageSeo";

const niches = ["🥐 Padarias", "💈 Barbearias", "💅 Clínicas de Estética", "🏋️ Academias", "🐾 Petshops", "🏗️ Construtoras", "🍨 Açaiterias"];
const services = [
  { num: "01", title: "Automação e chatbot", desc: "Agenda, pedido e dúvida frequente resolvidos no WhatsApp, sem fila de espera." },
  { num: "02", title: "Sistemas sob medida", desc: "Painel, estoque ou controle interno feito pro seu jeito de trabalhar." },
  { num: "03", title: "Site e presença digital", desc: "Uma vitrine online que manda o cliente direto pro seu WhatsApp." },
];

export default function Preview3Vitrine() {
  return (
    <div className="min-h-screen" style={{ background: "#f6ecdd", color: "#2c1d10", fontFamily: "'Archivo', system-ui, sans-serif" }}>
      <PageSeo title="Homepage — Proposta 3 (Vitrine)" description="Proposta de homepage" noIndex />
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between py-7">
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.4rem" }}>Codexy</div>
          <motion.a whileHover={{ scale: 1.04 }} href="#" className="px-5 py-2.5 rounded-full font-semibold text-sm" style={{ background: "#c25b2c", color: "#fff7ec" }}>
            Falar no WhatsApp
          </motion.a>
        </nav>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center py-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-sm font-semibold" style={{ borderColor: "#e3d2b6", background: "#fffaf1", color: "#a83b2e" }}>
              ● atendendo de padaria a clínica
            </div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "clamp(2.3rem,4.6vw,3.6rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }} className="mb-6">
              O balcão nunca fecha<br />quando o <em style={{ color: "#c25b2c", fontStyle: "italic" }}>WhatsApp</em><br />responde por você.
            </h1>
            <p className="max-w-md mb-8" style={{ color: "#7c6a53", fontSize: "1.08rem", lineHeight: 1.65 }}>
              A CODEXY monta um atendente automático que fala do jeito do seu negócio — sem trocar de número, sem complicar a rotina.
            </p>
            <div className="flex gap-4 items-center flex-wrap">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#" className="px-6 py-3.5 rounded-full font-semibold" style={{ background: "#2c1d10", color: "#fffaf1" }}>
                Quero automatizar meu atendimento
              </motion.a>
              <a href="#" className="font-semibold underline" style={{ textDecorationColor: "#c25b2c", textUnderlineOffset: "4px" }}>ver como fica na prática</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.2 }}
            className="rounded-2xl p-7 relative border-2"
            style={{ background: "#fffaf1", borderColor: "#2c1d10" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.9 }}
              className="absolute -top-3.5 right-6 text-white text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ background: "#a83b2e" }}
            >
              desde 2023
            </motion.div>
            {[
              { ic: "🥖", who: "Padaria Bella", what: "3 pedidos confirmados agora" },
              { ic: "💈", who: "Barbearia do Zé", what: "Agenda de sábado lotando sozinha" },
              { ic: "🦷", who: "Clínica Sorriso", what: "Lembrete de consulta enviado" },
            ].map((r, i) => (
              <motion.div
                key={r.who}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="flex items-center gap-4 py-3.5"
                style={{ borderBottom: i < 2 ? "1px solid #e3d2b6" : "none" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0" style={{ background: "#f6ecdd" }}>{r.ic}</div>
                <div>
                  <p className="text-xs uppercase tracking-wide" style={{ color: "#7c6a53" }}>{r.who}</p>
                  <h4 className="font-semibold">{r.what}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="py-6 mb-16 overflow-hidden" style={{ borderTop: "1px solid #e3d2b6", borderBottom: "1px solid #e3d2b6" }}>
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...niches, ...niches].map((n, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full border font-medium text-sm whitespace-nowrap" style={{ background: "#fffaf1", borderColor: "#e3d2b6" }}>{n}</span>
            ))}
          </motion.div>
        </div>

        <section className="pb-20">
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "2.1rem" }} className="mb-3">Não é só um robô respondendo</h2>
          <p className="mb-10" style={{ color: "#7c6a53" }}>Cada automação é montada olhando pra rotina real do seu negócio.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border p-7" style={{ background: "#fffaf1", borderColor: "#e3d2b6" }}>
                <div style={{ fontFamily: "'Fraunces', serif", color: "#c25b2c", fontWeight: 600 }} className="mb-3">{s.num}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p style={{ color: "#7c6a53", fontSize: "0.94rem", lineHeight: 1.6 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 mb-20 grid md:grid-cols-[1fr_auto] gap-8 items-center"
          style={{ background: "#2c1d10", color: "#fffaf1" }}
        >
          <div>
            <p style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: "1.5rem", lineHeight: 1.4 }} className="mb-4">
              "O aplicativo que a CODEXY desenvolveu mudou completamente nossa presença digital."
            </p>
            <div className="text-sm font-semibold" style={{ color: "#cbb693" }}>Cristhian Oliveira — Coruja Cortes</div>
          </div>
          <motion.a whileHover={{ scale: 1.05 }} href="#" className="px-6 py-4 rounded-full font-bold whitespace-nowrap" style={{ background: "#c25b2c", color: "#fff7ec" }}>
            Quero um caso assim →
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
