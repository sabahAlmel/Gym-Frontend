import React from "react"
import styles from '../../components/OurStory/OurStory.module.css'
import image from '../../assets/images/AboutUsImages/3 1.png'

const OurStory=()=>{
    return (
      <>
        <div className={styles.container}>
          <h3 className={styles.heading}>Our Story</h3>
          <p className={styles.content}>
            At Fithub, we believe that fitness and well being are the cornerstones of a full and vibrant life.
             Established in 2023, we began our journey as a family-owned business dedicated to providing exceptional gym equipment
              at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment supplier, we aspired to lead 
              the industry.
          </p>
          <button className={styles.seeMoreButton}>See More</button>
    </div>
          <div className={styles.secondContainer}>
        <div className={styles.textContainer}>
          <h1>Created to help you live a better, happier, healthier life.</h1>
          <p>
            We believe fitness should be accessible to everyone, everywhere, regardless of income level or access to a gym. That's why we offer hundreds of free, full-length workout videos, the most affordable and effective workout programs on the web, meal plans, and helpful health, nutrition and fitness information.
          </p>
        </div>
          <img src={image} alt="ourstory" className={styles.image} />
      </div>
      </>
        
      );
    };
export default OurStory;

