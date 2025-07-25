"use client";
import React, { useState } from "react";
import { Search, MapPin, Phone, ArrowRight, Sun, Moon } from "lucide-react";

export default function RealEstateHero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handlePhoneClick = async () => {
    const phoneNumber = "09058892149";

    try {
      await navigator.clipboard.writeText(phoneNumber);
      // Optional: Show a success message
      alert("Phone number copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy phone number: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = phoneNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Phone number copied to clipboard!");
    }
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6 md:px-12 -mt-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-6 leading-tight">
              <span className="inline-block animate-fade-in">First Choice</span>
              <br />
              <span className="inline-block animate-fade-in delay-300 bg-gradient-to-r from-red-700 via-red-400 to-cyan-400 bg-clip-text text-transparent">
                Afro Villa LTD
              </span>
            </h1>
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
              Explore a curated collection of premium land listings across
              Nigeria’s most promising and desirable areas. Whether for
              investment or development, your perfect plot awaits. Subscribe
              below to get first access to exclusive land opportunities and
              updates.
            </p>
            {/* Search Bar */}
            <div className="mb-10 animate-fade-in delay-700">
              <form className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <input className=" bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500/50 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white transition-all duration-300" />
                  <button
                    onClick={() =>
                      window.open(
                        "https://formurl.com/to/firstchoice-afro-villa-limited",
                        "_blank"
                      )
                    }
                    className="w-full pl-16 pr-32 py-4 md:py-5 text-lg rounded-2xl absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                  >
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in delay-1000">
              <button
                onClick={() => window.open("/properties", "_self")}
                className="w-full pl-16 pr-32 py-4 md:py-5 group bg-gradient-to-r from-blue-600 to-purple-600/20 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3"
              >
                <MapPin className="w-6 h-6 group-hover:animate-bounce" />
                Browse Properties
              </button>

              <button
                onClick={handlePhoneClick}
                className="w-full pl-16 pr-32 py-4 md:py-5 group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                Contact an Agent
              </button>
            </div>
            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in delay-1200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  500+
                </div>
                <div className="text-gray-300 dark:text-gray-400">
                  Premium Properties
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  50+
                </div>
                <div className="text-gray-300 dark:text-gray-400">
                  Luxury Locations
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  98%
                </div>
                <div className="text-gray-300 dark:text-gray-400">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
}
