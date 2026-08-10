import { Helmet } from "react-helmet-async";
import { CalendarDays } from "lucide-react";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import InformacoesNavbar from "@/components/landing/InformacoesNavbar";
import { getAllBlogPosts, FALLBACK_COVER } from "@/data/blogPosts";
import { openWhatsApp } from "@/lib/whatsapp";

const SITE_URL = "https://codexy.com.br";
const DEFAULT_WHATSAPP_MESSAGE = "Olá! Vi o blog da CODEXY e quero saber mais sobre automação de atendimento.";

const BlogIndex = () => {
  const posts = getAllBlogPosts();
  const pageUrl = `${SITE_URL}/blog/`;

  return (
    <>
      <Helmet>
        <title>Blog CODEXY — automação e WhatsApp para empresas</title>
        <meta
          name="description"
          content="Conteúdo sobre atendimento automatizado, chatbots de WhatsApp e tecnologia para pequenas e médias empresas."
        />
        <meta property="og:title" content="Blog CODEXY" />
        <meta
          property="og:description"
          content="Conteúdo sobre atendimento automatizado, chatbots de WhatsApp e tecnologia para pequenas e médias empresas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog CODEXY" />
        <meta
          name="twitter:description"
          content="Conteúdo sobre atendimento automatizado, chatbots de WhatsApp e tecnologia para pequenas e médias empresas."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <InformacoesNavbar onWhatsAppClick={() => openWhatsApp(DEFAULT_WHATSAPP_MESSAGE)} />

      <section className="bg-gradient-primary py-16 text-white sm:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Automação, WhatsApp e atendimento — direto ao ponto, sem enrolação.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {posts.length === 0 ? (
            <p className="text-center text-tech-gray">Em breve, novos posts por aqui.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="tech-card group flex flex-col overflow-hidden rounded-2xl border-0"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.coverImage || FALLBACK_COVER}
                      alt={post.coverImageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <Badge variant="secondary" className="w-fit">
                      {post.category}
                    </Badge>
                    <h2 className="text-lg font-semibold text-primary">{post.title}</h2>
                    <p className="flex-1 text-sm text-tech-gray">{post.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-xs text-tech-gray/80">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {new Date(post.publishedAt + "T00:00:00").toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogIndex;
