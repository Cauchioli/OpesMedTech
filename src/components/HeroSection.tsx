import React from "react";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImageOficial from "@/assets/hero-medica-menino-oficial.png";

const HeroSection: React.FC = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de falar com a consultora da Opes Medtech para entender a plataforma.");

  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-white flex items-center">
      {/* Imagem de Fundo Grande Sem Bordas (Full Bleed) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <img
          src={heroImageOficial}
          alt="Médica pediatra examinando criança sorridente na Opes Medtech"
          className="w-full h-full object-cover object-[78%_center] lg:object-right"
        />
        {/* Gradiente suave na esquerda para garantir leitura perfeita dos textos em qualquer resolução */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/80 to-transparent lg:w-1/2" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:pl-16 xl:pl-20 lg:pr-8 relative z-10">
        <div className="max-w-xl lg:max-w-2xl text-left space-y-5">
          {/* Tag matching reference */}
          <div className="inline-block">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
              BEM-VINDO À OPES MEDTECH
            </span>
          </div>

          {/* Headline matching reference */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gestão inteligente
            </span>{" "}
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              para suas consultas
            </span>
          </h1>

          {/* Subhead matching reference */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Nossa Inteligência Artificial otimiza sua rotina clínica infantil para que você dedique mais tempo ao que realmente importa: um atendimento humano e acolhedor.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 hover:opacity-95 text-white shadow-md font-bold px-7 h-12 text-xs sm:text-sm"
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
              className="rounded-full bg-white/80 backdrop-blur-xs border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 font-bold px-6 h-12 text-xs sm:text-sm shadow-xs"
              asChild
            >
              <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare size={15} className="mr-2 text-emerald-500" />
                Falar com a Consultora
              </a>
            </Button>
          </div>

          <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Sem fidelidade
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Sem cartão de crédito
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              15 dias liberados
            </span>
          </div>

          {/* Floating Highlight Pill Badge */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-sky-100 shadow-sm">
              <div className="w-7 h-7 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                <Sparkles size={14} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-foreground leading-tight">
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

      {/* Wave Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
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
