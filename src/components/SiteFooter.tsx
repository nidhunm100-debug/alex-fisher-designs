import { Link } from "@tanstack/react-router";
import { artist, navLinks } from "@/data/site";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  return (
    <footer className="edge border-t border-border pt-20 pb-10 mt-32">
      <Reveal>
        <h2 className="display-xl leading-[0.85]">
          Satyabhama
          <br />
          <span className="italic">Majhi</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="meta">Practice</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Contemporary Artist
            <br />
            {artist.location}
          </p>
        </div>

        <div>
          <p className="meta">Index</p>
          <ul className="mt-3 grid grid-cols-2 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm link-rule">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="meta">Contact</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href={`mailto:${artist.email}`} className="link-rule w-fit">
              {artist.email}
            </a>
            <a href={`tel:${artist.phone}`} className="link-rule w-fit">
              {artist.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
        <p className="meta">© 2026 Satyabhama Majhi</p>
        <p className="meta">All Rights Reserved</p>
      </div>
    </footer>
  );
}
