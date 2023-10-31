import React from "react";
import style from "./RegimeServices.module.css";
import image1 from "../../assets/images/ServicesImages/Rectangle 1.png";
import image2 from "../../assets/images/ServicesImages/Rectangle 1-1.png";
import image3 from "../../assets/images/ServicesImages/Rectangle 1-2.png";

const RegimeServices = () => {
  return (
    <div className={style.container}>
      <h3 className={style.topic}>
        Every Meals Counts: A Complete Body-Type Nutrition Guide!
      </h3>
      <div className={style.content}>
        <div className={style.part}>
          <img src={image1} alt="food" className={style.img}></img>
          <h4 className={style.title}>Expert Guidance</h4>
          <p className={style.text}>
            You'll receive one-on-one guidance from certified trainers who will
            create and adjust your plan to maximize your results
          </p>
        </div>
        <div className={style.part}>
          <img src={image2} alt="soup" className={style.img}></img>
          <h4 className={style.title}>Ongoing Support</h4>
          <p className={style.text}>
            Your journey is ongoing, and so is our support. We're here to help
            you overcome plateaus and achieve your goals.
          </p>
        </div>
        <div className={style.part}>
          <img src={image3} alt="fruits" className={style.img}></img>
          <h4 className={style.title}>Real Results</h4>
          <p className={style.text}>
            Our clients have achieved remarkable results, and you can see their
            transformations in our success stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegimeServices;
