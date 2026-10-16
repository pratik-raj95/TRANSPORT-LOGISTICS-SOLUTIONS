"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import { ArrowRight, Truck, ShieldCheck, HeartHandshake, Phone, ArrowUpRight, MapPin } from "lucide-react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const valueHighlights = [
    { title: "Reliable Road Transportation", desc: "Commercial Freight & FTL", icon: Truck },
    { title: "MET City Jhajjar Hub", desc: "Central Operations Desk", icon: MapPin },
    { title: "Direct Human Coordination", desc: "Proactive Milestone Updates", icon: HeartHandshake },
    { title: "Disciplined Fleet Placement", desc: "Safe Lashing & Highway Care", icon: ShieldCheck },
  ];

  // Staggered entrance animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-20 lg:pt-32 lg:pb-20 overflow-hidden bg-navy-950 text-white"
    >
      {/* 
        Cinematic Background: Heavy Freight Truck on Sunset Highway
        Hardware-accelerated continuous subtle zoom & pan effect
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -inset-4 sm:-inset-8 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] h-[calc(100%+2rem)] sm:h-[calc(100%+4rem)]"
          initial={shouldReduceMotion ? { scale: 1, x: 0 } : { scale: 1, x: 0 }}
          animate={
            shouldReduceMotion
              ? { scale: 1, x: 0 }
              : {
                  scale: [1, 1.055, 1],
                  x: [0, -14, 0],
                }
          }
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image
            src="/images/hero-sunset-truck.jpg"
            alt="TLS Freight truck in transit on national highway"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] md:object-[62%_center] lg:object-right select-none"
          />
        </motion.div>

        {/* Directional Dark Gradient Scrim: Deep navy readability scrim on text (left), cinematic reveal on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/92 md:via-navy-950/80 to-navy-950/45 lg:to-navy-950/25" />

        {/* Vertical Top & Bottom Scrims: Seamless blend with navbar and next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/75" />

        {/* Restrained Red Ambient Glows complementing TLS branding */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-tls-red/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-electric-500/10 blur-[90px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 right-10 w-96 h-96 rounded-full bg-tls-red/10 blur-[110px] pointer-events-none"
        />

        {/* Subtle Highway Velocity Light Accents */}
        <div className="absolute inset-x-0 bottom-0 h-40 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute bottom-6 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-tls-red/60 to-transparent" />
          <div className="absolute bottom-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-400/40 to-transparent" />
        </div>
      </div>

      {/* Main Rebalanced Hero Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          className="max-w-3xl lg:max-w-[44rem] xl:max-w-[50rem]"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide sm:tracking-wider uppercase shadow-inner">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-tls-red animate-ping" />
              <span>{SITE_CONFIG.eyebrow}</span>
            </div>
          </motion.div>

          {/* Headline with distinctive TLS Red treatment */}
          <motion.h1
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.75rem] font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.08] mb-5 sm:mb-6 drop-shadow-sm"
          >
            Moving Your{" "}
            <span className="inline-block text-tls-red underline decoration-tls-red/40 decoration-4 underline-offset-8">
              Business Forward.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-[1.22rem] text-slate-200/95 leading-relaxed max-w-2xl xl:max-w-3xl mb-8 sm:mb-10 font-normal"
          >
            {SITE_CONFIG.heroDescription}
          </motion.p>

          {/* Primary & Secondary CTAs with refined interactive transitions */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/contact#quote"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark shadow-xl shadow-tls-red/30 hover:shadow-tls-red/45 transition-all duration-200 text-base sm:text-lg w-full sm:w-auto"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 backdrop-blur-md border border-white/25 hover:border-white/40 transition-all duration-200 text-base sm:text-lg w-full sm:w-auto"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Direct call option on mobile devices */}
            <a
              href={SITE_CONFIG.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-slate-200 hover:text-white transition-colors text-sm sm:hidden border border-white/20 bg-navy-950/70 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-tls-red" />
              <span>Call: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </motion.div>

          {/* 4 Trust & Business Highlights anchored at the base of the hero */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl lg:max-w-4xl"
          >
            {valueHighlights.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-3 sm:p-3.5 rounded-xl bg-navy-950/60 hover:bg-navy-900/70 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-200 text-left"
                >
                  <div className="w-7 h-7 rounded-lg bg-tls-red/20 text-tls-red border border-tls-red/30 flex items-center justify-center mb-2">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
