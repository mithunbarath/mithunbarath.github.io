import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiCpu,
} from "react-icons/fi";
import portfolio from "../portfolio";
import SectionHeader from "./SectionHeader";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <SectionHeader
        eyebrow="Selected work"
        title="Projects"
        description="A mix of production AI systems, NLP at scale, and peer-reviewed research."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 auto-rows-fr">
        {portfolio.projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative glass glass-hover ring-gradient p-6 flex flex-col h-full"
          >
            {/* preview band */}
            <div
              className={`relative h-36 sm:h-40 rounded-2xl mb-5 overflow-hidden bg-gradient-to-br ${p.accent}`}
            >
              <div
                className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px, 30px 30px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/85 backdrop-blur text-ink-800">
                  {p.tag}
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-white/95">
                  {p.period}
                </span>
                <span className="grid place-items-center h-9 w-9 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/40 transition-transform group-hover:rotate-12">
                  <FiCpu />
                </span>
              </div>
            </div>

            <h3 className="font-display text-lg sm:text-xl font-extrabold text-ink-900 group-hover:text-brand-indigo transition-colors">
              {p.name}
            </h3>
            <p className="mt-3 text-[15px] text-ink-600 leading-relaxed flex-grow">
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-ink-100/80 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-ink-700 font-medium">
                <FiGithub /> View on GitHub
              </span>
              <span className="grid place-items-center h-8 w-8 rounded-full bg-white border border-ink-100 text-ink-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white group-hover:border-transparent group-hover:bg-brand-indigo">
                <FiArrowUpRight />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
