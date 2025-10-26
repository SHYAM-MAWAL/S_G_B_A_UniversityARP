"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Demos", href: "#demos" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-1/2 top-6 z-50 w-[90%] max-w-5xl -translate-x-1/2"
    >
      <div
        className={`flex items-center justify-between rounded-full border px-5 py-3 text-sm backdrop-blur-3xl transition-all duration-500 ${
          scrolled
            ? "border-white/30 bg-white/80 shadow-[0_10px_60px_rgba(156,39,176,0.25)] dark:border-white/10 dark:bg-white/5"
            : "border-white/20 bg-white/60 shadow-[0_0_40px_rgba(0,174,239,0.15)] dark:border-white/10 dark:bg-white/5"
        }`}
      >
        <Link
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold tracking-widest text-slate-900 drop-shadow-[0_0_12px_rgba(0,174,239,0.35)] transition hover:text-[#00AEEF] dark:text-slate-100"
        >
          <span className="rounded-full bg-gradient-to-br from-[#00AEEF] via-[#9C27B0] to-[#673AB7] px-3 py-1 text-xs uppercase text-white shadow-[0_0_20px_rgba(0,174,239,0.55)]">
            SHYAM_AI
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[0.95rem] font-medium text-slate-800 transition-colors duration-300 hover:text-[#00AEEF] dark:text-slate-200"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-x-0 bottom-0 h-px translate-y-2 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-[#00AEEF] via-[#9C27B0] to-[#673AB7] px-5 py-2 text-sm font-semibold text-white shadow-[0_15px_45px_rgba(0,174,239,0.35)] transition hover:shadow-[0_20px_60px_rgba(156,39,176,0.45)] md:block"
          >
            Contact Us
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <div className="mt-3 flex items-center md:hidden">
        <div className="flex w-full gap-3 overflow-x-auto pb-1 text-[0.85rem] font-medium text-slate-800 dark:text-slate-200">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/40 bg-white/60 px-4 py-2 transition hover:border-transparent hover:bg-gradient-to-r hover:from-[#00AEEF]/80 hover:to-[#9C27B0]/80 hover:text-white dark:border-white/10 dark:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
