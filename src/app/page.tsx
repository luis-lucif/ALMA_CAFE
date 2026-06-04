"use client";

import { motion, Variants } from "framer-motion";
import { Wine, Sandwich } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Combos", icon: Sandwich, href: "/pdf/combos.pdf" },
  { name: "Tragos", icon: Wine, href: "/pdf/tragos.pdf" },
];

export default function Home() {
  // Variantes para la animación en cascada (Staggered Fade-In)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden px-6 py-12 items-center justify-center">
      {/* Fondo: Gradiente radial súper suave para dar sensación de profundidad */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sand/30 via-cream to-cream"></div>
      
      <div className="z-10 w-full max-w-sm mx-auto flex flex-col flex-1 justify-center">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 flex flex-col items-center"
        >
          {/* Logo Image */}
          <div className="mb-6 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Alma Café & Resto Logo"
              width={240}
              height={240}
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
          <div className="w-12 h-[2px] bg-copper/60 mb-6 rounded-full"></div>
          <h2 className="font-serif text-xl italic text-coffee/90 font-medium">
            Descubre nuestros sabores
          </h2>
        </motion.header>

        {/* Menu Navigation (Grid / Lista de Botones) */}
        <motion.nav 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 w-full"
        >
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center p-4 bg-white/70 backdrop-blur-md rounded-[2rem] border border-sand/40 shadow-sm hover:shadow-md hover:border-copper/30 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center min-w-14 h-14 rounded-full bg-sand/20 text-copper group-hover:bg-copper group-hover:text-white transition-colors duration-300">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                
                {/* Button Text */}
                <span className="ml-5 font-sans font-semibold text-lg text-coffee group-hover:text-copper transition-colors duration-300">
                  {item.name}
                </span>
                
                {/* Minimalist Arrow */}
                <div className="ml-auto pr-2 text-sage/40 group-hover:text-copper transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </motion.nav>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-14 text-center"
        >
          <div className="flex gap-5 justify-center mb-6 text-sage hover:text-copper transition-colors">
            {/* Instagram */}
            <a href="#" className="hover:text-copper transition-colors" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            {/* WhatsApp */}
            <a href="#" className="hover:text-copper transition-colors" aria-label="WhatsApp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>         
        </motion.footer>
      </div>
    </main>
  );
}
