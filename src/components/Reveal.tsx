import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * In-view detection with two safety nets:
 * 1. Content is rendered fully visible until the client has mounted, so the
 *    server-rendered HTML is readable even if hydration or JS fails.
 * 2. If the observer never reports the element (small viewports, smooth-scroll
 *    containers), a timer reveals it anyway.
 */
function useReveal(margin: string) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin } as never);
  const [mounted, setMounted] = useState(false);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = window.setTimeout(() => setFallback(true), 1200);
    return () => window.clearTimeout(id);
  }, []);

  // Before mount: visible (no animation). After mount: animate on view.
  return [ref, !mounted || inView || fallback, mounted] as const;
}

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
  const [ref, shown, mounted] = useReveal("-80px");
  const hidden = { opacity: 0, y };
  const visible = { opacity: 1, y: 0 };
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={visible}
      animate={!mounted ? visible : shown ? visible : hidden}
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
  const [ref, shown, mounted] = useReveal("-60px");
  const open = "inset(0 0 0% 0)";
  const closed = "inset(0 0 100% 0)";
  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: open }}
      animate={{ clipPath: !mounted || shown ? open : closed }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ scale: 1 }}
        animate={{ scale: !mounted || shown ? 1 : 1.14 }}
        transition={{ duration: 1.4, delay, ease: EASE }}
        className={`h-full w-full ${contain ? "object-contain" : "object-cover"} ${imgClassName ?? ""}`}
      />
    </motion.div>
  );
}

/** Word-by-word mask reveal for display headings. */
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
  const [ref, shown, mounted] = useReveal("-60px");
  let charIndex = 0;
  const visible = { y: 0, rotate: 0, opacity: 1 };
  const hidden = { y: "115%", rotate: 4, opacity: 0 };
  return (
    <span className={className} ref={ref as never}>
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
                initial={visible}
                animate={!mounted || shown ? visible : hidden}
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
