import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import portfolio from "../portfolio";
import SectionHeader from "./SectionHeader";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <SectionHeader
        eyebrow="Career path"
        title="Experience"
        description="Frontend → ML research → AI engineering. I've grown across the stack and the science."
      />

      <div className="relative">
        {/* timeline rail */}
        <div
          aria-hidden
          className="absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-indigo/40 to-transparent lg:-translate-x-1/2"
        />

        <ol className="space-y-10 lg:space-y-14">
          {portfolio.experience.map((job, i) => {
            const right = i % 2 === 1;
            return (
              <motion.li
                key={job.company}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="relative pl-12 sm:pl-16 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-10"
              >
                {/* node dot */}
                <span
                  aria-hidden
                  className="absolute left-2 sm:left-4 lg:left-1/2 top-6 h-4 w-4 rounded-full lg:-translate-x-1/2 ring-4 ring-canvas"
                  style={{
                    background:
                      "linear-gradient(135deg, #3a4ed1, #1e6091, #10b981)",
                    boxShadow: "0 0 0 3px rgba(58,78,209,0.12)",
                  }}
                />

                <div
                  className={`${
                    right ? "lg:col-start-2" : ""
                  } lg:row-start-1`}
                >
                  <div className="glass glass-hover ring-gradient p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-brand-indigo text-[11px] font-semibold tracking-[0.18em] uppercase">
                          <FiBriefcase /> {job.position}
                        </div>
                        <h3 className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-ink-900">
                          {job.company}
                        </h3>
                      </div>
                      <span className="chip whitespace-nowrap">
                        <FiCalendar /> {job.duration}
                      </span>
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-500">
                      <span className="flex items-center gap-1.5">
                        <FiMapPin /> {job.location}
                      </span>
                      {"tenure" in job && job.tenure ? (
                        <span className="text-ink-400">· {job.tenure}</span>
                      ) : null}
                    </div>

                    {"previousPosition" in job && job.previousPosition ? (
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand-indigo/20 bg-brand-indigo/5 px-3 py-1 text-[11px] font-medium text-brand-indigo">
                        ✦ {job.previousPosition}
                      </div>
                    ) : null}

                    {job.summary ? (
                      <p className="mt-4 text-ink-700 leading-relaxed">
                        {job.summary}
                      </p>
                    ) : null}

                    <ul className="mt-4 space-y-2.5">
                      {job.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-ink-700 text-[15px] leading-relaxed"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                            style={{
                              background:
                                "linear-gradient(135deg, #3a4ed1, #10b981)",
                            }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {job.stack && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.stack.map((t) => (
                          <span key={t} className="chip">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
