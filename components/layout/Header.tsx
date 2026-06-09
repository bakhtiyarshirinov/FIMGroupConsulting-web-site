"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Ana Səhifə" },
  { href: "/xidmetler", label: "Xidmətlər" },
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/xeberler", label: "Xəbərlər" },
  { href: "/elaqe", label: "Əlaqə" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/92 backdrop-blur-xl border-b border-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-white.svg"
              alt="FİM GROUP CONSULTİNG"
              width={180}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-inter text-sm font-medium tracking-wide transition-colors duration-200 group ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/elaqe"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 hover:bg-gold hover:border-gold text-gold hover:text-white font-inter text-sm font-medium rounded-full transition-all duration-300 hover:shadow-gold-sm"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Əlaqə
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menyunu aç/bağla"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-dark/96 backdrop-blur-xl border-b border-gold/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-inter text-sm transition-all duration-200 ${
                    pathname === link.href
                      ? "text-gold bg-gold/10"
                      : "text-gray-300 hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/elaqe"
                className="block px-4 py-3 mt-2 bg-gold text-white rounded-lg font-inter text-sm font-medium text-center"
              >
                Bizimlə Əlaqə
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
