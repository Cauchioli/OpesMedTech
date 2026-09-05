import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Bot,
  Mic, 
  Calendar, 
  Syringe, 
  LineChart, 
  Pill, 
  FileText, 
  Brain, 
  BarChart3,
  Stethoscope,
  Activity,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import platformGraficos from "@/assets/platform-graficos.jpg";
import platformSaudeMental from "@/assets/platform-saude-mental.png";
import platformDashboard from "@/assets/platform-dashboard.jpg";
import logoOpesEspecialidades from "@/assets/logo-opes-especialidades.jpg";

type MainProductTab = "pediatria" | "especialidades";
type SpecialtySubTab = "to" | "psicologia" | "enfermagem";

const FeaturesSection = () => {
  const [activeProduct, setActiveProduct] = useState<MainProductTab>("pediatria");
  const [activeSpecialty, setActiveSpecialty] = useState<SpecialtySubTab>("to");

  return (
    <section id="funcionalidades" className="section-padding bg-gradient-to-b from-white via-sky-50/20 to-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2 border border-primary/20">
            <Sparkles size={13} />
            EXPLORE A PLATAFORMA EM DETALHES
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Tudo o que você precisa na sua rotina clínica
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Alterne entre os ecossistemas abaixo para conhecer as ferramentas e fluxos de atendimento pensados para a sua profissão.
          </p>
        </div>

        {/* Master Product Switcher (Botãozinho Comutador Principal) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-muted border border-border max-w-md w-full shadow-inner">
            <button
              onClick={() => setActiveProduct("pediatria")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeProduct === "pediatria"
                  ? "bg-white text-sky-700 shadow-md border border-sky-100 scale-102"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Stethoscope size={16} className="text-sky-600" />
              <span>Opes Pediatra (CRM)</span>
            </button>

            <button
              onClick={() => setActiveProduct("especialidades")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeProduct === "especialidades"
                  ? "bg-white text-purple-700 shadow-md border border-purple-100 scale-102"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Activity size={16} className="text-purple-600" />
              <span>Opes Especialidades</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Panel */}
        {activeProduct === "pediatria" ? (
          /* ========================================================================= */
          /* ABA OPES PEDIATRA (VISÃO COMPLETA PARA MÉDICOS)                           */
          /* ========================================================================= */
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-10 shadow-lg relative overflow-hidden animate-in fade-in duration-300">
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Features List */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Stethoscope size={13} />
                    Para Consultórios e Clínicas de Pediatria
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
                    Ecossistema Completo para o Médico Pediatra
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Projetado para poupar horas de digitação e trazer precisão clínica com curvas antropométricas automáticas, gestão de vacinas e inteligência artificial preditiva.
                  </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100/80">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-200/60 text-sky-700 flex items-center justify-center">
                        <Bot size={15} />
                      </div>
                      <h4 className="text-xs font-bold text-foreground">Análise Preditiva com IA</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Decisões médicas guiadas por IA com base no histórico das consultas e exames do paciente.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100/80">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-200/60 text-sky-700 flex items-center justify-center">
                        <LineChart size={15} />
                      </div>
                      <h4 className="text-xs font-bold text-foreground">Curvas de Crescimento OMS/CDC</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Cálculo automático de percentis e escores z compartilháveis direto no WhatsApp dos pais.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100/80">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-200/60 text-sky-700 flex items-center justify-center">
                        <Syringe size={15} />
                      </div>
                      <h4 className="text-xs font-bold text-foreground">Controle Vacinal SBP</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Histórico vacinal atualizado e controle automático de doses atrasadas da criança.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100/80">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-200/60 text-sky-700 flex items-center justify-center">
                        <Mic size={15} />
                      </div>
                      <h4 className="text-xs font-bold text-foreground">Transcrição de Consultas por Voz</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      A IA transcreve a conversa com a família e preenche o prontuário em tempo real.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100/80">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-200/60 text-sky-700 flex items-center justify-center">
                        <Pill size={15} />
                      </div>
                      <h4 className="text-xs font-bold text-foreground">Prescrição Memed Integrada</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Emissão de receitas com assinatura digital válida em todas as farmácias do Brasil.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100/80">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-200/60 text-sky-700 flex items-center justify-center">
                        <BarChart3 size={15} />
                      </div>
                      <h4 className="text-xs font-bold text-foreground">Relatórios Financeiros</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Controle financeiro simples do consultório com faturamento e relatórios da clínica.
                    </p>
                  </div>
                </div>

                {/* CTAs Pediatria */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    asChild
                    className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs sm:text-sm px-6 h-11 shadow-sm"
                  >
                    <a href="https://www.opespediatra.com/login">
                      Começar Teste de 15 Dias na Pediatria
                      <ArrowRight size={15} className="ml-2" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-sky-300 text-sky-700 hover:bg-sky-50 font-bold text-xs sm:text-sm px-5 h-11"
                  >
                    <Link to="/pediatria">
                      Ver Landing Page da Pediatria
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Side: Visual Mockup */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border-2 border-sky-100 shadow-xl bg-slate-900">
                  <img
                    src={platformGraficos}
                    alt="Gráficos de Crescimento OMS e CDC no Opes Pediatra"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-3 p-3 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-sky-900">Plano Individual Pediatria</span>
                  <span className="font-extrabold text-sky-700">R$ 299/mês (15% OFF Anual)</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* ABA OPES ESPECIALIDADES (VISÃO COMPLETA PARA TERAPEUTAS, PSICÓLOGOS, ENF)  */
          /* ========================================================================= */
          <div className="rounded-3xl bg-white border border-purple-100 p-6 sm:p-10 shadow-lg relative overflow-hidden animate-in fade-in duration-300">
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Sub-Specialty Switcher (Sub-Abas de Especialidades) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-purple-100/70">
              <div className="flex items-center gap-3">
                <div className="h-9 px-2 py-0.5 rounded-xl bg-white border border-purple-100 flex items-center justify-center shadow-2xs">
                  <img src={logoOpesEspecialidades} alt="Opes Especialidades" className="h-5 w-auto object-contain" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-foreground">
                    Opes Especialidades
                  </h3>
                  <p className="text-xs text-purple-600 font-semibold">
                    Selecione a sua área profissional abaixo:
                  </p>
                </div>
              </div>

              {/* Sub-Tabs Pills */}
              <div className="inline-flex p-1 rounded-full bg-purple-50 border border-purple-100 w-full sm:w-auto">
                <button
                  onClick={() => setActiveSpecialty("to")}
                  className={`flex-1 sm:flex-none py-1.5 px-3.5 rounded-full text-xs font-bold transition-all ${
                    activeSpecialty === "to"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "text-purple-900 hover:text-purple-600"
                  }`}
                >
                  Terapia Ocupacional
                </button>
                <button
                  onClick={() => setActiveSpecialty("psicologia")}
                  className={`flex-1 sm:flex-none py-1.5 px-3.5 rounded-full text-xs font-bold transition-all ${
                    activeSpecialty === "psicologia"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "text-purple-900 hover:text-purple-600"
                  }`}
                >
                  Psicologia Infantil
                </button>
                <button
                  onClick={() => setActiveSpecialty("enfermagem")}
                  className={`flex-1 sm:flex-none py-1.5 px-3.5 rounded-full text-xs font-bold transition-all ${
                    activeSpecialty === "enfermagem"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "text-purple-900 hover:text-purple-600"
                  }`}
                >
                  Enfermagem e Fisio
                </button>
              </div>
            </div>

            {/* Dynamic Content by Selected Specialty */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Specific Specialty Details */}
              <div className="lg:col-span-7 space-y-6">
                {activeSpecialty === "to" && (
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold uppercase tracking-wider">
                      <Activity size={13} />
                      Terapia Ocupacional (CREFITO)
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                      Prontuário e Evolução Terapêutica de T.O.
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Ideal para o acompanhamento do desenvolvimento motor, perfil sensorial, planos terapêuticos e anotações clínicas estruturadas.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Agendamento Integrado</span>
                        <span className="text-[11px] text-muted-foreground">Gestão de sessões, confirmações e frequência.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Anotações Clínicas Online</span>
                        <span className="text-[11px] text-muted-foreground">Registro ágil da evolução de cada atendimento.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Transcrição de Voz</span>
                        <span className="text-[11px] text-muted-foreground">Dite as observações da sessão sem digitar.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Saúde Mental & Atestados</span>
                        <span className="text-[11px] text-muted-foreground">Emissão de pareceres e atestados clínicos.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeSpecialty === "psicologia" && (
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold uppercase tracking-wider">
                      <Brain size={13} />
                      Psicologia Infantil e Neuropsicologia (CRP)
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                      Sigilo Ético Rigoroso e IA para Psicólogos
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Anotações de sessão protegidas por criptografia, modelos de laudos, relatórios socioemocionais e transcrição por voz.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Agendamento Integrado</span>
                        <span className="text-[11px] text-muted-foreground">Organização de atendimentos individuais e em grupo.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Anotações Clínicas Online</span>
                        <span className="text-[11px] text-muted-foreground">Prontuário com sigilo ético absoluto (LGPD).</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Transcrição de Voz</span>
                        <span className="text-[11px] text-muted-foreground">Resumos clínicos imediatos após cada sessão.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Saúde Mental & Laudos</span>
                        <span className="text-[11px] text-muted-foreground">Emissão de atestados e laudos psicológicos.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeSpecialty === "enfermagem" && (
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold uppercase tracking-wider">
                      <Users size={13} />
                      Enfermagem Pediátrica e Fisioterapia (COREN/CREFITO)
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                      Cuidado Clínico e Gestão de Cuidados
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Curvas de crescimento antropométrico, controle de vacinas, anotações de plantão, home care e emissão de atestados.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Agendamento Integrado</span>
                        <span className="text-[11px] text-muted-foreground">Controle de visitas clínicas e domiciliares.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Anotações Clínicas Online</span>
                        <span className="text-[11px] text-muted-foreground">Evolução de enfermagem e condutas fisioterápicas.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Transcrição de Voz</span>
                        <span className="text-[11px] text-muted-foreground">Dite os registros sem perda de tempo em plantões.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Gráficos de Crescimento e Vacinas</span>
                        <span className="text-[11px] text-muted-foreground">Acompanhamento antropométrico e caderneta.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTAs Especialidades */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    asChild
                    className="rounded-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-bold text-xs sm:text-sm px-6 h-11 shadow-sm"
                  >
                    <a href="https://www.opespediatra.com/login">
                      Começar Teste de 15 Dias em Especialidades
                      <ArrowRight size={15} className="ml-2" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-purple-300 text-purple-700 hover:bg-purple-50 font-bold text-xs sm:text-sm px-5 h-11"
                  >
                    <Link
                      to={
                        activeSpecialty === "to"
                          ? "/terapia-ocupacional"
                          : activeSpecialty === "psicologia"
                          ? "/psicologia"
                          : "/enfermagem"
                      }
                    >
                      Ver Landing Page Dedicada
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Side: Visual Mockup */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border-2 border-purple-100 shadow-xl bg-card">
                  <img
                    src={activeSpecialty === "enfermagem" ? platformDashboard : platformSaudeMental}
                    alt="Interface do Opes Especialidades"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-3 p-3 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-950">Plano Individual Especialidades</span>
                  <span className="font-extrabold text-purple-700">R$ 199/mês (15% OFF Anual)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
