"use client";

import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";

const iconVariants = {
  light: {
    rotate: 0,
    scale: 1,
  },
  dark: {
    rotate: 180,
    scale: 1,
  },
};

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/40 text-slate-900 shadow-[0_0_25px_rgba(0,174,239,0.35)] transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]/70 dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
      aria-label="Toggle color mode"
      aria-pressed={theme === "dark"}
    >
      <motion.span
        key={theme}
        variants={iconVariants}
        animate={theme}
        initial={theme === "dark" ? "dark" : "light"}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex h-full w-full items-center justify-center text-lg"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </motion.span>
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-[#00AEEF]/40 to-[#9C27B0]/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </button>
  );
};
