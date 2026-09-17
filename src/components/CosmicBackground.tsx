"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function CosmicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Determine particle counts based on screen width
    const width = window.innerWidth;
    let starCount = 2000;
    let dustCount = 800;

    if (width < 640) {
      starCount = 400;
      dustCount = 150;
    } else if (width < 1024) {
      starCount = 1000;
      dustCount = 400;
    }

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x03040a, 1);
    container.appendChild(renderer.domElement);

    // 1. Distant Starfield (Layer 1 - deep space)
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color("#8B5CF6"), // Purple
      new THREE.Color("#3B82F6"), // Blue
      new THREE.Color("#22D3EE"), // Cyan
      new THREE.Color("#FFFFFF"), // Crisp White
      new THREE.Color("#E2E8F0"), // Soft Silver
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 1600;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 1600;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 1600;

      const color = palette[Math.floor(Math.random() * palette.length)];
      starColors[i3] = color.r;
      starColors[i3 + 1] = color.g;
      starColors[i3 + 2] = color.b;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 2. Mid-layer Cosmic Dust / Glowing Particles (Layer 2)
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      const i3 = i * 3;
      dustPositions[i3] = (Math.random() - 0.5) * 800;
      dustPositions[i3 + 1] = (Math.random() - 0.5) * 800;
      dustPositions[i3 + 2] = (Math.random() - 0.5) * 600;

      const color = Math.random() > 0.5 ? new THREE.Color("#8B5CF6") : new THREE.Color("#22D3EE");
      dustColors[i3] = color.r;
      dustColors[i3 + 1] = color.g;
      dustColors[i3 + 2] = color.b;
    }

    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute("color", new THREE.BufferAttribute(dustColors, 3));

    const dustMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const dustField = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustField);

    // Subtle Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.05;
      mouseY = (e.clientY - windowHalfY) * 0.05;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        const elapsedTime = clock.getElapsedTime();

        // Slow rotation for celestial depth
        starField.rotation.y = elapsedTime * 0.015;
        starField.rotation.x = elapsedTime * 0.005;

        dustField.rotation.y = -elapsedTime * 0.025;
        dustField.rotation.z = elapsedTime * 0.01;

        // Smooth camera dampening towards mouse
        targetX += (mouseX - targetX) * 0.03;
        targetY += (mouseY - targetY) * 0.03;

        camera.position.x = targetX;
        camera.position.y = -targetY;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      starGeometry.dispose();
      starMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
