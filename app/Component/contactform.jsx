"use client";

import { useState } from "react";
// Make sure this import path is correct and the firebase config exists
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase"; // This is likely causing the build failure

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Add the document to Firebase
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      // Reset form and show success
      setFormData({
        name: "",
        email: "",
        phone: "",
        state: "",
        subject: "",
        message: "",
      });
      setStatus({ loading: false, success: true, error: null });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus({
        loading: false,
        success: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="md:w-1/2">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Send Message
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-4 text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-transparent"
              placeholder="Your full name"
            />
            <label
              htmlFor="name"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                formData.name
                  ? "top-2 text-xs text-blue-600 font-medium"
                  : "top-4 text-gray-500 dark:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-medium"
              }`}
            >
              Full Name *
            </label>
          </div>

          {/* Email Field */}
          <div className="relative group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-4 text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-transparent"
              placeholder="your.email@example.com"
            />
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                formData.email
                  ? "top-2 text-xs text-blue-600 font-medium"
                  : "top-4 text-gray-500 dark:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-medium"
              }`}
            >
              Email Address *
            </label>
          </div>

          {/* Phone Field */}
          <div className="relative group">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-4 text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-transparent"
              placeholder="+234 (XXX) XXX-XXXX"
            />
            <label
              htmlFor="phone"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                formData.phone
                  ? "top-2 text-xs text-blue-600 font-medium"
                  : "top-4 text-gray-500 dark:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-medium"
              }`}
            >
              Phone Number *
            </label>
          </div>

          {/* State Field */}
          <div className="relative group">
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-4 text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="" disabled></option>
              <option value="abia">Abia</option>
              <option value="adamawa">Adamawa</option>
              <option value="akwa-ibom">Akwa Ibom</option>
              <option value="anambra">Anambra</option>
              <option value="bauchi">Bauchi</option>
              <option value="bayelsa">Bayelsa</option>
              <option value="benue">Benue</option>
              <option value="borno">Borno</option>
              <option value="cross-river">Cross River</option>
              <option value="delta">Delta</option>
              <option value="ebonyi">Ebonyi</option>
              <option value="edo">Edo</option>
              <option value="ekiti">Ekiti</option>
              <option value="enugu">Enugu</option>
              <option value="fct">Federal Capital Territory</option>
              <option value="gombe">Gombe</option>
              <option value="imo">Imo</option>
              <option value="jigawa">Jigawa</option>
              <option value="kaduna">Kaduna</option>
              <option value="kano">Kano</option>
              <option value="katsina">Katsina</option>
              <option value="kebbi">Kebbi</option>
              <option value="kogi">Kogi</option>
              <option value="kwara">Kwara</option>
              <option value="lagos">Lagos</option>
              <option value="nasarawa">Nasarawa</option>
              <option value="niger">Niger</option>
              <option value="ogun">Ogun</option>
              <option value="ondo">Ondo</option>
              <option value="osun">Osun</option>
              <option value="oyo">Oyo</option>
              <option value="plateau">Plateau</option>
              <option value="rivers">Rivers</option>
              <option value="sokoto">Sokoto</option>
              <option value="taraba">Taraba</option>
              <option value="yobe">Yobe</option>
              <option value="zamfara">Zamfara</option>
            </select>
            <label
              htmlFor="state"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                formData.state
                  ? "top-2 text-xs text-blue-600 font-medium"
                  : "top-4 text-gray-500 dark:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-medium"
              }`}
            >
              State *
            </label>
            <div className="absolute right-4 top-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Subject Field */}
          <div className="relative group">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-4 text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-transparent"
              placeholder="What's this about?"
            />
            <label
              htmlFor="subject"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                formData.subject
                  ? "top-2 text-xs text-blue-600 font-medium"
                  : "top-4 text-gray-500 dark:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-medium"
              }`}
            >
              Subject *
            </label>
          </div>

          {/* Message Field */}
          <div className="relative group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="peer w-full px-4 py-4 text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none placeholder-transparent"
              placeholder="Tell us more details..."
            />
            <label
              htmlFor="message"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                formData.message
                  ? "top-2 text-xs text-blue-600 font-medium"
                  : "top-4 text-gray-500 dark:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-medium"
              }`}
            >
              Message *
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform ${
              status.loading
                ? "bg-gray-400 cursor-not-allowed scale-95"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
            }`}
          >
            {status.loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Success Message */}
        {status.success && (
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-green-800 font-medium">Success!</p>
                <p className="text-green-700 text-sm">
                  Your message has been sent. We'll get back to you soon.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {status.error && (
          <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-red-800 font-medium">Error</p>
                <p className="text-red-700 text-sm">{status.error}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
