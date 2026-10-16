"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, IndustryItem } from "@/config/site";
import { Factory, ArrowRight, ShieldCheck } from "lucide-react";

export function IndustriesSection({ isPreview = false }: { isPreview?: boolean }) {
  const items = isPreview ? SITE_CONFIG.industries.slice(0, 6) : SITE_CONFIG.industries;

  return (
    <section
      id="industries"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-navy-900/40 border-t border-slate-200/80 dark:border-navy-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-electric-500/10 text-electric-600 dark:text-electric-400 text-xs font-bold tracking-wider uppercase mb-3 border border-electric-200 dark:border-electric-500/20">
              <Factory className="w-3.5 h-3.5" />
              <span>SECTORS WE SUPPORT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-tight mb-4">
              Tailored Logistics for{" "}
              <span className="text-electric-500 dark:text-electric-400">Core Industries</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Every industry operates under distinct supply chain dynamics. We structure road freight arrangements tailored to your sector&apos;s specific packaging, loading, and transit requirements.
            </p>
          </div>

          {isPreview && (
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-navy-950 dark:text-white hover:text-electric-500 dark:hover:text-electric-400 bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 transition-colors self-start md:self-auto whitespace-nowrap shadow-sm"
            >
              <span>View All Sectors</span>
              <ArrowRight className="w-4 h-4 text-electric-500" />
            </Link>
          )}
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item: IndustryItem) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 hover:border-slate-300 dark:hover:border-navy-700 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-navy-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                  <div className="absolute bottom-3 left-5 right-5 text-white">
                    <h3 className="text-lg font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-navy-900">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Logistics Solutions:
                    </p>
                    <ul className="space-y-1.5">
                      {item.solutions.slice(0, 2).map((sol) => (
                        <li key={sol} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <ShieldCheck className="w-3.5 h-3.5 text-tls-red flex-shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <Link
                  href={`/contact?industry=${encodeURIComponent(item.title)}#quote`}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 dark:border-navy-900 text-xs font-bold text-navy-950 dark:text-slate-200 group-hover:text-tls-red transition-colors"
                >
                  <span>Request Sector Assessment</span>
                  <ArrowRight className="w-4 h-4 text-tls-red transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
