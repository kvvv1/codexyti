import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppProviders, AppRoutes } from "./App";
import { landingPages } from "./data/landingPages";

export const prerenderRoutes = [
  "/",
  "/politica-privacidade",
  "/termos-uso",
  "/cookies",
  ...landingPages.map((page) => `/informacoes/${page.slug}`),
  "/parceiros/doctorchatbot",
  "/404",
];

// React warns about useLayoutEffect on the server (Radix/shadcn components use it);
// Server rendering never runs effects, so the warning is noise, not a real issue.
React.useLayoutEffect = React.useEffect;

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <AppProviders>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </AppProviders>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}
