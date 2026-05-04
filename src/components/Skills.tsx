import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiLayers,
  FiCloud,
  FiDatabase,
  FiBarChart2,
  FiTool,
} from "react-icons/fi";
import portfolio from "../portfolio";
import SectionHeader from "./SectionHeader";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: FiCode,
  brain: FiCpu,
  layers: FiLayers,
  cloud: FiCloud,
  database: FiDatabase,
  chart: FiBarChart2,
  tool: FiTool,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <SectionHeader
        eyebrow="Toolbox"
        title="Skills & Stack"
        description="Production-tested across the AI / Data lifecycle - from raw data to deployed agents."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
        {portfolio.skills.map((group, idx) => {
          const Icon = iconMap[group.icon] || FiTool;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="glass glass-hover ring-gradient p-6 h-full"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="badge-icon h-11 w-11 text-base">
                  <Icon className="text-lg" />
                </span>
                <h3 className="font-display text-lg font-extrabold text-ink-900">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full text-xs font-medium border border-ink-100 bg-white/70 text-ink-700 hover:bg-white hover:border-brand-indigo/35 hover:text-ink-900 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
