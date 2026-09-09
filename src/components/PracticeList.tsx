import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { practices } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PracticeList() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <ul className="border-t border-border">
      {practices.map((p, i) => (
        <li
          key={p.title}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          className="group relative border-b border-border"
        >
          <button
            type="button"
            onClick={() => setActive(active === i ? null : i)}
            className="w-full text-left py-5 md:py-7 flex items-baseline gap-6 transition-colors hover:text-terracotta"
          >
            <span className="meta w-8 shrink-0">{p.n}</span>
            <span className="display-md flex-1">{p.title}</span>
            <span className="hidden md:block max-w-xs text-sm text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {p.text}
            </span>
          </button>
          <div className="md:hidden pb-5 pl-14 pr-2 text-sm text-muted-foreground">
            {p.text}
          </div>

          <AnimatePresence>
            {active === i && (
              <motion.div
                key={p.image}
                className="pointer-events-none hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 xl:w-72 aspect-[3/4] overflow-hidden z-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}
