export type BlogCategory =
  | "pediatria"
  | "terapia-ocupacional"
  | "psicologia"
  | "enfermagem"
  | "geral";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image?: string | null;
  category: BlogCategory;
  author_name: string;
  author_role?: string | null;
  published: boolean;
  published_at?: string | null;
  created_at: string;
  updated_at?: string | null;
  reading_time_minutes?: number;
}

export const CATEGORY_LABELS: Record<BlogCategory, { label: string; color: string; border: string; bg: string }> = {
  pediatria: {
    label: "Pediatria",
    color: "text-sky-700",
    border: "border-sky-200",
    bg: "bg-sky-50",
  },
  "terapia-ocupacional": {
    label: "Terapia Ocupacional",
    color: "text-purple-700",
    border: "border-purple-200",
    bg: "bg-purple-50",
  },
  psicologia: {
    label: "Psicologia Infantil",
    color: "text-violet-700",
    border: "border-violet-200",
    bg: "bg-violet-50",
  },
  enfermagem: {
    label: "Enfermagem Pediátrica",
    color: "text-cyan-700",
    border: "border-cyan-200",
    bg: "bg-cyan-50",
  },
  geral: {
    label: "Gestão & Tecnologia",
    color: "text-blue-700",
    border: "border-blue-200",
    bg: "bg-blue-50",
  },
};
