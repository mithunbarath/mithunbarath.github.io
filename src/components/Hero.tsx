import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";
import portfolio from "../portfolio";
import Tooltip from "./Tooltip";

const Typewriter: React.FC<{ words: readonly string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const tick = () => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    };
    const timer = setTimeout(tick, deleting ? 38 : 75);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className="text-gradient inline-block min-h-[1.15em] whitespace-pre">
      {text}
      <span className="inline-block w-[3px] h-[0.85em] bg-brand-emerald ml-1 align-middle animate-pulse" />
    </span>
  );
};

const orbits = [
  { label: "RAG", angle: 0 },
  { label: "LLM", angle: 60 },
  { label: "AWS", angle: 120 },
  { label: "ML", angle: 180 },
  { label: "NLP", angle: 240 },
  { label: "BI", angle: 300 },
];

const Hero: React.FC = () => {
  const { identity, about } = portfolio;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center px-5 sm:px-6 pt-24 pb-12"
    >
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.35fr,1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-ink-700 shadow-card"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to AI · Data Science · Data Analyst roles
          </motion.div>

          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink-900 leading-[1.04]">
            Hi, I'm{" "}
            <span className="text-gradient">{identity.firstName}</span>.
            <br />
            <span className="text-ink-700">I build </span>
            <Typewriter words={identity.roles} />
            <br />
            <span className="text-ink-700">grade things.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-2xl leading-relaxed">
            {identity.tagline}
          </p>
          <p className="mt-3 text-ink-500 max-w-2xl leading-relaxed">
            {about.miniBio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn-primary">
              See my work <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn-ghost">
              <FiMail /> Say hello
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500">
            <Tooltip label="GitHub">
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink-900 transition-colors flex items-center gap-1.5"
              >
                <FiGithub /> GitHub <FiArrowUpRight className="opacity-60" />
              </a>
            </Tooltip>
            <Tooltip label="LinkedIn">
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink-900 transition-colors flex items-center gap-1.5"
              >
                <FiLinkedin /> LinkedIn <FiArrowUpRight className="opacity-60" />
              </a>
            </Tooltip>
            <span className="flex items-center gap-1.5 text-ink-500">
              <FiMapPin /> {identity.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto"
        >
          <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px]">
            {/* gradient halo */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-60 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 0deg, #3a4ed1, #1e6091, #10b981, #f59e0b, #3a4ed1)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />

            {/* avatar core */}
            <div className="absolute inset-5 rounded-full bg-white/85 backdrop-blur-2xl border border-white/90 grid place-items-center shadow-glass overflow-hidden">
              <div className="text-center px-6">
                <div className="font-display text-7xl sm:text-8xl font-black tracking-tight text-gradient">
                  MR
                </div>
                <div className="mt-1 text-[10px] sm:text-xs tracking-[0.32em] text-ink-500 uppercase font-semibold">
                  AI · Data · Research
                </div>
              </div>
            </div>

            {/* dotted orbit ring */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none animate-[gradient-x_30s_linear_infinite]"
              viewBox="0 0 400 400"
              fill="none"
            >
              <circle
                cx="200"
                cy="200"
                r="190"
                stroke="#0f172a"
                strokeOpacity="0.08"
                strokeDasharray="2 8"
              />
            </svg>

            {/* orbiting badges */}
            {orbits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.06 }}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(-50%,-50%) rotate(${b.angle}deg) translateY(-180px) rotate(${-b.angle}deg)`,
                }}
              >
                <div className="px-3 py-1.5 rounded-full text-xs font-semibold border border-ink-100 bg-white/90 backdrop-blur shadow-card text-ink-800">
                  {b.label}
                </div>
              </motion.div>
            ))}

            {/* now-status card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-2 sm:-left-6 max-w-[230px] rounded-2xl glass-tight px-3.5 py-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-ink-500">
                  Now
                </span>
              </div>
              <div className="text-xs text-ink-700 mt-1 leading-snug">
                Shipping a multi-agent RAG system at <b>XDOSO Tech Labs</b>.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <Tooltip label="Read more about me">
          <Link
            to="/about"
            aria-label="About"
            className="grid place-items-center h-10 w-10 rounded-full border border-ink-100 bg-white/70 text-ink-600 hover:text-ink-900 backdrop-blur animate-float"
          >
            <FiArrowDown />
          </Link>
        </Tooltip>
      </motion.div>
    </section>
  );
};

export default Hero;
