import React from "react";
import HeroSectionHomepage from "./HeroSectionHomepage";

import ServicesSection from "../../layouts/HomepageServices/index";
import GymPlans from "../../layouts/GymPlans/GymPlans";
import ReasonsToJoin from "../../components/ReasonsToJoin/ReasonsToJoin";
import "./home.css";
import { Helmet } from "react-helmet-async";
import icon from "../../assets/icons/dumbbell.png";

function Home() {
  return (
    <>
      <Helmet>
        <title> Home</title>

        <link rel="shortcut icon" href={icon} type="image/x-icon" />
      </Helmet>

      <HeroSectionHomepage />
      <section className="homeWrapper">
        <ReasonsToJoin />
        <ServicesSection />
        <GymPlans />
      </section>
    </>
  );
}

export default Home;
