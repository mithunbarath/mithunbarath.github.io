import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import portfolio from "../portfolio";

const Counter: React.FC<{ to: number; duration?: number }> = ({
  to,
  duration = 1600,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(to * ease);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const display = Number.isInteger(to)
    ? Math.round(val).toLocaleString()
    : val.toFixed(1);
  return <span ref={ref}>{display}</span>;
};

const Stats: React.FC = () => {
  return (
    <section id="stats" className="relative max-w-6xl mx-auto px-5 sm:px-6 -mt-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="glass ring-gradient p-6 sm:p-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-ink-100/80">
          {portfolio.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="text-center md:px-2 first:pt-0 pt-6 md:pt-0"
            >
              <div className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
                <span className="text-gradient">
                  <Counter to={s.value} />
                  {s.suffix}
                </span>
              </div>
              <div className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-500 font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
