import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageShell: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`page-shell ${className}`}
    >
      {children}
    </motion.main>
  );
};

export default PageShell;
