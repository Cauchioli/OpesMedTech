import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de tirar algumas dúvidas sobre a plataforma Opes com a consultora.");

  const faqs = [
    {
      question: "Como funciona o cadastro pelo CRM ou pelo conselho de classe (CREFITO, CRP, COREN)?",
      answer:
        "No momento do cadastro no sistema, você informa seu número de conselho profissional. Se selecionar CRM, a plataforma habilita os módulos médicos pediátricos (curvas, vacinas, IA para análise preditiva, receituário e todas as outras funcionalidades da plataforma). É o módulo mais completo, apresentando todas as funcionalidades independente do plano escolhido. Caso selecione seu conselho terapêutico (CREFITO, CRP, COREN), o sistema automaticamente carrega o ambiente de Especialidades com formulários adequados à sua profissão.",
    },
    {
      question: "Como funciona o período de teste de 15 dias?",
      answer:
        "Você tem acesso total e ilimitado a todas as ferramentas da plataforma conforme profissão, por 15 dias corridos, sem precisar cadastrar cartão de crédito ou compromisso prévio. Ao fim do teste, você escolhe continuar no plano ideal ou a conta é pausada sem nenhuma cobrança surpresa.",
    },
    {
      question: "O que é a IA Não Intrusiva da Opes e como ela funciona na prática?",
      answer:
        "Nossa IA opera de forma silenciosa e em segundo plano. Você não precisa aprender prompts ou comandos complexos. Todos os planos contemplam a transcrição e resumo inteligente: basta conversar naturalmente com o paciente e a IA transcreve, sintetiza a anamnese e organiza a informação. Para os planos de Pediatria, a IA Preditiva entra em ação utilizando dados históricos de consultas ajudando a tomada de decisão médica.",
    },
    {
      question: "Qual a diferença entre Opes Pediatra e Opes Especialidades?",
      answer:
        "O Opes Pediatra (R$ 299/mês) é focado em médicos pediatras com análise preditiva por IA, curvas OMS e CDC, vacinas SBP e prescrição Memed. O Opes Especialidades (R$ 199/mês) é desenhado sob medida para Terapeutas Ocupacionais, Psicólogos e Enfermagem, com anotações clínicas, saúde mental, atestados e transcrição por voz.",
    },
    {
      question: "O usuário assistente (secretária) é incluso?",
      answer:
        "Sim. Todos os planos incluem usuários assistentes sem cobrança extra (1 assistente no Individual, 3 no Empresarial e até 5 no Corporativo).",
    },
    {
      question: "Como funciona o desconto do Plano Anual?",
      answer:
        "A assinatura anual oferece 15% de desconto em qualquer plano. No Opes Pediatra Individual o valor cai para R$ 254/mês, e no Opes Especialidades Individual cai para R$ 169/mês.",
    },
    {
      question: "Preciso instalar algum software?",
      answer:
        "Não. A plataforma é 100% online em nuvem e funciona direto no navegador em qualquer computador, tablet ou celular.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header Clean */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Respostas sobre a plataforma, planos e IA da Opes Medtech
          </p>
        </div>

        {/* FAQ Accordion Clean */}
        <div className="max-w-2xl mx-auto mb-8">
          <Accordion type="single" collapsible className="space-y-2.5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/80 px-4 data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-3.5 text-xs sm:text-sm font-bold text-foreground">
                  <span className="pr-2">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-3.5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="max-w-sm mx-auto text-center p-4 rounded-xl bg-card border border-border shadow-sm">
          <p className="text-xs font-semibold text-foreground mb-1">
            Ficou com alguma dúvida?
          </p>
          <p className="text-[11px] text-muted-foreground mb-3">
            Fale diretamente com nossa consultora no WhatsApp
          </p>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 font-semibold gap-1.5 text-xs h-8"
          >
            <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquare size={13} className="text-emerald-500" />
              Falar com a Consultora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
