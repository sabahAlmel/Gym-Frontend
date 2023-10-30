import React from "react";
import style from "./Potential.module.css";

export default function Potential(props) {
  return (
    <section className={style.potentialContainer}>
      <h2>Unlock Your Full Potential with Our Exclusive Regime Plans!</h2>
      <p>
        At FitHub, take your fitness goals seriously, and that's why we've
        meticulously crafted our Regime Plans to stand out in the world of
        fitness. We firmly believe that our regime plans offer unparalleled
        benefits that set us apart from the rest.
      </p>
      <section className={style.potentialItemWrapper}>
        <span className={style.redPotentialItem}>Tailored for You</span>
        <p className={style.textPotentialItem}>
          No two individuals are the same, and neither are their fitness goals.
          Our Regime Plans are customized to meet your unique aspirations,
          whether you're aiming for weight loss, muscle gain, endurance, or a
          balanced mind and body. Our certified trainers work closely with you
          to create a personalized fitness roadmap that considers your fitness
          level, preferences, and any specific needs.
        </p>
      </section>
      <section className={style.potentialItemWrapper}>
        <span className={style.redPotentialItem}>Certified Expertise</span>
        <p className={style.textPotentialItem}>
          Our team of certified trainers is not just passionate about fitness,
          but they are also exceptionally knowledgeable. They possess the
          expertise to design, adjust, and guide you through your regime with
          precision.
        </p>
      </section>
      <section className={style.potentialItemWrapper}>
        <span className={style.redPotentialItem}>Proven Success</span>
        <p className={style.textPotentialItem}>
          The results speak for themselves. Our clients have achieved remarkable
          success through our Regime Plans, whether it's shedding those stubborn
          pounds, sculpting their dream physique, or achieving new levels of
          strength and endurance.
        </p>
      </section>
    </section>
  );
}
