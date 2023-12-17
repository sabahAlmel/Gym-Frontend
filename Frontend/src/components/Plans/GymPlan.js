// GymPlan.js - File where the GymPlan component is defined

import React from "react";
import style from "./GymPlan.module.css";
import CheckIcon from "../../assets/images/HomepageImages/checkIcon.png";

const GymPlan = ({ title, price, plans }) => {
  return (
    <>
      <div className={style.gymPlanCard}>
        <h3 className={style.gymPlanType}>{title}</h3>
        <p className={style.membership}>Membership</p>
        <h3 className={style.gymPlanPrice}>
          $<span className={style.price}>{price}</span> Per Month
        </h3>
        <div className={style.check}>
          {plans.map((feature, i) => (
            <div className={style.descriptionArray} key={i}>
              <img className={style.checkIcon} src={CheckIcon} alt="check" />
              <p className={style.descriptionText}>{feature.name}</p>
            </div>
          ))}
        </div>
        <div className={style.buttonSubscribe}>
          <button className={style.gymPlanButton}>Subscribe</button>
        </div>
      </div>
    </>
  );
};
export default GymPlan;
