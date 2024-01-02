import React from "react";
import Products from "../../layouts/Products/Products";
import Regimeplansection from "../../layouts/regimeplan/regimeplan";
import style from "./Services.module.css";
import icon from "../../assets/icons/dumbbell.png";
import { Helmet } from "react-helmet-async";

import PersonnalTraining from "../../layouts/PersonnalTraining/PersonnalTraining";

function Services() {
  return (
    <>
      <Helmet>
        <title> Services</title>

        {/* <link rel="stylesheet" href={icon}></link> */}
        <link rel="shortcut icon" href={icon} type="image/x-icon" />
      </Helmet>
      <section className={style.servicesHeroImage}>
        <span className={style.servicesHeroTextContainer}>
          <span style={{ color: "var(--red-text-clr)" }}>Make</span> Your Dream
          Body
        </span>
      </section>
      <section className="servicesWrapper">
        <Products />
        <PersonnalTraining />
        <Regimeplansection />
      </section>
    </>
  );
}

export default Services;
