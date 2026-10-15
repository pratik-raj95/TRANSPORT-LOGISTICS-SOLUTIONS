"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { ArrowRight, Phone, MapPin, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-navy-950 text-white"
    >
      {/* Background Image: Freight Truck on Highway */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.jpg"
          alt="Heavy freight transport truck driving on open highway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Sophisticated Dark Navy Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
        <div className="absolute inset-0 bg-navy-950/40" />

        {/* Subtle Animated Road Lines / Highway Light Streaks Effect */}
        <div className="absolute inset-x-0 bottom-0 h-40 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute bottom-6 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric-500 to-transparent animate-pulse" />
          <div className="absolute bottom-14 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tls-red to-transparent opacity-75" />
          <div className="absolute bottom-20 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 mb-6 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-tls-red animate-ping" />
            <span>{SITE_CONFIG.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Moving Your Business{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Forward.
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-tls-red rounded-full opacity-90" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-2xl mb-8 font-normal">
            {SITE_CONFIG.heroDescription}
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark shadow-lg shadow-tls-red/30 transition-all duration-200 transform hover:-translate-y-0.5 text-base"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 active:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-200 text-base"
            >
              <span>Explore Our Services</span>
            </a>

            <a
              href={SITE_CONFIG.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-medium text-slate-200 hover:text-white transition-colors text-sm sm:hidden"
            >
              <Phone className="w-4 h-4 text-tls-red" />
              <span>Call: {SITE_CONFIG.phone}</span>
            </a>
          </div>

          {/* Supporting line & Trust indicators */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm font-semibold tracking-wide text-slate-300 italic">
              &ldquo;{SITE_CONFIG.supportingLine}&rdquo;
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tls-red" />
                <span>Dedicated Freight Coordination</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-electric-400" />
                <span>Direct B2B Service</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Jhajjar, Haryana Hub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
