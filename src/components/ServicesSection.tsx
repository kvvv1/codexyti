import { Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas e responsivas utilizando as tecnologias mais avançadas do mercado.",
    features: ["React & Next.js", "Node.js & API Rest", "Performance Otimizada"]
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android com experiência excepcional.",
    features: ["React Native", "Flutter", "UI/UX Intuitivo"]
  },
  {
    icon: Globe,
    title: "Soluções Cloud",
    description: "Infraestrutura escalável na nuvem para suportar o crescimento do seu negócio.",
    features: ["AWS & Azure", "DevOps", "Escalabilidade"]
  },
  {
    icon: Database,
    title: "Big Data & IA",
    description: "Análise de dados inteligente e machine learning para insights estratégicos.",
    features: ["Data Analytics", "Machine Learning", "Automação"]
  },
  {
    icon: Shield,
    title: "Cibersegurança",
    description: "Proteção completa para seus sistemas e dados com as melhores práticas de segurança.",
    features: ["Pentesting", "Compliance", "Monitoramento 24/7"]
  },
  {
    icon: Zap,
    title: "Automação",
    description: "Processos automatizados que aumentam eficiência e reduzem custos operacionais.",
    features: ["RPA", "Workflows", "Integração de Sistemas"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossas <span className="gradient-text">Soluções</span>
          </h2>
          <p className="text-xl text-tech-gray max-w-3xl mx-auto">
            Oferecemos um conjunto completo de serviços tecnológicos para transformar 
            sua visão em realidade digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group tech-card border-0 hover:tech-glow transition-all duration-500 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-tech-gray leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-tech-gray font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;