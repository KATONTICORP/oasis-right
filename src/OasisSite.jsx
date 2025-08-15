import React from "react";
import { Building2, Diamond, Waves, Sun, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Globe2, Rocket, LineChart, Instagram, Facebook, Linkedin } from "lucide-react";

// ---------------------------------------------
// Oasis Capital Group — One-page site (React)
// TailwindCSS required in host environment.
// Replace placeholders (logoUrl, contact, links) as needed.
// ---------------------------------------------

const logoUrl = "https://drive.google.com/file/d/1ZdqjvhHNSVuU90GJKefPdYaE4bT1IKlw/view?usp=drive_link";

const contact = {
  phone: "+52 1 999 000 0000",
  whatsapp: "https://wa.me/529990000000?text=Hi%20Oasis%20Capital%20Group%2C%20I%27m%20interested%20in%20your%20developments.",
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
      "Beach-lifestyle residences designed for high occupancy and strong ROI in Costa Maya.",
    highlights: ["Beach access", "Condo-hotel ops", "Turn-key units", "AI-powered sales"],
    cta: "Explore Hama",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Madianik",
    location: "Tulum, Quintana Roo",
    status: "Pre-launch",
    description:
      "Jungle-meets-luxury concept balancing lifestyle and yield in one of the world’s hottest markets.",
    highlights: ["Jungle design", "Amenity club", "Rental program", "Prime location"],
    cta: "Discover Madianik",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
  },
];

const Feature = ({ icon: Icon, title, text }) => (
  <div className="group rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10 hover:border-white/20 transition">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 rounded-xl bg-gradient-to-br from-blue-400/30 to-blue-600/30">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="font-semibold text-white/90">{title}</h4>
    </div>
    <p className="text-sm text-white/70 leading-relaxed">{text}</p>
  </div>
);

const ProjectCard = ({ p }) => (
  <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10">
    <div className="relative h-56 sm:h-64">
      <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <span className="inline-flex items-center gap-2 text-white/90 text-xs uppercase tracking-widest">
          <MapPin className="h-4 w-4" /> {p.location}
        </span>
        <h3 className="mt-2 text-2xl font-semibold text-white">{p.name}</h3>
      </div>
      <span className="absolute top-4 right-4 text-xs bg-white/10 backdrop-blur rounded-full px-3 py-1 text-white/80 border border-white/20">
        {p.status}
      </span>
    </div>
    <div className="p-6">
      <p className="text-white/80 leading-relaxed">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.highlights.map((h) => (
          <span key={h} className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/80">
            {h}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <a href="#contact" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition">
          {p.cta} <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#contact" className="text-sm text-white/70 hover:text-white/90">Request brochure</a>
      </div>
    </div>
  </div>
);

export default function OasisSite() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,#0a1d2c,#050f1a)] text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {logoUrl ? (
              <img src={logoUrl} alt="Oasis Capital Group" className="h-9 w-auto" />
            ) : (
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-blue-400/40 to-blue-600/30 border border-white/20">
                  <Diamond className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="font-semibold tracking-wide">Oasis Capital Group</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">Own • Enjoy • Profit</div>
                </div>
              </div>
            )}
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#approach" className="hover:text-white">Approach</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={contact.whatsapp} className="hidden sm:inline-flex items-center gap-2 text-xs px-3 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 hover:bg-emerald-500/30 transition">
              <Phone className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501117716987-c8e69f8e1b8c?q=80&w=1800&auto=format&fit=crop"
            alt="Heaven-on-earth residences"
            className="h-full w-full object-cover opacity-25"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <Globe2 className="h-3.5 w-3.5" /> Global luxury residences
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight">
              Own. Enjoy. Profit.
              <span className="block text-white/80">Creating heaven-on-earth residences.</span>
            </h1>
            <p className="mt-4 text-white/75 max-w-xl">
              Developing luxury residences in the finest locations to enhance lifestyle and grow wealth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15">
                <Building2 className="h-4 w-4" /> View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 px-4 py-2 hover:bg-emerald-500/30">
                <ArrowRight className="h-4 w-4" /> Request Info Pack
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE / APPROACH */}
      <section id="approach" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Our approach</h2>
        <p className="mt-2 text-white/70 max-w-2xl">From acquisition to condo-hotel operations, we design for lifestyle and yield.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature icon={Sun} title="Lifestyle by design" text="Architecture and amenities crafted for real living, not just brochures." />
          <Feature icon={LineChart} title="Yield focus" text="Revenue models optimized for occupancy, ADR and lifetime value." />
          <Feature icon={ShieldCheck} title="Risk managed" text="Diligence on title, zoning and build partners to protect capital." />
          <Feature icon={Rocket} title="AI-powered sales" text="Acquisition, outreach and conversion pipelines running 24/7." />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Featured projects</h2>
            <p className="mt-2 text-white/70">Active developments under the Oasis Capital Group umbrella.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
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
            <h2 className="text-2xl sm:text-3xl font-semibold">About Oasis Capital Group</h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              We develop and sell our own projects in world-class destinations. Our model is simple: design for life,
              operate for returns, and leverage technology to scale. Own your piece of paradise, enjoy it fully, and profit from it.
            </p>
            <ul className="mt-6 space-y-2 text-white/80">
              <li className="flex items-center gap-2"><Diamond className="h-4 w-4 text-yellow-300" /> Premium locations</li>
              <li className="flex items-center gap-2"><Waves className="h-4 w-4 text-emerald-300" /> Lifestyle amenities</li>
              <li className="flex items-center gap-2"><Building2 className="h-4 w-4 text-sky-300" /> Condo-hotel operations</li>
              <li className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-violet-300" /> Global buyers program</li>
            </ul>
          </div>
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1505692794403-34d4989a6b9b?q=80&w=1600&auto=format&fit=crop"
              alt="Resort living"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">Request the Investor Pack</h3>
              <p className="mt-2 text-white/70">Tell us where to send the brochure, pricing and availability.</p>
              <form className="mt-6 grid grid-cols-1 gap-3">
                <input className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none" placeholder="Full name" />
                <input className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none" placeholder="Email" type="email" />
                <input className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none" placeholder="WhatsApp" />
                <select className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 focus:outline-none">
                  <option>Project of interest</option>
                  <option>Hama (Mahahual)</option>
                  <option>Madianik (Tulum)</option>
                  <option>Both</option>
                </select>
                <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 px-4 py-3 hover:bg-emerald-500/30">
                  <ArrowRight className="h-4 w-4" /> Send request
                </button>
                <p className="text-xs text-white/50">Submitting this form won’t send data anywhere in this demo. Replace with your form endpoint or WhatsApp link.</p>
              </form>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80"><Phone className="h-4 w-4" /> {contact.phone}</div>
              <a href={contact.whatsapp} className="flex items-center gap-3 text-emerald-300 hover:text-emerald-200"><Phone className="h-4 w-4" /> WhatsApp us</a>
              <div className="flex items-center gap-3 text-white/80"><Mail className="h-4 w-4" /> {contact.email}</div>
              <div className="flex items-center gap-3 text-white/80"><MapPin className="h-4 w-4" /> {contact.address}</div>
              <div className="pt-2 flex items-center gap-4 text-white/70">
                <a href={links.instagram} aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
                <a href={links.facebook} aria-label="Facebook" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
                <a href={links.linkedin} aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Oasis Capital Group. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
