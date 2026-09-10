import React, { useState } from "react";
import {
  Calendar,
  Mic,
  Brain,
  Video,
  DollarSign,
  LineChart,
  Syringe,
  FileCheck,
  Stethoscope,
  Activity,
  Users,
  ZoomIn,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Telas oficiais reais
import telaAgenda from "@/assets/telas/tela-agenda.jpeg";
import telaAnotacao from "@/assets/telas/tela-anotacao-transcricao.jpeg";
import telaSaudeMental from "@/assets/telas/tela-saude-mental.jpeg";
import telaTeleconsulta from "@/assets/telas/tela-teleconsulta.jpeg";
import telaFinanceiro from "@/assets/telas/tela-financeiro.jpeg";
import telaGraficos from "@/assets/telas/tela-graficos-curvas.jpeg";
import telaVacinas from "@/assets/telas/tela-vacinas.jpeg";
import telaExames from "@/assets/telas/tela-exames-voz.jpeg";
import telaProntuario from "@/assets/telas/tela-prontuario-paciente.jpeg";

type SpecialtyKey = "pediatria" | "psicologia" | "to" | "enfermagem";

interface ScreenItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tag: string;
  specialties: SpecialtyKey[];
}

const ALL_SCREENS: ScreenItem[] = [
  {
    id: "agenda",
    title: "Agenda Inteligente",
    category: "Gestão e Produtividade",
    description: "Visão semanal e diária com código de cores por status, controle de retornos, encaixes e bloqueios.",
    image: telaAgenda,
    icon: Calendar,
    tag: "Multi-Profissional",
    specialties: ["pediatria", "psicologia", "to", "enfermagem"],
  },
  {
    id: "anotacao",
    title: "Anotação e Transcrição por Voz",
    category: "Atendimento Clínico com IA",
    description: "Dite livremente durante ou após a consulta: a inteligência artificial transcreve e organiza o prontuário em segundos.",
    image: telaAnotacao,
    icon: Mic,
    tag: "IA de Voz",
    specialties: ["pediatria", "psicologia", "to", "enfermagem"],
  },
  {
    id: "saude-mental",
    title: "Saúde Mental e Neurodesenvolvimento",
    category: "Avaliação Comportamental",
    description: "Protocolos guiados de avaliação do desenvolvimento socioemocional, cognitivo, marcos motores e comportamento.",
    image: telaSaudeMental,
    icon: Brain,
    tag: "Especialidades",
    specialties: ["pediatria", "psicologia", "to"],
  },
  {
    id: "teleconsulta",
    title: "Teleconsulta Integrada",
    category: "Atendimento à Distância",
    description: "Vídeo chamada direta na plataforma com tela dividida: atenda a família enquanto preenche o prontuário e vê transcrições em tempo real.",
    image: telaTeleconsulta,
    icon: Video,
    tag: "Telemedicina",
    specialties: ["pediatria", "psicologia", "to", "enfermagem"],
  },
  {
    id: "financeiro",
    title: "Gestão Financeira e Faturamento",
    category: "Controle Administrativo",
    description: "Dashboard financeiro com receita acumulada, métodos de pagamento (PIX, cartões, boletos) e conciliação por status.",
    image: telaFinanceiro,
    icon: DollarSign,
    tag: "Financeiro",
    specialties: ["pediatria", "psicologia", "to", "enfermagem"],
  },
  {
    id: "graficos",
    title: "Gráficos e Curvas OMS / CDC",
    category: "Antropometria Pediátrica",
    description: "Curvas automáticas de IMC, peso, altura e perímetro cefálico com cálculo de escores z e percentis para compartilhamento.",
    image: telaGraficos,
    icon: LineChart,
    tag: "Padrão OMS",
    specialties: ["pediatria", "enfermagem"],
  },
  {
    id: "vacinas",
    title: "Cronograma de Vacinação Completo",
    category: "Imunização e Prevenção",
    description: "Timeline dinâmica de doses aplicadas, pendentes e em atraso com checagem rigorosa do calendário vacinal.",
    image: telaVacinas,
    icon: Syringe,
    tag: "Calendário Vacinal",
    specialties: ["pediatria", "enfermagem"],
  },
  {
    id: "exames",
    title: "Solicitação de Exames por Voz",
    category: "Prescrição e Pedidos",
    description: "Dite os exames necessários ('hemograma completo, ferritina') e o sistema gera o formulário oficial timbrado e formatado com IA.",
    image: telaExames,
    icon: FileCheck,
    tag: "Voz para Pedidos",
    specialties: ["pediatria", "enfermagem"],
  },
  {
    id: "prontuario",
    title: "Prontuário Inteligente com IA",
    category: "Histórico Clínico",
    description: "Ficha longitudinal do paciente com foto, alerta de risco, resumo pré-consulta e análise integrada de dados.",
    image: telaProntuario,
    icon: Sparkles,
    tag: "Análise Preditiva",
    specialties: ["pediatria"],
  },
];

const SPECIALTY_TABS = [
  {
    key: "pediatria" as SpecialtyKey,
    label: "Pediatria",
    badge: "CRM (Todos os Módulos)",
    icon: Stethoscope,
    gradient: "from-sky-500 to-blue-600",
    activeBg: "bg-sky-600 text-white shadow-md",
  },
  {
    key: "psicologia" as SpecialtyKey,
    label: "Psicologia",
    badge: "CRP",
    icon: Brain,
    gradient: "from-purple-600 to-violet-700",
    activeBg: "bg-purple-600 text-white shadow-md",
  },
  {
    key: "to" as SpecialtyKey,
    label: "Terapia Ocupacional",
    badge: "CREFITO",
    icon: Activity,
    gradient: "from-purple-600 to-violet-700",
    activeBg: "bg-purple-600 text-white shadow-md",
  },
  {
    key: "enfermagem" as SpecialtyKey,
    label: "Enfermagem e Fisio",
    badge: "COREN / CREFITO",
    icon: Users,
    gradient: "from-cyan-600 to-blue-600",
    activeBg: "bg-cyan-600 text-white shadow-md",
  },
];

const PlatformActionSection: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyKey>("pediatria");
  const [modalScreen, setModalScreen] = useState<ScreenItem | null>(null);

  const filteredScreens = ALL_SCREENS.filter((screen) =>
    screen.specialties.includes(selectedSpecialty)
  );

  const getSpecialtyDescription = (key: SpecialtyKey) => {
    switch (key) {
      case "pediatria":
        return "Todos os módulos liberados: Agenda, Prontuário, Transcrição, Curvas de Crescimento, Vacinas, Exames por Voz, Saúde Mental, Teleconsulta e Financeiro.";
      case "psicologia":
        return "Módulos específicos para Psicologia Infantil: Agenda, Anotação e Transcrição com IA, Saúde Mental e Neurodesenvolvimento, Teleconsulta e Financeiro.";
      case "to":
        return "Módulos dedicados para Terapia Ocupacional: Agenda, Anotação e Transcrição, Saúde Mental e Perfil Sensorial, Teleconsulta e Financeiro.";
      case "enfermagem":
        return "Módulos focados em cuidados e reabilitação: Agenda, Anotação e Transcrição, Gráficos de Crescimento, Vacinas, Exames por Voz, Teleconsulta e Financeiro.";
    }
  };

  return (
    <section id="plataforma-em-acao" className="section-padding bg-muted/20 border-y border-border/60 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2 border border-primary/20">
            <Sparkles size={13} />
            VEJA A PLATAFORMA EM AÇÃO
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Telas reais projetadas para agilizar sua rotina
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Navegue pelas especialidades para ver exatamente os módulos disponíveis para a sua área de atuação, com design limpo e inteligente.
          </p>
        </div>

        {/* Specialty Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 max-w-4xl mx-auto">
          {SPECIALTY_TABS.map((tab) => {
            const isSelected = selectedSpecialty === tab.key;
            const Icon = tab.icon;

            return (
              <button
                key={tab.key}
                onClick={() => setSelectedSpecialty(tab.key)}
                className={`flex items-center gap-2 py-2.5 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${
                  isSelected
                    ? `${tab.activeBg} border-transparent scale-102`
                    : "bg-card text-muted-foreground hover:text-foreground border-border hover:border-primary/40 shadow-2xs"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Context Information Note */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-xs text-muted-foreground bg-card/80 border border-border/80 px-4 py-2 rounded-2xl inline-block shadow-2xs">
            <strong className="text-foreground">Configuração ativa:</strong> {getSpecialtyDescription(selectedSpecialty)}
          </p>
        </div>

        {/* Screens Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredScreens.map((screen) => {
            const IconComponent = screen.icon;

            return (
              <div
                key={screen.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Image Container with Zoom overlay */}
                <div
                  className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => setModalScreen(screen)}
                >
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <IconComponent size={12} className="text-cyan-300" />
                    <span>{screen.category}</span>
                  </div>

                  {/* Tag badge */}
                  <div className="absolute top-3 right-3 bg-white/95 text-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm border border-border/60">
                    {screen.tag}
                  </div>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-primary font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <ZoomIn size={14} />
                      <span>Ampliar tela</span>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1.5 flex items-center gap-2">
                      <span>{screen.title}</span>
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {screen.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-border/50 flex items-center justify-between">
                    <button
                      onClick={() => setModalScreen(screen)}
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      Visualizar detalhes
                      <ArrowRight size={13} />
                    </button>
                    <span className="text-[10px] text-muted-foreground font-medium">
                      Opes Medtech
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bottom Banner */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-primary hover:opacity-95 text-white font-bold text-xs sm:text-sm px-8 h-12 shadow-primary"
          >
            <a href="https://www.opespediatra.com/login">
              Testar todas as telas por 15 dias grátis
              <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>

      {/* Modal Lightbox for Screen Zoom */}
      {modalScreen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setModalScreen(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-card rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between bg-muted/40">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <modalScreen.icon size={18} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {modalScreen.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {modalScreen.category} • {modalScreen.tag}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setModalScreen(null)}
                className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 text-foreground flex items-center justify-center transition-colors"
                aria-label="Fechar modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="p-4 overflow-y-auto max-h-[calc(90vh-140px)] flex items-center justify-center bg-slate-950/5">
              <img
                src={modalScreen.image}
                alt={modalScreen.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-md border border-border"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-border bg-card flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground max-w-2xl text-center sm:text-left">
                {modalScreen.description}
              </p>

              <Button
                asChild
                size="sm"
                className="rounded-full bg-gradient-primary text-white text-xs font-bold px-5"
              >
                <a href="https://www.opespediatra.com/login">
                  Testar na prática
                  <ArrowRight size={14} className="ml-1.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlatformActionSection;
