import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeading } from "@/components/PageShell";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { artworks, workCategories } from "@/data/site";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Satyabhama Majhi Artwork Archive" },
      {
        name: "description",
        content:
          "An archive of paintings and mixed-media works by Satyabhama Majhi, made with natural pigments from Odisha.",
      },
      { property: "og:title", content: "Work — Satyabhama Majhi" },
      {
        property: "og:description",
        content: "Paintings and mixed-media works across signature themes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      artworks.filter(
        (a) =>
          (category === "All" || a.category === category) &&
          (query.trim() === "" ||
            `${a.title} ${a.medium} ${a.category}`
              .toLowerCase()
              .includes(query.toLowerCase())),
      ),
    [category, query],
  );

  return (
    <PageShell>
      <PageHeading
        eyebrow="Contemporary archive"
        title="Artwork"
        intro="Filter and examine works across signature themes — painting, natural pigment research and mixed media."
      />

      <section className="edge py-8 flex flex-col gap-5 md:py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {workCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`meta py-1 transition-colors hover:text-foreground ${
                category === c ? "text-foreground" : ""
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search works"
          aria-label="Search works"
          className="w-full md:w-64 border-b border-border bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground"
        />
      </section>

      <section className="edge pb-16 md:pb-24">
        {filtered.length === 0 ? (
          <p className="py-20 meta">No works match this filter.</p>
        ) : (
          <div className="columns-1 gap-10 sm:columns-2 lg:columns-3">
            {filtered.map((a, i) => (
              <article key={a.slug} className="mb-10 break-inside-avoid md:mb-14">
                <Link
                  to="/work/$slug"
                  params={{ slug: a.slug }}
                  className="group block"
                >
                  <ImageReveal
                    src={a.image}
                    alt={a.title}
                    className={i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]"}
                    imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                  <Reveal delay={0.05}>
                    <p className="meta mt-4">{a.category}</p>
                    <h2 className="font-display text-2xl mt-1">{a.title}</h2>
                    <p className="meta mt-2">
                      {a.medium} — {a.year}
                    </p>
                  </Reveal>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
