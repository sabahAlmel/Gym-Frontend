import React from "react";
import HeroSectionHomepageCss from "./HeroSectionHomapage.module.css";

const HeroSectionHomepage = () => {
  return (
    <div className={HeroSectionHomepageCss.containerHero}>
      <div className={HeroSectionHomepageCss.backgroundImage}>
        <div className={HeroSectionHomepageCss.content}>
          <h1 className={HeroSectionHomepageCss.title}>
            work <span className={HeroSectionHomepageCss.spann}>harder </span>
            get stronger
          </h1>
          <a href="/login" className={HeroSectionHomepageCss.button}>
            join us
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeroSectionHomepage;
