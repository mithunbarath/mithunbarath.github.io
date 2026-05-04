import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import portfolio from "../portfolio";
import SectionHeader from "./SectionHeader";
import BrandLogo from "./BrandLogo";

const CollegeIllustration: React.FC<{
  gradient: string;
  initials: string;
}> = ({ gradient, initials }) => (
  <div
    className={`relative h-44 sm:h-48 rounded-2xl overflow-hidden bg-gradient-to-br ${gradient}`}
  >
    {/* dotted pattern */}
    <div
      className="absolute inset-0 opacity-30 mix-blend-overlay"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)",
        backgroundSize: "22px 22px, 30px 30px",
      }}
    />
    {/* abstract campus silhouette */}
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 h-2/3 w-full opacity-90"
      aria-hidden
    >
      <defs>
        <linearGradient id="bgshade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.30)" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#bgshade)" />
      {/* buildings */}
      <g fill="rgba(255,255,255,0.85)">
        <rect x="40" y="80" width="60" height="120" rx="2" />
        <rect x="110" y="50" width="80" height="150" rx="2" />
        <polygon points="150,30 130,50 170,50" />
        <rect x="200" y="100" width="50" height="100" rx="2" />
        <rect x="260" y="70" width="90" height="130" rx="2" />
        <circle cx="305" cy="60" r="12" />
      </g>
      {/* windows */}
      <g fill="rgba(15,23,42,0.55)">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <rect
              key={`l${r}-${c}`}
              x={50 + c * 12}
              y={92 + r * 14}
              width="6"
              height="8"
              rx="1"
            />
          ))
        )}
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <rect
              key={`m${r}-${c}`}
              x={120 + c * 13}
              y={62 + r * 14}
              width="6"
              height="8"
              rx="1"
            />
          ))
        )}
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <rect
              key={`r${r}-${c}`}
              x={270 + c * 14}
              y={82 + r * 14}
              width="6"
              height="8"
              rx="1"
            />
          ))
        )}
      </g>
    </svg>

    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur text-[11px] font-semibold text-ink-800">
      <FaGraduationCap className="text-brand-indigo" />
      Campus
    </div>
    <div className="absolute bottom-3 right-3 grid place-items-center h-10 w-10 rounded-xl bg-white/90 backdrop-blur font-display font-extrabold text-ink-900 shadow-card">
      {initials}
    </div>
  </div>
);

const initialsOf = (name: string) =>
  name
    .replace(/college|engineering|technology|of|&|and|the/gi, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 3)
    .join("")
    .toUpperCase();

const Teaching: React.FC = () => {
  const { teaching } = portfolio;
  return (
    <section id="teaching" className="section">
      <SectionHeader
        eyebrow="Teaching · Community"
        title="Sharing what I build"
        description={teaching.summary}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-fr">
        {teaching.venues.map((v, i) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass glass-hover ring-gradient p-5 h-full flex flex-col"
          >
            <CollegeIllustration
              gradient={v.gradient}
              initials={initialsOf(v.name)}
            />
            <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-indigo">
              <FaChalkboardTeacher />
              Workshop · Seminar
            </div>
            <h3 className="mt-1.5 font-display text-lg font-extrabold text-ink-900 leading-snug">
              {v.name}
            </h3>
            <p className="mt-2 text-sm text-ink-600 leading-relaxed flex-grow">
              {v.topic}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-ink-500 pt-4 border-t border-ink-100/80">
              <FiMapPin /> {v.location}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 glass ring-gradient p-6 sm:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="badge-icon h-10 w-10">
              <FiUsers />
            </span>
            <div>
              <div className="font-display font-extrabold text-ink-900">
                Student communities
              </div>
              <div className="text-xs text-ink-500">
                Where I lead and contribute on campus
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {teaching.communities.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2.5 rounded-2xl border border-ink-100 bg-white/70 backdrop-blur px-4 py-2.5"
              >
                <BrandLogo name={c.icon} size={26} />
                <div>
                  <div className="text-sm font-semibold text-ink-900">
                    {c.name}
                  </div>
                  <div className="text-[11px] text-ink-500">{c.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Teaching;
