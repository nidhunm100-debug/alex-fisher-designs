import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  claimFirstAdmin,
  deleteRow,
  fetchArtworks,
  fetchExhibitions,
  fetchPosts,
  fetchPress,
  fetchSettings,
  isCurrentUserAdmin,
  saveRow,
  saveSettings,
  slugify,
  uploadMedia,
  type TableName,
} from "@/lib/admin-data";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Studio Admin — Satyabhama Majhi" },
      { name: "description", content: "Manage artworks, exhibitions, press, writing and page details." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Studio Admin — Satyabhama Majhi" },
      { property: "og:description", content: "Private content management area." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

type Field = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "number" | "switch" | "image";
  placeholder?: string;
};

function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    let active = true;
    (async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user) return;
      if (active) setEmail(user.email ?? "");
      let allowed = await isCurrentUserAdmin(user.id);
      if (!allowed) allowed = await claimFirstAdmin();
      if (active) {
        setIsAdmin(allowed);
        setChecking(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  if (checking) {
    return <CenterNote text="Checking your access…" />;
  }

  if (!isAdmin) {
    return (
      <CenterNote
        text="This account is not an admin yet. Ask an existing admin to add you, then reload this page."
        action={<Button variant="outline" onClick={signOut}>Sign out</Button>}
      />
    );
  }

  return (
    <main className="min-h-screen bg-background px-5 py-10 sm:px-8 lg:px-14">
      <header className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 border-b border-border/70 pb-6">
        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">Studio</p>
          <h1 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">Content manager</h1>
          <p className="mt-1 text-xs text-muted-foreground">{email}</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">View site</Link>
          </Button>
          <Button variant="outline" size="sm" onClick={signOut}>
            Sign out
          </Button>
        </div>
      </header>

      <div className="mx-auto mt-8 max-w-6xl">
        <Tabs defaultValue="artworks">
          <TabsList className="flex w-full flex-wrap justify-start gap-1">
            <TabsTrigger value="artworks">Artworks</TabsTrigger>
            <TabsTrigger value="exhibitions">Exhibitions</TabsTrigger>
            <TabsTrigger value="press">Press</TabsTrigger>
            <TabsTrigger value="posts">Writing</TabsTrigger>
            <TabsTrigger value="settings">About &amp; contact</TabsTrigger>
          </TabsList>

          <TabsContent value="artworks" className="mt-8">
            <Collection
              table="artworks"
              queryKey="admin-artworks"
              fetcher={fetchArtworks}
              titleKey="title"
              subtitleKeys={["year", "medium", "category"]}
              imageKey="image_url"
              empty={{ title: "", year: "", medium: "", dimensions: "", description: "", image_url: "", category: "", sort_order: 0, is_visible: true }}
              fields={[
                { name: "title", label: "Title" },
                { name: "image_url", label: "Photo", type: "image" },
                { name: "year", label: "Year" },
                { name: "medium", label: "Medium" },
                { name: "dimensions", label: "Size" },
                { name: "category", label: "Category", placeholder: "Painting, Sculpture, Community…" },
                { name: "description", label: "Description", type: "textarea" },
                { name: "sort_order", label: "Display order", type: "number" },
                { name: "is_visible", label: "Show on website", type: "switch" },
              ]}
            />
          </TabsContent>

          <TabsContent value="exhibitions" className="mt-8">
            <Collection
              table="exhibitions"
              queryKey="admin-exhibitions"
              fetcher={fetchExhibitions}
              titleKey="title"
              subtitleKeys={["year", "venue", "city"]}
              empty={{ title: "", venue: "", city: "", year: "", kind: "", description: "", sort_order: 0, is_visible: true }}
              fields={[
                { name: "title", label: "Title" },
                { name: "year", label: "Year" },
                { name: "venue", label: "Venue" },
                { name: "city", label: "City" },
                { name: "kind", label: "Type", placeholder: "Solo, Group, Camp, Residency" },
                { name: "description", label: "Description", type: "textarea" },
                { name: "sort_order", label: "Display order", type: "number" },
                { name: "is_visible", label: "Show on website", type: "switch" },
              ]}
            />
          </TabsContent>

          <TabsContent value="press" className="mt-8">
            <Collection
              table="press_items"
              queryKey="admin-press"
              fetcher={fetchPress}
              titleKey="title"
              subtitleKeys={["publication", "published_on"]}
              empty={{ title: "", publication: "", published_on: "", url: "", excerpt: "", sort_order: 0, is_visible: true }}
              fields={[
                { name: "title", label: "Headline" },
                { name: "publication", label: "Publication" },
                { name: "published_on", label: "Date", placeholder: "March 2024" },
                { name: "url", label: "Link" },
                { name: "excerpt", label: "Quote or summary", type: "textarea" },
                { name: "sort_order", label: "Display order", type: "number" },
                { name: "is_visible", label: "Show on website", type: "switch" },
              ]}
            />
          </TabsContent>

          <TabsContent value="posts" className="mt-8">
            <Collection
              table="posts"
              queryKey="admin-posts"
              fetcher={() => fetchPosts()}
              titleKey="title"
              subtitleKeys={["category", "slug"]}
              imageKey="cover_image_url"
              empty={{ title: "", slug: "", excerpt: "", body: "", cover_image_url: "", category: "blog", is_published: false }}
              beforeSave={(values) => ({
                ...values,
                slug: String(values["slug"] || "").trim() || slugify(String(values["title"] || "")),
                published_at: values["is_published"] ? new Date().toISOString() : null,
              })}
              fields={[
                { name: "title", label: "Title" },
                { name: "cover_image_url", label: "Cover photo", type: "image" },
                { name: "category", label: "Section", placeholder: "blog or notes" },
                { name: "slug", label: "Web address (leave blank to auto-fill)" },
                { name: "excerpt", label: "Short summary", type: "textarea" },
                { name: "body", label: "Full text", type: "textarea" },
                { name: "is_published", label: "Published", type: "switch" },
              ]}
            />
          </TabsContent>

          <TabsContent value="settings" className="mt-8">
            <SettingsEditor />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

function CenterNote({ text, action }: { text: string; action?: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md space-y-5">
        <p className="text-sm text-muted-foreground">{text}</p>
        {action}
      </div>
    </main>
  );
}

type Row = Record<string, unknown> & { id: string };

function Collection({
  table,
  queryKey,
  fetcher,
  fields,
  empty,
  titleKey,
  subtitleKeys,
  imageKey,
  beforeSave,
}: {
  table: TableName;
  queryKey: string;
  fetcher: () => Promise<unknown[]>;
  fields: Field[];
  empty: Record<string, unknown>;
  titleKey: string;
  subtitleKeys: string[];
  imageKey?: string;
  beforeSave?: (values: Record<string, unknown>) => Record<string, unknown>;
}) {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({ queryKey: [queryKey], queryFn: fetcher });
  const rows = (data ?? []) as Row[];

  const [editing, setEditing] = useState<Record<string, unknown> | null>(null);
  const [saving, setSaving] = useState(false);

  const editingId = useMemo(() => (editing?.["id"] as string | undefined) ?? undefined, [editing]);

  async function handleSave() {
    if (!editing) return;
    setSaving(true);
    try {
      const { id: _id, created_at: _c, updated_at: _u, ...rest } = editing as Record<string, unknown>;
      const values = beforeSave ? beforeSave(rest) : rest;
      await saveRow(table, values, editingId);
      await queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success("Saved");
      setEditing(null);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not save");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this item permanently?")) return;
    try {
      await deleteRow(table, id);
      await queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success("Deleted");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not delete");
    }
  }

  if (editing) {
    return (
      <div className="border border-border/70 bg-card/50 p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-foreground">{editingId ? "Edit item" : "New item"}</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <FieldInput
              key={field.name}
              field={field}
              value={editing[field.name]}
              onChange={(value) => setEditing({ ...editing, [field.name]: value })}
            />
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </Button>
          <Button variant="outline" onClick={() => setEditing(null)} disabled={saving}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Button onClick={() => setEditing({ ...empty })}>Add new</Button>

      {isLoading ? (
        <p className="mt-8 text-sm text-muted-foreground">Loading…</p>
      ) : rows.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">Nothing here yet. Use “Add new” to create the first entry.</p>
      ) : (
        <ul className="mt-8 divide-y divide-border/60 border-y border-border/60">
          {rows.map((row) => (
            <li key={row.id} className="flex items-center gap-4 py-4">
              {imageKey && typeof row[imageKey] === "string" && row[imageKey] ? (
                <img
                  src={row[imageKey] as string}
                  alt=""
                  className="h-14 w-14 flex-shrink-0 object-cover"
                  loading="lazy"
                />
              ) : null}
              <div className="min-w-0 flex-1">
                <p className="truncate font-serif text-lg text-foreground">{String(row[titleKey] ?? "Untitled")}</p>
                <p className="truncate text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {subtitleKeys
                    .map((key) => row[key])
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
              <div className="flex flex-shrink-0 gap-2">
                <Button size="sm" variant="ghost" onClick={() => setEditing({ ...row })}>
                  Edit
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleDelete(row.id)}>
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  const [uploading, setUploading] = useState(false);

  if (field.type === "switch") {
    return (
      <div className="flex items-center gap-3 sm:col-span-2">
        <Switch checked={Boolean(value)} onCheckedChange={(checked) => onChange(checked)} id={field.name} />
        <Label htmlFor={field.name}>{field.label}</Label>
      </div>
    );
  }

  if (field.type === "image") {
    return (
      <div className="space-y-2 sm:col-span-2">
        <Label>{field.label}</Label>
        <div className="flex flex-wrap items-center gap-4">
          {typeof value === "string" && value ? (
            <img src={value} alt="" className="h-20 w-20 object-cover" />
          ) : null}
          <Input
            type="file"
            accept="image/*"
            className="max-w-xs"
            disabled={uploading}
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              setUploading(true);
              try {
                const url = await uploadMedia(file);
                onChange(url);
                toast.success("Photo uploaded");
              } catch (error) {
                toast.error(error instanceof Error ? error.message : "Upload failed");
              } finally {
                setUploading(false);
              }
            }}
          />
          {uploading ? <span className="text-xs text-muted-foreground">Uploading…</span> : null}
        </div>
        <Input
          placeholder="…or paste an image link"
          value={typeof value === "string" ? value : ""}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor={field.name}>{field.label}</Label>
        <Textarea
          id={field.name}
          rows={field.name === "body" ? 12 : 4}
          value={typeof value === "string" ? value : ""}
          placeholder={field.placeholder ?? ""}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={field.name}>{field.label}</Label>
      <Input
        id={field.name}
        type={field.type === "number" ? "number" : "text"}
        value={value === null || value === undefined ? "" : String(value)}
        placeholder={field.placeholder ?? ""}
        onChange={(event) =>
          onChange(field.type === "number" ? Number(event.target.value || 0) : event.target.value)
        }
      />
    </div>
  );
}

function SettingsEditor() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({ queryKey: ["admin-settings"], queryFn: fetchSettings });
  const [form, setForm] = useState<Record<string, unknown> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data && !form) setForm({ ...data });
  }, [data, form]);

  if (isLoading || !form) return <p className="text-sm text-muted-foreground">Loading…</p>;

  const fields: Field[] = [
    { name: "portrait_url", label: "Portrait photo", type: "image" },
    { name: "about_short", label: "Short introduction", type: "textarea" },
    { name: "about_long", label: "Full biography", type: "textarea" },
    { name: "email", label: "Email" },
    { name: "phone", label: "Phone" },
    { name: "location", label: "Location" },
    { name: "instagram_url", label: "Instagram link" },
    { name: "facebook_url", label: "Facebook link" },
  ];

  async function handleSave() {
    if (!form) return;
    setSaving(true);
    try {
      const { id, created_at: _c, updated_at: _u, ...values } = form as Record<string, unknown>;
      await saveSettings(String(id), values);
      await queryClient.invalidateQueries({ queryKey: ["admin-settings"] });
      toast.success("Saved");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not save");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="border border-border/70 bg-card/50 p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-foreground">About &amp; contact details</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <FieldInput
            key={field.name}
            field={field}
            value={form[field.name]}
            onChange={(value) => setForm({ ...form, [field.name]: value })}
          />
        ))}
      </div>
      <Button className="mt-8" onClick={handleSave} disabled={saving}>
        {saving ? "Saving…" : "Save"}
      </Button>
    </div>
  );
}
