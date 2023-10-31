import React from 'react'
import style from './OurValue.module.css'
import variantOne from '../../assets/images/AboutUsImages/variant-1.png'
import variantTwo from '../../assets/images/AboutUsImages/variant-2.png'
import variantThree from '../../assets/images/AboutUsImages/variant-3.png'

const OurValue = () => {
    return (
        <>
            <div className={style.valueSection}> 
                <div className={style.ourValue}>
                    <h1 className={style.valueTitle}>our value</h1>
                    <p className={style.valueDescription}>
                        We believe in unbiased, gimmick-free, research-backed information
                        The only thing we endorse is eating unprocessed, whole foods, and working out for a strong, healthy body. As a business, we believe good things happen when you put people before profit.
                    </p>
                </div>
                <div className={style.valueVariants}>
                    <div className={style.valueVariant}>
                        <img className={style.variantImage} src={variantOne} alt='Powered' />
                        <h2 className={style.variantTitle}>powered by you</h2>
                        <p className={style.variantDescription}>Fithub has reached tens of millions around the globe, all from word of mouth; happy viewers sharing our content with friends and family.</p>
                    </div>

                    <div className={style.valueVariant}>
                        <img className={style.variantImage} src={variantTwo} alt='Wourkouts' />
                        <h2 className={style.variantTitle}>500+ free workouts</h2>
                        <p className={style.variantDescription}>Over 500 free workouts range from 10-85 minutes long, from beginner level to elite athlete, from HIIT to Pilates, and strength training to bodyweight.</p>
                    </div>

                    <div className={style.valueVariant}>
                        <img className={style.variantImage} src={variantThree} alt='Programs' />
                        <h2 className={style.variantTitle}>programs that work</h2>
                        <p className={style.variantDescription}>Our workout plans use our online fitness calendar to provide detailed, day-by-day plans, creating incredible, sustainable results.</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default OurValue