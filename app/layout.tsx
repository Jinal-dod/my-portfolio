import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Providers } from "./components/Providers";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jinal Dod | Senior Odoo Developer",
  description: "Senior Odoo Developer with over 4 years of experience crafting high-performance ERP solutions, custom modules, and seamless API integrations.",
  keywords: ["Odoo", "Python", "ERP", "Developer", "Jinal Dod", "Odoo v19", "API Integration"],
  authors: [{ name: "Jinal Dod" }],
  openGraph: {
    title: "Jinal Dod | Senior Odoo Developer",
    description: "Building the future of ERP with precision. Specializing in Odoo v10 to v19.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased selection:bg-violet-500/30 selection:text-violet-200 font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}