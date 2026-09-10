import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsShowcaseSection from "@/components/ProductsShowcaseSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlatformActionSection from "@/components/PlatformActionSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import AboutSection from "@/components/AboutSection";
import CredibilitySection from "@/components/CredibilitySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DudaWhatsAppFloating from "@/components/DudaWhatsAppFloating";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <main>
        {/* 1. Hero com Foto Oficial */}
        <HeroSection />

        {/* 2. Escolha a sua Jornada + Barra de Confiança */}
        <ProductsShowcaseSection />

        {/* 3. Hub Central: Recursos e Preços Contextualizados (Pediatria x Especialidades) */}
        <FeaturesSection />

        {/* 4. Veja a Plataforma em Ação: Telas Reais com Filtro por Especialidade */}
        <PlatformActionSection />

        {/* 5. Produtividade: Antes e Depois da IA */}
        <BeforeAfterSection />

        {/* 5. Sobre a Opes MedTech (Reposicionada mais abaixo) */}
        <AboutSection />

        {/* 6. Credibilidade e Conformidade */}
        <CredibilitySection />

        {/* 7. Perguntas Frequentes */}
        <FAQSection />

        {/* 8. Chamada Final */}
        <CTASection />
      </main>
      <Footer />
      <DudaWhatsAppFloating specialtyContext="Geral" />
    </div>
  );
};

export default Index;
