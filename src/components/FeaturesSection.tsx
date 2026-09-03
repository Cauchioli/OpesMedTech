import { useState } from "react";
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
} from "lucide-react";
import platformGraficos from "@/assets/platform-graficos.jpg";
import platformDashboard from "@/assets/platform-dashboard.jpg";
import platformSaudeMental from "@/assets/platform-saude-mental.png";

type FilterType = "all" | "pediatria" | "especialidades";

const FeaturesSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const features = [
    {
      icon: Bot,
      title: "Análise Preditiva",
      description: "Decisões guiadas por IA com base no histórico do paciente (Apenas para Pediatria)",
      highlight: true,
      tag: "Opes Pediatra",
      category: "pediatria" as const,
    },
    {
      icon: Mic,
      title: "Transcrição de Voz com IA",
      description: "Transcreve e resume consultas e atendimentos em tempo real, economizando tempo de digitação",
      highlight: true,
      tag: "Ambos",
      category: "both" as const,
    },
    {
      icon: FileText,
      title: "Anotações Clínicas Online",
      description: "Prontuário digital ágil para registro de evolução clínica e sessões terapêuticas",
      highlight: false,
      tag: "Ambos",
      category: "both" as const,
    },
    {
      icon: Calendar,
      title: "Agendamento Integrado",
      description: "Organize consultas e sessões com confirmação automática e sincronização com a recepção",
      highlight: false,
      tag: "Ambos",
      category: "both" as const,
    },
    {
      icon: Brain,
      title: "Saúde Mental e Terapias",
      description: "Acompanhamento de neurodesenvolvimento para Terapia Ocupacional e Psicologia",
      highlight: true,
      tag: "Opes Especialidades",
      category: "especialidades" as const,
    },
    {
      icon: LineChart,
      title: "Gráficos de Crescimento",
      description: "Curvas OMS e CDC com cálculo de percentis e escores z para pediatria e enfermagem",
      highlight: false,
      tag: "Pediatria e Enf",
      category: "pediatria" as const,
    },
    {
      icon: Syringe,
      title: "Controle de Vacinas",
      description: "Calendário vacinal atualizado conforme diretrizes da SBP com alertas de atraso",
      highlight: false,
      tag: "Pediatria e Enf",
      category: "pediatria" as const,
    },
    {
      icon: Pill,
      title: "Atestados e Prescrição",
      description: "Emissão ágil de receitas digitais (Memed), atestados e declarações clínicas",
      highlight: false,
      tag: "Ambos",
      category: "both" as const,
    },
    {
      icon: BarChart3,
      title: "Gestão Financeira",
      description: "Controle simples de faturamento, fluxo de recebimentos e relatórios da clínica",
      highlight: false,
      tag: "Ambos",
      category: "both" as const,
    },
  ];

  const filteredFeatures = features.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "pediatria") return item.category === "pediatria" || item.category === "both";
    if (activeFilter === "especialidades") return item.category === "especialidades" || item.category === "both";
    return true;
  });

  return (
    <section id="funcionalidades" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header Clean */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            RECURSOS E FERRAMENTAS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
            Tudo o que você precisa no dia a dia clínico
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Funcionalidades desenhadas para economizar tempo e acelerar atendimentos
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            Todas ({features.length})
          </button>

          <button
            onClick={() => setActiveFilter("pediatria")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === "pediatria"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            <Stethoscope size={13} />
            Opes Pediatra
          </button>

          <button
            onClick={() => setActiveFilter("especialidades")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === "especialidades"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            <Activity size={13} />
            Opes Especialidades (TO • Psicologia • Enfermagem)
          </button>
        </div>

        {/* Features Grid Clean */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {filteredFeatures.map((feature, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                feature.highlight
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-md"
                  : "bg-card border-border/80 hover:border-primary/40 hover:shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      feature.highlight
                        ? "bg-white/20"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <feature.icon
                      size={16}
                      className={feature.highlight ? "text-primary-foreground" : "text-primary"}
                    />
                  </div>

                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                      feature.highlight
                        ? "bg-white/25 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {feature.tag}
                  </span>
                </div>

                <h3
                  className={`text-sm font-bold mb-1 ${
                    feature.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed ${
                    feature.highlight ? "text-primary-foreground/90" : "text-muted-foreground"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Showcase Gallery Clean */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-1">
              VISUAL DA PLATAFORMA
            </span>
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              Telas limpas e pensadas para o seu fluxo de atendimento
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                image: platformDashboard,
                title: "Dashboard Principal",
                description: "Visão rápida do dia e atendimentos",
              },
              {
                image: platformGraficos,
                title: "Curvas de Crescimento",
                description: "Percentis automáticos OMS e CDC",
              },
              {
                image: platformSaudeMental,
                title: "Saúde Mental e Terapias",
                description: "Evolução clínica e laudos",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm flex flex-col"
              >
                <div className="overflow-hidden relative h-36">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-foreground text-xs mb-0.5">{item.title}</h4>
                    <p className="text-[11px] text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
