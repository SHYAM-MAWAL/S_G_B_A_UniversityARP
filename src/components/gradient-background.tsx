"use client";

import { motion } from "framer-motion";

const particles = [
  { x: "8%", y: "18%", size: 14, delay: 0 },
  { x: "20%", y: "65%", size: 10, delay: 1.2 },
  { x: "35%", y: "30%", size: 18, delay: 0.6 },
  { x: "50%", y: "70%", size: 12, delay: 1.8 },
  { x: "65%", y: "22%", size: 16, delay: 0.3 },
  { x: "78%", y: "60%", size: 13, delay: 1.5 },
  { x: "88%", y: "32%", size: 15, delay: 0.9 },
  { x: "42%", y: "82%", size: 11, delay: 1.1 },
  { x: "15%", y: "82%", size: 9, delay: 0.4 },
  { x: "72%", y: "82%", size: 9, delay: 2 },
  { x: "90%", y: "78%", size: 12, delay: 2.4 },
  { x: "30%", y: "12%", size: 10, delay: 1.6 },
];

export const GradientBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[#f5f6fa] dark:bg-[#030014]" />

    <motion.div
      className="absolute inset-0 opacity-80 dark:opacity-90"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      style={{
        background:
          "radial-gradient(circle at 0% 0%, rgba(0, 174, 239, 0.45), transparent 38%), radial-gradient(circle at 100% 100%, rgba(156, 39, 176, 0.35), transparent 38%), radial-gradient(circle at 100% 0%, rgba(103, 58, 183, 0.25), transparent 40%), radial-gradient(circle at 50% 100%, rgba(0, 174, 239, 0.25), transparent 45%)",
        backgroundSize: "160% 160%",
      }}
    />

    <div className="absolute inset-0 bg-[radial-gradient(130%_110%_at_50%_10%,rgba(0,174,239,0.2),transparent)] dark:bg-[radial-gradient(130%_110%_at_50%_10%,rgba(0,174,239,0.28),transparent)]" />
    <div className="absolute inset-0 bg-[radial-gradient(140%_120%_at_50%_80%,rgba(103,58,183,0.15),transparent)] dark:bg-[radial-gradient(140%_120%_at_50%_80%,rgba(103,58,183,0.25),transparent)]" />

    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'400\\' height=\\'400\\' viewBox=\\'0 0 400 400\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' stroke=\\'rgba(255,255,255,0.08)\\' stroke-width=\\'0.5\\'%3E%3Cpath d=\\'M0 50h400M0 100h400M0 150h400M0 200h400M0 250h400M0 300h400M0 350h400\\'/%3E%3Cpath d=\\'M50 0v400M100 0v400M150 0v400M200 0v400M250 0v400M300 0v400M350 0v400\\'/%3E%3Ccircle cx=\\'200\\' cy=\\'200\\' r=\\'60\\' /%3E%3C/g%3E%3C/svg%3E')] opacity-10 dark:opacity-30 mix-blend-screen" />

    {particles.map((particle, index) => (
      <motion.span
        key={`${particle.x}-${index}`}
        className="absolute rounded-full bg-gradient-to-br from-[#00AEEF] to-[#9C27B0] shadow-[0_0_30px_rgba(0,174,239,0.45)]"
        style={{
          left: particle.x,
          top: particle.y,
          width: particle.size,
          height: particle.size,
        }}
        animate={{
          y: [0, -10, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 6 + index * 0.1,
          repeat: Infinity,
          delay: particle.delay,
          ease: "easeInOut",
        }}
      />
    ))}

    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#f5f6fa] dark:from-transparent dark:via-[#050b1f]/70 dark:to-[#010008]" />
  </div>
);
