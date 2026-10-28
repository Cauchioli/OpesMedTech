import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { BlogPost, BlogCategory } from "@/types/blog";
import { initialMockPosts } from "@/data/mockPosts";
import {
  ArrowLeft,
  Save,
  Eye,
  Edit3,
  Upload,
  Image as ImageIcon,
  Check,
  AlertCircle,
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  Quote,
  Link2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { marked } from "marked";
import DOMPurify from "dompurify";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const AdminPostEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState<BlogCategory>("pediatria");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [authorName, setAuthorName] = useState("Patricia Koga");
  const [authorRole, setAuthorRole] = useState("Fundadora & Especialista Opes Medtech");
  const [readingTime, setReadingTime] = useState(5);
  const [published, setPublished] = useState(true);

  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    async function loadPostData() {
      if (!isEditing || !id) return;

      if (!isSupabaseConfigured) {
        const found = initialMockPosts.find((p) => p.id === id);
        if (found) {
          setTitle(found.title);
          setSlug(found.slug);
          setCategory(found.category);
          setExcerpt(found.excerpt);
          setContent(found.content);
          setCoverImage(found.cover_image || "");
          setAuthorName(found.author_name);
          setAuthorRole(found.author_role || "");
          setReadingTime(found.reading_time_minutes || 5);
          setPublished(found.published);
        }
        return;
      }

      try {
        const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();
        if (!error && data) {
          const post = data as BlogPost;
          setTitle(post.title);
          setSlug(post.slug);
          setCategory(post.category);
          setExcerpt(post.excerpt);
          setContent(post.content);
          setCoverImage(post.cover_image || "");
          setAuthorName(post.author_name);
          setAuthorRole(post.author_role || "");
          setReadingTime(post.reading_time_minutes || 5);
          setPublished(post.published);
        }
      } catch (err) {
        console.error("Erro ao carregar dados do post:", err);
      }
    }

    loadPostData();
  }, [id, isEditing]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEditing || !slug) {
      setSlug(slugify(val));
    }
  };

  const insertFormat = (before: string, after: string = "") => {
    const textarea = document.getElementById("post-content-textarea") as HTMLTextAreaElement | null;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const previousContent = content;
    const selectedText = previousContent.substring(start, end);

    const replacement = `${before}${selectedText || "texto"}${after}`;
    const newContent = previousContent.substring(0, start) + replacement + previousContent.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + (selectedText.length || 5));
    }, 50);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isSupabaseConfigured) {
      // In demo mode, use a sample image URL
      setCoverImage("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80");
      setStatusMessage({
        type: "success",
        text: "Modo demonstração: imagem simulada aplicada com sucesso.",
      });
      return;
    }

    setUploadingImage(true);
    setStatusMessage(null);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${slugify(file.name.replace(`.${fileExt}`, ""))}.${fileExt}`;
      const filePath = `capas/${fileName}`;

      const { error: uploadError } = await supabase.storage.from("blog").upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from("blog").getPublicUrl(filePath);
      if (data?.publicUrl) {
        setCoverImage(data.publicUrl);
        setStatusMessage({
          type: "success",
          text: "Imagem de capa enviada com sucesso!",
        });
      }
    } catch (err: any) {
      console.error("Erro no upload da imagem:", err);
      setStatusMessage({
        type: "error",
        text: "Não foi possível enviar a imagem. Verifique se o bucket 'blog' existe no Supabase.",
      });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!title.trim() || !content.trim()) {
      setStatusMessage({
        type: "error",
        text: "Por favor, preencha o título e o conteúdo do artigo.",
      });
      return;
    }

    setLoading(true);

    const postPayload = {
      title,
      slug: slug || slugify(title),
      category,
      excerpt,
      content,
      cover_image: coverImage || null,
      author_name: authorName,
      author_role: authorRole,
      reading_time_minutes: Number(readingTime) || 5,
      published,
      published_at: published ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };

    if (!isSupabaseConfigured) {
      setStatusMessage({
        type: "success",
        text: "Artigo salvo localmente (modo demonstração).",
      });
      setLoading(false);
      setTimeout(() => navigate("/admin"), 1000);
      return;
    }

    try {
      if (isEditing && id) {
        const { error } = await supabase.from("posts").update(postPayload).eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("posts").insert([
          {
            ...postPayload,
            created_at: new Date().toISOString(),
          },
        ]);
        if (error) throw error;
      }

      setStatusMessage({
        type: "success",
        text: isEditing ? "Artigo atualizado com sucesso!" : "Novo artigo publicado com sucesso!",
      });

      setTimeout(() => navigate("/admin"), 1200);
    } catch (err: any) {
      console.error("Erro ao salvar artigo:", err);
      setStatusMessage({
        type: "error",
        text: "Erro ao salvar: " + (err.message || "Verifique sua conexão e tente novamente."),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Editor Header Bar */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild className="rounded-full text-xs font-semibold h-8 gap-1">
              <Link to="/admin">
                <ArrowLeft size={14} />
                <span>Voltar ao Painel</span>
              </Link>
            </Button>
            <span className="text-sm font-bold text-foreground">
              {isEditing ? "Editar Artigo" : "Criar Novo Artigo"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full border border-border">
              <button
                type="button"
                onClick={() => setActiveTab("edit")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeTab === "edit" ? "bg-white text-foreground shadow-xs" : "text-muted-foreground"
                }`}
              >
                <Edit3 size={12} className="inline mr-1" />
                Redação
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeTab === "preview" ? "bg-white text-foreground shadow-xs" : "text-muted-foreground"
                }`}
              >
                <Eye size={12} className="inline mr-1" />
                Pré-visualização
              </button>
            </div>

            <Button
              type="submit"
              form="post-editor-form"
              disabled={loading}
              className="rounded-full text-xs font-bold h-9 bg-sky-600 hover:bg-sky-700 text-white gap-1.5 shadow-xs"
            >
              <Save size={14} />
              {loading ? "Salvando..." : "Salvar Artigo"}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Editor Body */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {statusMessage && (
          <div
            className={`mb-6 p-4 rounded-2xl text-xs flex items-center gap-2.5 ${
              statusMessage.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {statusMessage.type === "success" ? <Check size={16} /> : <AlertCircle size={16} />}
            <span>{statusMessage.text}</span>
          </div>
        )}

        <form id="post-editor-form" onSubmit={handleSave} className="space-y-6">
          {activeTab === "edit" ? (
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Title & Main Content (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white rounded-3xl border border-border p-6 shadow-xs space-y-4">
                  {/* Title */}
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">
                      Título do Artigo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Como a transcrição por voz agiliza o consultório pediátrico..."
                      value={title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border border-border text-base font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Slug Identifier */}
                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      Identificador de URL (Slug)
                    </label>
                    <div className="flex items-center text-xs text-muted-foreground bg-slate-50 px-3 py-2 rounded-xl border border-border">
                      <span className="opacity-70">opesmedtech.com.br/blog/</span>
                      <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(slugify(e.target.value))}
                        className="flex-1 bg-transparent border-none text-xs font-semibold text-foreground focus:outline-none ml-1"
                        placeholder="titulo-do-artigo"
                      />
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">
                      Resumo (Exibido no card e nas redes sociais)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Breve resumo em 1 ou 2 frases sobre o que o leitor encontrará neste post..."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Content Editor Block */}
                <div className="bg-white rounded-3xl border border-border p-6 shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <label className="block text-xs font-bold text-foreground">
                      Corpo do Artigo (Texto Formatado)
                    </label>

                    {/* Quick Formatting Toolbar */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => insertFormat("**", "**")}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-muted-foreground hover:text-foreground"
                        title="Negrito"
                      >
                        <Bold size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormat("*", "*")}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-muted-foreground hover:text-foreground"
                        title="Itálico"
                      >
                        <Italic size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormat("## ")}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-muted-foreground hover:text-foreground"
                        title="Título 2"
                      >
                        <Heading2 size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormat("### ")}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-muted-foreground hover:text-foreground"
                        title="Título 3"
                      >
                        <Heading3 size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormat("* ")}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-muted-foreground hover:text-foreground"
                        title="Lista com marcadores"
                      >
                        <List size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormat("> ")}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-muted-foreground hover:text-foreground"
                        title="Citação"
                      >
                        <Quote size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormat("[Link]", "(https://opesmedtech.com.br)")}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-muted-foreground hover:text-foreground"
                        title="Inserir Link"
                      >
                        <Link2 size={14} />
                      </button>
                    </div>
                  </div>

                  <textarea
                    id="post-content-textarea"
                    required
                    rows={16}
                    placeholder="Escreva aqui o conteúdo completo do seu artigo..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-4 rounded-2xl border border-border text-sm font-sans leading-relaxed text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <p className="text-[11px] text-muted-foreground">
                    Dica: use títulos (## e ###) para dividir os tópicos e listas com asterisco (*) para facilitar a leitura.
                  </p>
                </div>
              </div>

              {/* Right Column: Settings & Meta (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                {/* Publish State */}
                <div className="bg-white rounded-3xl border border-border p-6 shadow-xs space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Status de Publicação
                  </h3>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-border">
                    <span className="text-xs font-bold text-foreground">
                      {published ? "Visível no Blog (Publicado)" : "Oculto (Rascunho)"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPublished(!published)}
                      className={`relative w-11 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                        published ? "bg-emerald-600" : "bg-slate-300"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          published ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Category Picker */}
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Especialidade / Categoria
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as BlogCategory)}
                      className="w-full px-3 py-2.5 rounded-xl border border-border bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="pediatria">Pediatria</option>
                      <option value="terapia-ocupacional">Terapia Ocupacional</option>
                      <option value="psicologia">Psicologia Infantil</option>
                      <option value="enfermagem">Enfermagem Pediátrica</option>
                      <option value="geral">Gestão & Tecnologia</option>
                    </select>
                  </div>

                  {/* Reading Time */}
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Tempo estimado de leitura (minutos)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={readingTime}
                      onChange={(e) => setReadingTime(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Cover Image Block */}
                <div className="bg-white rounded-3xl border border-border p-6 shadow-xs space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Imagem de Capa
                  </h3>

                  {coverImage ? (
                    <div className="space-y-2">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-slate-100">
                        <img src={coverImage} alt="Capa" className="w-full h-full object-cover" />
                      </div>
                      <button
                        type="button"
                        onClick={() => setCoverImage("")}
                        className="text-xs text-red-600 hover:underline font-semibold block"
                      >
                        Remover imagem
                      </button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-border rounded-2xl p-6 text-center space-y-2">
                      <ImageIcon size={28} className="mx-auto text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">
                        {uploadingImage ? "Enviando imagem..." : "Arraste uma foto ou selecione do computador"}
                      </div>
                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold cursor-pointer hover:bg-primary/20 transition-all">
                        <Upload size={13} />
                        Escolher Arquivo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={uploadingImage}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] text-muted-foreground mb-1">
                      Ou cole o link de uma imagem externa
                    </label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-border text-xs focus:outline-none"
                    />
                  </div>
                </div>

                {/* Author Info */}
                <div className="bg-white rounded-3xl border border-border p-6 shadow-xs space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Autor da Publicação
                  </h3>

                  <div>
                    <label className="block text-[11px] font-semibold text-foreground mb-1">Nome</label>
                    <input
                      type="text"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-border text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-foreground mb-1">Cargo / Especialidade</label>
                    <input
                      type="text"
                      value={authorRole}
                      onChange={(e) => setAuthorRole(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-border text-xs focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Tab: Preview */
            <div className="bg-white rounded-3xl border border-border p-8 sm:p-12 shadow-sm max-w-4xl mx-auto space-y-6">
              <div className="space-y-3 pb-6 border-b border-border">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase">
                  {category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground leading-tight">
                  {title || "Título do Artigo"}
                </h1>
                <p className="text-base text-muted-foreground">
                  {excerpt || "Resumo do artigo aparecerá aqui..."}
                </p>
                <div className="text-xs text-muted-foreground">
                  Por {authorName} ({authorRole}) • {readingTime} min de leitura
                </div>
              </div>

              {coverImage && (
                <div className="rounded-2xl overflow-hidden border border-border max-h-[420px]">
                  <img src={coverImage} alt="Capa" className="w-full h-full object-cover" />
                </div>
              )}

              <div
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(marked.parse(content || "*Nenhum conteúdo digitado ainda...*") as string),
                }}
              />
            </div>
          )}
        </form>
      </main>
    </div>
  );
};

export default AdminPostEditor;
