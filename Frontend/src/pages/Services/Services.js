import React from "react";

import servicesHero from "../../assets/images/ServicesImages/servicesHero.png";
import Products from "../../layouts/Products/Products";
import style from "./Services.module.css";
import ServicesPageServices from "../../layouts/ServicesPageServices/index";

function Services() {
  return (
    <>
      <section className={style.servicesHeroImage}>
        <span className={style.servicesHeroTextContainer}>
          <span style={{ color: "var(--red-text-clr)" }}>Make</span> Your Dream
          Body
        </span>
      </section>
      <section className="servicesWrapper">
        <Products />
        <ServicesPageServices />
      </section>
    </>
  );
}

export default Services;
