import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiCheck,
} from "react-icons/fi";
import portfolio from "../portfolio";
import SectionHeader from "./SectionHeader";

const Contact: React.FC = () => {
  const { contact, identity } = portfolio;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Mithun,\n\n${message}\n\n- ${name}\n${email}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <section id="contact" className="section">
      <SectionHeader
        eyebrow="Let's connect"
        title="Build something together"
        description="Open to AI, Data Science, and Data Analyst roles - collaborations and research conversations welcome."
      />

      <div className="grid lg:grid-cols-[1fr,1.2fr] gap-6 auto-rows-fr">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="glass ring-gradient p-7 sm:p-8 h-full flex flex-col"
        >
          <h3 className="font-display text-xl font-extrabold text-ink-900">
            Reach me directly
          </h3>
          <p className="mt-2 text-ink-500 text-sm">
            I usually reply within 24 hours.
          </p>

          <div className="mt-6 space-y-3">
            <button
              onClick={copyEmail}
              className="w-full text-left flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/65 backdrop-blur p-4 hover:bg-white hover:border-brand-indigo/30 transition-all group"
            >
              <span className="badge-icon h-10 w-10">
                <FiMail />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] text-ink-500 uppercase tracking-wider font-medium">
                  Email
                </div>
                <div className="text-ink-900 font-semibold truncate">
                  {contact.email}
                </div>
              </div>
              <span className="text-xs text-ink-400 group-hover:text-brand-indigo transition-colors">
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-brand-emerald">
                    <FiCheck /> Copied
                  </span>
                ) : (
                  "Copy"
                )}
              </span>
            </button>

            <a
              href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/65 backdrop-blur p-4 hover:bg-white hover:border-brand-indigo/30 transition-all"
            >
              <span className="badge-icon h-10 w-10">
                <FiPhone />
              </span>
              <div>
                <div className="text-[11px] text-ink-500 uppercase tracking-wider font-medium">
                  Phone
                </div>
                <div className="text-ink-900 font-semibold">{contact.phone}</div>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/65 backdrop-blur p-4">
              <span className="badge-icon h-10 w-10">
                <FiMapPin />
              </span>
              <div>
                <div className="text-[11px] text-ink-500 uppercase tracking-wider font-medium">
                  Based in
                </div>
                <div className="text-ink-900 font-semibold">
                  {contact.location}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-ink-100/80 flex items-center gap-3">
            <a
              href={identity.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid place-items-center h-11 w-11 rounded-full border border-ink-100 bg-white/70 text-ink-700 hover:text-ink-900 hover:bg-white transition-all"
            >
              <FiGithub />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center h-11 w-11 rounded-full border border-ink-100 bg-white/70 text-ink-700 hover:text-ink-900 hover:bg-white transition-all"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="grid place-items-center h-11 w-11 rounded-full border border-ink-100 bg-white/70 text-ink-700 hover:text-ink-900 hover:bg-white transition-all"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="glass ring-gradient p-7 sm:p-8 h-full flex flex-col"
        >
          <h3 className="font-display text-xl font-extrabold text-ink-900">
            Send a message
          </h3>
          <p className="mt-2 text-ink-500 text-sm">
            Drop a quick note - opens your mail client, no signup required.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-[11px] text-ink-500 uppercase tracking-wider font-medium">
                Name
              </span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink-100 bg-white/80 px-4 py-3 text-ink-900 placeholder-ink-300 focus:outline-none focus:border-brand-indigo/55 focus:bg-white transition-all"
                placeholder="Your full name"
              />
            </label>
            <label className="block">
              <span className="text-[11px] text-ink-500 uppercase tracking-wider font-medium">
                Email
              </span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink-100 bg-white/80 px-4 py-3 text-ink-900 placeholder-ink-300 focus:outline-none focus:border-brand-emerald/55 focus:bg-white transition-all"
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label className="block mt-4 flex-1">
            <span className="text-[11px] text-ink-500 uppercase tracking-wider font-medium">
              Message
            </span>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-ink-100 bg-white/80 px-4 py-3 text-ink-900 placeholder-ink-300 focus:outline-none focus:border-brand-indigo/55 focus:bg-white transition-all resize-none"
              placeholder="Tell me about the role, project or idea…"
            />
          </label>

          <button type="submit" className="btn-primary w-full mt-6">
            Send message <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
