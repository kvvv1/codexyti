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
  // Posts entram aqui via merge-blog.mjs, depois de aprovados.
  {
    slug: "custo-de-um-chatbot-de-whatsapp-para-pequenas-empresas",
    title: "Custo de um chatbot de WhatsApp para pequenas empresas",
    excerpt: "Descubra os fatores que influenciam o preço de um chatbot de WhatsApp e como ele pode ser personalizado para atender às necessidades específicas do seu negócio.",
    category: "Atendimento",
    coverImage: "",
    coverImageAlt: "Custo de um chatbot de WhatsApp para pequenas empresas",
    publishedAt: "2026-08-10",
    content: [
      { type: "paragraph", text: "Quando se pensa em implementar um chatbot de WhatsApp, é comum questionar o custo envolvido. A resposta não é simples e depende de vários fatores." },
      { type: "heading", text: "O que influencia o preço do chatbot" },
      { type: "paragraph", text: "O desenvolvimento de um chatbot de WhatsApp pode ser personalizado para atender às necessidades específicas do negócio. Alguns dos fatores que influenciam o preço incluem a complexidade da lógica de navegação, a quantidade de interações e a integração com sistemas internos." },
      { type: "heading", text: "Modelo de desenvolvimento sob medida" },
      { type: "paragraph", text: "A CODEXY desenvolve software sob medida para negócios locais e industriais. Isso significa que cada projeto é personalizado para atender às necessidades específicas do cliente." },
      { type: "list", items: ["Complexidade da lógica de navegação","Quantidade de interações","Integração com sistemas internos"] },
      { type: "heading", text: "O que você precisa saber" },
      { type: "paragraph", text: "Antes de iniciar um projeto, é importante entender os custos envolvidos e como eles podem ser personalizados para atender às necessidades do seu negócio." },
      { type: "list", items: ["O que é desenvolvimento sob medida?","Como a CODEXY pode ajudar a criar um chatbot de WhatsApp personalizado?"] },
    ],
    faq: [
      { question: "Quais são os fatores que influenciam o preço do chatbot?", answer: "A complexidade da lógica de navegação, a quantidade de interações e a integração com sistemas internos." },
      { question: "O que é desenvolvimento sob medida?", answer: "Desenvolvimento sob medida significa que cada projeto é personalizado para atender às necessidades específicas do cliente." },
      { question: "Como a CODEXY pode ajudar a criar um chatbot de WhatsApp personalizado?", answer: "A CODEXY desenvolve software sob medida e pode ajudar a criar um chatbot de WhatsApp personalizado para atender às necessidades específicas do negócio." },
    ],
    source: { label: "CNN Brasil", url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxPM3RWM1FsZzRkeVlRcFJwdU1pZkF5TUhlYjQ5aXhQRFBFb0JnUGNOUHM0LUdzbzBDU3VWMkNEVHNJQU81MVZKWFZKOFJYdHV2V2RwczQ2VjJ0YXd2cUdwX3NsOHE2QjhTUWduUFY4dWs3Tnc0eEp5ZklFWGM4Ym1Dd182eEN0NEZMYk03enV3RjVLSUx5UjE5ejRMTUl2bVgxb2lCYkg3elNieTRwRE5saVVpWmwwTEo1WFNXQ2d5QXgxUzYyQzNRRFZPQQ?oc=5" },
    seo: { title: "Custo de um chatbot de WhatsApp para pequenas empresas | Blog CODEXY", description: "Descubra os fatores que influenciam o preço de um chatbot de WhatsApp e como ele pode ser personalizado para atender às necessidades específicas do seu neg" },
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
