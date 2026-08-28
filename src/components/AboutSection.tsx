import { Bot, CheckCircle2, Sparkles, Stethoscope, Activity } from "lucide-react";
import doctorImage from "@/assets/doctor-about.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            NOSSA HISTÓRIA E PROPÓSITO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Conheça a Opes Medtech
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Desenvolvendo soluções digitais inteligentes e hiper especializadas para o ecossistema da saúde infantil
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          {/* Text Content */}
          <div className="space-y-4 text-sm sm:text-base">
            <p className="text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Opes Medtech</strong> nasceu com uma missão clara: transformar a rotina clínica de quem cuida de crianças por meio de tecnologia <strong className="text-foreground">simples, rápida, segura e com inteligência artificial aplicada</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Nosso grande diferencial é a especialização real.</strong> Em vez de sistemas genéricos pesados, criamos ferramentas desenhadas com profissionais da linha de frente. O resultado é um software que não exige adaptação, falando exatamente a língua da sua prática clínica diária.
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              <div className="bg-card border-l-4 border-primary p-4 rounded-r-xl shadow-sm">
                <h3 className="font-bold text-foreground text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                  <Stethoscope size={16} className="text-primary flex-shrink-0" />
                  Opes Pediatria (Carro Chefe)
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Criado para médicos pediatras: prontuário completo, curvas OMS e CDC, gestão vacinal e prescrição inteligente.
                </p>
              </div>

              <div className="bg-card border-l-4 border-secondary p-4 rounded-r-xl shadow-sm">
                <h3 className="font-bold text-foreground text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                  <Activity size={16} className="text-secondary-foreground flex-shrink-0" />
                  Opes Especialidades (Novo)
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sob medida para TO, Psicologia e Enfermagem: foco em evolução e neurodesenvolvimento por R$ 200/mês.
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Image Showcase */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src={doctorImage}
                alt="Profissional de saúde utilizando a plataforma Opes Medtech"
                className="w-full h-auto object-cover max-h-[380px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-3 sm:-right-5 bg-card rounded-xl shadow-xl p-3 border border-border animate-float">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-sm">
                  <CheckCircle2 size={16} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-xs">Criado com Especialistas</p>
                  <p className="text-[11px] text-muted-foreground">Para o dia a dia real do consultório</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Intrusiva Box */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-6 sm:p-8 border border-primary/20 shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-primary text-primary-foreground">
                <Bot size={26} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider">
                <Sparkles size={12} />
                Conceito Exclusivo Opes
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Inteligência Artificial Não Intrusiva: Trabalha para você sem complicar
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Nossa IA não exige comandos difíceis ou digitação de prompts. Ela opera de forma <strong className="text-foreground">silenciosa nos bastidores</strong>: transcreve consultas e sessões em tempo real, estrutura os dados clínicos, auxilia no acompanhamento longitudinal e sintetiza relatórios evolutivos.
              </p>
              <p className="text-primary font-semibold italic text-xs sm:text-sm">
                "Profissionais de saúde querem tecnologia que economize tempo, e não mais uma burocracia para preencher. É essa simplicidade que a Opes entrega."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;