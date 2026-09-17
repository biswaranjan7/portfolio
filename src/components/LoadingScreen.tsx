"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [statusText, setStatusText] = useState("INITIALIZING DIGITAL UNIVERSE...");

  useEffect(() => {
    // Check if session has already initialized to avoid tedious reloading on same session
    const hasLoaded = sessionStorage.getItem("digital_universe_init");
    if (hasLoaded) {
      setIsCompleted(true);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatusText("SYSTEM READY // ACCESS GRANTED");
          setTimeout(() => {
            setIsCompleted(true);
            sessionStorage.setItem("digital_universe_init", "true");
          }, 450);
          return 100;
        }

        const step = Math.floor(Math.random() * 18) + 8;
        const next = Math.min(prev + step, 100);

        if (next > 35 && next < 70) {
          setStatusText("LOADING CELESTIAL COORDINATES...");
        } else if (next >= 70 && next < 100) {
          setStatusText("STABILIZING QUANTUM TELEMETRY...");
        }

        return next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#03040A] text-[#F5F7FF] px-6 select-none"
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
            {/* Logo Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 mb-6 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center font-heading font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-cyan-400 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
            >
              BM
            </motion.div>

            {/* Header */}
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs font-mono-tech tracking-[0.3em] uppercase text-purple-400/90 mb-2"
            >
              DIGITAL UNIVERSE
            </motion.h1>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg font-heading font-semibold tracking-tight text-white mb-6"
            >
              {statusText}
            </motion.div>

            {/* Sci-fi Progress Bar */}
            <div className="w-full bg-white/5 border border-white/10 rounded-full h-2 overflow-hidden mb-4 p-[1px]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            {/* Percentage & Telemetry */}
            <div className="w-full flex justify-between items-center text-[11px] font-mono-tech text-[#8B91A7]">
              <span>CORE KERNEL: V2.6.4</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
