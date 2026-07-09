"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Home, FileText, Phone, Star, X, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const properties = [
  {
    id: 1,
    name: "Awka Premium Land",
    location: "Ndiukwuenu, very close to Amansea Gariki, Awka, Anambra State",
    size: "50 x 100ft",
    outright: "5,000,000",
    threeMonths: "5,250,000",
    sixMonths: "5,500,000",
    twelveMonths: "5,750,000",
    deedOfAssignment: "500,000",
    highlights: ["Close to Amansea Gariki", "Prime location in Awka", "Excellent road access"],
  },
  {
    id: 2,
    name: "Abakaliki University District",
    location: "Ishieke, trekable distance to Ebonyi State University, Abakaliki, Ebonyi State",
    size: "50 x 100ft",
    outright: "5,000,000",
    threeMonths: "5,250,000",
    sixMonths: "5,500,000",
    twelveMonths: "5,750,000",
    deedOfAssignment: "500,000",
    highlights: ["Walking distance to EBSU", "Student accommodation potential", "Growing university area"],
  },
  {
    id: 3,
    name: "Agbogazi Nike Estate",
    location: "Agbogazi Nike, Enugu East LGA, Enugu State. Very close to Ugwogo Market",
    size: "50 x 100ft",
    outright: "5,000,000",
    threeMonths: "5,150,000",
    sixMonths: "5,300,000",
    twelveMonths: "5,450,000",
    deedOfAssignment: "500,000",
    highlights: ["Close to Ugwogo Market", "Affordable investment", "Enugu East location"],
  },
  {
    id: 4,
    name: "Iva Valley Premium",
    location: "At Iva Valley, Pottery House, very close to Enugu State Housing Estate, Enugu State",
    size: "50 x 100ft",
    outright: "25,000,000",
    threeMonths: "25,750,000",
    sixMonths: "26,500,000",
    twelveMonths: "27,250,000",
    deedOfAssignment: "500,000",
    highlights: ["Near State Housing Estate", "Premium Iva Valley location", "High value investment"],
  },
  {
    id: 5,
    name: "Owerri Strategic Land",
    location: "Along the Avu - Obosima road, Owerri, Imo State",
    size: "50 x 100ft",
    outright: "25,000,000",
    threeMonths: "25,500,000",
    sixMonths: "26,000,000",
    twelveMonths: "26,500,000",
    deedOfAssignment: "500,000",
    highlights: ["Strategic Avu-Obosima road", "Owerri city proximity", "Commercial potential"],
  },
  {
    id: 6,
    name: "Independence Lake Side Layout",
    location: "Behind Centenary City, sharing fence boundary with Police College, Awkunanaw, Enugu State",
    size: "50 x 100ft",
    outright: "30,000,000",
    threeMonths: "31,500,000",
    sixMonths: "33,000,000",
    twelveMonths: "34,500,000",
    deedOfAssignment: "500,000",
    highlights: ["Lake side premium location", "Adjacent to Police College", "Luxury development area"],
  },
];

const pricingData = properties.map(p => ({
  location: p.name.replace(" Premium", "").replace(" Strategic Land", "").replace(" Estate", "").replace(" District", ""),
  size: p.size,
  outright: p.outright,
  three: p.threeMonths,
  six: p.sixMonths,
  twelve: p.twelveMonths,
  deed: p.deedOfAssignment,
}));

function formatPrice(price) {
  return `₦${parseInt(price.replace(/,/g, "")).toLocaleString()}`;
}

function PricingTable() {
  return (
    <div>
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-charcoal-950 text-white">
              <th className="px-4 py-3.5 text-left text-sm font-semibold">Estate Location</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">Plot Size</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">Outright</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">3 Months</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">6 Months</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">12 Months</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">Deed Fee</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, i) => (
              <tr key={row.location} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-brand-50 transition-colors`}>
                <td className="px-4 py-3 text-sm font-semibold text-charcoal-900">{row.location}</td>
                <td className="px-4 py-3 text-sm text-charcoal-600">{row.size}</td>
                <td className="px-4 py-3 text-sm font-medium">{formatPrice(row.outright)}</td>
                <td className="px-4 py-3 text-sm">{formatPrice(row.three)}</td>
                <td className="px-4 py-3 text-sm">{formatPrice(row.six)}</td>
                <td className="px-4 py-3 text-sm">{formatPrice(row.twelve)}</td>
                <td className="px-4 py-3 text-sm font-semibold text-brand-600">{formatPrice(row.deed)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden space-y-4">
        {pricingData.map((row) => (
          <div key={row.location} className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-charcoal-900 text-base">{row.location}</h4>
              <span className="text-xs bg-charcoal-100 px-2.5 py-1 rounded-full font-medium">{row.size}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-brand-50 rounded-lg p-2.5">
                <span className="text-charcoal-500 text-xs">Outright</span>
                <p className="font-bold text-charcoal-900">{formatPrice(row.outright)}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-2.5">
                <span className="text-charcoal-500 text-xs">3 Months</span>
                <p className="font-bold text-blue-700">{formatPrice(row.three)}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-2.5">
                <span className="text-charcoal-500 text-xs">6 Months</span>
                <p className="font-bold text-purple-700">{formatPrice(row.six)}</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-2.5">
                <span className="text-charcoal-500 text-xs">12 Months</span>
                <p className="font-bold text-orange-700">{formatPrice(row.twelve)}</p>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-2.5 flex justify-between text-sm">
              <span className="text-charcoal-500">Deed of Assignment</span>
              <span className="font-bold text-brand-600">{formatPrice(row.deed)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* HERO */}
      <section className="relative bg-charcoal-950 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(202,164,74,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">Properties</span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Premium Land <span className="text-brand-400">Investments</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">Discover prime land opportunities across Nigeria's most promising locations. Flexible payment plans with guaranteed returns.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["6 Premium Locations", "Flexible Payment Plans", "Legal Documentation"].map((tag) => (
                <span key={tag} className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/10">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROPERTIES GRID */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">Available Properties</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <motion.div key={property.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-charcoal-800 to-charcoal-950 relative flex items-center justify-center">
                <Home className="w-16 h-16 text-white/10" />
                <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-charcoal-800">{property.size}</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-green-500 text-white rounded-full px-3 py-1">
                  <span className="text-xs font-bold">Available</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-charcoal-900 mb-2 group-hover:text-brand-600 transition-colors">{property.name}</h3>
                <div className="flex items-start gap-2 text-charcoal-500 mb-4">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{property.location}</p>
                </div>
                <div className="space-y-1.5 mb-4">
                  {property.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-charcoal-600"><CheckCircle className="w-3.5 h-3.5 text-brand-500" />{h}</div>
                  ))}
                </div>
                <div className="border-t pt-4 mb-4">
                  <p className="text-xs text-charcoal-400 mb-1">Starting from</p>
                  <p className="text-2xl font-bold text-brand-600">{formatPrice(property.outright)}</p>
                  <p className="text-xs text-charcoal-400">Outright payment</p>
                </div>
                <button onClick={() => setSelectedProperty(property)}
                  className="w-full bg-charcoal-950 hover:bg-charcoal-800 text-white py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  View Payment Plans <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">Complete Pricing Overview</h2>
          </motion.div>
          <PricingTable />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,164,74,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Secure Your Future?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">Join thousands of smart investors who have already secured their piece of Nigeria's growing real estate market.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2347031147821" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-charcoal-950 px-8 py-3.5 rounded-xl font-semibold transition-all"><Phone className="w-5 h-5" /> Call Now</a>
            <a href="https://wa.me/2347031147821" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/25 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all"><MessageCircle className="w-5 h-5" /> WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setSelectedProperty(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-charcoal-900">{selectedProperty.name}</h3>
                  <div className="flex items-start gap-2 text-charcoal-500 mt-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /><p className="text-sm">{selectedProperty.location}</p></div>
                </div>
                <button onClick={() => setSelectedProperty(null)} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><X className="w-5 h-5" /></button>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-charcoal-900 text-sm">Payment Plans</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Outright", price: selectedProperty.outright, bg: "bg-brand-50", color: "text-brand-700" },
                      { label: "3 Months", price: selectedProperty.threeMonths, bg: "bg-blue-50", color: "text-blue-700" },
                      { label: "6 Months", price: selectedProperty.sixMonths, bg: "bg-purple-50", color: "text-purple-700" },
                      { label: "12 Months", price: selectedProperty.twelveMonths, bg: "bg-orange-50", color: "text-orange-700" },
                    ].map((plan) => (
                      <div key={plan.label} className={`flex justify-between p-3 rounded-xl ${plan.bg}`}>
                        <span className="font-medium text-sm">{plan.label}</span>
                        <span className={`font-bold text-sm ${plan.color}`}>{formatPrice(plan.price)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-charcoal-900 text-sm">Property Highlights</h4>
                  <div className="space-y-2">
                    {selectedProperty.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-charcoal-600"><Star className="w-4 h-4 text-yellow-500" />{h}</div>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-1"><FileText className="w-4 h-4 text-charcoal-500" /><span className="font-medium text-sm">Documentation Fee</span></div>
                    <p className="text-lg font-bold text-charcoal-900">{formatPrice(selectedProperty.deedOfAssignment)}</p>
                    <p className="text-xs text-charcoal-500">Deed of Assignment</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="https://wa.me/2347031147821" target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-brand-500 hover:bg-brand-400 text-charcoal-950 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Inquire Now
                </a>
                <a href="tel:+2347031147821"
                  className="flex-1 border border-gray-300 text-charcoal-700 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-gray-50 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> Call Agent
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}