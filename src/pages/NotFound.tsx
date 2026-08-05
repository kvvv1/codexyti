import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageSeo from "@/components/PageSeo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <PageSeo
        title="Página não encontrada | CODEXY"
        description="A página solicitada não foi encontrada. Acesse a página inicial da CODEXY para conhecer nossas soluções digitais."
        noIndex
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Página não encontrada</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Voltar para o início
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
