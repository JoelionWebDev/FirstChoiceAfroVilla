"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Home, Calendar, Phone, Mail, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const estateData = [
  {
    name: "AWKA",
    location: "Ndiukwuenu, very close to Amansea Gariki, Awka, Anambra State",
    plotSize: "50 x 100ft",
    pricing: { outright: "5,000,000", "3months": "5,250,000", "6months": "5,500,000", "12months": "5,750,000" },
    deedFee: "500,000",
  },
  {
    name: "ABAKALIKI",
    location: "Ishieke, trekable distance to Ebonyi State University, Abakaliki, Ebonyi State",
    plotSize: "50 x 100ft",
    pricing: { outright: "5,000,000", "3months": "5,250,000", "6months": "5,500,000", "12months": "5,750,000" },
    deedFee: "500,000",
  },
  {
    name: "AGBOGAZI",
    location: "Agbogazi Nike, Enugu East LGA, Enugu State. Very close to Ugwogo Market.",
    plotSize: "50 x 100ft",
    pricing: { outright: "5,000,000", "3months": "5,150,000", "6months": "5,300,000", "12months": "5,450,000" },
    deedFee: "500,000",
  },
  {
    name: "IVA VALLEY",
    location: "At Iva Valley, Pottery House, very close to Enugu State Housing Estate, Enugu State",
    plotSize: "50 x 100ft",
    pricing: { outright: "25,000,000", "3months": "25,750,000", "6months": "26,500,000", "12months": "27,250,000" },
    deedFee: "500,000",
  },
  {
    name: "OWERRI",
    location: "Along the Avu - Obosima road, Owerri, Imo State",
    plotSize: "50 x 100ft",
    pricing: { outright: "25,000,000", "3months": "25,500,000", "6months": "26,000,000", "12months": "26,500,000" },
    deedFee: "500,000",
  },
  {
    name: "INDEPENDENCE LAKE SIDE LAYOUT",
    location: "Behind Centenary City, sharing fence boundary with Police College, Awkunanaw, Enugu State",
    plotSize: "50 x 100ft",
    pricing: { outright: "30,000,000", "3months": "31,500,000", "6months": "33,000,000", "12months": "34,500,000" },
    deedFee: "500,000",
  },
];

function fn(val) { return `₦${parseInt(val.replace(/,/g, "")).toLocaleString()}`; }

function EstateCard({ estate, i }) {
  const [selectedPlan, setSelectedPlan] = useState("outright");
  const planOptions = [
    { key: "outright", label: "Outright" },
    { key: "3months", label: "3 Months" },
    { key: "6months", label: "6 Months" },
    { key: "12months", label: "12 Months" },
  ];

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="bg-charcoal-950 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{estate.name}</h3>
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-brand-400" />
          <p className="text-white/70 text-sm leading-relaxed">{estate.location}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-5">
          <Home className="w-4 h-4 text-brand-600" />
          <span className="text-sm font-semibold text-charcoal-800">Plot Size: {estate.plotSize}</span>
        </div>
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-charcoal-800 mb-3 flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-600" />Payment Plans</h4>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {planOptions.map((plan) => (
              <button key={plan.key} onClick={() => setSelectedPlan(plan.key)}
                className={`p-2.5 rounded-lg border text-sm font-medium transition-all ${
                  selectedPlan === plan.key ? "border-brand-500 bg-brand-50 text-brand-700" : "border-gray-200 hover:border-brand-300 text-charcoal-600"
                }`}
              >{plan.label}</button>
            ))}
          </div>
          <div className="bg-gray-50 rounded-xl p-4 mb-3">
            <div className="text-2xl font-bold text-brand-600 mb-1">{fn(estate.pricing[selectedPlan])}</div>
            <div className="text-xs text-charcoal-500">{selectedPlan === "outright" ? "One-time payment" : `${selectedPlan.replace("months", "")} month payment plan`}</div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5">
          <div className="text-sm text-amber-800"><strong>Deed of Assignment Fee:</strong> {fn(estate.deedFee)}</div>
        </div>
        <a href="tel:+2347031147821"
          className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-charcoal-950 font-bold py-3.5 rounded-xl transition-all w-full"
        >
          <Phone className="w-4 h-4" /> Contact to Buy
        </a>
      </div>
    </motion.div>
  );
}

export default function LocationsPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* HERO */}
      <section className="relative bg-charcoal-950 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(202,164,74,0.1),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">Locations</span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              First Choice <span className="text-brand-400">Afro Villa</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">Your gateway to premium land investments across Nigeria. We specialize in prime real estate locations with flexible payment plans.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2"><Home className="w-4 h-4" /> Premium Locations</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Flexible Payment Plans</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> 24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">Available Locations</h2>
          <p className="text-charcoal-500 mt-3 max-w-xl mx-auto">Explore our carefully selected premium land locations across Nigeria, each offering unique advantages and flexible payment options.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {estateData.map((estate, i) => <EstateCard key={estate.name} estate={estate} i={i} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,164,74,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Invest?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">Take the first step towards owning your dream property. Our team is ready to guide you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2347031147821" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-charcoal-950 px-8 py-3.5 rounded-xl font-semibold transition-all"><Phone className="w-5 h-5" /> Call Us Now</a>
            <a href="https://wa.me/2347031147821" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/25 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all"><MessageCircle className="w-5 h-5" /> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}