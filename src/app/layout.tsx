import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SITE_CONFIG } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tlslogistics.example.com"),
  title: "TLS — Transport Logistics Solutions | Freight & Transportation",
  description:
    "Reliable road transportation, full truckload (FTL), commercial freight, and logistics coordination. Headquartered at MET City, Jhajjar, Haryana.",
  keywords: [
    "TLS",
    "Transport Logistics Solutions",
    "Logistics Solutions",
    "Road Transportation",
    "Full Truckload",
    "Commercial Freight",
    "Jhajjar Logistics",
    "Haryana Freight Transport",
    "MET City Logistics",
  ],
  authors: [{ name: SITE_CONFIG.companyName }],
  creator: SITE_CONFIG.companyName,
  publisher: SITE_CONFIG.companyName,
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "TLS — Transport Logistics Solutions",
    description:
      "Reliable road transportation, full truckload, commercial freight, and logistics coordination. Moving Your Business Forward.",
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.companyName,
    images: [
      {
        url: "/images/hero-truck.jpg",
        width: 1200,
        height: 630,
        alt: "TLS - Transport Logistics Solutions Freight Truck on Highway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TLS — Transport Logistics Solutions",
    description: "Reliable transportation and logistics solutions designed to keep your business moving.",
    images: ["/images/hero-truck.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data Schema (JSON-LD) using strictly verified business information
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    "name": SITE_CONFIG.companyName,
    "alternateName": SITE_CONFIG.brandName,
    "description": SITE_CONFIG.heroDescription,
    "telephone": SITE_CONFIG.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 201, Sector 8, MET City, Yakubpur",
      "addressLocality": "Jhajjar",
      "addressRegion": "Haryana",
      "postalCode": "124515",
      "addressCountry": "IN"
    },
    "slogan": SITE_CONFIG.supportingLine
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Anti-flash theme initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('tls_theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white dark:bg-navy-950 text-navy-950 dark:text-slate-100 antialiased selection:bg-tls-red selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
