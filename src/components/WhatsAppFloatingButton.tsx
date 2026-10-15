"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { MessageSquare, X } from "lucide-react";

export function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Optional dismissible prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-xl text-xs text-navy-950 dark:text-white">
          <span>Need quick freight coordination?</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Direct WhatsApp Chat with TLS Transport Logistics Solutions"
      >
        <span className="sr-only">Contact on WhatsApp</span>
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none group-hover:opacity-0" />
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
}
