import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { SITE_CONFIG } from "@/config/site";
import {
  Truck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Phone,
  MessageSquare,
  PackageCheck,
  MapPin,
  Clock,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SITE_CONFIG.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SITE_CONFIG.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | TLS — Transport Logistics Solutions",
    };
  }

  return {
    title: `${service.title} | TLS — Transport Logistics Solutions`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | TLS Transport`,
      description: service.shortDesc,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} by TLS Transport Logistics Solutions`,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SITE_CONFIG.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SITE_CONFIG.services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const whatsappInquiryUrl = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    `Hello TLS Team, I am inquiring about: ${service.title}. Please provide vehicle availability and quotation details.`
  )}`;

  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-navy-950 text-navy-950 dark:text-white transition-colors duration-300 pb-16 md:pb-0">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Breadcrumbs Strip */}
        <div className="bg-slate-100 dark:bg-navy-900 border-b border-slate-200 dark:border-navy-800 text-xs py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-tls-red transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-tls-red transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-navy-950 dark:text-white truncate">
              {service.title}
            </span>
          </div>
        </div>

        {/* 2. Hero Section with Service Imagery */}
        <section className="relative py-16 lg:py-24 bg-navy-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-sm">
                <Truck className="w-3.5 h-3.5 text-tls-red" />
                <span>{service.tag}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
                {service.shortDesc}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}#quote`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-lg shadow-tls-red/30 text-sm"
                >
                  <span>Request Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors text-sm shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Service Deep-Dive Details */}
        <section className="py-20 bg-white dark:bg-navy-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Full Description & Specs (Col 1-8) */}
              <div className="lg:col-span-8 space-y-12">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 dark:text-white tracking-tight mb-4">
                    Overview &amp; Operational Scope
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Highlights Grid */}
                <div>
                  <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-tls-red" />
                    <span>Key Service Highlights</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-tls-red flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suitable Cargo Types */}
                <div>
                  <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-4 flex items-center gap-2">
                    <PackageCheck className="w-5 h-5 text-electric-500" />
                    <span>Recommended Cargo Types</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.cargoTypes.map((cargo) => (
                      <div
                        key={cargo}
                        className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/70 dark:border-navy-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-500" />
                        <span>{cargo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operational Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-4">
                    Operational Benefits for Your Business
                  </h3>
                  <div className="space-y-3">
                    {service.operationalBenefits.map((benefit, i) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 shadow-sm"
                      >
                        <div className="w-7 h-7 rounded-full bg-tls-red/10 text-tls-red flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                          0{i + 1}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Action Sidebar (Col 9-12) */}
              <div className="lg:col-span-4 space-y-6">
                {/* Instant Quote Box */}
                <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-md">
                  <h3 className="text-lg font-bold text-navy-950 dark:text-white mb-2">
                    Inquire for {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    Provide your pickup point, destination, and approximate weight to receive a transparent rate assessment.
                  </p>

                  <div className="space-y-3">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}#quote`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-tls-red hover:bg-tls-red-hover transition-colors shadow-md shadow-tls-red/25"
                    >
                      <span>Fill Quote Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Direct WhatsApp</span>
                    </a>

                    <a
                      href={SITE_CONFIG.phoneLink}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-navy-950 dark:text-white bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-tls-red" />
                      <span>Call {SITE_CONFIG.phoneDisplay}</span>
                    </a>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-navy-800 text-[11px] text-slate-400 space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-tls-red" />
                      <span>Dispatched from MET City, Jhajjar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-electric-500" />
                      <span>{SITE_CONFIG.workingHours}</span>
                    </div>
                  </div>
                </div>

                {/* Related Services */}
                <div className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Other Transport Services
                  </h4>
                  <ul className="space-y-3">
                    {relatedServices.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/services/${r.slug}`}
                          className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-navy-950 transition-colors"
                        >
                          <div>
                            <p className="text-xs font-bold text-navy-950 dark:text-white group-hover:text-tls-red transition-colors">
                              {r.title}
                            </p>
                            <p className="text-[11px] text-slate-400">{r.tag}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-tls-red group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-100 dark:border-navy-800 text-center">
                    <Link
                      href="/services"
                      className="text-xs font-bold text-electric-500 hover:underline"
                    >
                      View All 12 Services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
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
