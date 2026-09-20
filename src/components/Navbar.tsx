"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "/about", sectionId: "about" },
  { label: "Skills", href: "/skills", sectionId: "skills" },
  { label: "Projects", href: "/projects", sectionId: "projects" },
  { label: "Journey", href: "/experience", sectionId: "journey" },
  { label: "Missions", href: "/missions", sectionId: "missions" },
  { label: "Achievements", href: "/achievements", sectionId: "achievements" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Scroll spy for sections when on home page via IntersectionObserver
    let observer: IntersectionObserver | null = null;
    if (pathname === "/") {
      const sections = ["hero", "about", "skills", "projects", "journey", "missions", "achievements", "contact"];
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          }
        },
        {
          rootMargin: "-25% 0px -65% 0px",
          threshold: 0,
        }
      );

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  const currentActiveSection =
    pathname === "/"
      ? activeSection
      : navItems.find((item) => pathname.startsWith(item.href))?.sectionId || activeSection;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(item.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
        setActiveSection(item.sectionId);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-4 md:px-8 flex justify-center ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <nav
          className={`w-full max-w-5xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500 border ${
            isScrolled
              ? "bg-[#05050C]/85 backdrop-blur-2xl border-white/12 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.8)]"
              : "bg-[#05050C]/55 backdrop-blur-xl border-white/8 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-purple-400/60 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all shrink-0 bg-white/10 ring-1 ring-cyan-400/20">
              <Image
                src={portfolioData.avatarUrl}
                alt={portfolioData.name}
                width={32}
                height={32}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-purple-300 transition-colors">
                BISWA RANJAN
              </span>
              <span className="font-mono-tech text-[9px] text-[#8B91A7] tracking-widest uppercase hidden sm:inline-block">
                SYSTEM ONLINE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentActiveSection === item.sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#8B91A7] hover:text-[#F5F7FF] hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/10 border border-white/15 rounded-full -z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-tech text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/40 transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#8B91A7]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-white/80 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#03040A]/95 backdrop-blur-3xl flex flex-col justify-center px-8 md:hidden"
          >
            <div className="space-y-6">
              <div className="text-xs font-mono-tech text-cyan-400/80 tracking-[0.25em] uppercase">
                {"// UNIVERSE NAVIGATION"}
              </div>

              <div className="flex flex-col space-y-4">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className="text-2xl font-heading font-bold text-[#F5F7FF] hover:text-cyan-300 transition-colors flex items-center justify-between group"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-mono-tech text-[#8B91A7] group-hover:text-cyan-400">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                <a
                  href={portfolioData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-purple-600/20 border border-purple-500/40 text-center font-heading font-medium text-sm text-white"
                >
                  VIEW RESUME (PDF)
                </a>
                <div className="flex justify-between text-xs font-mono-tech text-[#8B91A7]">
                  <span>{portfolioData.status}</span>
                  <span>{portfolioData.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
