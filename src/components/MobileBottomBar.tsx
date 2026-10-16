"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Phone, MessageSquare, ArrowUpRight } from "lucide-react";

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-t border-slate-200/90 dark:border-navy-800/90 px-3 py-2 shadow-2xl transition-colors">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* 1. Call Button */}
        <a
          href={SITE_CONFIG.phoneLink}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-navy-950 dark:text-white active:scale-95 transition-all text-center"
          title="Call TLS Operations Desk"
        >
          <Phone className="w-4 h-4 text-tls-red mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Call Desk</span>
        </a>

        {/* 2. WhatsApp Button */}
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 active:scale-95 transition-all text-center"
          title="Direct WhatsApp Inquiry"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">WhatsApp</span>
        </a>

        {/* 3. Get Quote Button */}
        <Link
          href="/contact#quote"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-tls-red text-white shadow-md shadow-tls-red/25 active:scale-95 transition-all text-center"
        >
          <div className="flex items-center gap-0.5">
            <span className="text-[11px] font-bold leading-tight">Get Quote</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </div>
  );
}
