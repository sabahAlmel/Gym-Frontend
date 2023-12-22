



import React from "react";
import FitnessJourneySection from './FitnessJourney';
import HeroSection from "../../layouts/PortfolioEquipment/HeroSection";
import GymEquipmentSection from "../../layouts/PortfolioEquipment/index.js";
import PortfolioTestimonials from "../../layouts/PortfolioTestimonials/index";
import Potential from "../../layouts/Potential";
import { Helmet } from "react-helmet-async";
import icon from "../../assets/icons/icon1.svg"

function Portfolio() {
  return (
    <>
      <Helmet>
    <title> Portfolio</title>

    {/* <link rel="stylesheet" href={icon}></link> */}
    <link rel="shortcut icon" href={icon} type="image/x-icon" />

    </Helmet>
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
