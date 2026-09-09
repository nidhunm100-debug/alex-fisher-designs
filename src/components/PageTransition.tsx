import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

const EASE = [0.76, 0, 0.24, 1] as const;

/** Curtain of panels that sweeps across the screen on every route change. */
export function PageTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [key, setKey] = useState<string | null>(null);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }
    setKey(pathname);
    const id = window.setTimeout(() => setKey(null), 1100);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {key && (
        <motion.div
          key={key}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[80] flex"
        >

          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              className="h-full flex-1 bg-foreground"
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: [0, 1, 1, 0] }}
              transition={{
                duration: 1.05,
                times: [0, 0.42, 0.5, 1],
                ease: EASE,
                delay: i * 0.045,
              }}
              style={{ transformOrigin: "bottom" }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
