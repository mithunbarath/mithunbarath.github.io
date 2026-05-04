import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiStar } from "react-icons/fi";
import portfolio from "../portfolio";
import Tooltip from "./Tooltip";

const Footer: React.FC = () => {
  const { identity } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 border-t border-ink-100 backdrop-blur-xl bg-white/65">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              className="grid place-items-center h-10 w-10 rounded-xl text-white font-display font-extrabold shadow-lift"
              style={{
                background:
                  "linear-gradient(135deg, #0A2472, #0E6BA8 55%, #001C55)",
              }}
            >
              {identity.initials}
            </span>
            <div>
              <div className="font-display font-bold text-ink-900">
                {identity.name}
              </div>
              <div className="text-xs text-ink-500">{identity.title}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Tooltip label="GitHub">
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid place-items-center h-10 w-10 rounded-full border border-ink-100 bg-white/70 text-ink-700 hover:bg-white hover:text-ink-900 transition-all"
              >
                <FiGithub />
              </a>
            </Tooltip>
            <Tooltip label="LinkedIn">
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid place-items-center h-10 w-10 rounded-full border border-ink-100 bg-white/70 text-ink-700 hover:bg-white hover:text-ink-900 transition-all"
              >
                <FiLinkedin />
              </a>
            </Tooltip>
            <Tooltip label="Email">
              <a
                href={`mailto:${identity.email}`}
                aria-label="Email"
                className="grid place-items-center h-10 w-10 rounded-full border border-ink-100 bg-white/70 text-ink-700 hover:bg-white hover:text-ink-900 transition-all"
              >
                <FiMail />
              </a>
            </Tooltip>
            <Tooltip label="Star this repo">
              <a
                href={`${identity.github}/mithunbarath.github.io`}
                target="_blank"
                rel="noreferrer"
                aria-label="Star on GitHub"
                className="grid place-items-center h-10 w-10 rounded-full border border-ink-100 bg-white/70 text-brand-sun hover:bg-white transition-all"
              >
                <FiStar />
              </a>
            </Tooltip>
            <Tooltip label="Back to top">
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                aria-label="Back to top"
                className="grid place-items-center h-10 w-10 rounded-full text-white shadow-lift"
                style={{
                  background:
                    "linear-gradient(135deg, #0A2472, #0E6BA8 55%, #001C55)",
                }}
              >
                <FiArrowUp />
              </button>
            </Tooltip>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-100/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500">
          <div>
            © {year} {identity.name}. Crafted with React, Tailwind & Framer
            Motion.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/home" className="hover:text-ink-900 transition-colors">
              Home
            </Link>
            <Link
              to="/projects"
              className="hover:text-ink-900 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:text-ink-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
