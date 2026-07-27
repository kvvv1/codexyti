import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InformacoesNavbar from "@/components/landing/InformacoesNavbar";
import { getLandingPageBySlug } from "@/data/landingPages";
import { openWhatsApp } from "@/lib/whatsapp";

const SITE_URL = "https://codexy.com.br";

const InformacoesLandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = getLandingPageBySlug(slug);

  if (!page) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <NotFound />
      </>
    );
  }

  const pageUrl = `${SITE_URL}/informacoes/${page.slug}/`;
  const ogImageUrl = new URL(page.seo.ogImage ?? "/logo.png", SITE_URL).toString();

  return (
    <>
      <Helmet>
        <title>{page.seo.title}</title>
        <meta name="description" content={page.seo.description} />
        <meta
          name="keywords"
          content={`${page.service}, ${page.niche}, ${page.stateLabel}, whatsapp, automação`}
        />

        <meta property="og:title" content={page.seo.title} />
        <meta property="og:description" content={page.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={page.heroImageAlt} />
        <meta property="og:url" content={pageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.seo.title} />
        <meta name="twitter:description" content={page.seo.description} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:alt" content={page.heroImageAlt} />

        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <InformacoesNavbar onWhatsAppClick={() => openWhatsApp(page.whatsappMessage)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 hidden md:block">
          <img
            src={page.heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-primary/15" />
        </div>

        <div className="container relative mx-auto px-4 py-10 sm:px-6 sm:py-16 md:min-h-[590px]">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver todos os serviços
            </a>
            <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-white/15 text-white font-semibold text-xs sm:text-sm">
              <MapPin className="w-3.5 h-3.5" />
              {page.niche.toUpperCase()} · {page.stateUf}
            </span>
          </div>

          <div className="grid items-center md:grid-cols-2">
            <div className="max-w-2xl text-center md:text-left">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/15 text-white font-semibold text-sm">
              {page.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              {page.headline}
            </h1>
            <p className="mb-10 max-w-xl text-lg text-white/85 sm:text-xl md:mx-0">
              {page.subheadline}
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="px-6 sm:px-8 py-4 sm:py-6 tech-glow group text-base sm:text-lg font-semibold"
              onClick={() => openWhatsApp(page.whatsappMessage)}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Falar no WhatsApp
            </Button>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-primary/30 md:hidden">
              <img
                src={page.heroImage}
                alt={page.heroImageAlt}
                width="1536"
                height="1024"
                loading="eager"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <p className="text-base sm:text-lg text-tech-gray leading-relaxed">
            {page.introParagraph}
          </p>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-primary">
            Desafios comuns em {page.niche.toLowerCase()}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {page.painPoints.map((item) => (
              <Card key={item.title} className="tech-card border-0">
                <CardContent className="p-6 flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-tech-gray">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-primary">
            O que o chatbot resolve
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {page.benefits.map((item) => (
              <Card key={item.title} className="tech-card border-0">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-tech-gray">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {page.partner && (
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-primary-glow/80 to-primary p-8 shadow-2xl shadow-primary/30 sm:p-12">
              <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_85%_20%,rgba(0,85,255,0.45),transparent_32%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:100%_100%,48px_48px,48px_48px]" />
              <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                    <ShieldCheck className="h-4 w-4" />
                    {page.partner.eyebrow}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                    {page.partner.title}
                  </h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
                    {page.partner.description}
                  </p>
                  <a
                    href={page.partner.detailsPath}
                    className="mt-5 inline-flex text-sm font-semibold text-accent-glow transition-colors hover:text-white"
                  >
                    Entenda a parceria entre CODEXY e {page.partner.name}
                  </a>
                </div>

                <Button asChild size="lg" variant="secondary" className="font-semibold">
                  <a href={page.partner.url} target="_blank" rel="noopener">
                    {page.partner.ctaLabel}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-primary">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible>
            {page.faq.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-tech-gray">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">
            Pronto para automatizar o atendimento de {page.niche.toLowerCase()} em {page.stateLabel}?
          </h2>
          <p className="text-tech-gray mb-8 max-w-2xl mx-auto">
            Fale agora com a CODEXY e veja como implantar um chatbot no WhatsApp
            para {page.niche.toLowerCase()} em {page.stateLabel}.
          </p>
          <Button
            size="lg"
            className="px-6 sm:px-8 py-4 sm:py-6 tech-glow group text-base sm:text-lg font-semibold"
            onClick={() => openWhatsApp(page.whatsappMessage)}
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Enviar Mensagem no WhatsApp
          </Button>
        </div>
      </section>

      <Footer />

      <button
        type="button"
        aria-label="Falar no WhatsApp"
        onClick={() => openWhatsApp(page.whatsappMessage)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </>
  );
};

export default InformacoesLandingPage;
