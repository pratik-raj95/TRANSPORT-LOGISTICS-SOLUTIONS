"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { MapPin, Phone, MessageSquare, ArrowUp, ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          {/* Brand & Address Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo in clean white container preserving original proportions */}
            <Link href="/" className="inline-flex items-center gap-3">
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
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-[10px] tracking-wider uppercase font-medium text-slate-400">
                  {SITE_CONFIG.brandDescriptor}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing dependable road transportation, dedicated full truckload capacity, and structured cargo coordination from our operational hub at MET City, Jhajjar, Haryana.
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
                  {SITE_CONFIG.phoneDisplay}
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

          {/* Quick Navigation (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-1 text-tls-red hover:underline font-semibold"
                >
                  <span>Request Quote</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Logistics Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SITE_CONFIG.services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-tls-red" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-electric-400 hover:underline font-semibold inline-flex items-center gap-1 pt-1"
                >
                  <span>View All 12 Services</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Fleet & Corridors (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Fleet & Locations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SITE_CONFIG.fleet.slice(0, 4).map((f) => (
                <li key={f.id}>
                  <Link
                    href="/fleet"
                    className="hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-500" />
                    <span>{f.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-navy-900">
              <p className="text-[11px] text-slate-500 leading-normal">
                Operational dispatch handled directly from MET City, Jhajjar, Haryana. All commercial freight movements subject to formal quotation and vehicle alignment.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {SITE_CONFIG.companyName}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-800 transition-colors shadow-sm"
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
