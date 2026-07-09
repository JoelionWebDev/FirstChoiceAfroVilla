"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactForm from "../Component/contactform";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Contact
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Get In Touch With Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
            className="md:col-span-2 bg-charcoal-50 rounded-2xl p-8 border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-6">First Choice Afro Villa LTD</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-100 rounded-xl flex-shrink-0">
                    <FaPhoneAlt className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-800 text-sm">Phone</p>
                    <a href="tel:+2347031147821" className="text-brand-600 hover:underline text-sm">
                      +234 703 114 7821
                    </a>
                    <br />
                    <a href="tel:+2348035696337" className="text-brand-600 hover:underline text-sm">
                      +234 803 569 6337
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-green-50 rounded-xl flex-shrink-0">
                    <FaWhatsapp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-800 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/2347031147821"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline text-sm"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-blue-50 rounded-xl flex-shrink-0">
                    <FaEnvelope className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-800 text-sm">Email</p>
                    <a
                      href="mailto:firstchoiceafrovillalimited@gmail.com"
                      className="text-brand-600 hover:underline text-sm"
                    >
                      firstchoiceafrovillalimited@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-purple-50 rounded-xl flex-shrink-0">
                    <MapPin className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-800 text-sm">Office Address</p>
                    <p className="text-charcoal-500 text-sm">
                      Head Office: 45 Allen Avenue by DHL building Ikeja, Lagos
                      <br />
                      Branch: 56, Chime Avenue, New Haven, Enugu
                      <br />
                      Papilo Villa Estate, Avu-Obosima road, Owerri.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-medium text-charcoal-700 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/1CjbnjKdZz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/firstchoice_av"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;