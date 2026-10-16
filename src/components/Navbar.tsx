"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/config/site";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Phone, ArrowUpRight, MapPin, MessageSquare, Clock } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  // Handle escape key
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
      {/* 1. Top Utility Contact Strip (Visible on desktop & tablet) */}
      <div className="hidden md:block bg-navy-950 text-slate-300 border-b border-navy-800/80 text-xs py-2 relative z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-tls-red flex-shrink-0" />
              <span className="truncate max-w-xs xl:max-w-md">
                MET City, Jhajjar, Haryana 124515
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-electric-400 flex-shrink-0" />
              <span>{SITE_CONFIG.workingHours}</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-slate-300">
            <a
              href={SITE_CONFIG.phoneLink}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors font-medium"
              title={`Call TLS Operations: ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-tls-red" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <span className="text-navy-800">|</span>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-950/5 dark:shadow-black/30 border-b border-slate-200/80 dark:border-navy-800/80 py-2.5"
            : "bg-navy-950/80 dark:bg-navy-950/90 backdrop-blur-md border-b border-white/10 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: TLS Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-100/70 dark:bg-navy-900/70 p-1 xl:p-1.5 rounded-full border border-slate-200/70 dark:border-navy-700/60 backdrop-blur-sm"
              aria-label="Main Navigation"
            >
              {SITE_CONFIG.navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-2.5 xl:px-3.5 py-1 xl:py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "text-white font-bold bg-tls-red shadow-sm shadow-tls-red/30"
                        : isScrolled
                        ? "text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-navy-800/60"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Phone, Theme Toggle & Quote CTA */}
            <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-3 flex-shrink-0">
              {/* Phone quick link with icon */}
              <a
                href={SITE_CONFIG.phoneLink}
                className={`hidden xl:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isScrolled
                    ? "text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-navy-900/80 hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-200/80 dark:border-navy-700"
                    : "text-white/95 bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-sm"
                }`}
                title={`Call Operations Desk: ${SITE_CONFIG.phoneDisplay}`}
              >
                <div className="w-5 h-5 rounded-full bg-tls-red/15 dark:bg-tls-red/25 text-tls-red flex items-center justify-center">
                  <Phone className="w-3 h-3" />
                </div>
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Primary Red "Get a Quote" Button */}
              <Link
                href="/contact#quote"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 xl:px-5 py-1.5 xl:py-2 text-xs xl:text-sm font-bold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark rounded-full shadow-md shadow-tls-red/25 hover:shadow-lg hover:shadow-tls-red/35 transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

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

      {/* 3. Mobile Slide-out Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] lg:hidden bg-navy-950/80 backdrop-blur-md transition-opacity"
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
              <nav className="mt-6 flex flex-col gap-1">
                {SITE_CONFIG.navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
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
                    </Link>
                  );
                })}
              </nav>

              {/* Office Details Inside Menu */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 text-xs space-y-2">
                <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-tls-red flex-shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.address}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Clock className="w-4 h-4 text-electric-500 flex-shrink-0" />
                  <span>{SITE_CONFIG.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-slate-200 dark:border-navy-800 flex flex-col gap-2.5">
              <a
                href={SITE_CONFIG.phoneLink}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-navy-900 rounded-xl border border-slate-200 dark:border-navy-800"
              >
                <Phone className="w-4 h-4 text-tls-red" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm shadow-emerald-600/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Operations</span>
              </a>

              <Link
                href="/contact#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark rounded-xl shadow-md shadow-tls-red/30"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
