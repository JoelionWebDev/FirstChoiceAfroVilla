import React from "react";
import {
  Shield,
  MapPin,
  Eye,
  Clock,
  Award,
  Users,
  TrendingUp,
  Heart,
} from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Experts",
      description:
        "Over 15 years of experience in real estate with certified professionals who prioritize your needs and ensure secure transactions.",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description:
        "Access to exclusive properties in the most desirable neighborhoods and upcoming areas with high growth potential.",
    },
    {
      icon: Eye,
      title: "Transparent Deals",
      description:
        "Complete transparency in all transactions with detailed property reports, market analysis, and honest pricing guidance.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance from our dedicated team to answer questions and provide support whenever you need it.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* About Company Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            About <br />
            <span className="text-blue-600 dark:text-blue-400">
              First Choice Afro <br /> Villa Real Estate
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We are a leading real estate company dedicated to helping you find
            your perfect home or investment property. With decades of combined
            experience and a deep understanding of local markets, we provide
            personalized service that turns your real estate dreams into
            reality. Our commitment to excellence and client satisfaction has
            made us the trusted choice for thousands of satisfied customers.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Us?
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-blue-600/10 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                500+
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Properties Sold
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                15+
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                98%
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                24/7
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
