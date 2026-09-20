"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { Send, Radio, Mail, CheckCircle2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function ContactStation() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [transmissionStatus, setTransmissionStatus] = useState<"idle" | "connecting" | "transmitting" | "sent">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please complete all transmission parameters.");
      return;
    }

    setErrorMessage("");
    setTransmissionStatus("connecting");

    try {
      // Phase 1: Initiating frequency lock (500ms)
      await new Promise((resolve) => setTimeout(resolve, 500));
      setTransmissionStatus("transmitting");

      const response = await fetch(`https://formsubmit.co/ajax/${portfolioData.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `🛰️ Orbital Transmission from ${formData.name} (Portfolio)`,
          _captcha: "false",
          _template: "table",
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true || result.message)) {
        setTransmissionStatus("sent");

        // Cosmic celebratory particle burst
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.7 },
          colors: ["#8B5CF6", "#3B82F6", "#22D3EE"],
        });

        // Reset form after delay
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setTransmissionStatus("idle");
        }, 6000);
      } else {
        throw new Error(result?.message || "Failed to deliver transmission");
      }
    } catch (err: unknown) {
      console.error("Transmission error:", err);
      // Fallback: Open mail client so no message is ever lost
      window.location.href = `mailto:${portfolioData.email}?subject=Portfolio%20Transmission%20from%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom:%20${encodeURIComponent(
        formData.email
      )}`;
      setErrorMessage("Direct mail protocol initiated in your email client.");
      setTransmissionStatus("idle");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        sector="// SECTOR 06 // RELAY BEACON"
        title="ESTABLISH CONNECTION"
        subtitle="Have an idea, project, or engineering opportunity? Transmit a dispatch or initiate direct orbital communications."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
        {/* Left Column: Communication Station Radar & Direct Channels */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          {/* Futuristic Signal Radar Orb Graphic */}
          <div className="relative glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center overflow-hidden">
            {/* Radar Wave Pulse Rings */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center my-4">
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping" />
              <div className="absolute w-36 h-36 rounded-full border border-purple-500/30" />
              <div className="absolute w-24 h-24 rounded-full border border-blue-400/40" />

              {/* Central Transceiver Beacon */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.6)] z-10">
                <Radio className="w-6 h-6 text-white animate-pulse" />
              </div>

              {/* Orbital Sweeper */}
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.15)_60deg,transparent_65deg)] animate-spin [animation-duration:4s]" />
            </div>

            <div className="text-center">
              <div className="text-sm font-heading font-bold text-white mb-1">
                COMMUNICATION ARRAY ACTIVE
              </div>
              <div className="text-xs font-mono-tech text-[#8B91A7]">
                FREQUENCY // 2.408 GHz • LATENCY: 12ms
              </div>
            </div>
          </div>

          {/* Direct Frequency Channels */}
          <div className="space-y-3">
            <div className="text-xs font-mono-tech text-[#8B91A7] tracking-widest uppercase mb-2">
              // DIRECT BEACON CHANNELS
            </div>

            <a
              href={`mailto:${portfolioData.email}`}
              className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-cyan-400/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/5 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#8B91A7] font-mono-tech">DIRECT INBOX</div>
                  <div className="text-sm font-heading font-medium text-white group-hover:text-cyan-300">
                    {portfolioData.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8B91A7] group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-purple-400/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/5 text-purple-400">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#8B91A7] font-mono-tech">PROFESSIONAL NETWORK</div>
                  <div className="text-sm font-heading font-medium text-white group-hover:text-purple-300">
                    linkedin.com/in/biswaranjanmuduli
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8B91A7] group-hover:text-purple-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={portfolioData.githubRepositories || portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-white/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/5 text-white">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#8B91A7] font-mono-tech">SOURCE REPOSITORIES</div>
                  <div className="text-sm font-heading font-medium text-white group-hover:text-cyan-300">
                    github.com/biswaranjan7
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8B91A7] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Transmission Form Panel */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="text-xs font-mono-tech text-cyan-400/80 tracking-widest uppercase mb-1">
              // TELEMETRY TRANSMISSION TERMINAL
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              SEND DIRECT DISPATCH
            </h3>

            {transmissionStatus === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center flex flex-col items-center space-y-4 my-8"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-xl font-heading font-bold text-white">
                  TRANSMISSION DISPATCHED ✓
                </h4>
                <p className="text-xs sm:text-sm text-[#8B91A7] max-w-md">
                  Your message has been routed directly to <span className="text-white font-mono-tech">{portfolioData.email}</span>. Biswa Ranjan will reply within 24 standard solar hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#8B91A7] mb-2">
                    IDENTIFIER / YOUR NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Vance"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-[#8B91A7]/40 font-mono-tech transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#8B91A7] mb-2">
                    ELECTRONIC MAIL / FREQUENCY
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@enterprise.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-[#8B91A7]/40 font-mono-tech transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#8B91A7] mb-2">
                    TRANSMISSION PAYLOAD / MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, internship, or collaborative opportunity..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-[#8B91A7]/40 font-mono-tech transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="text-xs font-mono-tech text-rose-400">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={transmissionStatus !== "idle"}
                  className="w-full py-4 rounded-xl font-heading font-semibold text-sm tracking-wide bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all cursor-pointer disabled:opacity-60"
                  data-cursor="button"
                >
                  {transmissionStatus === "idle" && (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {transmissionStatus === "connecting" && (
                    <>
                      <Radio className="w-4 h-4 animate-spin text-cyan-300" />
                      <span>CONNECTING...</span>
                    </>
                  )}
                  {transmissionStatus === "transmitting" && (
                    <>
                      <Radio className="w-4 h-4 animate-ping text-white" />
                      <span>TRANSMITTING...</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
