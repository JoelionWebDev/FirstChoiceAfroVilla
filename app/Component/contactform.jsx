"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT (Abuja)", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const [touched, setTouched] = useState({});

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) errs.name = "Full name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email address";
    if (!data.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[\d\s\+\-\(\)]{7,15}$/.test(data.phone)) errs.phone = "Enter a valid phone number";
    if (!data.state) errs.state = "Please select your state";
    if (!data.subject.trim()) errs.subject = "Subject is required";
    if (!data.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: errs[name] || null }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: errs[name] || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(formData);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, state: true, subject: true, message: true });
    if (Object.keys(errs).length > 0) return;

    setStatus({ loading: true, success: false, error: null });

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      setFormData({ name: "", email: "", phone: "", state: "", subject: "", message: "" });
      setTouched({});
      setStatus({ loading: false, success: true, error: null });
      setTimeout(() => setStatus({ loading: false, success: false, error: null }), 6000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus({ loading: false, success: false, error: "Failed to send message. Please try again." });
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 text-charcoal-900 bg-white border-2 rounded-xl transition-all duration-200 focus:outline-none placeholder-charcoal-300 ${
      errors[field] && touched[field]
        ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
    }`;

  const selectClass = (field) =>
    `w-full px-4 py-3.5 text-charcoal-900 bg-white border-2 rounded-xl transition-all duration-200 appearance-none cursor-pointer focus:outline-none ${
      errors[field] && touched[field]
        ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
    }`;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("name")}
            placeholder="John Doe"
          />
          {errors.name && touched.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("email")}
            placeholder="you@example.com"
          />
          {errors.email && touched.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("phone")}
            placeholder="+234 803 000 0000"
          />
          {errors.phone && touched.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-charcoal-700 mb-1.5">State *</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            onBlur={handleBlur}
            className={selectClass("state")}
          >
            <option value="">Select your state</option>
            {nigerianStates.map((s) => (
              <option key={s} value={s.toLowerCase()}>{s}</option>
            ))}
          </select>
          <div className="absolute right-3 top-[42px] pointer-events-none">
            <svg className="w-4 h-4 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {errors.state && touched.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("subject")}
            placeholder="I'm interested in..."
          />
          {errors.subject && touched.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
            className={`${inputClass("message")} resize-none`}
            placeholder="Tell us more about what you're looking for..."
          />
          {errors.message && touched.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
            status.loading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-brand-500 hover:bg-brand-400 text-charcoal-950 shadow-lg hover:shadow-xl"
          }`}
        >
          {status.loading ? (
            <>
              <div className="w-4 h-4 border-2 border-charcoal-500 border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>

      {status.success && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div>
              <p className="text-green-800 font-medium text-sm">Message sent successfully!</p>
              <p className="text-green-600 text-xs mt-0.5">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      {status.error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-red-700 text-sm font-medium">{status.error}</p>
          </div>
        </div>
      )}
    </div>
  );
}