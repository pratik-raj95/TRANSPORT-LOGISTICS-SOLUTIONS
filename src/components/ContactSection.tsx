"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/site";
import { QuoteForm } from "@/components/QuoteForm";
import {
  MapPin,
  Phone,
  MessageSquare,
  ExternalLink,
  Shield,
} from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-navy-950/60 border-t border-slate-200/80 dark:border-navy-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-tls-red/15 text-tls-red text-xs font-bold tracking-wider uppercase mb-3">
            <span>Direct Operations Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-tight mb-4">
            Connect With Our Transport Team
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Whether you require an immediate full truckload assessment, dedicated line-haul planning, or cargo movement coordination, reach out directly to our Jhajjar office.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Official Contact & Company Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-navy-800 text-tls-red flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-400 mb-1">
                    Registered Office & Operations
                  </h3>
                  <p className="text-base font-bold text-navy-950 dark:text-white mb-1">
                    {SITE_CONFIG.companyName}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between">
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-electric-600 dark:text-electric-400 hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-400">MET City, Jhajjar</span>
              </div>
            </div>

            {/* Direct Contact Buttons Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 shadow-sm space-y-4">
              <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-400 mb-2">
                Direct Communication Channels
              </h3>

              {/* Telephone */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200/70 dark:border-navy-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-950/60 text-tls-red flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Direct Voice Line
                    </p>
                    <p className="text-sm sm:text-base font-bold text-navy-950 dark:text-white">
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </div>

                <a
                  href={SITE_CONFIG.phoneLink}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-navy-950 dark:bg-slate-800 hover:bg-slate-800 transition-colors whitespace-nowrap"
                >
                  <span>Call Now</span>
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                      WhatsApp Dispatch Desk
                    </p>
                    <p className="text-sm sm:text-base font-bold text-navy-950 dark:text-white">
                      +91 93116 06860
                    </p>
                  </div>
                </div>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors whitespace-nowrap"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Coordination Assurance Note */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 text-white border border-navy-800 shadow-sm flex items-start gap-4">
              <Shield className="w-6 h-6 text-tls-red flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Commercial Confidentiality
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Consignment details, origin-destination specifics, and commercial billing remain strictly confidential between our coordination team and your enterprise.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
