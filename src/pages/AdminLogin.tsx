import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // If already logged in, redirect to dashboard
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/admin");
      }
    });
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!isSupabaseConfigured) {
      setErrorMsg(
        "O banco Supabase ainda não foi configurado. Configure as variáveis de ambiente VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY."
      );
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg("E-mail ou senha incorretos. Por favor, tente novamente.");
      } else {
        navigate("/admin");
      }
    } catch (err) {
      setErrorMsg("Ocorreu um erro inesperado ao conectar. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo Card */}
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <img src={logo} alt="Opes Medtech" className="h-10 mx-auto" />
          </Link>
          <h1 className="text-xl font-extrabold text-foreground mt-4">
            Painel Administrativo do Blog
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Acesso exclusivo para redação e publicação de conteúdos Opes
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-border shadow-xl p-8 space-y-6">
          {!isSupabaseConfigured && (
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
              <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Aviso de Configuração:</strong>
                As credenciais do Supabase ainda não foram adicionadas ao arquivo .env. Para testar a interface de redação, adicione a URL e chave pública.
              </div>
            </div>
          )}

          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
              <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-foreground mb-1.5">
                E-mail de Acesso
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="email"
                  required
                  placeholder="patricia@opesmedtech.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-slate-50/50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1.5">
                Senha
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-slate-50/50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl h-11 text-xs font-bold bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white shadow-md"
            >
              {loading ? "Entrando..." : "Entrar no Painel"}
              <ArrowRight size={14} className="ml-2" />
            </Button>
          </form>

          <div className="pt-2 text-center border-t border-border/50">
            <Link
              to="/blog"
              className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Voltar para o Blog Público
            </Link>
          </div>
        </div>

        <div className="text-center mt-6 text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span>Ambiente protegido com criptografia de ponta a ponta</span>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
