import { UserPlus, Rocket, CreditCard } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Cadastre-se grátis",
      description: "Crie sua conta em menos de 2 minutos, sem cartão de crédito necessário.",
    },
    {
      icon: Rocket,
      step: "02",
      title: "Teste por 15 dias",
      description: "Explore todas as funcionalidades sem limites, com suporte humanizado incluso.",
    },
    {
      icon: CreditCard,
      step: "03",
      title: "Escolha seu plano",
      description: "Selecione o plano ideal para seu consultório e cancele quando quiser sem fidelidade.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            COMO FUNCIONA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Comece em 3 passos simples
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Sem burocracia e sem instalações complicadas: você pode começar a usar hoje mesmo.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[18%] right-[18%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Step number badge */}
                <div className="relative inline-flex mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md">
                    <item.icon size={24} className="text-primary-foreground" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center shadow-sm">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
