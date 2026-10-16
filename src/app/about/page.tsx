import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { SITE_CONFIG } from "@/config/site";
import {
  Truck,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  ArrowRight,
  Compass,
  CheckCircle2,
  Phone,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | TLS — Transport Logistics Solutions",
  description:
    "Learn about TLS — Transport Logistics Solutions. Dependable road transportation, dedicated full truckload operations, and disciplined logistics coordination based at MET City, Jhajjar, Haryana.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Operational Discipline",
      description: "Rigorous vehicle condition checks, strict highway compliance, and safe cargo securing protocols on every dispatch.",
      icon: ShieldCheck,
    },
    {
      title: "Direct Human Communication",
      description: "No vague automated status messages. Real operations coordinators provide transparent milestone updates from origin to destination.",
      icon: HeartHandshake,
    },
    {
      title: "Predictable Highway Transit",
      description: "Carefully structured line-haul routes connecting Northern industrial belts with major manufacturing and port gateways.",
      icon: Compass,
    },
  ];

  const operatingPrinciples = [
    "Dedicated point-to-point transit without intermediate cross-dock handling risks",
    "Tailored vehicle allocation matching exact cargo weight, volume, and protection requirements",
    "Experienced long-haul highway operators trained in defensive driving and lashing",
    "Continuous operations support from dispatch desk at MET City, Jhajjar",
    "Strict adherence to national highway safety norms and statutory transport documentation",
    "Transparent billing without hidden spot charges or unexpected surcharges",
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-navy-950 text-navy-950 dark:text-white transition-colors duration-300 pb-16 md:pb-0">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Cinematic Page Header */}
        <section className="relative py-20 lg:py-28 bg-navy-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-logistics.jpg"
              alt="TLS Transport Logistics Solutions Logistics Facility"
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
                <span>COMPANY OVERVIEW</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                About{" "}
                <span className="inline-block text-tls-red underline decoration-tls-red/40 decoration-4 underline-offset-8">
                  TLS Transport
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
                Dedicated road transportation and structured cargo coordination engineered to keep your commercial supply chain moving forward.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Company Introduction & Mission */}
        <section className="py-20 lg:py-24 bg-white dark:bg-navy-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-tls-red/15 text-tls-red text-xs font-bold tracking-wider uppercase border border-red-200/60 dark:border-tls-red/30">
                  <span>WHO WE ARE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-tight">
                  Commercial Road Logistics Grounded in Operational Clarity
                </h2>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  <strong>{SITE_CONFIG.companyName}</strong> (TLS Transport) is a professional transportation and logistics partner based at MET City, Yakubpur, Jhajjar, Haryana.
                </p>

                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  We specialize in commercial road freight, dedicated full truckload (FTL) capacity, containerized cargo transit, and regional distribution support. Rather than making exaggerated claims or relying on generic templates, we ground our service in truthful execution, disciplined vehicle placement, and proactive communication.
                </p>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-tls-red/15 text-tls-red flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Headquarters</p>
                      <p className="text-sm font-bold text-navy-950 dark:text-white">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Visual Showcase */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-navy-800 bg-slate-100 dark:bg-navy-900 aspect-[16/11]">
                  <Image
                    src="/images/freight-operations.jpg"
                    alt="TLS Logistics Dispatch and Fleet Operations"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border border-slate-200/80 dark:border-navy-700 shadow-lg text-left">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Strategic Facility</p>
                    <p className="text-sm font-extrabold text-navy-950 dark:text-white">MET City Industrial Corridor Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Values */}
        <section className="py-20 bg-slate-50 dark:bg-navy-900/50 border-t border-slate-200/80 dark:border-navy-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight mb-4">
                Our Core Values
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                The operating pillars that guide our daily dispatch decisions, vehicle safety protocols, and customer interactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="p-8 rounded-3xl bg-white dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-tls-red/10 text-tls-red flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-3">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Operating Principles */}
        <section className="py-20 lg:py-24 bg-white dark:bg-navy-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white tracking-tight mb-4">
                Our Operational Principles
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Transparent standards designed to protect cargo integrity and client trust on every movement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {operatingPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-tls-red flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Direct Action CTA */}
        <section className="py-16 bg-navy-950 text-white border-t border-navy-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Discuss Your Transportation Requirements With Us
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto mb-8">
              Speak directly with an operations coordinator at our MET City Jhajjar desk for a realistic freight assessment and vehicle placement schedule.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-lg shadow-tls-red/25"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={SITE_CONFIG.phoneLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-tls-red" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
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
