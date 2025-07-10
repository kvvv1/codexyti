import React from "react";
import Footer from "@/components/Footer";
import logo from '/logo.png';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Cookies = () => (
  <>
    <nav className="w-full bg-background/80 border-b border-tech-gray-light py-6 mb-8 shadow-sm">
      <div className="container mx-auto px-6 flex flex-col items-center gap-2">
        <a href="/" className="flex items-center justify-center">
          <img src={logo} alt="Logo Codexy" className="h-12 w-auto" />
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="mt-2 text-lg font-semibold text-primary hover:text-accent transition-colors">Início</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
    <section className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">Política de Cookies</h1>
        <p className="mb-4 text-tech-gray">Esta Política de Cookies explica o que são cookies, como a Codexy os utiliza, quais tipos usamos, como você pode gerenciar suas preferências e outras informações importantes.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary">1. O que são Cookies?</h2>
        <p className="mb-4 text-tech-gray">Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles permitem o funcionamento adequado do site, lembram preferências e coletam informações para análise e personalização.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary">2. Tipos de Cookies Utilizados</h2>
        <ul className="list-disc pl-6 mb-4 text-tech-gray">
          <li><b>Cookies Essenciais:</b> Necessários para o funcionamento do site e para que você possa navegar e usar recursos básicos.</li>
          <li><b>Cookies de Desempenho:</b> Coletam informações sobre como os visitantes usam o site, como páginas visitadas e erros encontrados, para melhorar o desempenho.</li>
          <li><b>Cookies de Funcionalidade:</b> Permitem que o site lembre escolhas feitas por você (como idioma ou região) e forneça recursos aprimorados.</li>
          <li><b>Cookies de Publicidade:</b> Utilizados para fornecer anúncios mais relevantes para você e seus interesses.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary">3. Como Usamos Cookies</h2>
        <ul className="list-disc pl-6 mb-4 text-tech-gray">
          <li>Para garantir o funcionamento e segurança do site.</li>
          <li>Para analisar o uso do site e melhorar sua experiência.</li>
          <li>Para lembrar preferências e personalizar conteúdo.</li>
          <li>Para fins de marketing e publicidade direcionada.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary">4. Gerenciamento de Cookies</h2>
        <p className="mb-4 text-tech-gray">Você pode gerenciar ou desabilitar cookies nas configurações do seu navegador. A maioria dos navegadores permite bloquear cookies ou alertar quando eles estão sendo enviados. No entanto, a desativação pode afetar a funcionalidade do site.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary">5. Consentimento</h2>
        <p className="mb-4 text-tech-gray">Ao continuar navegando em nosso site, você concorda com o uso de cookies conforme descrito nesta política. Você pode alterar suas preferências a qualquer momento nas configurações do navegador.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary">6. Alterações nesta Política</h2>
        <p className="mb-4 text-tech-gray">Podemos atualizar esta Política de Cookies periodicamente. Recomendamos revisar esta página regularmente para estar ciente de eventuais mudanças.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary">7. Contato</h2>
        <p className="mb-4 text-tech-gray">Dúvidas sobre cookies? Entre em contato pelo e-mail <a href="mailto:suporte@codexy.com.br" className="text-accent underline">suporte@codexy.com.br</a>.</p>
      </div>
    </section>
    <Footer />
  </>
);

export default Cookies; 