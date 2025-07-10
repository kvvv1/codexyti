import { Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Sites institucionais, one page, landing pages, lojas virtuais, blogs, portais e portfólios digitais.",
    features: [
      "Sites Institucionais, One Page, Landing Pages",
      "Lojas Virtuais (e-commerce)",
      "Blogs, Portais, Portfólios Digitais"
    ]
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android, desenvolvidos sob medida para sua necessidade.",
    features: [
      "iOS & Android",
      "Experiência Intuitiva",
      "Desenvolvimento sob medida"
    ]
  },
  {
    icon: Zap,
    title: "Automação e Chatbots",
    description: "Automatize processos e atenda clientes em múltiplos canais como WhatsApp, Instagram, e-mail e CRM.",
    features: [
      "WhatsApp, Instagram, E-mail",
      "CRM e links inteligentes",
      "Chatbots personalizados"
    ]
  },
  {
    icon: Database,
    title: "Sistemas e Plataformas Personalizadas",
    description: "Soluções sob medida como sistemas de agendamento, diário de obra, CRM, estoque, OS e plataformas para nichos específicos.",
    features: [
      "Sistemas de Agendamento, Diário de Obra, CRM, Estoque, OS",
      "Soluções por nicho: EAD, Projetos Internos, Reservas"
    ]
  },
  {
    icon: Globe,
    title: "Marketing Digital e Design",
    description: "Impulsione sua marca com identidade visual, social media, tráfego pago e branding.",
    features: [
      "Identidade visual",
      "Social media",
      "Tráfego pago, branding"
    ]
  },
  {
    icon: Shield,
    title: "Consultoria e Suporte",
    description: "Apoio completo com diagnóstico, mentoria, suporte técnico, hospedagem e treinamentos.",
    features: [
      "Diagnóstico, mentoria",
      "Suporte técnico, hospedagem",
      "Treinamentos"
    ]
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