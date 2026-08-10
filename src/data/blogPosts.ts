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
    title: "Custo de um chatbot de WhatsApp para pequenas empresas",
    excerpt: "Saiba como calcular o custo real de implementar um chatbot de WhatsApp no seu negócio.",
    category: "Atendimento",
    coverImage: "",
    coverImageAlt: "Custo de um chatbot de WhatsApp para pequenas empresas",
    publishedAt: "2026-08-10",
    content: [
      { type: "paragraph", text: "Para as pequenas empresas, a decisão de implantar um chatbot de WhatsApp pode parecer complicada. Além da escolha do modelo e da personalização, há o custo a ser considerado." },
      { type: "heading", text: "O que afeta o preço do desenvolvimento de um chatbot" },
      { type: "paragraph", text: "O custo de um chatbot de WhatsApp pode variar dependendo de vários fatores, como a complexidade da lógica de negócios e a necessidade de integração com outros sistemas." },
      { type: "list", items: ["Complexidade da lógica de negócios","Necessidade de integração com outros sistemas","Personalização do chatbot"] },
      { type: "heading", text: "Desenvolvimento sob medida" },
      { type: "paragraph", text: "A CODEXY desenvolve soluções personalizadas para cada cliente, considerando as necessidades específicas de sua empresa. Isso significa que o custo do chatbot pode variar dependendo dos requisitos do projeto." },
      { type: "heading", text: "Como calcular o custo real" },
      { type: "paragraph", text: "Para calcular o custo real de um chatbot de WhatsApp, é preciso considerar os recursos necessários para a sua implementação e manutenção." },
    ],
    faq: [
      { question: "O desenvolvimento de um chatbot é caro?", answer: "Sim, mas o investimento pode ser recuperado com a melhoria na experiência do cliente e redução nos custos de atendimento." },
      { question: "Posso criar um chatbot de WhatsApp sozinho?", answer: "Sim, mas isso pode exigir conhecimentos técnicos avançados e tempo significativo para desenvolver e manter o sistema." },
      { question: "O que é o melhor modelo para minha empresa?", answer: "Isso depende das necessidades específicas da sua empresa. É recomendável consultar um especialista em tecnologia de informação para obter uma solução personalizada." },
    ],
    source: { label: "A Crítica", url: "https://news.google.com/rss/articles/CBMisAFBVV95cUxNeFBYSTgtUkdaZTZlaTAtRjcxTEs4QTVIdDZaZGZLb3dmcVlSbl9XVjI0M056Sy1HbU5DSVp5aFFEbkRKSWR4cHpDeFVIdzl4TE1iU1RITU5XbENTTzJJcDI3a3ZuNV8zczZGemwwaWVrdkRGV29lbFhMT2tQVDRSV0c1dDBkTkxFZ3RxdzFqQVVBMXBwS0g5RjdLM3ZLTmE0bG1EZWU4N2RXeXRjNHFOTNIBsAFBVV95cUxNeFBYSTgtUkdaZTZlaTAtRjcxTEs4QTVIdDZaZGZLb3dmcVlSbl9XVjI0M056Sy1HbU5DSVp5aFFEbkRKSWR4cHpDeFVIdzl4TE1iU1RITU5XbENTTzJJcDI3a3ZuNV8zczZGemwwaWVrdkRGV29lbFhMT2tQVDRSV0c1dDBkTkxFZ3RxdzFqQVVBMXBwS0g5RjdLM3ZLTmE0bG1EZWU4N2RXeXRjNHFOTA?oc=5" },
    seo: { title: "Custo de um chatbot de WhatsApp para pequenas empresas | Blog CODEXY", description: "Saiba como calcular o custo real de implementar um chatbot de WhatsApp no seu negócio." },
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
