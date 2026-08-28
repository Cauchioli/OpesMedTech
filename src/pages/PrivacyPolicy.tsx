import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header />
      <main className="container-custom py-24 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
        <div className="prose dark:prose-invert text-sm text-muted-foreground space-y-4">
          <p>
            A Opes Medtech está comprometida com a proteção e privacidade dos dados dos seus usuários, profissionais de saúde e pacientes, em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD) e normativas dos conselhos de classe.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-6 mb-2">1. Coleta e Uso de Dados</h2>
          <p>
            Os dados clínicos inseridos na plataforma são de propriedade exclusiva do profissional de saúde ou clínica contratante, sendo armazenados com criptografia de ponta a ponta em servidores de alta segurança.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-6 mb-2">2. Segurança das Informações</h2>
          <p>
            Utilizamos criptografia padrão bancário de 256 bits, certificação de conformidade SOC2 e backups automatizados diários.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
