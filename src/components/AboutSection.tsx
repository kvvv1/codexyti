import { Users, Award, Clock, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, number: "50+", label: "Especialistas" },
  { icon: Award, number: "150+", label: "Projetos Entregues" },
  { icon: Clock, number: "5+", label: "Anos de Experiência" },
  { icon: Target, number: "98%", label: "Taxa de Sucesso" }
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 slide-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre a <span className="gradient-text">CODEXY</span>
              </h2>
              <p className="text-xl text-tech-gray leading-relaxed mb-8">
                Somos uma empresa de tecnologia apaixonada por criar soluções digitais 
                que impulsionam o crescimento dos nossos clientes. Nossa equipe combina 
                expertise técnica com visão estratégica para entregar resultados excepcionais.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Inovação Constante</h4>
                    <p className="text-tech-gray">Utilizamos as tecnologias mais avançadas para criar soluções à frente do mercado.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Foco no Cliente</h4>
                    <p className="text-tech-gray">Cada projeto é desenvolvido com foco nas necessidades específicas do cliente.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Qualidade Premium</h4>
                    <p className="text-tech-gray">Mantemos os mais altos padrões de qualidade em todos os nossos entregáveis.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="px-8 py-6 tech-glow">
                Conhecer Nossa Equipe
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8 slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="tech-card border-0 text-center group hover:tech-glow transition-all duration-300"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-tech-gray font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Mission Card */}
            <Card className="tech-card border-0 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa Missão</h3>
                <p className="text-tech-gray leading-relaxed">
                  Democratizar o acesso à tecnologia de ponta, capacitando empresas 
                  de todos os portes a competirem no mercado digital através de 
                  soluções inovadoras e sustentáveis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;