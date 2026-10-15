"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track scroll position for navbar styling & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Check current section in viewport
      const sections = ["hero", "services", "about", "why-tls", "process", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-navy-950/90 backdrop-blur-md shadow-lg shadow-navy-950/5 dark:shadow-black/20 border-b border-slate-200/80 dark:border-navy-800/80 py-2.5"
            : "bg-navy-950/70 backdrop-blur-md border-b border-white/10 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* 1. Left: TLS Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* 2. Center: Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-navy-900/60 p-1.5 rounded-full border border-slate-200/70 dark:border-navy-700/60 backdrop-blur-sm"
              aria-label="Main Navigation"
            >
              {SITE_CONFIG.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white font-semibold bg-tls-red shadow-sm shadow-tls-red/30"
                        : isScrolled
                        ? "text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-navy-800/60"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* 3. Right: Phone, Theme Toggle & Quote CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Phone quick link with icon */}
              <a
                href={SITE_CONFIG.phoneLink}
                className={`hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isScrolled
                    ? "text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-navy-900/80 hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-200/80 dark:border-navy-700"
                    : "text-white/95 bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-sm"
                }`}
                title={`Call TLS Operations: ${SITE_CONFIG.phone}`}
              >
                <div className="w-5 h-5 rounded-full bg-tls-red/10 dark:bg-tls-red/20 text-tls-red flex items-center justify-center">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="hidden xl:inline">{SITE_CONFIG.phone}</span>
                <span className="xl:hidden">Call Desk</span>
              </a>

              {/* Circular Theme Toggle */}
              <ThemeToggle />

              {/* Primary Red "Get a Quote" Button */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark rounded-full shadow-md shadow-tls-red/25 hover:shadow-lg hover:shadow-tls-red/35 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Accessible Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden inline-flex items-center justify-center p-2 rounded-xl transition-colors ${
                  isScrolled
                    ? "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-900"
                    : "text-white hover:bg-white/10"
                }`}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (z-[60] so it sits cleanly above floating elements) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] lg:hidden bg-navy-950/75 backdrop-blur-md transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        >
          <div
            className="fixed top-0 right-0 w-full max-w-xs sm:max-w-sm h-full bg-white dark:bg-navy-950 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-slate-200 dark:border-navy-800"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-navy-800">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {SITE_CONFIG.navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-tls-red text-white shadow-sm shadow-tls-red/25"
                          : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-900"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-slate-200 dark:border-navy-800 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.phoneLink}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-navy-900 rounded-xl border border-slate-200 dark:border-navy-800"
              >
                <Phone className="w-4 h-4 text-tls-red" />
                <span>{SITE_CONFIG.phone}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark rounded-full shadow-md shadow-tls-red/30"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
