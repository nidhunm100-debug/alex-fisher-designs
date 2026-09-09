import { motion } from "motion/react";
import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Page wrapper with header, footer and a soft page transition. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
      >
        {children}
      </motion.main>
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
    <section className="edge pt-36 md:pt-48 pb-14 md:pb-20 border-b border-border">
      <motion.p
        className="meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        className="display-lg mt-5 max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
      >
        {title}
      </motion.h1>
      {intro && (
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
        >
          {intro}
        </motion.p>
      )}
    </section>
  );
}
