import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { LocationsDirectory } from "@/components/LocationsDirectory";
import { SITE_CONFIG } from "@/config/site";
import { MapPin, ArrowRight, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Operational Locations & Corridors | TLS — Transport Logistics Solutions",
  description:
    "Primary operations hub at Plot No. 201, Sector 8, MET City, Yakubpur, Jhajjar, Haryana. Highway transit corridors covering Delhi-NCR, Western, Northern, and National routes.",
};

export default function LocationsPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-navy-950 text-navy-950 dark:text-white transition-colors duration-300 pb-16 md:pb-0">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Cinematic Page Header */}
        <section className="relative py-20 lg:py-28 bg-navy-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-logistics.jpg"
              alt="TLS Transport Logistics Hub"
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
                <MapPin className="w-3.5 h-3.5 text-tls-red" />
                <span>OPERATIONAL REACH &amp; HUB</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Locations &amp;{" "}
                <span className="text-tls-red underline decoration-tls-red/40 decoration-4 underline-offset-8">
                  Highway Corridors
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">
                Operating out of MET City, Jhajjar, Haryana with direct arterial connectivity across key Northern, Western, and interstate transport lines.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-lg shadow-tls-red/30 text-sm"
                >
                  <span>Directions to Jhajjar Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

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

        {/* 2. Interactive Locations Directory Component */}
        <section className="py-20 bg-white dark:bg-navy-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LocationsDirectory />
          </div>
        </section>

        {/* 3. Contact CTA */}
        <section className="py-16 bg-navy-950 text-white border-t border-navy-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Need Transport Along Any Specific Route?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Whether point-to-point within Delhi-NCR or line-haul to Western / Southern ports, share your transit requirements with our desk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-md shadow-tls-red/25"
              >
                <span>Request Route Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
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
