import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header />
      <main className="container-custom py-24 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Termos e Condições de Uso</h1>
        <div className="prose dark:prose-invert text-sm text-muted-foreground space-y-4">
          <p>
            Bem-vindo à Opes Medtech. Ao utilizar nossa plataforma, você concorda com os presentes termos e condições de uso.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-6 mb-2">1. Objeto do Serviço</h2>
          <p>
            A Opes Medtech provê software como serviço (SaaS) especializado para gestão clínica pediátrica e multidisciplinar, incluindo ferramentas de inteligência artificial não intrusiva.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-6 mb-2">2. Período de Teste e Cancelamento</h2>
          <p>
            O usuário dispõe de 15 dias de teste grátis sem necessidade de inserção de cartão de crédito. O cancelamento pode ser efetuado a qualquer momento pelo painel da plataforma.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
