create table if not exists public.font_events (
  id bigserial primary key,
  font_slug text not null,
  event_type text not null default 'download' check (event_type = 'download'),
  path text,
  created_at timestamptz not null default now()
);

create index if not exists font_events_font_slug_created_at_idx
on public.font_events (font_slug, created_at desc);

alter table public.font_events enable row level security;

drop policy if exists "public download inserts only" on public.font_events;
create policy "public download inserts only"
on public.font_events
for insert
to anon
with check (
  event_type = 'download'
  and length(trim(font_slug)) > 0
);

create table if not exists public.font_download_counts (
  font_slug text primary key,
  downloads bigint not null default 0 check (downloads >= 0),
  updated_at timestamptz not null default now()
);

alter table public.font_download_counts enable row level security;

drop policy if exists "public reads download counts" on public.font_download_counts;
create policy "public reads download counts"
on public.font_download_counts
for select
to anon
using (true);

create or replace function public.increment_font_download_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.font_download_counts (font_slug, downloads, updated_at)
  values (new.font_slug, 1, now())
  on conflict (font_slug)
  do update set
    downloads = public.font_download_counts.downloads + 1,
    updated_at = now();

  return new;
end;
$$;

revoke all on function public.increment_font_download_count() from public, anon, authenticated;

drop trigger if exists font_events_increment_download_count on public.font_events;
create trigger font_events_increment_download_count
after insert on public.font_events
for each row
execute function public.increment_font_download_count();

grant usage on schema public to anon;
grant insert on public.font_events to anon;
grant usage, select on sequence public.font_events_id_seq to anon;
grant select on public.font_download_counts to anon;
