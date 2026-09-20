"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function subscribeTouch(callback: () => void) {
  const mql = window.matchMedia("(pointer: coarse)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getTouchSnapshot() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getServerTouchSnapshot() {
  return true;
}

export function CustomCursor() {
  const isTouchDevice = useSyncExternalStore(subscribeTouch, getTouchSnapshot, getServerTouchSnapshot);
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "project" | "button">("default");
  const [projectText, setProjectText] = useState("VIEW\nPROJECT ↗");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring springs
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 350, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 350, mass: 0.5 });

  // Inner dot springs
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 800, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 800, mass: 0.1 });

  useEffect(() => {
    if (isTouchDevice) return;

    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible((prev) => (prev ? prev : true));

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("[data-cursor='project']");
      const buttonEl = target.closest("button, [role='button'], [data-cursor='button']");
      const linkEl = target.closest("a, [data-cursor='link'], input, textarea");

      let nextVariant: "default" | "hover" | "project" | "button" = "default";
      let nextText = "EXPLORE\nPLANET ↗";

      if (projectEl) {
        nextVariant = "project";
        const customLabel = projectEl.getAttribute("data-cursor-text");
        if (customLabel) nextText = customLabel;
      } else if (buttonEl) {
        nextVariant = "button";
      } else if (linkEl) {
        nextVariant = "hover";
      }

      setCursorVariant((prev) => (prev !== nextVariant ? nextVariant : prev));
      if (nextVariant === "project") {
        setProjectText((prev) => (prev !== nextText ? nextText : prev));
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center text-center font-mono-tech select-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderWidth: 1.5,
          borderStyle: "solid",
        }}
        animate={{
          width: cursorVariant === "project" ? 88 : cursorVariant === "button" ? 56 : cursorVariant === "hover" ? 44 : 32,
          height: cursorVariant === "project" ? 88 : cursorVariant === "button" ? 56 : cursorVariant === "hover" ? 44 : 32,
          backgroundColor:
            cursorVariant === "project"
              ? "rgba(139, 92, 246, 0.25)"
              : cursorVariant === "button"
              ? "rgba(34, 211, 238, 0.15)"
              : cursorVariant === "hover"
              ? "rgba(255, 255, 255, 0.08)"
              : "transparent",
          borderColor:
            cursorVariant === "project"
              ? "rgba(139, 92, 246, 0.8)"
              : cursorVariant === "button"
              ? "rgba(34, 211, 238, 0.7)"
              : cursorVariant === "hover"
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(255, 255, 255, 0.25)",
          backdropFilter: cursorVariant === "project" ? "blur(8px)" : "none",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        {cursorVariant === "project" && (
          <span className="text-[9px] font-bold tracking-widest text-[#F5F7FF] uppercase leading-tight">
            {projectText}
          </span>
        )}
      </motion.div>

      {/* 2. Inner Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 7,
          height: 7,
          backgroundColor: cursorVariant === "button" ? "#22D3EE" : "#8B5CF6",
          boxShadow: "0 0 10px #8B5CF6, 0 0 20px #22D3EE",
        }}
        animate={{
          scale: cursorVariant === "project" ? 0 : cursorVariant === "button" ? 1.5 : 1,
          opacity: cursorVariant === "project" ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 800,
          mass: 0.1,
        }}
      />
    </>
  );
}
