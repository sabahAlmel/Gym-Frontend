import React from "react"
import styles from '../../components/OurStory/OurStory.module.css'

const OurStory=()=>{
    return (
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
        
      );
    };
export default OurStory;

