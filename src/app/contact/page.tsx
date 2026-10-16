import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { SITE_CONFIG } from "@/config/site";
import { Phone, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Transport Quotation | TLS — Transport Logistics Solutions",
  description:
    "Contact TLS Transport. Call 09311606860 or WhatsApp +91 93116 06860. Official office at Plot No. 201, Sector 8, MET City, Yakubpur, Jhajjar, Haryana 124515. Request commercial freight quotes.",
};

export default function ContactPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-navy-950 text-navy-950 dark:text-white transition-colors duration-300 pb-16 md:pb-0">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Cinematic Page Header */}
        <section className="relative py-20 lg:py-28 bg-navy-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-truck.jpg"
              alt="TLS Transport Operations Desk"
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
                <Phone className="w-3.5 h-3.5 text-tls-red" />
                <span>DIRECT OPERATIONS CONTACT</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Get in Touch &amp;{" "}
                <span className="inline-block text-tls-red underline decoration-tls-red/40 decoration-4 underline-offset-8">
                  Request a Quote
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">
                Connect directly with our transport coordination desk at MET City, Jhajjar for prompt vehicle placement, freight assessments, and dedicated logistics planning.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-lg shadow-tls-red/30 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now: {SITE_CONFIG.phoneDisplay}</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors text-sm shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Direct Channels Quick Strip */}
        <section className="bg-slate-100 dark:bg-navy-900 border-b border-slate-200 dark:border-navy-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-tls-red/10 text-tls-red flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Direct Telephone</p>
                  <a
                    href={SITE_CONFIG.phoneLink}
                    className="text-base font-bold text-navy-950 dark:text-white hover:text-tls-red transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-400">WhatsApp Dispatch Desk</p>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-navy-950 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    +91 93116 06860
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-navy-850 text-electric-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Desk Operations Hours</p>
                  <p className="text-sm font-bold text-navy-950 dark:text-white">Mon – Sat: 9:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Main Contact & Quote Form Section */}
        <ContactSection />

        {/* 4. Common Questions Accordion */}
        <FAQSection />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
      <MobileBottomBar />
    </div>
  );
}
