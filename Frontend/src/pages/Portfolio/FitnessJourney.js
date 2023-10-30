import React from "react";
import FitnessJourneyCss from "./FitnessJourney.module.css"
import image from './images/portfolio-personal-training 1.png'

const FitnessJourneySection = () => {
    return(
        <div className={FitnessJourneyCss.fitnessSection}>
            <h2 className={FitnessJourneyCss.h2}>Elevate Your Fitness Journey with Personal Training!</h2>
            <div className={FitnessJourneyCss.content}>
                <p className={FitnessJourneyCss.p}>Personal training is the best way to achieve your fitness goals, safely and effectively. Our personal trainers are experts in their field, and they will work with you to create a personalized training plan that is tailored to your specific needs and goals, and they will keep track of your progress to ensure reaching your goal</p>
                <img src={image} alt="personal-training" className={FitnessJourneyCss.image}>
                </img>
            </div>
        </div>
    )     
}
export default FitnessJourneySection;