"use client";

import React from "react";
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
  CheckCircle2,
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
    // Dispatch custom event or set form field if user selects enquiry CTA
    const event = new CustomEvent("select-service", { detail: { serviceTitle } });
    window.dispatchEvent(event);
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-navy-900/40 border-y border-slate-200/80 dark:border-navy-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-electric-500/10 text-electric-600 dark:text-electric-400 text-xs font-bold tracking-wider uppercase mb-4 border border-electric-200 dark:border-electric-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capability Spectrum</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-tight mb-5">
            Proposed Logistics Capabilities
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Structured transportation solutions tailored for commercial freight, enterprise distribution, and coordinated point-to-point movements.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 text-xs font-medium">
            <span>Note:</span>
            <span>These are proposed service scopes customizable based on client operational requirements.</span>
          </div>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.services.map((service: ServiceItem) => {
            const Icon = ICON_MAP[service.iconName] || Truck;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-electric-500 to-tls-red rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Icon & Tag */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-900 text-navy-950 dark:text-white flex items-center justify-center group-hover:bg-tls-red group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 bg-slate-100/80 dark:bg-navy-900/80 px-2.5 py-1 rounded-full border border-slate-200/50 dark:border-navy-800">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-2 group-hover:text-tls-red dark:group-hover:text-tls-red transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100 dark:border-navy-800/80">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Enquiry CTA */}
                <div className="pt-4 border-t border-slate-100 dark:border-navy-900">
                  <a
                    href="#contact"
                    onClick={() => handleServiceSelect(service.title)}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-navy-950 dark:text-slate-200 hover:text-tls-red dark:hover:text-tls-red transition-colors py-1 group/btn"
                  >
                    <span>Enquire for this Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-tls-red" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Have a specialized commercial consignment or custom route requirement?{" "}
            <a
              href="#contact"
              className="font-bold text-navy-950 dark:text-white underline hover:text-tls-red dark:hover:text-tls-red ml-1"
            >
              Contact our coordination desk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
