import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeading } from "@/components/PageShell";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Community & Public Art by Satyabhama Majhi" },
      {
        name: "description",
        content:
          "Public murals, participatory walls, ecological installations and children's workshops led by Satyabhama Majhi across Odisha and India.",
      },
      { property: "og:title", content: "Projects — Satyabhama Majhi" },
      {
        property: "og:description",
        content: "Community, public art and ecological projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Art as service"
        title="Community & public projects"
        intro="Collaborative works, workshops and environmental initiatives connecting sustainable practice with rural community voices."
      />

      <section className="edge py-20 grid gap-x-10 gap-y-24 md:grid-cols-12">
        {projects.map((p, i) => {
          const wide = i % 3 === 0;
          return (
            <article
              key={p.slug}
              className={
                wide
                  ? "md:col-span-8"
                  : i % 3 === 1
                    ? "md:col-span-4 md:self-end"
                    : "md:col-span-7 md:col-start-5"
              }
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <ImageReveal
                  src={p.image}
                  alt={p.title}
                  className={wide ? "aspect-[16/10]" : "aspect-[3/4]"}
                  imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.04]"
                />
                <Reveal delay={0.05}>
                  <p className="meta mt-5">
                    {p.category} — {p.location} — {p.year}
                  </p>
                  <h2 className="display-md mt-2">{p.title}</h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <span className="meta mt-4 inline-block text-foreground link-rule">
                    View Project
                  </span>
                </Reveal>
              </Link>
            </article>
          );
        })}
      </section>
    </PageShell>
  );
}
