import React, { useState } from "react";
import { MessageSquare, X, Send, UserCheck, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DudaWhatsAppFloatingProps {
  specialtyContext?: string;
}

export const DudaWhatsAppFloating: React.FC<DudaWhatsAppFloatingProps> = ({
  specialtyContext = "Geral",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getCustomMessage = () => {
    switch (specialtyContext) {
      case "Pediatria":
        return encodeURIComponent(
          "Olá! Gostaria de conhecer mais sobre o Opes Pediatria e tirar algumas dúvidas sobre a plataforma e os 15 dias de teste."
        );
      case "Terapia Ocupacional":
        return encodeURIComponent(
          "Olá! Sou Terapeuta Ocupacional e gostaria de entender como funciona o Opes Especialidades para a minha área."
        );
      case "Psicologia":
        return encodeURIComponent(
          "Olá! Sou Psicólogo(a) infantil e gostaria de saber mais sobre o Opes Especialidades e neurodesenvolvimento."
        );
      case "Enfermagem":
        return encodeURIComponent(
          "Olá! Atuo na área de Enfermagem e Fisioterapia pediátrica e gostaria de conhecer as ferramentas do Opes Especialidades."
        );
      default:
        return encodeURIComponent(
          "Olá! Gostaria de conversar com você sobre as soluções da Opes Medtech e testar a plataforma."
        );
    }
  };

  const whatsappUrl = `https://wa.me/5511972240924?text=${getCustomMessage()}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Pop up Window */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-xl bg-card border border-border shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/90 p-3 text-primary-foreground flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-white text-xs shadow-sm">
                  <MessageSquare size={14} />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-xs leading-tight text-white flex items-center gap-1">
                  Consultora Comercial
                  <Sparkles size={11} className="text-amber-300" />
                </h4>
                <p className="text-[10px] text-primary-foreground/80">
                  Atendimento especializado
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X size={15} />
            </button>
          </div>

          {/* Body */}
          <div className="p-3 space-y-2.5 bg-card">
            <div className="bg-muted/50 rounded-lg p-2.5 text-xs text-foreground/90 leading-relaxed border border-border/40">
              <p className="mb-1 font-medium text-foreground">
                Olá! Como posso te ajudar hoje?
              </p>
              <p className="text-muted-foreground text-[11px]">
                Tire dúvidas sobre planos, demonstração do sistema ou teste grátis de 15 dias sem burocracia.
              </p>
            </div>

            <div className="space-y-1 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <UserCheck size={12} className="text-primary" />
                <span>Atendimento sob medida para sua especialidade</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={12} className="text-primary" />
                <span>Orientações sobre teste grátis de 15 dias</span>
              </div>
            </div>

            <div className="pt-1">
              <Button
                asChild
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm font-semibold gap-1.5 h-9 text-xs"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Send size={13} />
                  Iniciar Conversa no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground pl-3 pr-4 py-2 rounded-full shadow-xl hover:scale-105 transition-all duration-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Falar com a Consultora"
      >
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-white text-xs">
            <MessageSquare size={13} />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-primary" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/90">
            Atendimento
          </p>
          <p className="text-xs font-bold text-white flex items-center gap-1">
            Falar com a Consultora
          </p>
        </div>
      </button>
    </div>
  );
};

export default DudaWhatsAppFloating;
