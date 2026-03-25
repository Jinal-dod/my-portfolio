"use client";
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";
import CursorGlow from "./components/CursorGlow";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      
      <Hero />
      <Expertise />
      <Experience />
      <Education />
      <ContactForm />

      <footer className="py-8 text-center border-t border-border-color bg-background relative z-10 text-slate-500">
        <div className="text-[10px] uppercase font-bold tracking-widest">
          © {new Date().getFullYear()} JINAL DOD
        </div>
      </footer>
    </main>
  );
}