import React from "react";
import HeroSectionHomepageCss from"./HeroSectionHomapage.module.css"

const HeroSectionHomepage = () => {
    return(
        <div className={HeroSectionHomepageCss.containerHero}>
            <div className={HeroSectionHomepageCss.backgroundImage}></div>
        </div>
    )
}
export default HeroSectionHomepage;