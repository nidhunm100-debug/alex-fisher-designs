import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

export type LightboxItem = {
  title: string;
  caption?: string;
  category?: string;
  image: string;
};

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index! + 1) % items.length);
      if (e.key === "ArrowLeft")
        onIndexChange((index! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, items.length, onClose, onIndexChange]);

  const item = open ? items[index!] : undefined;

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[70] bg-foreground/95 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <div className="flex items-center justify-between edge py-5">
            <span className="meta text-background/70">
              {String(index! + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="meta text-background"
            >
              Close
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center edge pb-4">
            <motion.img
              key={item.image}
              src={item.image}
              alt={item.title}
              className="max-h-[70vh] max-w-full object-contain"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="edge pb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-lg">
              {item.category && <p className="meta">{item.category}</p>}
              <p className="font-display text-2xl text-background mt-1">
                {item.title}
              </p>
              {item.caption && (
                <p className="mt-2 text-sm text-background/70">{item.caption}</p>
              )}
            </div>
            <div className="flex gap-6">
              <button
                type="button"
                className="meta text-background"
                onClick={() =>
                  onIndexChange((index! - 1 + items.length) % items.length)
                }
              >
                ← Prev
              </button>
              <button
                type="button"
                className="meta text-background"
                onClick={() => onIndexChange((index! + 1) % items.length)}
              >
                Next →
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
