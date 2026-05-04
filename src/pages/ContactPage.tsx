import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import portfolio from "../portfolio";
import PageShell from "./PageShell";
import Contact from "../components/Contact";
import Tooltip from "../components/Tooltip";

const ContactPage: React.FC = () => {
  const { identity, contact } = portfolio;
  return (
    <PageShell>
      <section className="section">
        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 items-center">
          {/* Photo placeholder card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto"
          >
            <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]">
              <motion.div
                className="absolute inset-0 rounded-full opacity-70 blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, #0A2472, #0E6BA8, #A6E1FA, #001C55, #0A2472)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-3 rounded-full bg-white border border-white/90 grid place-items-center shadow-glass overflow-hidden">
                {/* Replace this avatar block with <img src='/me.jpg' /> when you drop a photo into /public */}
                <div className="text-center px-6">
                  <div className="font-display text-7xl sm:text-8xl font-black tracking-tight text-gradient">
                    MR
                  </div>
                  <div className="mt-2 text-[11px] sm:text-xs tracking-[0.32em] text-ink-500 uppercase font-semibold">
                    Mithun Barath
                  </div>
                </div>
              </div>
              {/* social ring */}
              <div className="absolute inset-0 rounded-full pointer-events-none">
                {[
                  { icon: <FiGithub />, label: "GitHub", url: identity.github, angle: 30 },
                  { icon: <FiLinkedin />, label: "LinkedIn", url: identity.linkedin, angle: 150 },
                  { icon: <FiMail />, label: "Email", url: `mailto:${identity.email}`, angle: 270 },
                ].map((s) => (
                  <span
                    key={s.label}
                    className="absolute top-1/2 left-1/2 pointer-events-auto"
                    style={{
                      transform: `translate(-50%,-50%) rotate(${s.angle}deg) translateY(-150px) rotate(${-s.angle}deg)`,
                    }}
                  >
                    <Tooltip label={s.label}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="grid place-items-center h-11 w-11 rounded-full bg-white border border-ink-100 shadow-card text-ink-700 hover:text-ink-900 hover:-translate-y-0.5 transition-all"
                      >
                        {s.icon}
                      </a>
                    </Tooltip>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <span className="section-eyebrow">
              <span className="h-1 w-6 rounded-full bg-grad-primary" />
              Get in touch
            </span>
            <h1 className="section-title">
              <span className="text-gradient">Let's build something.</span>
            </h1>
            <p className="mt-4 text-ink-600 text-lg leading-relaxed max-w-xl">
              Open to <b>AI Engineer</b>, <b>Data Scientist</b>, and{" "}
              <b>Data Analyst</b> roles, plus collaborations on RAG and agentic
              AI projects. I usually reply within 24 hours.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/75 backdrop-blur p-4 hover:bg-white hover:border-brand-sea/30 transition-all"
              >
                <span className="badge-icon h-10 w-10">
                  <FiMail />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] text-ink-500 uppercase tracking-wider font-medium">
                    Email
                  </div>
                  <div className="text-ink-900 font-semibold text-sm truncate">
                    {contact.email}
                  </div>
                </div>
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/75 backdrop-blur p-4 hover:bg-white hover:border-brand-sea/30 transition-all"
              >
                <span className="badge-icon h-10 w-10">
                  <FiPhone />
                </span>
                <div>
                  <div className="text-[11px] text-ink-500 uppercase tracking-wider font-medium">
                    Phone
                  </div>
                  <div className="text-ink-900 font-semibold text-sm">
                    {contact.phone}
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/75 backdrop-blur p-4 sm:col-span-2">
                <span className="badge-icon h-10 w-10">
                  <FiMapPin />
                </span>
                <div>
                  <div className="text-[11px] text-ink-500 uppercase tracking-wider font-medium">
                    Based in
                  </div>
                  <div className="text-ink-900 font-semibold text-sm">
                    {contact.location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </PageShell>
  );
};

export default ContactPage;
