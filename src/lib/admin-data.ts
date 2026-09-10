import { supabase } from "@/integrations/supabase/client";

export const MEDIA_BUCKET = "site-media";
const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

export async function uploadMedia(file: File): Promise<string> {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${safeName}`;

  const { error } = await supabase.storage
    .from(MEDIA_BUCKET)
    .upload(path, file, { cacheControl: "31536000", upsert: false });
  if (error) throw error;

  const { data, error: signError } = await supabase.storage
    .from(MEDIA_BUCKET)
    .createSignedUrl(path, TEN_YEARS);
  if (signError || !data?.signedUrl) throw signError ?? new Error("Could not create image link");

  return data.signedUrl;
}

export type Artwork = {
  id: string;
  title: string;
  year: string | null;
  medium: string | null;
  dimensions: string | null;
  description: string | null;
  image_url: string | null;
  category: string | null;
  sort_order: number;
  is_visible: boolean;
};

export type Exhibition = {
  id: string;
  title: string;
  venue: string | null;
  city: string | null;
  year: string | null;
  kind: string | null;
  description: string | null;
  sort_order: number;
  is_visible: boolean;
};

export type PressItem = {
  id: string;
  title: string;
  publication: string | null;
  published_on: string | null;
  url: string | null;
  excerpt: string | null;
  sort_order: number;
  is_visible: boolean;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string | null;
  cover_image_url: string | null;
  category: string;
  is_published: boolean;
  published_at: string | null;
};

export type SiteSettings = {
  id: string;
  about_short: string | null;
  about_long: string | null;
  email: string | null;
  phone: string | null;
  location: string | null;
  instagram_url: string | null;
  facebook_url: string | null;
  portrait_url: string | null;
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/* ---------- public reads (used by the visible website) ---------- */

export async function fetchArtworks() {
  const { data, error } = await supabase
    .from("artworks")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Artwork[];
}

export async function fetchExhibitions() {
  const { data, error } = await supabase
    .from("exhibitions")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Exhibition[];
}

export async function fetchPress() {
  const { data, error } = await supabase
    .from("press_items")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as PressItem[];
}

export async function fetchPosts(category?: string) {
  let query = supabase.from("posts").select("*").order("created_at", { ascending: false });
  if (category) query = query.eq("category", category);
  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as Post[];
}

export async function fetchSettings() {
  const { data, error } = await supabase.from("site_settings").select("*").limit(1).maybeSingle();
  if (error) throw error;
  return (data ?? null) as SiteSettings | null;
}

/* ---------- admin writes ---------- */

export type TableName = "artworks" | "exhibitions" | "press_items" | "posts";

export async function saveRow(table: TableName, values: Record<string, unknown>, id?: string) {
  if (id) {
    const { error } = await supabase.from(table).update(values as never).eq("id", id);
    if (error) throw error;
  } else {
    const { error } = await supabase.from(table).insert(values as never);
    if (error) throw error;
  }
}

export async function deleteRow(table: TableName, id: string) {
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
}

export async function saveSettings(id: string, values: Record<string, unknown>) {
  const { error } = await supabase.from("site_settings").update(values as never).eq("id", id);
  if (error) throw error;
}

export async function isCurrentUserAdmin(userId: string) {
  const { data, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", userId)
    .eq("role", "admin")
    .maybeSingle();
  if (error) return false;
  return Boolean(data);
}

export async function claimFirstAdmin() {
  const { data, error } = await supabase.rpc("claim_first_admin");
  if (error) return false;
  return Boolean(data);
}
