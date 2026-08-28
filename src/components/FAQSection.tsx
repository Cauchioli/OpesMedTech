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
    encodeURIComponent("Olá! Gostaria de tirar algumas dúvidas rápidas sobre a plataforma Opes com a consultora.");

  const faqs = [
    {
      question: "O que é a Opes Medtech e qual a diferença entre Opes Pediatria e Opes Especialidades?",
      answer:
        "A Opes Medtech é a healthtech desenvolvedora de softwares de gestão clínica e inteligência artificial voltados ao ecossistema infantil. O Opes Pediatria (R$ 300/mês) é o nosso software médico completo para Pediatras (com curvas OMS e CDC, gestão vacinal, transcrição por IA e prescrição Memed). Já o Opes Especialidades (R$ 200/mês) é a versão sob medida para Terapeutas Ocupacionais, Psicólogos e Enfermeiros pediátricos, focada em evolução de sessões, laudos, neurodesenvolvimento e pareceres multidisciplinares sem a burocracia de campos médicos desnecessários.",
    },
    {
      question: "Como funciona o cadastro pelo CRM ou pelo conselho de classe (CREFITO, CRP, COREN)?",
      answer:
        "No momento do cadastro no sistema, você informa seu número de conselho profissional. Se selecionar CRM, a plataforma habilita os módulos médicos pediátricos (curvas, vacinas e receituário). Caso selecione seu conselho terapêutico (CREFITO, CRP, COREN), o sistema automaticamente carrega o ambiente de Especialidades com formulários adequados à sua profissão.",
    },
    {
      question: "O usuário Assistente (Secretária e Recepção) é realmente gratuito?",
      answer:
        "Sim! Nossos planos são calculados com base no número de profissionais atendentes (médicos ou terapeutas). As secretárias e assistentes de recepção estão inclusas sem cobrança adicional conforme o plano escolhido (1 assistente no Individual, até 3 no Clínicas e até 5 no Corporativo).",
    },
    {
      question: "Como funciona o período de teste de 15 dias?",
      answer:
        "Você tem acesso total e ilimitado a todas as ferramentas da plataforma por 15 dias corridos, sem precisar cadastrar cartão de crédito ou compromisso prévio. Ao fim do teste, você escolhe continuar no plano ideal ou a conta é pausada sem nenhuma cobrança surpresa.",
    },
    {
      question: "O que é a IA Não Intrusiva da Opes e como ela protege o sigilo profissional?",
      answer:
        "Nossa IA opera de forma silenciosa e em segundo plano. Você não precisa aprender prompts ou comandos complexos: basta conversar naturalmente com o paciente e a família e a IA transcreve, sintetiza a anamnese e organiza a evolução clínica. Todos os dados são criptografados de ponta a ponta em conformidade rigorosa com a LGPD e resoluções dos conselhos de classe.",
    },
    {
      question: "Como funciona o desconto de 15% no Plano Anual?",
      answer:
        "Ao optar pelo faturamento anual, você recebe 15% de desconto em qualquer plano. No Opes Pediatria Individual, o valor mensal equivalente cai de R$ 300 para R$ 255/mês. No Opes Especialidades Individual, cai de R$ 200 para R$ 170/mês.",
    },
    {
      question: "Preciso instalar algum programa no computador ou celular?",
      answer:
        "Não! A Opes Medtech é 100% em nuvem e funciona direto no navegador (Chrome, Safari, Edge, Firefox) em computadores Windows, Mac, tablets e smartphones. Seus dados sincronizam instantaneamente.",
    },
    {
      question: "E se eu quiser cancelar depois de assinar?",
      answer:
        "O gerenciamento de assinatura e cancelamento é feito de forma 100% autônoma e sem burocracia pelo painel da plataforma. Em caso de cancelamento, você mantém acesso de visualização dos seus prontuários por 6 meses para garantia ética e legal.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Perguntas Frequentes sobre a Opes Medtech
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Tudo o que você precisa saber sobre a plataforma, planos e segurança de dados
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto mb-8">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/80 px-5 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 text-xs sm:text-sm font-bold text-foreground">
                  <span className="pr-3">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="max-w-sm mx-auto text-center p-4 rounded-xl bg-card border border-border shadow-sm">
          <p className="text-xs font-semibold text-foreground mb-1">
            Ainda ficou com alguma dúvida específica?
          </p>
          <p className="text-[11px] text-muted-foreground mb-3">
            Nossa consultoria comercial pode tirar suas dúvidas agora no WhatsApp.
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
