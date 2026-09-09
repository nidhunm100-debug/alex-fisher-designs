import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { ParallaxImage } from "@/components/Parallax";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Project"} — Satyabhama Majhi` },
      {
        name: "description",
        content: loaderData?.description ?? "Project by Satyabhama Majhi.",
      },
      { property: "og:title", content: loaderData?.title ?? "Project" },
      { property: "og:description", content: loaderData?.description ?? "" },
      { property: "og:type", content: "article" },
      ...(loaderData?.image
        ? [
            { property: "og:image", content: loaderData.image },
            { name: "twitter:image", content: loaderData.image },
          ]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <PageShell>
      <section className="edge pt-36 md:pt-48 pb-10">
        <Reveal>
          <p className="meta">{project.category}</p>
          <h1 className="display-lg mt-4 max-w-4xl">{project.title}</h1>
        </Reveal>
      </section>

      <ParallaxImage
        src={project.image}
        alt={project.title}
        className="h-[55vh] md:h-[80vh] w-full"
      />

      <section className="edge py-16 grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <dl className="space-y-4">
            <div>
              <dt className="meta">Year</dt>
              <dd className="text-base mt-1">{project.year}</dd>
            </div>
            <div>
              <dt className="meta">Location</dt>
              <dd className="text-base mt-1">{project.location}</dd>
            </div>
            <div>
              <dt className="meta">Category</dt>
              <dd className="text-base mt-1">{project.category}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-8 md:col-start-5">
          <p className="font-display text-2xl md:text-3xl leading-snug">
            {project.description}
          </p>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            The project was developed on site with the people who live around it
            — gathering stories, materials and time before any surface was
            painted. Process documentation and additional photographs from the
            studio archive will be added to this case study.
          </p>
        </Reveal>
      </section>

      <section className="edge pb-10">
        <div className="border-t border-border pt-6 flex items-center justify-between">
          <h2 className="meta">Related projects</h2>
          <Link to="/projects" className="meta text-foreground link-rule">
            All Projects
          </Link>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <ImageReveal
                src={p.image}
                alt={p.title}
                className="aspect-[4/3]"
                imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.04]"
              />
              <h3 className="font-display text-xl mt-4">{p.title}</h3>
              <p className="meta mt-1">{p.year}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
