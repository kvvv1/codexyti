import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contato@codexy.com.br",
    description: "Resposta em até 2 horas"
  },
  {
    icon: Phone,
    title: "Telefone/WhatsApp",
    value: "(31) 98265-5571",
    description: "Seg - Sex, 8h às 18h"
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Belo Horizonte, MG",
    description: "Brasil"
  }
];

const ContactSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos conversar sobre seu <span className="gradient-text">projeto</span>
          </h2>
          <p className="text-xl text-tech-gray max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato 
            conosco e descubra como podemos ajudar sua empresa a crescer.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 slide-up">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Entre em Contato</h3>
              <p className="text-tech-gray leading-relaxed mb-8">
                Nossa equipe está pronta para discutir seu projeto e apresentar 
                a melhor solução para suas necessidades tecnológicas.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="tech-card border-0 group hover:tech-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                        <p className="text-tech-gray font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-tech-gray/70">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Response */}
            <Card className="tech-card border-0 bg-gradient-to-br from-accent/10 to-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-primary">Resposta Rápida</h4>
                </div>
                <p className="text-tech-gray text-sm">
                  Respondemos todos os contatos em até 2 horas durante horário comercial.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="tech-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Envie sua Mensagem</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Nome *
                      </label>
                      <Input 
                        placeholder="Seu nome completo"
                        className="tech-card border-tech-gray-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email"
                        placeholder="seu@email.com"
                        className="tech-card border-tech-gray-light"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Empresa
                      </label>
                      <Input 
                        placeholder="Nome da empresa"
                        className="tech-card border-tech-gray-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Telefone
                      </label>
                      <Input 
                        placeholder="(11) 99999-9999"
                        className="tech-card border-tech-gray-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Tipo de Projeto
                    </label>
                    <select className="w-full px-3 py-2 tech-card border border-tech-gray-light rounded-md text-tech-gray focus:ring-2 focus:ring-accent focus:border-transparent">
                      <option>Desenvolvimento Web</option>
                      <option>Aplicativo Mobile</option>
                      <option>Soluções Cloud</option>
                      <option>Big Data & IA</option>
                      <option>Cibersegurança</option>
                      <option>Automação</option>
                      <option>Consultoria</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Mensagem *
                    </label>
                    <Textarea 
                      placeholder="Descreva seu projeto e como podemos ajudá-lo..."
                      rows={6}
                      className="tech-card border-tech-gray-light"
                    />
                  </div>

                  <Button size="lg" className="w-full px-8 py-6 tech-glow group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensagem
                  </Button>
                  
                  <p className="text-xs text-tech-gray/70 text-center">
                    Ao enviar este formulário, você concorda com nossa política de privacidade.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;