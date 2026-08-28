import { ArrowRight, MessageSquare, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de conversar sobre a Opes Medtech e iniciar meu teste de 15 dias.");

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-6 sm:p-10 md:p-12 text-center shadow-xl">
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
              <Sparkles size={12} className="text-amber-300" />
              Experimente a Opes Medtech Hoje
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
              Pronto para transformar sua prática clínica e economizar horas toda semana?
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-primary-foreground/85 mb-8 max-w-xl mx-auto leading-relaxed">
              Junte-se a pediatras, terapeutas ocupacionais, psicólogos e enfermeiros que já utilizam a IA não intrusiva para focar no que realmente importa: o cuidado com os pequenos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                size="default"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/95 shadow-md text-sm px-6 h-10 font-bold group"
                asChild
              >
                <a href="https://www.opespediatra.com/login">
                  Iniciar Teste Grátis de 15 Dias
                  <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                size="default"
                variant="outline"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-400/40 shadow-md text-sm px-5 h-10 font-bold gap-1.5"
                asChild
              >
                <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={16} />
                  Falar com a Consultora
                </a>
              </Button>
            </div>

            {/* Trust items */}
            <div className="mt-6 pt-6 border-t border-white/15 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-primary-foreground/80">
              <div className="flex items-center gap-1">
                <ShieldCheck size={14} />
                <span>Sem necessidade de cartão de crédito</span>
              </div>
              <div className="flex items-center gap-1">
                <UserCheck size={14} />
                <span>Atendimento humanizado sem robôs</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles size={14} />
                <span>Suporte completo durante o teste</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
