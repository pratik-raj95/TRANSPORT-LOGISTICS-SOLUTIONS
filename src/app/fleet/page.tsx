import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { FleetShowcase } from "@/components/FleetShowcase";
import { SITE_CONFIG } from "@/config/site";
import {
  Truck,
  ArrowRight,
  Phone,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Fleet Showcase | TLS — Transport Logistics Solutions",
  description:
    "Explore TLS Transport's commercial vehicle categories: 32 Ft Container Trucks, 40 Ft Flatbed Trailers, Close Body Trucks, Open Lorries, and LCV Tempos dispatched from MET City, Jhajjar.",
};

export default function FleetPage() {
  const placementChecklist = [
    "Verify loading dock clearance height and turnaround radius at pickup facility",
    "Confirm approximate gross cargo weight to match legal axle configuration",
    "Determine whether side-loading (forklift) or top-loading (crane) is required",
    "Specify weather-protection requirements (sealed container vs. waterproof tarpaulin)",
    "Confirm dispatch timing and driver entry documentation protocols",
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-navy-950 text-navy-950 dark:text-white transition-colors duration-300 pb-16 md:pb-0">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Cinematic Page Header */}
        <section className="relative py-20 lg:py-28 bg-navy-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/fleet/fleet-container-truck.jpg"
              alt="TLS Transport Commercial Fleet on Highway"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-sm">
                <Truck className="w-3.5 h-3.5 text-tls-red" />
                <span>COMMERCIAL VEHICLE ASSETS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Our Coordinated{" "}
                <span className="text-tls-red underline decoration-tls-red/40 decoration-4 underline-offset-8">
                  Transport Fleet
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">
                From high-security 32 Ft multi-axle containers to rugged 40 Ft flatbed trailers and agile LCV tempos, we place the appropriate vehicle configuration for your cargo.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-lg shadow-tls-red/30 text-sm"
                >
                  <span>Inquire for Vehicle Placement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={SITE_CONFIG.phoneLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-tls-red" />
                  <span>Call Desk: {SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Full Fleet Showcase (All 6 Categories) */}
        <FleetShowcase isPreview={false} />

        {/* 3. Vehicle Placement Checklist */}
        <section className="py-20 bg-slate-50 dark:bg-navy-900/50 border-t border-slate-200/80 dark:border-navy-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-tls-red/15 text-tls-red text-xs font-bold tracking-wider uppercase mb-3 border border-red-200/60 dark:border-tls-red/30">
                <ClipboardCheck className="w-3.5 h-3.5" />
                <span>OPERATIONAL PLANNING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight mb-3">
                Pre-Dispatch Placement Checklist
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                To guarantee smooth vehicle positioning and avoid dock congestion, our operations team verifies these key parameters before assigning equipment:
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3.5">
              {placementChecklist.map((item, index) => (
                <div
                  key={item}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 shadow-sm flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-tls-red/10 text-tls-red font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    0{index + 1}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Action Banner */}
        <section className="py-16 bg-navy-950 text-white border-t border-navy-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Need a Vehicle Dispatched to Your Facility?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Contact our Jhajjar operations desk with your loading location, vehicle requirement, and cargo details.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-md shadow-tls-red/25"
              >
                <span>Request Vehicle Placement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Operations Desk</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
      <MobileBottomBar />
    </div>
  );
}
