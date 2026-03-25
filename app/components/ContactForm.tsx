"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "205c42f7-28b5-4cb4-830a-528a4554c7b9"; 

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    
    data.access_key = ACCESS_KEY;
    data.from_name = "Portfolio Contact Form";
    data.subject = `New Message from ${data.name}`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      
      if (json.success) {
        setResult({
          success: true,
          message: "Thank you! Your message has been sent."
        });
        (event.target as HTMLFormElement).reset();
      } else {
        setResult({
          success: false,
          message: json.message || "Failed to send message."
        });
      }
    } catch (error) {
      setResult({
        success: false,
        message: "Network error. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative max-w-6xl mx-auto px-6 z-10 scroll-mt-24">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        {/* Left Side: Screenshot matching text */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Contact</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
            I&apos;m currently looking to join a dynamic ERP solutions team that values high-performance Odoo implementations and scalable business architecture. or have a project in mind? Let&apos;s connect.
          </p>
          <a href="mailto:jinaldod8151@gmail.com" className="text-violet-500 dark:text-violet-300 font-medium hover:text-violet-600 dark:hover:text-white transition-colors text-sm mb-8 block">
            jinaldod8151@gmail.com
          </a>
          
          {/* Icons */}
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/jinal-dod-8956b716a/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border-color flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-violet-500 dark:hover:text-white hover:bg-violet-500/5 transition-all">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Right Side: Working Form */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {result?.success ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 glass rounded-2xl text-center"
              >
                <div className="text-3xl mb-3">✨</div>
                <h4 className="text-foreground font-medium mb-1">Message Sent!</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{result.message}</p>
                <button
                  onClick={() => setResult(null)}
                  className="px-4 py-2 text-xs font-semibold text-foreground border border-border-color rounded-full hover:bg-violet-500/5 transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required name="name" type="text" placeholder="Your Name"
                    className="w-full px-4 py-3 bg-card-bg border border-border-color rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all text-foreground placeholder-slate-500 text-sm" 
                  />
                  <input 
                    required name="email" type="email" placeholder="Email Address"
                    className="w-full px-4 py-3 bg-card-bg border border-border-color rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all text-foreground placeholder-slate-500 text-sm" 
                  />
                </div>
                <textarea 
                  required name="message" rows={3} placeholder="Your Message..."
                  className="w-full px-4 py-3 bg-card-bg border border-border-color rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all text-foreground placeholder-slate-500 text-sm resize-none" 
                />
                <button
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-violet-600 text-white rounded-xl font-medium text-sm hover:bg-violet-700 transition-all disabled:opacity-50 shadow-lg shadow-violet-500/20"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
