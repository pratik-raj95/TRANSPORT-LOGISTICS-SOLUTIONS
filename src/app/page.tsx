import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FleetShowcase } from "@/components/FleetShowcase";
import { IndustriesSection } from "@/components/IndustriesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { ConversionSection } from "@/components/ConversionSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { MobileBottomBar } from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-navy-950 text-navy-950 dark:text-white transition-colors duration-300 pb-16 md:pb-0">
      {/* 1. Header with Top Utility Bar & Main Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* A & B: Cinematic Hero with Trust & Business Highlights */}
        <HeroSection />

        {/* C: Company Introduction */}
        <AboutSection />

        {/* D: Logistics Services Showcase */}
        <ServicesSection isPreview={true} />

        {/* E: Commercial Fleet Showcase */}
        <FleetShowcase isPreview={true} />

        {/* F: Industries Served */}
        <IndustriesSection isPreview={true} />

        {/* G: Why Choose TLS Transport */}
        <WhyChooseUs />

        {/* H: 4-Step Operational Workflow */}
        <ProcessSection />

        {/* I: Accessible FAQ Accordion */}
        <FAQSection />

        {/* J: Conversion CTA Section */}
        <ConversionSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Direct WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Mobile Bottom Conversion Bar */}
      <MobileBottomBar />
    </div>
  );
}
