"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Zap,
  TrendingUp,
  Building2,
  Network,
  Route,
  Home,
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
} from "lucide-react";

const estateImages = ["/images.jpg", "images2.jpg", "/Real-Estate-1.png"];

const features = [
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Strategically positioned at Four Corner, Enugu.",
  },
  {
    icon: Route,
    title: "Excellent Road Network",
    desc: "Smooth, accessible roads connecting the estate to the city.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Environment",
    desc: "Round-the-clock security for total peace of mind.",
  },
  {
    icon: Zap,
    title: "Electricity Provision",
    desc: "Reliable power infrastructure already in place.",
  },
  {
    icon: TrendingUp,
    title: "High Return on Investment",
    desc: "Built for long-term capital appreciation.",
  },
  {
    icon: Building2,
    title: "Rapidly Developing Area",
    desc: "One of Enugu's fastest-growing corridors.",
  },
  {
    icon: Home,
    title: "Residential & Commercial Potential",
    desc: "Flexible land use for homes or business.",
  },
  {
    icon: Network,
    title: "Future Smart City Infrastructure",
    desc: "Designed with tomorrow's technology in mind.",
  },
];

const stats = [
  { value: 100, suffix: "%", label: "Fast Growing Community" },
  { value: 35, suffix: "%+", label: "High ROI Potential" },
  { value: 10, suffix: " Min", label: "Strategic Location" },
  { value: 1, suffix: "st", label: "Premium Estate Development" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function useCountUp(target, inView, duration = 1.6) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf = 0;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

function StatCounter({ value, suffix, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(value, inView);
  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="relative overflow-hidden rounded-2xl border border-[#caa44a]/25 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 text-center backdrop-blur-xl sm:p-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(202,164,74,0.18),transparent_70%)]" />
      <p className="font-serif text-4xl font-semibold text-[#e7c873] sm:text-5xl">
        {count}
        <span className="text-2xl sm:text-3xl">{suffix}</span>
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/70 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}

export default function EnuguSmartCityEstate() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % estateImages.length,
    );
  const prevImage = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + estateImages.length) % estateImages.length,
    );

  return (
    <main className="relative w-full overflow-x-hidden bg-[#08120d] text-white">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={estateImages[0]}
            alt="Enugu Smart City Estate aerial view"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06120c]/80 via-[#06120c]/70 to-[#06120c]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(202,164,74,0.18),transparent_55%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-32 text-center sm:py-40">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#caa44a]/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#e7c873] backdrop-blur-md sm:text-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Now Selling &mdash; Four Corner, Enugu
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
          >
            Enugu Smart City
            <span className="block text-[#e7c873]">Estate</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base text-white/80 sm:text-xl"
          >
            The Future of Smart Living and High-Value Real Estate Investment
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70 sm:text-base"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[#e7c873]" /> Four Corner, Enugu
            </span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#e7c873]" /> 10 Minutes from Opera
              Square
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="tel:07031147821"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#caa44a] to-[#e7c873] px-7 py-3.5 font-semibold text-[#0b1a12] shadow-[0_8px_30px_rgba(202,164,74,0.35)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(202,164,74,0.55)] hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" />
              Call Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#e7c873]/60 hover:bg-white/10"
            >
              Request Information
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="h-9 w-5 rounded-full border border-white/30 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#e7c873]" />
          </div>
        </motion.div>
      </section>

      {/* ============ TITLE / DOCUMENTATION BADGE ============ */}
      <section className="relative px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-[#caa44a]/30 bg-white/[0.04] backdrop-blur-xl px-6 py-5 sm:px-10 sm:py-6"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[#e7c873]" />
              <span className="text-sm font-semibold uppercase tracking-[0.08em] text-white/80">Land Title:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#caa44a]/15 px-4 py-2 text-sm font-semibold text-[#e7c873]">
                <CheckCircle2 className="h-4 w-4" />
                C of O (Certificate of Occupancy)
              </span>
              <span className="text-white/30 text-sm">+</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#caa44a]/15 px-4 py-2 text-sm font-semibold text-[#e7c873]">
                <CheckCircle2 className="h-4 w-4" />
                Governor&apos;s Consent
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ MAIN SELLING POINT / DESCRIPTION ============ */}
      <section className="relative px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e7c873]"
          >
            Why Invest Here
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mt-4 font-serif text-2xl font-semibold leading-snug sm:text-4xl"
          >
            One of the Best Real Estate Investment Opportunities in Nigeria
            Today
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Enugu Smart City Estate offers investors and homeowners a unique
            opportunity to own land in one of the fastest-growing locations in
            Enugu. Positioned strategically at Four Corner, this development
            combines accessibility, future growth potential, and premium
            residential planning.
          </motion.p>
        </div>
      </section>

      {/* ============ INVESTMENT BENEFITS / FEATURES ============ */}
      <section className="relative px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e7c873]">
              Estate Features
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Built for Growth. Designed for Life.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#caa44a]/50 hover:bg-white/[0.07]"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#caa44a]/10 blur-2xl transition-all duration-500 group-hover:bg-[#caa44a]/25" />
                  <div className="relative z-10 mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#caa44a]/20 to-[#caa44a]/5 text-[#e7c873] ring-1 ring-[#caa44a]/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative z-10 font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="relative z-10 mt-2 text-sm text-white/60">
                    {f.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ LOCATION SECTION ============ */}
      <section className="relative px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={estateImages[1] ?? estateImages[0]}
              alt="Map view of Four Corner, Enugu location"
              className="h-72 w-full object-cover sm:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06120c]/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-[#caa44a]/40 bg-black/40 px-4 py-2 text-sm backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#e7c873]" />
              Four Corner, Enugu
            </div>
          </motion.div>

          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e7c873]"
            >
              Location Advantage
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="mt-4 font-serif text-3xl font-semibold sm:text-4xl"
            >
              Positioned at the Heart of Enugu&rsquo;s Growth
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg"
            >
              Enugu Smart City Estate sits directly at Four Corner &mdash; only
              a 10 minute drive from Opera Square, Enugu. This proximity to the
              city&rsquo;s commercial core makes it one of the most accessible
              and strategically located developments available today.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="mt-8 flex items-center gap-4 rounded-2xl border border-[#caa44a]/30 bg-white/[0.04] p-5 backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#caa44a]/15 text-[#e7c873]">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-white">10 Minutes Drive</p>
                <p className="text-sm text-white/60">
                  From Opera Square, Enugu
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ IMAGE GALLERY ============ */}
      <section className="relative px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e7c873]">
              Gallery
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              A Glimpse Into the Estate
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {estateImages.map((src, i) => (
              <motion.button
                key={src + i}
                type="button"
                onClick={() => openLightbox(i)}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                  i === 0 ?
                    "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2"
                  : "col-span-1"
                }`}
              >
                <img
                  src={src}
                  alt={`Enugu Smart City Estate view ${i + 1}`}
                  className="h-full min-h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              src={estateImages[lightboxIndex]}
              alt="Enugu Smart City Estate full view"
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ STATISTICS ============ */}
      <section className="relative px-6 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,164,74,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e7c873]">
              By the Numbers
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Investment Confidence, Backed by Data
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((s, i) => (
              <StatCounter
                key={s.label}
                index={i}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEAD GENERATION CTA ============ */}
      <section id="contact" className="relative px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#caa44a]/30 bg-gradient-to-br from-[#0e2418] via-[#0b1a12] to-[#06120c]">
          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#caa44a]/15 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#caa44a]/15 blur-3xl" />

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative font-serif text-3xl font-bold sm:text-5xl"
            >
              Secure Your Future Today
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="relative mx-auto mt-4 max-w-xl text-base text-white/75 sm:text-lg"
            >
              Invest Early. Build Wealth. Own a Piece of Tomorrow.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="relative mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80 sm:text-base"
            >
              <a
                href="tel:07031147821"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:border-[#e7c873]/50"
              >
                <Phone className="h-4 w-4 text-[#e7c873]" /> 0703 114 7821
              </a>
              <a
                href="tel:08035696337"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:border-[#e7c873]/50"
              >
                <Phone className="h-4 w-4 text-[#e7c873]" /> 0803 569 6337
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="tel:07031147821"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#caa44a] to-[#e7c873] px-7 py-3.5 font-semibold text-[#0b1a12] shadow-[0_8px_30px_rgba(202,164,74,0.35)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(202,164,74,0.55)] hover:scale-[1.03] sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="mailto:info@enugusmartcityestate.com?subject=Request%20Information"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#e7c873]/60 hover:bg-white/10 sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                Request Information
              </a>
              <a
                href="https://wa.me/2347031147821"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1f8f5b] px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_rgba(31,143,91,0.35)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(31,143,91,0.55)] hover:scale-[1.03] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Inquiry
              </a>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={4}
              className="relative mt-10 flex flex-col items-center justify-center gap-3 text-sm text-white/70 sm:flex-row sm:gap-8"
            >
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#e7c873]" /> Verified
                Title
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#e7c873]" /> Flexible
                Payment Plans
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#e7c873]" /> Instant
                Allocation
              </li>
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ============ FOOTER BANNER ============ */}
      <footer className="relative border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-serif text-xl font-semibold text-[#e7c873] sm:text-2xl">
            Own Land Today, Secure Tomorrow.
          </p>
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Enugu Smart City Estate. All
            rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
