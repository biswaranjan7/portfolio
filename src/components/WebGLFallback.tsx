"use client";

import { useSyncExternalStore } from "react";

function subscribeWebGL() {
  return () => {};
}

function getWebGLSnapshot() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

function getServerWebGLSnapshot() {
  return true;
}

export function WebGLFallback() {
  const hasWebGL = useSyncExternalStore(subscribeWebGL, getWebGLSnapshot, getServerWebGLSnapshot);

  if (hasWebGL) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#03040A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="absolute inset-0 opacity-20 bg-grid-pattern" />
    </div>
  );
}
