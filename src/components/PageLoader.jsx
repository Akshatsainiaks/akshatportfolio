// import React, { useEffect } from "react";
// import { motion } from "framer-motion";

// const PageLoader = ({ onFinish }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFinish();
//     }, 1500); // 1.5 seconds loader

//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed inset-0 z-[9999] flex flex-col items-center justify-center 
//                  bg-[#0f172a] text-white pointer-events-none"
//     >
//       {/* NAME */}
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="text-4xl md:text-6xl font-extrabold tracking-wide text-cyan-400"
//       >
//         Akshat Saini
//       </motion.h1>

//       {/* Underline */}
//       <motion.div
//         initial={{ width: 0 }}
//         animate={{ width: "140px" }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="h-[3px] mt-4 bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
//       />

//       {/* Loading Dots */}
//       <div className="flex gap-2 mt-6">
//         {[0, 0.2, 0.4].map((delay, idx) => (
//           <motion.div
//             key={idx}
//             animate={{ opacity: [0.3, 1, 0.3] }}
//             transition={{ repeat: Infinity, duration: 1, delay }}
//             className="w-3 h-3 rounded-full bg-cyan-300"
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default PageLoader;


// final new
import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FIRST = "AKSHAT".split("");
const LAST = "SAINI".split("");

const MIN_TIME = 1600; // always show the intro at least this long
const MAX_TIME = 4000; // never block the site longer than this
const EASE = [0.76, 0, 0.24, 1];

const PageLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  // Progress eases toward 100 over MIN_TIME, but holds at 90
  // until the page has actually finished loading (or MAX_TIME hits).
  useEffect(() => {
    const start = performance.now();
    let loaded = document.readyState === "complete";
    let frame;
    let done;

    const markLoaded = () => (loaded = true);
    window.addEventListener("load", markLoaded);

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / MIN_TIME, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const ready = (loaded && t === 1) || elapsed >= MAX_TIME;
      const value = ready ? 100 : Math.min(eased * 100, 90);

      setProgress(Math.round(value));

      if (ready) {
        done = setTimeout(onFinish, 250);
      } else {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);

    // Safety net in case animation frames are throttled
    const fallback = setTimeout(onFinish, MAX_TIME + 500);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(done);
      clearTimeout(fallback);
      window.removeEventListener("load", markLoaded);
    };
  }, [onFinish]);

  const letter = (char, i, delayBase, color) => (
    <span key={i} className="inline-block overflow-hidden align-bottom">
      <motion.span
        className="inline-block"
        style={color ? { color } : undefined}
        initial={reduceMotion ? { opacity: 0 } : { y: "110%" }}
        animate={reduceMotion ? { opacity: 1 } : { y: "0%" }}
        transition={{ duration: 0.7, ease: EASE, delay: delayBase + i * 0.05 }}
      >
        {char}
      </motion.span>
    </span>
  );

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0c] text-white overflow-hidden select-none"
      exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
      transition={{ duration: reduceMotion ? 0.3 : 0.85, ease: EASE }}
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Ambient glows (same as the hero) */}
      <div className="absolute top-1/3 left-1/3 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-[420px] h-[420px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full flex flex-col items-center px-6">
        {/* Name reveal */}
        <h1 className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none">
          <span className="flex">{FIRST.map((c, i) => letter(c, i, 0.1))}</span>
          {/* per-letter cyan → violet (bg-clip-text breaks on moving letters) */}
          <span className="flex">
            {LAST.map((c, i) =>
              letter(
                c,
                i,
                0.35,
                `color-mix(in oklab, var(--color-violet-500) ${Math.round((i / (LAST.length - 1)) * 100)}%, var(--color-cyan-400))`
              )
            )}
          </span>
        </h1>

        {/* Role */}
        <motion.p
          className="mt-6 text-[11px] sm:text-xs font-bold uppercase tracking-[0.4em] text-slate-500"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          Software Engineer
        </motion.p>

        {/* Progress line */}
        <div className="mt-10 w-48 sm:w-64 h-[2px] rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-8 right-6 sm:right-10 font-mono text-sm sm:text-base font-bold tabular-nums text-slate-500">
        {String(progress).padStart(3, "0")}
        <span className="text-cyan-400">%</span>
      </div>

      {/* Monogram */}
      <div className="absolute bottom-8 left-6 sm:left-10 text-sm font-black tracking-tighter text-slate-500">
        A<span className="text-cyan-400">.</span>S
      </div>
    </motion.div>
  );
};

export default PageLoader;
