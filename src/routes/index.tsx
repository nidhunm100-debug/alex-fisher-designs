import aboutPortraitAsset from "@/assets/about-portrait.png.asset.json";
const aboutPortrait = aboutPortraitAsset.url;
import { photo } from "@/data/photos";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { HeroSlider } from "@/components/HeroSlider";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { ParallaxImage } from "@/components/Parallax";
import { PracticeList } from "@/components/PracticeList";
import {
  artist,
  artworks,
  blogs,
  exhibitions,
  notes,
  projects,
  quotes,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satyabhama Majhi — Contemporary Artist, Odisha" },
      {
        name: "description",
        content:
          "Portfolio of Satyabhama Majhi: painting, installation, public art and community practice rooted in Bhubaneswar, Odisha.",
      },
      { property: "og:title", content: "Satyabhama Majhi — Contemporary Artist" },
      {
        property: "og:description",
        content:
          "Where art meets people, memory, nature and the living culture of Odisha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = artworks.filter((a) => a.featured);
  const current = exhibitions.find((e) => e.status === "Current");

  return (
    <PageShell>
      <HeroSlider />

      {/* 02 — ARTIST STATEMENT */}
      <section className="relative py-28 md:py-40 bg-paper overflow-hidden">
        <div className="edge grid gap-16 md:gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-6 relative">
            <Reveal y={40}>
              <h2 className="display-xl uppercase tracking-tight text-clay">
                Hello!
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 font-display uppercase text-xl md:text-2xl lg:text-3xl leading-[1.45] tracking-wide text-foreground/85 max-w-xl">
                {artist.short}
              </p>
              <Link
                to="/about"
                className="mt-12 inline-flex items-center gap-3 border-2 border-foreground/30 px-10 py-4 meta text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground"
              >
                More details
                <span aria-hidden="true" className="text-lg">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8 relative">
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] w-full">
                <div
                  className="absolute inset-0 rounded-t-[999px] border-2 border-clay/25 translate-x-5 translate-y-5"
                  aria-hidden="true"
                />
                <div
                  className="relative h-full w-full overflow-hidden rounded-t-[999px] border-2 border-clay/40"
                  style={{ background: "var(--forest)" }}
                >
                  <img
                    src={aboutPortrait}
                    alt="Satyabhama Majhi painting outdoors"
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover mix-blend-multiply"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute -top-4 -right-2 md:-right-8 h-36 w-36 md:h-44 md:w-44 animate-[spin_22s_linear_infinite]">
                <svg viewBox="0 0 200 200" className="h-full w-full fill-foreground/80">
                  <defs>
                    <path id="aboutCircle" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
                  </defs>
                  <text fontSize="16" letterSpacing="3.5" className="font-display uppercase">
                    <textPath href="#aboutCircle">
                      Painter · Installation · Community art · Odisha ·
                    </textPath>
                  </text>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* 03 — FEATURED WORK MARQUEE */}
      <section className="pb-24 md:pb-40 overflow-hidden">
        <div className="edge">
          <Reveal>
            <div className="flex items-end justify-between border-b border-border pb-5">
              <h2 className="display-md">Selected Work</h2>
              <Link to="/work" className="meta text-foreground link-rule">
                Explore Archive
              </Link>
            </div>
          </Reveal>
        </div>

        <Marquee speed={40} className="mt-14" pauseOnHover>
          {featured.map((art) => (
            <FeatureWork
              key={art.slug}
              art={art}
              className="w-[78vw] md:w-[42vw] lg:w-[34vw] pr-6 md:pr-10 shrink-0"
              wide
            />
          ))}
        </Marquee>
      </section>

      {/* 04 — UNURBANISATION */}
      <section className="py-24 md:py-32" style={{ background: "var(--paper)" }}>
        <div className="edge">
          <Reveal>
            <p className="meta">Ongoing enquiry</p>
            <h2 className="display-xl mt-4">Unurbanisation</h2>
          </Reveal>
        </div>

        <ParallaxImage
          src={photo.vision2040}
          alt="Unurbanisation painting series detail"
          className="mt-14 h-[55vh] md:h-[80vh] w-full"
        />

        <div className="edge mt-14 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5 md:col-start-2">
            <p className="font-display text-2xl md:text-3xl leading-snug">
              A visual and philosophical exploration of the tension between
              urban expansion, landscape, ecology, memory and human connection.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-4 md:col-start-9 self-end">
            <p className="text-base leading-relaxed text-muted-foreground">
              Painted with earth pigments gathered from Odisha's riverbeds and
              forest terrain, the series records what a landscape remembers as
              concrete arrives.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 05 — ARTISTIC PRACTICE */}
      <section className="edge py-24 md:py-36">
        <Reveal>
          <p className="meta">Practice</p>
          <h2 className="display-lg mt-4 mb-12">Ways of working</h2>
        </Reveal>
        <PracticeList />
      </section>

      {/* 06 — COMMUNITY */}
      <section className="edge py-24 md:py-32 border-t border-border">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="meta">Art as service</p>
            <h2 className="display-lg mt-4">
              Art
              <br />+ People
              <br />+ Memory
              <br />+ Nature
              <br />+ Community
            </h2>
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <ImageReveal
              src={photo.tondoThreeWomen}
              alt="People's Wall participatory project with indigenous women artists"
              className="aspect-[4/3]"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Community work is not a service line beside the studio — it is
                the practice itself: indigenous communities, women artists and
                artisans, school children, rural collectives, public spaces and
                creative education.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 — SELECTED PROJECTS */}
      <section className="edge py-24 md:py-32">
        <Reveal>
          <div className="flex items-end justify-between border-b border-border pb-5">
            <h2 className="display-md">Selected Projects</h2>
            <Link to="/projects" className="meta text-foreground link-rule">
              All Projects
            </Link>
          </div>
        </Reveal>
        <ul className="mt-4">
          {projects.slice(0, 4).map((p, i) => (
            <li key={p.slug} className="border-b border-border">
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group grid items-center gap-3 py-6 md:grid-cols-12"
              >
                <span className="meta md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display-md md:col-span-6 transition-transform duration-500 group-hover:translate-x-2">
                  {p.title}
                </span>
                <span className="meta md:col-span-3">{p.location}</span>
                <span className="meta md:col-span-2 md:text-right">{p.year}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 08 — EXHIBITIONS */}
      {current && (
        <section className="edge py-24 md:py-32 border-t border-border">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <ImageReveal
                src={current.image}
                alt={current.title}
                className="aspect-[5/4]"
              />
            </div>
            <Reveal delay={0.1} className="md:col-span-5 md:col-start-8 self-center">
              <p className="meta">Current exhibition</p>
              <h2 className="display-md mt-4">{current.title}</h2>
              <p className="mt-4 meta">{current.dates}</p>
              <p className="meta mt-1">
                {current.venue} — {current.location}
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {current.description}
              </p>
              <Link
                to="/exhibitions"
                className="mt-6 inline-block meta text-foreground link-rule"
              >
                View Exhibition
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* 09 — JOURNAL */}
      <section className="edge py-24 md:py-32">
        <Reveal>
          <div className="flex items-end justify-between border-b border-border pb-5">
            <h2 className="display-md">From the Studio</h2>
            <Link to="/blog" className="meta text-foreground link-rule">
              Read Journal
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {[...blogs.slice(0, 2), notes[0]!].map((a, i) => (
            <article key={a.slug}>
              <ImageReveal
                src={a.image}
                alt={a.title}
                className="aspect-[4/5]"
                delay={i * 0.08}
              />
              <Reveal delay={0.1 + i * 0.08}>
                <p className="meta mt-5">
                  {a.category} — {a.date}
                </p>
                <h3 className="font-display text-2xl mt-2">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* 10 — QUOTES */}
      <section className="edge py-24 md:py-32 border-t border-border">
        <div className="grid gap-12 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.author} delay={i * 0.1}>
              <p className="font-display text-xl leading-snug">"{q.text}"</p>
              <p className="meta mt-5">
                {q.author} — {q.role}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 11 — CONTACT */}
      <section className="edge py-24 md:py-36">
        <Reveal>
          <p className="meta">Collaborations & enquiries</p>
          <h2 className="display-lg mt-4 max-w-3xl">
            Let's connect
            <br />& collaborate.
          </h2>
          <Link to="/contact" className="mt-8 inline-block meta text-foreground link-rule">
            Write to the studio
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}

function FeatureWork({
  art,
  className,
  tall,
  wide,
}: {
  art: (typeof artworks)[number];
  className?: string;
  tall?: boolean;
  wide?: boolean;
}) {
  return (
    <article className={className}>
      <Link to="/work/$slug" params={{ slug: art.slug }} className="group block">
        <ImageReveal
          src={art.image}
          alt={art.title}
          className={
            wide ? "aspect-[16/10]" : tall ? "aspect-[4/3]" : "aspect-[3/4]"
          }
          imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl">{art.title}</h3>
            <p className="meta mt-2">
              {art.year} — {art.medium}
            </p>
          </div>
          <span className="meta opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            View Work →
          </span>
        </div>
      </Link>
    </article>
  );
}
