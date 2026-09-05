import React from "react";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pediatra-crianca.jpg";

const HeroSection: React.FC = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de falar com a consultora da Opes Medtech para entender a plataforma.");

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white">
      {/* Soft Background Accents */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 left-0 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 text-left space-y-5">
            {/* Tag matching reference */}
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                BEM-VINDO À OPES MEDTECH
              </span>
            </div>

            {/* Headline matching reference */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tecnologia
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                para uma saúde
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                infantil completa
              </span>
            </h1>

            {/* Subhead matching reference */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
              Soluções em nuvem com inteligência artificial para pediatras e profissionais da saúde infantil. Mais tempo para o que realmente importa.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 hover:opacity-95 text-white shadow-md font-bold px-7 h-11 text-xs sm:text-sm"
                asChild
              >
                <a href="https://www.opespediatra.com/login">
                  Começar Teste de 15 Dias
                  <ArrowRight size={15} className="ml-2" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 font-bold px-6 h-11 text-xs sm:text-sm"
                asChild
              >
                <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={15} className="mr-2 text-emerald-500" />
                  Falar com a Consultora
                </a>
              </Button>
            </div>

            <div className="pt-1 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Sem fidelidade
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Sem cartão de crédito
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Pediatrician and Child */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            {/* Organic Brand Shape Backdrop */}
            <div className="relative w-full max-w-lg aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-sky-100/60 to-purple-100/60">
              <img
                src={heroImage}
                alt="Pediatra examinando criança sorridente na Opes Medtech"
                className="w-full h-full object-cover object-center"
              />

              {/* Floating Highlight Pill Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-sky-100 shadow-lg flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={14} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-foreground leading-tight">
                    IA Preditiva & Não Intrusiva
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Menos digitação e mais atenção ao paciente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 text-background fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,30 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
