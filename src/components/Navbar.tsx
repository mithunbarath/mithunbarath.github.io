import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiStar,
} from "react-icons/fi";
import portfolio from "../portfolio";
import Tooltip from "./Tooltip";

const links = [
  { to: "/home", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/teaching", label: "Social" },
  { to: "/awards", label: "Awards" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/85 border-b border-ink-100 shadow-[0_1px_0_rgba(0,28,85,0.05)]"
          : "backdrop-blur-md bg-white/55 border-b border-white/60"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-4">
        <NavLink to="/home" className="flex items-center gap-2.5 group">
          <span
            className="relative grid place-items-center h-10 w-10 rounded-xl text-white font-display font-extrabold shadow-lift"
            style={{
              background:
                "linear-gradient(135deg, #0A2472, #0E6BA8 55%, #001C55)",
            }}
          >
            {portfolio.identity.initials}
          </span>
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-ink-900 tracking-tight">
              Mithun Barath
            </div>
            <div className="text-[11px] text-ink-500 tracking-wide">
              AI · Data · Research
            </div>
          </div>
        </NavLink>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-ink-900"
                      : "text-ink-500 hover:text-ink-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white border border-ink-100 shadow-card"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <Tooltip label="LinkedIn">
            <a
              href={portfolio.identity.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center h-9 w-9 rounded-full border border-ink-100 bg-white/70 text-ink-700 hover:text-ink-900 hover:bg-white transition-all"
            >
              <FiLinkedin />
            </a>
          </Tooltip>
          <Tooltip label="GitHub">
            <a
              href={portfolio.identity.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid place-items-center h-9 w-9 rounded-full border border-ink-100 bg-white/70 text-ink-700 hover:text-ink-900 hover:bg-white transition-all"
            >
              <FiGithub />
            </a>
          </Tooltip>
          <Tooltip label="Email me">
            <a
              href={`mailto:${portfolio.identity.email}`}
              aria-label="Email"
              className="grid place-items-center h-9 w-9 rounded-full border border-ink-100 bg-white/70 text-ink-700 hover:text-ink-900 hover:bg-white transition-all"
            >
              <FiMail />
            </a>
          </Tooltip>

          <a
            href={`${portfolio.identity.github}/mithunbarath.github.io`}
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold pl-3 pr-3.5 h-9 rounded-full text-ink-900 border border-ink-200 bg-white/85 hover:bg-white hover:border-brand-sea/40 transition-all"
          >
            <FiStar className="text-brand-sun" /> Star
            <span className="text-ink-400 hidden xl:inline">
              on GitHub
            </span>
            <FiArrowUpRight className="opacity-60" />
          </a>

          <a
            href={`mailto:${portfolio.identity.email}`}
            className="hidden xl:inline-flex items-center gap-1.5 text-sm font-semibold px-4 h-9 rounded-full text-white shadow-lift"
            style={{
              background:
                "linear-gradient(135deg, #0A2472, #0E6BA8 55%, #001C55)",
            }}
          >
            Hire me <FiArrowUpRight />
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden grid place-items-center h-10 w-10 rounded-xl border border-ink-100 bg-white/80 text-ink-800"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-ink-100 bg-white/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col p-3">
              {links.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium ${
                        isActive
                          ? "text-ink-900 bg-ink-50"
                          : "text-ink-500 hover:text-ink-900 hover:bg-ink-50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <a
                href={`${portfolio.identity.github}/mithunbarath.github.io`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-full text-ink-900 border border-ink-200 bg-white"
              >
                <FiStar className="text-brand-sun" /> Star me on GitHub
              </a>
              <a
                href={`mailto:${portfolio.identity.email}`}
                className="mt-2 btn-primary w-full"
              >
                Hire me <FiArrowUpRight />
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
