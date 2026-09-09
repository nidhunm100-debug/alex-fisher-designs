import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade-up reveal on scroll into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Clip-path image reveal with a slow inner scale. */
export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  contain = false,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  contain?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, delay, ease: EASE }}
        className={`h-full w-full ${contain ? "object-contain" : "object-cover"} ${imgClassName ?? ""}`}
      />
    </motion.div>
  );
}

/** Character-by-character mask reveal for display headings. */
export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  let charIndex = 0;
  return (
    <span className={className}>
      {words.map((word, w) => (
        <span
          key={`${word}-${w}`}
          className="inline-block overflow-hidden align-bottom"
        >
          {Array.from(word).map((char, c) => {
            const i = charIndex++;
            return (
              <motion.span
                key={`${char}-${c}`}
                className="inline-block"
                initial={{ y: "115%", rotate: 4, opacity: 0 }}
                whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.95,
                  delay: delay + i * 0.022,
                  ease: EASE,
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {w < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}

