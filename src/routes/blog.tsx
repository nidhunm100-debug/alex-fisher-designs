import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeading } from "@/components/PageShell";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { blogs } from "@/data/site";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/admin-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Writings by Satyabhama Majhi" },
      {
        name: "description",
        content:
          "Essays and stories on ecological art, natural pigments, landscape and community practice from artist Satyabhama Majhi.",
      },
      { property: "og:title", content: "Journal — Satyabhama Majhi" },
      {
        property: "og:description",
        content: "Essays on ecological art, pigments and community practice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Insights & stories"
        title="Journal"
        intro="Deep-dives, stories behind the canvas, forest exploration diaries and ecological art reflections."
      />

      <section className="edge py-12 md:py-20">
        {blogs.map((b, i) => (
          <article key={b.slug} className="border-b border-border py-14 first:pt-4">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2 md:col-start-8" : ""}`}
              >
                <ImageReveal src={b.image} alt={b.title} className="aspect-[4/3]" />
              </div>
              <Reveal
                delay={0.08}
                className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}
              >
                <p className="meta">
                  {b.category} — {b.date}
                </p>
                <h2 className="display-md mt-3">{b.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {b.excerpt}
                </p>
              </Reveal>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
