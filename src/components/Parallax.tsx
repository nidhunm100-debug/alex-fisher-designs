import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className="h-[115%] w-full object-cover"
      />
    </div>
  );
}
