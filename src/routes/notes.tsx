import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeading } from "@/components/PageShell";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { notes } from "@/data/site";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Studio Notes — Satyabhama Majhi" },
      {
        name: "description",
        content:
          "Research, field observations and reflections from the studio of Satyabhama Majhi on pigments, landscape and unurbanisation.",
      },
      { property: "og:title", content: "Studio Notes — Satyabhama Majhi" },
      {
        property: "og:description",
        content: "Field notes and research from the studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NotesPage,
});

function NotesPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Insights"
        title="Studio notes & reflections"
        intro="Research, observations, field experiences and reflections from the workspace of Satyabhama Majhi."
      />

      <section className="edge py-12 grid gap-x-10 gap-y-14 md:py-20 md:gap-y-24 md:grid-cols-12">
        {notes.map((n, i) => (
          <article
            key={n.slug}
            className={i % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:self-end"}
          >
            <ImageReveal
              src={n.image}
              alt={n.title}
              className={i % 2 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}
            />
            <Reveal delay={0.06}>
              <p className="meta mt-5">
                {n.category} — {n.date}
              </p>
              <h2 className="display-md mt-2">{n.title}</h2>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
                {n.excerpt}
              </p>
            </Reveal>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
