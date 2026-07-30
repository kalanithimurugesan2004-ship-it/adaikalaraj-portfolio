import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Linkedin, Calendar, MessageSquare, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title:
          "Contact Adaikalaraj Selvaraj | Mechanical Design Engineer | CNC Programmer | Ajman, UAE",
      },
      {
        name: "description",
        content:
          "Contact Adaikalaraj Selvaraj for Mechanical Design Engineering, Manufacturing Engineering, Sheet Metal Design, CAD/CAM and CNC Programming. Based in Ajman, UAE.",
      },
      { property: "og:title", content: "Contact Adaikalaraj Selvaraj" },
      {
        property: "og:description",
        content:
          "Get in touch with Adaikalaraj Selvaraj in Ajman, UAE for mechanical design, sheet metal engineering and CNC programming work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const contactMethods = [
  {
    label: "Phone",
    value: "+971 54 335 1693",
    href: "tel:+971543351693",
    icon: Phone,
  },
  {
    label: "Email",
    value: "adaikalaraj1993@gmail.com",
    href: "mailto:adaikalaraj1993@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/971543351693",
    icon: MessageSquare,
  },
  {
    label: "LinkedIn",
    value: "adaikalaraj-selvaraj-b7b275288",
    href: "https://linkedin.com/in/adaikalaraj-selvaraj-b7b275288",
    icon: Linkedin,
  },
  {
    label: "Location",
    value: "Ajman, United Arab Emirates",
    icon: MapPin,
  },
  {
    label: "Date of Birth",
    value: "27 April 1993",
    icon: Calendar,
  },
];

function Contact() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to portfolio
        </Link>

        <h1 className="mt-6 font-display text-4xl font-extrabold sm:text-5xl">Get In Touch</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Available for full-time and project-based opportunities in Mechanical Design Engineering,
          Manufacturing Engineering, CAD/CAM support, CNC programming (CypCut / Lantek), and sheet
          metal system development across the UAE and globally.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {contactMethods.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-xs transition-all hover:border-foreground/20"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary shrink-0">
                  <Icon className="size-5 text-foreground" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </span>
                  {m.href ? (
                    <a
                      href={m.href}
                      target={m.href.startsWith("http") ? "_blank" : undefined}
                      rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-0.5 block truncate text-sm font-bold text-foreground hover:underline"
                    >
                      {m.value}
                    </a>
                  ) : (
                    <span className="mt-0.5 block truncate text-sm font-bold text-foreground">
                      {m.value}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
