"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/site";
import {
  Route,
  MessageSquareCheck,
  ShieldCheck,
  Users,
  Building2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ICON_MAP = {
  Route: Route,
  MessageSquareCheck: MessageSquareCheck,
  ShieldCheck: ShieldCheck,
  Users: Users,
  Building2: Building2,
};

export function WhyChooseUs() {
  return (
    <section
      id="why-tls"
      className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden"
    >
      {/* Subtle background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-tls-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-bold tracking-wider uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-tls-red" />
            <span>Operational Integrity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Reliable Service.{" "}
            <span className="text-electric-400">
              Professional Coordination.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Modern commerce requires logistics partners who prioritize operational discipline over shortcuts. We anchor every transport commitment on clear communication and systematic coordination.
          </p>
        </div>

        {/* 5 Distinctive Value Proposition Cards + Commitment Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SITE_CONFIG.valueProps.map((prop, idx) => {
            const Icon = ICON_MAP[prop.iconName] || CheckCircle;
            const isHighlighted = idx === 0;

            return (
              <div
                key={prop.title}
                className={`relative p-8 rounded-3xl border transition-all duration-300 transform hover:-translate-y-1.5 ${
                  isHighlighted
                    ? "bg-navy-900/90 border-tls-red/40 shadow-2xl shadow-tls-red/10"
                    : "bg-navy-900/60 hover:bg-navy-900/90 border-navy-800 hover:border-navy-700 hover:shadow-xl"
                }`}
              >
                {/* Number indicator & Circular Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-navy-800 text-white flex items-center justify-center border border-navy-700 shadow-inner">
                    <Icon className="w-6 h-6 text-tls-red" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {prop.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}

          {/* 6th Card: Direct Coordination Commitment */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 border border-electric-500/30 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-electric-500/20 text-electric-400 text-xs font-bold uppercase tracking-wider mb-4 border border-electric-500/30">
                Our Commitment
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                No Unsupported Claims, Only Dependable Execution
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                We do not inflate numbers or promise what cannot be verified. We provide realistic transit assessments and transparent coordination for your commercial freight.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark transition-all shadow-md shadow-tls-red/25"
            >
              <span>Connect With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
