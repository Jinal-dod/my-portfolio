"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function TiltCard({ children, className = "", isActive = false, onClick }: TiltCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ 
        rotateY: 10, 
        rotateX: -10, 
        scale: 1.02,
        z: 20
      }}
      whileTap={{ 
        scale: 0.98,
        rotateX: 0,
        rotateY: 0
      }}
      animate={{
        scale: isActive ? 1.05 : 1,
        boxShadow: isActive 
          ? "0 30px 60px -12px rgba(139, 92, 246, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)" 
          : "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
        borderColor: isActive ? "rgba(139, 92, 246, 0.4)" : "rgba(15, 23, 42, 0.08)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 25,
        mass: 0.8
      }}
      className={`glass p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-300 cursor-pointer ${isActive ? 'z-50 ring-1 ring-violet-500/20' : ''} ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/5 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
      
      {/* 3D Content Wrapper */}
      <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
        {children}
      </div>

      {/* Subtle border shine */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}