import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DudaWhatsAppFloating from "@/components/DudaWhatsAppFloating";
import { BlogPost as IBlogPost, CATEGORY_LABELS } from "@/types/blog";
import { initialMockPosts } from "@/data/mockPosts";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  Sparkles,
  ArrowRight,
  User,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { marked } from "marked";
import DOMPurify from "dompurify";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<IBlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    async function loadPost() {
      if (!slug) return;

      if (!isSupabaseConfigured) {
        const found = initialMockPosts.find((p) => p.slug === slug);
        setPost(found || null);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("slug", slug)
          .eq("published", true)
          .maybeSingle();

        if (error || !data) {
          const fallback = initialMockPosts.find((p) => p.slug === slug);
          setPost(fallback || null);
        } else {
          setPost(data as IBlogPost);
        }
      } catch (err) {
        console.error("Erro ao carregar artigo:", err);
        const fallback = initialMockPosts.find((p) => p.slug === slug);
        setPost(fallback || null);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      `Confira este artigo da Opes Medtech: "${post?.title}"\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Header />
        <main className="pt-32 pb-20 text-center text-sm text-muted-foreground">
          Carregando publicação...
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Header />
        <main className="pt-32 pb-20 container-custom text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">
            Artigo não encontrado
          </h1>
          <p className="text-sm text-muted-foreground">
            A publicação solicitada não existe ou foi removida.
          </p>
          <Button asChild className="rounded-full text-xs font-bold" onClick={() => navigate("/blog")}>
            <Link to="/blog">Voltar para o Blog</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryMeta = CATEGORY_LABELS[post.category] || CATEGORY_LABELS.geral;
  const dateStr = post.published_at
    ? new Date(post.published_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "Data recente";

  // Parse Markdown to sanitized HTML
  const rawHtml = marked.parse(post.content || "") as string;
  const sanitizedHtml = DOMPurify.sanitize(rawHtml);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header />

      <main className="pt-24 md:pt-30 pb-20">
        <article className="container-custom max-w-4xl mx-auto">
          {/* Breadcrumb / Back button */}
          <div className="mb-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} />
              Voltar para todos os artigos
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-4 pb-8 border-b border-border/60">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryMeta.bg} ${categoryMeta.color} ${categoryMeta.border}`}
              >
                {categoryMeta.label}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock size={13} />
                {post.reading_time_minutes || 5} min de leitura
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar size={13} />
                {dateStr}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author bar & Share buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  <User size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">
                    {post.author_name}
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    {post.author_role || "Equipe Opes Medtech"}
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={shareWhatsApp}
                  className="rounded-full text-xs font-semibold h-8 border-emerald-500/40 text-emerald-700 hover:bg-emerald-50 gap-1.5"
                >
                  <MessageSquare size={13} className="text-emerald-600" />
                  WhatsApp
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyLink}
                  className="rounded-full text-xs font-semibold h-8 gap-1.5"
                >
                  {copied ? <Check size={13} className="text-emerald-600" /> : <Share2 size={13} />}
                  {copied ? "Link Copiado" : "Compartilhar"}
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Cover Image */}
          {post.cover_image && (
            <div className="my-8 rounded-3xl overflow-hidden border border-border shadow-md max-h-[460px] bg-slate-100">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Rich Text Body */}
          <div
            className="prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:text-foreground prose-h2:text-2xl prose-h3:text-xl prose-p:text-base prose-p:leading-relaxed prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80 prose-img:rounded-2xl prose-img:border prose-img:shadow-md py-4"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />

          {/* Author Box */}
          <div className="mt-12 p-6 rounded-3xl bg-muted/30 border border-border/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-base flex-shrink-0">
              <User size={22} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-0.5">
                Publicado por
              </span>
              <h4 className="text-sm font-bold text-foreground">
                {post.author_name}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                {post.author_role || "Equipe Editorial Opes Medtech"}
              </p>
            </div>
          </div>

          {/* Contextual CTA for 7 days trial */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 text-white p-8 sm:p-10 shadow-xl space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                <Sparkles size={11} />
                Experimente a Opes Medtech
              </div>
              <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">
                Prontuário com Inteligência Artificial e Prescrição Memed
              </h3>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                Comece seu teste de 7 dias grátis agora mesmo, sem cartão de crédito e sem fidelidade.
              </p>
            </div>

            <Button
              asChild
              className="rounded-full bg-white text-primary hover:bg-white/95 font-bold text-xs sm:text-sm px-7 h-11 shadow-md flex-shrink-0"
            >
              <a href="https://www.opespediatra.com/login">
                Começar Teste Grátis
                <ArrowRight size={14} className="ml-1.5" />
              </a>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
      <DudaWhatsAppFloating specialtyContext="Artigo" />
    </div>
  );
};

export default BlogPost;
