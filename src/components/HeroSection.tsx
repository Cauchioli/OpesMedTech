import { Shield, Lock, Cloud, MessageSquare, Sparkles, Stethoscope, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de entender mais sobre as soluções da Opes Medtech e testar a plataforma.");

  return (
    <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 overflow-hidden bg-gradient-radial">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-subtle opacity-50 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-subtle opacity-30 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Top Selector Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Ecossistema Opes Medtech
          </div>

          <a
            href="#produtos"
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-muted hover:bg-muted/80 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/50"
          >
            <Stethoscope size={12} className="text-primary" />
            <span>Opes Pediatria (CRM)</span>
          </a>

          <a
            href="#produtos"
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-muted hover:bg-muted/80 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/50"
          >
            <Activity size={12} className="text-primary" />
            <span>Opes Especialidades (TO • Psicologia • Enfermagem)</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight animate-slide-up">
              Tecnologia e IA{" "}
              <span className="text-gradient">feitas sob medida</span>{" "}
              para a saúde infantil
            </h1>

            {/* Subheadline */}
            <p
              className="text-sm md:text-base text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Do consultório do <strong className="text-foreground">médico pediatra</strong> às sessões de{" "}
              <strong className="text-foreground">terapia ocupacional, psicologia e enfermagem</strong>. Reduza o tempo de digitação em{" "}
              <strong className="text-foreground">70%</strong> com IA não intrusiva.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                size="default"
                className="bg-gradient-primary hover:opacity-90 shadow-primary text-sm px-6 h-10 font-semibold"
                asChild
              >
                <a href="https://www.opespediatra.com/login">Iniciar Teste Grátis (15 dias)</a>
              </Button>

              <Button
                size="default"
                variant="outline"
                className="text-sm font-semibold border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 gap-1.5 h-10 px-5"
                asChild
              >
                <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={15} className="text-emerald-500" />
                  Fale com a Consultora
                </a>
              </Button>
            </div>

            {/* Quick Links to Verticals */}
            <div
              className="pt-1 pb-5 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-muted-foreground animate-slide-up"
              style={{ animationDelay: "0.25s" }}
            >
              <span className="text-foreground font-semibold">Conheça cada solução:</span>
              <Link to="/pediatria" className="text-primary hover:underline font-semibold">
                Pediatria →
              </Link>
              <Link to="/terapia-ocupacional" className="text-primary hover:underline font-semibold">
                Terapia Ocupacional →
              </Link>
              <Link to="/psicologia" className="text-primary hover:underline font-semibold">
                Psicologia →
              </Link>
              <Link to="/enfermagem" className="text-primary hover:underline font-semibold">
                Enfermagem e Fisio →
              </Link>
            </div>

            {/* Trust badges */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-muted-foreground animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-primary" />
                <span>Dados 100% Criptografados</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock size={14} className="text-primary" />
                <span>Conformidade LGPD e CFM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cloud size={14} className="text-primary" />
                <span>Nuvem sem instalação</span>
              </div>
            </div>
          </div>

          {/* Hero Media / Video */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-black aspect-video">
              <iframe
                src="https://www.youtube.com/embed/nf7faWHi-u8?rel=0&modestbranding=1"
                title="Opes Medtech, Plataforma em Ação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Floating Highlight */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-card/95 backdrop-blur-md rounded-xl shadow-lg p-3 border border-border animate-float">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-sm">
                  <Sparkles size={16} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-xs">70% Menos Digitação</p>
                  <p className="text-[11px] text-muted-foreground">com Transcrição Inteligente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
