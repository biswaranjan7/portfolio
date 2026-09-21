"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [statusText, setStatusText] = useState("INITIALIZING DIGITAL UNIVERSE...");

  useEffect(() => {
    // Clear any stale legacy session flag to prevent interference
    try {
      sessionStorage.removeItem("digital_universe_init");
    } catch {
      // Ignore in restricted storage environments
    }

    let animationFrameId: number | null = null;
    let completionTimeoutId: NodeJS.Timeout | null = null;
    let isCancelled = false;

    const DURATION = 1300; // Total ms to progress from 0% to 100%
    const COMPLETION_DELAY = 450; // Delay at 100% before starting fade-out
    const startTime = performance.now();
    let lastReportedProgress = 0;

    function step(currentTime: number) {
      if (isCancelled) return;

      const elapsed = currentTime - startTime;
      const t = Math.min(Math.max(elapsed / DURATION, 0), 1);

      // Smooth ease-out cubic curve: fast start, smooth deceleration toward 100
      const eased = 1 - Math.pow(1 - t, 2.4);
      const currentProgress = Math.min(100, Math.floor(eased * 100));

      if (currentProgress !== lastReportedProgress) {
        lastReportedProgress = currentProgress;
        setProgress(currentProgress);

        if (currentProgress > 35 && currentProgress < 70) {
          setStatusText("LOADING CELESTIAL COORDINATES...");
        } else if (currentProgress >= 70 && currentProgress < 100) {
          setStatusText("STABILIZING QUANTUM TELEMETRY...");
        }
      }

      if (t < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Guaranteed exact 100% terminal state
        setProgress(100);
        setStatusText("SYSTEM READY // ACCESS GRANTED");

        completionTimeoutId = setTimeout(() => {
          if (!isCancelled) {
            setIsCompleted(true);
          }
        }, COMPLETION_DELAY);
      }
    }

    animationFrameId = requestAnimationFrame(step);

    return () => {
      isCancelled = true;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      if (completionTimeoutId !== null) {
        clearTimeout(completionTimeoutId);
      }
    };
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
            {/* User Profile Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-16 h-16 mb-6 rounded-2xl border border-white/20 bg-white/5 overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)] ring-1 ring-cyan-400/20 flex items-center justify-center"
            >
              <Image
                src="/profile.jpg"
                alt="Biswa Ranjan Muduli"
                fill
                sizes="64px"
                className="object-cover object-[50%_18%]"
                priority
              />
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
