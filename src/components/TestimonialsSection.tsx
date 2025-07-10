import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechCorp",
    content: "A CODEXY transformou completamente nossa presença digital. O aplicativo que desenvolveram aumentou nossas vendas em 300% no primeiro trimestre.",
    rating: 5,
    company: "TechCorp"
  },
  {
    name: "Marina Santos",
    role: "Diretora de TI, InnovateLab",
    content: "Profissionalismo excepcional e entrega dentro do prazo. A solução de automação implementada reduziu nossos custos operacionais significativamente.",
    rating: 5,
    company: "InnovateLab"
  },
  {
    name: "Roberto Oliveira",
    role: "Fundador, StartupXYZ",
    content: "Desde o primeiro contato até a entrega final, a CODEXY demonstrou expertise técnica e compreensão do nosso negócio. Recomendo fortemente!",
    rating: 5,
    company: "StartupXYZ"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="text-xl text-tech-gray max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="tech-card border-0 relative group hover:tech-glow transition-all duration-500 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="w-8 h-8 text-accent" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-tech-gray leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-tech-gray-light pt-6">
                  <div className="font-semibold text-primary mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-tech-gray">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-accent font-medium mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-8">
            <p className="text-tech-gray">Empresas que confiam na CODEXY</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="px-6 py-3 bg-tech-gray-light rounded-lg font-bold text-tech-gray">TechCorp</div>
            <div className="px-6 py-3 bg-tech-gray-light rounded-lg font-bold text-tech-gray">InnovateLab</div>
            <div className="px-6 py-3 bg-tech-gray-light rounded-lg font-bold text-tech-gray">StartupXYZ</div>
            <div className="px-6 py-3 bg-tech-gray-light rounded-lg font-bold text-tech-gray">DigitalFlow</div>
            <div className="px-6 py-3 bg-tech-gray-light rounded-lg font-bold text-tech-gray">CloudTech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;