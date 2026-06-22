"use client";

import { motion } from "framer-motion";

const orbitDots = [
  "top-1 left-1/2 -translate-x-1/2",
  "right-1 top-1/2 -translate-y-1/2",
  "bottom-1 left-1/2 -translate-x-1/2",
];

const BrandedLoader = ({ fullscreen = true }) => {
  return (
    <motion.div
      role="status"
      aria-label="იტვირთება"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`${
        fullscreen
          ? "fixed inset-0 z-[9999]"
          : "min-h-[320px] w-full"
      } flex items-center justify-center overflow-hidden bg-[#07020f]`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,48,36,0.16),transparent_34%),radial-gradient(circle_at_70%_30%,rgba(116,79,238,0.18),transparent_32%)]" />
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />

      <motion.div
        initial={{ y: 12, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="relative mb-7 flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] shadow-2xl shadow-accent/20">
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-transparent border-t-accent border-r-accent/40"
          />
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 rounded-full border border-accent/20 shadow-[0_0_35px_rgba(241,48,36,0.28)]"
          />

          {orbitDots.map((position, index) => (
            <motion.span
              key={position}
              aria-hidden="true"
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }}
              transition={{
                duration: 1.3,
                delay: index * 0.18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute ${position} h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(241,48,36,0.9)]`}
            />
          ))}

          <div className="relative text-center">
            <div className="text-2xl font-bold tracking-[0.08em] text-white">
              Next<span className="text-accent">Hub</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm font-light text-white/65">
          {/* <span>იტვირთება</span> */}
          <span className="flex gap-1" aria-hidden="true">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                animate={{ y: [0, -4, 0], opacity: [0.35, 1, 0.35] }}
                transition={{
                  duration: 0.8,
                  delay: dot * 0.12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
            ))}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BrandedLoader;
