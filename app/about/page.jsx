"use client";
import React, { useState, useEffect } from "react";
import {
  Star,
  Users,
  Building,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Shield,
  Heart,
  Home,
} from "lucide-react";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-2 border-amber-300 rounded-full animate-ping mx-auto"></div>
          </div>
          <h2 className="text-2xl font-bold text-amber-800 animate-pulse">
            First Choice Afro Villa
          </h2>
          <p className="text-amber-600 mt-2 animate-pulse">
            Loading Excellence...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              First Choice <span className="text-amber-400">Afro Villa</span>{" "}
              LTD
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Building Dreams, One Property at a Time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Properties
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Star className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide exceptional real estate services that exceed
                expectations, creating lasting relationships built on trust,
                integrity, and outstanding results. We are committed to making
                property ownership accessible and enjoyable for all Nigerians.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be Nigeria's premier real estate company, recognized for
                innovation, quality, and customer satisfaction. We envision a
                future where every Nigerian has access to their dream home
                through our comprehensive property solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                First Choice Afro Villa LTD is a leading real estate company
                established with a passion for transforming the Nigerian
                property landscape. Since our inception, we have been dedicated
                to providing premium real estate services across major Nigerian
                cities.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our team of experienced professionals brings together decades of
                expertise in property development, sales, and customer service.
                We specialize in residential and commercial properties, offering
                everything from luxury villas to affordable housing solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Licensed and regulated real estate company
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Serving major Nigerian cities
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Comprehensive property solutions
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern African villa"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Numbers that speak to our commitment and success in the Nigerian
              real estate market
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Properties Sold</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">8+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">6</h3>
              <p className="text-gray-600">Cities Served</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">1000+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate professionals behind First Choice Afro Villa's
              success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/ceo.jpeg"
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Engr. (Dr.) Jerry Patrick Onuokaibe
              </h3>
              <p className="text-amber-600 font-semibold mb-3">
                Managing Director/CEO
              </p>
              <p className="text-gray-600 text-sm">
                A visionary leader committed to making land and property
                ownership accessible, secure, and rewarding for all.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/director.jpeg"
                alt="On bord chariman"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Kanu Nwankwo (a.k.a Papilo)
              </h3>
              <p className="text-amber-600 font-semibold mb-3">ON Chairman</p>
              <p className="text-gray-600 text-sm">
                On Chairman FirstChoice Afro Villa Limited
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/admindr.jpeg"
                alt="Development Manager"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Mr Romanus Ikechukwu Onyeulor
              </h3>
              <p className="text-amber-600 font-semibold mb-3">
                Administrative Manager
              </p>
              <p className="text-gray-600 text-sm">
                "Transforming visions into reality with innovative property
                solutions"
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/mktd.jpeg"
                alt="marketting director"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Mr Emmanuel Okoh (Okwuluora Ndi Igbo)
              </h3>
              <p className="text-amber-600 font-semibold mb-3">
                Director of Marketing
              </p>
              <p className="text-gray-600 text-sm">
                Passionate about connecting people to their dream properties
                through smart, engaging, and customer-first marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose First Choice Afro Villa
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference with our comprehensive real estate
              services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Premium Listings
              </h3>
              <p className="text-gray-600 text-sm">
                Carefully curated properties that meet the highest standards of
                quality and luxury
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Easy Payment Options
              </h3>
              <p className="text-gray-600 text-sm">
                Flexible financing solutions designed to make property ownership
                accessible to all
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock customer service to assist you every step of
                your property journey
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Trusted by Thousands
              </h3>
              <p className="text-gray-600 text-sm">
                Proven track record of successful transactions and satisfied
                clients across Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Dream Home Awaits
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect
            property with First Choice Afro Villa. Let us help you turn your
            property dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Properties
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">
                First Choice Afro Villa LTD
              </h3>
              <p className="text-gray-400 mb-4">
                Building dreams, one property at a time across Nigeria's major
                cities.
              </p>
              <div className="flex space-x-4">
                <div className="bg-amber-600 p-2 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="bg-amber-600 p-2 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="bg-amber-600 p-2 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Property Sales</li>
                <li>Property Management</li>
                <li>Real Estate Consultation</li>
                <li>Property Development</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Cities We Serve</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Abuja</li>
                <li>Enugu</li>
                <li>Anambra</li>
                <li>Delta</li>
                <li>Ebonyi</li>
                <li>Onitsha</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 First Choice Afro Villa LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
