import React from "react";
import HeroSectionHomepageCss from"./HeroSectionHomapage.module.css"

const HeroSectionHomepage = () => {
    return(
        <div className={HeroSectionHomepageCss.hero}>
            <div className={HeroSectionHomepageCss.content}>
                <h1 className={HeroSectionHomepage.title}>work<span className={HeroSectionHomepage.word}>harder</span>getstronger</h1>
                <button>join us</button>
            </div>

        </div>
        
    )
}
export default HeroSectionHomepage;