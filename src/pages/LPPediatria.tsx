import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DudaWhatsAppFloating from "@/components/DudaWhatsAppFloating";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Mic,
  LineChart,
  Syringe,
  Pill,
  Calendar,
  Shield,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const LPPediatria: React.FC = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Sou médico(a) pediatra e gostaria de testar o Opes Pediatria por 15 dias.");

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header specialtyTitle="Pediatria" />

      <main>
        {/* Hero Section LP Pediatria */}
        <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 overflow-hidden bg-gradient-radial">
          <div className="container-custom relative">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                <Stethoscope size={14} />
                Exclusivo para Médicos Pediatras (CRM)
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 leading-tight">
                Pediatria mais <span className="text-gradient">inteligente com IA</span>: 70% menos tempo digitando
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
                Prontuário pediátrico completo, curvas de crescimento OMS e CDC, gestão vacinal rigorosa da SBP e transcrição automática de consultas por voz.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
                <Button
                  size="default"
                  className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 shadow-primary text-sm px-6 h-10 font-bold"
                  asChild
                >
                  <a href="https://www.opespediatra.com/login">
                    Iniciar Teste Grátis de 15 Dias
                    <ArrowRight size={16} className="ml-1.5" />
                  </a>
                </Button>

                <Button
                  size="default"
                  variant="outline"
                  className="w-full sm:w-auto border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 font-bold px-5 h-10 gap-1.5"
                  asChild
                >
                  <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={16} className="text-emerald-500" />
                    Falar com a Consultora
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                ✓ Sem necessidade de cartão de crédito • Acesso imediato a todas as ferramentas • Suporte humanizado
              </p>
            </div>

            {/* Video Showcase */}
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border bg-black aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/nf7faWHi-u8?rel=0&modestbranding=1"
                title="Opes Pediatria, Demonstração Oficial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                DESENVOLVIDO PARA A ROTINA PEDIÁTRICA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Tudo o que seu consultório pediátrico precisa em um só lugar
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Mic,
                  title: "Transcrição com IA Não Intrusiva",
                  desc: "Apenas converse com os pais. A inteligência artificial transcreve a consulta e estrutura a anamnese automaticamente.",
                },
                {
                  icon: LineChart,
                  title: "Curvas de Crescimento OMS e CDC",
                  desc: "Cálculos precisos de percentis e escores z (peso, estatura e IMC) prontos para compartilhamento via WhatsApp.",
                },
                {
                  icon: Syringe,
                  title: "Gestão Vacinal Completa SBP",
                  desc: "Calendário vacinal atualizado conforme diretrizes da Sociedade Brasileira de Pediatria com alertas de atrasos.",
                },
                {
                  icon: Pill,
                  title: "Prescrição Digital Integrada (Memed)",
                  desc: "Emita receitas e atestados com assinatura digital ICP Brasil e envie links válidos para qualquer farmácia do país.",
                },
                {
                  icon: Calendar,
                  title: "Agenda Inteligente e Fila de Espera",
                  desc: "Controle de consultas, confirmações automáticas por WhatsApp e sincronização instantânea com sua secretária.",
                },
                {
                  icon: Shield,
                  title: "100% em Nuvem e Proteção LGPD",
                  desc: "Seus dados e de seus pequenos pacientes protegidos com criptografia de padrão bancário e conformidade CFM.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-card border border-border/70 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Banner Pediatria */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                PLANOS OFICIAIS OPES PEDIATRIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Investimento claro e sem surpresas
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Planos mensais ou anuais com <strong>15% de desconto</strong> e secretárias inclusas sem custo adicional.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {/* Individual */}
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Individual (1 Médico)</h3>
                  <p className="text-xs text-muted-foreground mb-4">Para consultório pediátrico individual</p>
                  <div className="mb-4 p-3 rounded-xl bg-muted/60 border border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-primary">300</span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1.5">
                      Ou R$ 255/mês no Plano Anual (15% OFF)
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">1 Médico e 1 Assistente inclusa</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5">
                    <li className="flex items-center gap-1.5">✓ Prontuário pediátrico ilimitado</li>
                    <li className="flex items-center gap-1.5">✓ Transcrição de consultas com IA</li>
                    <li className="flex items-center gap-1.5">✓ Curvas OMS e CDC e vacinas SBP</li>
                    <li className="flex items-center gap-1.5">✓ Prescrição Memed inclusa</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-gradient-primary text-xs font-bold h-9">
                  <a href="https://www.opespediatra.com/login">Testar Grátis 15 Dias</a>
                </Button>
              </div>

              {/* Clínicas */}
              <div className="p-6 rounded-2xl bg-gradient-primary text-primary-foreground shadow-xl scale-105 relative flex flex-col justify-between">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
                  MAIS ESCOLHIDO
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Clínicas Pediátricas</h3>
                  <p className="text-xs text-primary-foreground/80 mb-4">De 2 a 9 Médicos e 3 Assistentes</p>
                  <div className="mb-4 p-3 rounded-xl bg-black/15 border border-white/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold">R$</span>
                      <span className="text-3xl font-black text-white">285</span>
                      <span className="text-xs text-primary-foreground/80">/mês por médico</span>
                    </div>
                    <p className="text-xs font-semibold text-white mt-1.5">
                      Ou R$ 242/mês no Plano Anual (15% OFF)
                    </p>
                    <p className="text-[10px] text-primary-foreground/90 mt-0.5">Até 3 Assistentes inclusas</p>
                  </div>
                  <ul className="space-y-2 text-xs text-primary-foreground/90 mb-5">
                    <li className="flex items-center gap-1.5">✓ Todas as ferramentas para todos os médicos</li>
                    <li className="flex items-center gap-1.5">✓ Agendas compartilhadas e permissões</li>
                    <li className="flex items-center gap-1.5">✓ Relatórios gerenciais da clínica</li>
                    <li className="flex items-center gap-1.5">✓ Suporte prioritário via WhatsApp</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-white text-primary hover:bg-white/95 text-xs font-bold shadow-md h-9">
                  <a href="https://www.opespediatra.com/login">Testar com a Clínica</a>
                </Button>
              </div>

              {/* Corporativo */}
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Redes e Policlínicas</h3>
                  <p className="text-xs text-muted-foreground mb-4">Para 10 ou mais Médicos</p>
                  <div className="mb-4 p-3 rounded-xl bg-muted/60 border border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-primary">170</span>
                      <span className="text-xs text-muted-foreground">/mês por médico</span>
                    </div>
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1.5">
                      Ou R$ 145/mês no Plano Anual (15% OFF)
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Até 5 Assistentes inclusas</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5">
                    <li className="flex items-center gap-1.5">✓ Maior economia por profissional</li>
                    <li className="flex items-center gap-1.5">✓ Onboarding assistido e treinamento</li>
                    <li className="flex items-center gap-1.5">✓ Gerente de contas dedicado</li>
                    <li className="flex items-center gap-1.5">✓ Suporte técnico 24/7</li>
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-full text-xs font-bold border-emerald-500/40 text-emerald-700 dark:text-emerald-400 h-9">
                  <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                    Falar com a Consultora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <DudaWhatsAppFloating specialtyContext="Pediatria" />
    </div>
  );
};

export default LPPediatria;
