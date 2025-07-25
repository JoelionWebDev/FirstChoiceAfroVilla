"use client";
import React, { useState, useEffect } from "react";
import {
  MapPin,
  Home,
  Calendar,
  DollarSign,
  FileText,
  Phone,
  Mail,
  Star,
} from "lucide-react";

const RealEstateProperties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(null);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = async (action, propertyId = null) => {
    setButtonLoading(action + (propertyId || ""));

    // Simulate loading time
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (action === "viewPlans") {
      const property = properties.find((p) => p.id === propertyId);
      setSelectedProperty(property);
    } else if (
      action === "reserve" ||
      action === "visit" ||
      action === "schedule" ||
      action === "info"
    ) {
      // Handle other actions here
      console.log(`${action} clicked`);
    }

    setButtonLoading(null);
  };

  // Loading Spinner Component
  const LoadingSpinner = ({ size = "small" }) => {
    const sizeClasses = {
      small: "w-5 h-5",
      medium: "w-8 h-8",
      large: "w-12 h-12",
    };

    return (
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="h-full w-full border-4 border-gray-300 border-t-white rounded-full"></div>
      </div>
    );
  };

  // Page Loader Component
  const PageLoader = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-white border-opacity-20 rounded-full animate-spin">
            <div className="w-20 h-20 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
          </div>
          <Home className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          First Choice Afro Villa
        </h2>
        <p className="text-blue-100 animate-pulse">
          Loading premium properties...
        </p>
        <div className="flex justify-center mt-4 space-x-1">
          <div
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );

  const properties = [
    {
      id: 1,
      name: "Awka Premium Land",
      location: "Ndiukwuenu, very close to Amansea Gariki, Awka, Anambra State",
      size: "50 x 100ft",
      outright: "₦5,000,000",
      threeMonths: "₦5,250,000",
      sixMonths: "₦5,500,000",
      twelveMonths: "₦5,750,000",
      deedOfAssignment: "₦500,000",
      highlights: [
        "Close to Amansea Gariki",
        "Prime location in Awka",
        "Excellent road access",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      name: "Abakaliki University District",
      location:
        "Ishieke, trekable distance to Ebonyi State University, Abakaliki, Ebonyi State",
      size: "50 x 100ft",
      outright: "₦5,000,000",
      threeMonths: "₦5,250,000",
      sixMonths: "₦5,500,000",
      twelveMonths: "₦5,750,000",
      deedOfAssignment: "₦500,000",
      highlights: [
        "Walking distance to EBSU",
        "Student accommodation potential",
        "Growing university area",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      name: "Agbogazi Nike Estate",
      location:
        "Agbogazi Nike, Enugu East LGA, Enugu State. Very close to Ugwogo Market",
      size: "50 x 100ft",
      outright: "₦2,000,000",
      threeMonths: "₦2,100,000",
      sixMonths: "₦2,200,000",
      twelveMonths: "₦2,300,000",
      deedOfAssignment: "₦500,000",
      highlights: [
        "Close to Ugwogo Market",
        "Affordable investment",
        "Enugu East location",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      name: "Iva Valley Premium",
      location:
        "At Iva Valley, Pottery House, very close to Enugu State Housing Estate, Enugu State",
      size: "50 x 100ft",
      outright: "₦15,000,000",
      threeMonths: "₦15,750,000",
      sixMonths: "₦16,500,000",
      twelveMonths: "₦17,250,000",
      deedOfAssignment: "₦500,000",
      highlights: [
        "Near State Housing Estate",
        "Premium Iva Valley location",
        "High value investment",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: 5,
      name: "Owerri Strategic Land",
      location: "Along the Avu - Obosima road, Owerri, Imo State",
      size: "50 x 100ft",
      outright: "₦10,000,000",
      threeMonths: "₦10,500,000",
      sixMonths: "₦11,000,000",
      twelveMonths: "₦11,500,000",
      deedOfAssignment: "₦500,000",
      highlights: [
        "Strategic Avu-Obosima road",
        "Owerri city proximity",
        "Commercial potential",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: 6,
      name: "Independence Lake Side Layout",
      location:
        "Behind Centenary City, sharing fence boundary with Police College, Awkunanaw, Enugu State",
      size: "50 x 100ft",
      outright: "₦30,000,000",
      threeMonths: "₦31,500,000",
      sixMonths: "₦33,000,000",
      twelveMonths: "₦34,500,000",
      deedOfAssignment: "₦500,000",
      highlights: [
        "Lake side premium location",
        "Adjacent to Police College",
        "Luxury development area",
      ],
      image: "/api/placeholder/400/300",
    },
  ];

  const formatPrice = (price) => {
    return price.replace(/₦/, "₦").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Home className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                First Choice Afro Villa
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-1" />
                <span>+234 803 569 6337 </span>
              </div>
              <div className="flex items-center text-sm text-gray-600"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Premium Land
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Investments
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover prime land opportunities across Nigeria's most promising
            locations. Flexible payment plans with guaranteed returns on your
            investment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white rounded-full px-6 py-3 shadow-md">
              <span className="text-blue-600 font-semibold">
                6 Premium Locations
              </span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-md">
              <span className="text-green-600 font-semibold">
                Flexible Payment Plans
              </span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-md">
              <span className="text-purple-600 font-semibold">
                Legal Documentation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Available Properties
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-gray-800">
                      {property.size}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white rounded-full px-3 py-1">
                    <span className="text-sm font-bold">Available</span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {property.name}
                  </h4>
                  <div className="flex items-start text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">
                      {property.location}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    {property.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Star className="h-3 w-3 text-yellow-500 mr-2" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">
                        Starting from
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {formatPrice(property.outright)}
                      </p>
                      <p className="text-xs text-gray-500">Outright payment</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleButtonClick("viewPlans", property.id)}
                    disabled={buttonLoading === `viewPlans${property.id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {buttonLoading === `viewPlans${property.id}` ? (
                      <>
                        <LoadingSpinner size="small" />
                        <span className="ml-2">Loading...</span>
                      </>
                    ) : (
                      "View Payment Plans"
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Complete Pricing Overview
          </h3>

          <div className="overflow-x-auto rounded-2xl shadow-xl">
            <table className="w-full min-w-[800px] border-collapse bg-white rounded-lg overflow-hidden text-black">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                    Estate Location
                  </th>
                  <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                    Plot Size
                  </th>
                  <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                    Outright
                  </th>
                  <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                    3 Months
                  </th>
                  <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                    6 Months
                  </th>
                  <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                    12 Months
                  </th>
                  <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                    Deed of Assignment
                  </th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property, index) => (
                  <tr
                    key={property.id}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <td className="border border-gray-200 px-2 sm:px-4 py-4 font-medium text-blue-600 text-sm sm:text-base">
                      {property.name
                        .replace(" Premium", "")
                        .replace(" Strategic Land", "")
                        .replace(" Estate", "")
                        .replace(" District", "")}
                    </td>
                    <td className="border border-gray-200 px-2 sm:px-4 py-4 text-sm sm:text-base whitespace-nowrap">
                      {property.size}
                    </td>
                    <td className="border border-gray-200 px-2 sm:px-4 py-4 text-sm sm:text-base whitespace-nowrap font-semibold">
                      {formatPrice(property.outright)}
                    </td>
                    <td className="border border-gray-200 px-2 sm:px-4 py-4 font-semibold text-sm sm:text-base whitespace-nowrap">
                      {formatPrice(property.threeMonths)}
                    </td>
                    <td className="border border-gray-200 px-2 sm:px-4 py-4 font-semibold text-sm sm:text-base whitespace-nowrap">
                      {formatPrice(property.sixMonths)}
                    </td>
                    <td className="border border-gray-200 px-2 sm:px-4 py-4 font-semibold text-sm sm:text-base whitespace-nowrap">
                      {formatPrice(property.twelveMonths)}
                    </td>
                    <td className="border border-gray-200 px-2 sm:px-4 py-4 font-semibold text-sm sm:text-base whitespace-nowrap">
                      {formatPrice(property.deedOfAssignment)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Future?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of smart investors who have already secured their
            piece of Nigeria's growing real estate market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleButtonClick("schedule")}
              disabled={buttonLoading === "schedule"}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {buttonLoading === "schedule" ? (
                <>
                  <LoadingSpinner size="small" />
                  <span className="ml-2">Scheduling...</span>
                </>
              ) : (
                "Schedule Site Visit"
              )}
            </button>
            <button
              onClick={() => handleButtonClick("info")}
              disabled={buttonLoading === "info"}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {buttonLoading === "info" ? (
                <>
                  <LoadingSpinner size="small" />
                  <span className="ml-2">Loading...</span>
                </>
              ) : (
                "Get More Information"
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-90vh overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProperty.name}
                </h3>
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-6">
                <div className="flex items-start text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                  <p>{selectedProperty.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Payment Plans</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Outright</span>
                      <span className="font-bold text-green-600">
                        {formatPrice(selectedProperty.outright)}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">3 Months</span>
                      <span className="font-bold text-blue-600">
                        {formatPrice(selectedProperty.threeMonths)}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">6 Months</span>
                      <span className="font-bold text-purple-600">
                        {formatPrice(selectedProperty.sixMonths)}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">12 Months</span>
                      <span className="font-bold text-orange-600">
                        {formatPrice(selectedProperty.twelveMonths)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">
                    Property Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedProperty.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FileText className="h-4 w-4 text-gray-600 mr-2" />
                      <span className="font-medium text-gray-900">
                        Documentation Fee
                      </span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">
                      {formatPrice(selectedProperty.deedOfAssignment)}
                    </p>
                    <p className="text-sm text-gray-600">Deed of Assignment</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() =>
                    handleButtonClick("reserve", selectedProperty.id)
                  }
                  disabled={buttonLoading === `reserve${selectedProperty.id}`}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {buttonLoading === `reserve${selectedProperty.id}` ? (
                    <>
                      <LoadingSpinner size="small" />
                      <span className="ml-2">Reserving...</span>
                    </>
                  ) : (
                    "Reserve This Property"
                  )}
                </button>
                <button
                  onClick={() =>
                    handleButtonClick("visit", selectedProperty.id)
                  }
                  disabled={buttonLoading === `visit${selectedProperty.id}`}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {buttonLoading === `visit${selectedProperty.id}` ? (
                    <>
                      <LoadingSpinner size="small" />
                      <span className="ml-2">Scheduling...</span>
                    </>
                  ) : (
                    "Schedule Visit"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealEstateProperties;
// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   MapPin,
//   Home,
//   FileText,
//   Phone,
//   Mail,
//   Star,
// } from "lucide-react";

// const RealEstateProperties = () => {
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [buttonLoading, setButtonLoading] = useState(null);

//   useEffect(() => {
//     // Simulate initial page load
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     // Loading Spinner Component
//     const LoadingSpinner = ({ size = "small" }) => {
//       const sizeClasses = {
//         small: "w-5 h-5",
//         medium: "w-8 h-8",
//         large: "w-12 h-12",
//       };

//       return (
//         <div className={`${sizeClasses[size]} animate-spin`}>
//           <div className="h-full w-full border-4 border-gray-300 border-t-white rounded-full"></div>
//         </div>
//       );
//     };

//     // Page Loader Component
//     const PageLoader = () => (
//       <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center z-50">
//         <div className="text-center">
//           <div className="relative mb-8">
//             <div className="w-20 h-20 border-4 border-white border-opacity-20 rounded-full animate-spin">
//               <div className="w-20 h-20 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
//             </div>
//             <Home className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-white" />
//           </div>
//           <h2 className="text-2xl font-bold text-white mb-2">
//             Prime Land Investments
//           </h2>
//           <p className="text-blue-100 animate-pulse">
//             Loading premium properties...
//           </p>
//           <div className="flex justify-center mt-4 space-x-1">
//             <div
//               className="w-2 h-2 bg-white rounded-full animate-bounce"
//               style={{ animationDelay: "0ms" }}
//             ></div>
//             <div
//               className="w-2 h-2 bg-white rounded-full animate-bounce"
//               style={{ animationDelay: "150ms" }}
//             ></div>
//             <div
//               className="w-2 h-2 bg-white rounded-full animate-bounce"
//               style={{ animationDelay: "300ms" }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     );

//     if (isLoading) {
//       return <PageLoader />;
//     }

//     return () => clearTimeout(timer);
//   }, []);

//   const handleButtonClick = async (action, propertyId = null) => {
//     setButtonLoading(action + (propertyId || ""));

//     // Simulate loading time
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     if (action === "viewPlans") {
//       const property = properties.find((p) => p.id === propertyId);
//       setSelectedProperty(property);
//     } else if (
//       action === "reserve" ||
//       action === "visit" ||
//       action === "schedule" ||
//       action === "info"
//     ) {
//       // Handle other actions here
//       console.log(`${action} clicked`);
//     }

//     setButtonLoading(null);
//   };

//   const properties = [
//     {
//       id: 1,
//       name: "Awka Premium Land",
//       location: "Ndiukwuenu, very close to Amansea Gariki, Awka, Anambra State",
//       size: "50 x 100ft",
//       outright: "₦5,000,000",
//       threeMonths: "₦5,250,000",
//       sixMonths: "₦5,500,000",
//       twelveMonths: "₦5,750,000",
//       deedOfAssignment: "₦500,000",
//       highlights: [
//         "Close to Amansea Gariki",
//         "Prime location in Awka",
//         "Excellent road access",
//       ],
//       image: "/api/placeholder/400/300",
//     },
//     {
//       id: 2,
//       name: "Abakaliki University District",
//       location:
//         "Ishieke, trekable distance to Ebonyi State University, Abakaliki, Ebonyi State",
//       size: "50 x 100ft",
//       outright: "₦5,000,000",
//       threeMonths: "₦5,250,000",
//       sixMonths: "₦5,500,000",
//       twelveMonths: "₦5,750,000",
//       deedOfAssignment: "₦500,000",
//       highlights: [
//         "Walking distance to EBSU",
//         "Student accommodation potential",
//         "Growing university area",
//       ],
//       image: "/api/placeholder/400/300",
//     },
//     {
//       id: 3,
//       name: "Agbogazi Nike Estate",
//       location:
//         "Agbogazi Nike, Enugu East LGA, Enugu State. Very close to Ugwogo Market",
//       size: "50 x 100ft",
//       outright: "₦2,000,000",
//       threeMonths: "₦2,100,000",
//       sixMonths: "₦2,200,000",
//       twelveMonths: "₦2,300,000",
//       deedOfAssignment: "₦500,000",
//       highlights: [
//         "Close to Ugwogo Market",
//         "Affordable investment",
//         "Enugu East location",
//       ],
//       image: "/api/placeholder/400/300",
//     },
//     {
//       id: 4,
//       name: "Iva Valley Premium",
//       location:
//         "At Iva Valley, Pottery House, very close to Enugu State Housing Estate, Enugu State",
//       size: "50 x 100ft",
//       outright: "₦15,000,000",
//       threeMonths: "₦15,750,000",
//       sixMonths: "₦16,500,000",
//       twelveMonths: "₦17,250,000",
//       deedOfAssignment: "₦500,000",
//       highlights: [
//         "Near State Housing Estate",
//         "Premium Iva Valley location",
//         "High value investment",
//       ],
//       image: "/api/placeholder/400/300",
//     },
//     {
//       id: 5,
//       name: "Owerri Strategic Land",
//       location: "Along the Avu - Obosima road, Owerri, Imo State",
//       size: "50 x 100ft",
//       outright: "₦10,000,000",
//       threeMonths: "₦10,500,000",
//       sixMonths: "₦11,000,000",
//       twelveMonths: "₦11,500,000",
//       deedOfAssignment: "₦500,000",
//       highlights: [
//         "Strategic Avu-Obosima road",
//         "Owerri city proximity",
//         "Commercial potential",
//       ],
//       image: "/api/placeholder/400/300",
//     },
//     {
//       id: 6,
//       name: "Independence Lake Side Layout",
//       location:
//         "Behind Centenary City, sharing fence boundary with Police College, Awkunanaw, Enugu State",
//       size: "50 x 100ft",
//       outright: "₦30,000,000",
//       threeMonths: "₦31,500,000",
//       sixMonths: "₦33,000,000",
//       twelveMonths: "₦34,500,000",
//       deedOfAssignment: "₦500,000",
//       highlights: [
//         "Lake side premium location",
//         "Adjacent to Police College",
//         "Luxury development area",
//       ],
//       image: "/api/placeholder/400/300",
//     },
//   ];

//   const formatPrice = (price) => {
//     return price.replace(/₦/, "₦").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       {/* Header */}
//       <header className="bg-white shadow-lg sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <Home className="h-8 w-8 text-blue-600" />
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Prime Land Investments
//               </h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center text-sm text-gray-600">
//                 <Phone className="h-4 w-4 mr-1" />
//                 <span>+234 XXX XXX XXXX</span>
//               </div>
//               <div className="flex items-center text-sm text-gray-600">
//                 <Mail className="h-4 w-4 mr-1" />
//                 <span>info@primeland.com</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Premium Land
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//               {" "}
//               Investments
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Discover prime land opportunities across Nigeria's most promising
//             locations. Flexible payment plans with guaranteed returns on your
//             investment.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             <div className="bg-white rounded-full px-6 py-3 shadow-md">
//               <span className="text-blue-600 font-semibold">
//                 6 Premium Locations
//               </span>
//             </div>
//             <div className="bg-white rounded-full px-6 py-3 shadow-md">
//               <span className="text-green-600 font-semibold">
//                 Flexible Payment Plans
//               </span>
//             </div>
//             <div className="bg-white rounded-full px-6 py-3 shadow-md">
//               <span className="text-purple-600 font-semibold">
//                 Legal Documentation
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Properties Grid */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
//             Available Properties
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {properties.map((property) => (
//               <div
//                 key={property.id}
//                 className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
//               >
//                 <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-black bg-opacity-20"></div>
//                   <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
//                     <span className="text-sm font-semibold text-gray-800">
//                       {property.size}
//                     </span>
//                   </div>
//                   <div className="absolute bottom-4 right-4 bg-green-500 text-white rounded-full px-3 py-1">
//                     <span className="text-sm font-bold">Available</span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">
//                     {property.name}
//                   </h4>
//                   <div className="flex items-start text-gray-600 mb-4">
//                     <MapPin className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
//                     <p className="text-sm leading-relaxed">
//                       {property.location}
//                     </p>
//                   </div>

//                   <div className="space-y-2 mb-4">
//                     {property.highlights.map((highlight, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center text-sm text-gray-600"
//                       >
//                         <Star className="h-3 w-3 text-yellow-500 mr-2" />
//                         <span>{highlight}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="border-t pt-4 mb-4">
//                     <div className="text-center">
//                       <p className="text-sm text-gray-500 mb-1">
//                         Starting from
//                       </p>
//                       <p className="text-2xl font-bold text-blue-600">
//                         {formatPrice(property.outright)}
//                       </p>
//                       <p className="text-xs text-gray-500">Outright payment</p>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => handleButtonClick("viewPlans", property.id)}
//                     disabled={buttonLoading === `viewPlans${property.id}`}
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
//                   >
//                     {buttonLoading === `viewPlans${property.id}` ? (
//                       <>
//                         <LoadingSpinner size="small" />
//                         <span className="ml-2">Loading...</span>
//                       </>
//                     ) : (
//                       "View Payment Plans"
//                     )}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Table */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
//             Complete Pricing Overview
//           </h3>

//           <div className="overflow-x-auto rounded-2xl shadow-xl">
//             <table className="w-full min-w-[800px] border-collapse bg-white rounded-lg overflow-hidden text-black">
//               <thead>
//                 <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
//                   <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
//                     Estate Location
//                   </th>
//                   <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
//                     Plot Size
//                   </th>
//                   <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
//                     Outright
//                   </th>
//                   <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
//                     3 Months
//                   </th>
//                   <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
//                     6 Months
//                   </th>
//                   <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
//                     12 Months
//                   </th>
//                   <th className="border border-gray-200 px-2 sm:px-4 py-4 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
//                     Deed of Assignment
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {properties.map((property, index) => (
//                   <tr
//                     key={property.id}
//                     className="hover:bg-blue-50 transition-colors"
//                   >
//                     <td className="border border-gray-200 px-2 sm:px-4 py-4 font-medium text-blue-600 text-sm sm:text-base">
//                       {property.name
//                         .replace(" Premium", "")
//                         .replace(" Strategic Land", "")
//                         .replace(" Estate", "")
//                         .replace(" District", "")}
//                     </td>
//                     <td className="border border-gray-200 px-2 sm:px-4 py-4 text-sm sm:text-base whitespace-nowrap">
//                       {property.size}
//                     </td>
//                     <td className="border border-gray-200 px-2 sm:px-4 py-4 text-sm sm:text-base whitespace-nowrap font-semibold">
//                       {formatPrice(property.outright)}
//                     </td>
//                     <td className="border border-gray-200 px-2 sm:px-4 py-4 font-semibold text-sm sm:text-base whitespace-nowrap">
//                       {formatPrice(property.threeMonths)}
//                     </td>
//                     <td className="border border-gray-200 px-2 sm:px-4 py-4 font-semibold text-sm sm:text-base whitespace-nowrap">
//                       {formatPrice(property.sixMonths)}
//                     </td>
//                     <td className="border border-gray-200 px-2 sm:px-4 py-4 font-semibold text-sm sm:text-base whitespace-nowrap">
//                       {formatPrice(property.twelveMonths)}
//                     </td>
//                     <td className="border border-gray-200 px-2 sm:px-4 py-4 font-semibold text-sm sm:text-base whitespace-nowrap">
//                       {formatPrice(property.deedOfAssignment)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Secure Your Future?
//           </h3>
//           <p className="text-xl text-blue-100 mb-8">
//             Join thousands of smart investors who have already secured their
//             piece of Nigeria's growing real estate market.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => handleButtonClick("schedule")}
//               disabled={buttonLoading === "schedule"}
//               className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
//             >
//               {buttonLoading === "schedule" ? (
//                 <>
//                   <LoadingSpinner size="small" />
//                   <span className="ml-2">Scheduling...</span>
//                 </>
//               ) : (
//                 "Schedule Site Visit"
//               )}
//             </button>
//             <button
//               onClick={() => handleButtonClick("info")}
//               disabled={buttonLoading === "info"}
//               className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
//             >
//               {buttonLoading === "info" ? (
//                 <>
//                   <LoadingSpinner size="small" />
//                   <span className="ml-2">Loading...</span>
//                 </>
//               ) : (
//                 "Get More Information"
//               )}
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Property Detail Modal */}
//       {selectedProperty && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-90vh overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   {selectedProperty.name}
//                 </h3>
//                 <button
//                   onClick={() => setSelectedProperty(null)}
//                   className="text-gray-400 hover:text-gray-600 text-2xl"
//                 >
//                   ×
//                 </button>
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-start text-gray-600 mb-4">
//                   <MapPin className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
//                   <p>{selectedProperty.location}</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div className="space-y-4">
//                   <h4 className="font-semibold text-gray-900">Payment Plans</h4>
//                   <div className="space-y-2">
//                     <div className="flex justify-between p-3 bg-green-50 rounded-lg">
//                       <span className="font-medium">Outright</span>
//                       <span className="font-bold text-green-600">
//                         {formatPrice(selectedProperty.outright)}
//                       </span>
//                     </div>
//                     <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
//                       <span className="font-medium">3 Months</span>
//                       <span className="font-bold text-blue-600">
//                         {formatPrice(selectedProperty.threeMonths)}
//                       </span>
//                     </div>
//                     <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
//                       <span className="font-medium">6 Months</span>
//                       <span className="font-bold text-purple-600">
//                         {formatPrice(selectedProperty.sixMonths)}
//                       </span>
//                     </div>
//                     <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
//                       <span className="font-medium">12 Months</span>
//                       <span className="font-bold text-orange-600">
//                         {formatPrice(selectedProperty.twelveMonths)}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <h4 className="font-semibold text-gray-900">
//                     Property Highlights
//                   </h4>
//                   <div className="space-y-2">
//                     {selectedProperty.highlights.map((highlight, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center text-sm text-gray-600"
//                       >
//                         <Star className="h-4 w-4 text-yellow-500 mr-2" />
//                         <span>{highlight}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                     <div className="flex items-center mb-2">
//                       <FileText className="h-4 w-4 text-gray-600 mr-2" />
//                       <span className="font-medium text-gray-900">
//                         Documentation Fee
//                       </span>
//                     </div>
//                     <p className="text-lg font-bold text-gray-900">
//                       {formatPrice(selectedProperty.deedOfAssignment)}
//                     </p>
//                     <p className="text-sm text-gray-600">Deed of Assignment</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <button
//                   onClick={() =>
//                     handleButtonClick("reserve", selectedProperty.id)
//                   }
//                   disabled={buttonLoading === `reserve${selectedProperty.id}`}
//                   className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
//                 >
//                   {buttonLoading === `reserve${selectedProperty.id}` ? (
//                     <>
//                       <LoadingSpinner size="small" />
//                       <span className="ml-2">Reserving...</span>
//                     </>
//                   ) : (
//                     "Reserve This Property"
//                   )}
//                 </button>
//                 <button
//                   onClick={() =>
//                     handleButtonClick("visit", selectedProperty.id)
//                   }
//                   disabled={buttonLoading === `visit${selectedProperty.id}`}
//                   className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
//                 >
//                   {buttonLoading === `visit${selectedProperty.id}` ? (
//                     <>
//                       <LoadingSpinner size="small" />
//                       <span className="ml-2">Scheduling...</span>
//                     </>
//                   ) : (
//                     "Schedule Visit"
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RealEstateProperties;
