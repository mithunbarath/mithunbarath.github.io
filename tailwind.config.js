/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#001C55",
          800: "#0A2472",
          700: "#0E6BA8",
          600: "#1E6091",
          500: "#3F6F9F",
          400: "#7F8DAA",
          300: "#A6BAD0",
          200: "#CFE0EE",
          100: "#E2EEF8",
          50: "#EDF9FE",
        },
        canvas: {
          DEFAULT: "#EDF9FE",
          warm: "#F5FBFE",
          frost: "rgba(255,255,255,0.65)",
        },
        brand: {
          deep: "#001C55",
          jacket: "#0A2472",
          sea: "#0E6BA8",
          sky: "#A6E1FA",
          ice: "#D8F1FB",
          mint: "#7DD3FC",
          sun: "#FBBF24",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
        mono: ["'Fira Code'", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grad-primary":
          "linear-gradient(135deg, #0A2472 0%, #0E6BA8 55%, #A6E1FA 100%)",
        "grad-cool":
          "linear-gradient(135deg, #0E6BA8 0%, #A6E1FA 100%)",
        "grad-deep":
          "linear-gradient(135deg, #001C55 0%, #0A2472 50%, #0E6BA8 100%)",
        "grad-soft":
          "linear-gradient(135deg, rgba(14,107,168,0.12) 0%, rgba(166,225,250,0.18) 100%)",
        canvas:
          "radial-gradient(1100px 600px at 8% -8%, rgba(14,107,168,0.18), transparent 60%), radial-gradient(900px 540px at 100% 12%, rgba(166,225,250,0.30), transparent 60%), radial-gradient(800px 600px at 50% 105%, rgba(10,36,114,0.10), transparent 60%), linear-gradient(180deg, #EDF9FE 0%, #DDEEF8 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,28,85,0.05), 0 8px 24px -8px rgba(0,28,85,0.10)",
        glass: "0 1px 0 rgba(255,255,255,0.7) inset, 0 1px 2px rgba(0,28,85,0.05), 0 12px 40px -12px rgba(14,107,168,0.20)",
        lift: "0 1px 0 rgba(255,255,255,0.7) inset, 0 6px 14px -6px rgba(0,28,85,0.12), 0 22px 52px -16px rgba(14,107,168,0.32)",
        ring: "0 0 0 1px rgba(0,28,85,0.06)",
      },
      animation: {
        "blob-1": "blob 22s ease-in-out infinite",
        "blob-2": "blob 26s ease-in-out infinite reverse",
        float: "float 7s ease-in-out infinite",
        "gradient-x": "gradient-x 12s ease infinite",
        "fade-in": "fadeIn 0.6s ease-out both",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-50px) scale(1.07)" },
          "66%": { transform: "translate(-30px,40px) scale(0.96)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
