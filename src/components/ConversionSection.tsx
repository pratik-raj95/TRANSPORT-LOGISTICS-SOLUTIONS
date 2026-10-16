"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { ArrowRight, Phone, MessageSquare, ShieldCheck, MapPin } from "lucide-react";

export function ConversionSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-navy-950 text-white">
      {/* Background Image with Dark Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.jpg"
          alt="TLS Commercial Logistics Truck Fleet"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-tls-red" />
            <span>DIRECT OPERATIONS DESK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Ready to Streamline Your{" "}
            <span className="text-tls-red underline decoration-tls-red/40 decoration-4 underline-offset-8">
              Commercial Freight?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Connect directly with our Jhajjar operations team for upfront rate assessments, dedicated vehicle placement, and structured B2B transportation coordination.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link
              href="/contact#quote"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark shadow-xl shadow-tls-red/30 transition-all duration-200 transform hover:-translate-y-0.5 text-base"
            >
              <span>Request a Quote Online</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-bold text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-600 border border-emerald-500/40 transition-all duration-200 text-base"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href={SITE_CONFIG.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 text-base"
            >
              <Phone className="w-4 h-4 text-tls-red" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-tls-red" />
              <span>MET City, Yakubpur, Jhajjar, Haryana</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Direct Phone & WhatsApp Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
