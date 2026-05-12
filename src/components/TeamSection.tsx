const teamMembers = [
  {
    name: "Lucas Magalhães",
    role: "Sócio-fundador",
    image: "/time/lucas-magalhaes.jpeg"
  },
  {
    name: "Kaike Vittor",
    role: "Sócio-fundador",
    image: "/time/kaike-vittor.jpeg"
  },
  {
    name: "Luiz Abreu",
    role: "Comercial",
    image: "/time/luiz-abreu.jpeg"
  },
  {
    name: "Maria Clara",
    role: "Marketing",
    image: "/time/maria-clara.jpeg"
  },
  {
    name: "Otavio Fernandes",
    role: "Marketing",
    image: "/time/otavio-fernandes.jpeg"
  },
  {
    name: "Theo Coelho",
    role: "Desenvolvedor",
    image: "/time/theo-coelho.jpeg"
  }
];

const TeamSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-background py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_14%_12%,rgba(0,85,255,0.10),transparent_30%),radial-gradient(circle_at_86%_34%,rgba(0,140,255,0.08),transparent_28%)]" />
      <div className="team-grid-motion absolute inset-0 opacity-[0.28]" />
      <div className="team-orbit-line absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-accent/10" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center slide-up">
          <p className="mb-3 text-sm font-bold uppercase tracking-normal text-accent">
            Pessoas que conectam resultados
          </p>
          <h2 className="text-3xl font-black tracking-normal text-primary sm:text-4xl md:text-5xl">
            Time <span className="gradient-text">Codexy</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-tech-gray sm:text-lg">
            Um time multidisciplinar que une estratégia, tecnologia e criatividade para transformar ideias em soluções digitais de alto impacto.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="team-card-enter group overflow-hidden rounded-lg border border-primary/10 bg-white shadow-lg shadow-blue-950/5 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl hover:shadow-blue-950/20"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative aspect-square overflow-hidden bg-primary">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} da Codexy`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent transition-transform duration-500 group-hover:scale-x-110" />
              </div>

              <div className="relative bg-gradient-to-b from-white to-secondary/35 p-5 sm:p-6">
                <div className="absolute -top-6 left-5 h-12 w-12 rounded-full border border-accent/30 bg-gradient-to-br from-accent to-primary shadow-lg shadow-blue-950/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-accent/30" />
                <div className="relative">
                  <h3 className="text-xl font-black leading-tight text-primary transition-colors duration-300 group-hover:text-accent">
                    {member.name}
                  </h3>
                  <p className="mt-2 inline-flex rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent ring-1 ring-accent/15 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    {member.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
