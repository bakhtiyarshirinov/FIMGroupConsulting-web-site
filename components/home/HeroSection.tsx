"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FloatingShapes } from "@/components/shared/FloatingShapes";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-dark flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(184,150,62,0.08)_0%,transparent_100%)]" />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex"
        >
          <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.25em] uppercase font-inter font-medium border border-gold/25 bg-gold/5 px-5 py-2 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            QT-0135 | VÖEN: 3105651911
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="font-playfair font-bold leading-tight tracking-tight">
            <span className="block text-white text-5xl md:text-7xl lg:text-[88px] mb-2">
              FİM GROUP
            </span>
            <span className="block text-gold-gradient text-5xl md:text-7xl lg:text-[88px]">
              CONSULTİNG
            </span>
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="text-gray-300 text-xl md:text-2xl font-inter font-light tracking-wide mb-12 max-w-2xl mx-auto"
        >
          Peşəkar Qiymətləndirmə Xidmətləri
          <span className="block text-sm text-gray-500 mt-2 tracking-[0.2em] uppercase">
            Профессиональные услуги оценки
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/elaqe"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-white font-inter font-semibold rounded-full transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:scale-105"
          >
            Bizimlə əlaqə
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/xidmetler"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/40 bg-gold/5 hover:bg-gold/10 hover:border-gold/60 text-gold font-inter font-medium rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Xidmətlərimiz
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { label: "İllik təcrübə", value: "10+" },
            { label: "Müştərilər", value: "500+" },
            { label: "Layihələr", value: "1200+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-playfair text-3xl font-bold text-gold-gradient">
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs mt-1 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Aşağı</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  );
}
