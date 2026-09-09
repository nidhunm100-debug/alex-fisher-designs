import { motion } from "motion/react";
import { useRef, type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // seconds for one loop
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 32,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`group overflow-hidden ${className ?? ""}`}
      ref={trackRef}
    >
      <motion.div
        className="flex w-max will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{
          // Pause animation when user prefers reduced motion
        }}
      >
        <div
          className={`flex shrink-0 ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        >
          {children}
        </div>
        <div
          className={`flex shrink-0 ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
          aria-hidden="true"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
