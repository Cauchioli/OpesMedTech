import React from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Activity,
  CheckCircle,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsShowcaseSection: React.FC = () => {
  const consultoraWhatsAppPediatria =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de testar o Opes Pediatra por 15 dias e entender os planos para médicos.");

  const consultoraWhatsAppEspecialidades =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Quero saber mais sobre o Opes Especialidades (R$ 199) para meu consultório ou clínica.");

  return (
    <section id="produtos" className="section-padding bg-background relative">
      <div className="container-custom">
        {/* Section Header Clean */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            SOLUÇÕES ESPECIALIZADAS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
            Escolha a plataforma ideal para sua prática clínica
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Desenvolvido para a rotina do médico pediatra e dos especialistas em desenvolvimento infantil
          </p>
        </div>

        {/* 2 Main Product Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card 1: Opes Pediatra */}
          <div className="relative rounded-2xl p-6 sm:p-7 bg-card border-2 border-primary shadow-lg flex flex-col justify-between overflow-hidden">
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3.5 py-1 rounded-bl-xl text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <Sparkles size={11} />
              Médicos (CRM)
            </div>

            <div>
              {/* Product Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Opes Pediatra
                  </h3>
                  <p className="text-xs text-primary font-semibold">
                    Software Médico Especializado para Pediatras
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                A plataforma médica mais completa para consultórios e clínicas de pediatria. Elimina a digitação manual, automatiza cálculos antropométricos e organiza toda a rotina clínica.
              </p>

              {/* Pricing Highlight */}
              <div className="bg-primary/5 rounded-xl p-3 mb-4 border border-primary/15 flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] text-muted-foreground font-medium block">Plano Individual Médico:</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-semibold text-foreground">R$</span>
                    <span className="text-3xl font-extrabold text-primary">299</span>
                    <span className="text-xs text-muted-foreground">/mês</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                    15% OFF no Anual (R$ 254/mês)
                  </span>
                  <span className="text-[10px] text-muted-foreground block mt-0.5">1 Médico + 1 Assistente inclusa</span>
                </div>
              </div>

              {/* Feature Highlights Clean with Exact Copy */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90 mb-5">
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Curvas OMS e CDC:</strong> Geração automática de gráficos de peso, estatura e IMC compartilháveis no WhatsApp dos pais.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Controle Vacinal SBP:</strong> Mantenha o histórico de vacinação atualizado e mantenha controle de doses atrasadas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Análise Preditiva:</strong> IA para otimizar decisões médicas baseadas no histórico das consultas e exames do paciente.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Transcrição de Consulta com IA:</strong> Economize 70% do tempo de digitação apenas conversando com os pais.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Prescrição Digital Integrada (Memed):</strong> Emissão de receitas com assinatura digital válida em todo o Brasil.
                  </span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="pt-3 border-t border-border space-y-2">
              <div className="grid sm:grid-cols-2 gap-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-primary font-semibold text-xs h-9"
                >
                  <Link to="/pediatria">
                    Ver Página da Pediatria
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full text-xs font-semibold border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 h-9"
                >
                  <a href={consultoraWhatsAppPediatria} target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={14} className="mr-1 text-emerald-500" />
                    Falar com a Consultora
                  </a>
                </Button>
              </div>

              <div className="text-center">
                <a
                  href="https://www.opespediatra.com/login"
                  className="text-[11px] text-muted-foreground hover:text-primary font-medium underline"
                >
                  Ou inicie seu teste grátis de 15 dias sem cartão agora →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Opes Especialidades */}
          <div className="relative rounded-2xl p-6 sm:p-7 bg-card border-2 border-primary/50 shadow-lg flex flex-col justify-between overflow-hidden">
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-primary/90 text-primary-foreground px-3.5 py-1 rounded-bl-xl text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <Activity size={11} />
              TO • Psicologia • Enfermagem
            </div>

            <div>
              {/* Product Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Activity size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Opes Especialidades
                  </h3>
                  <p className="text-xs text-primary font-semibold">
                    Para Terapeutas, Psicólogos e Enfermagem
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                Prontuário sob medida focado em anotações clínicas, evolução terapêutica, saúde mental e laudos ágeis.
              </p>

              {/* Pricing Highlight */}
              <div className="bg-primary/5 rounded-xl p-3 mb-4 border border-primary/15 flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] text-muted-foreground font-medium block">Plano Individual Especialista:</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-semibold text-foreground">R$</span>
                    <span className="text-3xl font-extrabold text-primary">199</span>
                    <span className="text-xs text-muted-foreground">/mês</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                    15% OFF no Anual (R$ 169/mês)
                  </span>
                  <span className="text-[10px] text-muted-foreground block mt-0.5">1 Especialista + 1 Assistente inclusa</span>
                </div>
              </div>

              {/* Vertical Badges Links */}
              <div className="mb-4">
                <div className="grid grid-cols-3 gap-2">
                  <Link
                    to="/terapia-ocupacional"
                    className="p-2 rounded-lg bg-muted/70 hover:bg-primary/10 hover:border-primary/40 border border-border text-center transition-all group"
                  >
                    <span className="block text-xs font-bold text-foreground group-hover:text-primary">
                      Terapia Ocupacional
                    </span>
                    <span className="text-[10px] text-muted-foreground">CREFITO</span>
                  </Link>
                  <Link
                    to="/psicologia"
                    className="p-2 rounded-lg bg-muted/70 hover:bg-primary/10 hover:border-primary/40 border border-border text-center transition-all group"
                  >
                    <span className="block text-xs font-bold text-foreground group-hover:text-primary">
                      Psicologia Infantil
                    </span>
                    <span className="text-[10px] text-muted-foreground">CRP</span>
                  </Link>
                  <Link
                    to="/enfermagem"
                    className="p-2 rounded-lg bg-muted/70 hover:bg-primary/10 hover:border-primary/40 border border-border text-center transition-all group"
                  >
                    <span className="block text-xs font-bold text-foreground group-hover:text-primary">
                      Enfermagem e Fisio
                    </span>
                    <span className="text-[10px] text-muted-foreground">COREN/CREFITO</span>
                  </Link>
                </div>
              </div>

              {/* Feature Highlights Clean with Exact Copy */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90 mb-5">
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Anotações Clínicas Online:</strong> Registro ágil e seguro da evolução terapêutica de cada sessão.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Avaliação de Neurodesenvolvimento:</strong> Instrumentos validados para rastrear marcos motores, cognitivos e comportamentais.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Transcrição de Voz com IA:</strong> Dite as observações e receba relatórios clínicos estruturados.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Saúde Mental e Terapias:</strong> Planos terapêuticos e acompanhamento de perfis sensoriais.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Agendamento Integrado e Atestados:</strong> Controle de sessões, presenças, faltas e emissão de atestados clínicos.
                  </span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="pt-3 border-t border-border space-y-2">
              <div className="grid sm:grid-cols-2 gap-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-primary text-primary-foreground font-semibold text-xs h-9"
                >
                  <Link to="/terapia-ocupacional">
                    Explorar Especialidades
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full text-xs font-semibold border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 h-9"
                >
                  <a href={consultoraWhatsAppEspecialidades} target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={14} className="mr-1 text-emerald-500" />
                    Falar com a Consultora
                  </a>
                </Button>
              </div>

              <div className="text-center">
                <a
                  href="https://www.opespediatra.com/login"
                  className="text-[11px] text-muted-foreground hover:text-primary font-medium underline"
                >
                  Cadastre-se com seu conselho profissional e teste por 15 dias grátis →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcaseSection;
