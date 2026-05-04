import React from "react";

interface Props {
  label: string;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const Tooltip: React.FC<Props> = ({ label, children, className = "" }) => {
  return (
    <span className={`tt ${className}`}>
      {children}
      <span role="tooltip" className="tt-bubble">
        {label}
      </span>
    </span>
  );
};

export default Tooltip;
