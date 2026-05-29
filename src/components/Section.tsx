import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <section id={id} className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`mb-14 md:mb-20 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-base md:text-lg leading-relaxed text-white/65">{description}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
