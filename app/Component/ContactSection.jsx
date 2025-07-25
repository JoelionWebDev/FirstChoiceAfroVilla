"use client";
import React, { useState } from "react";
import ContactForm from "../Component/contactform"; // Make sure this path is correct
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // const [errors, setErrors] = useState({});

  // const validate = () => {
  //   const newErrors = {};
  //   if (!form.name.trim()) newErrors.name = "Name is required";
  //   if (!form.email.trim()) newErrors.email = "Email is required";
  //   if (!form.phone.trim()) newErrors.phone = "Phone number is required";
  //   if (!form.message.trim()) newErrors.message = "Message is required";
  //   return newErrors;
  // };

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  //   setErrors({ ...errors, [e.target.name]: "" });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }
  //   setSubmitted(true);
  //   // Here you can handle the form submission (e.g., send to API)
  // };

  return (
    <section
      className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Get In Touch With Us
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info Panel */}
          <div className="md:w-1/2 bg-blue-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
                First Choice Afro Villa LTD
              </h3>
              <div className="mb-4 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mt-1 mr-3">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    Phone
                  </p>
                  <a
                    href="tel:+2347031147821"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    +234 0703 114 7821
                  </a>
                </div>
              </div>
              <div className="mb-4 flex items-start">
                <span className="text-green-600 dark:text-green-400 mt-1 mr-3">
                  <FaWhatsapp />
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.link/7bmwjs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline dark:text-green-400"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="mb-4 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mt-1 mr-3">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    Email
                  </p>
                  <a
                    href="mailto:firstchoiceafrovillalimited@gmail.com"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    firstchoiceafrovillalimited@gmail.com
                  </a>
                </div>
              </div>
              <div className="mb-4 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mt-1 mr-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 8.1 11.45.18.13.42.13.6 0C13.5 22 21 16.25 21 11c0-4.97-4.03-9-9-9zm0 17.88C10.14 18.13 5 13.97 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 2.97-5.14 7.13-7 8.88z"
                    />
                    <circle cx="12" cy="11" r="2.5" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    Office Address
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Head Office: 45 Allen Avenue by DHL building Ikeja, Lagos
                    <br />
                    Branch Office(s): 56, Chime Avenue, New Haven, Enugu Papilo
                    Villa Estate, along Avu-Obosima road, Owerri.
                  </p>
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-800 hover:bg-blue-900 text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
