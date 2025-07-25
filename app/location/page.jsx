"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Home, Calendar, Phone, Mail } from "lucide-react";

const estateData = [
  {
    name: "AWKA",
    location: "Ndiukwuenu, very close to Amansea Gariki, Awka, Anambra State",
    plotSize: "50 x 100ft",
    pricing: {
      outright: "₦5,000,000",
      "3months": "₦5,250,000",
      "6months": "₦5,500,000",
      "12months": "₦5,750,000",
    },
    deedFee: "₦500,000",
  },
  {
    name: "ABAKALIKI",
    location:
      "Ishieke, trekable distance to Ebonyi State University, Abakaliki, Ebonyi State",
    plotSize: "50 x 100ft",
    pricing: {
      outright: "₦5,000,000",
      "3months": "₦5,250,000",
      "6months": "₦5,500,000",
      "12months": "₦5,750,000",
    },
    deedFee: "₦500,000",
  },
  {
    name: "AGBOGAZI",
    location:
      "Agbogazi Nike, Enugu East LGA, Enugu State. Very close to Ugwogo Market.",
    plotSize: "50 x 100ft",
    pricing: {
      outright: "₦2,000,000",
      "3months": "₦2,100,000",
      "6months": "₦2,200,000",
      "12months": "₦2,300,000",
    },
    deedFee: "₦500,000",
  },
  {
    name: "IVA VALLEY",
    location:
      "At Iva Valley, Pottery House, very close to Enugu State Housing Estate, Enugu State",
    plotSize: "50 x 100ft",
    pricing: {
      outright: "₦15,000,000",
      "3months": "₦15,750,000",
      "6months": "₦16,500,000",
      "12months": "₦17,250,000",
    },
    deedFee: "₦500,000",
  },
  {
    name: "OWERRI",
    location: "Along the Avu - Obosima road, Owerri, Imo State",
    plotSize: "50 x 100ft",
    pricing: {
      outright: "₦10,000,000",
      "3months": "₦10,500,000",
      "6months": "₦11,000,000",
      "12months": "₦11,500,000",
    },
    deedFee: "₦500,000",
  },
  {
    name: "INDEPENDENCE LAKE SIDE LAYOUT",
    location:
      "Behind Centenary City, sharing fence boundary with Police College, Awkunanaw, Enugu State",
    plotSize: "50 x 100ft",
    pricing: {
      outright: "₦30,000,000",
      "3months": "₦31,500,000",
      "6months": "₦33,000,000",
      "12months": "₦34,500,000",
    },
    deedFee: "₦500,000",
  },
];

const Loader = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 flex items-center justify-center z-50">
    <div className="text-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div
          className="absolute inset-0 w-20 h-20 border-4 border-emerald-300 border-b-transparent rounded-full animate-spin mx-auto"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">
        First Choice Afro Villa
      </h2>
      <p className="text-emerald-200 animate-pulse">
        Loading premium locations...
      </p>
    </div>
  </div>
);

const EstateCard = ({ estate }) => {
  const [selectedPlan, setSelectedPlan] = useState("outright");

  const planOptions = [
    { key: "outright", label: "Outright" },
    { key: "3months", label: "3 Months" },
    { key: "6months", label: "6 Months" },
    { key: "12months", label: "12 Months" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{estate.name}</h3>
        <div className="flex items-start gap-2">
          <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-200" />
          <p className="text-emerald-100 text-sm leading-relaxed">
            {estate.location}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Home className="w-5 h-5 text-emerald-600" />
          <span className="font-semibold text-gray-800">
            Plot Size: {estate.plotSize}
          </span>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-600" />
            Payment Plans
          </h4>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {planOptions.map((plan) => (
              <button
                key={plan.key}
                onClick={() => setSelectedPlan(plan.key)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                  selectedPlan === plan.key
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : "border-gray-200 hover:border-emerald-300 text-gray-700"
                }`}
              >
                {plan.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="text-3xl font-bold text-emerald-600 mb-1">
              {estate.pricing[selectedPlan]}
            </div>
            <div className="text-sm text-gray-600">
              {selectedPlan === "outright"
                ? "One-time payment"
                : `${selectedPlan.replace("months", "")} month payment plan`}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <div className="text-sm text-amber-800">
              <strong>Deed of Assignment Fee:</strong> {estate.deedFee}
            </div>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = "tel:+234 703 114 7821")}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Contact to Buy
        </button>
      </div>
    </div>
  );
};

const AfroVillaLocations = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div
            className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-10 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              First Choice Afro Villa
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your gateway to premium land investments across Nigeria. We
              specialize in prime real estate locations with flexible payment
              plans tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-emerald-200">
              <div className="flex items-center gap-2">
                <Home className="w-6 h-6" />
                <span className="text-lg">Premium Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                <span className="text-lg">Flexible Payment Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6" />
                <span className="text-lg">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Available Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully selected premium land locations across
            Nigeria, each offering unique advantages and flexible payment
            options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {estateData.map((estate, index) => (
            <EstateCard key={index} estate={estate} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Invest?
          </h3>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards owning your dream property. Our team is
            ready to guide you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Send Email
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-2xl font-bold mb-4">First Choice Afro Villa</h4>
          <p className="text-gray-400 mb-6">
            Building dreams, creating communities.
          </p>
          <div className="text-sm text-gray-500">
            © 2025 First Choice Afro Villa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AfroVillaLocations;
