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
  ArrowRight,
  MessageSquare,
  CheckCircle,
  Check,
} from "lucide-react";
import logoOpesEspecialidades from "@/assets/logo-opes-especialidades.jpg";
import heroEnfermagemOficial from "@/assets/hero-enfermagem-oficial.jpeg";
import telaAgenda from "@/assets/telas/tela-agenda.jpeg";
import telaAnotacao from "@/assets/telas/tela-anotacao-transcricao.jpeg";
import telaGraficos from "@/assets/telas/tela-graficos-curvas.jpeg";
import telaVacinas from "@/assets/telas/tela-vacinas.jpeg";
import telaExames from "@/assets/telas/tela-exames-voz.jpeg";
import telaTeleconsulta from "@/assets/telas/tela-teleconsulta.jpeg";
import telaFinanceiro from "@/assets/telas/tela-financeiro.jpeg";

const LPEnfermagem: React.FC = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Atuo na área de Enfermagem e Fisioterapia pediátrica e gostaria de testar o Opes Especialidades por 15 dias.");

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header specialtyTitle="Enfermagem e Fisioterapia" />

      <main>
        {/* Hero Section Padronizado 2 Colunas com Imagem Oficial */}
        <section className="relative pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-cyan-50/30 to-white">
          <div className="container-custom relative">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-card border border-cyan-200/60 shadow-xs">
                    <img src={logoOpesEspecialidades} alt="Opes Especialidades" className="h-4 w-auto object-contain" />
                    <span className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider border-l border-border pl-2">
                      COREN / CREFITO
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                  Prontuário com <br />
                  <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                    IA para Enfermagem e Fisio
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                  Anotações clínicas online, acompanhamento de procedimentos, transcrição de voz com IA, curvas de crescimento OMS e agendamento por <strong className="text-foreground">R$ 199/mês</strong>.
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white shadow-md font-bold px-7 h-11 text-xs sm:text-sm"
                    asChild
                  >
                    <a href="https://www.opespediatra.com/login">
                      Iniciar Teste de 15 Dias
                      <ArrowRight size={15} className="ml-2" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 font-bold px-6 h-11 text-xs sm:text-sm"
                    asChild
                  >
                    <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                      <MessageSquare size={15} className="mr-2 text-emerald-500" />
                      Falar com a Consultora
                    </a>
                  </Button>
                </div>

                <div className="pt-1 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Sem fidelidade
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    15 dias liberados
                  </span>
                </div>
              </div>

              {/* Right Column: Foto Oficial Enfermagem */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <div className="relative w-full max-w-lg aspect-16/10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-cyan-100/60 to-sky-100/60">
                  <img
                    src={heroEnfermagemOficial}
                    alt="Profissional de enfermagem pediátrica em atendimento carinhoso com criança"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-cyan-100 shadow-md flex items-center gap-2">
                    <HeartPulse size={15} className="text-cyan-600" />
                    <span className="text-[11px] font-black text-cyan-950">Evolução & Cuidados Clínicos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades Oficiais de Enfermagem e Fisio */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 block mb-1">
                FUNCIONALIDADES EXCLUSIVAS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Tudo o que sua rotina de cuidados e reabilitação precisa
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  icon: Calendar,
                  title: "Agendamento Integrado",
                  desc: "Controle de horários na clínica, consultório e atendimentos domiciliares com facilidade.",
                },
                {
                  icon: FileText,
                  title: "Anotações e Evolução Clínica",
                  desc: "Registro ágil de procedimentos, sinais vitais e evolução contínua do paciente.",
                },
                {
                  icon: Mic,
                  title: "Transcrição de Voz com IA",
                  desc: "Dite a evolução e condutas durante o atendimento sem perder tempo digitando.",
                },
                {
                  icon: LineChart,
                  title: "Curvas de Crescimento OMS e CDC",
                  desc: "Acompanhamento antropométrico automático de peso, estatura e IMC infantil.",
                },
                {
                  icon: Syringe,
                  title: "Controle e Histórico de Vacinas",
                  desc: "Caderneta de vacinação infantil atualizada com histórico detalhado de doses.",
                },
                {
                  icon: CheckCircle,
                  title: "Emissão de Atestados e Relatórios",
                  desc: "Declarações de comparecimento, relatórios de evolução e orientações aos familiares.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-cyan-300 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-3">
                    <item.icon size={19} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria de Telas de Enfermagem e Fisio em Ação */}
        <section className="section-padding bg-muted/20 border-t border-border/50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 block mb-1">
                INTERFACE DO SISTEMA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Veja as telas de Enfermagem e Fisioterapia em ação
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Acompanhamento completo de procedimentos clínicos, evolução, vacinas e curvas de crescimento
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Anotações e Evolução Clínica",
                  category: "Prontuário",
                  desc: "Registro ágil de sinais vitais, curativos, procedimentos e evolução de plantão.",
                  image: telaAnotacao,
                },
                {
                  title: "Curvas de Crescimento OMS e CDC",
                  category: "Antropometria",
                  desc: "Acompanhamento antropométrico infantil com gráficos automáticos de peso e altura.",
                  image: telaGraficos,
                },
                {
                  title: "Controle e Histórico de Vacinas",
                  category: "Imunização",
                  desc: "Caderneta vacinal completa com doses aplicadas e controle de aprazamento.",
                  image: telaVacinas,
                },
                {
                  title: "Solicitação de Exames por Voz",
                  category: "Prescrição",
                  desc: "Dite os exames necessários e gere pedidos timbrados formatados com IA.",
                  image: telaExames,
                },
                {
                  title: "Teleconsulta Integrada",
                  category: "Telecuidado",
                  desc: "Orientação a distância com prontuário e anotações abertos na mesma tela.",
                  image: telaTeleconsulta,
                },
                {
                  title: "Agenda Integrada",
                  category: "Gestão",
                  desc: "Organização de horários de clínica e visitas domiciliares com facilidade.",
                  image: telaAgenda,
                },
              ].map((screen, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-card rounded-2xl overflow-hidden border border-border/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="h-44 sm:h-48 overflow-hidden bg-slate-100">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1">
                      {screen.category}
                    </span>
                    <h3 className="text-sm font-bold text-foreground mb-1">{screen.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{screen.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Dedicated Enfermagem Clean */}
        <section className="section-padding bg-background border-t border-border/50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 block mb-1">
                PLANOS OFICIAIS DE ESPECIALIDADES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                Investimento sob medida para Enfermagem e Fisioterapia
              </h2>
              <p className="text-xs text-muted-foreground">
                Planos mensais e anuais com desconto exclusivo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
              {/* Individual */}
              <div className="p-6 rounded-3xl bg-card border border-cyan-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">Individual</h3>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-cyan-700">199</span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                      15% de desconto no plano anual (R$ 169/mês)
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 pt-2 border-t border-border/40">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-600" /> 1 Profissional da saúde + 1 Assistente</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-600" /> Funcionalidades conforme área de atuação</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-600" /> IA para Transcrição</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-600" /> Relatórios Financeiros</li>
                  </ul>
                </div>
                <Button asChild className="w-full rounded-full bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold h-9">
                  <a href="https://www.opespediatra.com/login">Começar teste grátis</a>
                </Button>
              </div>

              {/* Clínicas */}
              <div className="p-6 rounded-3xl bg-gradient-primary text-primary-foreground shadow-xl scale-103 relative flex flex-col justify-between">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 text-[10px] font-black px-3 py-0.5 rounded-full shadow">
                  MAIS ESCOLHIDO
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-2 text-white">Clínicas</h3>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold">R$</span>
                      <span className="text-3xl font-black text-white">185</span>
                      <span className="text-xs text-primary-foreground/80">/mês por profissional</span>
                    </div>
                    <p className="text-xs font-semibold text-cyan-200 mt-0.5">5% mais econômico</p>
                  </div>
                  <ul className="space-y-2 text-xs text-primary-foreground/90 mb-5 pt-2 border-t border-white/20">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-300" /> 2 a 9 Profissionais da saúde + 3 Assistentes</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-300" /> Todos os benefícios do Individual</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-300" /> 5% mais econômico</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-300" /> 10% de desconto no plano anual (R$ 166/mês)</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-300" /> Suporte Prioritário</li>
                  </ul>
                </div>
                <Button asChild className="w-full rounded-full bg-white text-primary hover:bg-white/95 text-xs font-bold shadow-md h-9">
                  <a href="https://www.opespediatra.com/login">Começar teste grátis</a>
                </Button>
              </div>

              {/* Redes */}
              <div className="p-6 rounded-3xl bg-card border border-cyan-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">Redes</h3>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-cyan-700">170</span>
                      <span className="text-xs text-muted-foreground">/mês por profissional</span>
                    </div>
                    <p className="text-xs text-cyan-600 font-semibold mt-0.5">10% mais econômico</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 pt-2 border-t border-border/40">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-600" /> 10+ Profissionais de saúde + 5 Assistentes</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-600" /> Todos os benefícios de Clínicas</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-600" /> 10% mais econômico</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-600" /> 15% de desconto na assinatura anual (R$ 144/mês)</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-600" /> Suporte Dedicado</li>
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-full rounded-full text-xs font-bold border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 h-9">
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
