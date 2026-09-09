import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeading } from "@/components/PageShell";
import { ImageReveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";
import { galleryCategories, galleryItems } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Visual Archive of Satyabhama Majhi" },
      {
        name: "description",
        content:
          "A cinematic archive of artwork images and field documentation from the practice of Satyabhama Majhi.",
      },
      { property: "og:title", content: "Gallery — Satyabhama Majhi" },
      {
        property: "og:description",
        content: "Artwork images, exhibition and field documentation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      galleryItems.filter(
        (g) => category === "All" || g.category === category,
      ),
    [category],
  );

  return (
    <PageShell>
      <PageHeading
        eyebrow="Visual archives"
        title="Gallery"
        intro="Artwork images, research reflections and field documentation. Select any image for the full view."
      />

      <section className="edge py-10 flex flex-wrap gap-x-6 gap-y-3">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`meta transition-colors hover:text-foreground ${
              category === c ? "text-foreground" : ""
            }`}
          >
            {c}
          </button>
        ))}
      </section>

      <section className="edge pb-24">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <button
              key={g.image}
              type="button"
              onClick={() => setIndex(i)}
              className="group mb-6 block w-full break-inside-avoid text-left"
            >
              <ImageReveal
                src={g.image}
                alt={g.title}
                className={
                  i % 3 === 0
                    ? "aspect-[4/5]"
                    : i % 3 === 1
                      ? "aspect-square"
                      : "aspect-[4/3]"
                }
                imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.05]"
              />
              <p className="meta mt-3">{g.category}</p>
              <p className="font-display text-xl">{g.title}</p>
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        items={items}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </PageShell>
  );
}
