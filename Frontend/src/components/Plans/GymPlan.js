// GymPlan.js - File where the GymPlan component is defined

import React, { useContext } from "react";
import style from "./GymPlan.module.css";
import CheckIcon from "../../assets/images/HomepageImages/checkIcon.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { UserContext } from "../../userContext/userContext";

const GymPlan = ({ title, price, plans }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className={style.gymPlanCard}>
        <h3 className={style.gymPlanType}>{title}</h3>
        <p className={style.membership}>Membership</p>
        <h3 className={style.gymPlanPrice}>
          $<span className={style.price}>{price}</span> Per Month
        </h3>
        <div className={style.check}>
          {plans.split(", ").map((feature, i) => (
            <div className={style.descriptionArray} key={i}>
              <img className={style.checkIcon} src={CheckIcon} alt="check" />
              <p className={style.descriptionText}>{feature}</p>
            </div>
          ))}
        </div>
        <div className={style.buttonSubscribe}>
          {user ? (
            <button
              className={style.gymPlanButton}
              onClick={() => toast.success("Done")}
            >
              Subscribe
            </button>
          ) : (
            <Link to="/login">
              <button className={style.gymPlanButton}>Subscribe</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default GymPlan;
