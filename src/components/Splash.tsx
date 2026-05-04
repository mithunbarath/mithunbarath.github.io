import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onDone?: () => void;
}

const Splash: React.FC<Props> = ({ onDone }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(900px 600px at 30% 30%, rgba(58,78,209,0.20), transparent 60%), radial-gradient(700px 500px at 70% 70%, rgba(16,185,129,0.18), transparent 60%), linear-gradient(180deg, #faf9f7 0%, #f1f3f7 100%)",
          }}
        >
          {/* drifting blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-brand-indigo/25 blur-3xl animate-blob-1" />
            <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-brand-emerald/25 blur-3xl animate-blob-2" />
          </div>

          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex flex-col items-center"
          >
            <div className="relative">
              {/* gradient ring */}
              <motion.span
                className="absolute -inset-6 rounded-[36%] blur-2xl opacity-70"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3a4ed1, #1e6091, #10b981, #f59e0b, #3a4ed1)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-[30%] grid place-items-center bg-white/85 backdrop-blur-2xl border border-white/90 shadow-glass">
                <div className="flex items-baseline">
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="font-display font-extrabold text-[68px] sm:text-[84px] leading-none text-gradient"
                  >
                    M
                  </motion.span>
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    className="font-display font-extrabold text-[68px] sm:text-[84px] leading-none text-gradient"
                  >
                    B
                  </motion.span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <div className="text-sm tracking-[0.4em] uppercase text-ink-500 font-semibold">
                Mithun Barath
              </div>
              <div className="mt-1 text-xs tracking-[0.32em] uppercase text-brand-indigo font-medium">
                AI · Data · Research
              </div>
            </motion.div>

            {/* loading bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 160, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.2, ease: "easeInOut" }}
              className="mt-6 h-1 rounded-full overflow-hidden bg-ink-100"
            >
              <motion.div
                className="h-full"
                style={{
                  background:
                    "linear-gradient(90deg, #3a4ed1, #1e6091, #10b981)",
                }}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.9, duration: 1.2 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
