"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import { ArrowRight, Truck, ShieldCheck, HeartHandshake, Phone, ArrowUpRight, MapPin } from "lucide-react";

export function HeroSection() {
  const valueHighlights = [
    { title: "Reliable Road Transportation", desc: "Commercial Freight & FTL", icon: Truck },
    { title: "MET City Jhajjar Hub", desc: "Central Operations Desk", icon: MapPin },
    { title: "Direct Human Coordination", desc: "Proactive Milestone Updates", icon: HeartHandshake },
    { title: "Disciplined Fleet Placement", desc: "Safe Lashing & Highway Care", icon: ShieldCheck },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-navy-950 text-white"
    >
      {/* 
        Background: Realistic Freight Truck on Sunset / Dusk Highway 
        Positioned to the right on desktop, with deep navy gradient on left.
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sunset-truck.jpg"
          alt="Heavy freight truck driving on highway at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center lg:object-right scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 md:via-navy-950/80 to-navy-950/40 lg:to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70" />

        {/* Subtle Animated Road-Light Accents */}
        <div className="absolute inset-x-0 bottom-0 h-44 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute bottom-8 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric-500 to-transparent animate-pulse" />
          <div className="absolute bottom-16 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-tls-red to-transparent opacity-80" />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8 max-w-2xl lg:max-w-none"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 mb-6 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-tls-red animate-ping" />
              <span>{SITE_CONFIG.eyebrow}</span>
            </div>

            {/* Headline with distinctive TLS Red treatment */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Moving Your{" "}
              <span className="text-tls-red underline decoration-tls-red/40 decoration-4 underline-offset-8">
                Business Forward.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-2xl mb-8 font-normal">
              {SITE_CONFIG.heroDescription}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                href="/contact#quote"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark shadow-xl shadow-tls-red/30 transition-all duration-200 transform hover:-translate-y-0.5 text-base"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 backdrop-blur-md border border-white/20 transition-all duration-200 text-base"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300" />
              </Link>

              {/* Direct call on mobile */}
              <a
                href={SITE_CONFIG.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-medium text-slate-200 hover:text-white transition-colors text-sm sm:hidden border border-white/15 bg-navy-950/60"
              >
                <Phone className="w-4 h-4 text-tls-red" />
                <span>Call: {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>

            {/* 4 Trust & Business Highlights */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {valueHighlights.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-3 rounded-xl bg-navy-950/60 backdrop-blur-sm border border-white/10 text-left"
                  >
                    <div className="w-7 h-7 rounded-full bg-tls-red/20 text-tls-red border border-tls-red/30 flex items-center justify-center mb-2">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs sm:text-[13px] font-bold text-slate-100 leading-tight mb-0.5">
                      {val.title}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Floating Brand Statement Badge (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-4 justify-end"
          >
            <div className="p-6 rounded-3xl bg-navy-950/85 backdrop-blur-md border border-white/15 shadow-2xl max-w-xs text-left">
              <div className="w-10 h-10 rounded-full bg-tls-red/20 text-tls-red flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <p className="text-xs uppercase tracking-wider font-semibold text-electric-400 mb-1">
                {SITE_CONFIG.brandName} Operations
              </p>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                &ldquo;{SITE_CONFIG.supportingLine}&rdquo;
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Structured B2B transportation connecting industrial corridors with scheduled line-haul movements and transparent dispatch.
              </p>
              <div className="text-[11px] font-medium text-slate-400 flex items-center gap-1.5 pt-3 border-t border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Active Hub: MET City, Jhajjar</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
