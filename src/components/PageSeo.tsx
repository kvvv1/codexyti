import { Helmet } from "react-helmet-async";

const SITE_URL = "https://codexy.com.br";

interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
}

const PageSeo = ({
  title,
  description,
  path,
  keywords,
  image = "/logo.png",
  imageAlt = "CODEXY",
  noIndex = false,
}: PageSeoProps) => {
  const pageUrl = path ? new URL(path, SITE_URL).toString() : undefined;
  const imageUrl = new URL(image, SITE_URL).toString();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      {pageUrl && <meta property="og:url" content={pageUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {pageUrl && <link rel="canonical" href={pageUrl} />}
    </Helmet>
  );
};

export default PageSeo;
