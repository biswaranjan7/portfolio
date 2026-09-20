"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Target, Compass, Cpu, Sparkles } from "lucide-react";

export function AboutPlanet() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Planet Core Sphere
    const planetGeo = new THREE.SphereGeometry(1.8, 48, 48);
    const planetMat = new THREE.MeshStandardMaterial({
      color: 0x0a0f24,
      roughness: 0.35,
      metalness: 0.8,
      emissive: 0x1d1245,
      emissiveIntensity: 0.5,
    });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    scene.add(planetMesh);

    // Wireframe Overlay
    const wireGeo = new THREE.SphereGeometry(1.82, 24, 24);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireMesh);

    // Orbital Ring
    const ringGeo = new THREE.RingGeometry(2.4, 2.7, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    ringMesh.rotation.y = Math.PI / 8;
    scene.add(ringMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const blueLight = new THREE.DirectionalLight(0x3b82f6, 3);
    blueLight.position.set(5, 3, 5);
    scene.add(blueLight);

    const purpleLight = new THREE.DirectionalLight(0x8b5cf6, 2);
    purpleLight.position.set(-5, -2, -3);
    scene.add(purpleLight);

    let animId: number = 0;
    let isVisible = true;

    const animate = () => {
      if (!isVisible) return;
      animId = requestAnimationFrame(animate);
      planetMesh.rotation.y += 0.006;
      wireMesh.rotation.y += 0.008;
      ringMesh.rotation.z += 0.004;
      renderer.render(scene, camera);
    };

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible && !prefersReducedMotion) {
          if (!animId) animate();
        } else if (!isVisible && wasVisible) {
          if (animId) {
            cancelAnimationFrame(animId);
            animId = 0;
          }
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      planetGeo.dispose();
      planetMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="about" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        sector="// SECTOR 01 // CORE PROFILE"
        title="ABOUT MY UNIVERSE"
        subtitle={portfolioData.aboutText.lead}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
        {/* 3D Planet Display Column */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div
            ref={mountRef}
            className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] relative z-10 select-none"
          />
          {/* Radial Aura */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.2)_0%,transparent_70%)] blur-2xl pointer-events-none -z-0" />

          {/* Coordinates label */}
          <div className="mt-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-[#8B91A7] tracking-widest uppercase">
            PLANET ORIGIN // 20.2961° N, 85.8245° E
          </div>
        </div>

        {/* Telemetry Information Cards Column */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-heading font-bold text-white tracking-tight">
                Architectural Vision
              </h3>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-[#8B91A7] leading-relaxed">
              {portfolioData.aboutText.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Structured Telemetry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-5 rounded-xl border border-white/10 flex flex-col"
            >
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono-tech tracking-wider uppercase mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>
              <div className="text-sm font-heading font-semibold text-white mb-1">
                B.Tech in CSE
              </div>
              <div className="text-xs text-[#8B91A7] leading-snug">
                GCE Kalahandi • Class of 2028
              </div>
            </motion.div>

            {/* Focus Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-5 rounded-xl border border-white/10 flex flex-col"
            >
              <div className="flex items-center gap-2 text-purple-400 text-xs font-mono-tech tracking-wider uppercase mb-2">
                <Target className="w-4 h-4" />
                <span>CORE FOCUS</span>
              </div>
              <div className="text-sm font-heading font-semibold text-white mb-1">
                Web Systems & AI
              </div>
              <div className="text-xs text-[#8B91A7] leading-snug">
                Next.js, Three.js, Distributed Cloud & Scalable APIs
              </div>
            </motion.div>

            {/* Currently Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-5 rounded-xl border border-white/10 flex flex-col"
            >
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono-tech tracking-wider uppercase mb-2">
                <Compass className="w-4 h-4" />
                <span>CURRENTLY</span>
              </div>
              <div className="text-sm font-heading font-semibold text-white mb-1">
                Active Trajectory
              </div>
              <div className="text-xs text-[#8B91A7] leading-snug">
                Learning • Building • Seeking Engineering Internships
              </div>
            </motion.div>
          </div>

          {/* Key Capabilities Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-5 rounded-xl bg-white/[0.02] border border-white/8"
          >
            <div className="text-xs font-mono-tech text-[#8B91A7] tracking-widest uppercase mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>PRIMARY ENGINEERING PILLARS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {portfolioData.aboutText.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono-tech bg-white/5 border border-white/10 text-white/90"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
