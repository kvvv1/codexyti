import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { landingPages } from "../src/data/landingPages";

const SITE_URL = "https://codexy.com.br";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

const staticRoutes: { path: string; priority: string }[] = [
  { path: "/", priority: "1.0" },
  { path: "/politica-privacidade", priority: "0.3" },
  { path: "/termos-uso", priority: "0.3" },
  { path: "/cookies", priority: "0.3" },
  { path: "/parceiros/doctorchatbot/", priority: "0.8" },
];

const landingRoutes = landingPages.map((page) => ({
  path: `/informacoes/${page.slug}/`,
  priority: "0.8",
}));

const urls = [...staticRoutes, ...landingRoutes]
  .map(
    ({ path: routePath, priority }) => `  <url>
    <loc>${SITE_URL}${routePath}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf-8");
console.log(`Generated sitemap.xml with ${staticRoutes.length + landingRoutes.length} URLs`);
