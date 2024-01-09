import React from "react";
import HeroSectionHomepageCss from "./HeroSectionHomapage.module.css";
import { NavLink } from "react-router-dom";

const HeroSectionHomepage = () => {
  return (
    <div className={HeroSectionHomepageCss.containerHero}>
      <div className={HeroSectionHomepageCss.backgroundImage}>
        <div className={HeroSectionHomepageCss.content}>
          <h1 className={HeroSectionHomepageCss.title}>
            work <span className={HeroSectionHomepageCss.spann}>harder </span>
            get stronger
          </h1>
          <NavLink to="/login" className={HeroSectionHomepageCss.button}>
            join us
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default HeroSectionHomepage;
