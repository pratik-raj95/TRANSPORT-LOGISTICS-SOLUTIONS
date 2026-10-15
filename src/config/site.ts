export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: 'Truck' | 'PackageCheck' | 'Boxes' | 'Container' | 'Workflow' | 'Headphones';
  tag: string;
  image: string;
  highlights: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface ValuePropItem {
  title: string;
  description: string;
  iconName: 'Route' | 'MessageSquareCheck' | 'ShieldCheck' | 'Users' | 'Building2';
}

export const SITE_CONFIG = {
  companyName: "TLS — Transport Logistics Solutions",
  brandName: "TLS",
  tagline: "Moving Your Business Forward.",
  eyebrow: "TRANSPORTATION • LOGISTICS • SOLUTIONS",
  heroDescription:
    "Reliable transportation and logistics solutions designed to keep your business moving, connect your operations, and support your delivery requirements.",
  supportingLine: "Your Logistics. Our Commitment.",
  
  // Official verified details - DO NOT ALTER
  address: "Plot No. 201, Sector 8, MET City, Yakubpur, Jhajjar, Haryana – 124515, India.",
  phone: "+91 93116 06860",
  phoneRaw: "9311606860",
  phoneLink: "tel:+919311606860",
  whatsappNumber: "919311606860",
  whatsappUrl: "https://wa.me/919311606860",
  
  // Google Maps search query link for the verified address
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Plot+No.+201,+Sector+8,+MET+City,+Yakubpur,+Jhajjar,+Haryana+124515,+India",

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why TLS", href: "#why-tls" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  // Proposed editable categories (clearly indicated as proposed capabilities)
  services: [
    {
      id: "road-transportation",
      title: "Road Transportation",
      shortDesc: "Commercial freight transport across key regional routes.",
      description: "Dedicated surface transportation tailored for freight movements with planned transit schedules and route monitoring.",
      iconName: "Truck",
      tag: "Proposed Capability",
      image: "/images/services/service-road.jpg",
      highlights: ["Regional line-haul routes", "Scheduled movements", "Freight route planning"]
    },
    {
      id: "full-truckload",
      title: "Full Truckload (FTL)",
      shortDesc: "Dedicated vehicle capacity for point-to-point consignments.",
      description: "Direct point-to-point truckload services intended for larger shipments requiring dedicated vehicle allocation.",
      iconName: "PackageCheck",
      tag: "Proposed Capability",
      image: "/images/services/service-ftl.jpg",
      highlights: ["Exclusive vehicle usage", "Direct origin-to-destination transit", "Reduced handling risk"]
    },
    {
      id: "part-truckload",
      title: "Part Truckload (PTL)",
      shortDesc: "Cost-effective transportation for partial freight volumes.",
      description: "Consolidated freight movements designed for commercial shipments that do not require an entire dedicated truck.",
      iconName: "Boxes",
      tag: "Proposed Capability",
      image: "/images/services/service-ptl.jpg",
      highlights: ["Consolidated load management", "Optimized freight expense", "Standardized handling"]
    },
    {
      id: "commercial-freight",
      title: "Commercial Freight",
      shortDesc: "Business-to-business logistics for industrial cargo.",
      description: "Logistics support structured for enterprise manufacturers, distributors, and trading businesses.",
      iconName: "Container",
      tag: "Proposed Capability",
      image: "/images/services/service-freight.jpg",
      highlights: ["B2B distribution support", "Industrial goods handling", "Documentation coordination"]
    },
    {
      id: "logistics-coordination",
      title: "Logistics Coordination",
      shortDesc: "End-to-end communication and dispatch coordination.",
      description: "Operational assistance to bridge consignors, transporters, and receiving locations for seamless handover.",
      iconName: "Workflow",
      tag: "Proposed Capability",
      image: "/images/services/service-coordination.jpg",
      highlights: ["Single point of coordination", "Proactive milestone updates", "Handover management"]
    },
    {
      id: "business-transport-support",
      title: "Business Transportation Support",
      shortDesc: "Tailored movement planning for recurring enterprise needs.",
      description: "Customized arrangement and logistical planning designed to match your company's operational rhythm.",
      iconName: "Headphones",
      tag: "Proposed Capability",
      image: "/images/services/service-support.jpg",
      highlights: ["Tailored operational planning", "Responsive client assistance", "Scalable support"]
    }
  ] as ServiceItem[],

  // 4-step visual timeline
  steps: [
    {
      number: "01",
      title: "Share Your Requirements",
      description: "Provide pickup location, destination, cargo type, and scheduling requirements through our quote form or direct WhatsApp line.",
      detail: "Initial requirements assessment"
    },
    {
      number: "02",
      title: "Discuss Your Shipment",
      description: "Our coordination team reviews your cargo volume, required transit timeframe, and proposes a suitable transportation arrangement.",
      detail: "Operational alignment & quotation"
    },
    {
      number: "03",
      title: "Coordinate Transportation",
      description: "We align vehicle placement, pickup coordination, and route planning according to the agreed shipment schedule.",
      detail: "Placement & transit coordination"
    },
    {
      number: "04",
      title: "Delivery Coordination",
      description: "Proactive communication until destination arrival and confirmed consignment handover to your receiving team.",
      detail: "Destination handover & verification"
    }
  ] as StepItem[],

  // Value propositions
  valueProps: [
    {
      title: "Transportation Planning",
      description: "Carefully structured route assessment and vehicle scheduling to keep shipments predictable and organized.",
      iconName: "Route"
    },
    {
      title: "Clear Communication",
      description: "Transparent, proactive updates from dispatch initiation through final destination handover without ambiguity.",
      iconName: "MessageSquareCheck"
    },
    {
      title: "Professional Coordination",
      description: "Disciplined operational management across loading docks, transit checkpoints, and recipient facilities.",
      iconName: "ShieldCheck"
    },
    {
      title: "Customer-Focused Service",
      description: "Attentive support responsive to business urgency, special consignment needs, and time-critical deliveries.",
      iconName: "Users"
    },
    {
      title: "Business-Oriented Support",
      description: "Logistics solutions designed specifically to support supply chains, manufacturing schedules, and commercial distribution.",
      iconName: "Building2"
    }
  ] as ValuePropItem[],

  // Core Value Highlights for About Section
  aboutHighlights: [
    {
      title: "Dependable Transportation",
      description: "Committed to timely transit and disciplined road operations to protect your supply chain consistency."
    },
    {
      title: "Professional Coordination",
      description: "Systematic communication between loading points and receiving facilities to minimize transit friction."
    },
    {
      title: "Customer-Focused Approach",
      description: "Direct, personal accessibility with fast responses to quotes, queries, and shipment coordination."
    }
  ]
};
