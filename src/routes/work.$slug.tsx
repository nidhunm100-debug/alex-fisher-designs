import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { artworks } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const artwork = artworks.find((a) => a.slug === params.slug);
    if (!artwork) throw notFound();
    return artwork;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Artwork"} — Satyabhama Majhi` },
      {
        name: "description",
        content: loaderData?.description ?? "Artwork by Satyabhama Majhi.",
      },
      { property: "og:title", content: loaderData?.title ?? "Artwork" },
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
  component: WorkDetail,
});

function WorkDetail() {
  const art = Route.useLoaderData();
  const related = artworks.filter((a) => a.slug !== art.slug);

  return (
    <PageShell>
      <section className="edge pt-36 md:pt-48 pb-12">
        <Reveal>
          <p className="meta">{art.category}</p>
          <h1 className="display-lg mt-4">{art.title}</h1>
        </Reveal>
      </section>

      <section className="edge">
        <ImageReveal
          src={art.image}
          alt={art.title}
          contain
          className="max-h-[80vh]"
          imgClassName="max-h-[80vh]"
        />
      </section>

      <section className="edge py-16 grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <dl className="space-y-4">
            <div>
              <dt className="meta">Year</dt>
              <dd className="text-base mt-1">{art.year}</dd>
            </div>
            <div>
              <dt className="meta">Medium</dt>
              <dd className="text-base mt-1">{art.medium}</dd>
            </div>
            <div>
              <dt className="meta">Category</dt>
              <dd className="text-base mt-1">{art.category}</dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
          <p className="font-display text-2xl leading-snug">{art.description}</p>
        </Reveal>
      </section>

      <section className="edge pb-10">
        <div className="border-t border-border pt-6 flex items-center justify-between">
          <h2 className="meta">Other works</h2>
          <Link to="/work" className="meta text-foreground link-rule">
            Archive
          </Link>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {related.map((a) => (
            <Link
              key={a.slug}
              to="/work/$slug"
              params={{ slug: a.slug }}
              className="group block"
            >
              <ImageReveal
                src={a.image}
                alt={a.title}
                className="aspect-[4/3]"
                imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.04]"
              />
              <h3 className="font-display text-2xl mt-4">{a.title}</h3>
              <p className="meta mt-1">{a.year}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
