import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const ssrEntryPath = path.resolve(__dirname, "../dist-ssr/entry-server.js");
const templatePath = path.join(distDir, "index.html");

const { render, prerenderRoutes } = await import(pathToFileURL(ssrEntryPath).href);
const template = fs.readFileSync(templatePath, "utf-8");

// Tags that exist once in index.html for the homepage; each prerendered
// route injects its own version of these, so the generic ones must go first.
const STATIC_TAG_PATTERNS = [
  /<title>[\s\S]*?<\/title>\n?/,
  /<meta name="description"[^>]*>\n?/,
  /<meta name="keywords"[^>]*>\n?/,
  /<meta property="og:[^>]*>\n?/g,
  /<meta name="twitter:[^>]*>\n?/g,
  /<link rel="canonical"[^>]*>\n?/,
];

function stripStaticHeadTags(html) {
  return STATIC_TAG_PATTERNS.reduce((result, pattern) => result.replace(pattern, ""), html);
}

for (const route of prerenderRoutes) {
  const { html, helmet } = render(route);

  const headTags = [
    helmet?.title.toString(),
    helmet?.meta.toString(),
    helmet?.link.toString(),
    helmet?.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");

  const pageHtml = stripStaticHeadTags(template)
    .replace("</head>", `    ${headTags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outDir = path.join(distDir, route.replace(/^\//, ""));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), pageHtml, "utf-8");
  console.log(`Prerendered ${route} -> dist${route}/index.html`);
}
