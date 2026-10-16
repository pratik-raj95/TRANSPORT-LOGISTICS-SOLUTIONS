"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, ServiceDetail } from "@/config/site";
import {
  Truck,
  PackageCheck,
  Boxes,
  Container,
  Workflow,
  Headphones,
  ShieldCheck,
  Car,
  Compass,
  Layers,
  Building2,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const ICON_MAP = {
  Truck: Truck,
  PackageCheck: PackageCheck,
  Boxes: Boxes,
  Container: Container,
  Workflow: Workflow,
  Headphones: Headphones,
  ShieldCheck: ShieldCheck,
  Car: Car,
  Compass: Compass,
  Layers: Layers,
  Building2: Building2,
};

export function ServicesSection({ isPreview = false }: { isPreview?: boolean }) {
  const displayServices = isPreview
    ? SITE_CONFIG.services.slice(0, 6)
    : SITE_CONFIG.services;

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-navy-900/50 border-b border-slate-200/80 dark:border-navy-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-electric-500/10 text-electric-600 dark:text-electric-400 text-xs font-bold tracking-wider uppercase mb-4 border border-electric-200 dark:border-electric-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMERCIAL TRANSPORT OFFERINGS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-tight mb-4">
            Logistics Solutions for{" "}
            <span className="text-electric-500 dark:text-electric-400">
              Every Cargo Requirement
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-4">
            Comprehensive road transportation, containerized freight, heavy trailers, and specialized transit coordinated from our Jhajjar operations desk.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Direct fleet placement available across Delhi-NCR, Haryana & National Corridors</span>
          </div>
        </div>

        {/* 
          Services Grid:
          - Standard & Large desktop: 3 columns
          - Tablet: 2 columns
          - Mobile: 1 column
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayServices.map((service: ServiceDetail) => {
            const Icon = ICON_MAP[service.iconName] || Truck;

            return (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-navy-950 border border-slate-200/90 dark:border-navy-800 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden"
              >
                <div>
                  {/* Card Top Image with Consistent Aspect Ratio */}
                  <div className="relative h-48 sm:h-44 w-full overflow-hidden bg-slate-100 dark:bg-navy-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                      {service.tag}
                    </div>

                    {/* Circular Accent Badge with Lucide Icon */}
                    <div className="absolute bottom-3 left-5 w-11 h-11 rounded-full bg-white dark:bg-navy-900 text-tls-red shadow-lg border border-slate-200 dark:border-navy-700 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pt-5">
                    <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-2 group-hover:text-tls-red dark:group-hover:text-tls-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Highlights Preview */}
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-navy-900">
                      {service.highlights.slice(0, 2).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-tls-red flex-shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Dual Actions: View Details & Enquire */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 dark:border-navy-900 flex items-center justify-between gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-navy-950 dark:text-slate-200 hover:text-tls-red dark:hover:text-tls-red transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-tls-red" />
                    </Link>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}#quote`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-sm"
                    >
                      <span>Get Quote</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button on Homepage */}
        {isPreview && (
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-navy-950 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 shadow-lg transition-all text-sm"
            >
              <span>Explore All 12 Transport Services</span>
              <ArrowRight className="w-4 h-4 text-tls-red" />
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
              Including ODC, Vehicle Carriers, Warehousing, and Close Body Trucks
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
