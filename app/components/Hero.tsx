"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const y3 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 pt-32 pb-20 overflow-hidden scroll-mt-24">
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Background Shapes with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen" 
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl w-full px-4 flex flex-col md:flex-row items-center gap-12 md:gap-24"
      >
        {/* Image Area */}
        <div className="relative flex-shrink-0 order-1 md:order-2">
          <Link href="#experience" className="block cursor-pointer">
            <motion.div 
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, 2, -2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-violet-500/40 shadow-[0_0_80px_rgba(139,92,246,0.3)] relative z-10 bg-[#0c0c1d] group/img"
            >
               <Image 
                 src="/profile.jpg" 
                 alt="Jinal Dod" 
                 width={400} 
                 height={400} 
                 className="object-cover object-top w-full h-full transform group-hover/img:scale-110 transition-transform duration-1000"
                 priority
               />
               {/* Shine Effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover/img:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
          </Link>
          {/* Decorative Sphere Elements */}
          <div className="absolute inset-0 -m-8 rounded-full border border-violet-500/30 animate-[pulse_5s_infinite] pointer-events-none" />
          <div className="absolute inset-0 -m-16 rounded-full border border-indigo-500/20 animate-[pulse_8s_infinite] pointer-events-none" />
        </div>

        {/* Big Heading & Description */}
        <div className="text-left w-full space-y-8 order-2 md:order-1 flex-1">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-8xl font-black text-foreground tracking-tight leading-none mb-4"
            >
              Jinal Dod<span className="text-violet-500">.</span>
            </motion.h1>
            
            <h3 className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300 mb-8">
              Senior Odoo Developer | Python & JavaScript Expert | ERP Implementation Specialist | Integration Specialist
            </h3>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed mb-6">
              I&apos;m currently seeking a <span className="text-violet-500">Senior Odoo Developer</span> role within a dynamic ERP solutions team that values high-performance implementations and scalable architecture.
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-10">
              Specialized in end-to-end Odoo implementation, complex API integrations, and architecting robust ERP solutions that drive business efficiency.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all hover:scale-105 active:scale-95"
              >
                Contact Me
              </a>
              <a 
                href="/Jinal_Dod_Resume.pdf" 
                download
                className="px-8 py-4 bg-transparent hover:bg-violet-500/5 text-foreground font-bold rounded-2xl border-2 border-violet-500/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group/resume shadow-[0_0_15px_rgba(139,92,246,0.1)]"
              >
                <svg 
                  className="w-5 h-5 group-hover/resume:translate-y-0.5 transition-transform text-violet-500" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/jinal-dod-8956b716a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-foreground font-bold rounded-2xl border border-border-color transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}