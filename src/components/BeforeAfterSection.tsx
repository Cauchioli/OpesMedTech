import { X, Check } from "lucide-react";

const BeforeAfterSection = () => {
  const beforeItems = [
    "Horas digitando prontuários manualmente",
    "Receitas ilegíveis e erros de transcrição",
    "Planilhas Excel para controle de vacinas",
    "Agenda física e ligações para confirmar",
    "Papelada acumulada no consultório",
    "Dificuldade em acompanhar evolução",
  ];

  const afterItems = [
    "IA transcreve consultas automaticamente",
    "Prescrições digitais legíveis e seguras",
    "Gestão de vacinas integrada e inteligente",
    "Agenda online com confirmação automática",
    "Tudo digital e organizado na nuvem",
    "Gráficos evolutivos compartilháveis",
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            TRANSFORMAÇÃO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Com tecnologia de IA conseguimos sair disso...
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Veja como sua rotina pode mudar com nossa plataforma
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto relative">
          {/* Before */}
          <div className="p-5 sm:p-6 rounded-xl bg-card border border-destructive/20 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <X size={16} className="text-destructive" />
              </div>
              <h3 className="text-base font-bold text-foreground">Papelada, receitas ilegíveis e digitação manual</h3>
            </div>
            <ul className="space-y-2.5">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X size={10} className="text-destructive" />
                  </div>
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow indicator */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-bold text-xs shadow-md">
              → Para isso...
            </div>
          </div>
          
          {/* After */}
          <div className="p-5 sm:p-6 rounded-xl bg-gradient-primary text-primary-foreground shadow-lg">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Check size={16} className="text-primary-foreground" />
              </div>
              <h3 className="text-base font-bold">Gestão inteligente, foco no paciente</h3>
            </div>
            <ul className="space-y-2.5">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
