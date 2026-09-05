import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DudaWhatsAppFloating from "@/components/DudaWhatsAppFloating";
import { Button } from "@/components/ui/button";
import {
  HeartPulse,
  Mic,
  FileText,
  Calendar,
  LineChart,
  Syringe,
  Shield,
  ArrowRight,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import platformDashboard from "@/assets/platform-dashboard.jpg";
import logoOpesEspecialidades from "@/assets/logo-opes-especialidades.jpg";

const LPEnfermagem: React.FC = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Atuo na área de Enfermagem e Fisioterapia pediátrica e gostaria de testar o Opes Especialidades por 15 dias.");

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header specialtyTitle="Enfermagem e Fisioterapia" />

      <main>
        {/* Hero Section Clean */}
        <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 overflow-hidden bg-gradient-radial">
          <div className="container-custom relative">
            <div className="text-center max-w-2xl mx-auto mb-8">
              {/* Brand & Specialty Badge */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-card border border-border/80 shadow-sm">
                  <img src={logoOpesEspecialidades} alt="Opes Especialidades" className="h-4 w-auto object-contain" />
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider border-l border-border pl-2">
                    COREN / CREFITO
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3 leading-tight">
                Prontuário com <span className="text-gradient">IA para Enfermagem e Fisio</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-5 leading-relaxed">
                Anotações clínicas online, transcrição de voz, curvas de crescimento, vacinas e agendamento por <strong className="text-foreground">R$ 199/mês</strong>.
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
                Prontuário ágil para consultório, clínica ou atendimento domiciliar
              </p>
            </div>

            {/* Platform Feature Preview */}
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
              <img
                src={platformDashboard}
                alt="Opes Especialidades, Dashboard de Cuidados Pediátricos"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Funcionalidades Oficiais de Enfermagem e Fisio */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                FUNCIONALIDADES PRINCIPAIS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Tudo o que sua rotina de cuidados precisa
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                {
                  icon: Calendar,
                  title: "Agendamento Integrado",
                  desc: "Controle de horários na clínica e visitas domiciliares com facilidade.",
                },
                {
                  icon: FileText,
                  title: "Anotações Clínicas Online",
                  desc: "Registro ágil de procedimentos, sinais vitais e evolução do paciente.",
                },
                {
                  icon: Mic,
                  title: "Transcrição de Voz com IA",
                  desc: "Dite a evolução e condutas durante o plantão sem perder tempo digitando.",
                },
                {
                  icon: LineChart,
                  title: "Gráficos de Crescimento",
                  desc: "Curvas de crescimento antropométrico automáticas nos padrões OMS e CDC.",
                },
                {
                  icon: Syringe,
                  title: "Gestão de Vacinas",
                  desc: "Controle da caderneta de vacinação da criança com histórico completo.",
                },
                {
                  icon: CheckCircle,
                  title: "Emissão de Atestados",
                  desc: "Declarações de atendimento, relatórios de alta e orientações aos pais.",
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

        {/* Pricing Dedicated Enfermagem Clean */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                PLANOS OFICIAIS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                Investimento sob medida para Enfermagem e Fisioterapia
              </h2>
              <p className="text-xs text-muted-foreground">
                Planos mensais e anuais com desconto exclusivo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {/* Individual */}
              <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Individual</h3>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-primary">199</span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">
                      15% de desconto no plano anual
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 pt-2 border-t border-border/40">
                    <li className="flex items-center gap-1.5">✓ 1 Profissional da saúde + 1 Assistente</li>
                    <li className="flex items-center gap-1.5">✓ Funcionalidades conforme área de atuação</li>
                    <li className="flex items-center gap-1.5">✓ IA para Transcrição</li>
                    <li className="flex items-center gap-1.5">✓ Relatórios Financeiros</li>
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
                  <h3 className="text-xl font-bold mb-3">Clínicas</h3>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold">R$</span>
                      <span className="text-3xl font-black text-white">185</span>
                      <span className="text-xs text-primary-foreground/80">/mês por profissional</span>
                    </div>
                    <p className="text-xs font-semibold text-white mt-0.5">5% mais econômico</p>
                  </div>
                  <ul className="space-y-2 text-xs text-primary-foreground/90 mb-5 pt-2 border-t border-white/20">
                    <li className="flex items-center gap-1.5">✓ 2 a 9 Profissionais da saúde + 3 Assistentes</li>
                    <li className="flex items-center gap-1.5">✓ Todos os benefícios do Plano Individual</li>
                    <li className="flex items-center gap-1.5">✓ 5% mais econômico</li>
                    <li className="flex items-center gap-1.5">✓ 10% de desconto no plano anual</li>
                    <li className="flex items-center gap-1.5">✓ Suporte Prioritário</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-white text-primary hover:bg-white/95 text-xs font-bold shadow-md h-9">
                  <a href="https://www.opespediatra.com/login">Começar teste grátis</a>
                </Button>
              </div>

              {/* Redes */}
              <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Redes</h3>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-primary">170</span>
                      <span className="text-xs text-muted-foreground">/mês por profissional</span>
                    </div>
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold mt-0.5">10% mais econômico</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 pt-2 border-t border-border/40">
                    <li className="flex items-center gap-1.5">✓ 10+ Profissionais de saúde + 5 Assistentes</li>
                    <li className="flex items-center gap-1.5">✓ Todos os benefícios do Plano Clínicas</li>
                    <li className="flex items-center gap-1.5">✓ 10% mais econômico</li>
                    <li className="flex items-center gap-1.5">✓ 15% de desconto na assinatura anual</li>
                    <li className="flex items-center gap-1.5">✓ Suporte Dedicado</li>
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
      <DudaWhatsAppFloating specialtyContext="Enfermagem" />
    </div>
  );
};

export default LPEnfermagem;
