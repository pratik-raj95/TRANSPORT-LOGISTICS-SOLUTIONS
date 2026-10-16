"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG, LocationHub } from "@/config/site";
import {
  MapPin,
  ExternalLink,
  Search,
  ArrowRight,
  ShieldCheck,
  Navigation,
} from "lucide-react";

export function LocationsDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = ["All", "Haryana / Delhi-NCR", "Western", "Northern", "Central & Eastern"];

  const filteredCorridors = SITE_CONFIG.corridors.filter((corridor: LocationHub) => {
    const matchesRegion =
      selectedRegion === "All" ||
      corridor.region.toLowerCase().includes(selectedRegion.toLowerCase());

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      corridor.name.toLowerCase().includes(query) ||
      corridor.description.toLowerCase().includes(query) ||
      corridor.keyRoutes.some((route) => route.toLowerCase().includes(query));

    return matchesRegion && matchesSearch;
  });

  return (
    <div className="space-y-16">
      {/* 1. Official Primary Hub Spotlight Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tls-red/10 text-tls-red text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>PRIMARY OPERATIONS HEADQUARTERS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 dark:text-white leading-tight">
              MET City, Jhajjar, Haryana
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {SITE_CONFIG.address}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Our central operations facility is situated inside MET City (Model Economic Township), Jhajjar. This location provides high-speed, direct arterial connectivity to the Kundli-Manesar-Palwal (KMP) Expressway, NH-48, and Northern industrial manufacturing clusters.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-navy-950 dark:text-white bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-700 hover:border-slate-300 transition-colors"
              >
                <span>Request Dispatch from MET City</span>
                <ArrowRight className="w-3.5 h-3.5 text-tls-red" />
              </Link>
            </div>
          </div>

          {/* Right: Map Embed Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-navy-700 shadow-md h-72 sm:h-80 bg-slate-200 dark:bg-navy-950">
              <iframe
                title="TLS Transport MET City Jhajjar Location"
                src="https://maps.google.com/maps?q=Plot+No.+201,+Sector+8,+MET+City,+Yakubpur,+Jhajjar,+Haryana+124515,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                aria-hidden="false"
                tabIndex={0}
                className="w-full h-full filter contrast-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Search & Corridor Filter Strip */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-navy-950 dark:text-white">
              Active Regional Corridors
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Search routes and transit connectivity coordinated through our dispatch network.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search city or corridor (e.g. Manesar, Jaipur)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white dark:bg-navy-900 border border-slate-300 dark:border-navy-700 text-navy-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-tls-red/30 transition-colors"
            />
          </div>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedRegion === region
                  ? "bg-navy-950 dark:bg-white text-white dark:text-navy-950 shadow-sm"
                  : "bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-200/80 dark:border-navy-800"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Corridors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {filteredCorridors.map((corridor) => (
            <div
              key={corridor.name}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-electric-500/10 text-electric-600 dark:text-electric-400 text-[11px] font-bold uppercase tracking-wider border border-electric-200 dark:border-electric-500/20">
                    {corridor.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {corridor.region}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-navy-950 dark:text-white mb-2">
                  {corridor.name}
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {corridor.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Highway Segments:
                  </p>
                  <ul className="space-y-1.5">
                    {corridor.keyRoutes.map((route) => (
                      <li key={route} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Navigation className="w-3.5 h-3.5 text-tls-red flex-shrink-0 mt-0.5" />
                        <span>{route}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-navy-900">
                <Link
                  href={`/contact?pickup=${encodeURIComponent("MET City Jhajjar")}&delivery=${encodeURIComponent(corridor.name)}#quote`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-tls-red hover:text-tls-red-hover transition-colors"
                >
                  <span>Inquire Freight for this Corridor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCorridors.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              No corridors matched your query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("All");
              }}
              className="text-xs font-bold text-tls-red underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* 3. Honest Disclosure Note */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-navy-800 flex items-start gap-3.5 text-xs text-slate-600 dark:text-slate-400">
        <ShieldCheck className="w-5 h-5 text-tls-red flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-navy-950 dark:text-white">Honest Operations Protocol:</strong>{" "}
          Unlike aggregators who publish fabricated branch listings across hundreds of cities, TLS maintains its registered operations desk at Plot No. 201, Sector 8, MET City, Jhajjar. All interstate dispatches, fleet coordination, and documentation checks are executed under direct operational supervision.
        </div>
      </div>
    </div>
  );
}
