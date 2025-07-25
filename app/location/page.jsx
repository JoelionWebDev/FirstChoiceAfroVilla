"use client";
import React, { useState, useEffect } from "react";
import { MapPin, ArrowRight, Phone, Mail } from "lucide-react";

const LocationsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const locations = [
    {
      id: 1,
      name: "Abuja",
      caption: "Modern homes and smart investments in the heart of Nigeria",
      image:
        "https://images.unsplash.com/photo-1596756830022-d5d1f2c4f20b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      properties: 45,
    },
    {
      id: 2,
      name: "Enugu",
      caption: "Serene neighborhoods with rich cultural heritage",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80",
      properties: 32,
    },
    {
      id: 3,
      name: "Anambra",
      caption: "Premium residential and commercial spaces",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      properties: 28,
    },
    {
      id: 4,
      name: "Delta",
      caption: "Waterfront properties with exceptional views",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      properties: 21,
    },
    {
      id: 5,
      name: "Ebonyi",
      caption: "Emerging market with great investment potential",
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
      properties: 18,
    },
    {
      id: 6,
      name: "Onitsha",
      caption: "Commercial hub with diverse housing options",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      properties: 35,
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600 mx-auto mb-4"></div>
            <div className="absolute inset-0 w-12 h-12 border-2 border-indigo-300 rounded-full animate-ping mx-auto mt-2"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-32 mx-auto"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Our Locations
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            We're proud to serve across top Nigerian cities
          </p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <MapPin className="w-6 h-6" />
            <span>6 Premium Locations</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Location Cards Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Our Cities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From bustling metropolitan areas to emerging markets, we offer
              premium real estate opportunities across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div
                key={location.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${location.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                    {location.properties} Properties
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {location.caption}
                  </p>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                    View Properties
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where We Operate
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategically located across Nigeria's most promising regions
            </p>
          </div>

          <div className="relative bg-gray-100 rounded-2xl h-96 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600">
                  Coming Soon - Explore our locations on an interactive map
                </p>
              </div>
            </div>

            {/* Decorative pins */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Looking to invest in any of our locations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert agents are ready to help you find the perfect property
            that matches your needs and budget
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Talk to Our Agents
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Get Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            First Choice Afro Villa LTD
          </h3>
          <p className="text-gray-400 mb-6">
            Your trusted partner in Nigerian real estate
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Properties
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Services
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LocationsPage;
