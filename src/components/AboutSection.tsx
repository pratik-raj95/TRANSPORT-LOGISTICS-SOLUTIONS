"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Truck, ShieldCheck, HeartHandshake, ArrowRight, MapPin } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      title: "Dependable Transportation",
      description: "Committed to timely transit and disciplined road operations to protect your supply chain consistency.",
      icon: Truck
    },
    {
      title: "Professional Coordination",
      description: "Systematic communication between loading points and receiving facilities to minimize transit friction.",
      icon: ShieldCheck
    },
    {
      title: "Customer-Focused Approach",
      description: "Direct, personal accessibility with prompt responses to quotes, queries, and vehicle dispatch.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-navy-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Subtle Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-tls-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Logistics Visual Card with Red Accent Detail */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-navy-800 bg-slate-100 dark:bg-navy-900 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/images/about-logistics.jpg"
                alt="Modern commercial logistics distribution and dispatch operations"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

              {/* Red-accented decorative top corner tab */}
              <div className="absolute top-0 left-8 w-16 h-1.5 bg-tls-red rounded-b-full shadow-md shadow-tls-red/50" />

              {/* Floating verified badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border border-slate-200/80 dark:border-navy-700 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-tls-red/10 dark:bg-tls-red/20 text-tls-red border border-tls-red/30 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Operational Focus
                    </p>
                    <p className="text-sm font-extrabold text-navy-950 dark:text-white">
                      Disciplined Road Logistics Coordination
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Red Accent Badge on side */}
            <div className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-1.5 bg-tls-red text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-tls-red/30">
              <MapPin className="w-3.5 h-3.5" />
              <span>MET City Jhajjar Hub</span>
            </div>
          </div>

          {/* Right Column: Text Content & 3 Value Highlights */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-tls-red/15 text-tls-red text-xs font-bold tracking-wider uppercase mb-4 border border-red-200/60 dark:border-tls-red/30">
              <span>ABOUT TLS TRANSPORT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-tight mb-6">
              Logistics That Moves{" "}
              <span className="text-tls-red">
                Business Forward
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-normal">
              <strong>{SITE_CONFIG.companyName}</strong> operates with a singular focus: delivering dependable road transportation and structured cargo coordination that modern commercial businesses can rely upon.
            </p>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Based at MET City, Jhajjar, Haryana, our operations emphasize thorough highway route planning, proactive dispatch communication, and systematic vehicle placement to keep industrial, commercial, and freight consignments moving predictably across major corridors.
            </p>

            {/* Three Value Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/70 dark:border-navy-800 transition-all hover:border-slate-300 dark:hover:border-navy-700 hover:shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-navy-950 dark:bg-navy-800 text-white flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-200/50 dark:border-navy-700 shadow-sm">
                      <Icon className="w-5 h-5 text-tls-red" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-950 dark:text-white mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-md shadow-tls-red/25 text-sm"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-950 dark:hover:text-white transition-colors"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
