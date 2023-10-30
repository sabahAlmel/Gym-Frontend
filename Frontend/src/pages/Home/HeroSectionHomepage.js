import React from "react";
import HeroSectionHomepageCss from"./HeroSectionHomapage.module.css"

const HeroSectionHomepage = () => {
    return(
        <div className={HeroSectionHomepageCss.containerHero}>
            <div className={HeroSectionHomepageCss.backgroundImage}>
                <div className={HeroSectionHomepageCss.content}>
                    <h1 className={HeroSectionHomepageCss.title}>work <span className={HeroSectionHomepageCss.spann}>harder </span>get stronger</h1>
                    <button className={HeroSectionHomepageCss.button}>join us</button>
                </div>   
            </div>
        </div>
    )
}
export default HeroSectionHomepage;