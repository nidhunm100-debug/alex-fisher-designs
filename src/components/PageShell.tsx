import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

/** Page wrapper with header, footer and a soft page transition. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="enter-fade">{children}</main>
      <SiteFooter />
    </div>
  );
}

/** Large editorial page opening used by every inner page. */
export function PageHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="edge pt-32 md:pt-48 pb-10 md:pb-20 border-b border-border">
      <p className="meta enter-fade">{eyebrow}</p>
      <h1 className="display-lg mt-5 max-w-5xl enter-fade enter-delay-1">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground enter-fade enter-delay-2">
          {intro}
        </p>
      )}
    </section>
  );
}
