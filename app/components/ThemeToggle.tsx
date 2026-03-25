"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle({ isScrolled = false }: { isScrolled?: boolean }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className={`relative p-2 rounded-xl transition-all group border ${
        isScrolled 
          ? "bg-violet-500/5 border-violet-500/20 hover:bg-violet-500/10" 
          : "bg-violet-500/5 dark:bg-white/5 border-border-color hover:bg-violet-500/10 dark:hover:bg-white/10"
      }`}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {currentTheme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className={`w-6 h-6 ${isScrolled ? 'text-violet-600' : 'text-violet-400'}`} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className={`w-6 h-6 ${isScrolled ? 'text-amber-600' : 'text-amber-500'}`} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}
