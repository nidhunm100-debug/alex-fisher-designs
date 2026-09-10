import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Trailing editorial cursor that swells over links, buttons and images. */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 32, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let isActive = false;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      const next = !!el?.closest?.(
        'a, button, [role="button"], img, input, textarea',
      );
      // Only re-render when the hover state actually changes.
      if (next !== isActive) {
        isActive = next;
        setActive(next);
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);

  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.span
        className="block rounded-full bg-background"
        animate={{
          width: active ? 44 : 10,
          height: active ? 44 : 10,
          x: active ? -22 : -5,
          y: active ? -22 : -5,
          opacity: active ? 0.55 : 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      />
    </motion.div>
  );
}
