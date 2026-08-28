import { useState } from "react";
import { 
  Mic, 
  Calendar, 
  Syringe, 
  TrendingUp, 
  LineChart, 
  Video, 
  Pill, 
  Shield, 
  FileText, 
  Brain, 
  BarChart3,
  Stethoscope,
  Activity,
} from "lucide-react";
import platformAgenda from "@/assets/platform-agenda.jpg";
import platformGraficos from "@/assets/platform-graficos.jpg";
import platformVacinas from "@/assets/platform-vacinas.jpg";
import platformDashboard from "@/assets/platform-dashboard.jpg";
import platformSaudeMental from "@/assets/platform-saude-mental.png";
import platformFinanceiro from "@/assets/platform-financeiro.png";

type FilterType = "all" | "pediatria" | "especialidades";

const FeaturesSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const features = [
    {
      icon: Mic,
      title: "Transcrição Inteligente",
      description: "IA transcreve e resume consultas e sessões automaticamente, liberando você para focar no paciente",
      highlight: true,
      tag: "Ambos",
      category: "both" as const,
    },
    {
      icon: LineChart,
      title: "Curvas de Crescimento (OMS e CDC)",
      description: "Cálculo instantâneo de percentis e escores z, com gráficos exportáveis para os pais via WhatsApp",
      highlight: false,
      tag: "Opes Pediatria",
      category: "pediatria" as const,
    },
    {
      icon: Syringe,
      title: "Gestão de Vacinas Integrada",
      description: "Controle rigoroso do calendário vacinal SBP com alertas de doses atrasadas e reforços",
      highlight: false,
      tag: "Opes Pediatria",
      category: "pediatria" as const,
    },
    {
      icon: Brain,
      title: "Neurodesenvolvimento e Terapias",
      description: "Instrumentos clínicos e marcos do desenvolvimento para Terapia Ocupacional e Psicologia",
      highlight: true,
      tag: "Opes Especialidades",
      category: "especialidades" as const,
    },
    {
      icon: Pill,
      title: "Prescrição Digital (Memed)",
      description: "Emissão ágil de receitas e atestados com assinatura digital válida em todas as farmácias",
      highlight: false,
      tag: "Opes Pediatria",
      category: "pediatria" as const,
    },
    {
      icon: FileText,
      title: "Pareceres e Relatórios Escolares",
      description: "Modelos estruturados para laudos, relatórios escolares e encaminhamentos multidisciplinares",
      highlight: false,
      tag: "Opes Especialidades",
      category: "especialidades" as const,
    },
    {
      icon: Calendar,
      title: "Agenda Inteligente e Fila de Espera",
      description: "Organize atendimentos, confirmações automáticas e sincronização entre profissionais e assistentes",
      highlight: false,
      tag: "Ambos",
      category: "both" as const,
    },
    {
      icon: Video,
      title: "Teleconsulta Criptografada",
      description: "Atenda de qualquer lugar com sala virtual segura, áudio e vídeo HD e conformidade HIPAA e LGPD",
      highlight: false,
      tag: "Ambos",
      category: "both" as const,
    },
    {
      icon: BarChart3,
      title: "Gestão Financeira do Consultório",
      description: "Controle de recebimentos, fluxo de caixa, métodos de pagamento e faturamento em tempo real",
      highlight: false,
      tag: "Ambos",
      category: "both" as const,
    },
    {
      icon: TrendingUp,
      title: "Análise Preditiva e Evolutiva",
      description: "Acompanhe tendências de saúde e evolução dos planos terapêuticos longitudinais",
      highlight: false,
      tag: "Ambos",
      category: "both" as const,
    },
    {
      icon: Shield,
      title: "Segurança e Backup em Nuvem",
      description: "100% online, sem instalação em computadores, criptografia de ponta a ponta e padrão SOC2",
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            RECURSOS E FERRAMENTAS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Tecnologia que trabalha por você em cada detalhe
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Funcionalidades planejadas para a realidade clínica do cuidado infantil
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            Todas as Funcionalidades ({features.length})
          </button>

          <button
            onClick={() => setActiveFilter("pediatria")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === "pediatria"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            <Stethoscope size={13} />
            Opes Pediatria (CRM)
          </button>

          <button
            onClick={() => setActiveFilter("especialidades")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === "especialidades"
                ? "bg-secondary text-secondary-foreground shadow-sm"
                : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            <Activity size={13} />
            Opes Especialidades (TO • Psicologia • Fisio e Enf)
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between ${
                feature.highlight
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-primary-lg"
                  : "bg-card border-border/60 hover:border-primary/40 hover:shadow-md"
              }`}
            >
              <div>
                {/* Tag Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      feature.highlight
                        ? "bg-white/20"
                        : "bg-primary/10 group-hover:bg-primary/20 text-primary"
                    }`}
                  >
                    <feature.icon
                      size={18}
                      className={feature.highlight ? "text-primary-foreground" : "text-primary"}
                    />
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      feature.highlight
                        ? "bg-white/25 text-white"
                        : feature.category === "pediatria"
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : feature.category === "especialidades"
                        ? "bg-secondary/20 text-secondary-foreground border border-secondary/30"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {feature.tag}
                  </span>
                </div>

                <h3
                  className={`text-base font-bold mb-1.5 ${
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

        {/* Platform Showcase Gallery */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-1">
              INTERFACE DA PLATAFORMA
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Veja a plataforma Opes em ação
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Design limpo e intuitivo projetado para economizar cliques e acelerar o atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {[
              {
                image: platformDashboard,
                title: "Dashboard Principal",
                description: "Visão geral do dia, pacientes agendados e atendimentos em tempo real",
                tag: "Ambos",
              },
              {
                image: platformAgenda,
                title: "Agenda Inteligente",
                description: "Sincronização entre múltiplos profissionais e secretárias",
                tag: "Ambos",
              },
              {
                image: platformGraficos,
                title: "Curvas de Crescimento OMS e CDC",
                description: "Gráficos automáticos de peso, altura e IMC prontos para envio",
                tag: "Opes Pediatria",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="overflow-hidden relative h-44">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.tag}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                image: platformVacinas,
                title: "Calendário de Vacinação",
                description: "Histórico completo com doses pendentes e checagem da SBP",
                tag: "Opes Pediatria",
              },
              {
                image: platformSaudeMental,
                title: "Neurodesenvolvimento e Terapias",
                description: "Acompanhamento comportamental e motor para TO e Psicologia",
                tag: "Opes Especialidades",
              },
              {
                image: platformFinanceiro,
                title: "Controle Financeiro",
                description: "Relatórios de receitas, pagamentos e conciliação da clínica",
                tag: "Ambos",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="overflow-hidden relative h-44">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.tag}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
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
