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
  HeartHandshake,
} from "lucide-react";
import platformSaudeMental from "@/assets/platform-saude-mental.png";

const LPTerapiaOcupacional: React.FC = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Sou Terapeuta Ocupacional e gostaria de testar o Opes Especialidades por 15 dias.");

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header specialtyTitle="Terapia Ocupacional" />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 overflow-hidden bg-gradient-radial">
          <div className="container-custom relative">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                <Activity size={14} />
                Opes Especialidades • Terapia Ocupacional (CREFITO)
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 leading-tight">
                Prontuário inteligente e <span className="text-gradient">IA para Terapeutas Ocupacionais</span>
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
                Integração sensorial, marcos do neurodesenvolvimento, evolução de metas terapêuticas e emissão ágil de pareceres para escolas e famílias por apenas <strong className="text-foreground">R$ 200/mês</strong>.
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
                ✓ Sem cartão de crédito • Ambiente enxuto sem burocracia médica • Economia de R$ 100/mês
              </p>
            </div>

            {/* Platform Feature Preview */}
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
              <img
                src={platformSaudeMental}
                alt="Opes Especialidades, Interface de Neurodesenvolvimento e Terapias"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                RECURSOS ESPECÍFICOS PARA T.O.
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Projetado para quem avalia, estimula e transforma o desenvolvimento
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: "Integração Sensorial e Marcos",
                  desc: "Estruture o registro de perfis sensoriais, modulação, práxis e aquisição de marcos motores de forma visual e intuitiva.",
                },
                {
                  icon: Mic,
                  title: "Transcrição por IA das Sessões",
                  desc: "Descreva a evolução do paciente por áudio ao final da sessão e a IA sintetiza o relatório em linguagem técnica adequada.",
                },
                {
                  icon: FileText,
                  title: "Pareceres e Relatórios Escolares",
                  desc: "Crie relatórios multidisciplinares completos para escolas, neuropediatras e famílias com rapidez e profissionalismo.",
                },
                {
                  icon: HeartHandshake,
                  title: "Planos Terapêuticos Singulares (PTS)",
                  desc: "Defina metas, acompanhe a evolução percentual de cada objetivo e apresente relatórios gráficos aos responsáveis.",
                },
                {
                  icon: Calendar,
                  title: "Agenda de Sessões e Pacotes",
                  desc: "Gerencie sessões semanais, reposições, presenças e envie lembretes automáticos para evitar faltas.",
                },
                {
                  icon: Shield,
                  title: "Sigilo Ético CREFITO e LGPD",
                  desc: "Armazenamento em nuvem com criptografia de ponta a ponta, backups diários e controle rigoroso de privacidade.",
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

        {/* Pricing Dedicated TO */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                PLANOS OFICIAIS OPES ESPECIALIDADES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Investimento justo e sob medida para Terapeutas Ocupacionais
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Planos a partir de <strong>R$ 200/mês</strong> com <strong>15% de desconto</strong> na assinatura anual.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {/* Individual */}
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Individual (1 Terapeuta)</h3>
                  <p className="text-xs text-muted-foreground mb-4">Para consultório ou atendimento domiciliar</p>
                  <div className="mb-4 p-3 rounded-xl bg-muted/60 border border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-primary">200</span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1.5">
                      Ou R$ 170/mês no Plano Anual (15% OFF)
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">1 Terapeuta e 1 Assistente inclusa</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5">
                    <li className="flex items-center gap-1.5">✓ Prontuário para Terapia Ocupacional</li>
                    <li className="flex items-center gap-1.5">✓ Transcrição de sessões com IA</li>
                    <li className="flex items-center gap-1.5">✓ Relatórios escolares estruturados</li>
                    <li className="flex items-center gap-1.5">✓ Agenda e controle de sessões</li>
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
                  <h3 className="text-lg font-bold mb-1">Clínicas Multidisciplinares</h3>
                  <p className="text-xs text-primary-foreground/90 mb-4">De 2 a 9 Terapeutas e 3 Assistentes</p>
                  <div className="mb-4 p-3 rounded-xl bg-black/15 border border-white/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold">R$</span>
                      <span className="text-3xl font-black text-white">185</span>
                      <span className="text-xs text-primary-foreground/80">/mês por profissional</span>
                    </div>
                    <p className="text-xs font-semibold text-white mt-1.5">
                      Ou R$ 157/mês no Plano Anual (15% OFF)
                    </p>
                    <p className="text-[10px] text-primary-foreground/90 mt-0.5">Até 3 Assistentes inclusas</p>
                  </div>
                  <ul className="space-y-2 text-xs text-primary-foreground/95 mb-5">
                    <li className="flex items-center gap-1.5">✓ Prontuários integrados para equipe</li>
                    <li className="flex items-center gap-1.5">✓ Transcrição por IA para todos</li>
                    <li className="flex items-center gap-1.5">✓ Gestão multi consultório e salas</li>
                    <li className="flex items-center gap-1.5">✓ Suporte direto via WhatsApp</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-white text-primary hover:bg-white/95 text-xs font-bold shadow-md h-9">
                  <a href="https://www.opespediatra.com/login">Testar com a Equipe</a>
                </Button>
              </div>

              {/* Corporativo */}
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Centros de Reabilitação</h3>
                  <p className="text-xs text-muted-foreground mb-4">Para 10 ou mais Profissionais</p>
                  <div className="mb-4 p-3 rounded-xl bg-muted/60 border border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-foreground">R$</span>
                      <span className="text-3xl font-black text-primary">170</span>
                      <span className="text-xs text-muted-foreground">/mês por profissional</span>
                    </div>
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1.5">
                      Ou R$ 145/mês no Plano Anual (15% OFF)
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Até 5 Assistentes inclusas</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5">
                    <li className="flex items-center gap-1.5">✓ Máxima economia por usuário</li>
                    <li className="flex items-center gap-1.5">✓ Treinamento de equipe incluso</li>
                    <li className="flex items-center gap-1.5">✓ Consultoria comercial personalizada</li>
                    <li className="flex items-center gap-1.5">✓ Suporte técnico prioritário</li>
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
      <DudaWhatsAppFloating specialtyContext="Terapia Ocupacional" />
    </div>
  );
};

export default LPTerapiaOcupacional;
