import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  MessageSquare,
  Award,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  FileText,
  Layers,
  Wrench,
  Cpu,
  GraduationCap,
  Briefcase,
  Zap,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Calendar,
  Sparkles,
  Clock,
  Wind,
  Box,
  Settings,
  X,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import heroPortrait from "@/assets/hero-portrait.png";
import ahuRender from "@/assets/ahu_render.png";
import fcuRender from "@/assets/fcu_render.png";
import hvacDuctworkRender from "@/assets/hvac_ductwork_render.png";
import cncLaserRender from "@/assets/cnc_laser_render.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Adaikalaraj Selvaraj | Mechanical Design Engineer | Manufacturing Engineer | CNC Programmer",
      },
      {
        name: "description",
        content:
          "Results-driven Mechanical Design Engineer with 7+ years of manufacturing-focused expertise in sheet-metal design, CAD/CAM engineering, CNC programming, fabrication documentation, production planning, and HVAC-related sheet-metal systems.",
      },
      {
        property: "og:title",
        content: "Adaikalaraj Selvaraj — Engineering Portfolio",
      },
      {
        property: "og:description",
        content:
          "7+ years experience in Mechanical Design, Manufacturing Engineering, CNC Programming, and Sheet Metal Systems in Ajman, UAE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const heroBadges = [
  "AHU & FCU Unit Design",
  "HVAC Ductwork & Dampers",
  "Precision Sheet Metal",
  "CypCut & Lantek CAM",
  "CAD/CAM 2D/3D Drafting",
];

const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "4", label: "Core Engineering Platforms" },
  { value: "100%", label: "AHU / FCU & HVAC Focused" },
  { value: "100%", label: "Production & Quality Compliance" },
];

const aboutPills = [
  "AHU Double-Skin Panels",
  "FCU Casing & Drain Pans",
  "HVAC Air Ducting & VCD",
  "Precision Sheet-Metal Design",
  "CypCut Fiber Laser",
  "Lantek Turret Punching",
  "Bend Allowance & K-Factor",
  "Production Planning & BOM",
  "ISO Quality Compliance",
];

const coreSkills = [
  {
    title: "Mechanical Design",
    desc: "Product development, precision sheet-metal design, fabrication planning, assembly concepts, and production-ready drawings.",
    icon: Wrench,
  },
  {
    title: "Manufacturing Engineering",
    desc: "Production coordination, process improvement, cost control, material optimization, and manufacturing support.",
    icon: Layers,
  },
  {
    title: "CNC Programming",
    desc: "Programming and support for CNC Fiber Laser and CNC Turret Punch systems, including MTX and FLEX machine workflows.",
    icon: Cpu,
  },
  {
    title: "Documentation & Compliance",
    desc: "Engineering drawings, BOM preparation, ISO-compliant documentation, production records, and drawing/specification control.",
    icon: FileText,
  },
];

const softwareStack = [
  {
    name: "AutoCAD 2D & 3D",
    level: 95,
    desc: "Drafting, sheet-metal drawings, design documentation",
  },
  {
    name: "SolidWorks",
    level: 88,
    desc: "Mechanical design and 3D parametric modelling",
  },
  {
    name: "Lantek Expert",
    level: 92,
    desc: "Nesting, turret punch programming, manufacturing optimization",
  },
  {
    name: "CypCut",
    level: 90,
    desc: "Fiber laser cutting and CNC support",
  },
  {
    name: "Creo & Pro-E",
    level: 85,
    desc: "3D modelling, mechanism design & analysis",
  },
  {
    name: "Production Documentation (MS Office & Tally)",
    level: 94,
    desc: "Excel reports, BOM, stock records and technical documentation",
  },
];

const workExperiences = [
  {
    step: 3,
    stepLabel: "03",
    company: "Metal Fascination L.L.C",
    location: "Ajman, United Arab Emirates",
    years: "2019 – Present",
    role: "CAD/CAM Engineer (AHU, FAHU, HVAC)",
    subRole: "Mechanical Design Engineer | CNC Programmer",
    bullets: [
      "Design precision sheet-metal components and mechanical products using AutoCAD and SolidWorks.",
      "Prepare fabrication, production, manufacturing, and assembly drawings for shop-floor execution.",
      "Develop CNC programs for fiber laser and CNC turret punch machines using Lantek Expert.",
      "Generate CNC laser cutting programs through CypCut for efficient shop-floor production.",
      "Design HVAC sheet-metal systems, including AHU and FAHU-related components.",
      "Perform estimation, nesting, and material optimization to reduce manufacturing cost and sheet waste.",
      "Prepare BOMs (Bill of Materials), engineering documentation, and production records.",
      "Coordinate seamlessly with production, procurement, QA/QC, and sales engineering teams.",
    ],
  },
  {
    step: 2,
    stepLabel: "02",
    company: "Glazier Tehno Casting PVT LTD",
    location: "Coimbatore, India",
    years: "2017 – 2018",
    role: "Quality Assurance (QA) Department Engineer",
    subRole: "Inspection & Quality Control Specialist",
    bullets: [
      "Conducted quality inspection of precision casting components, dimensional verification, and tolerance checking.",
      "Monitored casting defects, root-cause analysis, and compliance with strict quality control standards.",
      "Prepared QA/QC documentation, inspection records, and initial sample inspection reports (ISIR).",
      "Coordinated with foundry production and machining teams to maintain zero-defect standards.",
    ],
  },
  {
    step: 1,
    stepLabel: "01",
    company: "Hyundai Motor India Limited",
    location: "Chennai, India",
    years: "2013 – 2014",
    role: "PDI - Pre-Delivery Inspector",
    subRole: "Automotive Quality & Inspection Inspector",
    bullets: [
      "Conducted comprehensive pre-delivery inspection (PDI) on manufactured vehicles and automotive assemblies.",
      "Verified mechanical alignment, paint finish, electrical circuitry, and safety compliance prior to final dispatch.",
      "Documented non-conformance logs and coordinated with assembly line quality supervisors to resolve defects.",
    ],
  },
];

const engineeringProjects = [
  {
    title: "Automatic Feeding & Cutting Machine using Geneva Mechanism",
    type: "Engineering Main Project",
    desc: "Designed and fabricated an automated workpiece feeding and cutting system utilizing Geneva mechanism kinematics for precise index motion.",
  },
  {
    title: "Air Assistant Exhaust Braking System",
    type: "Diploma Main Project",
    desc: "Developed a pneumatic exhaust braking control system for heavy vehicles to improve braking efficiency and engine retarding force.",
  },
  {
    title: "Power Harvesting in Dam Outlet Water",
    type: "Engineering Mini Project",
    desc: "Designed a micro hydro-turbine mechanism to harvest renewable electrical energy from dam discharge water channels.",
  },
  {
    title: "MSME Heat Assisted Solar Water Heater",
    type: "Research Project (Proposed for MSME Funding)",
    desc: "Participated in the design and development of an optimized solar thermal water heating system under MSME guidance.",
  },
];

const achievements = [
  {
    title: "Optimized Material Utilization",
    desc: "Enhanced sheet usage through effective nesting strategies and material planning.",
    icon: TrendingUp,
  },
  {
    title: "Improved Production Efficiency",
    desc: "Used accurate CNC programming and strong coordination to support smoother manufacturing flow.",
    icon: Zap,
  },
  {
    title: "Reduced Engineering Errors",
    desc: "Strengthened documentation quality and drawing accuracy for more reliable production outcomes.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  {
    id: "mechanical",
    title: "AHU & FCU Unit Casing Design",
    desc: "Development of AHU double-skin insulated panels, thermal-break frame profiles, FCU casings, sloped stainless-steel drain pans, and sheet-metal enclosures using AutoCAD 2D/3D & SolidWorks with precise bend deductions.",
    icon: Wrench,
  },
  {
    id: "cnc",
    title: "CNC Fiber Laser & Turret Punch CAM",
    desc: "Expert CNC programming via CypCut for Fiber Laser cutting and Lantek Expert for CNC Turret Punching. Generating optimized G-code, automatic nesting, and lead-in/lead-out parameters for maximum sheet utilization.",
    icon: Cpu,
  },
  {
    id: "production",
    title: "HVAC Ductwork & Production Planning",
    desc: "Flat pattern drafting for rectangular & spiral ductwork, TDC/TDF flange corners, Volume Control Dampers (VCD), Fire Dampers (FD), Bill of Materials (BOM) preparation, and shop floor coordination.",
    icon: Layers,
  },
  {
    id: "quality",
    title: "Quality Control & ISO Compliance",
    desc: "First-article inspection (FAI), sheet-metal tolerance verification, ISO 9001:2015 process standardization, pre-delivery inspection (PDI), and final assembly quality assurance.",
    icon: ShieldCheck,
  },
];

const education = [
  {
    degree: "BE in Mechanical Engineering",
    school: "Hindusthan College of Engineering and Technology, Coimbatore",
    years: "2013 – 2017",
    note: "Focused on mechanical design, thermodynamics and industrial automation. Grade: CGPA 7.04 / 10",
  },
  {
    degree: "Diploma in Automobile Engineering",
    school: "Thanthai Rover Institute of Polytechnic College, Perambalur",
    years: "2011 – 2013",
    note: "Foundation in technical systems, automobile engineering fundamentals and mechanical control. Grade: 86.54%",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Sri Ragavendra Matriculation Higher Secondary School, Veeraganur",
    years: "2011",
    note: "Score: 65%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    school: "Sri Ragavendra Matriculation Higher Secondary School, Veeraganur",
    years: "2009",
    note: "Score: 70%",
  },
];

const certifications = [
  "PGDIRA & PG Diploma in Industrial Robotics Automation — Technocrat Automation, Chennai",
  "PRO-E Design & Two-Wheeler Mechanism — Canada India Institutional Co-operation Project (CIICP), Chennai",
  "Advanced AutoCAD 2D & 3D Drafting Certificate",
  "Communication Skills Certificate — Sri Anu Institute, Coimbatore",
  "Workshop: Design & Development of Jigs and Fixtures for Advanced Manufacturing — KPR Institute",
];

const languages = ["English", "Hindi", "Tamil", "Malayalam", "Telugu"];

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Index() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string>("mechanical");
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [selectedSpec, setSelectedSpec] = useState<{
    id: string;
    title: string;
    badge: string;
    img: string;
    desc: string;
    specs: { label: string; value: string }[];
    highlights: string[];
  } | null>(null);

  const hvacSpecData = [
    {
      id: "ahu",
      title: "AHU (Air Handling Unit) Design & Assembly",
      badge: "AHU Unit Systems",
      img: ahuRender,
      desc: "Comprehensive engineering design of Air Handling Unit double-skin insulated panel casings, thermal-break profile framing, coil mounting structures, filter slides, and access doors.",
      specs: [
        { label: "Casing Structure", value: "Double-Skin Insulated Panels (25mm / 50mm PUF)" },
        { label: "Frame Materials", value: "Thermal-Break Aluminium Profile & Heavy GI Corners" },
        { label: "CAD Platforms", value: "AutoCAD 2D/3D & SolidWorks Parametric Assembly" },
        { label: "Design Features", value: "Airtight Rubber Gaskets, Hinged Access Doors, Filter Racks" },
      ],
      highlights: [
        "Calculated precise bend deductions & K-factors for zero-gap panel corners.",
        "Engineered thermal-break profile framing preventing condensation bridges.",
        "Generated complete production drawings and detailed Bills of Materials (BOM).",
        "Enforced 100% airtight sealing and structural rigidity under high static pressure.",
      ],
    },
    {
      id: "fcu",
      title: "FCU Casing & Stainless Steel Drain Pans",
      badge: "FCU Casing & Trays",
      img: fcuRender,
      desc: "Precision sheet-metal development for Fan Coil Unit enclosures, sloped stainless steel condensate drain pans, vibration isolation brackets, and CNC punch tooling layouts.",
      specs: [
        { label: "Unit Type", value: "Fan Coil Unit (FCU) Ceiling Concealed & Exposed Casing" },
        { label: "Tray Material", value: "Stainless Steel SS304 / SS316 Sloped Condensate Pan" },
        { label: "CAM Software", value: "Lantek Expert CNC Turret Punching & Tooling" },
        { label: "Insulation", value: "Closed-Cell Elastomeric Rubber & Acoustic Lining" },
      ],
      highlights: [
        "Designed 3D sloped drain pans ensuring 100% gravity water drainage.",
        "Optimized CNC turret punch tooling paths for fast multi-part sheet punching.",
        "Integrated vibration-damping fan motor mounting brackets.",
        "Provided flat pattern DXF files ready for CNC press brake bending.",
      ],
    },
    {
      id: "ductwork",
      title: "HVAC Ductwork & VCD Dampers",
      badge: "Ductwork & Dampers",
      img: hvacDuctworkRender,
      desc: "Precision flat pattern unfolding for rectangular & spiral air ductwork, TDC/TDF integrated flange corners, Volume Control Dampers (VCD), and Fire Damper (FD) fabrication.",
      specs: [
        { label: "Duct Types", value: "Rectangular, Spiral, Oval & Transition Duct Fittings" },
        { label: "Joint Systems", value: "TDC, TDF, C-Cleat, Drive Slip & Companion Flanges" },
        { label: "Air Control", value: "Volume Control Dampers (VCD) & Fire Dampers (FD)" },
        { label: "Drafting Tool", value: "AutoCAD Sheet Metal Flat Pattern Development" },
      ],
      highlights: [
        "Unfolded complex 3D transition duct fittings into 2D flat fabrication layouts.",
        "Engineered aerofoil volume control damper (VCD) blades & gear linkage.",
        "Designed UL-compliant Fire Damper (FD) heat-activated spring closing mechanisms.",
        "Minimized coil sheet scrap through automated nesting strategies.",
      ],
    },
    {
      id: "cam",
      title: "CypCut Fiber Laser & Lantek CNC CAM",
      badge: "CypCut & Lantek CAM",
      img: cncLaserRender,
      desc: "Advanced CNC programming using CypCut Laser and Lantek Expert for CNC Turret Punching. Maximizing raw sheet metal utilization and reducing machine cycle times.",
      specs: [
        { label: "Laser CAM", value: "CypCut 3kW Fiber Laser Nesting & Cutting Control" },
        { label: "Turret Punch CAM", value: "Lantek Expert CNC Punch Programming & Auto-Nesting" },
        { label: "Thickness Range", value: "Galvanized, Stainless & Carbon Steel (0.5mm – 12.0mm)" },
        { label: "Scrap Target", value: "Sub-5% Sheet Scrap Efficiency" },
      ],
      highlights: [
        "Applied common-line laser cutting to reduce cutting machine time by 25%.",
        "Configured lead-in/lead-out parameters preventing edge heat distortion.",
        "Managed remnant sheet stock tracking for maximum raw material reuse.",
        "Generated verified NC G-code directly for shop-floor machine controllers.",
      ],
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your message! Adaikalaraj will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden scroll-smooth bg-background text-foreground selection:bg-accent selection:text-foreground">
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full max-w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/90 shadow-sm backdrop-blur-md"
            : "border-transparent bg-background/60 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-5 sm:py-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex shrink-0 items-center gap-2 text-left font-display text-base sm:text-lg font-bold tracking-tight whitespace-nowrap transition-opacity hover:opacity-80"
          >
            <span className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-xs font-black text-primary-foreground shadow-sm">
              AS
            </span>
            <span className="whitespace-nowrap">
              Adaikalaraj <span className="hidden sm:inline font-extrabold text-foreground">Selvaraj</span>
            </span>
          </button>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2.5 text-muted-foreground">
            {navItems.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => scrollTo(n.id)}
                className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200 hover:bg-secondary hover:text-foreground sm:px-4 sm:py-2 sm:text-sm ${
                  active === n.id ? "bg-secondary text-foreground shadow-xs" : ""
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pt-6 pb-8">
        <div className="pointer-events-none absolute left-1/2 top-2 aura h-[450px] w-[550px] -translate-x-1/2 rounded-full opacity-70" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_460px] lg:grid-cols-[1fr_540px]">
            {/* Left Content */}
            <div className="animate-[fade-in_0.8s_ease-out_both] text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Based in Ajman, UAE — Available for Engineering & CNC Roles
              </div>
              <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Adaikalaraj Selvaraj
              </h1>
              <h2 className="mt-2 text-xl font-bold text-muted-foreground sm:text-2xl lg:text-3xl">
                Mechanical Design Engineer | Manufacturing Engineer | CNC Programmer
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Results-driven Mechanical Design Engineer with <strong>7+ years</strong> of
                manufacturing-focused expertise in sheet-metal design, CAD/CAM engineering, CNC
                programming, fabrication documentation, production planning, and HVAC-related sheet-metal systems.
              </p>

              {/* Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs sm:text-sm font-semibold shadow-xs transition-colors hover:border-foreground/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/Adaikalaraj_Selvaraj_Resume.pdf"
                  download="Adaikalaraj_Selvaraj_Resume.pdf"
                  className="btn-luzia group bg-primary px-6 py-3.5 text-sm sm:text-base font-bold text-primary-foreground inline-flex items-center gap-2"
                >
                  <FileText className="size-4.5" /> Download CV / Resume
                </a>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="btn-luzia-secondary border border-border bg-card px-6 py-3.5 text-sm sm:text-base font-bold hover:bg-secondary inline-flex items-center gap-2"
                >
                  Hire / Contact <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("experience")}
                  className="btn-luzia-secondary border border-border bg-card px-6 py-3.5 text-sm sm:text-base font-bold hover:bg-secondary"
                >
                  View Experience
                </button>
              </div>
            </div>

            {/* Right Visual Image - Extra Large Prominent Portrait */}
            <div className="relative mx-auto flex w-full max-w-[560px] lg:max-w-[620px] items-center justify-center">
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]">
                <img
                  src={heroPortrait}
                  alt="Adaikalaraj Selvaraj portrait"
                  className="h-[560px] sm:h-[620px] lg:h-[680px] max-h-[88vh] w-full object-contain object-top transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-border bg-secondary/40 py-6">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <p className="font-display text-5xl font-black text-foreground sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-2.5 text-sm font-bold text-muted-foreground sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" kicker="Background & Objectives">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
              Engineering Concepts Into Production-Ready Manufacturing Solutions
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              I specialize in transforming complex engineering requirements into practical and efficient production outcomes. My work includes design development, CNC programming, fabrication drawing preparation, nesting and material optimization, BOM documentation, and seamless coordination with production and quality teams.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              My background combines design precision with manufacturing execution, helping companies reduce material waste, improve production speed, and maintain high standards of quality and compliance.
            </p>
            <div className="pt-3">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Core Specializations
              </p>
              <div className="flex flex-wrap gap-2.5">
                {aboutPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition-transform hover:scale-105"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-sm">
                <div className="flex items-center gap-3.5 border-b border-border pb-4">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Briefcase className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold">Current Designation</h4>
                    <p className="text-sm font-medium text-muted-foreground">Metal Fascination LLC, Ajman</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p className="font-bold text-foreground">
                    Mechanical Design Engineer | Manufacturing Engineer | CNC Programmer
                  </p>
                  <p>
                    Over 7+ years of hands-on industrial engineering expertise spanning sheet metal design, CAD/CAM drafting, CypCut & Lantek programming, and HVAC product development.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* HVAC, AHU & FCU Specialty Showcase */}
      <Section id="hvac-products" title="HVAC & Sheet Metal Product Engineering" kicker="AHU, FCU & Air Ducting Specialty">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {hvacSpecData.map((item, idx) => {
            const iconMap: Record<string, typeof Wind> = {
              ahu: Wind,
              fcu: Box,
              ductwork: Settings,
              cam: Layers,
            };
            const Icon = iconMap[item.id] || Wind;
            return (
              <Reveal key={item.id} delay={idx * 60}>
                <div
                  onClick={() => setSelectedSpec(item)}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-xs transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-2xl hover:scale-[1.015]"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-xl bg-background/90 text-foreground backdrop-blur-md shadow-md group-hover:bg-background group-hover:text-foreground">
                      <Icon className="size-5" />
                    </div>
                    <span className="absolute bottom-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-primary-foreground shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-black text-foreground group-hover:text-background transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-background/90 transition-colors">
                      {item.desc}
                    </p>
                    <div className="mt-4 pt-3 border-t border-border/40 group-hover:border-background/20 flex items-center justify-between text-xs font-bold text-primary group-hover:text-background transition-colors">
                      <span>View Technical CAD Specs</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills" kicker="Core Expertise & Software Stack">
        {/* Core Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreSkills.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 70}>
                <article className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Daily-Use Software Stack */}
        <div className="mt-12 rounded-3xl border border-border bg-card p-6 sm:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Engineering Software
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight">Daily-Use Software Stack</h3>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Hands-on mastery across 2D/3D CAD, CAM nesting, and CNC programming
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {softwareStack.map((sw, i) => (
              <Reveal key={sw.name} delay={i * 60}>
                <div className="rounded-2xl border border-border/70 bg-secondary/30 p-5 transition-all hover:bg-secondary/60">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-foreground">{sw.name}</h4>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-foreground">
                      {sw.level}%
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{sw.desc}</p>
                  <div className="mt-3.5 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: `${sw.level}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Professional Experience Section */}
      <Section id="experience" title="Professional Experience" kicker="Industrial Manufacturing">
        <div className="space-y-6">
          {/* Interactive Year Timeline Stepper Bar */}
        <div className="mb-8 rounded-3xl border border-border bg-card/80 p-4 sm:p-6 backdrop-blur-sm shadow-xs transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calendar className="size-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Interactive Career Timeline</h4>
                <p className="text-xs text-muted-foreground">Hover over any year to highlight career sequence in order</p>
              </div>
            </div>
            {hoveredStep !== null && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/20 px-3 py-1 text-xs font-bold text-foreground animate-fade-in">
                <Sparkles className="size-3.5 text-primary" />
                Order Highlighting: Steps 1 to {hoveredStep}
              </span>
            )}
          </div>

          {/* Year Navigation Pills arranged chronologically Step 1 -> Step 2 -> Step 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[...workExperiences]
              .sort((a, b) => a.step - b.step)
              .map((exp) => {
                const isStepActive = hoveredStep !== null && exp.step <= hoveredStep;
                const isExactTarget = hoveredStep === exp.step;
                return (
                  <button
                    key={exp.company}
                    type="button"
                    onMouseEnter={() => setHoveredStep(exp.step)}
                    onMouseLeave={() => setHoveredStep(null)}
                    onClick={() => {
                      setHoveredStep(exp.step);
                      document
                        .getElementById(`exp-card-${exp.step}`)
                        ?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`group relative flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      isExactTarget
                        ? "border-primary bg-primary/10 shadow-md ring-2 ring-primary/30 scale-[1.02]"
                        : isStepActive
                        ? "border-accent bg-accent/20 shadow-xs"
                        : "border-border bg-secondary/30 hover:border-foreground/30 hover:bg-secondary/60"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-[11px] font-black transition-colors ${
                          isExactTarget
                            ? "bg-primary text-primary-foreground"
                            : isStepActive
                            ? "bg-foreground text-background"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        STEP {exp.stepLabel}
                      </span>
                      <span
                        className={`text-xs font-bold transition-colors ${
                          isExactTarget ? "text-foreground font-extrabold" : "text-muted-foreground"
                        }`}
                      >
                        {exp.years}
                      </span>
                    </div>

                    <h5 className="mt-2 text-sm font-extrabold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                      {exp.company}
                    </h5>
                    <p className="text-[11px] font-medium text-muted-foreground line-clamp-1">
                      {exp.role}
                    </p>

                    {/* Sequential Progress Line */}
                    <div className="mt-3 w-full bg-border/60 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 rounded-full ${
                          isExactTarget
                            ? "w-full bg-primary"
                            : isStepActive
                            ? "w-full bg-foreground/80"
                            : "w-0 bg-transparent"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
          </div>
        </div>

        {/* Experience Cards List with Order-Wise Highlighting */}
        <div className="space-y-6">
          {workExperiences.map((exp, expIdx) => {
            const isStepActive = hoveredStep !== null && exp.step <= hoveredStep;
            const isExactTarget = hoveredStep === exp.step;
            return (
              <Reveal key={exp.company} delay={expIdx * 80}>
                <article
                  id={`exp-card-${exp.step}`}
                  onMouseEnter={() => setHoveredStep(exp.step)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`group relative rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                    isExactTarget
                      ? "border-primary bg-card shadow-xl ring-2 ring-primary/20 scale-[1.01]"
                      : isStepActive
                      ? "border-primary/50 bg-card shadow-md ring-1 ring-primary/20"
                      : "border-border bg-card hover:border-foreground/30 hover:shadow-md"
                  }`}
                >
                  {/* Step Order Badge & Year */}
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black tracking-wider transition-all duration-300 ${
                        isExactTarget
                          ? "bg-primary text-primary-foreground shadow-xs ring-2 ring-primary/30"
                          : isStepActive
                          ? "bg-foreground text-background"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <span className={`size-2 rounded-full ${isExactTarget ? "bg-primary-foreground animate-ping" : "bg-current"}`} />
                      ORDER STEP {exp.stepLabel} / 03
                    </span>
                    <span
                      className={`rounded-full px-3.5 py-1 text-xs font-extrabold transition-colors ${
                        isExactTarget
                          ? "bg-primary/20 text-foreground"
                          : isStepActive
                          ? "bg-accent/30 text-foreground"
                          : "bg-primary/10 text-foreground"
                      }`}
                    >
                      {exp.years}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground flex items-center gap-1.5 mt-1">
                        <MapPin className="size-3.5 text-muted-foreground" />
                        {exp.location}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <h4 className="text-base font-bold text-foreground">{exp.role}</h4>
                      <p className="text-xs font-semibold text-muted-foreground">{exp.subRole}</p>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="mt-6">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <span>Key Responsibilities & Quality Scope</span>
                      {isExactTarget && (
                        <span className="text-[10px] lowercase font-semibold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full border border-primary/20">
                          active target
                        </span>
                      )}
                      {isStepActive && !isExactTarget && (
                        <span className="text-[10px] lowercase font-semibold bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">
                          in sequence
                        </span>
                      )}
                    </h4>
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      {exp.bullets.map((bullet, i) => (
                        <div key={i} className="flex gap-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                          <CheckCircle2
                            className={`mt-1 size-4.5 shrink-0 transition-colors ${
                              isExactTarget
                                ? "text-primary"
                                : isStepActive
                                ? "text-foreground"
                                : "text-accent-foreground"
                            }`}
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

          {/* Key Achievements */}
          <div className="grid gap-4 sm:grid-cols-3 pt-2">
            {achievements.map((ach) => {
              const Icon = ach.icon;
              return (
                <div
                  key={ach.title}
                  className="rounded-2xl border border-border bg-secondary/30 p-5 transition-all hover:border-foreground/20 hover:bg-secondary/60"
                >
                  <Icon className="size-6 text-accent-foreground" />
                  <h5 className="mt-2.5 font-bold text-base text-foreground">{ach.title}</h5>
                  <p className="mt-1 text-sm text-muted-foreground">{ach.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Engineering Projects Card */}
          <Reveal delay={200}>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 mt-6">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Briefcase className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Key Engineering Projects & Research</h3>
                  <p className="text-xs text-muted-foreground">Academic and MSME research projects executed</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {engineeringProjects.map((proj) => (
                  <div key={proj.title} className="rounded-2xl border border-border/80 bg-secondary/20 p-4">
                    <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-[11px] font-bold text-foreground">
                      {proj.type}
                    </span>
                    <h4 className="mt-2 text-base font-bold text-foreground">{proj.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{proj.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Technical Capabilities Section */}
      <Section id="capabilities" title="Technical Expertise" kicker="Focused Capabilities">
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <article
                key={cap.id}
                className="group relative rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xs transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-2xl hover:scale-[1.015]"
              >
                {/* Header with Icon and Title */}
                <div className="flex items-center gap-3.5 border-b border-border/60 pb-4 group-hover:border-background/20 transition-colors">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-background group-hover:text-foreground transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-extrabold sm:text-lg text-foreground group-hover:text-background transition-colors">
                    {cap.title}
                  </h3>
                </div>

                {/* Always Open Content */}
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground group-hover:text-background/90 font-medium transition-colors">
                  <p>{cap.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Education Section - Dedicated Single Column Layout */}
      <Section id="education" title="Education & Qualifications" kicker="Academic Foundation">
        <div className="space-y-6">
          {/* BE Degree */}
          <Reveal delay={0}>
            <article className="group relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-6 sm:p-8 shadow-md transition-all hover:border-primary hover:shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                    <GraduationCap className="size-6" />
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-foreground">
                      Bachelor's Degree • 2013 – 2017
                    </span>
                    <h3 className="mt-1.5 text-2xl sm:text-3xl font-black text-foreground group-hover:text-primary transition-colors">
                      BE in Mechanical Engineering
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-xs sm:text-sm font-black text-primary-foreground shadow-xs">
                  CGPA 7.04 / 10
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <p className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  Hindusthan College of Engineering and Technology, Coimbatore
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Focused on mechanical design, thermodynamics, fluid dynamics, CAD/CAM integration, and industrial automation.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Diploma */}
          <Reveal delay={80}>
            <article className="group relative overflow-hidden rounded-3xl border border-accent/50 bg-gradient-to-br from-card via-card to-accent/10 p-6 sm:p-8 shadow-xs transition-all hover:border-accent hover:shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-xs">
                    <Award className="size-6" />
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-accent/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-foreground">
                      Technical Diploma • 2011 – 2013
                    </span>
                    <h3 className="mt-1 text-xl sm:text-2xl font-bold text-foreground">
                      Diploma in Automobile Engineering
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full bg-accent/30 px-4 py-1.5 text-xs sm:text-sm font-bold text-foreground">
                  86.54% Distinction
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <p className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                  <MapPin className="size-4 text-accent-foreground" />
                  Thanthai Rover Institute of Polytechnic College, Perambalur
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Foundation in automotive kinematics, mechanical control systems, engine design, and shop-floor manufacturing fundamentals.
                </p>
              </div>
            </article>
          </Reveal>

          {/* High School & Secondary Foundation (HSC & SSLC) */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delay={140}>
              <article className="rounded-3xl border border-border bg-card p-6 transition-all hover:border-foreground/30 hover:shadow-md">
                <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-extrabold text-muted-foreground uppercase">
                    HSC • 2011
                  </span>
                  <span className="text-xs font-extrabold text-foreground bg-primary/10 px-3 py-1 rounded-full">
                    Score: 65%
                  </span>
                </div>
                <h4 className="mt-3.5 text-base font-bold text-foreground">Higher Secondary Certificate (HSC)</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Sri Ragavendra Matric Higher Sec School, Veeraganur
                </p>
              </article>
            </Reveal>

            <Reveal delay={180}>
              <article className="rounded-3xl border border-border bg-card p-6 transition-all hover:border-foreground/30 hover:shadow-md">
                <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-extrabold text-muted-foreground uppercase">
                    SSLC • 2009
                  </span>
                  <span className="text-xs font-extrabold text-foreground bg-primary/10 px-3 py-1 rounded-full">
                    Score: 70%
                  </span>
                </div>
                <h4 className="mt-3.5 text-base font-bold text-foreground">Secondary School Leaving Certificate (SSLC)</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Sri Ragavendra Matric Higher Sec School, Veeraganur
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Certifications & Languages Section - Dedicated Section */}
      <Section id="certifications" title="Certifications & Languages" kicker="Professional Credentials">
        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* Certifications Card */}
          <Reveal delay={100}>
            <article className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs transition-all hover:shadow-md h-full">
              <div className="flex items-center gap-3.5 border-b border-border pb-5">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Award className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Industrial Certifications & Training</h3>
                  <p className="text-xs text-muted-foreground">Workshops, CAD/CAM training & domain certifications</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-xs sm:text-sm text-muted-foreground">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-3 leading-relaxed">
                    <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-accent-foreground" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Languages Card */}
          <Reveal delay={160}>
            <article className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs transition-all hover:shadow-md h-full">
              <div className="flex items-center gap-3.5 border-b border-border pb-5">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-accent/20 text-foreground">
                  <GraduationCap className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Languages & Communication</h3>
                  <p className="text-xs text-muted-foreground">Multicultural engineering environment fluency</p>
                </div>
              </div>
              <p className="mt-5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Fluent in technical and workplace communication across UAE and Indian industrial manufacturing teams:
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs sm:text-sm font-semibold text-foreground transition-all hover:border-foreground/30 hover:bg-secondary"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </Section>
      {/* Contact Section */}
      <Section id="contact" title="Contact & Inquiries" kicker="Let's Connect">
        <div className="grid gap-6 lg:grid-cols-2 items-stretch">
          {/* Left Column: Direct Contact Info Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 border-b border-border/60 pb-4">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Direct Contact Details</h3>
                  <p className="text-xs text-muted-foreground">Reach out directly via phone, email, or LinkedIn</p>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Available for Mechanical Design Engineering, Manufacturing Engineering, CAD/CAM support, CNC programming, and HVAC sheet-metal roles in UAE & internationally.
              </p>

              <div className="mt-5 space-y-3">
                <a
                  href="tel:+971543351693"
                  className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-secondary/30 p-3.5 transition-all hover:bg-secondary hover:border-foreground/30"
                >
                  <div className="flex size-9 items-center justify-center rounded-xl bg-background text-foreground shadow-2xs">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-muted-foreground uppercase">Phone / Mobile</span>
                    <strong className="text-sm font-extrabold text-foreground">+971 54 335 1693</strong>
                  </div>
                </a>

                <a
                  href="mailto:adaikalaraj1993@gmail.com"
                  className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-secondary/30 p-3.5 transition-all hover:bg-secondary hover:border-foreground/30"
                >
                  <div className="flex size-9 items-center justify-center rounded-xl bg-background text-foreground shadow-2xs">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-muted-foreground uppercase">Email Address</span>
                    <strong className="text-sm font-extrabold text-foreground">adaikalaraj1993@gmail.com</strong>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/adaikalaraj-selvaraj-b7b275288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-secondary/30 p-3.5 transition-all hover:bg-secondary hover:border-foreground/30"
                >
                  <div className="flex size-9 items-center justify-center rounded-xl bg-background text-foreground shadow-2xs">
                    <Linkedin className="size-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-muted-foreground uppercase">LinkedIn Profile</span>
                    <strong className="text-sm font-extrabold text-foreground">adaikalaraj-selvaraj-b7b275288</strong>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-secondary/30 p-3.5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-background text-foreground shadow-2xs">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-muted-foreground uppercase">Current Location</span>
                    <strong className="text-sm font-extrabold text-foreground">Ajman, United Arab Emirates</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60">
              <a
                href="/Adaikalaraj_Selvaraj_Resume.pdf"
                download="Adaikalaraj_Selvaraj_Resume.pdf"
                className="btn-luzia flex items-center justify-center gap-2 bg-primary px-5 py-3 text-xs sm:text-sm font-bold text-primary-foreground w-full"
              >
                <FileText className="size-4" /> Download Official CV / Resume (PDF)
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 border-b border-border/60 pb-4">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Quick Inquiry Form</h3>
                  <p className="text-xs text-muted-foreground">Send a direct message regarding roles or projects</p>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="mt-5 space-y-3.5">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-bold text-foreground">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-bold text-foreground">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-foreground">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Engineering Inquiry / Job Opportunity"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-foreground">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-luzia group flex w-full items-center justify-center gap-2 bg-foreground py-3 text-xs sm:text-sm font-bold text-background transition-transform active:scale-95"
                >
                  Send Message <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40 py-8 text-center text-xs text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
          <p>© {new Date().getFullYear()} Adaikalaraj Selvaraj. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-foreground hover:underline"
          >
            Back to top ↑
          </button>
        </div>
      </footer>

      {/* Floating Action Bar */}
      <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex items-center gap-1.5 sm:gap-2 max-w-[calc(100vw-24px)]">
        <a
          href="https://wa.me/971543351693"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="btn-luzia-secondary flex size-10 sm:size-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <MessageSquare className="size-4.5 sm:size-5" />
        </a>
        <a
          href="mailto:adaikalaraj1993@gmail.com"
          aria-label="Email"
          className="btn-luzia-secondary flex size-10 sm:size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Mail className="size-4.5 sm:size-5" />
        </a>
        <a
          href="tel:+971543351693"
          aria-label="Call"
          className="btn-luzia-secondary flex size-10 sm:size-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Phone className="size-4.5 sm:size-5" />
        </a>
        <a
          href="https://linkedin.com/in/adaikalaraj-selvaraj-b7b275288"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="btn-luzia-secondary flex size-10 sm:size-11 items-center justify-center rounded-full bg-sky-700 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Linkedin className="size-4.5 sm:size-5" />
        </a>
      </div>

      {/* CAD Spec Lightbox Modal */}
      {selectedSpec && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-[fade-in_0.2s_ease-out]"
          onClick={() => setSelectedSpec(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8 text-foreground shadow-2xl animate-[scale-in_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-4">
              <div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-primary">
                  {selectedSpec.badge}
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl font-black text-foreground">
                  {selectedSpec.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSpec(null)}
                className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-foreground hover:text-background cursor-pointer shrink-0"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative mt-4 h-56 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-950">
              <img
                src={selectedSpec.img}
                alt={selectedSpec.title}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {selectedSpec.desc}
            </p>

            {/* Technical Specifications Table */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Technical Specifications & Parameters
              </h4>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {selectedSpec.specs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border/70 bg-secondary/40 p-3.5"
                  >
                    <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      {s.label}
                    </span>
                    <span className="mt-0.5 block text-sm font-extrabold text-foreground">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Engineering Achievements & Production Highlights
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {selectedSpec.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                      <Check className="size-3.5" />
                    </div>
                    <span className="font-medium text-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl w-full max-w-full scroll-mt-20 px-4 sm:px-6 py-8 sm:py-12">
      <Reveal>
        <div className="mb-6 flex flex-col gap-1 border-b border-border/60 pb-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent-foreground">
              {kicker}
            </span>
            <h2 className="text-2xl font-black tracking-tight sm:text-4xl">{title}</h2>
          </div>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
