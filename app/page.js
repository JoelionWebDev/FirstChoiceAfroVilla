import React from "react";
import HeroSection from "./Component/HeroSection";
import FeaturedProperties from "./Component/FeaturedProperties";
import AboutSection from "./Component/AboutSection";
import TestimonialsSection from "./Component/Testimonia";
import ContactSection from "./Component/ContactSection";

const page = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProperties />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default page;
