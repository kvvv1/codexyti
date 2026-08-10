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
