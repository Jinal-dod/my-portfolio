"use client";
import { motion } from "framer-motion";

const education = [
  {
    title: "Bachelor of Engineering",
    institution: "Shantilal Shah Government Engineering College",
    period: "2016 - 2020",
    major: "Information Technology",
    points: [
      "Information Technology major with a focus on scalable architecture.",
      "Gained a solid foundation in computer science principles.",
      "Specialized in database management and mathematics."
    ],
    tech: ["IT", "Computer Science", "Engineering"],
    color: "from-emerald-600 to-teal-600"
  },
  {
    title: "Higher Secondary Education",
    institution: "Smt. R.C. Patel Secondary & Higher Secondary School",
    period: "2014 - 2016",
    major: "Science Stream",
    points: [
      "Completed Higher Secondary Education with a focus on Science.",
      "Developed strong analytical and problem-solving skills."
    ],
    tech: ["Science", "Mathematics", "Physics"],
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Languages",
    institution: "Proficiency",
    period: "Native & Professional",
    major: "Communication",
    points: [
      "English: Professional Working Proficiency",
      "Hindi: Full Professional Proficiency",
      "Gujarati: Native or Bilingual Proficiency"
    ],
    tech: ["English", "Hindi", "Gujarati"],
    color: "from-violet-600 to-purple-600"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative w-full overflow-hidden bg-background scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-2 border-emerald-500/30 pl-8 text-left"
        >
          <p className="text-emerald-400 text-xs uppercase tracking-[0.2em] font-bold mb-3">Academic Foundation</p>
          <h2 className="text-4xl md:text-7xl font-black text-foreground tracking-tight uppercase leading-[0.9]">
            Education & <br /> <span className="text-emerald-500">Languages</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative p-8 h-full glass rounded-[2.5rem] flex flex-col hover:border-emerald-500/20 transition-all duration-700 overflow-hidden">
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />
                
                <div className="mb-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2">{item.period}</p>
                  <h3 className="text-2xl font-black text-foreground mb-1 group-hover:text-emerald-400 transition-colors leading-tight">{item.title}</h3>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{item.institution}</p>
                </div>

                <ul className="space-y-4 flex-1 mb-8">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.3)]`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 flex-wrap pt-6 border-t border-border-color">
                  {item.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-emerald-500/5 dark:bg-white/5 rounded-full text-[9px] uppercase tracking-widest font-black text-slate-500 dark:text-slate-400 border border-border-color group-hover:border-emerald-500/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
