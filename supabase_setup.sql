-- =========================================================================
-- ESQUEMA DO BLOG OPES MEDTECH (SUPABASE)
-- Execute este script no SQL Editor do painel do seu projeto no Supabase
-- =========================================================================

-- 1. Criação da Tabela de Postagens
create table if not exists public.posts (
  id uuid default gen_random_uuid() primary key,
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content text not null,
  cover_image text,
  category text not null default 'geral',
  author_name text not null default 'Patricia Koga',
  author_role text default 'Fundadora & Especialista Opes Medtech',
  reading_time_minutes integer default 5,
  published boolean not null default true,
  published_at timestamp with time zone default timezone('utc'::text, now()),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar Row Level Security (RLS)
alter table public.posts enable row level security;

-- Políticas de Segurança da Tabela de Posts
-- Qualquer visitante pode ler artigos publicados
create policy "Public can view published posts"
  on public.posts for select
  using (published = true);

-- Usuários logados (Patricia / Redação) têm acesso total
create policy "Authenticated users can select all posts"
  on public.posts for select
  to authenticated
  using (true);

create policy "Authenticated users can insert posts"
  on public.posts for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update posts"
  on public.posts for update
  to authenticated
  using (true);

create policy "Authenticated users can delete posts"
  on public.posts for delete
  to authenticated
  using (true);

-- 2. Configuração do Storage para Imagens de Capa
insert into storage.buckets (id, name, public)
values ('blog', 'blog', true)
on conflict (id) do nothing;

create policy "Public can view blog images"
  on storage.objects for select
  using (bucket_id = 'blog');

create policy "Authenticated can upload blog images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'blog');

create policy "Authenticated can update blog images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'blog');

-- 3. Artigos Iniciais de Exemplo (Seed Data)
insert into public.posts (
  slug,
  title,
  excerpt,
  content,
  cover_image,
  category,
  author_name,
  author_role,
  reading_time_minutes,
  published,
  published_at
) values
(
  'ia-na-transcricao-consultas-pediatricas',
  'Como a IA na transcrição de consultas reduz o tempo burocrático do pediatra',
  'Converse olhando nos olhos da criança e dos pais: entenda como a inteligência artificial preditiva estrutura prontuários, curvas e receitas automaticamente.',
  '## A rotina do consultório pediátrico contemporâneo\n\nMédicos pediatras enfrentam diariamente o dilema entre a atenção acolhedora à criança e a obrigação de preencher prontuários eletrônicos extensos.\n\n### O impacto da transcrição clínica por voz\n\nA introdução de modelos de linguagem e inteligência artificial treinados especificamente para a linguagem médica brasileira permite anamnese em tempo real e cálculo automático de percentis OMS.\n\n### Mais tempo para o que realmente importa\n\nQuando a tecnologia assume a carga operacional repetitiva, o consultório se torna um espaço de vínculo e escuta qualificada.',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  'pediatria',
  'Patricia Koga',
  'Fundadora & Especialista Opes Medtech',
  4,
  true,
  now()
),
(
  'integracao-sensorial-e-evolucao-terapeutica-to',
  'Integração sensorial e prontuário estruturado: o que muda no acompanhamento terapêutico',
  'Registro ágil do perfil sensorial, metas motoras e planos terapêuticos sem complicação documental para terapeutas ocupacionais e psicólogos.',
  '## O desafio da documentação em Terapia Ocupacional Infantil\n\nO trabalho em Terapia Ocupacional exige anotações detalhadas de cada sessão.\n\n### Estruturação ágil de anotações\n\nCom anotações padronizadas por eixos sensoriais e motores, o histórico comparativo fica claro e a emissão de relatórios de evolução terapêutica torna-se ágil e precisa.',
  'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
  'terapia-ocupacional',
  'Patricia Koga',
  'Fundadora & Especialista Opes Medtech',
  5,
  true,
  now()
)
on conflict (slug) do nothing;
