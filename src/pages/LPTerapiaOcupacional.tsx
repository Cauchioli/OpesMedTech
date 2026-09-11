import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DudaWhatsAppFloating from "@/components/DudaWhatsAppFloating";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Mic,
  Brain,
  FileText,
  Calendar,
  Shield,
  ArrowRight,
  MessageSquare,
  CheckCircle,
  Check,
  Star,
} from "lucide-react";
import logoOpesEspecialidades from "@/assets/logo-opes-especialidades.jpg";
import heroTOOficial from "@/assets/hero-to-oficial.jpeg";
import telaAgenda from "@/assets/telas/tela-agenda.jpeg";
import telaAnotacao from "@/assets/telas/tela-anotacao-transcricao.jpeg";
import telaSaudeMental from "@/assets/telas/tela-saude-mental.jpeg";
import telaTeleconsulta from "@/assets/telas/tela-teleconsulta.jpeg";
import telaFinanceiro from "@/assets/telas/tela-financeiro.jpeg";

const LPTerapiaOcupacional: React.FC = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Sou Terapeuta Ocupacional e gostaria de testar o Opes Especialidades por 15 dias.");

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header specialtyTitle="Terapia Ocupacional" />

      <main>
        {/* Hero Section Padronizado 2 Colunas com Imagem Oficial */}
        {/* Hero Section Full Bleed com Foto Oficial de Fundo */}
        <section className="relative min-h-[580px] lg:min-h-[660px] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-white flex items-center">
          {/* Imagem de Fundo Grande Sem Bordas (Full Bleed) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <img
              src={heroTOOficial}
              alt="Terapeuta Ocupacional com criança em atividade com brinquedos de empilhar"
              className="w-full h-full object-cover object-[75%_center] lg:object-right"
            />
            {/* Gradiente suave na esquerda para garantir leitura perfeita dos textos */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/75 sm:to-transparent sm:via-white/85 lg:w-3/5" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:pl-16 xl:pl-20 lg:pr-8 relative z-10">
            <div className="max-w-xl lg:max-w-2xl text-left space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 shadow-2xs">
                  <img src={logoOpesEspecialidades} alt="Opes Especialidades" className="h-4 w-auto object-contain" />
                  <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider border-l border-border pl-2">
                    Terapia Ocupacional
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.12]">
                Terapia Ocupacional <br />
                <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-sky-600 bg-clip-text text-transparent">
                  Autonomia hoje, mais conquistas amanhã.
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Conteúdos, práticas e recursos para apoiar o desenvolvimento das crianças no seu dia a dia. Prontuário com IA, acompanhamento sensorial e agendamento por <strong className="text-foreground">R$ 199/mês</strong>.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white shadow-md font-bold px-7 h-12 text-xs sm:text-sm"
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
                  className="rounded-full bg-white/80 backdrop-blur-xs border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 font-bold px-6 h-12 text-xs sm:text-sm shadow-xs"
                  asChild
                >
                  <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={15} className="mr-2 text-emerald-500" />
                    Falar com a Consultora
                  </a>
                </Button>
              </div>

              {/* Pill e Tags Clínicas da Referência */}
              <div className="pt-3 space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-gradient-to-r from-sky-50 to-purple-50 border border-purple-200/60 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-semibold text-purple-950">
                    Profissionais mais preparados. Crianças com mais possibilidades.
                  </span>
                </div>

                <div className="pt-2 border-t border-purple-200/60">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] sm:text-[11px] font-bold tracking-wider text-purple-800 uppercase">
                    <span>Avaliação</span>
                    <span>•</span>
                    <span>Intervenção</span>
                    <span>•</span>
                    <span>Rotina</span>
                    <span>•</span>
                    <span>Autonomia</span>
                    <span>•</span>
                    <span>Qualidade de Vida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades Oficiais da Terapia Ocupacional */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                FUNCIONALIDADES EXCLUSIVAS DE T.O.
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Tudo o que sua prática terapêutica necessita
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  icon: Calendar,
                  title: "Agendamento Integrado",
                  desc: "Gestão simples de horários de atendimento, presenças e confirmações automáticas.",
                },
                {
                  icon: FileText,
                  title: "Anotações Clínicas Online",
                  desc: "Registro ágil e estruturado da evolução terapêutica de cada sessão.",
                },
                {
                  icon: Mic,
                  title: "Transcrição de Voz com IA",
                  desc: "Dite suas observações e receba o relatório resumido automaticamente.",
                },
                {
                  icon: Brain,
                  title: "Saúde Mental e Desenvolvimento",
                  desc: "Acompanhamento do perfil sensorial, neurodesenvolvimento e marcos motores.",
                },
                {
                  icon: CheckCircle,
                  title: "Emissão de Atestados",
                  desc: "Gere atestados, declarações de comparecimento e pareceres em poucos cliques.",
                },
                {
                  icon: Shield,
                  title: "Segurança e Conformidade Ética",
                  desc: "Armazenamento 100% em nuvem com criptografia de ponta a ponta e LGPD.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-purple-300 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                    <item.icon size={19} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria de Telas de T.O. em Ação */}
        <section className="section-padding bg-muted/20 border-t border-border/50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block mb-1">
                INTERFACE DO SISTEMA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Veja as telas de Terapia Ocupacional em ação
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Ferramentas pensadas para o registro rápido do perfil sensorial, neurodesenvolvimento e evolução clínica
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Anotação e Transcrição por Voz",
                  category: "Prontuário com IA",
                  desc: "Dite o progresso do paciente na sessão e tenha o resumo terapêutico gerado na hora.",
                  image: telaAnotacao,
                },
                {
                  title: "Saúde Mental e Perfil Sensorial",
                  category: "Protocolos Clínicos",
                  desc: "Avaliação estruturada do desenvolvimento, integração sensorial e marcos motores.",
                  image: telaSaudeMental,
                },
                {
                  title: "Teleconsulta Integrada",
                  category: "Atendimento Remoto",
                  desc: "Orientação aos pais e teleatendimento com histórico do paciente aberto na mesma tela.",
                  image: telaTeleconsulta,
                },
                {
                  title: "Agenda Inteligente",
                  category: "Organização",
                  desc: "Controle visual de sessões terapêuticas, presenças, faltas e remarcações.",
                  image: telaAgenda,
                },
                {
                  title: "Gestão Financeira",
                  category: "Financeiro",
                  desc: "Relatórios de atendimentos, recebimentos, PIX e controle financeiro simples.",
                  image: telaFinanceiro,
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
                    <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider block mb-1">
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

        {/* Pricing Dedicated TO Clean */}
        <section className="section-padding bg-background border-t border-border/50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block mb-1">
                PLANOS OFICIAIS DE ESPECIALIDADES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                Investimento sob medida para Terapeutas Ocupacionais
              </h2>
              <p className="text-xs text-muted-foreground">
                Planos mensais e anuais com desconto exclusivo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
              {/* Individual */}
              <div className="p-6 rounded-3xl bg-card border border-purple-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">Individual</h3>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-purple-700">199</span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                      15% de desconto no plano anual (R$ 169/mês)
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 pt-2 border-t border-border/40">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-purple-600" /> 1 Profissional da saúde + 1 Assistente</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-purple-600" /> Funcionalidades conforme área de atuação</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-purple-600" /> IA para Transcrição</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-purple-600" /> Relatórios Financeiros</li>
                  </ul>
                </div>
                <Button asChild className="w-full rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold h-9">
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
              <div className="p-6 rounded-3xl bg-card border border-purple-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">Redes</h3>
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-purple-700">170</span>
                      <span className="text-xs text-muted-foreground">/mês por profissional</span>
                    </div>
                    <p className="text-xs text-purple-600 font-semibold mt-0.5">10% mais econômico</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 pt-2 border-t border-border/40">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-purple-600" /> 10+ Profissionais de saúde + 5 Assistentes</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-purple-600" /> Todos os benefícios de Clínicas</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-purple-600" /> 10% mais econômico</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-purple-600" /> 15% de desconto na assinatura anual (R$ 144/mês)</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-purple-600" /> Suporte Dedicado</li>
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
      <DudaWhatsAppFloating specialtyContext="Terapia Ocupacional" />
    </div>
  );
};

export default LPTerapiaOcupacional;
