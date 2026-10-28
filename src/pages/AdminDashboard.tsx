import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { BlogPost, CATEGORY_LABELS } from "@/types/blog";
import { initialMockPosts } from "@/data/mockPosts";
import {
  Plus,
  LogOut,
  ExternalLink,
  Edit,
  Trash2,
  FileText,
  Eye,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>(initialMockPosts);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    async function checkAuthAndLoad() {
      if (!isSupabaseConfigured) {
        setUserEmail("modo-demonstracao@opesmedtech.com.br");
        setPosts(initialMockPosts);
        setLoading(false);
        return;
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/admin/login");
        return;
      }

      setUserEmail(session.user.email || "patricia@opesmedtech.com.br");

      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && data) {
          setPosts(data as BlogPost[]);
        }
      } catch (err) {
        console.error("Erro ao carregar lista de artigos:", err);
      } finally {
        setLoading(false);
      }
    }

    checkAuthAndLoad();
  }, [navigate]);

  const handleLogout = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    navigate("/admin/login");
  };

  const handleDeletePost = async (id: string, title: string) => {
    const confirmDelete = window.confirm(
      `Tem certeza de que deseja excluir o artigo "${title}"? Esta ação não pode ser desfeita.`
    );
    if (!confirmDelete) return;

    if (!isSupabaseConfigured) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
      return;
    }

    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (!error) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert("Erro ao excluir artigo: " + error.message);
      }
    } catch (err) {
      alert("Erro ao comunicar com o servidor.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Opes Medtech" className="h-7 w-auto" />
            </Link>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
              Painel Editorial
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="rounded-full text-xs font-semibold h-8 gap-1.5"
            >
              <Link to="/blog" target="_blank">
                <ExternalLink size={13} />
                <span className="hidden sm:inline">Ver Blog</span>
              </Link>
            </Button>

            <Button
              size="sm"
              asChild
              className="rounded-full text-xs font-bold h-8 bg-sky-600 hover:bg-sky-700 text-white gap-1.5 shadow-xs"
            >
              <Link to="/admin/novo">
                <Plus size={14} />
                Novo Artigo
              </Link>
            </Button>

            <button
              onClick={handleLogout}
              className="text-xs text-muted-foreground hover:text-red-600 p-1.5 rounded-lg transition-colors flex items-center gap-1 font-medium ml-1"
              title="Sair da conta"
            >
              <LogOut size={16} />
              <span className="hidden md:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isSupabaseConfigured && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
            <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">Modo de Demonstração Ativo:</strong>
              Você está visualizando os artigos demonstrativos locais. Para salvar publicações permanentes no banco da Patricia, basta adicionar as credenciais do Supabase no arquivo .env e na Vercel.
            </div>
          </div>
        )}

        {/* Dashboard Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              Artigos Publicados
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              Conectado como <strong className="text-foreground">{userEmail}</strong>
            </p>
          </div>

          <div className="text-xs text-muted-foreground bg-white px-3 py-1.5 rounded-xl border border-border">
            Total de publicações: <strong className="text-foreground">{posts.length}</strong>
          </div>
        </div>

        {/* Posts Table / Card List */}
        {loading ? (
          <div className="bg-white rounded-3xl border border-border p-12 text-center text-xs text-muted-foreground">
            Carregando artigos...
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-border p-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 mx-auto flex items-center justify-center">
              <FileText size={24} />
            </div>
            <h3 className="text-base font-bold text-foreground">
              Nenhum artigo publicado ainda
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              Clique no botão abaixo para começar a escrever seu primeiro post no blog da Opes Medtech.
            </p>
            <Button asChild className="rounded-full text-xs font-bold" size="sm">
              <Link to="/admin/novo">
                <Plus size={14} className="mr-1.5" />
                Criar Primeiro Artigo
              </Link>
            </Button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-slate-50/70 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6">Artigo</th>
                    <th className="py-3.5 px-4">Especialidade</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Data</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-xs">
                  {posts.map((post) => {
                    const catMeta =
                      CATEGORY_LABELS[post.category] || CATEGORY_LABELS.geral;
                    const dateFormatted = post.published_at
                      ? new Date(post.published_at).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "Rascunho";

                    return (
                      <tr key={post.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-4 sm:px-6 max-w-md">
                          <div className="font-bold text-foreground leading-snug hover:text-primary transition-colors">
                            <Link to={`/admin/editar/${post.id}`}>{post.title}</Link>
                          </div>
                          <div className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                            {post.excerpt}
                          </div>
                        </td>

                        <td className="py-4 px-4 whitespace-nowrap">
                          <span
                            className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${catMeta.bg} ${catMeta.color} ${catMeta.border}`}
                          >
                            {catMeta.label}
                          </span>
                        </td>

                        <td className="py-4 px-4 whitespace-nowrap">
                          {post.published ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle2 size={11} />
                              Publicado
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                              <Clock size={11} />
                              Rascunho
                            </span>
                          )}
                        </td>

                        <td className="py-4 px-4 whitespace-nowrap text-muted-foreground">
                          {dateFormatted}
                        </td>

                        <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
                              title="Ver artigo"
                            >
                              <Link to={`/blog/${post.slug}`} target="_blank">
                                <Eye size={15} />
                              </Link>
                            </Button>

                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
                              title="Editar"
                            >
                              <Link to={`/admin/editar/${post.id}`}>
                                <Edit size={15} />
                              </Link>
                            </Button>

                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeletePost(post.id, post.title)}
                              className="h-8 w-8 p-0 text-muted-foreground hover:text-red-600"
                              title="Excluir"
                            >
                              <Trash2 size={15} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
