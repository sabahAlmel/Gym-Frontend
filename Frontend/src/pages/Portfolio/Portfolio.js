



import React from "react";
import FitnessJourneySection from './FitnessJourney';
import HeroSection from "../../layouts/PortfolioEquipment/HeroSection";
import GymEquipmentSection from "../../layouts/PortfolioEquipment/index.js";
import PortfolioTestimonials from "../../layouts/PortfolioTestimonials/index";

function Portfolio() {
  return (
    <>
    
      <HeroSection />
      <section className="portfolioWrapper">
        <FitnessJourneySection/>
        <GymEquipmentSection /> 
        <PortfolioTestimonials />
    </section>
    </>
  );
}

export default Portfolio;
