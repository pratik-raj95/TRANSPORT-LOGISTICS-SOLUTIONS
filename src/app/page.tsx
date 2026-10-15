import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-navy-950 text-navy-950 dark:text-white transition-colors duration-300">
      {/* Sticky Header with Official TLS Logo & Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Proposed Services Section */}
        <ServicesSection />

        {/* About Section */}
        <AboutSection />

        {/* Why Choose TLS Section */}
        <WhyChooseUs />

        {/* 4-Step Process Section */}
        <ProcessSection />

        {/* Quote & Contact Section */}
        <ContactSection />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Direct WhatsApp Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
