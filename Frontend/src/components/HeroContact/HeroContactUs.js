import React from "react";
import styles from "./HeroContactUs.module.css"

const HeroContactUs = () => {
    return (
        <div className={styles.containerHero}>
            <div className={styles.backgroundImage}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Take <span className={styles.spann}>the Next </span>Step</h1>
                    <p className={styles.paragraph}>You have made it this far, so do not waste
                        another moment not being the person you were meant to be.
                        Take back your power, overcome your insecurities and live the life you deserve.</p>
                </div>
            </div>
        </div>
    )
}
export default HeroContactUs;
