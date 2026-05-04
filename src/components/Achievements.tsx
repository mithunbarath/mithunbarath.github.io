import React from "react";
import { motion } from "framer-motion";
import portfolio from "../portfolio";
import SectionHeader from "./SectionHeader";
import BrandLogo from "./BrandLogo";

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section">
      <SectionHeader
        eyebrow="Recognition"
        title="Awards & milestones"
        description="National hackathons, academic honors, and community leadership."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
        {portfolio.achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass glass-hover ring-gradient p-5 h-full flex items-start gap-4"
          >
            <div className="grid place-items-center h-14 w-14 rounded-2xl bg-white border border-ink-100 shadow-card shrink-0">
              <BrandLogo name={a.icon} size={30} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-indigo">
                {a.year}
              </div>
              <h3 className="mt-0.5 font-display text-base sm:text-lg font-extrabold text-ink-900 leading-snug">
                {a.title}
              </h3>
              <p className="mt-1 text-sm text-ink-500 leading-relaxed">
                {a.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
