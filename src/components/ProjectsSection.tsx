import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const projects = [
  {
    title: "Dra. Gabriela Nassif - Otorrinolaringologia Pediátrica",
    description: "Site institucional da Dra. Gabriela Nassif, especializada em otorrinolaringologia pediátrica.",
    url: "https://dragabrielanassif.netlify.app/",
    category: "Site Institucional",
    image: "/dragabrielanassif-netlify-app-1024x768desktop-01e620.jpg"
  },
  {
    title: "Coruja Cortes - Barbearia e Escola de Barbeiros",
    description: "Barbearia e escola de barbeiros com unidades em Sabará e Pompéu-MG, oferecendo serviços de corte e formação profissional.",
    url: "https://coruja-cortes.netlify.app/",
    category: "Serviço Local",
    image: "/coruja-cortes.png"
  },
  {
    title: "Cê qui sabe - Restaurante Tradicional Mineiro",
    description: "Restaurante em Sabará que serve pratos típicos da culinária mineira em um ambiente acolhedor.",
    url: "https://cequisabe.netlify.app/",
    category: "Restaurante",
    image: "/cequisabe-netlify-app-1024x768desktop-74e796.jpg"
  },
  {
    title: "Seu Expresso - Aluguel de Máquinas de Café para Eventos",
    description: "Serviço de locação de máquinas de café expresso para eventos, oferecendo praticidade e qualidade.",
    url: "https://seuexpresso.netlify.app/",
    category: "Serviço para Eventos",
    image: "/seuexpresso-netlify-app-1024x768desktop-43fce6.jpg"
  },
  {
    title: "Bruno Luz - Relojoeiro Artesanal",
    description: "Relojoeiro em Belo Horizonte especializado na restauração e manutenção de relógios artesanais.",
    url: "https://luzrelojoeiro.netlify.app/",
    category: "Serviço Local",
    image: "/luzrelojoeiro-netlify-app-1024x768desktop-695f4d.jpg"
  },
  {
    title: "ObraFácil - Sua obra organizada, seu cliente satisfeito",
    description: "Plataforma que auxilia na organização de obras, proporcionando satisfação ao cliente final.",
    url: "https://obra-facil.netlify.app/",
    category: "Plataforma",
    image: "/obra-facil-netlify-app-1024x768desktop-6135f2.jpg"
  },
  {
    title: "Doces do Bairro - Confeitaria Artesanal",
    description: "Confeitaria localizada no bairro Sagrada Família, em Belo Horizonte, especializada em doces artesanais.",
    url: "https://docesdebairro.netlify.app/",
    category: "Confeitaria",
    image: "/docesdebairro-netlify-app-1024x768desktop-0a0bfe.jpg"
  },
  {
    title: "Bella Estética Digital - Consultoria Digital para Clínicas de Estética",
    description: "Consultoria especializada em marketing digital para clínicas de estética, ajudando a expandir a presença online.",
    url: "https://markt-bellaestetica.netlify.app/",
    category: "Consultoria",
    image: "/markt-bellaestetica-netlify-app-1024x768desktop-31d1c9.jpg"
  },
  {
    title: "AtendeBot - Chatbot WhatsApp",
    description: "Solução de chatbot para WhatsApp, facilitando o atendimento automatizado de empresas.",
    url: "https://atendebot.netlify.app/",
    category: "Tecnologia",
    image: "/atendebot-netlify-app-1024x768desktop-e8309f.jpg"
  },
  {
    title: "Consultório Vida Leve - Psicologia e Saúde Mental",
    description: "Clínica em São Paulo dedicada à psicologia e saúde mental, oferecendo atendimento terapêutico personalizado.",
    url: "https://clinicasuamente.netlify.app/",
    category: "Clínica",
    image: "/clinicasuamente-netlify-app-1024x768desktop-68f94e.jpg"
  }
];

const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-tech-gray max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e como transformamos 
            ideias em soluções digitais de sucesso.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project, index) => {
            const realIndex = showAll ? index : index;
            return (
              <Dialog key={project.title} open={openIndex === realIndex} onOpenChange={(open) => setOpenIndex(open ? realIndex : null)}>
                <Card 
                  className="group tech-card border-0 overflow-hidden hover:tech-glow transition-all duration-500 slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full absolute top-4 left-4 z-10">
                      {project.category}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-tech-gray mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver Projeto
                        </Button>
                      </DialogTrigger>
                    </div>
                  </CardContent>
                </Card>
                <DialogContent className="max-w-7xl p-0 overflow-hidden rounded-xl shadow-2xl shadow-accent/30">
                  <div className="w-full h-[85vh]">
                    <iframe
                      src={project.url}
                      title={project.title}
                      className="w-full h-full border-0 rounded-xl"
                      style={{ background: 'transparent' }}
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        <div className="text-center slide-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" variant="outline" className="px-8 py-6 tech-card border-primary/20 hover:border-accent" onClick={() => setShowAll((v) => !v)}>
            {showAll ? 'Ver Menos' : 'Ver Todos os Projetos'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;