"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, FleetItem } from "@/config/site";
import { Truck, ArrowRight, CheckCircle2 } from "lucide-react";

export function FleetShowcase({ isPreview = false }: { isPreview?: boolean }) {
  const items = isPreview ? SITE_CONFIG.fleet.slice(0, 4) : SITE_CONFIG.fleet;

  return (
    <section
      id="fleet"
      className="py-20 lg:py-28 bg-white dark:bg-navy-950 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-tls-red/15 text-tls-red text-xs font-bold tracking-wider uppercase mb-3 border border-red-200/60 dark:border-tls-red/30">
              <Truck className="w-3.5 h-3.5" />
              <span>COMMERCIAL FLEET</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-tight mb-4">
              Modern Vehicles for{" "}
              <span className="text-tls-red">Every Cargo Type</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              From high-capacity 32 Ft multi-axle containers to rugged 40 Ft flatbed trailers and agile LCV tempos, our coordinated fleet matches your specific payload and protection requirements.
            </p>
          </div>

          {isPreview && (
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-navy-950 dark:text-white hover:text-tls-red dark:hover:text-tls-red bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 transition-colors self-start md:self-auto whitespace-nowrap shadow-sm"
            >
              <span>Explore Complete Fleet</span>
              <ArrowRight className="w-4 h-4 text-tls-red" />
            </Link>
          )}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item: FleetItem) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-slate-300 dark:hover:border-navy-700 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-56 sm:h-52 w-full overflow-hidden bg-slate-200 dark:bg-navy-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase border border-white/20">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-2 group-hover:text-tls-red dark:group-hover:text-tls-red transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Suitable For Tags */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Ideal Cargo Applications:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.suitableFor.map((app) => (
                        <span
                          key={app}
                          className="px-2.5 py-1 rounded-lg bg-white dark:bg-navy-950 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-navy-800"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features list */}
                  {!isPreview && (
                    <div className="pt-4 border-t border-slate-200/60 dark:border-navy-800 space-y-2">
                      {item.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-tls-red flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <Link
                  href={`/contact?vehicle=${encodeURIComponent(item.title)}#quote`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-navy-950 dark:bg-slate-800 hover:bg-tls-red dark:hover:bg-tls-red transition-colors shadow-sm"
                >
                  <span>Inquire for {item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
