import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Zap, Sparkles, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import logo from '/logo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="CODEXY Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/10" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="floating-animation absolute top-20 left-10 w-8 h-8 md:w-16 md:h-16 bg-accent/20 rounded-full blur-xl" />
        <div className="floating-animation absolute top-40 right-20 w-10 h-10 md:w-20 md:h-20 bg-primary/20 rounded-full blur-xl" style={{ animationDelay: '2s' }} />
        <div className="floating-animation absolute bottom-40 left-20 w-6 h-6 md:w-12 md:h-12 bg-accent/30 rounded-full blur-lg" style={{ animationDelay: '4s' }} />
        <div className="floating-animation absolute top-60 right-40 w-12 h-12 md:w-24 md:h-24 bg-primary/15 rounded-full blur-2xl" style={{ animationDelay: '1s' }} />
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 z-5">
        <div className="w-full h-full opacity-10" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 h-screen flex items-center">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="slide-up space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-card text-sm font-medium">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-tech-gray">Inovação em Tecnologia</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight flex items-center gap-2">
                <img src={logo} alt="Logo Codexy" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto" />
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-tech-gray font-light max-w-lg">
                Transformamos ideias em 
                <span className="text-accent font-semibold"> soluções digitais</span> que 
                impulsionam o futuro da sua empresa.
              </p>
            </div>

            <div className="slide-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold tech-glow"
                onClick={() => {
                  const contactSection = document.querySelector('[data-section="contact"]');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Começar Projeto
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold tech-card border-primary/20 hover:border-accent"
                onClick={() => {
                  const projectsSection = document.querySelector('[data-section="projects"]');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Ver Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="slide-up grid grid-cols-3 gap-4 sm:gap-8 pt-8" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">30+</div>
                <div className="text-xs sm:text-sm text-tech-gray">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">99%</div>
                <div className="text-xs sm:text-sm text-tech-gray">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs sm:text-sm text-tech-gray">Suporte</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Central Tech Orb */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-xl animate-pulse" />
                <div className="relative w-full h-full rounded-full tech-card flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center tech-glow">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-8 -left-8 w-16 h-16 tech-card rounded-xl flex items-center justify-center floating-animation">
                <Cpu className="w-8 h-8 text-accent" />
              </div>
              
              <div className="absolute -top-4 -right-12 w-20 h-20 tech-card rounded-2xl flex items-center justify-center floating-animation" style={{ animationDelay: '1s' }}>
                <Zap className="w-10 h-10 text-primary" />
              </div>
              
              <div className="absolute -bottom-8 -left-4 w-14 h-14 tech-card rounded-lg flex items-center justify-center floating-animation" style={{ animationDelay: '2s' }}>
                <Sparkles className="w-7 h-7 text-accent" />
              </div>

              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-rotate-slow" />
              <div className="absolute inset-8 rounded-full border border-primary/30 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;