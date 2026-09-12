import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { artist } from "@/data/site";
import { Reveal } from "./Reveal";

const socials = [
  { label: "Twitter", href: "https://twitter.com/satyabhama", Icon: Twitter },
  { label: "Facebook", href: "https://facebook.com/satyabhama.majhi", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/satyabhama_majhi", Icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/9438731542", Icon: MessageCircle },
];

const quickNav = [
  { to: "/work", label: "Work Archive" },
  { to: "/about", label: "About Biography" },
  { to: "/projects", label: "Projects & Community" },
  { to: "/exhibitions", label: "Exhibitions Timeline" },
  { to: "/gallery", label: "Media Gallery" },
  { to: "/notes", label: "Studio Notes" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-archive-line bg-archive text-archive-foreground">
      <div className="edge py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand */}
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-4xl leading-none md:text-5xl">
              Satyabhama <span className="italic text-archive-muted">Majhi</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-archive-muted">
              “Satyabhama is an artist from Bhubaneswar (Odisha) practicing in varied
              expressions such as painting, installation art, sculpting and
              photography…”
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-archive-gold link-rule"
            >
              Read Biography →
            </Link>
            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-archive-line text-archive-muted transition-colors duration-300 hover:border-archive-gold hover:text-archive-gold"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="meta text-archive-gold">Contact Info</p>
            <ul className="mt-6 flex flex-col gap-4 text-sm text-archive-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-archive-gold" aria-hidden="true" />
                <span>
                  Plot No. K-7, 386, Kalinganagar, Near Ghatikia, Bhubaneswar,
                  Odisha, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-archive-gold" aria-hidden="true" />
                <a href={`tel:${artist.phone}`} className="link-rule w-fit">
                  {artist.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-archive-gold" aria-hidden="true" />
                <a href={`mailto:${artist.email}`} className="link-rule w-fit break-all">
                  {artist.email}
                </a>
              </li>
            </ul>
          </Reveal>

          {/* Quick nav */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <p className="meta text-archive-gold">Quick Navigation</p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-archive-muted">
              {quickNav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-rule transition-colors hover:text-archive-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Newsletter */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <p className="meta text-archive-gold">Newsletter</p>
            <p className="mt-6 text-sm leading-relaxed text-archive-muted">
              Receive updates on new exhibitions, research reflections, and field
              notes.
            </p>
            <form
              className="mt-6 flex border border-archive-line"
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem("email");
                const value = input instanceof HTMLInputElement ? input.value : "";
                window.location.href = `mailto:${artist.email}?subject=Newsletter%20subscription&body=Please%20add%20${encodeURIComponent(value)}%20to%20the%20studio%20newsletter.`;
              }}
            >
              <label htmlFor="footer-newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter"
                name="email"
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent px-4 py-3 text-sm text-archive-foreground placeholder:text-archive-muted focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 border-l border-archive-line px-4 text-xs font-semibold uppercase tracking-[0.18em] text-archive-gold transition-colors hover:bg-archive-surface"
              >
                Join
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <div className="edge border-t border-archive-line py-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="meta text-archive-muted">
            © 2026 Satyabhama Majhi, All Rights Reserved.
          </p>
          <p className="meta text-archive-muted">{artist.location}</p>
        </div>
      </div>
    </footer>
  );
}
