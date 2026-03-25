"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = mounted && isScrolled 
    ? "py-4 bg-slate-900 border-b border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-[1000]" 
    : "py-8 bg-transparent z-[1000]";

  const links = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClasses}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="group flex items-center gap-3 relative z-[60]">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-black text-white text-sm tracking-tighter shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
            JD
          </div>
          <div className="block">
            <span className={`block font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] leading-none mb-1 transition-colors ${isOpen || isScrolled ? 'text-white' : 'text-slate-900 dark:text-white'}`}>Jinal Dod</span>
            <span className={`block font-bold text-[7px] sm:text-[8px] uppercase tracking-widest leading-none ${isOpen || isScrolled ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>Odoo Expert</span>
          </div>
        </Link>

        {/* Desktop Links - Definitively hidden on mobile */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[11px] uppercase tracking-widest font-black transition-colors ${isScrolled ? 'text-slate-400 hover:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-violet-500 dark:hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Area: Theme + Hamburger */}
        <div className="flex items-center gap-4 relative z-[2010]">
          <div className={isOpen || isScrolled ? 'text-white' : ''}>
            <ThemeToggle isScrolled={isScrolled} />
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-white/10 text-white' : (isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white')}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-slate-950 transition-all duration-500 z-[2000] flex flex-col items-center gap-6 pt-32 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {links.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`text-xl font-black uppercase tracking-tighter text-white transition-all duration-500 hover:text-violet-400 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}