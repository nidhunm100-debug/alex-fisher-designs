import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { Magnetic } from "./Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/" && !scrolled;
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 240 && y > prev && !open);
  });

  useEffect(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-130%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 edge text-foreground transition-[background,padding] duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border py-3"
            : "py-6 md:py-8"
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <Magnetic strength={0.25}>
            <Link
              to="/"
              className="font-display text-lg md:text-xl tracking-tight leading-none"
            >
              Satyabhama <span className="italic">Majhi</span>
            </Link>
          </Magnetic>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Magnetic key={l.to} strength={0.35}>
                <Link
                  to={l.to}
                  className={`meta link-rise transition-colors hover:text-foreground ${
                    pathname.startsWith(l.to) ? "text-foreground" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </Magnetic>
            ))}
          </nav>

          <Magnetic strength={0.3} className="lg:hidden">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="meta text-foreground"
              aria-label="Open menu"
            >
              Menu
            </button>
          </Magnetic>
        </div>
      </motion.header>


      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[60] bg-background edge flex flex-col"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center justify-between py-6">
              <span className="font-display text-lg">Satyabhama Majhi</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="meta text-foreground"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-1 pb-16">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: EASE }}
                >
                  <Link
                    to={l.to}
                    className="block display-md py-1 border-b border-border/60"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="pb-10 meta">
              satyabhama1981@gmail.com · Bhubaneswar, Odisha
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
