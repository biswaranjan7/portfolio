"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

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
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };

    // Calculate pull distance
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary: "glass-button-primary",
    secondary: "glass-button",
    ghost: "bg-transparent hover:bg-white/5 text-[#8B91A7] hover:text-white border-transparent",
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.2 }}
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
