"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "primary",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const posX = useMotionValue(0);
  const posY = useMotionValue(0);
  const springX = useSpring(posX, { stiffness: 350, damping: 25, mass: 0.2 });
  const springY = useSpring(posY, { stiffness: 350, damping: 25, mass: 0.2 });

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      rectRef.current = buttonRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rectRef.current || buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    const { clientX, clientY } = e;

    // Calculate pull distance
    const x = (clientX - (rect.left + rect.width / 2)) * 0.25;
    const y = (clientY - (rect.top + rect.height / 2)) * 0.25;
    posX.set(x);
    posY.set(y);
  };

  const handleMouseLeave = () => {
    posX.set(0);
    posY.set(0);
    rectRef.current = null;
  };

  const variantStyles = {
    primary: "glass-button-primary",
    secondary: "glass-button",
    ghost: "bg-transparent hover:bg-white/5 text-[#8B91A7] hover:text-white border-transparent",
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`inline-block cursor-pointer ${className}`}
      data-cursor="button"
    >
      <div className={`px-6 py-3 rounded-full font-heading font-medium text-sm flex items-center justify-center gap-2 ${variantStyles[variant]}`}>
        {children}
      </div>
    </motion.div>
  );
}
