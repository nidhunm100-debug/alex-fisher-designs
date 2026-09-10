import Lenis from "lenis";
import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Site-wide inertial smooth scrolling (desktop pointers only). */
export function SmoothScroll() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Touch devices already scroll natively and smoothly; Lenis adds jank there.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
