export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  image: string;
  whatsappMessage: string;
  badge?: string;
  disclaimer?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'service';
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ApplicationItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Infrastructure';
  scope: string;
  description: string;
  image: string;
}

export const siteConfig = {
  companyName: "National Infratech Solutions",
  brandName: "National Infratech Solutions",
  tagline: "Powering Your World with Precision and Reliability.",
  heroEyebrow: "SOLAR • ELECTRICAL • INFRASTRUCTURE",
  heroHeadline: "Powering a Brighter Future with Solar Energy.",
  heroSubtitle: "Reliable solar and electrical solutions for homes, businesses and infrastructure projects across Maharashtra.",
  
  // Owner-confirmed contact parameters
  whatsappNumber: "917498646660", // wa.me target: 91 + 7498646660 without symbols
  displayPhone: "7498646660",
  rawPhone: "+91 7498646660",
  email: "prajwalnale356@gmail.com",
  
  // Service Areas
  serviceAreas: [
    { city: "Pune", state: "Maharashtra", country: "India", description: "Primary engineering & consultation hub" },
    { city: "Yavatmal", state: "Maharashtra", country: "India", description: "Regional project coordination" }
  ],
  serviceAreasText: "Pune and Yavatmal, Maharashtra, India",

  // Official Social profiles
  linkedinUrl: "https://www.linkedin.com/company/national-infratech-solution/about/",
  instagramUrl: "https://www.instagram.com/nis_solar/",

  // Navigation Links
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Estimator", href: "#estimator" },
    { name: "Process", href: "#process" },
    { name: "Applications", href: "#applications" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ],

  // 7 Confirmed Service Categories (README Section 2 & 5.E)
  services: [
    {
      id: "residential-rooftop-solar",
      title: "Residential Rooftop Solar",
      category: "Solar Solutions",
      shortDesc: "Tailored rooftop solar installations designed for independent bungalows, row houses, and residential societies.",
      description: "Harness clean solar energy directly on your roof to significantly offset grid electricity consumption with high-durability, safety-compliant mounting and precision electrical wiring.",
      benefits: [
        "Custom roof-structural assessment and shadow analysis",
        "Neat, safe cabling and robust earthing infrastructure",
        "Engineered for long-term weather resilience",
        "Direct consultation tailored to household consumption"
      ],
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
      whatsappMessage: "Hello National Infratech Solutions, I would like to enquire about Residential Rooftop Solar for my home.",
      badge: "Popular for Homes"
    },
    {
      id: "commercial-solar",
      title: "Commercial Solar",
      category: "Solar Solutions",
      shortDesc: "Energy-efficient solar power setups for commercial complexes, offices, retail spaces, and institutions.",
      description: "Optimise daytime operational energy expenditures with robust commercial solar setups planned around your building's structural load capacity and daily usage profile.",
      benefits: [
        "Tailored for high daytime operating electricity loads",
        "Engineered for structural safety and roof longevity",
        "High-performance balance of system (BOS) components",
        "Seamless grid synchronization and safety switches"
      ],
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1000&q=80",
      whatsappMessage: "Hello National Infratech Solutions, I would like to enquire about Commercial Solar solutions for our business facility.",
      badge: "Commercial"
    },
    {
      id: "industrial-solar",
      title: "Industrial Solar",
      category: "Solar Solutions",
      shortDesc: "High-capacity solar systems for manufacturing sheds, warehouses, and industrial estates.",
      description: "Engineered specifically for heavy industrial environments with complex power factor requirements, metal shed structural mounting, and industrial-grade surge protection.",
      benefits: [
        "Engineered for corrugated and standing-seam industrial sheds",
        "Heavy-duty switchgear and industrial isolation breakers",
        "Robust harmonics management and power quality focus",
        "Precision execution matching industrial safety protocols"
      ],
      image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=80",
      whatsappMessage: "Hello National Infratech Solutions, I would like to enquire about Industrial Solar systems for our manufacturing facility.",
      badge: "Industrial"
    },
    {
      id: "electrical-infrastructure",
      title: "Electrical Infrastructure",
      category: "Electrical Engineering",
      shortDesc: "Complete power distribution, line work, HT/LT cabling, panel installation, and electrical substructure.",
      description: "Backed by core electrical engineering domain expertise, National Infratech Solutions delivers end-to-end electrical infrastructure, transformer integration, cable terminations, and power lines with uncompromising safety standards.",
      benefits: [
        "HT & LT cable routing and certified termination",
        "Distribution panel setup and protection testing",
        "High-reliability grounding and lightning arrestor systems",
        "Strict compliance with Indian electrical safety standards"
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
      whatsappMessage: "Hello National Infratech Solutions, I would like to enquire about Electrical Infrastructure and Line Work.",
      badge: "Engineering Core"
    },
    {
      id: "solar-maintenance",
      title: "Solar Maintenance & Support",
      category: "Asset Care",
      shortDesc: "Preventative health check-ups, panel cleaning guidance, electrical diagnostics, and performance optimization.",
      description: "Ensure your solar assets operate safely at optimal generation capacity with structured inspection of connections, inverters, structural clamps, and junction boxes.",
      benefits: [
        "Inverter health diagnostics and error logging check",
        "String voltage and open-circuit current verification",
        "Mounting clamp torque verification and structural stability check",
        "Earthing resistance measurement and wire insulation check"
      ],
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80",
      whatsappMessage: "Hello National Infratech Solutions, I would like to enquire about Solar Maintenance and System Health Check.",
      badge: "Care & Support"
    },
    {
      id: "solar-consultation",
      title: "Solar Consultation & Assessment",
      category: "Advisory",
      shortDesc: "Feasibility studies, roof load analysis, energy audit reviews, and transparent system planning.",
      description: "Make an informed renewable energy investment. Our engineering team evaluates your roof structure, shadow cast, past electricity bills, and sanctioned load to propose the optimal capacity.",
      benefits: [
        "Roof structural condition and shadow path review",
        "Electricity bill tariff slab and consumption analysis",
        "Unbiased capacity sizing matching realistic daytime loads",
        "Clear explanation of on-grid connectivity and net-metering steps"
      ],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      whatsappMessage: "Hello National Infratech Solutions, I would like to book a Solar Consultation and Site Assessment.",
      badge: "Engineering Advice"
    },
    {
      id: "government-solar-schemes",
      title: "Government Solar Schemes",
      category: "Guidance",
      shortDesc: "Informational consultation on central and state rooftop solar policies and consumer eligibility frameworks.",
      description: "Navigate current renewable policy frameworks. We provide technical advisory on consumer application steps, standard documentation needed, and grid integration requirements.",
      benefits: [
        "Information on standard residential rooftop guidelines",
        "Guidance on consumer documentation and sanction requirements",
        "Technical coordination for DISCOM net-metering compliance",
        "Honest, transparent guidance without unverified claims"
      ],
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80",
      whatsappMessage: "Hello National Infratech Solutions, I would like to enquire about Government Solar Schemes and process requirements.",
      badge: "Policy Guidance",
      disclaimer: "Informational guidance only. National Infratech Solutions assists with engineering and installation feasibility; final subsidy approvals, eligibility criteria, and disbursements are governed solely by respective DISCOM / Ministry portals."
    }
  ] as ServiceItem[],

  // Feature Section Accordion (DESIGN_README Section 9)
  features: [
    {
      title: "Precision Solar System Planning",
      description: "Every installation begins with detailed site assessment, shadow path study, and structural load analysis. We never use one-size-fits-all sizing, ensuring your system performs reliably across seasons."
    },
    {
      title: "Efficient Energy Use & Load Matching",
      description: "We configure systems to match your peak operational hours and sanctioned load capacity, maximizing self-consumption and reducing dependence on expensive peak grid tariffs."
    },
    {
      title: "Quality Installation & Safety Practices",
      description: "Engineered with heavy-gauge hot-dip galvanized or anodized aluminum structures, certified UV-resistant solar cables, and multi-point dedicated chemical earthing for comprehensive lightning protection."
    },
    {
      title: "Core Electrical Engineering Standards",
      description: "With roots in heavy electrical line and infrastructure work, our team treats every rooftop system with the same rigorous electrical isolation, circuit protection, and safety protocols required by industrial facilities."
    },
    {
      title: "Direct Support & Transparent Communication",
      description: "No middlemen or high-pressure sales tactics. You communicate directly with qualified technical personnel who prioritize your property's safety and practical energy returns."
    }
  ],

  // Process Steps (README Section 5.G)
  processSteps: [
    {
      step: "01",
      title: "Initial Enquiry",
      subtitle: "Connect on WhatsApp",
      description: "Send us a quick message on WhatsApp specifying your location (Pune, Yavatmal, or surrounding area) and whether you require residential, commercial, or electrical services."
    },
    {
      step: "02",
      title: "Requirement Review",
      subtitle: "Consumption & bill study",
      description: "Share your latest electricity bill and basic rooftop or premise details. We analyze your average monthly unit consumption and existing sanctioned load."
    },
    {
      step: "03",
      title: "Site Assessment",
      subtitle: "Physical or structural review",
      description: "NIS reviews your site conditions, assessing roof layout, directional orientation, shadow obstructions, and cable routing paths for maximum safety and yield."
    },
    {
      step: "04",
      title: "Custom Proposal",
      subtitle: "Transparent quotation",
      description: "Receive a clearly outlined proposal specifying the recommended kW system capacity, high-durability balance of systems, and realistic generation expectations."
    },
    {
      step: "05",
      title: "Precision Installation",
      subtitle: "Execution & commissioning",
      description: "Our technical team carries out structural mounting, inverter integration, earthing pits, and AC/DC distribution boxes following rigorous safety guidelines."
    },
    {
      step: "06",
      title: "Handover & Support",
      subtitle: "Care & maintenance",
      description: "Comprehensive system orientation, documentation handover, and guidance on maintaining peak panel cleanliness and operational health."
    }
  ] as ProcessStep[],

  // Frequently Asked Questions (README Section 5.J)
  faqs: [
    {
      id: "faq-1",
      question: "Is my roof suitable for solar?",
      answer: "Most reinforced concrete (RCC) flat roofs, metal industrial sheds, and tiled roofs with adequate structural strength are suitable. Key factors include having an unshaded area facing south or south-west and sufficient space (typically ~80 to 100 sq.ft per 1 kW of solar panels). NIS evaluates your specific roof layout during site consultation.",
      category: "general"
    },
    {
      id: "faq-2",
      question: "What information is needed to get a quotation?",
      answer: "To prepare an initial estimate, we typically require: (1) Your property location (Pune or Yavatmal region), (2) A copy or unit count from your recent electricity bill, (3) Your property type (bungalow, apartment society, commercial building, or industrial shed), and (4) Approximate available roof space. You can share these directly with us via WhatsApp.",
      category: "general"
    },
    {
      id: "faq-3",
      question: "How is the solar system size decided?",
      answer: "System capacity is determined by your average monthly kilowatt-hour (unit) consumption, your contracted sanctioned load with the local DISCOM (MSEDCL), and the usable shadow-free roof area. We design systems to optimize your daytime consumption without exceeding statutory connection limits.",
      category: "technical"
    },
    {
      id: "faq-4",
      question: "How long does a typical installation take?",
      answer: "Physical mounting and electrical installation for a standard residential rooftop system (3 kW to 10 kW) typically takes 3 to 7 working days once equipment is dispatched to the site. Commercial and industrial installations depend on system size, shed type, and electrical infrastructure scope.",
      category: "service"
    },
    {
      id: "faq-5",
      question: "What maintenance does a solar system need?",
      answer: "Rooftop solar systems have no moving parts and require minimal day-to-day upkeep. Periodic cleaning of panel glass surfaces with clean water (every 10-15 days depending on local dust) maintains peak generation. NIS also offers comprehensive inspection services to check inverter logs, structural torque, and earthing resistance.",
      category: "service"
    },
    {
      id: "faq-6",
      question: "Does NIS provide residential and commercial solutions?",
      answer: "Yes. National Infratech Solution provides engineering solutions across Residential Rooftops, Commercial Buildings, Industrial Facilities, and Core Electrical Infrastructure. We tailor the electrical engineering, switchgear, and mounting hardware to suit each environment.",
      category: "general"
    },
    {
      id: "faq-7",
      question: "How can I enquire about electrical installation work?",
      answer: "Simply connect with our engineering desk via WhatsApp (7498646660) or phone. Specify your requirement—such as HT/LT line work, power panel installation, industrial cable termination, or transformer connectivity in the Pune or Yavatmal regions.",
      category: "service"
    },
    {
      id: "faq-8",
      question: "What areas does NIS serve?",
      answer: "Our primary confirmed service hubs are Pune, Maharashtra and Yavatmal, Maharashtra, India. We undertake residential, commercial, industrial, and electrical infrastructure projects across these regions.",
      category: "general"
    }
  ] as FAQItem[],

  // Illustrative Application Categories (README Section 5.H: Clearly labeled illustrative)
  applications: [
    {
      id: "app-1",
      title: "Residential Terrace Solar Array",
      category: "Residential",
      scope: "Elevated rooftop structure preserving terrace space",
      description: "Installed on custom elevated hot-dip galvanized structures, providing shade and allowing full functional use of the terrace underneath.",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "app-2",
      title: "Commercial Office Complex Solar",
      category: "Commercial",
      scope: "Flat RCC roof installation with synchronized inverters",
      description: "Designed to offset heavy HVAC, computer servers, and commercial lighting loads during peak daytime commercial tariff slabs.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "app-3",
      title: "Industrial Metal Shed Solar Array",
      category: "Industrial",
      scope: "Non-penetrative clamp mounting on trapezoidal sheet",
      description: "Engineered specifically for heavy industrial metal roofs using waterproof seam clamps and industrial-grade surge suppression.",
      image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "app-4",
      title: "Power Distribution & Line Infrastructure",
      category: "Infrastructure",
      scope: "Substation cabling, switchgear and LT/HT panels",
      description: "Precision electrical infrastructure execution including industrial transformer wiring, high-capacity busbars, and safety grounding pits.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "app-5",
      title: "Housing Society Common-Area Solar",
      category: "Residential",
      scope: "Net-metered array for lifts, water pumps, and lighting",
      description: "Powers common amenities in residential housing societies, drastically lowering monthly maintenance outgo for residents.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "app-6",
      title: "Industrial Sub-distribution Network",
      category: "Infrastructure",
      scope: "Heavy industrial cable routing and protective breakers",
      description: "Structured power distribution networks engineered for manufacturing workshops with high inductive motor starting currents.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    }
  ] as ApplicationItem[],

  // Honest trust notice regarding customer verification (README Section 2 & 5.I)
  trustNotice: {
    title: "Engineering Integrity & Real Value",
    statement: "National Infratech Solution operates on a strict code of engineering accuracy and safety. We do not publish unverified customer ratings, synthetic testimonials, or exaggerated generation guarantees. Every solar system and electrical installation we undertake is engineered to Indian safety standards, site-verified, and supported directly by our engineering team.",
    highlights: [
      "Factual site assessments without exaggerated generation promises",
      "Direct communication with technical engineers in Pune & Yavatmal",
      "Robust electrical line work and dedicated earthing protection",
      "Transparent quotations tailored to your verified power consumption"
    ]
  }
};
