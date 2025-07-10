import { Code, Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from "lucide-react";

const footerSections = [
  {
    title: "Serviços",
    links: [
      "Desenvolvimento Web",
      "Apps Mobile",
      "Soluções Cloud",
      "Big Data & IA",
      "Cibersegurança",
      "Automação"
    ]
  },
  {
    title: "Empresa",
    links: [
      "Sobre Nós",
      "Nossa Equipe",
      "Carreiras",
      "Blog",
      "Casos de Sucesso",
      "Parcerias"
    ]
  },
  {
    title: "Suporte",
    links: [
      "Documentação",
      "FAQ",
      "Suporte Técnico",
      "Status do Sistema",
      "Tutoriais",
      "Contato"
    ]
  }
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" }
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary-glow flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">CODEXY</h3>
            </div>
            
            <p className="text-white/80 leading-relaxed max-w-md">
              Transformamos ideias em soluções digitais inovadoras. Nossa missão é 
              impulsionar o crescimento das empresas através da tecnologia.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">contato@codexy.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/80">São Paulo, SP - Brasil</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 CODEXY. Todos os direitos reservados.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;