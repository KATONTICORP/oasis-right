import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectBySlug } from "../content/projects";
import { ArrowLeft, MapPin } from "lucide-react";

export default function ProjectPage() {
  const { slug } = useParams();
  const p = getProjectBySlug(slug);

  if (!p) return <div className="text-white p-8">Project not found.</div>;

  return (
    <div className="bg-[#061525] text-white min-h-screen">
      {/* Hero */}
      <section className="relative">
        <img src={p.heroImage} alt={p.name} className="w-full h-[50vh] object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <Link to="/" className="text-[#34d3ff] flex items-center gap-2"><ArrowLeft size={16}/> Back</Link>
          <h1 className="text-4xl font-bold">{p.name}</h1>
          <p className="flex items-center gap-2 mt-1"><MapPin size={16}/> {p.location} <span className="ml-3 text-xs bg-white/10 px-3 py-1 rounded-full">{p.status}</span></p>
          <p className="mt-2 max-w-xl">{p.tagline}</p>
        </div>
      </section>

      {/* Summary */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-lg">{p.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.highlights.map((h, i) => (
            <span key={i} className="px-3 py-1 border border-sky-300/30 rounded-full">{h}</span>
          ))}
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="bg-white/5 backdrop-blur-lg border border-sky-300/20 max-w-7xl mx-auto px-4 py-8 rounded-2xl flex flex-wrap gap-6 justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-[#34d3ff]">{p.investmentStats.plusvalia}</p>
          <p className="text-sm text-sky-100/80">Annual Plusvalía</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#34d3ff]">{p.investmentStats.occupancy}</p>
          <p className="text-sm text-sky-100/80">Vacation Occupancy</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#34d3ff]">{p.investmentStats.nightlyRate}</p>
          <p className="text-sm text-sky-100/80">Average Nightly Rate</p>
        </div>
      </section>

      {/* Units */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Available Units</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-sky-300/20">
            <thead className="bg-white/5">
              <tr>
                <th className="p-3">Type</th>
                <th className="p-3">Size</th>
                <th className="p-3">Beds</th>
                <th className="p-3">Baths</th>
                <th className="p-3">Price</th>
                <th className="p-3">Availability</th>
                <th className="p-3">Layout</th>
              </tr>
            </thead>
            <tbody>
              {p.units.map((u, i) => (
                <tr key={i} className="border-t border-sky-300/20">
                  <td className="p-3">{u.type}</td>
                  <td className="p-3">{u.size}</td>
                  <td className="p-3">{u.beds}</td>
                  <td className="p-3">{u.baths}</td>
                  <td className="p-3">{u.price}</td>
                  <td className="p-3">{u.availability}</td>
                  <td className="p-3"><img src={u.layout} alt="Layout" className="h-16 w-auto rounded"/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {p.gallery.map((img, i) => (
            <img key={i} src={img} alt={`Gallery ${i}`} className="rounded-xl object-cover"/>
          ))}
        </div>
      </section>

      {/* Map */}
      {p.mapEmbed && (
        <section className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <iframe src={p.mapEmbed} className="w-full h-96 rounded-xl border border-sky-300/20" loading="lazy"></iframe>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-8 flex gap-4">
        <a href={p.whatsappLink} className="flex-1 bg-gradient-to-r from-sky-600 to-cyan-500 text-center py-3 rounded-xl font-bold">WhatsApp</a>
        <a href="#webchat" className="flex-1 border border-sky-300/30 text-center py-3 rounded-xl">Webchat</a>
      </section>
    </div>
  );
}
