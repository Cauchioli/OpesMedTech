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
    encodeURIComponent("Olá! Gostaria de uma proposta personalizada sobre os planos da Opes Medtech.");

  const isPediatria = selectedProduct === "pediatria";
  const isAnnual = billingCycle === "annual";

  // Tabelas de Preços Oficiais
  const pediatriaPlans = [
    {
      name: "Individual",
      monthlyPrice: 299,
      annualPrice: 254,
      popular: false,
      features: [
        "1 Médico + 1 Assistente",
        "Sem limites de funcionalidades",
        "IA de Transcrição de voz e Análise Preditiva",
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
      savingsBadge: "5% mais econômico",
      popular: true,
      badge: "MAIS ESCOLHIDO",
      features: [
        "2 a 9 Médicos + 3 Assistentes",
        "Todos os benefícios do Plano Individual",
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
      savingsBadge: "10% mais econômico",
      popular: false,
      features: [
        "10+ Médicos + 5 Assistentes",
        "Todos os benefícios do Plano Clínicas",
        "10% mais econômico",
        "15% de desconto na assinatura anual",
        "Suporte Dedicado",
      ],
      cta: "Falar com a Consultora",
      ctaVariant: "outline" as const,
    },
  ];

  const especialidadesPlans = [
    {
      name: "Individual",
      monthlyPrice: 199,
      annualPrice: 169,
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
      savingsBadge: "5% mais econômico",
      popular: true,
      badge: "MAIS ESCOLHIDO",
      features: [
        "2 a 9 Profissionais da saúde + 3 Assistentes",
        "Todos os benefícios do Plano Individual",
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
      savingsBadge: "10% mais econômico",
      popular: false,
      features: [
        "10+ Profissionais de saúde + 5 Assistentes",
        "Todos os benefícios do Plano Clínicas",
        "10% mais econômico",
        "15% de desconto na assinatura anual",
        "Suporte Dedicado",
      ],
      cta: "Falar com a Consultora",
      ctaVariant: "outline" as const,
    },
  ];

  const currentPlans = isPediatria ? pediatriaPlans : especialidadesPlans;

  return (
    <section id="precos" className="section-padding bg-background relative">
      <div className="container-custom">
        {/* Header Clean */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            PLANOS E PREÇOS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
            Escolha o plano ideal para sua clínica
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Teste grátis por 15 dias, sem cartão de crédito e sem fidelidade
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
              <span>Opes Pediatra (R$ 299)</span>
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
              <span>Opes Especialidades (R$ 199)</span>
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
            Mensal
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
            <span>Anual</span>
            <span className="bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
              Desconto Especial
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid (Individual | Clínicas | Redes) */}
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
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-400 text-slate-900 text-[10px] font-black shadow-md">
                      <Star size={11} fill="currentColor" />
                      {plan.badge || "MAIS ESCOLHIDO"}
                    </div>
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="mb-4">
                    <h3
                      className={`text-xl font-bold ${
                        plan.popular ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price Block */}
                  <div className="mb-4">
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
                          plan.popular ? "text-primary-foreground" : "text-foreground"
                        }`}
                      >
                        {displayPrice}
                      </span>
                      <span
                        className={`text-xs ${
                          plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        /mês {plan.pricePerUser ? plan.pricePerUser : ""}
                      </span>
                    </div>

                    {plan.savingsBadge && (
                      <p
                        className={`text-[11px] font-semibold mt-1 ${
                          plan.popular ? "text-white" : "text-purple-600 dark:text-purple-400"
                        }`}
                      >
                        {plan.savingsBadge}
                      </p>
                    )}
                  </div>

                  {/* Feature List Clean */}
                  <ul className="space-y-2.5 mb-6 pt-2 border-t border-border/40">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-xs">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.popular ? "bg-white/20" : "bg-primary/10 text-primary"
                          }`}
                        >
                          <Check
                            size={11}
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
                  {plan.ctaVariant === "default" || plan.popular ? (
                    <Button
                      className="w-full font-bold shadow-sm h-10 text-xs bg-white text-primary hover:bg-white/95"
                      size="sm"
                      asChild
                    >
                      <a href="https://www.opespediatra.com/login">{plan.cta}</a>
                    </Button>
                  ) : plan.name === "Redes" ? (
                    <Button
                      variant="outline"
                      className="w-full text-xs font-semibold border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 h-10"
                      size="sm"
                      asChild
                    >
                      <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                        <MessageSquare size={13} className="mr-1.5 text-emerald-500" />
                        Falar com a Consultora
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full font-bold shadow-sm h-10 text-xs border-primary/30 hover:bg-primary/5 text-foreground"
                      size="sm"
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

        {/* Informational Notes Clean */}
        <div className="mt-8 max-w-2xl mx-auto text-center space-y-1">
          <p className="text-xs text-muted-foreground">
            Precisa de um plano customizado para sua rede de clínicas?{" "}
            <a
              href={consultoraWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline"
            >
              Falar com a Consultora
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
