"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className={`${isDark ? "bg-[#06060a] border-t border-white/5" : "bg-charcoal-950"} text-white`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-brand-400 mb-3">
              First Choice Afro Villa LTD
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Your trusted partner in finding the perfect property across Nigeria. We are dedicated to making your real estate journey seamless, secure, and successful.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href="tel:+2347031147821" className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand-400 transition-colors">
                <Phone className="w-4 h-4" />
                +234 703 114 7821
              </a>
              <a href="mailto:firstchoiceafrovillalimited@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand-400 transition-colors">
                <Mail className="w-4 h-4" />
                firstchoiceafrovillalimited@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>45 Allen Avenue, Ikeja, Lagos<br />56 Chime Avenue, New Haven, Enugu</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/properties", label: "Properties" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Connect</h4>
            <div className="flex gap-3 mb-6">
              <a href="https://www.facebook.com/share/1CjbnjKdZz/" target="_blank" rel="noopener noreferrer"
                className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/firstchoice_av?igsh=enJxdDJhZHhyZ3l4" target="_blank" rel="noopener noreferrer"
                className="p-2.5 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg transition-colors" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mb-2">Subscribe for updates</p>
            <a href="https://formurl.com/to/firstchoice-afro-villa-limited" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-charcoal-950 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className={`border-t ${isDark ? "border-white/5" : "border-white/10"} py-6`}>
        <p className="text-center text-xs text-gray-500">
          &copy; {currentYear} First Choice Afro Villa LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;