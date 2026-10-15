"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { Truck, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export function AboutSection() {
  const highlightIcons = [Truck, ShieldCheck, HeartHandshake];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Logistics Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-navy-800 bg-slate-100 dark:bg-navy-900 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/images/about-logistics.jpg"
                alt="Modern commercial logistics distribution and dispatch operations"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

              {/* Floating verified badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border border-slate-200/80 dark:border-navy-700 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-tls-red/10 dark:bg-tls-red/20 text-tls-red flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Operational Philosophy
                    </p>
                    <p className="text-sm font-bold text-navy-950 dark:text-white">
                      Disciplined Road Logistics Coordination
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative backdrop glow */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-electric-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tls-red/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Column: Text Content & 3 Value Highlights */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-tls-red/15 text-tls-red text-xs font-bold tracking-wider uppercase mb-4">
              <span>About TLS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-tight mb-6">
              Logistics That Moves Business Forward
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Transport Logistics Solutions (TLS) operates with a singular focus: delivering dependable road transportation and structured cargo coordination that modern commercial businesses can rely upon.
            </p>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Based at MET City, Jhajjar, Haryana, our operations emphasize thorough route planning, proactive dispatch communication, and systematic vehicle placement to keep industrial, commercial, and freight consignments moving seamlessly across key delivery corridors.
            </p>

            {/* Three Elegant Value Highlights */}
            <div className="space-y-4 mb-8">
              {SITE_CONFIG.aboutHighlights.map((highlight, index) => {
                const IconComponent = highlightIcons[index % highlightIcons.length];
                return (
                  <div
                    key={highlight.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/70 dark:border-navy-800 transition-colors hover:border-slate-300 dark:hover:border-navy-700"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-950 dark:bg-navy-800 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <IconComponent className="w-5 h-5 text-tls-red" />
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

            {/* Action link */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-950 dark:text-white hover:text-tls-red dark:hover:text-tls-red transition-colors group"
              >
                <span>View Proposed Service Categories</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-tls-red" />
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-950 dark:hover:text-white transition-colors"
              >
                <span>Request Transportation Assessment</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
