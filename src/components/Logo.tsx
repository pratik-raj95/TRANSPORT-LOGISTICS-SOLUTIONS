"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

interface LogoProps {
  className?: string;
  variant?: "navbar" | "footer";
}

export function Logo({ className = "", variant = "navbar" }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 ${className}`}
      aria-label={`${SITE_CONFIG.companyName} Home`}
    >
      {/* 
        Clean white badge container preserving original logo proportions, 
        crisp rendering, and appearance across both light and dark themes.
      */}
      <div className="relative inline-flex items-center justify-center bg-white rounded-lg px-2.5 py-1 shadow-sm border border-slate-200/80 transition-transform duration-300 group-hover:scale-[1.02]">
        <Image
          src="/images/tls-logo.jpg"
          alt="TLS - Transport Logistics Solutions"
          width={isFooter ? 130 : 115}
          height={isFooter ? 61 : 54}
          className="h-9 sm:h-10 w-auto object-contain block"
          priority
        />
      </div>

      <div className="hidden sm:flex flex-col text-left">
        <span className="font-bold text-sm tracking-tight text-navy-950 dark:text-white leading-tight">
          {SITE_CONFIG.brandName}
        </span>
        <span className="text-[10px] tracking-wider uppercase font-medium text-slate-500 dark:text-slate-400 leading-none">
          {SITE_CONFIG.brandDescriptor}
        </span>
      </div>
    </Link>
  );
}
