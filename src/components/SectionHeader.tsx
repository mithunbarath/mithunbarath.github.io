import React from "react";
import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader: React.FC<Props> = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`mb-12 sm:mb-14 ${align === "center" ? "text-center" : ""}`}
    >
      <span className="section-eyebrow">
        <span className="h-1 w-6 rounded-full bg-grad-primary" />
        {eyebrow}
      </span>
      <h2 className="section-title">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p
          className={`mt-4 text-ink-500 max-w-2xl text-base sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
