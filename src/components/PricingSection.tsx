import { useState } from "react";
import { Check, Star, Stethoscope, Activity, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductType = "pediatria" | "especialidades";
type BillingCycle = "monthly" | "annual";

const PricingSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("pediatria");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de uma proposta personalizada sobre os planos da Opes Medtech para minha clínica.");

  const isPediatria = selectedProduct === "pediatria";
  const isAnnual = billingCycle === "annual";

  // Pricing Data
  const pediatriaPlans = [
    {
      name: "Individual",
      monthlyPrice: 300,
      annualPrice: 255,
      userNote: "1 Médico(a)",
      assistants: "1 Assistente inclusa sem custo",
      description: "Ideal para consultórios pediátricos individuais",
      popular: false,
      features: [
        "1 Usuário Médico e 1 Assistente",
        "Todas as funções de prontuário liberadas",
        "Transcrição de consultas com IA",
        "Curvas de crescimento OMS e CDC",
        "Gestão vacinal completa da SBP",
        "Prescrição Digital Memed inclusa",
        "Backup automático e segurança LGPD",
        "Suporte direto da equipe Opes",
      ],
      cta: "Começar Teste Grátis (15 dias)",
      ctaVariant: "outline" as const,
    },
    {
      name: "Clínicas Pediátricas",
      monthlyPrice: 285,
      annualPrice: 242,
      pricePerUser: "por médico",
      userNote: "2 a 9 Médicos",
      assistants: "Até 3 Assistentes inclusas",
      description: "Para clínicas pediátricas e policlínicas em expansão",
      popular: true,
      badge: "MAIS ESCOLHIDO",
      features: [
        "2 a 9 Médicos e 3 Assistentes",
        "5% de economia por médico",
        "Agendas compartilhadas por profissional",
        "Todas as ferramentas de IA liberadas",
        "Curvas OMS e CDC e vacinas para todos",
        "Relatórios de faturamento da clínica",
        "Onboarding assistido com a equipe",
        "Suporte prioritário via WhatsApp",
      ],
      cta: "Testar com Minha Clínica",
      ctaVariant: "default" as const,
    },
    {
      name: "Corporativo e Redes",
      monthlyPrice: 170,
      annualPrice: 145,
      pricePerUser: "por médico",
      userNote: "10 ou mais Médicos",
      assistants: "Até 5 Assistentes inclusas",
      description: "Para centros médicos de grande porte e redes pediátricas",
      popular: false,
      badge: "43% DE ECONOMIA",
      features: [
        "10 ou mais Médicos e 5 Assistentes",
        "Maior desconto por profissional (R$ 170/mês)",
        "Acesso ilimitado a todas as funções e IA",
        "Faturamento e conciliação multi unidade",
        "Gestão centralizada de permissões",
        "Treinamento personalizado de equipe",
        "Gerente de conta dedicado",
        "SLA de suporte prioritário 24/7",
      ],
      cta: "Falar com Consultor",
      ctaVariant: "outline" as const,
    },
  ];

  const especialidadesPlans = [
    {
      name: "Individual Especialista",
      monthlyPrice: 200,
      annualPrice: 170,
      userNote: "1 Terapeuta ou Psicólogo(a)",
      assistants: "1 Assistente inclusa sem custo",
      description: "Para Terapeutas Ocupacionais, Psicólogos e Enfermeiros",
      popular: false,
      features: [
        "1 Usuário Especialista e 1 Assistente",
        "Prontuário sob medida para sua área",
        "Transcrição de sessões com IA",
        "Avaliação de neurodesenvolvimento",
        "Emissão de laudos e pareceres escolares",
        "Teleconsulta segura integrada",
        "Agenda e controle financeiro",
        "Sigilo ético e conformidade LGPD",
      ],
      cta: "Começar Teste Grátis (15 dias)",
      ctaVariant: "outline" as const,
    },
    {
      name: "Clínicas Multidisciplinares",
      monthlyPrice: 185,
      annualPrice: 157,
      pricePerUser: "por profissional",
      userNote: "2 a 9 Terapeutas",
      assistants: "Até 3 Assistentes inclusas",
      description: "Para equipes de desenvolvimento infantil integrado",
      popular: true,
      badge: "MAIS ESCOLHIDO",
      features: [
        "2 a 9 Terapeutas/Psicólogos e 3 Assistentes",
        "Desconto progressivo por profissional",
        "Prontuários e agendas integradas da equipe",
        "Transcrição por IA em todos os usuários",
        "Relatórios multidisciplinares compartilhados",
        "Gestão financeira e relatórios de sessões",
        "Treinamento de recepção e assistentes",
        "Suporte prioritário via WhatsApp",
      ],
      cta: "Testar com a Equipe",
      ctaVariant: "default" as const,
    },
    {
      name: "Centros e Clínicas Integradas",
      monthlyPrice: 170,
      annualPrice: 145,
      pricePerUser: "por profissional",
      userNote: "10 ou mais Profissionais",
      assistants: "Até 5 Assistentes inclusas",
      description: "Para grandes clínicas de reabilitação e desenvolvimento",
      popular: false,
      badge: "MÁXIMA ECONOMIA",
      features: [
        "10 ou mais Terapeutas e 5 Assistentes",
        "Menor custo por usuário da categoria",
        "Ferramentas completas sem qualquer limite",
        "Controle financeiro de múltiplos consultórios",
        "Configuração personalizada de formulários",
        "Onboarding completo para todo o time",
        "Atendimento dedicado com a consultoria",
        "Suporte técnico prioritário",
      ],
      cta: "Falar com Consultor",
      ctaVariant: "outline" as const,
    },
  ];

  const currentPlans = isPediatria ? pediatriaPlans : especialidadesPlans;

  return (
    <section id="precos" className="section-padding bg-background relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            PLANOS E VALORES TRANSPARENTES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Investimento sob medida para o seu consultório
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Sem taxa de adesão, sem fidelidade obrigatória e com <strong>15 dias de teste grátis</strong> sem precisar cadastrar cartão de crédito.
          </p>
        </div>

        {/* Product Selector Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 rounded-xl bg-muted border border-border max-w-sm w-full shadow-inner">
            <button
              onClick={() => setSelectedProduct("pediatria")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                isPediatria
                  ? "bg-card text-primary shadow-sm border border-border/80"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Stethoscope size={14} className="text-primary" />
              <span>Opes Pediatria (R$ 300)</span>
            </button>

            <button
              onClick={() => setSelectedProduct("especialidades")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                !isPediatria
                  ? "bg-card text-primary shadow-sm border border-border/80"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Activity size={14} className="text-primary" />
              <span>Opes Especialidades (R$ 200)</span>
            </button>
          </div>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span
            className={`text-xs sm:text-sm font-semibold cursor-pointer ${
              !isAnnual ? "text-foreground font-bold" : "text-muted-foreground"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Faturamento Mensal
          </span>

          <button
            onClick={() => setBillingCycle(isAnnual ? "monthly" : "annual")}
            className="relative w-12 h-6 rounded-full bg-muted border border-border transition-colors p-0.5 flex items-center focus:outline-none"
            aria-label="Alternar ciclo de pagamento"
          >
            <div
              className={`w-4 h-4 rounded-full bg-primary transition-transform duration-200 shadow-sm ${
                isAnnual ? "translate-x-6 bg-emerald-600" : "translate-x-0"
              }`}
            />
          </button>

          <span
            className={`text-xs sm:text-sm font-semibold flex items-center gap-1.5 cursor-pointer ${
              isAnnual ? "text-emerald-700 dark:text-emerald-400 font-bold" : "text-muted-foreground"
            }`}
            onClick={() => setBillingCycle("annual")}
          >
            <span>Plano Anual</span>
            <span className="bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
              15% OFF
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto items-stretch">
          {currentPlans.map((plan, index) => {
            const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={index}
                className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  plan.popular
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-xl scale-105 z-10"
                    : "bg-card border-border/80 hover:border-primary/40 hover:shadow-md"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black shadow-md">
                      <Star size={11} fill="currentColor" />
                      {plan.badge || "MAIS POPULAR"}
                    </div>
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3
                        className={`text-lg font-bold ${
                          plan.popular ? "text-primary-foreground" : "text-foreground"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      {!plan.popular && plan.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs ${
                        plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div
                    className={`mb-4 p-3 rounded-xl border ${
                      plan.popular
                        ? "bg-black/15 border-white/20"
                        : "bg-muted/60 border-border"
                    }`}
                  >
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-xs font-semibold ${
                          plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        R$
                      </span>
                      <span
                        className={`text-3xl font-black tracking-tight ${
                          plan.popular ? "text-primary-foreground" : "text-primary"
                        }`}
                      >
                        {displayPrice}
                      </span>
                      <span
                        className={`text-xs ${
                          plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        /mês {plan.pricePerUser ? `(${plan.pricePerUser})` : ""}
                      </span>
                    </div>

                    <div className="mt-1.5 flex items-center justify-between text-[11px]">
                      <span
                        className={`font-semibold ${
                          plan.popular ? "text-primary-foreground" : "text-primary font-bold"
                        }`}
                      >
                        {plan.userNote}
                      </span>
                      <span
                        className={`${
                          plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {isAnnual ? "Cobrado anualmente" : "Cobrança mensal"}
                      </span>
                    </div>

                    <p
                      className={`text-[10px] mt-1 pt-1 border-t ${
                        plan.popular ? "border-white/20 text-primary-foreground/90" : "border-border text-muted-foreground font-medium"
                      }`}
                    >
                      ✓ {plan.assistants}
                    </p>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-xs">
                        <div
                          className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.popular ? "bg-white/20" : "bg-primary/10 text-primary"
                          }`}
                        >
                          <Check
                            size={10}
                            className={plan.popular ? "text-primary-foreground" : "text-primary"}
                          />
                        </div>
                        <span
                          className={`${
                            plan.popular ? "text-primary-foreground/90" : "text-foreground/85"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="space-y-2 pt-1">
                  <Button
                    className={`w-full font-bold shadow-sm h-9 text-xs ${
                      plan.popular
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-primary"
                    }`}
                    size="sm"
                    asChild
                  >
                    <a href="https://www.opespediatra.com/login">{plan.cta}</a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full text-[11px] gap-1 h-7 ${
                      plan.popular
                        ? "text-primary-foreground/80 hover:text-white hover:bg-white/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    asChild
                  >
                    <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                      <MessageSquare size={12} />
                      Tirar dúvidas com a Consultora
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Notes */}
        <div className="mt-8 max-w-3xl mx-auto text-center space-y-1.5">
          <p className="text-xs text-muted-foreground">
            * <strong>Usuários Assistentes (Secretárias e Recepção)</strong> estão inclusos nas quantidades especificadas em cada plano sem qualquer cobrança adicional.
          </p>
          <p className="text-xs text-muted-foreground">
            Precisa de uma estrutura personalizada para mais de 20 profissionais ou múltiplos consultórios?{" "}
            <a
              href={consultoraWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline"
            >
              Fale diretamente com nossa consultora comercial.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
