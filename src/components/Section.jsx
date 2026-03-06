import React from "react";
import { motion } from "framer-motion";
export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="mb-6"
      >
        {eyebrow && (
          <div className="text-xs tracking-[0.2em] uppercase text-zinc-400">
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="mt-2 text-2xl sm:text-3xl font-display font-semibold">
            {title}
          </h2>
        )}
      </motion.div>
      {children}
    </section>
  );
}