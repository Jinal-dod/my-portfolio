"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard from "./TiltCard";

const technicalSkills = [
  "ERP Development", "Odoo v10-v19", "Python", "PostgreSQL", "MySQL", 
  "Git", "API Integration", "XML", "JSON", "Javascript", "Django", "UI/UX Design"
];

const expertiseCards = [
  {
    icon: "⚡",
    title: "Odoo Specialist",
    desc: "Full-cycle ERP implementation & customization",
    color: "text-blue-500",
    gradient: "from-blue-600/20 to-transparent"
  },
  {
    icon: "🐍",
    title: "Python Expert",
    desc: "Logic optimization & robust backend engineering",
    color: "text-purple-500",
    gradient: "from-purple-600/20 to-transparent"
  },
  {
    icon: "📊",
    title: "ERP Architect",
    desc: "Designing scalable business infrastructure",
    color: "text-blue-400",
    gradient: "from-indigo-600/20 to-transparent"
  },
  {
    icon: "🔌",
    title: "API Integrations",
    desc: "Seamless third-party connectivity solutions",
    color: "text-cyan-400",
    gradient: "from-cyan-600/20 to-transparent"
  }
];

export default function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16 border-l-2 border-violet-500/30 pl-8"
        >
          <p className="text-violet-400 text-xs uppercase tracking-[0.2em] font-bold mb-3">Core Proficiency</p>
          <h2 className="text-4xl md:text-7xl font-black text-foreground tracking-tight uppercase leading-[0.9]">
            Technical <br /> <span className="text-violet-500">Expertise</span>
          </h2>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, i) => (
              <motion.span 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2 rounded-xl border border-border-color bg-card-bg text-slate-500 dark:text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest hover:text-violet-400 hover:border-violet-500/30 transition-all cursor-default shadow-lg"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Swipeable Expertise Cards */}
        <div className="relative group">
          <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-4 flex items-center gap-2">
            Swipe to Explore <span className="animate-pulse">→</span>
          </p>
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory">
            {expertiseCards.map((card, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] md:w-[400px] snap-center">
                <TiltCard className={`h-64 flex flex-col justify-center p-10 glass rounded-[2.5rem] relative overflow-hidden group/card`}>
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${card.gradient} blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700`} />
                  
                  <div className={`text-5xl mb-6 ${card.color} transform group-hover/card:scale-110 transition-transform duration-500`}>
                    {card.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-foreground mb-3 tracking-tighter uppercase">
                    {card.title}
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed font-light">
                    {card.desc}
                  </p>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
