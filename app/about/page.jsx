"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Star, Users, Building, Clock, CheckCircle, Phone, Mail, MapPin,
  Award, Shield, Heart, Home, Target, Eye
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const teamMembers = [
  {
    name: "Engr. (Dr.) Jerry Patrick Onuokaibe",
    role: "Managing Director/CEO",
    image: "/ceo.jpeg",
    desc: "A visionary leader committed to making land and property ownership accessible, secure, and rewarding for all.",
  },
  {
    name: "Kanu Nwankwo (a.k.a Papilo)",
    role: "ON Chairman",
    image: "/director.jpeg",
    desc: "On Chairman FirstChoice Afro Villa Limited",
  },
  {
    name: "Mr Romanus Ikechukwu Onyeulor",
    role: "Administrative Manager",
    image: "/admindr.jpeg",
    desc: "Transforming visions into reality with innovative property solutions.",
  },
  {
    name: "Mr Emmanuel Okoh (Okwuluora Ndi Igbo)",
    role: "Director of Marketing",
    image: "/mktd.jpeg",
    desc: "Passionate about connecting people to their dream properties through smart, engaging, and customer-first marketing.",
  },
];

const whyChooseUs = [
  { icon: Award, title: "Premium Listings", desc: "Carefully curated properties that meet the highest standards of quality." },
  { icon: Heart, title: "Easy Payment Options", desc: "Flexible financing solutions designed to make property ownership accessible to all." },
  { icon: Phone, title: "24/7 Support", desc: "Round-the-clock customer service to assist you every step of the way." },
  { icon: Shield, title: "Trusted by Thousands", desc: "Proven track record of successful transactions across Nigeria." },
];

const stats = [
  { value: "500+", label: "Properties Sold", icon: Home, color: "text-brand-600", bg: "bg-brand-100" },
  { value: "8+", label: "Years Experience", icon: Clock, color: "text-blue-600", bg: "bg-blue-100" },
  { value: "6", label: "Cities Served", icon: MapPin, color: "text-green-600", bg: "bg-green-100" },
  { value: "1000+", label: "Happy Clients", icon: Users, color: "text-purple-600", bg: "bg-purple-100" },
];

const AboutUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 to-charcoal-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(202,164,74,0.12),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">About Us</span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              First Choice <span className="text-brand-400">Afro Villa</span> LTD
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              Building Dreams, One Property at a Time — Nigeria's trusted real estate partner.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/properties" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-charcoal-950 px-6 py-3 rounded-full font-semibold transition-all">
                Explore Properties
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white/25 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section ref={ref} className="py-20 sm:py-28 bg-bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-100 rounded-xl"><Star className="w-6 h-6 text-brand-600" /></div>
                <h3 className="text-xl font-bold text-charcoal-900">Our Mission</h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed">To provide exceptional real estate services that exceed expectations, creating lasting relationships built on trust, integrity, and outstanding results. We are committed to making property ownership accessible and enjoyable for all Nigerians.</p>
            </motion.div>
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={1} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl"><Building className="w-6 h-6 text-blue-600" /></div>
                <h3 className="text-xl font-bold text-charcoal-900">Our Vision</h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed">To be Nigeria's premier real estate company, recognized for innovation, quality, and customer satisfaction. We envision a future where every Nigerian has access to their dream home through our comprehensive property solutions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mb-6">Who We Are</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">First Choice Afro Villa LTD is a leading real estate company established with a passion for transforming the Nigerian property landscape. Since our inception, we have been dedicated to providing premium real estate services across major Nigerian cities.</p>
              <p className="text-charcoal-600 leading-relaxed mb-6">Our team of experienced professionals brings together decades of expertise in property development, sales, and customer service. We specialize in residential and commercial properties.</p>
              <div className="space-y-3">
                {["Licensed and regulated real estate company", "Serving major Nigerian cities", "Comprehensive property solutions"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-charcoal-700">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="relative">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="" className="rounded-2xl w-full h-96 object-cover shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">Achievements</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">Our Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${stat.bg}`}>
                    <Icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal-900 mb-1">{stat.value}</h3>
                  <p className="text-sm text-charcoal-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">Team</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div key={member.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="bg-bg-muted rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden bg-brand-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-base font-bold text-charcoal-900 mb-1">{member.name}</h3>
                <p className="text-brand-600 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-xs text-charcoal-500 leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-28 bg-bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">Why Us</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">Why Choose First Choice Afro Villa</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,164,74,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">Your Dream Home Awaits</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">Join thousands of satisfied customers. Let us help you turn your property dreams into reality.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties" className="bg-brand-500 hover:bg-brand-400 text-charcoal-950 px-8 py-3.5 rounded-xl font-semibold transition-all">Explore Properties</Link>
            <Link href="/contact" className="border border-white/25 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;