import React from "react";
import {
  SiGoogle,
  SiGooglecloud,
  SiLeetcode,
  SiCoursera,
} from "react-icons/si";
import { FaSeedling, FaTrophy, FaUsers, FaAward } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

interface Props {
  name: string;
  className?: string;
  size?: number;
}

// Stylised glyph for SIH (Smart India Hackathon) - saffron/green tricolour ring
const SIHGlyph: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-label="SIH">
    <defs>
      <linearGradient id="sih-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FF7A00" />
        <stop offset="55%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#0E8345" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" fill="url(#sih-g)" opacity=".18" />
    <circle cx="32" cy="32" r="22" fill="none" stroke="url(#sih-g)" strokeWidth="3" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Inter, sans-serif"
      fontWeight={800}
      fontSize="14"
      fill="#0b1220"
    >
      SIH
    </text>
  </svg>
);

// Cureus mark - book + journal vibe
const CureusGlyph: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Cureus">
    <defs>
      <linearGradient id="cur-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <rect x="6" y="10" width="52" height="44" rx="8" fill="url(#cur-g)" opacity=".15" />
    <path d="M14 18 H30 V46 H14 Z" fill="url(#cur-g)" opacity=".85" />
    <path d="M34 18 H50 V46 H34 Z" fill="url(#cur-g)" opacity=".55" />
    <path d="M30 18 V46" stroke="#fff" strokeWidth="1.5" />
    <path d="M34 18 V46" stroke="#fff" strokeWidth="1.5" />
    <text
      x="50%"
      y="60%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Inter, sans-serif"
      fontWeight={800}
      fontSize="11"
      fill="#fff"
    >
      C
    </text>
  </svg>
);

// YUKTI - sprout/seedling for AgriCommerce
const YuktiGlyph: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-label="YUKTI">
    <defs>
      <linearGradient id="yu-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" fill="url(#yu-g)" opacity=".15" />
    <path
      d="M32 48 V30 C32 22 24 18 18 18 C20 28 26 32 32 30 M32 30 C32 22 40 18 46 18 C44 28 38 32 32 30"
      fill="url(#yu-g)"
    />
    <text
      x="50%"
      y="84%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Inter, sans-serif"
      fontWeight={800}
      fontSize="9"
      fill="#0b1220"
    >
      YUKTI
    </text>
  </svg>
);

// Rotary / Rotaract - gear ring
const RotaryGlyph: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Rotaract">
    <defs>
      <linearGradient id="ro-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0ea5a4" />
        <stop offset="100%" stopColor="#3a4ed1" />
      </linearGradient>
    </defs>
    {Array.from({ length: 12 }).map((_, i) => (
      <rect
        key={i}
        x="30"
        y="2"
        width="4"
        height="8"
        rx="1"
        fill="url(#ro-g)"
        transform={`rotate(${(i * 360) / 12} 32 32)`}
      />
    ))}
    <circle cx="32" cy="32" r="14" fill="url(#ro-g)" />
    <text
      x="50%"
      y="56%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Inter, sans-serif"
      fontWeight={800}
      fontSize="10"
      fill="#fff"
    >
      R
    </text>
  </svg>
);

// IBM - three-bar wordmark
const IbmGlyph: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-label="IBM">
    <defs>
      <linearGradient id="ibm-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1f70c1" />
        <stop offset="100%" stopColor="#0530ad" />
      </linearGradient>
    </defs>
    <rect x="2" y="14" width="60" height="36" rx="4" fill="url(#ibm-g)" opacity="0.10" />
    <g fill="url(#ibm-g)">
      <rect x="6" y="22" width="52" height="3" />
      <rect x="6" y="28" width="52" height="3" />
      <rect x="6" y="34" width="52" height="3" />
      <rect x="6" y="40" width="52" height="3" />
    </g>
    <text
      x="50%"
      y="58%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Inter, sans-serif"
      fontWeight={900}
      fontSize="14"
      letterSpacing="1"
      fill="#ffffff"
      stroke="url(#ibm-g)"
      strokeWidth="0.5"
    >
      IBM
    </text>
  </svg>
);

// GDSC - Google four-colour glyph
const GdscGlyph: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-label="GDSC">
    <circle cx="32" cy="20" r="6" fill="#4285F4" />
    <circle cx="20" cy="36" r="6" fill="#EA4335" />
    <circle cx="44" cy="36" r="6" fill="#FBBC04" />
    <circle cx="32" cy="48" r="6" fill="#34A853" />
  </svg>
);

const map: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  google: ({ size = 22 }) => <SiGoogle size={size} color="#4285F4" />,
  googlecloud: ({ size = 22 }) => <SiGooglecloud size={size} color="#1a73e8" />,
  ibm: IbmGlyph,
  coursera: ({ size = 22 }) => <SiCoursera size={size} color="#0056D2" />,
  leetcode: ({ size = 22 }) => <SiLeetcode size={size} color="#FFA116" />,
  trophy: ({ size = 22 }) => <FaTrophy size={size} color="#f59e0b" />,
  medal: ({ size = 22 }) => <FaAward size={size} color="#3a4ed1" />,
  users: ({ size = 22 }) => <FaUsers size={size} color="#0ea5a4" />,
  agri: ({ size = 22 }) => <FaSeedling size={size} color="#10b981" />,
  cureus: CureusGlyph,
  sih: SIHGlyph,
  yukti: YuktiGlyph,
  gdsc: GdscGlyph,
  rotary: RotaryGlyph,
  book: ({ size = 22 }) => <FiBookOpen size={size} color="#3a4ed1" />,
};

const BrandLogo: React.FC<Props> = ({ name, size = 22, className }) => {
  const Icon = map[name];
  if (!Icon)
    return (
      <span
        className={className}
        style={{ width: size, height: size, display: "inline-block" }}
      />
    );
  return (
    <span className={className} style={{ display: "inline-flex" }}>
      <Icon size={size} />
    </span>
  );
};

export default BrandLogo;
