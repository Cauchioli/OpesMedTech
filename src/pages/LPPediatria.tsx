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
  Check,
  Star,
  Sparkles,
  Bot,
} from "lucide-react";
import heroMedicaOficial from "@/assets/hero-medica-menino-oficial.png";
import mascoteRobo from "@/assets/mascote-robo-opes.png";
import telaAgenda from "@/assets/telas/tela-agenda.jpeg";
import telaAnotacao from "@/assets/telas/tela-anotacao-transcricao.jpeg";
import telaGraficos from "@/assets/telas/tela-graficos-curvas.jpeg";
import telaVacinas from "@/assets/telas/tela-vacinas.jpeg";
import telaExames from "@/assets/telas/tela-exames-voz.jpeg";
import telaTeleconsulta from "@/assets/telas/tela-teleconsulta.jpeg";

const LPPediatria: React.FC = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Sou médico(a) pediatra e gostaria de testar o Opes Pediatra por 15 dias.");

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header specialtyTitle="Pediatria" />

      <main>
        {/* Hero Section Padronizado 2 Colunas com Imagem Oficial */}
        <section className="relative pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white">
          <div className="container-custom relative">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200/50">
                  <Stethoscope size={14} />
                  Para Médicos Pediatras (CRM)
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                  Pediatria com <br />
                  <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    IA e Menos Digitação
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                  Prontuário médico completo, curvas de crescimento OMS/CDC, gestão vacinal SBP, inteligência artificial preditiva e prescrição Memed.
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-md font-bold px-7 h-11 text-xs sm:text-sm"
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
                    Sem cartão de crédito
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    15 dias liberados
                  </span>
                </div>
              </div>

              {/* Right Column: Foto Oficial */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <div className="relative w-full max-w-lg aspect-16/10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-sky-100/60 to-purple-100/60">
                  <img
                    src={heroMedicaOficial}
                    alt="Médica pediatra examinando menino sorridente"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-sky-100 shadow-md flex items-center gap-2">
                    <img src={mascoteRobo} alt="IA Opes" className="w-7 h-7 object-contain" />
                    <span className="text-[11px] font-black text-sky-900">IA Preditiva SBP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-12 bg-muted/20 border-y border-border/50">
          <div className="container-custom">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
                DEMONSTRAÇÃO EM VÍDEO
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Veja o Opes Pediatra em funcionamento
              </h2>
            </div>
            <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-border bg-black aspect-video relative">
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
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                RECURSOS EXCLUSIVOS PARA PEDIATRAS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Tudo em uma única plataforma médica
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  icon: Bot,
                  title: "Análise Preditiva com IA",
                  desc: "IA nos bastidores correlacionando consultas e exames do paciente para apoiar condutas.",
                },
                {
                  icon: LineChart,
                  title: "Curvas de Crescimento OMS e CDC",
                  desc: "Percentis e escores z automáticos compartilháveis direto no WhatsApp dos pais.",
                },
                {
                  icon: Syringe,
                  title: "Controle Vacinal SBP",
                  desc: "Histórico vacinal completo com alertas automáticos de doses atrasadas.",
                },
                {
                  icon: Mic,
                  title: "Transcrição de Consultas por Voz",
                  desc: "A inteligência artificial transcreve a consulta e preenche a anamnese sem esforço de digitação.",
                },
                {
                  icon: Pill,
                  title: "Prescrição Digital Memed",
                  desc: "Receituário com assinatura digital válida em todas as farmácias do Brasil.",
                },
                {
                  icon: Shield,
                  title: "100% em Nuvem e LGPD",
                  desc: "Criptografia de padrão bancário e conformidade total com as resoluções do CFM.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-sky-300 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                    <item.icon size={19} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria de Telas Oficiais do Opes Pediatra */}
        <section className="section-padding bg-muted/20 border-t border-border/50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
                INTERFACE DA PLATAFORMA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Veja as telas do Opes Pediatra em ação
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Telas limpas, ágeis e desenvolvidas para o fluxo dinâmico da consulta pediátrica
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Anotação e Transcrição por Voz",
                  category: "IA no Atendimento",
                  desc: "A inteligência artificial capta a conversa e estrutura o prontuário em tempo real.",
                  image: telaAnotacao,
                },
                {
                  title: "Curvas de Crescimento OMS e CDC",
                  category: "Antropometria",
                  desc: "Gráficos automáticos de peso, altura e IMC prontos para envio aos pais.",
                  image: telaGraficos,
                },
                {
                  title: "Cronograma de Vacinação",
                  category: "Imunização",
                  desc: "Timeline completa de vacinas aplicadas e alertas de doses pendentes.",
                  image: telaVacinas,
                },
                {
                  title: "Teleconsulta com Prontuário",
                  category: "Telemedicina",
                  desc: "Vídeo consulta integrada com transcrição simultânea e anotações.",
                  image: telaTeleconsulta,
                },
                {
                  title: "Solicitação de Exames por Voz",
                  category: "Prescrição",
                  desc: "Dite os exames e o sistema formata o pedido oficial timbrado com IA.",
                  image: telaExames,
                },
                {
                  title: "Agenda Inteligente",
                  category: "Produtividade",
                  desc: "Visão semanal e diária com controle de horários, retornos e secretária.",
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
                    <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-1">
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

        {/* Pricing Banner Pediatria Clean */}
        <section className="section-padding bg-sky-50/30 border-t border-border/50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
                PLANOS OFICIAIS DE PEDIATRIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                Valores transparentes para o seu consultório
              </h2>
              <p className="text-xs text-muted-foreground">
                Planos mensais e anuais com desconto exclusivo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
              {/* Individual */}
              <div className="p-6 rounded-3xl bg-card border border-sky-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">Individual</h3>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-sky-700">299</span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                      15% de desconto no plano anual (R$ 254/mês)
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 pt-2 border-t border-border/40">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-sky-600" /> 1 Médico + 1 Assistente</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-sky-600" /> Sem limites de funcionalidades</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-sky-600" /> IA de Transcrição e Análise Preditiva</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-sky-600" /> Relatórios Financeiros</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-sky-600" /> Parceria Memed</li>
                  </ul>
                </div>
                <Button asChild className="w-full rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold h-9">
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
                      <span className="text-3xl font-black text-white">285</span>
                      <span className="text-xs text-primary-foreground/80">/mês por médico</span>
                    </div>
                    <p className="text-xs font-semibold text-cyan-200 mt-0.5">5% mais econômico</p>
                  </div>
                  <ul className="space-y-2 text-xs text-primary-foreground/90 mb-5 pt-2 border-t border-white/20">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-300" /> 2 a 9 Médicos + 3 Assistentes</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-300" /> Todos os benefícios do Individual</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-300" /> 5% mais econômico</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-300" /> 10% de desconto no plano anual (R$ 256/mês)</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-cyan-300" /> Suporte Prioritário</li>
                  </ul>
                </div>
                <Button asChild className="w-full rounded-full bg-white text-primary hover:bg-white/95 text-xs font-bold shadow-md h-9">
                  <a href="https://www.opespediatra.com/login">Começar teste grátis</a>
                </Button>
              </div>

              {/* Redes */}
              <div className="p-6 rounded-3xl bg-card border border-sky-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">Redes</h3>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-sky-700">269</span>
                      <span className="text-xs text-muted-foreground">/mês por médico</span>
                    </div>
                    <p className="text-xs text-purple-600 font-semibold mt-0.5">10% mais econômico</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 pt-2 border-t border-border/40">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-sky-600" /> 10+ Médicos + 5 Assistentes</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-sky-600" /> Todos os benefícios de Clínicas</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-sky-600" /> 10% mais econômico</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-sky-600" /> 15% de desconto na assinatura anual (R$ 228/mês)</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-sky-600" /> Suporte Dedicado</li>
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
      <DudaWhatsAppFloating specialtyContext="Pediatria" />
    </div>
  );
};

export default LPPediatria;
