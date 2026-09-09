import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeading } from "@/components/PageShell";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { exhibitions } from "@/data/site";

export const Route = createFileRoute("/exhibitions")({
  head: () => ({
    meta: [
      { title: "Exhibitions — Satyabhama Majhi" },
      {
        name: "description",
        content:
          "Current and archived solo and group exhibitions of Satyabhama Majhi, including Unurbanisation & Ecology at Sasatwa Art Space, Bhubaneswar.",
      },
      { property: "og:title", content: "Exhibitions — Satyabhama Majhi" },
      {
        property: "og:description",
        content: "Current, upcoming and archived exhibitions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExhibitionsPage,
});

function ExhibitionsPage() {
  const current = exhibitions.filter((e) => e.status === "Current");
  const archive = exhibitions.filter((e) => e.status === "Archive");

  return (
    <PageShell>
      <PageHeading
        eyebrow="Presentations"
        title="Exhibitions"
        intro="Solo and group showcases, presented as a catalogue rather than a calendar."
      />

      {current.map((e) => (
        <section key={e.slug} className="edge py-20 border-b border-border">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <ImageReveal src={e.image} alt={e.title} className="aspect-[16/10]" />
            </div>
            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 self-center">
              <p className="meta">Current</p>
              <h2 className="display-md mt-3">{e.title}</h2>
              <p className="meta mt-4">{e.dates}</p>
              <p className="meta mt-1">
                {e.venue} — {e.location}
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {e.description}
              </p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="edge py-20">
        <Reveal>
          <p className="meta">Archive</p>
        </Reveal>
        <ul className="mt-10">
          {archive.map((e, i) => (
            <li key={e.slug} className="border-t border-border">
              <Reveal delay={i * 0.05}>
                <div className="grid gap-6 py-12 md:grid-cols-12">
                  <div className="md:col-span-3">
                    <ImageReveal
                      src={e.image}
                      alt={e.title}
                      className="aspect-[4/3]"
                    />
                  </div>
                  <div className="md:col-span-6 md:col-start-5">
                    <h3 className="display-md">{e.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xl">
                      {e.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <p className="meta">{e.dates}</p>
                    <p className="meta mt-1">{e.venue}</p>
                    <p className="meta mt-1">{e.location}</p>
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
