import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DudaWhatsAppFloating from "@/components/DudaWhatsAppFloating";
import { BlogPost, BlogCategory, CATEGORY_LABELS } from "@/types/blog";
import { initialMockPosts } from "@/data/mockPosts";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { Search, Clock, Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialMockPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadPosts() {
      if (!isSupabaseConfigured) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false });

        if (!error && data && data.length > 0) {
          setPosts(data as BlogPost[]);
        }
      } catch (err) {
        console.error("Erro ao carregar artigos do Supabase:", err);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "todos" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header />

      <main className="pt-24 md:pt-28 pb-16">
        {/* Blog Header Hero */}
        <section className="bg-gradient-to-b from-sky-50/50 via-purple-50/20 to-transparent py-12 md:py-16 border-b border-border/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200/50">
                <BookOpen size={13} />
                Artigos e Conhecimento Clínico
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                Conteúdos práticos para a rotina da saúde infantil
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Artigos sobre medicina pediátrica, terapia ocupacional, psicologia infantil, enfermagem e gestão de consultórios.
              </p>

              {/* Search Bar */}
              <div className="pt-4 max-w-xl mx-auto relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Pesquisar por assunto ou palavra-chave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-border shadow-xs text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="py-6 border-b border-border/40 bg-muted/20">
          <div className="container-custom">
            <div className="flex items-center justify-center flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("todos")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === "todos"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-white text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                Todos os Artigos
              </button>

              {(Object.keys(CATEGORY_LABELS) as BlogCategory[]).map((catKey) => {
                const isSelected = selectedCategory === catKey;
                const config = CATEGORY_LABELS[catKey];
                return (
                  <button
                    key={catKey}
                    onClick={() => setSelectedCategory(catKey)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "bg-white text-muted-foreground hover:text-foreground border border-border"
                    }`}
                  >
                    {config.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="section-padding">
          <div className="container-custom">
            {loading ? (
              <div className="text-center py-20 text-muted-foreground text-sm">
                Carregando publicações...
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-16 max-w-md mx-auto space-y-3">
                <p className="text-base font-semibold text-foreground">
                  Nenhum artigo encontrado
                </p>
                <p className="text-xs text-muted-foreground">
                  Tente alterar os termos da busca ou selecionar outra categoria.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("todos");
                    setSearchQuery("");
                  }}
                  className="rounded-full text-xs font-bold"
                >
                  Limpar Filtros
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
                {filteredPosts.map((post) => {
                  const categoryMeta =
                    CATEGORY_LABELS[post.category] || CATEGORY_LABELS.geral;
                  const dateStr = post.published_at
                    ? new Date(post.published_at).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "Recente";

                  return (
                    <article
                      key={post.id}
                      className="bg-card rounded-3xl border border-border/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
                    >
                      <div>
                        {/* Cover Image */}
                        {post.cover_image && (
                          <Link
                            to={`/blog/${post.slug}`}
                            className="block aspect-[16/10] overflow-hidden bg-slate-100 relative"
                          >
                            <img
                              src={post.cover_image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </Link>
                        )}

                        <div className="p-6">
                          {/* Category Badge + Reading Time */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span
                              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${categoryMeta.bg} ${categoryMeta.color} ${categoryMeta.border}`}
                            >
                              {categoryMeta.label}
                            </span>
                            <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                              <Clock size={12} />
                              {post.reading_time_minutes || 5} min de leitura
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h2>

                          {/* Excerpt */}
                          <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Footer Info */}
                      <div className="px-6 pb-6 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          <span>{dateStr}</span>
                        </div>

                        <Link
                          to={`/blog/${post.slug}`}
                          className="font-bold text-primary hover:text-primary/80 inline-flex items-center gap-1 text-xs"
                        >
                          Ler Artigo
                          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA to Try Opes */}
        <section className="py-12 bg-sky-50/40 border-t border-border/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-sky-100 p-8 sm:p-10 shadow-md text-center space-y-4">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles size={12} />
                Degustação Sem Compromisso
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                Leve a inteligência artificial para o seu consultório
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
                Teste o prontuário eletrônico com transcrição por voz e prescrição Memed por 7 dias grátis, sem fidelidade e sem cartão de crédito.
              </p>
              <div className="pt-2 flex justify-center">
                <Button
                  asChild
                  className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs sm:text-sm px-7 h-11 shadow-sm"
                >
                  <a href="https://www.opespediatra.com/login">
                    Começar Teste de 7 Dias
                    <ArrowRight size={14} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <DudaWhatsAppFloating specialtyContext="Blog" />
    </div>
  );
};

export default Blog;
