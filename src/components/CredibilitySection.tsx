import { Users, Zap, Calendar } from "lucide-react";

const CredibilitySection = () => {
  const metrics = [
    {
      icon: Users,
      value: "500+",
      label: "Consultas diárias",
    },
    {
      icon: Zap,
      value: "70%",
      label: "Menos digitação",
    },
    {
      icon: Calendar,
      value: "15 dias",
      label: "Teste grátis",
    },
  ];

  return (
    <section className="py-8 md:py-10 border-y border-border/50 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-xs sm:text-sm font-medium">
            Confiado por pediatras e especialistas em todo o Brasil
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-2 shadow-sm">
                <metric.icon size={18} className="text-primary-foreground" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-0.5">
                {metric.value}
              </p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
