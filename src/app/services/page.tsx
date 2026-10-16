import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { ServicesSection } from "@/components/ServicesSection";
import { SITE_CONFIG } from "@/config/site";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Transportation Services | TLS — Transport Logistics Solutions",
  description:
    "Explore our complete range of 12 commercial logistics services: Truck Transportation, Flatbed Trailers, Container Trucks, LCV Tempos, ODC Heavy Haul, Warehousing, and Pan-India transit.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Commercial & Full Truckload",
      description: "Dedicated point-to-point capacity for commercial manufacturers, distribution centers, and high-volume freight.",
      services: ["Truck Transportation", "Freight Transportation", "Pan-India Logistics"],
    },
    {
      title: "Enclosed & Weatherproof",
      description: "High-security closed containers and dry bodies engineered for high-value merchandise, retail FMCG, and pharmaceuticals.",
      services: ["Container Transportation", "Close Body Truck Services"],
    },
    {
      title: "Heavy Haulage & Specialized",
      description: "Engineered transport for oversized equipment, steel fabrications, earthmovers, and over-dimensional cargo.",
      services: ["Trailer Transportation", "ODC Transportation", "Lorry Transportation"],
    },
    {
      title: "Automotive & Fleet Movement",
      description: "Purpose-built car carriers and utility vehicle transport with multi-point soft lashing.",
      services: ["Vehicle Transportation", "Car Transportation"],
    },
    {
      title: "Regional & Staging Support",
      description: "Light commercial vehicles for rapid urban runs plus cargo staging and temporary warehouse holding.",
      services: ["Tempo Transportation", "Storage and Warehousing"],
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-navy-950 text-navy-950 dark:text-white transition-colors duration-300 pb-16 md:pb-0">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Cinematic Page Header */}
        <section className="relative py-20 lg:py-28 bg-navy-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-sunset-truck.jpg"
              alt="TLS Freight Transportation"
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
                <Sparkles className="w-3.5 h-3.5 text-tls-red" />
                <span>LOGISTICS CAPABILITIES</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Our Transportation &amp;{" "}
                <span className="text-tls-red underline decoration-tls-red/40 decoration-4 underline-offset-8">
                  Logistics Services
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">
                Structured commercial transport solutions designed to move your raw materials, industrial machinery, containerized goods, and enterprise cargo with predictable schedules.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-lg shadow-tls-red/30 text-sm"
                >
                  <span>Request a Quotation</span>
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

        {/* 2. Complete Grid of All 12 Services */}
        <ServicesSection isPreview={false} />

        {/* 3. Service Categories Guide */}
        <section className="py-20 bg-white dark:bg-navy-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-tls-red/15 text-tls-red text-xs font-bold tracking-wider uppercase mb-3 border border-red-200/60 dark:border-tls-red/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SELECTION GUIDE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight mb-3">
                Matching the Right Transport to Your Cargo
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                Selecting the right vehicle configuration protects your cargo integrity, minimizes demurrage, and optimizes freight expenditure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-navy-950 dark:text-white mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {cat.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200/60 dark:border-navy-800">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Applicable Offerings:
                    </p>
                    {cat.services.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-xs font-medium text-navy-950 dark:text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-tls-red flex-shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Direct CTA */}
        <section className="py-16 bg-navy-950 text-white border-t border-navy-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Need Assistance Choosing the Right Vehicle?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Send your shipment details, dimensions, and schedule to our MET City Jhajjar coordination team for immediate technical and commercial assessment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-md shadow-tls-red/25"
              >
                <span>Request a Quote Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Operations</span>
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
