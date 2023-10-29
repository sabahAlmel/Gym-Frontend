import React from "react";
import HeroSection from "./HeroSection";
import GymEquipmentSection from "../../layouts/PortfolioEquipment/index.js";
import PortfolioTestimonials from "../../layouts/PortfolioTestimonials/index";

function Portfolio() {
  return (
    <section className="portfolioWrapper">
      <HeroSection />
      <GymEquipmentSection /> 
      <PortfolioTestimonials />
    </section>
  );
}

export default Portfolio;
