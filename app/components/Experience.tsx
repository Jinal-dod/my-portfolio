"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Odoo Developer",
    company: "Wanbuffer Services",
    period: "09/2025 - Current",
    points: [
      <>Led design, development, and customization of <span className="text-violet-400 font-bold">Odoo ERP solutions</span> across Inventory, Manufacturing, Sales, Purchase, and Accounting modules.</>,
      <>Developed advanced <span className="text-violet-400 font-bold">Activity Calendar</span> functionality for improved task planning, scheduling, and operational tracking.</>,
      <>Implemented end-to-end <span className="text-violet-400 font-bold">eCommerce integration</span> with <span className="text-violet-400 font-bold">Shopify</span> and <span className="text-violet-400 font-bold">ShipStation</span>, automating order lifecycle.</>,
      <>Built reliable <span className="text-violet-400 font-bold">real-time data sync</span> mechanisms with mapping, validation, and retry logic.</>,
      <>Designed and implemented complete <span className="text-violet-400 font-bold">3PL logistics workflows</span> covering inbound, storage, picking, and packing.</>
    ],
    tech: ["Odoo JS", "Python", "PostgreSQL", "React", "APIs"],
    color: "from-violet-600 to-indigo-600",
    logo: "/wanbuffer_logo.png"
  },
  {
    title: "Odoo Developer",
    company: "Kanak Infosystems L.L.P.",
    period: "08/2023 - 08/2025",
    points: [
      <>Designed and implemented <span className="text-blue-400 font-bold">custom Odoo modules</span> across sales, purchase, accounting, inventory, and POS.</>,
      <>Enhanced <span className="text-blue-400 font-bold">ERP workflows</span> through custom APIs and integrated <span className="text-blue-400 font-bold">third-party payment gateways</span>.</>,
      <>Developed <span className="text-blue-400 font-bold">QWeb-based UI</span> templates for intuitive and responsive user experiences.</>,
      <>Led as a <span className="text-blue-400 font-bold">dedicated developer</span> on key client projects, ensuring timely delivery.</>,
      <>Conducted <span className="text-blue-400 font-bold">on-site client visits</span> (Dubai) for process mapping and requirement gathering.</>
    ],
    tech: ["Odoo", "API Integration", "QWeb", "Python"],
    color: "from-indigo-600 to-blue-600",
    logo: "/kanak_logo.png"
  },
  {
    title: "Odoo Developer",
    company: "Odoo India Pvt. Ltd.",
    period: "08/2021 - 08/2023",
    points: [
      <>Customized and developed <span className="text-pink-400 font-bold">advanced modules</span> for Odoo v13-16.</>,
      <>Implemented value-adding <span className="text-pink-400 font-bold">business features</span> such as POS promotions and forecast reporting.</>,
      <>Enhanced <span className="text-pink-400 font-bold">Many2One (M2O) widget</span> behavior with dynamic filters and contextual domain logic.</>,
      <>Optimized workflows through implementation of <span className="text-pink-400 font-bold">custom automated actions</span> and scheduled jobs.</>,
      <>Upgraded, integrated, and maintained <span className="text-pink-400 font-bold">third-party payment gateways</span> including Klarna and Vipps.</>
    ],
    tech: ["Odoo v13-16", "M2O Widgets", "Payment Gateways", "Python"],
    color: "from-pink-600 to-rose-600",
    logo: "/odoo_logo.png"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 border-l-2 border-violet-500/30 pl-8"
        >
          <p className="text-violet-400 text-xs uppercase tracking-[0.2em] font-bold mb-3">Professional Path</p>
          <h2 className="text-4xl md:text-7xl font-black text-foreground tracking-tight uppercase leading-[0.9]">
            Professional <br /> <span className="text-violet-500">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col group"
            >
              <div className="relative p-8 h-full glass rounded-[2.5rem] flex flex-col hover:border-violet-500/20 transition-all duration-700 overflow-hidden">
                {/* Company Logo Watermark - Full Card Size */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.06] grayscale group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none p-12">
                  <img 
                    src={exp.logo} 
                    alt="" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="mb-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-violet-400 mb-2">{exp.period}</p>
                  <h3 className="text-2xl font-black text-foreground mb-1 group-hover:text-violet-400 transition-colors leading-tight">{exp.title}</h3>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{exp.company}</p>
                </div>

                <ul className="space-y-4 flex-1 mb-8">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.3)]`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 flex-wrap pt-6 border-t border-border-color">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-violet-500/5 dark:bg-white/5 rounded-full text-[9px] uppercase tracking-widest font-black text-slate-500 dark:text-slate-400 border border-border-color group-hover:border-violet-500/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
}