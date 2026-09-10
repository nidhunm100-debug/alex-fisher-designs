import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { artist } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Satyabhama Majhi Studio" },
      {
        name: "description",
        content:
          "Enquiries for exhibitions, community workshops, commissions and research collaborations with artist Satyabhama Majhi, Bhubaneswar.",
      },
      { property: "og:title", content: "Contact — Satyabhama Majhi" },
      {
        property: "og:description",
        content: "Open for exhibitions, public art, research and workshops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const enquiryTypes = [
  "Exhibitions & Showcases",
  "Community Art Workshops",
  "Art Purchases & Commissions",
  "Research & Field Projects",
  "General Enquiry",
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: enquiryTypes[0]!,
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AEnquiry: ${form.type}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:${artist.email}?subject=${encodeURIComponent(
      form.type,
    )}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full border-b border-border bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground focus:border-foreground transition-colors";

  return (
    <PageShell>
      <section className="edge pt-32 pb-10 md:pt-48 md:pb-16">
        <Reveal>
          <p className="meta">Collaborations & enquiries</p>
          <h1 className="display-xl mt-4">
            Let's connect
            <br />& collaborate.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Open for curatorial exhibitions, public art installations, natural
            pigment research collaborations, community workshops, and related
            artistic collaborations.
          </p>
        </Reveal>
      </section>

      <section className="edge pb-16 grid gap-10 md:pb-24 md:gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <div className="space-y-8">
            <div>
              <p className="meta">Email</p>
              <a
                href={`mailto:${artist.email}`}
                className="mt-2 inline-block font-display text-2xl link-rule"
              >
                {artist.email}
              </a>
            </div>
            <div>
              <p className="meta">Phone</p>
              <a
                href={`tel:${artist.phone}`}
                className="mt-2 inline-block font-display text-2xl link-rule"
              >
                {artist.phone}
              </a>
            </div>
            <div>
              <p className="meta">Studio</p>
              <p className="mt-2 font-display text-2xl">{artist.location}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
          <form onSubmit={onSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="meta">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
              />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="meta">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="phone" className="meta">
                  Phone
                </label>
                <input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={field}
                />
              </div>
            </div>
            <div>
              <label htmlFor="type" className="meta">
                Enquiry type
              </label>
              <select
                id="type"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className={field}
              >
                {enquiryTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="meta">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field} resize-none`}
              />
            </div>

            <button type="submit" className="meta text-foreground link-rule">
              Send enquiry
            </button>

            {sent && (
              <p className="text-sm text-muted-foreground">
                Your email application should now be open with the message
                ready to send.
              </p>
            )}
          </form>
        </Reveal>
      </section>
    </PageShell>
  );
}
