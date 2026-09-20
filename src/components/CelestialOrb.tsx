"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function CelestialOrb() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const pulseTriggerRef = useRef(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 1. Central Icosahedron Sphere with Custom Procedural Wireframe + Faces
    const sphereGeo = new THREE.IcosahedronGeometry(2.1, 8);

    // Core Glowing Mesh
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x050818,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x221551,
      emissiveIntensity: 0.4,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, coreMat);
    scene.add(coreSphere);

    // Glowing Geometric Wireframe Shell
    const wireGeo = new THREE.IcosahedronGeometry(2.14, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireMesh);

    // 2. Dual Orbital Rings
    const ringGeo1 = new THREE.RingGeometry(2.9, 3.02, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.5;
    ring1.rotation.y = Math.PI / 6;
    scene.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(3.3, 3.38, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 1.8;
    ring2.rotation.z = Math.PI / 4;
    scene.add(ring2);

    // 3. Swirling Orbit Particles
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.8;

      particlePos[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      particlePos[i * 3 + 1] = radius * Math.sin(phi);
      particlePos[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      particleSpeeds[i] = 0.5 + Math.random() * 0.8;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const orbitalParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(orbitalParticles);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 4, 15);
    purpleLight.position.set(4, 3, 4);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 3.5, 15);
    cyanLight.position.set(-4, -3, 3);
    scene.add(cyanLight);

    // Mouse tilt variables with cached bounding rect to prevent layout thrashing
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let cachedRect = container.getBoundingClientRect();

    const updateCachedRect = () => {
      if (container) cachedRect = container.getBoundingClientRect();
    };

    let isVisible = true;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible || prefersReducedMotion) return;
      const x = ((e.clientX - cachedRect.left) / (cachedRect.width || 1)) * 2 - 1;
      const y = -(((e.clientY - cachedRect.top) / (cachedRect.height || 1)) * 2 - 1);

      mouseX = x;
      mouseY = y;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      updateCachedRect();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Animation Loop
    let animationId: number = 0;
    let shockwaveScale = 1;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) return;
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Mouse tilt dampening
      targetRotationX += (mouseY * 0.4 - targetRotationX) * 0.05;
      targetRotationY += (mouseX * 0.4 - targetRotationY) * 0.05;

      coreSphere.rotation.y = elapsed * 0.15 + targetRotationY;
      coreSphere.rotation.x = elapsed * 0.05 + targetRotationX;

      wireMesh.rotation.y = -elapsed * 0.12 + targetRotationY * 1.2;
      wireMesh.rotation.x = elapsed * 0.08 + targetRotationX * 1.2;

      ring1.rotation.z = elapsed * 0.2;
      ring2.rotation.z = -elapsed * 0.15;

      orbitalParticles.rotation.y = elapsed * 0.18;
      orbitalParticles.rotation.x = elapsed * 0.08;

      // Handle shockwave pulse on click
      if (pulseTriggerRef.current > 0) {
        shockwaveScale += delta * 4;
        wireMesh.scale.setScalar(1 + Math.sin(shockwaveScale * Math.PI) * 0.15);
        if (shockwaveScale > 2) {
          pulseTriggerRef.current = 0;
          shockwaveScale = 1;
          wireMesh.scale.set(1, 1, 1);
        }
      }

      renderer.render(scene, camera);
    };

    // Render single frame for reduced motion or start loop
    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    // Viewport IntersectionObserver to pause rendering when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible && !prefersReducedMotion) {
          updateCachedRect();
          if (!animationId) {
            animate();
          }
        } else if (!isVisible && wasVisible) {
          if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = 0;
          }
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      sphereGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  const handleClick = () => {
    pulseTriggerRef.current = 1;
  };

  return (
    <div
      ref={mountRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] cursor-pointer select-none"
      title="Interact with Central Celestial Orb"
    >
      {/* Surrounding Ambient Radial Glow */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-700 pointer-events-none ${
          isHovered ? "opacity-75" : "opacity-40"
        } bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.25)_0%,rgba(34,211,238,0.15)_35%,transparent_70%)] blur-2xl`}
      />
    </div>
  );
}
