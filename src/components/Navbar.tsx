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
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section in viewport
      const sections = ["hero", "about", "services", "why-tls", "process", "contact"];
      const scrollPosition = window.scrollY + 140;

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
            ? "bg-white/95 dark:bg-navy-950/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-navy-800/80 py-3"
            : "bg-navy-950/60 dark:bg-navy-950/80 backdrop-blur-sm border-b border-white/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {SITE_CONFIG.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? isScrolled
                          ? "text-tls-red dark:text-tls-red font-semibold bg-red-50 dark:bg-navy-900"
                          : "text-white font-semibold bg-white/10"
                        : isScrolled
                        ? "text-slate-700 dark:text-slate-200 hover:text-navy-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-900/60"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Items */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Phone quick link (tablet / desktop) */}
              <a
                href={SITE_CONFIG.phoneLink}
                className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  isScrolled
                    ? "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-900 border border-slate-200 dark:border-navy-800"
                    : "text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15"
                }`}
                title={`Call ${SITE_CONFIG.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-tls-red" />
                <span className="hidden xl:inline">{SITE_CONFIG.phone}</span>
                <span className="xl:hidden">Call Now</span>
              </a>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Primary Quote CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark rounded-xl shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4 hidden xs:inline" />
              </a>

              {/* Mobile Menu Button */}
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

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-navy-950/70 backdrop-blur-sm transition-opacity"
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
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-navy-800">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-6 flex flex-col gap-1">
                {SITE_CONFIG.navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-red-50 dark:bg-navy-900 text-tls-red dark:text-tls-red font-semibold"
                          : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-900/60"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 border-t border-slate-200 dark:border-navy-800 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.phoneLink}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-navy-900 rounded-xl border border-slate-200 dark:border-navy-800"
              >
                <Phone className="w-4 h-4 text-tls-red" />
                <span>{SITE_CONFIG.phone}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark rounded-xl shadow"
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
