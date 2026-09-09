import { useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`group overflow-hidden ${className ?? ""}`}
      style={
        {
          "--marquee-duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={`flex w-max ${shouldReduceMotion ? "" : "animate-marquee"} ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
