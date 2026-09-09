import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ImageReveal, Reveal, TextReveal } from "@/components/Reveal";
import { artist, methodology, timeline } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Satyabhama Majhi, Artist in Bhubaneswar" },
      {
        name: "description",
        content:
          "Biography, professional timeline and studio methodology of Satyabhama Majhi — contemporary artist, curator and community art practitioner in Odisha.",
      },
      { property: "og:title", content: "About Satyabhama Majhi" },
      {
        property: "og:description",
        content:
          "Two decades of painting, public art, community practice and natural pigment research.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: artist.portrait },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: artist.portrait },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Satyabhama Majhi",
          jobTitle: "Contemporary Artist",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bhubaneswar",
            addressRegion: "Odisha",
            addressCountry: "India",
          },
          email: artist.email,
          telephone: artist.phone,
          url: "https://satyabhamamajhi.in/",
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="edge pt-36 md:pt-48 pb-16">
        <Reveal>
          <p className="meta">Biography</p>
          <h1 className="display-xl mt-4">
            Satyabhama
            <br />
            <span className="italic">Majhi</span>
          </h1>
          <p className="meta mt-8">
            Contemporary Indian Artist — Curator — Social Activist — Community
            Art Practitioner
          </p>
        </Reveal>
      </section>

      <section className="edge grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <ImageReveal
            src={artist.portrait}
            alt="Portrait of Satyabhama Majhi"
            className="aspect-[4/5]"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7 self-center">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl leading-snug">
              <TextReveal text={artist.statement} />
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              {artist.short}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Based in {artist.location}, she holds an M.F.A. in Traditional Art
              and works across painting, sculpture, installation, photography,
              mixed media, public art, community art and art education, with a
              long-running enquiry into natural pigments, urban life,
              ecological themes and indigenous knowledge.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="edge py-24 md:py-32 grid gap-12 md:grid-cols-2">
        <Reveal>
          <p className="meta">Mission</p>
          <p className="mt-4 font-display text-xl leading-snug">
            {artist.mission}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="meta">Vision</p>
          <p className="mt-4 font-display text-xl leading-snug">
            {artist.vision}
          </p>
        </Reveal>
      </section>

      <section className="edge py-16 border-t border-border">
        <Reveal>
          <p className="meta">Professional journey</p>
          <h2 className="display-lg mt-4 mb-12">2006 — Present</h2>
        </Reveal>
        <ol>
          {timeline.map((t, i) => (
            <li key={t.period} className="border-t border-border">
              <Reveal delay={i * 0.06}>
                <div className="grid gap-4 py-10 md:grid-cols-12">
                  <p className="display-md md:col-span-4">{t.period}</p>
                  <div className="md:col-span-7 md:col-start-6">
                    <h3 className="font-display text-2xl">{t.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {t.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="edge py-24" style={{ background: "var(--paper)" }}>
        <Reveal>
          <p className="meta">Awards & recognition</p>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Reveal>
            <p className="display-md">Odisha Lalit Kala Akademi State Award</p>
            <p className="meta mt-2">2012</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display-md">
              National Lalit Kala Akademi Scholarship, New Delhi
            </p>
            <p className="meta mt-2">2009 – 2010</p>
          </Reveal>
        </div>
      </section>

      <section className="edge py-24 md:py-32">
        <Reveal>
          <p className="meta">Process & practice</p>
          <h2 className="display-lg mt-4 mb-12">Creative methodology</h2>
        </Reveal>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {methodology.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.08}>
              <p className="meta">{m.n}</p>
              <h3 className="display-md mt-2">{m.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground max-w-md">
                {m.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="edge pb-10">
        <Reveal>
          <Link to="/work" className="meta text-foreground link-rule">
            Explore the archive
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}
