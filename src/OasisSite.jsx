import React from "react";
import {
  Building2,
  Diamond,
  Waves,
  Sun,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Globe2,
  LineChart,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";

// ---------------------------------------------
// Oasis Capital Group — One-page site (React)
// TailwindCSS required in host environment.
// Replace placeholders (logoUrl, contact, links) as needed.
// ---------------------------------------------

const logoUrl =
  "https://drive.google.com/uc?export=view&id=1ZdqjvhHNSVuU90GJKefPdYaE4bT1IKlw";

const contact = {
  phone: "+52 1 999 000 0000",
  whatsapp:
    "https://wa.me/529990000000?text=Hi%20Oasis%20Capital%20Group%2C%20I%27m%20interested%20in%20your%20developments.",
  email: "info@oasiscapital.group",
  address: "Quintana Roo, MX — Global operations",
};

const links = {
  instagram: "https://instagram.com/oasiscapital.group",
  facebook: "https://facebook.com/oasiscapital.group",
  linkedin: "https://linkedin.com/company/oasiscapital-group",
};

const projects = [
  {
    name: "Hama",
    location: "Mahahual, Quintana Roo",
    status: "Pre-sales",
    description:
      "Beach-lifestyle residences in Costa Maya designed for strong capital appreciation and top-tier vacation rental income.",
    highlights: [
      "Steps to the beach",
      "Condo-hotel operations",
      "Turn-key units",
      "High occupancy potential",
    ],
    cta: "Explore Hama",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Angelique",
    location: "Tulum, Quintana Roo",
    status: "Pre-launch",
    description:
      "Jungle-meets-luxury living in a world-class destination, balancing lifestyle with premium short-stay yields.",
    highlights: [
      "Signature amenity club",
      "Prime Tulum location",
      "Rental program",
      "Lifestyle-first design",
    ],
    cta: "Discover Angelique",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
  },
];

const Feature = ({ icon: Icon, title, text }) => (
  <div className="group rounded-2xl bg-gradient-to-br from-slate-50/5 to-cyan-50/5 p-6 backdrop-blur border border-sky-200/20 hover:border-sky-200/40 transition">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 rounded-xl bg-gradient-to-br from-sky-400/20 to-cyan-500/20 ring-1 ring-sky-300/30">
        <Icon className="h-5 w-5 text-sky-200" />
      </div>
      <h4 className="font-semibold text-sky-50">{title}</h4>
    </div>
    <p className="text-sm text-slate-200/80 leading-relaxed">{text}</p>
  </div>
);

const ProjectCard = ({ p }) => (
  <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50/5 to-cyan-50/5 border border-sky-200/20 backdrop-blur">
    <div className="relative h-56 sm:h-64">
      <img
        src={p.image}
        alt={p.name}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <span className="inline-flex items-center gap-2 text-sky-50/90 text-xs uppercase tracking-widest">
          <MapPin className="h-4 w-4" /> {p.location}
        </span>
        <h3 className="mt-2 text-2xl font-semibold text-white drop-shadow">
          {p.name}
        </h3>
      </div>
      <span className="absolute top-4 right-4 text-xs bg-white/10 backdrop-blur rounded-full px-3 py-1 text-sky-50/80 border border-sky-200/30">
        {p.status}
      </span>
    </div>
    <div className="p-6">
      <p className="text-slate-100/90 leading-relaxed">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.highlights.map((h) => (
          <span
            key={h}
            className="text-xs px-3 py-1 rounded-full border border-sky-200/20 text-sky-100/90 bg-white/5"
          >
            {h}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[#34d3ff] hover:text-sky-100 transition [text-shadow:_0_0_16px_rgba(52,211,255,0.6)]"
        >
          {p.cta} <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="text-sm text-sky-200/90 hover:text-sky-100 [text-shadow:_0_0_12px_rgba(52,211,255,0.4)]"
        >
          Request brochure
        </a>
      </div>
    </div>
  </div>
);

export default function OasisSite() {
  return (
    <div className="relative min-h-screen text-white bg-[#061525]">
      {/* Glow layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle,_rgba(2,132,199,0.45)_0%,_rgba(6,21,37,0)_70%)]" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle,_rgba(34,211,238,0.35)_0%,_rgba(6,21,37,0)_70%)]" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#02101c]/60 border-b border-sky-200/20">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {logoUrl ? (
              <>
                <img
                  src={logoUrl}
                  alt="Oasis Capital Group"
                  className="h-9 w-auto"
                />
                <div className="hidden sm:block leading-tight">
                  <div className="font-semibold tracking-wide text-sky-100">
                    OASIS CAPITAL GROUP
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-sky-300/80">
                    Own • Enjoy • Profit
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-sky-400/40 to-cyan-500/30 border border-sky-200/30">
                  <Diamond className="h-5 w-5 text-sky-100" />
                </div>
                <div className="leading-tight">
                  <div className="font-semibold tracking-wide text-sky-100">
                    OASIS CAPITAL GROUP
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-sky-300/80">
                    Own • Enjoy • Profit
                  </div>
                </div>
              </div>
            )}
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#projects"
              className="hover:text-sky-50 text-[#34d3ff] [text-shadow:_0_0_14px_rgba(52,211,255,0.6)]"
            >
              Projects
            </a>
            <a
              href="#approach"
              className="hover:text-sky-50 text-[#34d3ff] [text-shadow:_0_0_14px_rgba(52,211,255,0.6)]"
            >
              Approach
            </a>
            <a
              href="#about"
              className="hover:text-sky-50 text-[#34d3ff] [text-shadow:_0_0_14px_rgba(52,211,255,0.6)]"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-sky-50 text-[#34d3ff] [text-shadow:_0_0_14px_rgba(52,211,255,0.6)]"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contact.whatsapp}
              className="hidden sm:inline-flex items-center gap-2 text-xs px-3 py-2 rounded-xl bg-gradient-to-r from-sky-600/30 to-cyan-500/30 border border-sky-300/30 hover:from-sky-600/40 hover:to-cyan-500/40 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501117716987-c8e69f8e1b8c?q=80&w=1800&auto=format&fit=crop"
            alt="Seaside luxury"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061525] via-[#061525]/70 to-[#061525]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-white/5 px-3 py-1 text-xs text-sky-100/90 backdrop-blur shadow-[0_0_30px_rgba(56,189,248,0.25)]">
              <Globe2 className="h-3.5 w-3.5 text-sky-200" /> Luxury residences
              in world-class destinations
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight">
              Own. Enjoy. Profit.
              <span className="block text-sky-100/90">
                Capital appreciation, high vacation rental income, and
                lifestyle—beautifully aligned.
              </span>
            </h1>
            <p className="mt-4 text-sky-100/80 max-w-xl">
              Premium locations, thoughtful design, and professional
              condo-hotel operations for sustainable yield and long-term
              value growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-sky-200/30 bg-white/10 px-4 py-2 hover:bg-white/15 text-[#34d3ff] [text-shadow:_0_0_16px_rgba(52,211,255,0.6)]"
              >
                <Building2 className="h-4 w-4" /> View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600/40 to-cyan-500/40 border border-sky-300/30 px-4 py-2 hover:from-sky-600/50 hover:to-cyan-500/50 shadow-[0_0_24px_rgba(56,189,248,0.35)]"
              >
                <ArrowRight className="h-4 w-4" /> Request Info Pack
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE / APPROACH */}
      <section id="approach" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-sky-50">
          Our approach
        </h2>
        <p className="mt-2 text-sky-100/80 max-w-2xl">
          From acquisition to condo-hotel operations, we design for lifestyle,
          vacation rental performance, and long-term value.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature
            icon={Sun}
            title="Lifestyle by design"
            text="Architecture and amenities crafted for real living—wellness, walkability, and effortless enjoyment."
          />
          <Feature
            icon={LineChart}
            title="Yield focus"
            text="Revenue models optimized for occupancy, ADR, and repeat stays in high-demand markets."
          />
          <Feature
            icon={ShieldCheck}
            title="Risk managed"
            text="Diligence on title, zoning, structure, and partners to protect capital and timelines."
          />
          <Feature
            icon={Waves}
            title="Prime locations"
            text="Beach and jungle micro-locations with enduring desirability and appreciation potential."
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-sky-50">
              Featured projects
            </h2>
            <p className="mt-2 text-sky-100/80">
              Hama (Mahahual) & Angelique (Tulum) under the Oasis Capital Group
              umbrella.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-[#34d3ff] hover:text-sky-100 [text-shadow:_0_0_14px_rgba(52,211,255,0.6)]"
          >
            Request full portfolio <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-sky-50">
              About Oasis Capital Group
            </h2>
            <p className="mt-4 text-sky-100/85 leading-relaxed">
              We develop and sell our own projects in world-class destinations.
              The model is simple: select premium locations, design for life,
              operate for returns. Own your piece of paradise, enjoy it fully,
              and profit from it.
            </p>
            <ul className="mt-6 space-y-2 text-sky-100/90">
              <li className="flex items-center gap-2">
                <Diamond className="h-4 w-4 text-sky-300" /> Premium locations
              </li>
              <li className="flex items-center gap-2">
                <Waves className="h-4 w-4 text-cyan-300" /> Lifestyle amenities
              </li>
              <li className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-sky-300" /> Condo-hotel
                operations
              </li>
              <li className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-cyan-300" /> Global buyers
                program
              </li>
            </ul>
          </div>
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden border border-sky-200/20 bg-gradient-to-tr from-sky-300/10 to-cyan-200/10 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1505692794403-34d4989a6b9b?q=80&w=1600&auto=format&fit=crop"
              alt="Resort living"
              className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#061525]/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* CONTACT (no form) */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border border-sky-200/20 bg-gradient-to-br from-slate-50/5 to-cyan-50/5 p-6 md:p-10 backdrop-blur">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-50">
                Request the Investor Pack
              </h3>
              <p className="mt-2 text-sky-100/85">
                Get brochure, pricing, and availability for Hama (Mahahual) and
                Angelique (Tulum).
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={contact.whatsapp}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600/40 to-cyan-500/40 border border-sky-300/30 px-5 py-3 hover:from-sky-600/50 hover:to-cyan-500/50 shadow-[0_0_28px_rgba(56,189,248,0.35)]"
                >
                  WhatsApp
                </a>
                <a
                  href="#webchat"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-300/30 bg-white/10 px-5 py-3 hover:bg-white/15 text-[#34d3ff] [text-shadow:_0_0_14px_rgba(52,211,255,0.6)]"
                >
                  Open Webchat
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sky-100/85">
                {contact.phone}
              </div>
              <div className="flex items-center gap-3 text-sky-100/85">
                {contact.email}
              </div>
              <div className="flex items-center gap-3 text-sky-100/85">
                {contact.address}
              </div>
              <div className="pt-2 flex items-center gap-4 text-sky-100/80">
                <a
                  href={links.instagram}
                  aria-label="Instagram"
                  className="hover:text-sky-50 text-[#34d3ff] [text-shadow:_0_0_12px_rgba(52,211,255,0.6)]"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={links.facebook}
                  aria-label="Facebook"
                  className="hover:text-sky-50 text-[#34d3ff] [text-shadow:_0_0_12px_rgba(52,211,255,0.6)]"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={links.linkedin}
                  aria-label="LinkedIn"
                  className="hover:text-sky-50 text-[#34d3ff] [text-shadow:_0_0_12px_rgba(52,211,255,0.6)]"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-sky-200/20">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-sky-100/75 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Oasis Capital Group. All rights
            reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-sky-50 text-[#34d3ff] [text-shadow:_0_0_12px_rgba(52,211,255,0.6)]"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-sky-50 text-[#34d3ff] [text-shadow:_0_0_12px_rgba(52,211,255,0.6)]"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button (lower-right) */}
      <a
        href="#webchat"
        className="fixed bottom-5 right-5 inline-flex items-center justify-center h-14 w-14 rounded-full border border-sky-300/40 bg-gradient-to-br from-sky-600/50 to-cyan-500/50 backdrop-blur shadow-[0_0_30px_rgba(56,189,248,0.45)] hover:from-sky-600/60 hover:to-cyan-500/60"
        aria-label="Open chat"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}
