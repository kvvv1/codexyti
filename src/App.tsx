import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type { ReactNode } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/politica-privacidade";
import TermosUso from "./pages/termos-uso";
import Cookies from "./pages/cookies";
import InformacoesLandingPage from "./pages/InformacoesLandingPage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import ParceiroDoctorChatbot from "./pages/ParceiroDoctorChatbot";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton";

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

export const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="/termos-uso" element={<TermosUso />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/parceiros/doctorchatbot" element={<ParceiroDoctorChatbot />} />
      <Route path="/informacoes/:slug" element={<InformacoesLandingPage />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <WhatsAppFloatButton />
  </>
);

const App = () => (
  <HelmetProvider>
    <AppProviders>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProviders>
  </HelmetProvider>
);

export default App;
