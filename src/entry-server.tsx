import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppRoutes } from "./App";
import { landingPages } from "./data/landingPages";

export const prerenderRoutes = [
  ...landingPages.map((page) => `/informacoes/${page.slug}`),
  "/parceiros/doctorchatbot",
];

// React warns about useLayoutEffect on the server (Radix/shadcn components use it);
// renderToStaticMarkup never runs effects, so the warning is noise, not a real issue.
React.useLayoutEffect = React.useEffect;

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToStaticMarkup(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}
