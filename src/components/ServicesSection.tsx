"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG, ServiceItem } from "@/config/site";
import {
  Truck,
  PackageCheck,
  Boxes,
  Container,
  Workflow,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ICON_MAP = {
  Truck: Truck,
  PackageCheck: PackageCheck,
  Boxes: Boxes,
  Container: Container,
  Workflow: Workflow,
  Headphones: Headphones,
};

export function ServicesSection() {
  const handleServiceSelect = (serviceTitle: string) => {
    // Pre-select service in quote form via custom event
    const event = new CustomEvent("select-service", { detail: { serviceTitle } });
    window.dispatchEvent(event);
  };

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
            <span>OUR SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-tight mb-4">
            Logistics Solutions for{" "}
            <span className="text-electric-500 dark:text-electric-400">
              Every Business Need
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-4">
            We provide transportation and logistics support to help your business move forward.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 text-xs font-medium">
            <span>Note:</span>
            <span>Configurable proposed service categories tailored to client operational specifications.</span>
          </div>
        </div>

        {/* 
          Six Consistent Cards 
          - Standard & Large desktop (lg+): 3 columns (2 rows of 3)
          - Tablet (sm): 2 columns
          - Mobile: 1 column
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SITE_CONFIG.services.map((service: ServiceItem) => {
            const Icon = ICON_MAP[service.iconName] || Truck;

            return (
              <div
                key={service.id}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                    {/* Circular Accent Badge with Lucide Icon */}
                    <div className="absolute bottom-3 left-5 w-11 h-11 rounded-full bg-white dark:bg-navy-900 text-tls-red shadow-lg border border-slate-200 dark:border-navy-700 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pt-5">
                    <h3 className="text-lg font-bold text-navy-950 dark:text-white mb-2 group-hover:text-tls-red dark:group-hover:text-tls-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Action: Enquire Now */}
                <div className="p-6 pt-0">
                  <a
                    href="#contact"
                    onClick={() => handleServiceSelect(service.title)}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 dark:border-navy-850 text-xs font-bold text-navy-950 dark:text-slate-200 group-hover:text-tls-red dark:group-hover:text-tls-red transition-colors"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 text-tls-red transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Need a dedicated transit corridor or specialized freight arrangement?{" "}
            <a
              href="#contact"
              className="font-bold text-navy-950 dark:text-white underline hover:text-tls-red dark:hover:text-tls-red ml-1"
            >
              Contact our Jhajjar coordination desk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
