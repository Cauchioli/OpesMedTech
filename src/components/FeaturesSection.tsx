import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Bot,
  Mic, 
  Calendar, 
  Syringe, 
  LineChart, 
  Stethoscope,
  Activity,
  Check,
  Star,
  ArrowRight,
  Sparkles,
  Users,
  Brain,
  MessageSquare,
  Video,
  DollarSign,
  FileCheck,
  ZoomIn,
  X,
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
import logoOpesEspecialidades from "@/assets/logo-opes-especialidades.jpg";
import mascoteRobo from "@/assets/mascote-robo-opes.png";

type MainProductTab = "pediatria" | "especialidades";
type SpecialtySubTab = "to" | "psicologia" | "enfermagem";
type BillingCycle = "monthly" | "annual";

interface ScreenItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tag: string;
  specialties: ("pediatria" | "psicologia" | "to" | "enfermagem")[];
}

const ALL_SCREENS: ScreenItem[] = [
  {
    id: "agenda",
    title: "Agenda Inteligente",
    category: "Gestão e Produtividade",
    description: "Visão semanal e diária com código de cores por status, controle de retornos, encaixes e bloqueios de horário.",
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
    description: "Dite os exames necessários e o sistema gera o formulário oficial timbrado e formatado com inteligência artificial.",
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

interface ScreensGridProps {
  screens: ScreenItem[];
  accent: "sky" | "purple";
  badgeText: string;
  title: string;
  subtitle: string;
  onOpenModal: (screen: ScreenItem) => void;
}

const ScreensGrid: React.FC<ScreensGridProps> = ({
  screens,
  accent,
  badgeText,
  title,
  subtitle,
  onOpenModal,
}) => {
  const isSky = accent === "sky";

  return (
    <div className={`pt-8 border-t ${isSky ? "border-sky-100" : "border-purple-100"}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <span
            className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
              isSky ? "text-sky-600" : "text-purple-600"
            }`}
          >
            {badgeText}
          </span>
          <h4 className="text-xl sm:text-2xl font-extrabold text-foreground">
            {title}
          </h4>
          <p className="text-xs text-muted-foreground mt-0.5 max-w-xl">
            {subtitle}
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full border border-border/50">
          <ZoomIn size={13} className={isSky ? "text-sky-600" : "text-purple-600"} />
          <span>Clique em qualquer tela para ampliar</span>
        </div>
      </div>

      {/* Grid on desktop/tablet, horizontal swipe on mobile */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory sm:snap-none -mx-2 px-2 sm:mx-0 sm:px-0">
        {screens.map((screen) => {
          const IconComponent = screen.icon;

          return (
            <div
              key={screen.id}
              className="min-w-[280px] sm:min-w-0 flex-1 group bg-card rounded-2xl overflow-hidden border border-border/80 shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between snap-center"
            >
              {/* Image Container with Zoom overlay */}
              <div
                className="relative h-44 sm:h-48 overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => onOpenModal(screen)}
              >
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category Tag */}
                <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                  <IconComponent size={11} className={isSky ? "text-sky-300" : "text-purple-300"} />
                  <span>{screen.category}</span>
                </div>

                {/* Tag badge */}
                <div className="absolute top-2.5 right-2.5 bg-white/95 text-foreground text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs border border-border/60">
                  {screen.tag}
                </div>

                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-primary font-bold text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <ZoomIn size={13} />
                    <span>Ampliar tela</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h5 className="text-sm font-bold text-foreground mb-1 flex items-center gap-2">
                    <span>{screen.title}</span>
                  </h5>
                  <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                    {screen.description}
                  </p>
                </div>

                <div className="pt-3 mt-2.5 border-t border-border/50 flex items-center justify-between">
                  <button
                    onClick={() => onOpenModal(screen)}
                    className={`text-xs font-bold hover:underline flex items-center gap-1 ${
                      isSky ? "text-sky-600" : "text-purple-600"
                    }`}
                  >
                    Visualizar detalhes
                    <ArrowRight size={12} />
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

      <div className="sm:hidden text-center mt-2">
        <span className="text-[10px] text-muted-foreground">
          Deslize para os lados para ver mais telas • Toque para ampliar
        </span>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const [activeProduct, setActiveProduct] = useState<MainProductTab>("pediatria");
  const [activeSpecialty, setActiveSpecialty] = useState<SpecialtySubTab>("to");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [modalScreen, setModalScreen] = useState<ScreenItem | null>(null);

  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de falar com a consultora comercial da Opes Medtech para tirar dúvidas e fechar um plano.");

  const isAnnual = billingCycle === "annual";

  // Telas por especialidade
  const screensPediatria = ALL_SCREENS.filter((s) => s.specialties.includes("pediatria"));
  const screensTO = ALL_SCREENS.filter((s) => s.specialties.includes("to"));
  const screensPsicologia = ALL_SCREENS.filter((s) => s.specialties.includes("psicologia"));
  const screensEnfermagem = ALL_SCREENS.filter((s) => s.specialties.includes("enfermagem"));

  // Planos Oficiais de Pediatria
  const pediatriaPlans = [
    {
      name: "Individual",
      monthlyPrice: 299,
      annualPrice: 254,
      userNote: "1 Médico + 1 Assistente",
      popular: false,
      features: [
        "1 Médico + 1 Assistente",
        "Sem limites de funcionalidades",
        "IA de Transcrição e Análise Preditiva",
        "Relatórios Financeiros",
        "Parceria Memed",
      ],
      cta: "Começar teste grátis",
      ctaVariant: "outline" as const,
    },
    {
      name: "Clínicas",
      monthlyPrice: 285,
      annualPrice: 256,
      pricePerUser: "por médico",
      userNote: "2 a 9 Médicos + 3 Assistentes",
      savingsBadge: "5% mais econômico",
      popular: true,
      badge: "MAIS ESCOLHIDO",
      features: [
        "2 a 9 Médicos + 3 Assistentes",
        "Todos os benefícios do Individual",
        "5% mais econômico",
        "10% de desconto no plano anual",
        "Suporte Prioritário",
      ],
      cta: "Começar teste grátis",
      ctaVariant: "default" as const,
    },
    {
      name: "Redes",
      monthlyPrice: 269,
      annualPrice: 228,
      pricePerUser: "por médico",
      userNote: "10+ Médicos + 5 Assistentes",
      savingsBadge: "10% mais econômico",
      popular: false,
      features: [
        "10+ Médicos + 5 Assistentes",
        "Todos os benefícios de Clínicas",
        "10% mais econômico",
        "15% de desconto na assinatura anual",
        "Suporte Dedicado",
      ],
      cta: "Falar com a Consultora",
      ctaVariant: "outline" as const,
    },
  ];

  // Planos Oficiais de Especialidades
  const especialidadesPlans = [
    {
      name: "Individual",
      monthlyPrice: 199,
      annualPrice: 169,
      userNote: "1 Profissional + 1 Assistente",
      popular: false,
      features: [
        "1 Profissional da saúde + 1 Assistente",
        "Funcionalidades conforme área de atuação",
        "IA para Transcrição",
        "Relatórios Financeiros",
      ],
      cta: "Começar teste grátis",
      ctaVariant: "outline" as const,
    },
    {
      name: "Clínicas",
      monthlyPrice: 185,
      annualPrice: 166,
      pricePerUser: "por profissional",
      userNote: "2 a 9 Profissionais + 3 Assistentes",
      savingsBadge: "5% mais econômico",
      popular: true,
      badge: "MAIS ESCOLHIDO",
      features: [
        "2 a 9 Profissionais + 3 Assistentes",
        "Todos os benefícios do Individual",
        "5% mais econômico",
        "10% de desconto no plano anual",
        "Suporte Prioritário",
      ],
      cta: "Começar teste grátis",
      ctaVariant: "default" as const,
    },
    {
      name: "Redes",
      monthlyPrice: 170,
      annualPrice: 144,
      pricePerUser: "por profissional",
      userNote: "10+ Profissionais + 5 Assistentes",
      savingsBadge: "10% mais econômico",
      popular: false,
      features: [
        "10+ Profissionais + 5 Assistentes",
        "Todos os benefícios de Clínicas",
        "10% mais econômico",
        "15% de desconto na assinatura anual",
        "Suporte Dedicado",
      ],
      cta: "Falar com a Consultora",
      ctaVariant: "outline" as const,
    },
  ];

  return (
    <section id="funcionalidades" className="section-padding bg-gradient-to-b from-white via-sky-50/20 to-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2 border border-primary/20">
            <Sparkles size={13} />
            ECOSSISTEMA INTEGRADO EM UM SÓ LUGAR
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Funcionalidades, Telas Reais e Planos por Especialidade
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            Selecione sua área de atuação uma única vez para visualizar os recursos disponíveis, as telas reais do sistema em funcionamento e a tabela de valores correspondente.
          </p>
        </div>

        {/* Master Product Switcher */}
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
          /* ABA OPES PEDIATRA (RECURSOS + TELAS REAIS + PREÇOS DE PEDIATRIA)          */
          /* ========================================================================= */
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-10 shadow-lg relative overflow-hidden animate-in fade-in duration-300 space-y-12">
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Top Block: Features Highlights */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Features List */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Stethoscope size={13} />
                    Para Médicos Pediatras (CRM)
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
                    Ecossistema Completo para o Pediatra
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Elimina a digitação burocrática e traz precisão clínica com curvas antropométricas automáticas, gestão vacinal SBP e inteligência artificial preditiva.
                  </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/90">
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

                  <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/90">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-200/60 text-sky-700 flex items-center justify-center">
                        <LineChart size={15} />
                      </div>
                      <h4 className="text-xs font-bold text-foreground">Curvas de Crescimento OMS/CDC</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Escores z e percentis automáticos de peso, estatura, IMC e perímetro cefálico.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/90">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-200/60 text-sky-700 flex items-center justify-center">
                        <Syringe size={15} />
                      </div>
                      <h4 className="text-xs font-bold text-foreground">Gestão Vacinal SBP</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Calendário da Sociedade Brasileira de Pediatria atualizado para evitar atrasos e dúvidas das famílias.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/90">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-200/60 text-sky-700 flex items-center justify-center">
                        <Mic size={15} />
                      </div>
                      <h4 className="text-xs font-bold text-foreground">Transcrição de Consultas por Voz</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Converse olhando para a criança: a inteligência artificial redige a anamnese estruturada automaticamente.
                    </p>
                  </div>
                </div>

                {/* CTAs Pediatria */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    asChild
                    className="rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm px-6 h-11 shadow-sm"
                  >
                    <a href="https://www.opespediatra.com/login">
                      Começar Teste de 15 Dias
                      <ArrowRight size={15} className="ml-2" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-sky-300 text-sky-700 hover:bg-sky-50 font-bold text-xs sm:text-sm px-5 h-11"
                  >
                    <Link to="/pediatria">
                      Saber mais sobre Pediatria
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Side: Mockup + Mascot Spotlight */}
              <div className="lg:col-span-5 relative space-y-3">
                <div className="rounded-2xl overflow-hidden border-2 border-sky-100 shadow-xl bg-slate-900 relative group">
                  <img
                    src={telaGraficos}
                    alt="Gráficos de Crescimento OMS e CDC no Opes Pediatra"
                    className="w-full h-auto object-cover"
                  />
                  {/* Floating Mascot Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-lg border border-sky-100 flex items-center gap-2">
                    <img src={mascoteRobo} alt="Mascote IA Opes" className="w-10 h-10 object-contain" />
                    <div className="pr-2">
                      <span className="block text-[10px] font-black text-sky-900 leading-tight">IA Preditiva</span>
                      <span className="text-[9px] text-muted-foreground">Exclusiva Opes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Block: Real System Screens for Pediatria */}
            <ScreensGrid
              screens={screensPediatria}
              accent="sky"
              badgeText="TELAS REAIS DO OPES PEDIATRA"
              title="Módulos em funcionamento na rotina pediátrica"
              subtitle="Prontuário completo, curvas antropométricas, vacinas, exames por voz e teleconsulta liberados."
              onOpenModal={setModalScreen}
            />

            {/* Bottom Block: Integrated Pricing for Pediatria */}
            <div className="pt-8 border-t border-sky-100">
              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
                  PLANOS OFICIAIS DE PEDIATRIA
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-foreground">
                  Valores exclusivos para Médicos Pediatras
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  15 dias de teste grátis, sem cartão de crédito e sem fidelidade
                </p>

                {/* Billing Cycle Switcher */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span
                    className={`text-xs font-semibold cursor-pointer ${
                      !isAnnual ? "text-foreground font-bold" : "text-muted-foreground"
                    }`}
                    onClick={() => setBillingCycle("monthly")}
                  >
                    Mensal
                  </span>

                  <button
                    onClick={() => setBillingCycle(isAnnual ? "monthly" : "annual")}
                    className="relative w-11 h-6 rounded-full bg-muted border border-border transition-colors p-0.5 flex items-center focus:outline-none"
                    aria-label="Alternar ciclo de pagamento"
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-sky-600 transition-transform duration-200 shadow-xs ${
                        isAnnual ? "translate-x-5 bg-emerald-600" : "translate-x-0"
                      }`}
                    />
                  </button>

                  <span
                    className={`text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
                      isAnnual ? "text-emerald-700 font-bold" : "text-muted-foreground"
                    }`}
                    onClick={() => setBillingCycle("annual")}
                  >
                    <span>Anual</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Desconto Especial
                    </span>
                  </span>
                </div>
              </div>

              {/* 3 Pediatria Pricing Cards Grid */}
              <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto items-stretch">
                {pediatriaPlans.map((plan, index) => {
                  const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

                  return (
                    <div
                      key={index}
                      className={`relative p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                        plan.popular
                          ? "bg-gradient-primary text-primary-foreground border-transparent shadow-xl scale-103 z-10"
                          : "bg-sky-50/40 border-sky-100 hover:border-sky-300 hover:shadow-md"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <div className="flex items-center gap-1 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-900 text-[10px] font-black shadow-md">
                            <Star size={10} fill="currentColor" />
                            {plan.badge || "MAIS ESCOLHIDO"}
                          </div>
                        </div>
                      )}

                      <div>
                        <h5 className={`text-lg font-extrabold mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}>
                          {plan.name}
                        </h5>

                        <div className="mb-3">
                          <div className="flex items-baseline gap-1">
                            <span className={`text-xs font-semibold ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>R$</span>
                            <span className={`text-3xl font-black ${plan.popular ? "text-white" : "text-sky-700"}`}>{displayPrice}</span>
                            <span className={`text-xs ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>/mês {plan.pricePerUser || ""}</span>
                          </div>
                          {plan.savingsBadge && (
                            <p className={`text-[11px] font-semibold mt-0.5 ${plan.popular ? "text-cyan-200" : "text-purple-600"}`}>
                              {plan.savingsBadge}
                            </p>
                          )}
                        </div>

                        <ul className="space-y-2 mb-5 pt-2 border-t border-border/30 text-xs">
                          {plan.features.map((f, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <Check size={13} className={`flex-shrink-0 mt-0.5 ${plan.popular ? "text-cyan-300" : "text-sky-600"}`} />
                              <span className={plan.popular ? "text-white/95" : "text-foreground/85"}>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        {plan.name === "Redes" ? (
                          <Button
                            variant="outline"
                            className="w-full rounded-full border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 font-bold text-xs h-9"
                            asChild
                          >
                            <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                              <MessageSquare size={13} className="mr-1.5 text-emerald-500" />
                              Falar com a Consultora
                            </a>
                          </Button>
                        ) : (
                          <Button
                            className={`w-full rounded-full font-bold text-xs h-9 ${
                              plan.popular ? "bg-white text-primary hover:bg-white/95 shadow-md" : "bg-sky-600 hover:bg-sky-700 text-white"
                            }`}
                            asChild
                          >
                            <a href="https://www.opespediatra.com/login">{plan.cta}</a>
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* ABA OPES ESPECIALIDADES (RECURSOS + TELAS REAIS + PREÇOS DE ESPECIALIDADE)*/
          /* ========================================================================= */
          <div className="rounded-3xl bg-white border border-purple-100 p-6 sm:p-10 shadow-lg relative overflow-hidden animate-in fade-in duration-300 space-y-12">
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Sub-Specialty Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-purple-100/70">
              <div className="flex items-center gap-3">
                <div className="h-9 px-2.5 py-0.5 rounded-xl bg-white border border-purple-100 flex items-center justify-center shadow-2xs">
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
                  className={`flex-1 sm:flex-none py-1.5 px-4 rounded-full text-xs font-bold transition-all ${
                    activeSpecialty === "to"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "text-purple-900 hover:text-purple-600"
                  }`}
                >
                  Terapia Ocupacional
                </button>
                <button
                  onClick={() => setActiveSpecialty("psicologia")}
                  className={`flex-1 sm:flex-none py-1.5 px-4 rounded-full text-xs font-bold transition-all ${
                    activeSpecialty === "psicologia"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "text-purple-900 hover:text-purple-600"
                  }`}
                >
                  Psicologia Infantil
                </button>
                <button
                  onClick={() => setActiveSpecialty("enfermagem")}
                  className={`flex-1 sm:flex-none py-1.5 px-4 rounded-full text-xs font-bold transition-all ${
                    activeSpecialty === "enfermagem"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "text-purple-900 hover:text-purple-600"
                  }`}
                >
                  Enfermagem
                </button>
              </div>
            </div>

            {/* Dynamic Top Content by Selected Specialty */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Specific Specialty Details */}
              <div className="lg:col-span-7 space-y-6">
                {activeSpecialty === "to" && (
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold uppercase tracking-wider">
                      <Activity size={13} />
                      Terapia Ocupacional
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
                      Prontuário Eletrônico e IA para Psicólogos
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Anotações de sessão protegidas por criptografia, relatórios socioemocionais e transcrição por voz.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Agendamento Integrado</span>
                        <span className="text-[11px] text-muted-foreground">Organização de atendimentos individuais e em grupo.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Anotações Clínicas Online</span>
                        <span className="text-[11px] text-muted-foreground">Prontuário seguro e estruturado com conformidade LGPD.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Transcrição de Voz</span>
                        <span className="text-[11px] text-muted-foreground">Resumos clínicos imediatos após cada sessão.</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-xs text-foreground block mb-0.5">Saúde Mental & Relatórios</span>
                        <span className="text-[11px] text-muted-foreground">Emissão de atestados e pareceres psicológicos.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeSpecialty === "enfermagem" && (
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold uppercase tracking-wider">
                      <Users size={13} />
                      Enfermagem Pediátrica (COREN)
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
                        <span className="text-[11px] text-muted-foreground">Evolução e anotações clínicas de enfermagem.</span>
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
                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    asChild
                    className="rounded-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-bold text-xs sm:text-sm px-6 h-11 shadow-sm"
                  >
                    <a href="https://www.opespediatra.com/login">
                      Começar Teste de 15 Dias
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
                      {activeSpecialty === "to"
                        ? "Saber mais sobre Terapia Ocupacional"
                        : activeSpecialty === "psicologia"
                        ? "Saber mais sobre Psicologia Infantil"
                        : "Saber mais sobre Enfermagem"}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Side: Mockup Visual */}
              <div className="lg:col-span-5 relative space-y-3">
                <div className="rounded-2xl overflow-hidden border-2 border-purple-100 shadow-xl bg-card">
                  <img
                    src={
                      activeSpecialty === "enfermagem"
                        ? telaVacinas
                        : activeSpecialty === "psicologia"
                        ? telaAnotacao
                        : telaSaudeMental
                    }
                    alt="Interface do Opes Especialidades"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Middle Block: Real System Screens for Selected Specialty */}
            {activeSpecialty === "to" && (
              <ScreensGrid
                screens={screensTO}
                accent="purple"
                badgeText="TELAS REAIS PARA TERAPIA OCUPACIONAL"
                title="Módulos liberados para Terapia Ocupacional"
                subtitle="Interface limpa com foco em evolução clínica, perfil sensorial, saúde mental e controle financeiro."
                onOpenModal={setModalScreen}
              />
            )}

            {activeSpecialty === "psicologia" && (
              <ScreensGrid
                screens={screensPsicologia}
                accent="purple"
                badgeText="TELAS REAIS PARA PSICOLOGIA INFANTIL"
                title="Módulos liberados para Psicologia Infantil"
                subtitle="Prontuário seguro e criptografado com conformidade LGPD, transcrição por voz e teleconsulta."
                onOpenModal={setModalScreen}
              />
            )}

            {activeSpecialty === "enfermagem" && (
              <ScreensGrid
                screens={screensEnfermagem}
                accent="purple"
                badgeText="TELAS REAIS PARA ENFERMAGEM"
                title="Módulos liberados para Enfermagem Pediátrica"
                subtitle="Gestão vacinal, curvas de crescimento OMS, anotações de plantão e pedidos de exames por voz."
                onOpenModal={setModalScreen}
              />
            )}

            {/* Bottom Block: Integrated Pricing for Especialidades */}
            <div className="pt-8 border-t border-purple-100">
              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block mb-1">
                  PLANOS OFICIAIS DE ESPECIALIDADES
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-foreground">
                  Valores exclusivos para T.O., Psicologia e Enfermagem
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  15 dias de teste grátis, sem cartão de crédito e sem fidelidade
                </p>

                {/* Billing Cycle Switcher */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span
                    className={`text-xs font-semibold cursor-pointer ${
                      !isAnnual ? "text-foreground font-bold" : "text-muted-foreground"
                    }`}
                    onClick={() => setBillingCycle("monthly")}
                  >
                    Mensal
                  </span>

                  <button
                    onClick={() => setBillingCycle(isAnnual ? "monthly" : "annual")}
                    className="relative w-11 h-6 rounded-full bg-muted border border-border transition-colors p-0.5 flex items-center focus:outline-none"
                    aria-label="Alternar ciclo de pagamento"
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-purple-600 transition-transform duration-200 shadow-xs ${
                        isAnnual ? "translate-x-5 bg-emerald-600" : "translate-x-0"
                      }`}
                    />
                  </button>

                  <span
                    className={`text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
                      isAnnual ? "text-emerald-700 font-bold" : "text-muted-foreground"
                    }`}
                    onClick={() => setBillingCycle("annual")}
                  >
                    <span>Anual</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Desconto Especial
                    </span>
                  </span>
                </div>
              </div>

              {/* 3 Especialidades Pricing Cards Grid */}
              <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto items-stretch">
                {especialidadesPlans.map((plan, index) => {
                  const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

                  return (
                    <div
                      key={index}
                      className={`relative p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                        plan.popular
                          ? "bg-gradient-primary text-primary-foreground border-transparent shadow-xl scale-103 z-10"
                          : "bg-purple-50/40 border-purple-100 hover:border-purple-300 hover:shadow-md"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <div className="flex items-center gap-1 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-900 text-[10px] font-black shadow-md">
                            <Star size={10} fill="currentColor" />
                            {plan.badge || "MAIS ESCOLHIDO"}
                          </div>
                        </div>
                      )}

                      <div>
                        <h5 className={`text-lg font-extrabold mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}>
                          {plan.name}
                        </h5>

                        <div className="mb-3">
                          <div className="flex items-baseline gap-1">
                            <span className={`text-xs font-semibold ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>R$</span>
                            <span className={`text-3xl font-black ${plan.popular ? "text-white" : "text-purple-700"}`}>{displayPrice}</span>
                            <span className={`text-xs ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>/mês {plan.pricePerUser || ""}</span>
                          </div>
                          {plan.savingsBadge && (
                            <p className={`text-[11px] font-semibold mt-0.5 ${plan.popular ? "text-cyan-200" : "text-purple-600"}`}>
                              {plan.savingsBadge}
                            </p>
                          )}
                        </div>

                        <ul className="space-y-2 mb-5 pt-2 border-t border-border/30 text-xs">
                          {plan.features.map((f, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <Check size={13} className={`flex-shrink-0 mt-0.5 ${plan.popular ? "text-cyan-300" : "text-purple-600"}`} />
                              <span className={plan.popular ? "text-white/95" : "text-foreground/85"}>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        {plan.name === "Redes" ? (
                          <Button
                            variant="outline"
                            className="w-full rounded-full border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 font-bold text-xs h-9"
                            asChild
                          >
                            <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                              <MessageSquare size={13} className="mr-1.5 text-emerald-500" />
                              Falar com a Consultora
                            </a>
                          </Button>
                        ) : (
                          <Button
                            className={`w-full rounded-full font-bold text-xs h-9 ${
                              plan.popular ? "bg-white text-primary hover:bg-white/95 shadow-md" : "bg-purple-600 hover:bg-purple-700 text-white"
                            }`}
                            asChild
                          >
                            <a href="https://www.opespediatra.com/login">{plan.cta}</a>
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
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

export default FeaturesSection;
