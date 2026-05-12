import {
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CakeSlice,
  Coffee,
  ExternalLink,
  HeartPulse,
  Monitor,
  Scissors,
  Sparkles,
  Watch
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useState } from "react";

type Project = {
  title: string;
  coverTitle: string;
  description: string;
  url: string;
  category: string;
  eyebrow: string;
  cta: string;
  benefit: string;
  Icon: LucideIcon;
  coverClass: string;
  accentClass: string;
};

const projects: Project[] = [
  {
    title: "Dra. Gabriela Nassif - Otorrinolaringologia Pediátrica",
    coverTitle: "Dra. Gabriela",
    description: "Site institucional para autoridade médica, apresentação de serviços e captação de pacientes.",
    url: "https://dragabrielanassif.netlify.app/",
    category: "Site Institucional",
    eyebrow: "Saúde",
    cta: "Presença Digital",
    benefit: "Autoridade, confiança e agenda em uma experiência clara",
    Icon: HeartPulse,
    coverClass: "from-primary via-slate-950 to-blue-950",
    accentClass: "bg-accent text-white"
  },
  {
    title: "Coruja Cortes - Barbearia e Escola de Barbeiros",
    coverTitle: "Coruja Cortes",
    description: "Landing page para barbearia e escola, com unidades, serviços e foco em conversão.",
    url: "https://coruja-cortes.netlify.app/",
    category: "Serviço Local",
    eyebrow: "Barbearia",
    cta: "Agenda e Cursos",
    benefit: "Serviços, unidades e formação profissional no mesmo fluxo",
    Icon: Scissors,
    coverClass: "from-slate-950 via-blue-950 to-primary",
    accentClass: "bg-blue-500 text-white"
  },
  {
    title: "Imperial Flow Gold - Sabor Imperial Meat Market",
    coverTitle: "Imperial Flow",
    description: "Sistema administrativo e loja premium para açougue com pedidos, estoque, vendas e financeiro.",
    url: "https://imperial-meat.netlify.app/",
    category: "Sistema de Gestão",
    eyebrow: "Açougue",
    cta: "Gestão Premium",
    benefit: "Pedidos, estoque e financeiro com visual de marca forte",
    Icon: BriefcaseBusiness,
    coverClass: "from-blue-950 via-slate-950 to-cyan-950",
    accentClass: "bg-cyan-400 text-slate-950"
  },
  {
    title: "Seu Expresso - Aluguel de Máquinas de Café para Eventos",
    coverTitle: "Seu Expresso",
    description: "Site para locação de máquinas de café expresso em eventos, com oferta direta e WhatsApp.",
    url: "https://seuexpresso.netlify.app/",
    category: "Serviço para Eventos",
    eyebrow: "Eventos",
    cta: "Café em Eventos",
    benefit: "Oferta rápida para orçamentos e contratação pelo WhatsApp",
    Icon: Coffee,
    coverClass: "from-primary via-blue-950 to-sky-950",
    accentClass: "bg-sky-400 text-slate-950"
  },
  {
    title: "Bruno Luz - Relojoeiro Artesanal",
    coverTitle: "Luz Relojoeiro",
    description: "Site institucional para relojoeiro artesanal, com foco em restauração, manutenção e contato.",
    url: "https://luzrelojoeiro.netlify.app/",
    category: "Serviço Local",
    eyebrow: "Relojoaria",
    cta: "Ateliê Artesanal",
    benefit: "Serviço especializado apresentado com sofisticação e clareza",
    Icon: Watch,
    coverClass: "from-slate-950 via-primary to-blue-900",
    accentClass: "bg-blue-400 text-slate-950"
  },
  {
    title: "ObraFácil - Sua obra organizada, seu cliente satisfeito",
    coverTitle: "ObraFácil",
    description: "Plataforma para organização de obras, acompanhamento de etapas e comunicação com clientes.",
    url: "https://obra-facil.netlify.app/",
    category: "Plataforma",
    eyebrow: "Construção",
    cta: "Diário de Obra",
    benefit: "Checklist, ocorrências e progresso por etapa em uma visão simples",
    Icon: Building2,
    coverClass: "from-blue-950 via-slate-950 to-indigo-950",
    accentClass: "bg-indigo-400 text-slate-950"
  },
  {
    title: "Doces do Bairro - Confeitaria Artesanal",
    coverTitle: "Doces do Bairro",
    description: "Catálogo digital para confeitaria artesanal com produtos, posicionamento local e contato direto.",
    url: "https://docesdebairro.netlify.app/",
    category: "Confeitaria",
    eyebrow: "Gastronomia",
    cta: "Catálogo Online",
    benefit: "Produtos organizados para despertar desejo e gerar pedidos",
    Icon: CakeSlice,
    coverClass: "from-primary via-slate-950 to-sky-950",
    accentClass: "bg-sky-500 text-white"
  },
  {
    title: "Bella Estética Digital - Consultoria Digital para Clínicas de Estética",
    coverTitle: "Bella Estética",
    description: "Landing page para consultoria digital voltada a clínicas de estética e geração de leads.",
    url: "https://markt-bellaestetica.netlify.app/",
    category: "Consultoria",
    eyebrow: "Estética",
    cta: "Marketing e Leads",
    benefit: "Oferta consultiva para clínicas que precisam vender melhor",
    Icon: Sparkles,
    coverClass: "from-indigo-950 via-slate-950 to-blue-950",
    accentClass: "bg-blue-500 text-white"
  },
  {
    title: "AtendeBot - Chatbot WhatsApp",
    coverTitle: "AtendeBot",
    description: "Solução de chatbot para WhatsApp, facilitando atendimento automatizado e respostas rápidas.",
    url: "https://atendebot.netlify.app/",
    category: "Tecnologia",
    eyebrow: "Automação",
    cta: "Chatbot WhatsApp",
    benefit: "Atendimento automatizado para capturar e qualificar conversas",
    Icon: Bot,
    coverClass: "from-cyan-950 via-slate-950 to-blue-950",
    accentClass: "bg-cyan-400 text-slate-950"
  },
  {
    title: "Consultório Vida Leve - Psicologia e Saúde Mental",
    coverTitle: "Vida Leve",
    description: "Site para clínica de psicologia e saúde mental, com apresentação acolhedora e agendamento.",
    url: "https://clinicasuamente.netlify.app/",
    category: "Clínica",
    eyebrow: "Psicologia",
    cta: "Agendamento",
    benefit: "Experiência acolhedora para transformar interesse em contato",
    Icon: CalendarDays,
    coverClass: "from-teal-950 via-slate-950 to-sky-950",
    accentClass: "bg-teal-400 text-slate-950"
  }
];

const ProjectCover = ({ project }: { project: Project }) => {
  const Icon = project.Icon;

  return (
    <div className={`relative flex h-[360px] flex-col overflow-hidden rounded-lg bg-gradient-to-br ${project.coverClass} p-4 text-white shadow-2xl shadow-blue-950/30 ring-1 ring-blue-200/15`}>
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
        backgroundSize: "18px 18px"
      }} />
      <div className="absolute -right-12 top-16 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
      <div className="absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-sky-300/15 blur-3xl" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className={`inline-flex max-w-[150px] items-center rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-normal ${project.accentClass}`}>
          <span className="truncate">{project.eyebrow}</span>
        </div>
        <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold uppercase text-white shadow-lg shadow-blue-950/30 ring-1 ring-white/20 backdrop-blur">
          Site
        </div>
      </div>

      <div className="relative z-10 mt-4">
        <p className="text-xs font-extrabold uppercase tracking-normal text-white/65">
          {project.category}
        </p>
        <h3 className="mt-2 min-h-[64px] text-3xl font-black uppercase leading-[0.92] tracking-normal text-white">
          {project.coverTitle}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm font-semibold leading-tight text-white/80">
          {project.benefit}
        </p>
      </div>

      <div className="relative z-10 mt-auto pb-8">
        <div className="mx-auto flex h-[134px] w-[82%] items-center justify-center rounded-2xl border border-blue-200/25 bg-blue-100/20 p-4 shadow-inner shadow-white/10 backdrop-blur-md">
          <div className="relative h-full w-full rounded-xl bg-primary/85 p-3 shadow-xl shadow-blue-950/30">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-300" />
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
            </div>
            <div className="grid h-[76px] grid-cols-[1fr_1.15fr] gap-3">
              <div className={`flex items-center justify-center rounded-lg ${project.accentClass}`}>
                <Icon className="h-10 w-10" />
              </div>
              <div className="space-y-2 pt-1">
                <div className="h-3 rounded-full bg-white/70" />
                <div className="h-2 rounded-full bg-white/35" />
                <div className="h-2 w-2/3 rounded-full bg-white/25" />
                <div className={`mt-3 h-5 w-20 rounded-full ${project.accentClass}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute inset-x-4 bottom-3 z-10 flex h-9 items-center justify-center rounded-full px-4 text-center text-xs font-black uppercase tracking-normal ${project.accentClass}`}>
        <span className="truncate">{project.cta}</span>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-secondary/50 py-16 sm:py-24" data-section="projects">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.08),transparent_34%),radial-gradient(circle_at_80%_35%,rgba(20,184,166,0.07),transparent_28%)]" />
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="slide-up">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <Monitor className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-black tracking-normal text-primary sm:text-4xl md:text-5xl">
                    Portfolio
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            className="w-fit text-primary hover:bg-accent/10 hover:text-accent"
            onClick={() => setOpenIndex(0)}
          >
            Ver primeiro projeto
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-[1700px]">
          <CarouselContent className="-ml-5">
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="pl-5 sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                <Dialog open={openIndex === index} onOpenChange={(open) => setOpenIndex(open ? index : null)}>
                  <DialogTrigger asChild>
                    <button className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                      <ProjectCover project={project} />
                      <div className="mt-4 min-h-[58px]">
                        <p className="line-clamp-2 text-lg font-bold leading-tight text-primary transition-colors group-hover:text-accent">
                          {project.title}
                        </p>
                        <p className="mt-1 text-sm font-medium text-tech-gray">{project.category}</p>
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-7xl overflow-hidden rounded-xl border-white/10 bg-white p-0 shadow-2xl shadow-blue-950/50">
                    <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-950 px-6 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
                      <div className="pr-24">
                        <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                        <p className="mt-1 text-sm text-slate-300">{project.description}</p>
                      </div>
                      <Button asChild size="sm" className="w-fit shrink-0">
                        <a href={project.url} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Abrir Projeto
                        </a>
                      </Button>
                    </div>
                    <iframe
                      src={project.url}
                      title={project.title}
                      className="h-[78vh] w-full border-0 bg-white"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-3 h-11 w-11 border-primary/10 bg-white text-primary shadow-lg shadow-black/5 hover:bg-primary hover:text-white md:-left-14" />
          <CarouselNext className="-right-3 h-11 w-11 border-primary/10 bg-white text-primary shadow-lg shadow-black/5 hover:bg-primary hover:text-white md:-right-14" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
