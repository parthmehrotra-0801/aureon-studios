export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  duration: string;
  metric: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
  scope: string[];
  description: string;
  stats: { label: string; value: string }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  overview: string;
  challenge: string;
  strategy: string;
  results: { label: string; value: string; percentageIncrease?: number }[];
  chartData: { name: string; benchmark: number; aureonEffect: number }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  isPopular?: boolean;
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  author: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    category: "Consulting",
    description: "Defining your brand's core soul, market positioning, target audience vectors, and long-term evolutionary roadmap.",
    details: [
      "Competitive Positioning Analysis",
      "Consumer Persona Modeling",
      "Brand Core Messaging Architectures",
      "Brand Voice & Narrative Alignment",
      "Market Entry Strategy"
    ],
    duration: "4 - 6 Weeks",
    metric: "100% Alignment"
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    category: "Design",
    description: "Architecting visual ecosystems of absolute distinction, featuring bespoke monograms, elegant print elements, and detailed brand guidelines.",
    details: [
      "Signature Logo & Monogram Crests",
      "Premium Color & Material Palettes",
      "Bespoke Editorial Typography curation",
      "Luxury Stationery & Packaging Design",
      "Digital Brand Style Guideline Assets"
    ],
    duration: "6 - 8 Weeks",
    metric: "Bespoke Assets"
  },
  {
    id: "marketing",
    title: "Marketing",
    category: "Growth",
    description: "Deploying sophisticated campaigns designed to resonate with high-discretion clientele and build deep loyalty.",
    details: [
      "Integrated Campaign Concepting",
      "Luxury Event & Brand Activations",
      "High-End Collateral Production",
      "Niche Audience Targeting Systems",
      "Strategic PR Consultation"
    ],
    duration: "Continuous",
    metric: "Targeted Impact"
  },
  {
    id: "perf-advertising",
    title: "Performance Advertising",
    category: "Data",
    description: "Optimizing cross-channel advertising with quantitative precision, ensuring maximum return on ad spend and premium visibility.",
    details: [
      "Meta, Google, & Programmatic Ad Buying",
      "Retargeting Funnel Engineering",
      "High-Fidelity Ad Creative Strategy",
      "Dynamic Split-Testing Frameworks",
      "Attribution Modeling & ROI Reporting"
    ],
    duration: "Continuous",
    metric: "Avg. 4.2x ROAS"
  },
  {
    id: "seo",
    title: "SEO Solutions",
    category: "Traffic",
    description: "Securing commanding, authoritative organic rankings for luxury keywords, driving elite-quality traffic to your digital storefront.",
    details: [
      "Elite Search-Intent Keyword Auditing",
      "On-Page Editorial Content Tuning",
      "High-Authority Backlink Acquisition",
      "Core Web Vitals Technical Auditing",
      "Local & International SEO Mapping"
    ],
    duration: "Continuous",
    metric: "+150% Organic Visibility"
  },
  {
    id: "social-media",
    title: "Social Media Management",
    category: "Engagement",
    description: "Curating highly aesthetic, micro-cinematic social grids that express prestige and spark sophisticated community discourse.",
    details: [
      "Multi-Channel Editorial Calendars",
      "Cinematic Reel & Short Video Strategy",
      "Elite Influencer Coordination",
      "Aesthetic Grid Formatting & Design",
      "Proactive Community Stewardship"
    ],
    duration: "Monthly",
    metric: "+85% Growth Rate"
  },
  {
    id: "web-dev",
    title: "Website Development",
    category: "Technology",
    description: "Engineering custom-built web apps and interactive storefronts featuring smooth scrolling, 3D Canvas rendering, and speed optimization.",
    details: [
      "Interactive 3D Experiences (WebGL/Three.js)",
      "Vite & React Native Engineering",
      "Headless CMS Integrations",
      "Fluid Layout Motion & Page Transitions",
      "Responsive Desktop-First Architectures"
    ],
    duration: "8 - 12 Weeks",
    metric: "60 FPS Transitions"
  },
  {
    id: "photography",
    title: "Luxury Photography",
    category: "Media",
    description: "Creating flawless visual captures that capture lighting, physical textures, and fine detail for print and digital mediums.",
    details: [
      "High-End Studio Product Photography",
      "Editorial Fashion & Lifestyle Shoots",
      "Architectural Interior / Exterior Capture",
      "Casting, Location, & Art Direction",
      "Ultra-Resolution Retouching Mastery"
    ],
    duration: "Project-Based",
    metric: "8K Native Resolution"
  },
  {
    id: "videography",
    title: "Cinematic Videography",
    category: "Media",
    description: "Directing cinematic films, brand advertisements, and vertical video narratives that establish a deep emotional connection.",
    details: [
      "4K Brand Manifesto Films",
      "Commercial Storyboards & Scripting",
      "Aerial Drone & Gimbal Stabilization",
      "Prestige Sound Design & Scoring",
      "Expert Color Grading & LUT design"
    ],
    duration: "Project-Based",
    metric: "Dolby Atmos Scoring"
  },
  {
    id: "content-prod",
    title: "Content Production",
    category: "Copywriting",
    description: "Drafting compelling editorial copy and design layouts that command attention and drive conversions across all media touchpoints.",
    details: [
      "High-Connoisseur Copywriting",
      "Luxury Magazine & Print Layouts",
      "Interactive Digital Brochures",
      "Scriptwriting for Broadcast/Digital",
      "Multi-Format Newsletter Campaigns"
    ],
    duration: "Continuous",
    metric: "+40% Reading Completion"
  },
  {
    id: "ai-automation",
    title: "AI Automation Solutions",
    category: "Systems",
    description: "Integrating server-side Gemini AI models, bespoke agents, and CRM automations to create intelligent, friction-free luxury client workflows.",
    details: [
      "Gemini API & LLM Agent Orchestration",
      "Automatic High-Net-Worth Lead Sorting",
      "Intelligent Brand Voice Copywriting Engines",
      "Automated CRM & Client Onboarding Flows",
      "Enterprise Process Streamlining"
    ],
    duration: "4 - 8 Weeks",
    metric: "80% Friction Removed"
  },
  {
    id: "consulting",
    title: "Business Consulting",
    category: "Growth",
    description: "Providing strategic advisory directly to leadership, outlining operational and luxury-market scaling structures.",
    details: [
      "HNW Demographics Insights Analysis",
      "International Operations Scaling",
      "Joint Venture & Partner Introductions",
      "Operational Efficiency Auditing",
      "Executive Advisory Panels"
    ],
    duration: "Advisory Basis",
    metric: "+35% Year-Over-Year Yield"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "luxury-fashion",
    title: "Maison d'Or",
    client: "Maison d'Or Paris",
    category: "Luxury Fashion",
    year: "2025",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
    scope: ["Brand Identity", "E-Commerce WebGL App", "Art Direction", "Performance Advertising"],
    description: "We re-architected Maison d'Or's global digital ecosystem, replacing their template shop with a micro-interactive, 3D WebGL showroom that captures the fine tactile feel of their fabrics.",
    stats: [
      { label: "Conversion Rate", value: "+34%" },
      { label: "Average Order Value", value: "€1,240" },
      { label: "Online Revenue Growth", value: "+112%" }
    ]
  },
  {
    id: "restaurant",
    title: "Umami Noir",
    client: "Umami Hospitality",
    category: "Fine Dining",
    year: "2025",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    scope: ["Brand Strategy", "Cinematic Campaign", "Editorial Copywriting", "Web Development"],
    description: "Umami Noir is a Michelin-worthy restaurant in Mumbai. We crafted an immersive dark web portal with interactive reservation triggers and produced an award-winning micro-documentary on their signature menu.",
    stats: [
      { label: "Reservations Booked", value: "+140%" },
      { label: "Organic Search Vol", value: "+88%" },
      { label: "Avg. Engagement", value: "4.8m" }
    ]
  },
  {
    id: "hotel",
    title: "The Zenith Oasis",
    client: "Zenith Resorts & Hotels",
    category: "Hotel & Resort",
    year: "2026",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    scope: ["Brand Strategy", "Identity Design", "Guest Experience Portal", "Social Media curation"],
    description: "A private tropical island retreat. We developed a visual system that evokes tranquility, incorporating textured earthy tones, and designed an ultra-intuitive guest experience application for elite visitors.",
    stats: [
      { label: "Direct Bookings", value: "+45%" },
      { label: "Repeat HNW Guest Rate", value: "32%" },
      { label: "Net Promoter Score", value: "98/100" }
    ]
  },
  {
    id: "real-estate",
    title: "Vantage Heights",
    client: "Aero Homes",
    category: "Real Estate",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    scope: ["Interactive Virtual 3D Tour", "Branding Identity", "SEO Strategy", "Social Grid curation"],
    description: "Vantage Heights represents super-prime real estate overlooking the skyline. We built a command-center digital brochure, paired with targeted programmatic digital ads that drove highly qualified inquiries.",
    stats: [
      { label: "Inquiries Generated", value: "1,200+" },
      { label: "Sales Vel Acceleration", value: "2.4x" },
      { label: "Acquisition Cost", value: "-40%" }
    ]
  },
  {
    id: "technology",
    title: "Aura Sound Systems",
    client: "Aura Acoustics Inc.",
    category: "Technology",
    year: "2026",
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1000&q=80",
    scope: ["Brand Strategy", "AI Copywriting Engine", "WebGL Product Page", "Content Production"],
    description: "Aura designs futuristic spatial audio hardware. We created a high-fidelity digital launch platform with dynamic interactive 3D product structures that illustrate internal speaker components.",
    stats: [
      { label: "Pre-order Target Met", value: "240%" },
      { label: "Page Speed Score", value: "99/100" },
      { label: "Global Press Hits", value: "45" }
    ]
  },
  {
    id: "jewellery",
    title: "Sovereign Carats",
    client: "Sovereign Fine Gems Ltd.",
    category: "Jewellery",
    year: "2026",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
    scope: ["Identity Refining", "Premium Sound & Video scoring", "Interactive Catalogue", "SEO Architecture"],
    description: "Bespoke high-jewellery collections. We crafted a dark velvet website grid that serves as a canvas for high-resolution diamond zooms and launched a members-only online collection viewing suite.",
    stats: [
      { label: "Exclusive Inquiries", value: "540+" },
      { label: "Private Showroom Bookings", value: "+76%" },
      { label: "Organic Search Position", value: "#1" }
    ]
  },
  {
    id: "automotive",
    title: "Pegasus Electric GT",
    client: "Pegasus Motors Ltd.",
    category: "Automotive",
    year: "2026",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80",
    scope: ["Grand Reveal Cinematic Film", "Website Development", "Performance Funnel Strategy", "AI Solutions"],
    description: "For the debut of Pegasus' luxury electric GT, we directed a micro-cinematic brand video, launched a configuration portal with instant server-side responsive rendering, and configured an AI client concierge.",
    stats: [
      { label: "Deposits Secured", value: "$12.4M" },
      { label: "Configurator Visits", value: "480k" },
      { label: "Conversion rate", value: "2.1%" }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "maison-dor-transformation",
    title: "Redefining Luxury E-Commerce",
    subtitle: "How we took a heritage French fashion house from conventional templates to immersive WebGL interactive shopping.",
    client: "Maison d'Or Paris",
    overview: "Maison d'Or faced stagnant online traffic and high digital cart abandonment rates. Heritage physical luxury was failing to translate to standard, flat two-dimensional grids.",
    challenge: "Traditional e-commerce platforms do not reflect premium quality. High-net-worth customers missed the emotional spark of a high-touch physical boutique experience.",
    strategy: "Aureon Studios designed a custom-engineered, server-side optimized React storefront. We replaced normal images with interactive 3D materials, coupled with a deep, story-driven layout detailing the artisan stitching and origin of materials.",
    results: [
      { label: "Increase in Avg. Session Duration", value: "+180%", percentageIncrease: 180 },
      { label: "Organic Revenue Expansion", value: "2.2X", percentageIncrease: 120 },
      { label: "Cart Abandonment Drop", value: "-45%", percentageIncrease: -45 }
    ],
    chartData: [
      { name: "Month 1", benchmark: 100, aureonEffect: 105 },
      { name: "Month 2", benchmark: 105, aureonEffect: 135 },
      { name: "Month 3", benchmark: 110, aureonEffect: 180 },
      { name: "Month 4", benchmark: 115, aureonEffect: 220 },
      { name: "Month 5", benchmark: 120, aureonEffect: 280 },
      { name: "Month 6", benchmark: 125, aureonEffect: 350 }
    ]
  },
  {
    id: "zenith-oasis-campaign",
    title: "Securing commanding resort margins",
    subtitle: "Positioning a ultra-private archipelago resort as the world's most sought-after eco-haven via hyper-focused storytelling.",
    client: "Zenith Resorts",
    overview: "With luxury hospitality facing massive aggregator noise, Zenith Resorts needed an independent guest capture system that bypassed generic travel agents.",
    challenge: "Booking rooms starting at $4,500/night requires immediate, visceral visual proof of exclusivity, privacy, and flawless white-glove service before arrival.",
    strategy: "We directed a majestic 4-part cinematic series focusing on 'Silence, Sound, Soil, and Sea' and paired it with a fluid, invite-only reservation app. We targeted top-tier CEOs, executives, and high-net-worth vectors via private programmatic ad platforms.",
    results: [
      { label: "Direct Bookings Ratio", value: "92%", percentageIncrease: 82 },
      { label: "Cost-Per-Acquisition Reduction", value: "-62%", percentageIncrease: -62 },
      { label: "Peak Season Occupancy", value: "99%", percentageIncrease: 40 }
    ],
    chartData: [
      { name: "Week 1", benchmark: 40, aureonEffect: 42 },
      { name: "Week 2", benchmark: 45, aureonEffect: 60 },
      { name: "Week 3", benchmark: 48, aureonEffect: 82 },
      { name: "Week 4", benchmark: 50, aureonEffect: 94 },
      { name: "Week 5", benchmark: 52, aureonEffect: 97 },
      { name: "Week 6", benchmark: 55, aureonEffect: 99 }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Immersion & Audit",
    description: "We dive deep into your organization's genetic code, interviewing founders, auditing market friction, analyzing competitive positioning, and revealing core truths that serve as raw strategic materials.",
    deliverables: ["Market audit report", "Competitive whitespace map", "Brand core audit", "Initial stakeholder interviews"],
    duration: "2 Weeks"
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Architecting Position",
    description: "We map out a definitive, bulletproof blueprint. We formulate your brand's unique narrative hook, tone of voice guidelines, visual vectors, and targeted channel acquisition blueprint.",
    deliverables: ["Brand Positioning Book", "Narrative strategy map", "Tone of Voice guidelines", "Acquisition channel blueprint"],
    duration: "3 Weeks"
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Creative Execution",
    description: "This is where ideas solidify into high-end form. We craft custom SVG logos, establish bespoke typography scales, draft cinematic video boards, and design high-fidelity interactive digital UI wireframes.",
    deliverables: ["High-luxury visual systems", "Custom typography & palette suite", "3D asset rendering mockups", "Cinematic content storyboards"],
    duration: "4 Weeks"
  },
  {
    number: "04",
    title: "Launch",
    subtitle: "Commanding Debut",
    description: "We deploy the engineered web systems, launch digital campaigns with performance ad tracking, release the brand manifesto film, and orchestrate high-impact digital PR launches to capture peak attention.",
    deliverables: ["Production-ready React WebGL portal", "Optimized performance ad campaigns", "Cinematic brand film distribution", "Technical SEO index optimization"],
    duration: "2 Weeks"
  },
  {
    number: "05",
    title: "Growth",
    subtitle: "Evolution & AI Scaling",
    description: "Post-launch, we constantly optimize. We review performance dashboards, retarget high-value pools, craft ongoing micro-cinematic social content, and integrate Gemini AI workflows to scale client conversion points.",
    deliverables: ["Weekly analytics & ROAS auditing", "Continuous social media curation", "AI agent assistant implementation", "Conversion rate optimization iterations"],
    duration: "Continuous"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Aureon Studios doesn't build basic websites. They design absolute works of digital art. Our online conversion rates skyrocketed by 34% within the first two months of launching our 3D showroom.",
    author: "Elena Laurent",
    role: "Global Marketing Director",
    company: "Maison d'Or Paris",
    rating: 5
  },
  {
    id: "test-2",
    quote: "Parth Mehrotra and his team at Aureon Studios are strategic geniuses. They completely reimagined our brand positioning. We were booked out three seasons in advance without relying on third-party aggregators.",
    author: "Aditya Roy",
    role: "Chief Operating Officer",
    company: "Zenith Resorts & Hotels",
    rating: 5
  },
  {
    id: "test-3",
    quote: "The visual precision and technical brilliance they brought to our product reveal was astonishing. The interactive 3D configurator they built became the focal point of our global electric GT launch.",
    author: "Marcus Vance",
    role: "VP of Product Strategy",
    company: "Pegasus Motors",
    rating: 5
  },
  {
    id: "test-4",
    quote: "Every single interaction with Aureon feels premium. Their work looks expensive because it is executed with flawless craft. They helped us position ourselves at the very top of our real estate niche.",
    author: "Rohan Singhal",
    role: "Managing Director",
    company: "Vantage Heights",
    rating: 5
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter Experience",
    price: "₹4,50,000",
    period: "Per Project",
    tagline: "Perfect for fast-growing luxury labels seeking a definitive, high-impact digital visual presence.",
    features: [
      "Bespoke Brand Strategy workshop",
      "Executive Brand Identity Suite (Logo, Palette, Fonts)",
      "High-Fidelity Single-Page Web Presentation",
      "Core SEO Keyword Strategy Setup",
      "Basic Motion Design & Reveal Animations",
      "3 Weeks of Dedicated Post-Launch Support"
    ],
    isPopular: false
  },
  {
    name: "Growth Studio",
    price: "₹8,50,000",
    period: "Per Project",
    tagline: "Our signature multi-dimensional package. Complete immersive branding, cinematography, and WebGL technology.",
    features: [
      "Complete Competitive Whitespace Strategy",
      "Premium Brand Identity & Digital Design System",
      "Cinematic Brand Manifesto Film (1-Min, 4K)",
      "Interactive Multi-Page React Website with custom 3D elements",
      "High-Conversion Performance Ads setup (Meta & Google)",
      "Advanced Technical SEO & Analytics Dashboards",
      "8 Weeks of Premium Collaborative Advisory",
      "Gemini AI Lead Concierge integration"
    ],
    isPopular: true
  },
  {
    name: "Enterprise Sovereignty",
    price: "₹18,00,000",
    period: "Ongoing",
    tagline: "For premier market players looking to consolidate their industry lead, requiring daily design craft and custom AI setups.",
    features: [
      "360-Degree Brand & Business Consulting Advisory",
      "Unlimited Cinematic Media Production (Videos & Photos)",
      "Bespoke 3D Interactive WebGL Configurator/Experience",
      "Custom Server-Side AI Automation Agents & CRM Sync",
      "Fully Managed High-Budget Meta/Google Performance campaigns",
      "Monthly Creative Direction & Grid Curation retainer",
      "Dedicated Senior Project Director & 24/7 Slack hotline",
      "Lifetime Security and Code Optimization updates"
    ],
    isPopular: false
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: "insight-1",
    title: "The Architecture of Desire: Branding in the Age of AI",
    category: "AI & Branding",
    date: "July 12, 2026",
    readTime: "6 Min Read",
    summary: "As generative models commoditize content volume, visual and narrative distinction becomes the ultimate luxury differentiator. We discuss how to use AI to augment strategy without losing brand soul.",
    author: "Parth Mehrotra",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "insight-2",
    title: "Cinematic Micro-Narratives: Why Standard Video Ad Formats are Dying",
    category: "Marketing",
    date: "June 28, 2026",
    readTime: "5 Min Read",
    summary: "Traditional ad structures fail to capture HNW attention. Immersive, sensory-driven cinema stories that speak to human values are outperforming flat sales pitches by 3x on premium platforms.",
    author: "Karan Johar",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "insight-3",
    title: "WebGL & Three.js: Translating Premium Tactility into Digital Pixels",
    category: "Web Development",
    date: "May 14, 2026",
    readTime: "8 Min Read",
    summary: "How to simulate natural lighting, glass refraction, and metallic texture in modern browsers to evoke a physical, premium feel that keeps visitors engaged and drives high order values.",
    author: "Aman Malhotra",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "insight-4",
    title: "Uncompromising Quality: Why Luxury Brands Must Control Direct Capture",
    category: "Strategy",
    date: "April 02, 2026",
    readTime: "4 Min Read",
    summary: "Allowing OTAs and third-party marketplaces to proxy your customer relationships dilutes brand equity. We break down the absolute need for direct digital client capture channels.",
    author: "Parth Mehrotra",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  }
];
