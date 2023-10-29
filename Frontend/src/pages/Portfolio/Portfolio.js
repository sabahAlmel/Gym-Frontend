import React from "react";
import HeroSection from "./HeroSection";
import GymEquipmentSection from "../../layouts/PortfolioEquipment/index.js";

function Portfolio() {
  return (
    <section className="portfolioWrapper">
      <HeroSection />
      <GymEquipmentSection /> 
    </section>
  );
}

export default Portfolio;
