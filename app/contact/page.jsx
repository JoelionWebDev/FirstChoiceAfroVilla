"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import ContactForm from "../Component/contactform";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen pt-20">
      {/* HERO */}
      <section className="relative bg-charcoal-950 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(202,164,74,0.1),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">Contact</span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              We'd Love to Hear From You
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">Contact First Choice Afro Villa LTD today — we're here to help you find the perfect property.</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">Ready to Find Your Perfect Property?</h2>
          <p className="text-charcoal-500">Discover Verified Lands in Prime Locations. Secure plots for investment or development. Subscribe for exclusive land deals and updates.</p>
        </motion.div>

        {/* GRID: FORM + DETAILS */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <ContactForm />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal-900 mb-6">Get in Touch</h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, bg: "bg-brand-100", color: "text-brand-600", label: "Office Address", value: "Head Office: 45 Allen Avenue by DHL building Ikeja, Lagos\nBranch: 56, Chime Avenue, New Haven, Enugu" },
                  { icon: Mail, bg: "bg-green-50", color: "text-green-600", label: "Support Email", value: "firstchoiceafrovillalimited@gmail.com", href: "mailto:firstchoiceafrovillalimited@gmail.com" },
                  { icon: Phone, bg: "bg-purple-50", color: "text-purple-600", label: "Phone Number", value: "+234 (0) 803 569 6337", href: "tel:+2348035696337" },
                  { icon: Clock, bg: "bg-orange-50", color: "text-orange-600", label: "Business Hours", value: "For calls: 6:00 AM – 10:00 PM, Monday to Sunday\nMon–Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl ${item.bg} flex-shrink-0`}><Icon className={`w-5 h-5 ${item.color}`} /></div>
                      <div>
                        <p className="font-medium text-sm text-charcoal-800">{item.label}</p>
                        {item.href ? <a href={item.href} className="text-sm text-brand-600 hover:underline">{item.value}</a>
                          : <p className="text-sm text-charcoal-500 whitespace-pre-line">{item.value}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal-900 mb-6">Connect With Us</h3>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/share/1CjbnjKdZz/" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/firstchoice_av?igsh=enJxdDJhZHhyZ3l4" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="https://wa.me/2347031147821" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MAP */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="mb-16">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-charcoal-900">Visit Our Office</h3>
              <p className="text-sm text-charcoal-500">Located in the heart of Ikeja, Lagos</p>
            </div>
            <div className="h-80 bg-gray-200">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.798463678157!2d7.489553314611577!3d9.072264593442906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba4b12e2e73%3A0x1234567890abcdef!2sCentral%20Business%20District%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-b-2xl" />
            </div>
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
          className="bg-charcoal-950 rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,164,74,0.08),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">Let's Help You Secure Your Dream Property</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">Join thousands of satisfied clients who have found their perfect homes and investments through First Choice Afro Villa LTD.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties" className="bg-brand-500 hover:bg-brand-400 text-charcoal-950 px-8 py-3.5 rounded-xl font-semibold transition-all">Explore Listings</Link>
              <Link href="/about" className="border border-white/25 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all">Learn More</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}