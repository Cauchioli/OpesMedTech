import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsShowcaseSection from "@/components/ProductsShowcaseSection";
import FeaturesSection from "@/components/FeaturesSection";
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

        {/* 3. Hub Central Unificado: Recursos, Telas do Sistema e Planos por Especialidade */}
        <FeaturesSection />

        {/* 4. Produtividade: Antes e Depois da IA */}
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
