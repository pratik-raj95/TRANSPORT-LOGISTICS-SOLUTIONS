import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { IndustriesSection } from "@/components/IndustriesSection";
import { SITE_CONFIG, IndustryItem } from "@/config/site";
import {
  Factory,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries Served | TLS — Transport Logistics Solutions",
  description:
    "Tailored commercial transportation solutions for core sectors: Manufacturing, Automotive, Infrastructure, FMCG, Heavy Machinery, and Pharmaceuticals.",
};

export default function IndustriesPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-navy-950 text-navy-950 dark:text-white transition-colors duration-300 pb-16 md:pb-0">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Cinematic Page Header */}
        <section className="relative py-20 lg:py-28 bg-navy-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/industries/industry-manufacturing.jpg"
              alt="Industrial Manufacturing and Supply Chain Logistics"
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
                <Factory className="w-3.5 h-3.5 text-tls-red" />
                <span>SECTOR LOGISTICS CAPABILITIES</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Industries We{" "}
                <span className="text-tls-red underline decoration-tls-red/40 decoration-4 underline-offset-8">
                  Support
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">
                Structured B2B road transport designed around the specific material handling, dock constraints, and timing demands of industrial supply chains.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-lg shadow-tls-red/30 text-sm"
                >
                  <span>Request Sector Assessment</span>
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

        {/* 2. Industries Overview Grid */}
        <IndustriesSection isPreview={false} />

        {/* 3. Deep-Dive Sector Breakdown */}
        <section className="py-20 bg-white dark:bg-navy-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-tls-red/15 text-tls-red text-xs font-bold tracking-wider uppercase mb-3 border border-red-200/60 dark:border-tls-red/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OPERATIONAL ANALYSIS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight mb-3">
                Supply Chain Challenges &amp; TLS Solutions
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                How we systematically address transit risks, cargo security, and delivery timing across commercial sectors.
              </p>
            </div>

            <div className="space-y-12">
              {SITE_CONFIG.industries.map((item: IndustryItem) => (
                <div
                  key={item.id}
                  className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Info */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-slate-200/70 dark:bg-navy-800 text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        {item.title}
                      </div>

                      <h3 className="text-2xl font-bold text-navy-950 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.fullDesc}
                      </p>

                      {/* Primary Challenge */}
                      <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-300">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                        <div>
                          <strong>Key Industry Challenge:</strong> {item.keyChallenges}
                        </div>
                      </div>

                      {/* TLS Solutions */}
                      <div className="space-y-2 pt-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          TLS Transport Solutions:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {item.solutions.map((sol) => (
                            <div key={sol} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-tls-red flex-shrink-0 mt-0.5" />
                              <span>{sol}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Action & Image */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                      <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-200 dark:border-navy-700">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 30vw"
                          className="object-cover object-center"
                        />
                      </div>

                      <Link
                        href={`/contact?industry=${encodeURIComponent(item.title)}#quote`}
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-md shadow-tls-red/25"
                      >
                        <span>Request Quote for {item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Action CTA */}
        <section className="py-16 bg-navy-950 text-white border-t border-navy-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Have Specific Sector Logistics Requirements?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Whether your goods require sealed containers, heavy-duty trailers, or specialized loading schedules, our team can formulate a tailored transit plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-md shadow-tls-red/25"
              >
                <span>Request Quotation</span>
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
