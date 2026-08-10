import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CalendarDays, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InformacoesNavbar from "@/components/landing/InformacoesNavbar";
import { getBlogPostBySlug, getOtherPosts, FALLBACK_COVER } from "@/data/blogPosts";
import { openWhatsApp } from "@/lib/whatsapp";

const SITE_URL = "https://codexy.com.br";
const DEFAULT_WHATSAPP_MESSAGE = "Olá! Li um post do blog da CODEXY e quero saber mais sobre automação de atendimento.";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <NotFound />
      </>
    );
  }

  const otherPosts = getOtherPosts(post.slug);
  const pageUrl = `${SITE_URL}/blog/${post.slug}/`;
  const ogImageUrl = new URL(post.seo.ogImage ?? post.coverImage ?? "/logo.png", SITE_URL).toString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seo.description,
    datePublished: post.publishedAt,
    image: ogImageUrl,
    publisher: { "@type": "Organization", name: "CODEXY" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  const faqSchema = post.faq && post.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <Helmet>
        <title>{post.seo.title}</title>
        <meta name="description" content={post.seo.description} />

        <meta property="og:title" content={post.seo.title} />
        <meta property="og:description" content={post.seo.description} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={post.coverImageAlt} />
        <meta property="og:url" content={pageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo.title} />
        <meta name="twitter:description" content={post.seo.description} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:alt" content={post.coverImageAlt} />

        <link rel="canonical" href={pageUrl} />

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <InformacoesNavbar onWhatsAppClick={() => openWhatsApp(DEFAULT_WHATSAPP_MESSAGE)} />

      <section className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0">
          <img
            src={post.coverImage || FALLBACK_COVER}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/40" />
        </div>
        <div className="container relative mx-auto px-4 py-14 sm:px-6 sm:py-20">
          <a
            href="/blog/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar pro blog
          </a>
          <Badge variant="secondary" className="mb-4 w-fit">
            {post.category}
          </Badge>
          <h1 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {new Date(post.publishedAt + "T00:00:00").toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            {post.source && (
              <span>
                Inspirado em{" "}
                <a
                  href={post.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/40 underline-offset-2 hover:text-white"
                >
                  {post.source.label}
                </a>
              </span>
            )}
          </div>
        </div>
      </section>

      <article className="bg-background py-12 sm:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          {post.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2 key={index} className="mb-4 mt-10 text-2xl font-bold text-primary first:mt-0">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={index} className="mb-4 list-disc space-y-2 pl-6 text-tech-gray">
                  {block.items?.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="mb-4 leading-relaxed text-tech-gray">
                {block.text}
              </p>
            );
          })}

          <div className="mt-12 rounded-2xl bg-secondary/50 p-8 text-center">
            <h2 className="mb-3 text-xl font-bold text-primary">
              Quer automatizar o atendimento da sua empresa?
            </h2>
            <p className="mb-6 text-tech-gray">
              A CODEXY implanta chatbot de WhatsApp pronto pra atender seus clientes 24h.
            </p>
            <Button
              size="lg"
              className="tech-glow group font-semibold"
              onClick={() => openWhatsApp(DEFAULT_WHATSAPP_MESSAGE)}
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Falar no WhatsApp
            </Button>
          </div>

          {post.faq && post.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-primary">Perguntas frequentes</h2>
              <Accordion type="single" collapsible>
                {post.faq.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-tech-gray">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="bg-secondary/50 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="mb-8 text-lg font-semibold text-primary">Leia também</h2>
            <div className="flex flex-wrap gap-3">
              {otherPosts.map((other) => (
                <a
                  key={other.slug}
                  href={`/blog/${other.slug}/`}
                  className="rounded-full border border-primary/20 bg-background px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  {other.title}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default BlogPost;
