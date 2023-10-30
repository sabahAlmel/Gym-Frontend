import React from 'react'
import style from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={style.heroSection}>
        <h1 className={style.heroSectionTitle}>easy with <span className={style.fitTitle}>fithub</span> gym</h1>
        <div className={style.portfolioStatistics}>
            <div className={style.statictic}>
                <h2 className={style.statisticNumber}>450+</h2>
                <h2 className={style.statisticDescription}>members</h2>
            </div>

            <div className={style.statictic}>
                <h2 className={style.statisticNumber}>120+</h2>
                <h2 className={style.statisticDescription}>fitness programs</h2>
            </div>

            <div className={style.statictic}>
                <h2 className={style.statisticNumber}>17+</h2>
                <h2 className={style.statisticDescription}>experience years</h2>
            </div>
        </div>
    </div>
  )
}


export default HeroSection