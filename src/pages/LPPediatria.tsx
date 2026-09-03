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
    encodeURIComponent("Olá! Sou médico(a) pediatra e gostaria de testar o Opes Pediatra por 15 dias.");

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header specialtyTitle="Pediatria" />

      <main>
        {/* Hero Section LP Pediatria Clean */}
        <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 overflow-hidden bg-gradient-radial">
          <div className="container-custom relative">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
                <Stethoscope size={14} />
                Para Médicos Pediatras (CRM)
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3 leading-tight">
                Pediatria com <span className="text-gradient">IA e Menos Digitação</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-5 leading-relaxed">
                Prontuário médico, curvas de crescimento OMS e CDC, gestão de vacinas e prescrição Memed.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center mb-4">
                <Button
                  size="default"
                  className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 shadow-primary text-xs sm:text-sm px-6 h-10 font-bold"
                  asChild
                >
                  <a href="https://www.opespediatra.com/login">
                    Iniciar Teste Grátis de 15 Dias
                    <ArrowRight size={15} className="ml-1.5" />
                  </a>
                </Button>

                <Button
                  size="default"
                  variant="outline"
                  className="w-full sm:w-auto border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 font-bold px-5 h-10 gap-1.5 text-xs sm:text-sm"
                  asChild
                >
                  <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={15} className="text-emerald-500" />
                    Falar com a Consultora
                  </a>
                </Button>
              </div>

              <p className="text-[11px] text-muted-foreground">
                Sem cartão de crédito • 15 dias de acesso liberado
              </p>
            </div>

            {/* Video Showcase */}
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border bg-black aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/nf7faWHi-u8?rel=0&modestbranding=1"
                title="Opes Pediatra, Demonstração Oficial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Benefits Grid Clean */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                RECURSOS PARA PEDIATRIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Tudo em uma única plataforma
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                {
                  icon: Mic,
                  title: "Transcrição de Consultas por Voz",
                  desc: "A inteligência artificial transcreve a consulta e preenche a anamnese automaticamente.",
                },
                {
                  icon: LineChart,
                  title: "Curvas de Crescimento OMS e CDC",
                  desc: "Percentis e escores z automáticos, compartilháveis no WhatsApp dos pais.",
                },
                {
                  icon: Syringe,
                  title: "Controle de Vacinas SBP",
                  desc: "Calendário vacinal atualizado com alertas automáticos de doses atrasadas.",
                },
                {
                  icon: Pill,
                  title: "Prescrição Digital Memed",
                  desc: "Receituário com assinatura digital válida em todas as farmácias do Brasil.",
                },
                {
                  icon: Calendar,
                  title: "Agendamento Integrado",
                  desc: "Agenda inteligente, confirmações automáticas e fila de espera organizada.",
                },
                {
                  icon: Shield,
                  title: "100% em Nuvem e LGPD",
                  desc: "Criptografia de ponta a ponta e total conformidade com as normas do CFM.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border/80 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2.5">
                    <item.icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Banner Pediatria Clean */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                PLANOS OFICIAIS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                Valores transparentes para o seu consultório
              </h2>
              <p className="text-xs text-muted-foreground">
                Desconto de 15% na assinatura anual
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {/* Individual */}
              <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-0.5">Individual</h3>
                  <p className="text-xs text-muted-foreground mb-3">Ideal para consultórios individuais</p>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-primary">299</span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">1 Médico + 1 Assistente inclusa</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 pt-2 border-t border-border/40">
                    <li className="flex items-center gap-1.5">✓ Sem limite de funcionalidades</li>
                    <li className="flex items-center gap-1.5">✓ Ferramentas de IA incluídas</li>
                    <li className="flex items-center gap-1.5">✓ Transcrição de consultas</li>
                    <li className="flex items-center gap-1.5">✓ Gestão de vacinas</li>
                    <li className="flex items-center gap-1.5">✓ Atualizações automáticas</li>
                    <li className="flex items-center gap-1.5">✓ Suporte prioritário</li>
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-full text-xs font-bold h-9">
                  <a href="https://www.opespediatra.com/login">Começar teste grátis</a>
                </Button>
              </div>

              {/* Clínicas */}
              <div className="p-5 rounded-2xl bg-gradient-primary text-primary-foreground shadow-xl scale-105 relative flex flex-col justify-between">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
                  MAIS ESCOLHIDO
                </div>
                <div>
                  <h3 className="text-base font-bold mb-0.5">Clínicas</h3>
                  <p className="text-xs text-primary-foreground/80 mb-3">Para clínicas em crescimento</p>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold">R$</span>
                      <span className="text-3xl font-black text-white">285</span>
                      <span className="text-xs text-primary-foreground/80">/mês por médico</span>
                    </div>
                    <p className="text-xs font-semibold text-white mt-0.5">5% mais econômico</p>
                  </div>
                  <ul className="space-y-2 text-xs text-primary-foreground/90 mb-5 pt-2 border-t border-white/20">
                    <li className="flex items-center gap-1.5">✓ 2 a 9 Médicos + 3 Assistentes</li>
                    <li className="flex items-center gap-1.5">✓ Sem limite de funcionalidades</li>
                    <li className="flex items-center gap-1.5">✓ Ferramentas de IA incluídas</li>
                    <li className="flex items-center gap-1.5">✓ Desconto de 15% na assinatura Anual</li>
                    <li className="flex items-center gap-1.5">✓ Relatórios avançados</li>
                    <li className="flex items-center gap-1.5">✓ Suporte prioritário</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-white text-primary hover:bg-white/95 text-xs font-bold shadow-md h-9">
                  <a href="https://www.opespediatra.com/login">Começar teste grátis</a>
                </Button>
              </div>

              {/* Redes */}
              <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-0.5">Redes</h3>
                  <p className="text-xs text-muted-foreground mb-3">Para grandes clínicas e redes</p>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-primary">269</span>
                      <span className="text-xs text-muted-foreground">/mês por médico</span>
                    </div>
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold mt-0.5">10% mais econômico</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 pt-2 border-t border-border/40">
                    <li className="flex items-center gap-1.5">✓ 10+ Médicos + 5 Assistentes</li>
                    <li className="flex items-center gap-1.5">✓ Sem limite de funcionalidades</li>
                    <li className="flex items-center gap-1.5">✓ Ferramentas de IA incluídas</li>
                    <li className="flex items-center gap-1.5">✓ Desconto de 15% na assinatura Anual</li>
                    <li className="flex items-center gap-1.5">✓ Onboarding personalizado</li>
                    <li className="flex items-center gap-1.5">✓ Suporte dedicado 24/7</li>
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
