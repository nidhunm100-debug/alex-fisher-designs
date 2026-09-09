import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const INTERVAL = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      INTERVAL,
    );
    return () => window.clearInterval(id);
  }, []);

  const slide = heroSlides[index]!;

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-archive md:min-h-screen">
      <AnimatePresence mode="sync">
        <motion.img
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2, ease: EASE }, scale: { duration: 7, ease: "linear" } }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-stone-950/10" />

      <div className="relative flex min-h-[92vh] md:min-h-screen flex-col justify-end edge pb-14 md:pb-20">
        <motion.h1
          className="display-xl text-archive hero-text-shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          SATYABHAMA
          <br />
          MAJHI
        </motion.h1>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
          <motion.p
            className="meta !text-archive/90 hero-text-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Contemporary Artist — Curator — Community Art Practitioner
          </motion.p>

          <div className="md:justify-self-end md:text-right max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <p className="font-display text-2xl text-archive hero-text-shadow">
                  {slide.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-archive/80 hero-text-shadow">
                  {slide.caption}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex gap-3 md:justify-end">
              {heroSlides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show slide ${i + 1}: ${s.title}`}
                  className="relative h-px w-12 overflow-hidden bg-archive/30"
                >
                  <span
                    className={`absolute inset-0 origin-left bg-archive transition-transform duration-500 ${
                      i === index ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
