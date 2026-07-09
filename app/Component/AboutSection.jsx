"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, MapPin, Eye, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Experts",
    description:
      "Over 15 years of experience in real estate with certified professionals who prioritize your needs and ensure secure transactions.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description:
      "Access to exclusive properties in the most desirable neighborhoods and upcoming areas with high growth potential.",
  },
  {
    icon: Eye,
    title: "Transparent Deals",
    description:
      "Complete transparency in all transactions with detailed property reports, market analysis, and honest pricing guidance.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance from our dedicated team to answer questions and provide support whenever you need it.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-brand-50 rounded-full mb-6">
            <Award className="h-6 w-6 text-brand-600" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mb-6">
            About First Choice Afro Villa
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            We are a leading real estate company dedicated to helping you find your perfect home or investment property. With decades of combined experience and a deep understanding of local markets, we provide personalized service that turns your real estate dreams into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={index + 1}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-brand-300 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl mb-5 group-hover:bg-brand-500 transition-colors duration-300">
                    <IconComponent className="h-7 w-7 text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-3 group-hover:text-brand-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={5}
          className="mt-16 bg-charcoal-950 rounded-3xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-400 mb-2">500+</div>
              <div className="text-charcoal-400 font-medium text-sm">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-400 mb-2">15+</div>
              <div className="text-charcoal-400 font-medium text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-400 mb-2">98%</div>
              <div className="text-charcoal-400 font-medium text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-400 mb-2">24/7</div>
              <div className="text-charcoal-400 font-medium text-sm">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;