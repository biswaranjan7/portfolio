"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "project" | "button">("default");
  const [projectText, setProjectText] = useState("VIEW\nPROJECT ↗");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if touch device or prefers reduced motion
    const touchCheck = "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;
    const reducedMotionCheck = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (touchCheck || reducedMotionCheck) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("[data-cursor='project']");
      const buttonEl = target.closest("button, [role='button'], [data-cursor='button']");
      const linkEl = target.closest("a, [data-cursor='link'], input, textarea");

      if (projectEl) {
        setCursorVariant("project");
        const customLabel = projectEl.getAttribute("data-cursor-text");
        if (customLabel) setProjectText(customLabel);
        else setProjectText("EXPLORE\nPLANET ↗");
      } else if (buttonEl) {
        setCursorVariant("button");
      } else if (linkEl) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center text-center font-mono-tech select-none"
        animate={{
          x: mousePosition.x - (cursorVariant === "project" ? 44 : cursorVariant === "button" ? 28 : cursorVariant === "hover" ? 22 : 16),
          y: mousePosition.y - (cursorVariant === "project" ? 44 : cursorVariant === "button" ? 28 : cursorVariant === "hover" ? 22 : 16),
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
        style={{
          borderWidth: 1.5,
          borderStyle: "solid",
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
        animate={{
          x: mousePosition.x - 3.5,
          y: mousePosition.y - 3.5,
          scale: cursorVariant === "project" ? 0 : cursorVariant === "button" ? 1.5 : 1,
          opacity: cursorVariant === "project" ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 800,
          mass: 0.1,
        }}
        style={{
          width: 7,
          height: 7,
          backgroundColor: cursorVariant === "button" ? "#22D3EE" : "#8B5CF6",
          boxShadow: "0 0 10px #8B5CF6, 0 0 20px #22D3EE",
        }}
      />
    </>
  );
}
