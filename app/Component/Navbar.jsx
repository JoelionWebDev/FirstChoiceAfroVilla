"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, Phone, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme, mounted: themeMounted } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isDark = theme === "dark";

  const bgClass = scrolled
    ? isDark ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5" : "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
    : "bg-transparent";

  const linkClass = scrolled
    ? isDark ? "text-gray-300 hover:text-brand-400" : "text-charcoal-700 hover:text-brand-600"
    : "text-white/90 hover:text-white";

  if (!mounted) return null;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 overflow-hidden">
                <Image src="/logo2.png" alt="First Choice Afro Villa" fill className="object-contain" priority />
              </div>
              <div className="hidden sm:block">
                <span className={`font-serif text-lg font-bold tracking-tight transition-colors ${scrolled ? (isDark ? "text-white" : "text-charcoal-900") : "text-white"}`}>
                  First Choice
                </span>
                <span className={`block text-xs tracking-widest transition-colors ${scrolled ? "text-brand-600" : "text-brand-300"}`}>
                  AFRO VILLA LTD
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${linkClass}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {themeMounted && (
                <button onClick={toggleTheme}
                  className={`p-2.5 rounded-xl transition-all duration-300 ${scrolled ? (isDark ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-100 text-charcoal-600 hover:bg-gray-200") : "bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm"}`}
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}
              <a href="https://wa.me/2347031147821" target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? "bg-brand-500 text-charcoal-950 hover:bg-brand-400 shadow-lg shadow-brand-500/25"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Talk to Agent
              </a>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              {themeMounted && (
                <button onClick={toggleTheme}
                  className={`p-2.5 rounded-xl transition-colors ${scrolled ? (isDark ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-charcoal-600") : "bg-white/10 text-white/80 backdrop-blur-sm"}`}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2.5 rounded-xl transition-colors ${scrolled ? (isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-charcoal-700") : "bg-white/10 backdrop-blur-sm text-white"}`}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t ${isDark ? "border-white/5 bg-[#0a0a0f]" : "border-gray-100 bg-white"} shadow-xl`}
            >
              <div className="px-4 py-6 space-y-1">
                {navigationLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${isDark ? "text-gray-300 hover:text-brand-400 hover:bg-white/5" : "text-charcoal-700 hover:text-brand-600 hover:bg-brand-50"}`}
                  >{link.label}</Link>
                ))}
                <div className={`pt-4 border-t ${isDark ? "border-white/5" : "border-gray-100"}`}>
                  <a href="https://wa.me/2347031147821" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-4 py-3.5 bg-brand-500 hover:bg-brand-400 text-charcoal-950 rounded-xl font-semibold transition-colors"
                  ><MessageCircle className="w-5 h-5" /> Talk to an Agent on WhatsApp</a>
                  <a href="tel:+2347031147821"
                    className={`flex items-center gap-3 w-full px-4 py-3.5 mt-2 rounded-xl font-medium transition-colors ${isDark ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-charcoal-50 text-charcoal-800 hover:bg-charcoal-100"}`}
                  ><Phone className="w-5 h-5" /> Call Us: +234 703 114 7821</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;