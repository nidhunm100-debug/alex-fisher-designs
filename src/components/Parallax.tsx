import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Full-bleed image with a subtle vertical parallax drift. */
export function ParallaxImage({
  src,
  alt,
  className,
  strength = 60,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Parallax only on larger screens — it is the main cause of mobile scroll jank.
    setEnabled(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const active = enabled && !reduced;
  const drift = active ? Math.min(strength, 40) : 0;
  const y = useTransform(scrollYProgress, [0, 1], [-drift, drift]);

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={active ? { y } : {}}
        className={`w-full object-cover ${active ? "h-[112%]" : "h-full"}`}
      />
    </div>
  );
}
