import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeading } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { press } from "@/data/site";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Satyabhama Majhi in Media" },
      {
        name: "description",
        content:
          "Interviews, publications and media coverage documenting the artistic trajectory of Satyabhama Majhi.",
      },
      { property: "og:title", content: "Press — Satyabhama Majhi" },
      {
        property: "og:description",
        content: "Selected interviews and publications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PressPage,
});

function PressPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Selected media"
        title="Press & publications"
        intro="Interviews, publications, reviews and external media coverage documenting Satyabhama Majhi's artistic trajectory."
      />

      <section className="edge py-20">
        <ul>
          {press.map((p, i) => (
            <li key={p.title} className="border-t border-border last:border-b">
              <Reveal delay={i * 0.05}>
                <div className="grid gap-4 py-12 md:grid-cols-12">
                  <p className="display-md md:col-span-2">{p.year}</p>
                  <div className="md:col-span-3">
                    <p className="meta">{p.publication}</p>
                    <p className="meta mt-1">{p.date}</p>
                  </div>
                  <div className="md:col-span-7">
                    <h2 className="font-display text-2xl">{p.title}</h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
