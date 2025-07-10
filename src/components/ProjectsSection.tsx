import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com dashboard administrativo, sistema de pagamentos e analytics em tempo real.",
    image: project1,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Application"
  },
  {
    title: "FinTech Mobile App",
    description: "Aplicativo bancário móvel com recursos de transferência, investimentos e controle financeiro pessoal.",
    image: project2,
    technologies: ["React Native", "Firebase", "API Banking", "Biometria"],
    category: "Mobile App"
  },
  {
    title: "Corporate Website",
    description: "Website corporativo moderno com CMS personalizado, otimização SEO e integração com sistemas internos.",
    image: project3,
    technologies: ["Next.js", "Sanity CMS", "Vercel", "Analytics"],
    category: "Website"
  }
];

const ProjectsSection = () => {
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
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group tech-card border-0 overflow-hidden hover:tech-glow transition-all duration-500 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-tech-gray mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-tech-gray-light text-tech-gray text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                  <Button variant="outline" size="sm" className="px-3">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center slide-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" variant="outline" className="px-8 py-6 tech-card border-primary/20 hover:border-accent">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;