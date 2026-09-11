import React from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  Users,
  Cloud,
  ShieldCheck,
  Brain,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsShowcaseSection: React.FC = () => {
  return (
    <section id="produtos" className="section-padding bg-background relative pt-6 md:pt-10">
      <div className="container-custom">
        {/* Section Header matching Reference */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-2 tracking-tight">
            Escolha a sua jornada
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Soluções pensadas para cada fase da vida e para cada profissional da saúde.
          </p>
        </div>

        {/* 2 Main Product Cards Grid matching Reference */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-14 items-stretch">
          {/* Card 1: OPES PEDIATRA */}
          <div className="relative rounded-3xl p-8 sm:p-10 lg:p-11 bg-gradient-to-br from-sky-50 via-blue-50/40 to-white border border-sky-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header with Icon and Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 shadow-xs border border-sky-200/60">
                  <Baby size={34} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 bg-clip-text text-transparent leading-tight tracking-tight">
                    OPES PEDIATRA
                  </h3>
                </div>
              </div>

              {/* Subtitle matching reference */}
              <h4 className="text-sm sm:text-base font-bold text-foreground/90 mb-3">
                Tudo que o pediatra precisa, em um só lugar
              </h4>

              {/* Description matching reference */}
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                Prontuário completo, transcrição de voz com IA, acompanhamento do crescimento, prescrição, exames, atestados e muito mais.
              </p>
            </div>

            {/* Pill Action Button */}
            <div className="pt-2">
              <Button
                asChild
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs sm:text-sm px-8 h-12 shadow-md transition-all hover:scale-102"
              >
                <Link to="/pediatria">
                  Acessar Opes Pediatra
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Card 2: OPES ESPECIALIDADES */}
          <div className="relative rounded-3xl p-8 sm:p-10 lg:p-11 bg-gradient-to-br from-purple-50 via-violet-50/40 to-white border border-purple-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header with Icon and Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 shadow-xs border border-purple-200/60">
                  <Users size={34} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black bg-gradient-to-r from-purple-600 via-violet-600 to-violet-800 bg-clip-text text-transparent leading-tight tracking-tight">
                    OPES ESPECIALIDADES
                  </h3>
                </div>
              </div>

              {/* Subtitle matching reference */}
              <h4 className="text-sm sm:text-base font-bold text-foreground/90 mb-3">
                Para diversos profissionais que cuidam de pessoas
              </h4>

              {/* Description matching reference */}
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                Soluções práticas para Enfermagem, Terapia Ocupacional e Psicologia, com foco em produtividade, organização e acompanhamento.
              </p>
            </div>

            {/* Pill Action Button */}
            <div className="pt-2">
              <Button
                asChild
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-bold text-xs sm:text-sm px-8 h-12 shadow-md transition-all hover:scale-102"
              >
                <Link to="/terapia-ocupacional">
                  Acessar Opes Especialidades
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Badges Bar matching Reference */}
        <div className="max-w-5xl mx-auto pt-6 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 items-center">
            {/* Pillar 1 */}
            <div className="flex items-center gap-3 p-2">
              <div className="w-9 h-9 rounded-full bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 flex-shrink-0">
                <Cloud size={18} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-foreground leading-tight">
                  100%
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight">
                  na nuvem
                </span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3 p-2">
              <div className="w-9 h-9 rounded-full bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 flex-shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-foreground leading-tight">
                  Seguro
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight">
                  e em conformidade com a LGPD
                </span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3 p-2">
              <div className="w-9 h-9 rounded-full bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-600 flex-shrink-0">
                <Brain size={18} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-foreground leading-tight">
                  Inteligência Artificial
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight">
                  a favor do cuidado
                </span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-center gap-3 p-2">
              <div className="w-9 h-9 rounded-full bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-600 flex-shrink-0">
                <Heart size={18} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-foreground leading-tight">
                  Feito por quem
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight">
                  acredita em um futuro mais saudável
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcaseSection;
