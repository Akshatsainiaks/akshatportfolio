import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  // Tone B: Deep Luxury Cinematic Swell + Pure Crystal Glass Ding
  const playSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // 1. Deep cinematic air whoosh / sub-bass bloom
      const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 1.2, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseBuffer.length; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.setValueAtTime(180, now);
      noiseFilter.frequency.exponentialRampToValueAtTime(1200, now + 1.1);
      noiseFilter.Q.setValueAtTime(3, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.linearRampToValueAtTime(0.12, now + 0.5);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 1.25);

      // 2. High-End Crisp Glass Ding on reveal (880Hz A5 Pure Bell)
      setTimeout(() => {
        try {
          const chimeTime = ctx.currentTime;
          const bellOsc = ctx.createOscillator();
          const bellGain = ctx.createGain();

          bellOsc.type = "sine";
          bellOsc.frequency.setValueAtTime(880, chimeTime); // Concert A

          bellGain.gain.setValueAtTime(0.2, chimeTime);
          bellGain.gain.exponentialRampToValueAtTime(0.0001, chimeTime + 1.3);

          bellOsc.connect(bellGain);
          bellGain.connect(ctx.destination);

          bellOsc.start(chimeTime);
          bellOsc.stop(chimeTime + 1.35);

          // Harmonic Overtone for crystal ring (1760Hz & 2640Hz)
          [1760, 2640].forEach((freq, idx) => {
            const overtone = ctx.createOscillator();
            const overGain = ctx.createGain();
            overtone.type = "sine";
            overtone.frequency.setValueAtTime(freq, chimeTime);
            overGain.gain.setValueAtTime(0.04 / (idx + 1), chimeTime);
            overGain.gain.exponentialRampToValueAtTime(0.0001, chimeTime + 0.8);
            overtone.connect(overGain);
            overGain.connect(ctx.destination);
            overtone.start(chimeTime);
            overtone.stop(chimeTime + 0.85);
          });
        } catch {}
      }, 1150);
    } catch (e) {
      console.warn("Audio Context init error:", e);
    }
  };

  useEffect(() => {
    playSound();

    const handleGesture = () => {
      playSound();
    };

    window.addEventListener("pointerdown", handleGesture, { once: true });
    window.addEventListener("keydown", handleGesture, { once: true });
    window.addEventListener("touchstart", handleGesture, { once: true });

    // Smooth progress counter from 0 to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 40);

    const timer = setTimeout(() => {
      onFinish();
    }, 1850);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      window.removeEventListener("pointerdown", handleGesture);
      window.removeEventListener("keydown", handleGesture);
      window.removeEventListener("touchstart", handleGesture);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        onClick={playSound}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -24, filter: "blur(10px)" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070709] text-white overflow-hidden select-none cursor-pointer"
      >
        {/* Ambient Professional Core Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[280px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[160px] bg-teal-400/[0.03] rounded-full blur-[90px] pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-xl w-full px-6">
          {/* Main Name - Liquid Silver & Diamond White */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[0.24em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)]">
              AKSHAT SAINI
            </h1>
          </motion.div>

          {/* Luminous Precision Laser Line */}
          <div className="w-52 sm:w-80 my-7 relative flex items-center justify-center">
            <div className="h-[2px] w-full bg-slate-800/80 relative overflow-hidden rounded-full border border-white/[0.06]">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-200 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            {/* Glowing Laser Leading Dot */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-300 rounded-full blur-[1px] shadow-[0_0_10px_#34d399]"
              style={{ left: `calc(${progress}% - 4px)` }}
            />
          </div>

          {/* Subtitle & Progress Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-between w-52 sm:w-80 text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-slate-400 uppercase"
          >
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]"></span>
              Software Engineer
            </span>
            <span className="font-bold text-emerald-400 tabular-nums">
              {progress < 10 ? `0${progress}` : progress}%
            </span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLoader;