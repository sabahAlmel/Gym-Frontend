



import React from "react";
import FitnessJourneySection from './FitnessJourney';
import HeroSection from "../../layouts/PortfolioEquipment/HeroSection";
import GymEquipmentSection from "../../layouts/PortfolioEquipment/index.js";
import PortfolioTestimonials from "../../layouts/PortfolioTestimonials/index";
import Potential from "../../layouts/Potential";

function Portfolio() {
  return (
    <>
    
      <HeroSection />
      <section className="portfolioWrapper">
        <FitnessJourneySection/>
        <Potential />
        <GymEquipmentSection /> 
        <PortfolioTestimonials />
    </section>
    </>
  );
}

export default Portfolio;
