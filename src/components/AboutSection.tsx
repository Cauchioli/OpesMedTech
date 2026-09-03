import { Bot, CheckCircle2, Sparkles, Stethoscope, Activity } from "lucide-react";
import doctorImage from "@/assets/doctor-about.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container-custom">
        {/* Header Clean */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            PROPÓSITO OPES MEDTECH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
            Tecnologia especializada para a saúde infantil
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Sistemas desenhados com quem vive o dia a dia do consultório e das terapias
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-10 max-w-5xl mx-auto">
          {/* Text Content Clean */}
          <div className="space-y-3.5 text-xs sm:text-sm">
            <p className="text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Opes Medtech</strong> desenvolve plataformas inteligentes que reduzem a burocracia e devolvem o tempo do profissional para o cuidado com a criança.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-card border-l-4 border-primary p-3.5 rounded-r-xl shadow-sm">
                <h3 className="font-bold text-foreground text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                  <Stethoscope size={15} className="text-primary flex-shrink-0" />
                  Opes Pediatra
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Prontuário completo, curvas OMS e CDC, vacinas e prescrição Memed por R$ 299/mês.
                </p>
              </div>

              <div className="bg-card border-l-4 border-primary/60 p-3.5 rounded-r-xl shadow-sm">
                <h3 className="font-bold text-foreground text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                  <Activity size={15} className="text-primary flex-shrink-0" />
                  Opes Especialidades
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Anotações clínicas, saúde mental, laudos e atestados por R$ 199/mês.
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Image Showcase */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
              <img
                src={doctorImage}
                alt="Profissional de saúde utilizando a plataforma Opes Medtech"
                className="w-full h-auto object-cover max-h-[320px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-card rounded-xl shadow-lg p-2.5 border border-border">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center shadow-sm">
                  <CheckCircle2 size={14} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-xs">Criado com Especialistas</p>
                  <p className="text-[10px] text-muted-foreground">Foco na prática clínica real</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Intrusiva Box Clean */}
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-5 sm:p-6 border border-primary/20 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-primary text-primary-foreground flex-shrink-0">
              <Bot size={22} />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 text-primary text-[10px] font-bold uppercase tracking-wider">
                <Sparkles size={11} />
                IA Não Intrusiva
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                Inteligência Artificial silenciosa nos bastidores
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A IA transcreve consultas e sessões em tempo real, organiza a evolução clínica e gera resumos automáticos para você economizar até 70% do tempo de digitação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;