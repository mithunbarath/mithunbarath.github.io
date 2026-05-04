import React from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiLayers,
  FiZap,
} from "react-icons/fi";
import portfolio from "../portfolio";
import SectionHeader from "./SectionHeader";

const icons = [FiZap, FiBookOpen, FiAward, FiCheckCircle, FiLayers];

const About: React.FC = () => {
  const { about, education, identity } = portfolio;
  return (
    <section id="about" className="section">
      <SectionHeader
        eyebrow="About"
        title="A builder, an analyst, and a researcher in one"
        description="I work across the AI lifecycle - from EDA in a Jupyter notebook, to multi-agent systems in production, to peer-reviewed research."
      />

      <div className="grid lg:grid-cols-[1.25fr,1fr] gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="glass ring-gradient p-7 sm:p-9"
        >
          <p className="text-ink-700 text-base sm:text-lg leading-relaxed">
            {about.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {identity.keywords.map((k) => (
              <span key={k} className="chip">
                {k}
              </span>
            ))}
          </div>

          <div className="mt-7 grid sm:grid-cols-2 gap-3">
            {about.highlights.map((h, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white/65 backdrop-blur p-3.5"
                >
                  <span className="badge-icon h-9 w-9 text-base">
                    <Icon />
                  </span>
                  <div>
                    <div className="font-semibold text-ink-900 text-sm">
                      {h.label}
                    </div>
                    <div className="text-xs text-ink-500 mt-0.5">
                      {h.detail}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="glass ring-gradient p-7 sm:p-8 flex flex-col"
        >
          <span className="section-eyebrow !mb-2">
            <span className="h-1 w-5 rounded-full bg-grad-primary" />
            Education
          </span>
          <h3 className="font-display text-2xl font-extrabold text-ink-900 leading-tight">
            {education.degree}
          </h3>
          <p className="mt-1 text-ink-500">{education.school}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="chip">{education.duration}</span>
            <span className="chip-accent">CGPA {education.cgpa}</span>
          </div>

          <ul className="mt-6 space-y-3">
            {education.honors.map((h) => (
              <li key={h} className="flex items-start gap-3 text-ink-700">
                <FiAward className="mt-0.5 text-brand-indigo shrink-0" />
                <span className="text-sm">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6 border-t border-ink-100/80">
            <span className="section-eyebrow !mb-2">
              <span className="h-1 w-5 rounded-full bg-grad-primary" />
              Languages I work in
            </span>
            <div className="mt-1 flex flex-wrap gap-2">
              {["English", "Tamil",].map((l) => (
                <span key={l} className="chip">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
