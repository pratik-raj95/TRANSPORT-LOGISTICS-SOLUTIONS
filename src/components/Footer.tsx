"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { MapPin, Phone, MessageSquare, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          {/* Brand & Address Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo in clean white container preserving original proportions */}
            <div className="inline-flex items-center gap-3">
              <div className="bg-white rounded-lg px-3 py-1.5 shadow-md border border-slate-200">
                <Image
                  src="/images/tls-logo.jpg"
                  alt="TLS - Transport Logistics Solutions"
                  width={130}
                  height={61}
                  className="h-10 w-auto object-contain block"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tight text-white leading-tight">
                  TLS
                </span>
                <span className="text-[11px] tracking-wider uppercase font-medium text-slate-400">
                  Transport Logistics Solutions
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing dependable road transportation and structured cargo coordination for commercial, industrial, and freight clients.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-tls-red flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-electric-400 flex-shrink-0" />
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 93116 06860
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation (Col 6-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Proposed Capabilities (Col 8-12) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Proposed Capabilities
              </h4>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                Editable
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
              {SITE_CONFIG.services.map((service) => (
                <li key={service.id} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tls-red" />
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-navy-900">
              <p className="text-[11px] text-slate-500 leading-normal">
                Registered office at MET City, Jhajjar, Haryana. All inquiries handled directly by operational team.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 {SITE_CONFIG.companyName}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-800 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
