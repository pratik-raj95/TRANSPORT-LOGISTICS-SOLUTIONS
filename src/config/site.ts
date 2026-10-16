export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Truck' | 'PackageCheck' | 'Boxes' | 'Container' | 'Workflow' | 'Headphones' | 'ShieldCheck' | 'Car' | 'Compass' | 'Layers' | 'Building2';
  tag: string;
  image: string;
  highlights: string[];
  cargoTypes: string[];
  operationalBenefits: string[];
}

export interface FleetItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  suitableFor: string[];
  features: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  keyChallenges: string;
  solutions: string[];
}

export interface LocationHub {
  name: string;
  region: string;
  badge: string;
  description: string;
  keyRoutes: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const SITE_CONFIG = {
  companyName: "TLS — Transport Logistics Solutions",
  brandName: "TLS Transport",
  brandDescriptor: "TRANSPORT LOGISTICS SOLUTIONS",
  tagline: "Moving Your Business Forward.",
  eyebrow: "TRANSPORTATION • LOGISTICS • SOLUTIONS",
  heroDescription:
    "Reliable road transportation, dedicated full truckload capacity, and disciplined logistics coordination designed to keep your supply chain moving predictably.",
  supportingLine: "Your Logistics. Our Commitment.",
  
  // Official verified details - STRICTLY AUTHORITATIVE
  address: "Plot No. 201, Sector 8, MET City, Yakubpur, Jhajjar, Haryana 124515, India.",
  phone: "09311606860",
  phoneDisplay: "+91 93116 06860",
  phoneRaw: "09311606860",
  phoneLink: "tel:+919311606860",
  whatsappNumber: "919311606860",
  whatsappUrl: "https://wa.me/919311606860",
  
  // Google Maps link for the verified Jhajjar MET City address
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Plot+No.+201,+Sector+8,+MET+City,+Yakubpur,+Jhajjar,+Haryana+124515,+India",
  mapsEmbedQuery: "Plot+No.+201,+Sector+8,+MET+City,+Yakubpur,+Jhajjar,+Haryana+124515,+India",

  // Operational desk hours (truthful description)
  workingHours: "Monday – Saturday: 9:00 AM – 8:00 PM (IST)",
  hubLocation: "MET City, Jhajjar, Haryana",

  // Global Navigation Links (7 Core Pages)
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Fleet", href: "/fleet" },
    { label: "Industries", href: "/industries" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" },
  ],

  // 12 Standard Services Inspired by Modern Enterprise Logistics
  services: [
    {
      slug: "truck-transportation",
      title: "Truck Transportation",
      shortDesc: "Commercial freight transport across key regional and national industrial corridors.",
      fullDesc: "Dedicated road truck transportation tailored for commercial cargo movements. We coordinate placement of heavy and medium commercial vehicles with planned transit schedules, experienced highway operators, and disciplined dispatch monitoring.",
      iconName: "Truck",
      tag: "Commercial Transport",
      image: "/images/services/truck-transportation.jpg",
      highlights: [
        "Regional and inter-state highway transit",
        "Scheduled dispatch with loading dock alignment",
        "Direct point-to-point consignment handling",
        "Experienced highway drivers and route planning"
      ],
      cargoTypes: [
        "Manufactured industrial equipment",
        "Building and structural materials",
        "Commercial boxed consignments",
        "Raw materials and bulk packaging"
      ],
      operationalBenefits: [
        "Dedicated point-to-point transit without intermediate unloading",
        "Proactive milestone updates between sender and receiver",
        "Direct vehicle placement from our Jhajjar operational hub"
      ]
    },
    {
      slug: "trailer-transportation",
      title: "Trailer Transportation",
      shortDesc: "Multi-axle flatbed and semi-lowbed trailers for heavy, oversized, and bulk loads.",
      fullDesc: "Structured trailer haulage designed for heavy-duty freight, structural components, and long-length materials that exceed standard truck body dimensions. Every movement involves route surveying and axle weight balancing.",
      iconName: "Container",
      tag: "Heavy Haulage",
      image: "/images/services/trailer-transportation.jpg",
      highlights: [
        "40 Ft flatbed and semi-lowbed trailer configurations",
        "Multi-axle trailers for weight distribution",
        "Specialized securing, lashing, and tarping standards",
        "Route assessment for height and turning clearance"
      ],
      cargoTypes: [
        "Steel beams, coils, and industrial fabrication",
        "Heavy machinery and project components",
        "Precast concrete structures and pipes",
        "Long-dimension commercial consignments"
      ],
      operationalBenefits: [
        "Engineered cargo placement for highway stability",
        "Compliance with national highway payload regulations",
        "Dedicated operations coordinator for heavy consignments"
      ]
    },
    {
      slug: "tempo-transportation",
      title: "Tempo Transportation",
      shortDesc: "Agile light commercial vehicles (LCV) for short-haul and urban regional distribution.",
      fullDesc: "Fast, flexible light commercial vehicle (LCV) movements ideal for partial consignments, intra-city transit, and time-sensitive express deliveries between factories, warehouses, and distribution centers.",
      iconName: "Boxes",
      tag: "LCV Distribution",
      image: "/images/services/tempo-transportation.jpg",
      highlights: [
        "Tata 407, Bolero Maxi, and medium LCV options",
        "Fast turnaround for regional distribution",
        "Access to restricted urban and industrial zones",
        "Ideal for urgent spares and component replenishment"
      ],
      cargoTypes: [
        "Factory replacement parts and sub-assemblies",
        "Retail cartons and packaged consumer goods",
        "Time-critical commercial parcels",
        "Localized vendor-to-plant inventory runs"
      ],
      operationalBenefits: [
        "High agility through dense traffic corridors",
        "Rapid same-day dispatch across Delhi-NCR & Haryana",
        "Economical alternative for partial weight requirements"
      ]
    },
    {
      slug: "container-transportation",
      title: "Container Transportation",
      shortDesc: "Weatherproof containerized movements ensuring safety against pilferage and moisture.",
      fullDesc: "High-security container truck transportation for high-value goods, electronics, FMCG, and export-import consignments requiring tamper-evident seals and complete weather protection during transit.",
      iconName: "Container",
      tag: "Secure Transit",
      image: "/images/services/container-transportation.jpg",
      highlights: [
        "32 Ft single-axle and multi-axle container bodies",
        "Tamper-proof lockable cargo enclosures",
        "Full protection against rain, dust, and highway debris",
        "Seamless connectivity to ICDs and port logistics"
      ],
      cargoTypes: [
        "Consumer electronics and appliances",
        "FMCG, personal care, and packaged foods",
        "Garments, textiles, and finished retail merchandise",
        "High-value automotive spare parts"
      ],
      operationalBenefits: [
        "Zero exposure to weather elements during monsoons",
        "Elimination of en-route handling loss or damage",
        "Standardized dimensions for swift dock loading"
      ]
    },
    {
      slug: "odc-transportation",
      title: "ODC Transportation",
      shortDesc: "Over Dimensional Cargo (ODC) handling with dedicated escort and route clearances.",
      fullDesc: "Specialized logistics engineering for Over Dimensional Cargo (ODC) and super heavy machinery. Our team coordinates route planning, bridge load assessments, utility clearances, and hydraulic trailer arrangements.",
      iconName: "Workflow",
      tag: "Specialized Logistics",
      image: "/images/services/odc-transportation.jpg",
      highlights: [
        "Customized multi-axle hydraulic trailers",
        "Comprehensive route survey and overhead obstacle mapping",
        "Trained crew for precision tie-down and safety escort",
        "Careful transit speed management"
      ],
      cargoTypes: [
        "Power generation turbines and transformers",
        "Heavy industrial boilers and pressure vessels",
        "Earthmoving and construction equipment",
        "Factory manufacturing line machinery"
      ],
      operationalBenefits: [
        "Dedicated engineering risk assessment for each move",
        "Adherence to statutory highway safety norms",
        "Continuous dispatch reporting to client project team"
      ]
    },
    {
      slug: "vehicle-transportation",
      title: "Vehicle Transportation",
      shortDesc: "Dedicated carrier solutions for safe commercial and fleet vehicle movements.",
      fullDesc: "Safe, secure transport of utility vehicles, tractors, commercial chassis, and machinery using purpose-built vehicle carriers and secure flatbed tie-down mechanisms.",
      iconName: "Car",
      tag: "Automotive Transport",
      image: "/images/services/vehicle-transportation.jpg",
      highlights: [
        "Wheel-chock securing and multi-point ratchet lashing",
        "Enclosed and specialized carrier configurations",
        "Experienced drivers trained in vehicle handling",
        "Direct factory-to-dealership distribution"
      ],
      cargoTypes: [
        "Commercial chassis and light utility trucks",
        "Agricultural tractors and farm implements",
        "Industrial utility vehicles and golf carts",
        "OEM prototypes and dealership fleet transfers"
      ],
      operationalBenefits: [
        "Zero additional mileage accumulated on vehicles",
        "Complete protection against road stone chips and wear",
        "Systematic vehicle handover documentation"
      ]
    },
    {
      slug: "car-transportation",
      title: "Car Transportation",
      shortDesc: "Enclosed and open car carrier services for individual and dealership vehicles.",
      fullDesc: "Professional passenger automobile relocation services for corporate relocations, dealerships, and manufacturers. Vehicles are loaded with low-angle ramps and locked with soft wheel tie-downs to ensure zero scratch delivery.",
      iconName: "Car",
      tag: "Car Carrier",
      image: "/images/services/car-transportation.jpg",
      highlights: [
        "Multi-car carriers and dedicated single-car trucks",
        "Soft-strap wheel anchoring without frame contact",
        "Detailed vehicle condition inspection report at pickup",
        "Direct doorstep or hub-to-hub delivery"
      ],
      cargoTypes: [
        "Sedans, SUVs, and luxury passenger cars",
        "Corporate executive relocation vehicles",
        "New car inventory for automotive dealerships",
        "Electric vehicles (EV) with battery safety protocols"
      ],
      operationalBenefits: [
        "Complete physical protection from origin to destination",
        "Photographic inspection before and after transit",
        "Direct WhatsApp milestone updates for owners"
      ]
    },
    {
      slug: "lorry-transportation",
      title: "Lorry Transportation",
      shortDesc: "Traditional open-top lorries offering versatile crane loading and heavy material transit.",
      fullDesc: "Open-body lorry transport services designed for goods that require top crane loading, side forklift access, or rugged transport conditions across construction sites and industrial zones.",
      iconName: "Truck",
      tag: "Open Body",
      image: "/images/services/lorry-transportation.jpg",
      highlights: [
        "Drop-side and high-side open body configurations",
        "Heavy-duty waterproof tarpaulin covering",
        "Easy overhead crane loading at manufacturing yards",
        "High payload capacity for dense industrial goods"
      ],
      cargoTypes: [
        "Steel rods, structural angles, and pipes",
        "Timber, stone slabs, and building aggregates",
        "Heavy casting components and forging goods",
        "Industrial scrap and raw commodity shipments"
      ],
      operationalBenefits: [
        "Fast loading and unloading turnaround times",
        "Adaptable to irregular cargo shapes and dimensions",
        "Economical freight rate for durable commercial goods"
      ]
    },
    {
      slug: "freight-transportation",
      title: "Freight Transportation",
      shortDesc: "End-to-end commercial freight management for supply chains and manufacturing lines.",
      fullDesc: "Scheduled freight movement contracts for B2B enterprises needing predictable daily or weekly transit capacity between manufacturing facilities, suppliers, and regional warehouses.",
      iconName: "PackageCheck",
      tag: "Scheduled Freight",
      image: "/images/services/service-freight.jpg",
      highlights: [
        "Committed vehicle allocation for recurring freight",
        "Defined transit time agreements and route monitoring",
        "Consolidated billing and documentation support",
        "Single-point operations coordinator assigned to your account"
      ],
      cargoTypes: [
        "Palletized industrial goods and assemblies",
        "Packaging materials and corrugated containers",
        "Engineering consumables and sub-components",
        "Inter-plant semi-finished inventory"
      ],
      operationalBenefits: [
        "Protection against spot market freight price volatility",
        "Reliable dock scheduling to avoid factory floor buildup",
        "Standardized transit times along contracted corridors"
      ]
    },
    {
      slug: "storage-warehousing",
      title: "Storage and Warehousing",
      shortDesc: "Structured cargo staging, temporary storage, and transit holding solutions.",
      fullDesc: "Short-term storage and cargo staging support designed to cushion supply chain fluctuations, consolidate multi-vendor consignments, and coordinate planned distribution across Haryana and Delhi-NCR.",
      iconName: "Building2",
      tag: "Cargo Staging",
      image: "/images/services/storage-warehousing.jpg",
      highlights: [
        "Secure staging facilities near MET City Jhajjar hub",
        "Forklift and material handling equipment on site",
        "Inventory segregation and cross-docking assistance",
        "Flexible daily, weekly, or monthly transit storage"
      ],
      cargoTypes: [
        "Staged factory inventory awaiting batch dispatch",
        "Consolidated cargo prior to full truckload building",
        "Buffer stock for automotive Tier-1 and Tier-2 suppliers",
        "Commercial equipment awaiting site readiness"
      ],
      operationalBenefits: [
        "Avoids demurrage and site detention charges",
        "Enables bulk transit consolidation to lower unit freight",
        "Clean, well-maintained storage environment"
      ]
    },
    {
      slug: "close-body-truck",
      title: "Close Body Truck Services",
      shortDesc: "Weatherproof, sealed close-body container trucks for zero-leakage commercial cargo.",
      fullDesc: "Fixed-wall, all-metal close body trucks built to protect sensitive cargo from atmospheric moisture, dust, rain, and transit theft. Recommended for FMCG, pharmaceuticals, apparel, and electronic appliances.",
      iconName: "ShieldCheck",
      tag: "Weatherproof",
      image: "/images/services/close-body-truck.jpg",
      highlights: [
        "Solid steel and aluminum alloy body construction",
        "Rear double-door locking with commercial bolt seals",
        "Smooth internal lining to avoid carton scuffing",
        "20 Ft, 24 Ft, and 32 Ft body sizes available"
      ],
      cargoTypes: [
        "Pharmaceutical cartons and medical supplies",
        "Packaged food, confectionary, and FMCG items",
        "Branded retail clothing and footwear",
        "Precision electronic parts and instrumentation"
      ],
      operationalBenefits: [
        "Complete peace of mind through extreme weather conditions",
        "Zero requirement for manual tarpaulin handling",
        "Enhanced security against highway theft"
      ]
    },
    {
      slug: "pan-india-logistics",
      title: "Pan-India Logistics",
      shortDesc: "Inter-state highway connectivity linking Northern industrial belts with major metros.",
      fullDesc: "Long-haul highway freight coordination connecting MET City Jhajjar and Delhi-NCR with major manufacturing hubs, port gateways, and commercial consumption markets across India.",
      iconName: "Compass",
      tag: "National Corridors",
      image: "/images/services/pan-india-logistics.jpg",
      highlights: [
        "Established line-haul routes linking North, West, and South",
        "Toll plaza compliance and Fastag transit management",
        "Inter-state permit and e-way bill compliance check",
        "Network of highway assistance checkpoints"
      ],
      cargoTypes: [
        "Inter-state factory-to-distribution center consignments",
        "Bulk commercial distribution runs",
        "Heavy industrial line-haul freight",
        "High-volume raw material movements"
      ],
      operationalBenefits: [
        "Comprehensive single-source transport partner",
        "Consistent operations protocol regardless of destination",
        "Transparent transit updates from start to delivery"
      ]
    }
  ] as ServiceDetail[],

  // 6 Verified Fleet Showcase Categories
  fleet: [
    {
      id: "container-trucks",
      title: "32 Ft Multi-Axle Container Trucks",
      category: "Containerized Fleet",
      image: "/images/fleet/fleet-container-truck.jpg",
      description: "Heavy-duty 32-foot enclosed container trucks engineered for high-volume, secure road transport across national highway corridors.",
      suitableFor: ["Electronics & Appliances", "FMCG Cartons", "Export/Import Goods", "High-Value Cargo"],
      features: [
        "Payload Capacity: Suitable for heavy multi-axle freight",
        "Body Type: Full metal enclosed container with sealed doors",
        "Security: Tamper-evident lockable latch systems",
        "Route Capability: National highway line-haul routes"
      ]
    },
    {
      id: "flatbed-trailers",
      title: "40 Ft Flatbed & Semi-Lowbed Trailers",
      category: "Heavy Haulage",
      image: "/images/fleet/fleet-trailer.jpg",
      description: "Multi-axle heavy trailers built for carrying industrial machinery, structural steel, precast components, and over-length cargo.",
      suitableFor: ["Structural Steel & Beams", "Heavy Project Machinery", "Precast Concrete", "Oversized Fabrications"],
      features: [
        "Platform Length: 40 Ft flatbed surface",
        "Axle Config: Multi-axle for balanced weight distribution",
        "Loading: Open access for overhead cranes and side forklifts",
        "Securing: Multi-point heavy ratchet binders and chains"
      ]
    },
    {
      id: "closed-body",
      title: "20 Ft / 24 Ft Close Body Trucks",
      category: "Secure Weatherproof",
      image: "/images/fleet/fleet-closed-body.jpg",
      description: "All-weather closed body cargo vehicles providing 100% protection against dust, rain, and transit tampering for sensitive merchandise.",
      suitableFor: ["Pharmaceuticals & Healthcare", "Packaged Foods & Retail", "Auto Parts", "Apparel & Textiles"],
      features: [
        "Body: Rigid metal box body with insulated roof",
        "Protection: Zero moisture infiltration in monsoon",
        "Handling: Optimized for standard pallet dimensions",
        "Transit: Express regional and inter-city connectivity"
      ]
    },
    {
      id: "open-body-trucks",
      title: "Heavy Duty Open Body Trucks",
      category: "Rugged Commercial",
      image: "/images/fleet/fleet-open-body.jpg",
      description: "Traditional high-capacity open-body trucks offering versatile crane and forklift loading for heavy raw materials and machinery.",
      suitableFor: ["Industrial Raw Materials", "Building Infrastructure Goods", "Heavy Castings", "Bulk Packed Items"],
      features: [
        "Loading Access: Top crane and three-side drop gates",
        "Covering: High-density multi-layer waterproof tarpaulins",
        "Durability: Heavy-duty suspension for industrial access roads",
        "Turnaround: Rapid yard loading and unloading"
      ]
    },
    {
      id: "tempo-lcv",
      title: "Light Commercial Vehicles & Tempos",
      category: "Agile Regional Distribution",
      image: "/images/fleet/fleet-tempo.jpg",
      description: "Agile LCVs including Tata 407 and Mahindra Bolero Maxi pickups for prompt regional dispatch, urban deliveries, and small consignments.",
      suitableFor: ["Urgent Spare Parts", "Intra-City Distribution", "Vendor Part Replenishment", "Small Commercial Batches"],
      features: [
        "Agility: Permits access into narrow industrial roads",
        "Speed: Quick dispatch with minimal loading turnaround",
        "Efficiency: Economical freight solution for partial loads",
        "Coverage: Delhi-NCR, Jhajjar, Gurugram, Manesar, Bawal"
      ]
    },
    {
      id: "odc-equipment",
      title: "Specialized ODC & Heavy Haul Equipment",
      category: "Specialized Project Cargo",
      image: "/images/fleet/fleet-odc.jpg",
      description: "Custom trailer combinations designed for Over Dimensional Cargo (ODC) and industrial machinery exceeding standard highway profiles.",
      suitableFor: ["Power Turbines & Boilers", "Heavy Earthmoving Machinery", "Industrial Presses", "Project Modules"],
      features: [
        "Configuration: Low deck height for overhead clearance",
        "Engineering: Route survey and pilot escort coordination",
        "Load Rating: Engineered heavy load distribution",
        "Monitoring: Dedicated operations coordinator on site"
      ]
    }
  ] as FleetItem[],

  // 6 Verified Industries Served
  industries: [
    {
      id: "manufacturing",
      title: "Manufacturing & Heavy Engineering",
      shortDesc: "Scheduled movement of raw materials, fabricated assemblies, and finished industrial products.",
      fullDesc: "Modern manufacturing operations require reliable transport partners who ensure just-in-time delivery of metal coils, machine components, casting products, and finished goods to keep assembly lines operating without disruption.",
      image: "/images/industries/industry-manufacturing.jpg",
      keyChallenges: "Production delays caused by delayed raw material arrival or damaged precision assemblies.",
      solutions: [
        "Dedicated point-to-point truck placement for manufacturing plants",
        "Secured lashing and wood-chock cushioning for heavy assemblies",
        "Disciplined communication with plant dispatch and receiving managers",
        "Scheduled milk-run coordination between component vendors and assembly lines"
      ]
    },
    {
      id: "automotive",
      title: "Automotive & Component Logistics",
      shortDesc: "Precision road transport for Tier-1, Tier-2 automotive suppliers and vehicle assemblers.",
      fullDesc: "Serving the bustling automotive corridor of Haryana (Jhajjar, Gurugram, Manesar, Bawal, Dharuhera) with disciplined transit of body stampings, electrical harnesses, engines, suspension components, and aftermarket parts.",
      image: "/images/industries/industry-automotive.jpg",
      keyChallenges: "Strict plant delivery windows; zero tolerance for in-transit transit vibration or scratches.",
      solutions: [
        "Weatherproof close body and container vehicles for clean part transit",
        "Priority transit dispatch matching plant production shift timings",
        "Trained drivers knowledgeable with automotive plant unloading docks",
        "Direct emergency transport available for urgent assembly line shortages"
      ]
    },
    {
      id: "construction",
      title: "Building Materials & Infrastructure",
      shortDesc: "Rugged transportation for steel, cement, pipes, sanitary fixtures, and site equipment.",
      fullDesc: "Infrastructure and real-estate projects demand continuous movement of heavy materials from factories to job sites. TLS provides heavy-duty open trucks, flatbed trailers, and lorries equipped to reach both urban sites and developing infrastructure projects.",
      image: "/images/industries/industry-construction.jpg",
      keyChallenges: "Unloading challenges at unpaved job sites; heavy weight distribution compliance.",
      solutions: [
        "Sturdy open-body lorries and trailers suitable for crane unhooking",
        "Strict adherence to highway payload safety norms",
        "Coordination with site engineers regarding delivery entry timing",
        "Multi-layer waterproof tarpaulins for cement and weather-sensitive cargo"
      ]
    },
    {
      id: "retail-fmcg",
      title: "FMCG, Consumer Goods & Retail",
      shortDesc: "High-volume containerized transport safeguarding packaged products against weather and tampering.",
      fullDesc: "Fast-moving consumer goods require seamless, clean, sealed transit from manufacturing hubs to central warehouses, mother distribution hubs, and retail distribution centers across regional corridors.",
      image: "/images/industries/industry-retail-fmcg.jpg",
      keyChallenges: "Carton damage, pilferage risks, and rain contamination during highway movement.",
      solutions: [
        "Sealed 32 Ft and 24 Ft containerized bodies with zero water seepage",
        "Tamper-proof bolt seals with documented seal numbers",
        "Palletized dock-friendly loading dimensions",
        "Direct point-to-point transit without intermediate cross-dock handling"
      ]
    },
    {
      id: "machinery",
      title: "Industrial Machinery & Capital Equipment",
      shortDesc: "Engineered transport for CNC machines, transformers, industrial boilers, and capital assets.",
      fullDesc: "High-value machinery moves represent significant capital investment. TLS handles machinery relocation with thorough center-of-gravity calculation, heavy chain binders, wooden dunnage, and precision driver speed discipline.",
      image: "/images/industries/industry-machinery.jpg",
      keyChallenges: "Delicate electronics and calibration components susceptible to road shock and tilt.",
      solutions: [
        "Flatbed trailers with anti-skid rubber mats and heavy ratchet restraints",
        "Tarping that shields delicate hydraulic cylinders and electrical panels",
        "Route assessments to circumvent low-hanging cables and bad road patches",
        "Assistance with staging at our Jhajjar facility prior to final installation"
      ]
    },
    {
      id: "pharma",
      title: "Pharmaceuticals & Healthcare Cargo",
      shortDesc: "Clean, dry, and protected transportation for pharmaceutical cartons, medical equipment, and supplies.",
      fullDesc: "Transportation of packaged medicines, healthcare consumables, surgical equipment, and laboratory devices in clean, enclosed vehicles adhering to hygienic cargo transport practices.",
      image: "/images/industries/industry-pharma.jpg",
      keyChallenges: "Moisture ingress, dust contamination, carton crushing, and unauthorized access.",
      solutions: [
        "Clean, fully sealed dry container trucks with inspection-ready interiors",
        "Careful weight stacking to protect secondary packaging and cartons",
        "Expedited transit schedules to preserve shelf-life and timing commitments",
        "Transparent WhatsApp milestone tracking for supply chain visibility"
      ]
    }
  ] as IndustryItem[],

  // 4 Regional Hubs & Operational Corridors
  corridors: [
    {
      name: "Primary Operations Hub: MET City, Jhajjar",
      region: "Haryana / Delhi-NCR Core",
      badge: "Headquarters & Central Dispatch",
      description: "Our core facility is strategically located at MET City, Yakubpur, Jhajjar, giving direct high-speed access to the KMP Expressway (Western Peripheral), NH-48 (Delhi-Jaipur), and NH-9 (Rohtak-Hisar).",
      keyRoutes: [
        "MET City Jhajjar ↔ Gurugram / Manesar Industrial Hubs",
        "MET City Jhajjar ↔ Kundli / Sonipat / Panipat Corridors",
        "MET City Jhajjar ↔ Bawal / Neemrana / Dharuhera Belts",
        "MET City Jhajjar ↔ Delhi ICDs & Commercial Markets"
      ]
    },
    {
      name: "Western Industrial Corridor",
      region: "Rajasthan & Gujarat Transit Link",
      badge: "Industrial & Port Gateway",
      description: "Direct highway line-haul routes connecting Haryana manufacturing units to key industrial clusters and maritime export hubs across Western India.",
      keyRoutes: [
        "Delhi-NCR / Haryana ↔ Jaipur / Bhiwadi / Kota",
        "Delhi-NCR / Haryana ↔ Ahmedabad / Sanand / Vadodara",
        "Delhi-NCR / Haryana ↔ Surat / Vapi / Mumbai / JNPT Gateway",
        "Delhi-NCR / Haryana ↔ Mundra / Kandla Port Corridors"
      ]
    },
    {
      name: "Northern Industrial Corridor",
      region: "Punjab, Himachal & Uttarakhand",
      badge: "Regional Distribution Lines",
      description: "Connecting Northern agricultural, pharmaceutical, and manufacturing centers with steady vehicle placement and timely return transit.",
      keyRoutes: [
        "Delhi-NCR / Jhajjar ↔ Ambala / Ludhiana / Jalandhar / Amritsar",
        "Delhi-NCR / Jhajjar ↔ Baddi / Solan Industrial Pharma Cluster",
        "Delhi-NCR / Jhajjar ↔ Dehradun / Haridwar / Rudrapur Line",
        "Delhi-NCR / Jhajjar ↔ Jammu & Kashmir Commercial Terminals"
      ]
    },
    {
      name: "Central & Eastern Corridors",
      region: "Uttar Pradesh, MP & Pan-India Connections",
      badge: "Commercial Line-Haul",
      description: "Structured transit for heavy commercial goods moving eastward along the Yamuna Expressway and national highway networks.",
      keyRoutes: [
        "Delhi-NCR / Jhajjar ↔ Noida / Greater Noida / Mathura / Agra",
        "Delhi-NCR / Jhajjar ↔ Lucknow / Kanpur / Varanasi Industrial Belts",
        "Delhi-NCR / Jhajjar ↔ Gwalior / Bhopal / Indore Commercial Hubs",
        "Delhi-NCR / Jhajjar ↔ Kolkata / Eastern Regional Gateways"
      ]
    }
  ] as LocationHub[],

  // Operational FAQs (Honest, Truthful, Accessible)
  faqs: [
    {
      question: "Where is TLS — Transport Logistics Solutions headquartered?",
      answer: "Our registered office and operations desk are located at Plot No. 201, Sector 8, MET City, Yakubpur, Jhajjar, Haryana 124515, India. This strategic location near the KMP Expressway allows us to coordinate vehicle placement rapidly across Haryana, Delhi-NCR, and interstate highway routes.",
      category: "General"
    },
    {
      question: "How do I request a transportation quote?",
      answer: "You can request a quote by filling out our online inquiry form on the website, clicking our WhatsApp button (+91 93116 06860), or calling our operations desk directly. We will review your pickup point, destination, cargo nature, and required vehicle type to provide a transparent assessment.",
      category: "Inquiries"
    },
    {
      question: "What vehicle types are available for hire?",
      answer: "We arrange a wide variety of commercial vehicles including 32 Ft multi-axle container trucks, 40 Ft flatbed trailers, 20 Ft and 24 Ft close body trucks, heavy open-body lorries, and light commercial vehicles (LCVs / Tempos like Tata 407 and Bolero Maxi).",
      category: "Fleet"
    },
    {
      question: "Do you offer Full Truckload (FTL) and Part Truckload (PTL)?",
      answer: "Yes, our core focus is dedicated Full Truckload (FTL) transportation for point-to-point commercial shipments. We also evaluate and coordinate Part Truckload (PTL) consolidations for commercial consignors along select active routes.",
      category: "Services"
    },
    {
      question: "How does TLS keep clients updated on shipment transit?",
      answer: "We believe in direct, proactive human communication. Our operations coordinators provide milestone updates via phone and WhatsApp at key stages: vehicle placement, loading completion, transit progress checkpoints, and final destination dock handover.",
      category: "Operations"
    },
    {
      question: "Can I dispatch my quotation details directly via WhatsApp?",
      answer: "Absolutely. Our website quote form features an instant 'Send via WhatsApp' button that compiles your pickup, destination, and cargo notes into a pre-formatted message sent directly to +91 93116 06860 for real-time review.",
      category: "Communication"
    }
  ] as FAQItem[],

  // 4-Step Operational Timeline
  steps: [
    {
      number: "01",
      title: "Share Requirements",
      description: "Provide origin, destination, cargo weight, and timing via our quote form, phone call, or direct WhatsApp.",
      detail: "Prompt assessment by our Jhajjar operations team"
    },
    {
      number: "02",
      title: "Commercial Quotation",
      description: "We review your freight parameters, evaluate route considerations, and provide a transparent, competitive quotation.",
      detail: "Operational alignment & vehicle matching"
    },
    {
      number: "03",
      title: "Vehicle Placement",
      description: "Confirmed vehicle is dispatched and placed at your pickup dock with scheduled loading coordination.",
      detail: "Careful lashing & documentation check"
    },
    {
      number: "04",
      title: "Transit & Handover",
      description: "Proactive transit checkpoint communication until safe, documented consignment delivery at your recipient's facility.",
      detail: "Signed delivery verification"
    }
  ],

  // 5 Core Value Propositions
  valueProps: [
    {
      title: "Structured Route Planning",
      description: "Carefully planned highway routes and vehicle allocation to keep your transit times predictable and avoid unnecessary delays.",
      iconName: "Route"
    },
    {
      title: "Direct Operations Communication",
      description: "Direct access to real operations coordinators at our Jhajjar desk. No automated phone trees or vague responses.",
      iconName: "MessageSquareCheck"
    },
    {
      title: "Disciplined Fleet Coordination",
      description: "Systematic vehicle verification, proper cargo securing standards, and experienced highway drivers.",
      iconName: "ShieldCheck"
    },
    {
      title: "Client-Centric Flexibility",
      description: "Attentive support responsive to business urgency, shift loading schedules, and time-critical industrial demands.",
      iconName: "Users"
    },
    {
      title: "Enterprise B2B Focus",
      description: "Logistics solutions designed specifically to support manufacturing schedules, vendor supply chains, and commercial distribution.",
      iconName: "Building2"
    }
  ]
};
