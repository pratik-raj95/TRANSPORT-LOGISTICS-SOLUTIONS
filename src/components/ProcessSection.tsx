"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/site";
import { ArrowRight, Clock, MessageSquare, ClipboardList, Truck, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  const stepIcons = [ClipboardList, MessageSquare, Truck, CheckCircle2];

  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-white dark:bg-navy-950 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 text-xs font-bold tracking-wider uppercase mb-4 border border-slate-200 dark:border-navy-800">
            <Clock className="w-3.5 h-3.5 text-tls-red" />
            <span>Operational Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-tight mb-5">
            How It Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            A straightforward, disciplined four-step engagement model ensuring complete clarity from initial inquiry to final destination handover.
          </p>

          <p className="text-xs text-slate-400 dark:text-slate-500 italic">
            Note: Inquiries are coordinated directly with our operations desk. Automated live tracking is not deployed at this stage.
          </p>
        </div>

        {/* 
          Process Timeline: 
          - Desktop (lg): Horizontal 4-step layout with connected horizontal line
          - Mobile / Tablet: Vertical connected timeline
        */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-slate-200 via-tls-red/40 to-slate-200 dark:from-navy-800 dark:via-tls-red/50 dark:to-navy-800 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {SITE_CONFIG.steps.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-start lg:items-center text-left lg:text-center group"
                >
                  {/* Step Number & Icon Circle */}
                  <div className="flex items-center gap-4 lg:flex-col lg:gap-3 mb-4">
                    <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-navy-700 group-hover:border-tls-red dark:group-hover:border-tls-red flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-7 h-7 text-navy-950 dark:text-white group-hover:text-tls-red transition-colors" />

                      {/* Number badge */}
                      <span className="absolute -top-2.5 -right-2.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-tls-red text-white shadow-sm">
                        {step.number}
                      </span>
                    </div>

                    <div className="lg:hidden">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-tls-red">
                        Step {step.number}
                      </span>
                      <h3 className="text-lg font-bold text-navy-950 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Desktop Title */}
                  <h3 className="hidden lg:block text-lg font-bold text-navy-950 dark:text-white mb-2 group-hover:text-tls-red transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  {/* Sub-detail badge */}
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-900 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    <span>{step.detail}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-navy-950 dark:text-white mb-1">
              Ready to schedule your shipment?
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Submit your transit requirements online or message directly on WhatsApp for immediate coordination.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark transition-all duration-200 text-sm whitespace-nowrap shadow-sm hover:shadow"
          >
            <span>Start Step 01</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
