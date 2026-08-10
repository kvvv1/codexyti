import type { FaqItem } from "./landingPages";

export interface BlogContentBlock {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  coverImageAlt: string;
  publishedAt: string;
  content: BlogContentBlock[];
  faq?: FaqItem[];
  source?: { label: string; url: string };
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
}

const FALLBACK_COVER = "/images/landing/clinicas-estetica-hero.webp";

export const blogPosts: BlogPost[] = [
  // Posts entram aqui via merge-blog-site1.mjs.
  {
    slug: "custo-de-um-chatbot-de-whatsapp-para-pequenas-empresas",
    title: "Custo de um Chatbot de WhatsApp para Pequenas Empresas",
    excerpt: "Entenda os fatores que influenciam o custo de implementar e manter um chatbot de WhatsApp para pequenas empresas.",
    category: "WhatsApp Business, Automação",
    coverImage: "",
    coverImageAlt: "Custo de um Chatbot de WhatsApp para Pequenas Empresas",
    publishedAt: "2026-08-10",
    content: [
      { type: "paragraph", text: "O primeiro passo para entender o custo de um chatbot de WhatsApp é definir que tipo de projeto você está procurando. A CODEXY desenvolve soluções personalizadas por cliente, então cada projeto tem seu próprio orçamento e prazo." },
      { type: "heading", text: "Fatores que influenciam o custo" },
      { type: "paragraph", text: "O custo de um chatbot de WhatsApp é composto por fatores como complexidade do projeto, tempo de desenvolvimento, recursos humanos e tecnológicos necessários." },
      { type: "list", items: ["Desenvolvimento personalizado: o quanto a solução precisa ser adaptada às especificidades da sua empresa","Integração com sistemas existentes: se você já tem um sistema de CRM ou gerenciamento de estoque, precisará de integração com o chatbot"] },
      { type: "paragraph", text: "Além disso, é importante considerar os custos de manutenção e atualização do chatbot ao longo do tempo." },
      { type: "heading", text: "Custo fixo vs. custo variável" },
      { type: "paragraph", text: "O custo de um chatbot pode ser dividido em fixo e variável. O fixo inclui os custos de desenvolvimento e implementação, enquanto o variável inclui os custos de manutenção e atualização." },
      { type: "list", items: ["Custo fixo: desenvolvimento do chatbot, integração com sistemas existentes","Custo variável: manutenção do chatbot, atualizações e melhorias"] },
      { type: "paragraph", text: "Em resumo, o custo de um chatbot de WhatsApp para pequenas empresas depende da complexidade do projeto, dos fatores que influenciam o custo e da escolha entre custo fixo e variável." },
      { type: "heading", text: "O que esperar ao contratar a CODEXY" },
      { type: "paragraph", text: "Ao contratar a CODEXY, você pode estar seguro de que está recebendo uma solução personalizada por cliente com um orçamento e prazo definidos." },
      { type: "heading", text: "Dicas para minimizar os custos" },
      { type: "paragraph", text: "Para minimizar os custos, é importante ter uma clara definição do que você precisa e estabelecer prioridades claras com o desenvolvedor." },
      { type: "list", items: ["Defina as necessidades da sua empresa","Estabeleça prioridades claras"] },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "O custo de um chatbot de WhatsApp para pequenas empresas depende de vários fatores. Entenda esses fatores e escolha a melhor opção para sua empresa." },
    ],
    faq: [
      { question: "Qual é o custo médio de um chatbot de WhatsApp?", answer: "O custo médio de um chatbot de WhatsApp depende da complexidade do projeto e dos fatores que influenciam o custo." },
      { question: "Eu preciso contratar uma empresa para desenvolver meu chatbot?", answer: "Sim, é recomendável contratar uma empresa especializada em desenvolvimento de chatbots para garantir a qualidade e eficiência da solução." },
      { question: "Posso fazer o meu próprio chatbot sem contratar uma empresa?", answer: "Sim, mas é importante ter conhecimento técnico e experiência em desenvolvimento de software para evitar problemas de segurança e manutenção." },
    ],
    seo: { title: "Custo de um Chatbot de WhatsApp para Pequenas Empresas | Blog CODEXY", description: "Entenda os fatores que influenciam o custo de implementar e manter um chatbot de WhatsApp para pequenas empresas." },
  },
  {
    slug: "automcao-de-atendimento-no-whatsapp",
    title: "Automação de Atendimento no WhatsApp",
    excerpt: "Saiba como a CODEXY ajuda os negócios a automatizar a resposta às mensagens no WhatsApp",
    category: "WhatsApp Business, Automação",
    coverImage: "",
    coverImageAlt: "Automação de Atendimento no WhatsApp",
    publishedAt: "2026-08-10",
    content: [
      { type: "paragraph", text: "A automação de atendimento no WhatsApp é uma ferramenta que permite aos negócios responder automaticamente às mensagens recebidas nos canais do aplicativo." },
      { type: "heading", text: "Como funciona a automação" },
      { type: "paragraph", text: "O sistema utiliza inteligência artificial para analisar as mensagens e determinar se uma resposta automatizada é adequada ou se o caso deve ser transferido para um atendente humano." },
      { type: "list", items: ["Perguntas frequentes","Mensagens de boas-vindas","Respostas a perguntas sobre produtos e serviços"] },
      { type: "heading", text: "Vantagens da automação" },
      { type: "paragraph", text: "A automação de atendimento no WhatsApp oferece várias vantagens, incluindo aumento da eficiência, melhoria da experiência do cliente e redução dos custos com atendimento." },
      { type: "list", items: ["Resposta rápida às mensagens","Redução do tempo gasto com atendimento","Melhoria da satisfação do cliente"] },
      { type: "heading", text: "Como implementar a automação" },
      { type: "paragraph", text: "A CODEXY ajuda os negócios a implementar a automação de atendimento no WhatsApp, desde o desenvolvimento do sistema até a integração com os canais de comunicação já existentes." },
      { type: "heading", text: "Próximos passos" },
      { type: "paragraph", text: "Para saber mais sobre como a CODEXY pode ajudar seu negócio a automatizar o atendimento no WhatsApp, entre em contato conosco para agendar uma consulta." },
    ],
    faq: [
      { question: "O que é automação de atendimento?", answer: "A automação de atendimento é um sistema que permite aos negócios responder automaticamente às mensagens recebidas nos canais do WhatsApp." },
      { question: "Por que a CODEXY oferece essa ferramenta?", answer: "A CODEXY desenvolve soluções personalizadas para os negócios, e a automação de atendimento é uma ferramenta essencial para ajudar os clientes a melhorar a experiência do cliente." },
      { question: "Qual é o custo da implementação?", answer: "O custo da implementação varia dependendo das necessidades específicas do negócio, e a CODEXY oferece soluções personalizadas para atender às demandas de cada cliente." },
    ],
    seo: { title: "Automação de Atendimento no WhatsApp | Blog CODEXY", description: "Saiba como a CODEXY ajuda os negócios a automatizar a resposta às mensagens no WhatsApp" },
  },
] as const;

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogPostBySlug(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined;
  return blogPosts.find((post) => post.slug === slug);
}

export function getOtherPosts(currentSlug: string, limit = 3): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.slug !== currentSlug).slice(0, limit);
}

export { FALLBACK_COVER };
