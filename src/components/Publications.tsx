import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiExternalLink } from "react-icons/fi";
import portfolio from "../portfolio";
import SectionHeader from "./SectionHeader";
import BrandLogo from "./BrandLogo";

const Publications: React.FC = () => {
  const { publication, certifications } = portfolio;
  return (
    <section id="publications" className="section">
      <SectionHeader
        eyebrow="Research · Credentials"
        title="Published & Certified"
        description="Peer-reviewed deep-learning research and industry-recognised certifications."
      />

      <div className="grid lg:grid-cols-[1.25fr,1fr] gap-6 auto-rows-fr">
        <motion.a
          href={publication.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="group glass glass-hover ring-gradient p-7 sm:p-9 relative overflow-hidden h-full flex flex-col"
        >
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand-indigo/15 blur-3xl pointer-events-none" />
          <div className="flex items-center gap-3">
            <div className="grid place-items-center h-14 w-14 rounded-2xl bg-white border border-ink-100 shadow-card">
              <BrandLogo name="cureus" size={32} />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip-accent">{publication.role}</span>
              <span className="chip">{publication.year}</span>
            </div>
          </div>

          <h3 className="mt-5 font-display text-2xl sm:text-3xl font-extrabold text-ink-900 leading-tight">
            {publication.title}
          </h3>
          <p className="mt-3 text-ink-600">
            <span className="text-brand-indigo font-semibold">
              {publication.venue}
            </span>
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {publication.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-indigo group-hover:gap-3 transition-all">
            Read on Cureus <FiExternalLink />
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="glass ring-gradient p-6 h-full"
        >
          <h3 className="font-display text-lg font-extrabold text-ink-900 mb-5 flex items-center gap-2">
            <FiCheckCircle className="text-brand-emerald" /> Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.title}>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/65 backdrop-blur p-3.5 hover:bg-white hover:border-brand-indigo/30 hover:-translate-y-0.5 transition-all"
                >
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-white border border-ink-100 shrink-0">
                    <BrandLogo name={c.issuerIcon} size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-ink-900 text-sm leading-snug">
                      {c.title}
                    </div>
                    <div className="text-xs text-ink-500 mt-0.5 flex items-center gap-1.5">
                      <span>{c.issuer}</span>
                      <span className="text-ink-300">·</span>
                      <span>{c.year}</span>
                    </div>
                  </div>
                  <FiExternalLink className="text-ink-400 group-hover:text-brand-indigo transition-colors shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
