"use client";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      // Optionally handle subscription logic here
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-2">
            First Choice Afro Villa LTD
          </h3>
          <p className="text-gray-400 mb-4">
            Your trusted partner in finding the perfect property. We are
            dedicated to making your real estate journey seamless, secure, and
            successful.
          </p>
          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/share/1CjbnjKdZz/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/firstchoice_av?igsh=enJxdDJhZHhyZ3l4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-800 hover:bg-blue-900 text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a> */}
          </div>
        </div>
        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/properties"
                className="hover:text-blue-400 transition-colors"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-3">Newsletter</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <button
              onClick={() =>
                window.open(
                  "https://formurl.com/to/firstchoice-afro-villa-limited",
                  "_blank"
                )
              }
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Subscribe
            </button>
            {subscribed && (
              <span className="text-green-400 text-sm mt-1">
                Thank you for subscribing!
              </span>
            )}
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {currentYear} First Choice Afro Villa LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
