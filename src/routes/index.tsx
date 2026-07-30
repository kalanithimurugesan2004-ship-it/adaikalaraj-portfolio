import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  MessageSquare,
  Calendar,
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
  Copy,
  Check,
  Zap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import heroPortrait from "@/assets/hero-portrait.png";

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
  "Mechanical Design",
  "Manufacturing Engineering",
  "CNC Programming",
  "Sheet Metal Design",
];

const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "4", label: "Core Engineering Platforms" },
  { value: "12", label: "Key Technical Domains" },
  { value: "100%", label: "Production & Quality Focused" },
];

const aboutPills = [
  "Sheet-Metal Design",
  "CAD/CAM Engineering",
  "HVAC Components",
  "Production Planning",
  "Estimation & Costing",
  "Quality Compliance",
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
    name: "Production Documentation (MS Office)",
    level: 94,
    desc: "Word, Excel, PowerPoint for reports, BOM and coordination",
  },
];

const experienceBullets = [
  "Design precision sheet-metal components and mechanical products using AutoCAD and SolidWorks.",
  "Prepare fabrication, production, manufacturing, and assembly drawings.",
  "Develop CNC programs for fiber laser and CNC turret punch machines using Lantek Expert.",
  "Generate CNC laser cutting programs through CypCut.",
  "Design HVAC sheet-metal systems, including AHU and FAHU-related components.",
  "Perform estimation, nesting, and material optimization to reduce manufacturing cost.",
  "Prepare BOMs, engineering documentation, and production records.",
  "Coordinate with production, procurement, QA/QC, and sales teams.",
  "Support process improvement, planning, and preventive maintenance activities.",
  "Maintain compliance with drawings, customer specifications, and ISO documentation standards.",
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
    title: "Mechanical Design & Manufacturing",
    desc: "Precision sheet-metal design, mechanical product development, fabrication drawings, assembly drawings, design for manufacturing (DFM), and BOM preparation.",
  },
  {
    id: "cnc",
    title: "CNC Programming & Production",
    desc: "CNC fiber laser programming, CNC turret punch programming, machine setup support, CNC machining coordination, and process optimization.",
  },
  {
    id: "production",
    title: "Production Engineering",
    desc: "Production planning, estimation, cost analysis, nesting optimization, stainless-steel fabrication, and commercial kitchen equipment design.",
  },
  {
    id: "quality",
    title: "Quality Systems",
    desc: "QA/QC coordination, ISO documentation, process standardization, drawing compliance, and production inspection support.",
  },
];

const education = [
  {
    degree: "BE in Mechanical Engineering",
    school: "Hindusthan College of Engineering and Technology",
    years: "2013 – 2017",
    note: "Focused on mechanical design, thermodynamics and industrial automation. Grade: 7.0 / 10",
  },
  {
    degree: "Diploma in Automobile Engineering",
    school: "Thanthai Rover Institute of Polytechnic",
    years: "2011 – 2013",
    note: "Foundation in technical systems, automobile engineering fundamentals and mechanical control.",
  },
];

const certifications = [
  "PG Diploma in Industrial Robotics & Automation",
  "PRO-E Design & Two-Wheeler Mechanism Training — CIICP, Chennai",
];

const languages = ["English", "Hindi", "Tamil", "Malayalam", "Telugu"];

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function Index() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string>("mechanical");

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

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy link");
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your message! Adaikalaraj will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen scroll-smooth bg-background text-foreground selection:bg-accent selection:text-foreground">
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/85 shadow-sm backdrop-blur-md"
            : "border-transparent bg-background/40 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-left font-display text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-xs font-black text-primary-foreground shadow-sm">
              AS
            </span>
            <span>
              Adaikalaraj <strong className="font-extrabold text-foreground">Selvaraj</strong>
            </span>
          </button>
          <div className="flex items-center gap-2 text-muted-foreground sm:gap-2.5">
            {navItems.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => scrollTo(n.id)}
                className={`hidden rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-secondary hover:text-foreground md:inline-flex ${
                  active === n.id ? "bg-secondary text-foreground shadow-xs" : ""
                }`}
              >
                {n.label}
              </button>
            ))}
            <button
              type="button"
              onClick={copyLink}
              aria-label="Copy link"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-all hover:bg-secondary active:scale-95"
            >
              {copied ? <Check className="size-4 text-accent-foreground" /> : <Copy className="size-4" />}
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="btn-luzia ml-1 bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
            >
              Hire / Contact
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pt-12 pb-16">
        <div className="pointer-events-none absolute left-1/2 top-4 aura h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-80" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_500px]">
            {/* Left Content */}
            <div className="animate-[fade-in_0.8s_ease-out_both] text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-4 py-2 text-sm font-semibold text-muted-foreground backdrop-blur-xs">
                <Sparkles className="size-4 text-accent-foreground" />
                Professional Engineering Portfolio
              </span>
              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Adaikalaraj Selvaraj
              </h1>
              <h2 className="mt-3 text-2xl font-bold text-muted-foreground sm:text-3xl lg:text-4xl">
                Mechanical Design Engineer | Manufacturing Engineer | CNC Programmer
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Results-driven Mechanical Design Engineer with <strong>7+ years</strong> of
                manufacturing-focused expertise in sheet-metal design, CAD/CAM engineering, CNC
                programming, fabrication documentation, production planning, and HVAC-related sheet-metal systems.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold shadow-xs transition-colors hover:border-foreground/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="btn-luzia group bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground"
                >
                  Hire / Contact <ArrowRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("experience")}
                  className="btn-luzia-secondary border border-border bg-card px-7 py-3.5 text-base font-bold hover:bg-secondary"
                >
                  View Experience
                </button>
              </div>

              {/* Quick Contact Cards */}
              <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
                <div className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-xs transition-all hover:border-foreground/20">
                  <small className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <Phone className="size-4 text-accent-foreground" /> Phone
                  </small>
                  <strong className="mt-1.5 block truncate text-sm font-bold sm:text-base">
                    <a href="tel:+971543351693" className="hover:underline">
                      +971 54 335 1693
                    </a>
                  </strong>
                </div>
                <div className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-xs transition-all hover:border-foreground/20">
                  <small className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <Mail className="size-4 text-accent-foreground" /> Email
                  </small>
                  <strong className="mt-1.5 block truncate text-sm font-bold sm:text-base">
                    <a href="mailto:adaikalaraj1993@gmail.com" className="hover:underline">
                      adaikalaraj1993@gmail.com
                    </a>
                  </strong>
                </div>
                <div className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-xs transition-all hover:border-foreground/20">
                  <small className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <MapPin className="size-4 text-accent-foreground" /> Location
                  </small>
                  <strong className="mt-1.5 block truncate text-sm font-bold sm:text-base">
                    Ajman, UAE
                  </strong>
                </div>
                <div className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-xs transition-all hover:border-foreground/20">
                  <small className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <Calendar className="size-4 text-accent-foreground" /> DOB
                  </small>
                  <strong className="mt-1.5 block truncate text-sm font-bold sm:text-base">
                    27 April 1993
                  </strong>
                </div>
              </div>
            </div>

            {/* Right Visual Image - Prominent Large Portrait */}
            <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center pt-2">
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_65%,transparent_95%)]">
                <img
                  src={heroPortrait}
                  alt="Adaikalaraj Selvaraj portrait"
                  className="h-[520px] sm:h-[580px] lg:h-[640px] max-h-[85vh] w-full object-contain object-top transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-border bg-secondary/40 py-10">
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
        <Reveal>
          <article className="rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all hover:shadow-md">
            {/* Header */}
            <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-start">
              <div>
                <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-foreground">
                  2019 – Present
                </span>
                <h3 className="mt-2 text-2xl font-extrabold">Metal Fascination LLC</h3>
                <p className="text-sm font-medium text-muted-foreground">Ajman, United Arab Emirates</p>
              </div>
              <div className="text-left sm:text-right">
                <h4 className="text-sm font-bold text-foreground">
                  Mechanical Design Engineer | Manufacturing Engineer
                </h4>
                <p className="text-xs text-muted-foreground">CAD/CAM Engineer | CNC Programmer</p>
              </div>
            </div>

            {/* Responsibilities list */}
            <div className="mt-6">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Key Responsibilities & Contributions
              </h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {experienceBullets.map((bullet, i) => (
                  <div key={i} className="flex gap-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-1 size-4.5 shrink-0 text-accent-foreground" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {achievements.map((ach, i) => {
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
          </article>
        </Reveal>
      </Section>

      {/* Technical Capabilities Section */}
      <Section id="capabilities" title="Technical Expertise" kicker="Focused Capabilities">
        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((cap) => {
            const isOpen = activeAccordion === cap.id;
            return (
              <div
                key={cap.id}
                className={`rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-foreground/30 bg-card shadow-md"
                    : "border-border bg-card/60 hover:border-border hover:bg-card"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveAccordion(isOpen ? "" : cap.id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-base font-bold sm:text-lg">{cap.title}</h3>
                  <ChevronDown
                    className={`size-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-foreground" : "text-muted-foreground"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base leading-relaxed text-muted-foreground animate-[fade-in_0.3s_ease-out]">
                    <p>{cap.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Education & Certifications Section */}
      <Section id="education" title="Education & Qualifications" kicker="Academic Foundation">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Degree Cards */}
          <div className="space-y-4 lg:col-span-7">
            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 80}>
                <article className="rounded-3xl border border-border bg-card p-6 shadow-xs">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {edu.years}
                  </span>
                  <h3 className="mt-1 text-lg font-bold">{edu.degree}</h3>
                  <p className="text-xs font-medium text-muted-foreground">{edu.school}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{edu.note}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-4 lg:col-span-5">
            <Reveal delay={120}>
              <article className="rounded-3xl border border-border bg-card p-6 shadow-xs">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <Award className="size-5 text-accent-foreground" />
                  <span>Certifications & Training</span>
                </div>
                <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-2">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent-foreground" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={180}>
              <article className="rounded-3xl border border-border bg-card p-6 shadow-xs">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <GraduationCap className="size-5 text-accent-foreground" />
                  <span>Languages & Communication</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Professional workplace communication across multicultural engineering environments:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact & Inquiries" kicker="Let's Connect">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Contact Details */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Available for Engineering Opportunities</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Reach out for roles in Mechanical Design Engineering, Manufacturing Engineering, CAD/CAM support, CNC programming, production coordination, and technical documentation across UAE and internationally.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+971543351693"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-foreground/20 hover:shadow-xs"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                  <Phone className="size-4" />
                </div>
                <div>
                  <small className="block text-xs text-muted-foreground">Phone</small>
                  <strong className="text-sm font-semibold">+971 54 335 1693</strong>
                </div>
              </a>

              <a
                href="mailto:adaikalaraj1993@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-foreground/20 hover:shadow-xs"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                  <Mail className="size-4" />
                </div>
                <div>
                  <small className="block text-xs text-muted-foreground">Email</small>
                  <strong className="text-sm font-semibold">adaikalaraj1993@gmail.com</strong>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/adaikalaraj-selvaraj-b7b275288"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-foreground/20 hover:shadow-xs"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                  <Linkedin className="size-4" />
                </div>
                <div>
                  <small className="block text-xs text-muted-foreground">LinkedIn</small>
                  <strong className="text-sm font-semibold">adaikalaraj-selvaraj-b7b275288</strong>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <small className="block text-xs text-muted-foreground">Location</small>
                  <strong className="text-sm font-semibold">Ajman, United Arab Emirates</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold">Quick Inquiry</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Send a direct message regarding projects, consultations, or employment opportunities.
              </p>

              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-foreground">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-foreground">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-foreground">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Engineering Inquiry / Job Opportunity"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-foreground">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-luzia group w-full bg-primary py-3.5 text-xs text-primary-foreground"
                >
                  Send Message <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <a
          href="https://wa.me/971543351693"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="btn-luzia-secondary flex size-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <MessageSquare className="size-5" />
        </a>
        <a
          href="mailto:adaikalaraj1993@gmail.com"
          aria-label="Email"
          className="btn-luzia-secondary flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Mail className="size-5" />
        </a>
        <a
          href="tel:+971543351693"
          aria-label="Call"
          className="btn-luzia-secondary flex size-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Phone className="size-5" />
        </a>
        <a
          href="https://linkedin.com/in/adaikalaraj-selvaraj-b7b275288"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="btn-luzia-secondary flex size-11 items-center justify-center rounded-full bg-sky-700 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Linkedin className="size-5" />
        </a>
      </div>
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
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
      <Reveal>
        <div className="mb-10 flex flex-col gap-1 border-b border-border/60 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-accent-foreground">
              {kicker}
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
          </div>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
