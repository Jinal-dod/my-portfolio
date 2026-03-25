"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // Check once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = mounted && isScrolled 
    ? "py-4 bg-white/95 dark:bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" 
    : "py-8 bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClasses}`}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 items-center">
        {/* Logo */}
        <div className="flex justify-start">
          <Link href="/" aria-label="Home" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-black text-white text-sm tracking-tighter shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              JD
            </div>
            <div className="hidden md:block">
              <span className={`block font-black text-xs uppercase tracking-[0.2em] leading-none mb-1 transition-colors ${isScrolled ? 'text-slate-900' : 'text-foreground'}`}>Jinal Dod</span>
              <span className={`block font-bold text-[8px] uppercase tracking-widest leading-none ${isScrolled ? 'text-slate-500' : 'text-slate-500 dark:text-slate-400'}`}>Odoo Expert</span>
            </div>
          </Link>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-12">
          {[
            { name: "Home", href: "#home" },
            { name: "Skills", href: "#skills" },
            { name: "Experience", href: "#experience" },
            { name: "Education", href: "#education" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors capitalize ${isScrolled ? 'text-slate-600 hover:text-violet-600' : 'text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle Area */}
        <div className="flex justify-end pr-4">
          <ThemeToggle isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  );
}