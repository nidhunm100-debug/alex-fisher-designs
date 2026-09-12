import aboutPortraitAsset from "@/assets/about-portrait.png.asset.json";
import { assetUrl } from "@/lib/asset-url";
const aboutPortrait = assetUrl(aboutPortraitAsset);
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
      <section className="relative overflow-hidden bg-archive py-16 text-archive-foreground md:py-36 lg:min-h-[880px] lg:flex lg:items-center">
        <div className="pointer-events-none absolute inset-y-0 left-[7%] hidden w-px bg-archive-line/50 lg:block" aria-hidden="true" />
        <div className="edge mx-auto grid w-full max-w-[1500px] items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="relative order-2 lg:order-1 lg:col-span-7 lg:pl-10">
            <Reveal>
              <p className="meta mb-8 text-archive-gold">The living archive · Bhubaneswar</p>
              <h2 className="font-display text-[clamp(2.75rem,12vw,9rem)] leading-[0.85] text-archive-foreground sm:leading-[0.78]">
                Hello,
                <span className="mt-2 block italic text-archive-muted sm:mt-3">I’m Satyabhama.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 max-w-2xl border-l border-archive-line pl-7 md:pl-10">
                <p className="text-base font-light leading-8 text-archive-muted md:text-lg">
                  {artist.short}
                </p>
                <Link
                  to="/about"
                  className="group mt-10 inline-flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.22em] text-archive-foreground"
                >
                  <span className="h-px w-12 bg-archive-gold transition-[width] duration-500 group-hover:w-20" aria-hidden="true" />
                  More details
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:col-span-5 lg:max-w-none">
            <Reveal delay={0.2}>
              <div className="relative border border-archive-line p-3 md:p-4">
                <div className="aspect-[3/4] overflow-hidden bg-archive-surface">
                  <img
                    src={aboutPortrait}
                    alt="Portrait of artist Satyabhama Majhi"
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover grayscale-[35%] contrast-[1.04] transition duration-[1400ms] ease-out hover:scale-[1.025] hover:grayscale-0"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4 border-t border-archive-line pt-4">
                  <span className="meta text-archive-muted">Artist · Curator · Activist</span>
                  <span className="meta text-archive-gold">2000—Present</span>
                </div>
              </div>
            </Reveal>
            <span className="pointer-events-none absolute -bottom-6 -left-5 hidden origin-bottom-left -rotate-90 select-none whitespace-nowrap font-display text-7xl uppercase text-archive-line/40 lg:block" aria-hidden="true">
              Odisha / India
            </span>
          </div>
        </div>
      </section>


      {/* 03 — FEATURED WORK MARQUEE */}
      <section className="relative overflow-hidden border-t border-archive-line bg-archive py-16 text-archive-foreground md:py-36">
        <div className="edge">
          <Reveal>
            <div className="flex items-end justify-between gap-8 border-b border-archive-line pb-6">
              <div>
                <p className="meta mb-4 text-archive-gold">From the studio archive</p>
                <h2 className="display-md text-archive-foreground">Selected Work</h2>
              </div>
              <Link to="/work" className="meta shrink-0 text-archive-muted link-rule">
                Explore Archive
              </Link>
            </div>
          </Reveal>
        </div>

        <Marquee speed={40} className="mt-12 md:mt-16" pauseOnHover>
          {featured.map((art) => (
            <FeatureWork
              key={art.slug}
              art={art}
              className="w-[82vw] shrink-0 pr-5 md:w-[44vw] md:pr-8 lg:w-[35vw]"
              wide
              archive
            />
          ))}
        </Marquee>
      </section>

      {/* 04 — UNURBANISATION */}
      <section className="py-16 md:py-32" style={{ background: "var(--paper)" }}>
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
      <section className="edge py-16 md:py-36">
        <Reveal>
          <p className="meta">Practice</p>
          <h2 className="display-lg mt-4 mb-12">Ways of working</h2>
        </Reveal>
        <PracticeList />
      </section>

      {/* 06 — COMMUNITY */}
      <section className="edge py-16 md:py-32 border-t border-border">
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
      <section className="edge py-16 md:py-32">
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
                className="group grid items-center gap-2 py-6 md:grid-cols-12 md:gap-3"
              >
                <span className="meta md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display-md md:col-span-6 transition-transform duration-500 md:group-hover:translate-x-2">
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
        <section className="edge py-16 md:py-32 border-t border-border">
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
      <section className="edge py-16 md:py-32">
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
      <section className="edge py-16 md:py-32 border-t border-border">
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
      <section className="edge pt-16 pb-10 md:pt-24 md:pb-16">
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
  archive,
}: {
  art: (typeof artworks)[number];
  className?: string;
  tall?: boolean;
  wide?: boolean;
  archive?: boolean;
}) {
  return (
    <article className={className}>
      <Link
        to="/work/$slug"
        params={{ slug: art.slug }}
        className={archive ? "group block border border-archive-line p-3 md:p-4" : "group block"}
      >
        <div className={archive ? "overflow-hidden bg-archive-surface" : undefined}>
          <ImageReveal
            src={art.image}
            alt={art.title}
            className={
              wide ? "aspect-[16/10]" : tall ? "aspect-[4/3]" : "aspect-[3/4]"
            }
            imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        </div>
        <div className={archive ? "mt-4 flex min-h-20 items-start justify-between gap-6 border-t border-archive-line pt-4" : "mt-5 flex items-start justify-between gap-6"}>
          <div>
            <h3 className={archive ? "font-display text-2xl text-archive-foreground md:text-3xl" : "font-display text-2xl md:text-3xl"}>{art.title}</h3>
            <p className={archive ? "meta mt-2 text-archive-muted" : "meta mt-2"}>
              {art.year} — {art.medium}
            </p>
          </div>
          <span className={archive ? "meta shrink-0 text-archive-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" : "meta opacity-0 transition-opacity duration-500 group-hover:opacity-100"}>
            View Work →
          </span>
        </div>
      </Link>
    </article>
  );
}
