import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#B8963E",
          light: "#D4AF6A",
          dark: "#8B6914",
          50: "#FDF8EC",
          100: "#FAF0D0",
          200: "#F3DFA0",
          300: "#E8C85C",
          400: "#D4AF6A",
          500: "#B8963E",
          600: "#9A7A30",
          700: "#8B6914",
          800: "#705308",
          900: "#4A3605",
        },
        dark: {
          DEFAULT: "#0D0D0D",
          100: "#1A1A1A",
          200: "#252525",
          300: "#333333",
        },
        "off-white": "#F8F6F0",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #D4AF6A 0%, #B8963E 50%, #8B6914 100%)",
        "gold-gradient-h":
          "linear-gradient(90deg, #D4AF6A 0%, #B8963E 50%, #8B6914 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(3deg)" },
          "66%": { transform: "translateY(-8px) rotate(-2deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(12px) rotate(-4deg)" },
          "66%": { transform: "translateY(5px) rotate(2deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse3d: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.05) rotate(5deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-reverse": "floatReverse 9s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        pulse3d: "pulse3d 4s ease-in-out infinite",
      },
      boxShadow: {
        gold: "0 0 30px rgba(184,150,62,0.3)",
        "gold-lg": "0 0 60px rgba(184,150,62,0.4)",
        "gold-sm": "0 0 15px rgba(184,150,62,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
