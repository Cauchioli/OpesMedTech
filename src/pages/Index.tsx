import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsShowcaseSection from "@/components/ProductsShowcaseSection";
import CredibilitySection from "@/components/CredibilitySection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DudaWhatsAppFloating from "@/components/DudaWhatsAppFloating";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsShowcaseSection />
        <CredibilitySection />
        <BeforeAfterSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <DudaWhatsAppFloating specialtyContext="Geral" />
    </div>
  );
};

export default Index;
