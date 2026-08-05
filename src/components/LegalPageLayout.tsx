import { ReactNode } from "react";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";
import logo from "/logo.png";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface LegalPageLayoutProps {
  title: string;
  seoTitle: string;
  description: string;
  path: string;
  keywords: string;
  children: ReactNode;
}

const LegalPageLayout = ({
  title,
  seoTitle,
  description,
  path,
  keywords,
  children,
}: LegalPageLayoutProps) => (
  <>
    <PageSeo
      title={seoTitle}
      description={description}
      path={path}
      keywords={keywords}
      imageAlt={`CODEXY - ${title}`}
    />
    <nav className="w-full bg-background/80 border-b border-tech-gray-light py-6 mb-8 shadow-sm">
      <div className="container mx-auto px-6 flex flex-col items-center gap-2">
        <a href="/" className="flex items-center justify-center">
          <img src={logo} alt="Logo Codexy" className="h-12 w-auto" />
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="mt-2 text-lg font-semibold text-primary hover:text-accent transition-colors"
              >
                Início
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
    <section className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">{title}</h1>
        {children}
      </div>
    </section>
    <Footer />
  </>
);

export default LegalPageLayout;
