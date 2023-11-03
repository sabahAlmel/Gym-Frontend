import React from "react";
import style from "./PersonalTraining.module.css";

function PersonalTraining(props) {
  const { name, description, image } = props;
  return (
    <section
      className={style.trainingComponentWrapper}
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className={style.trainingComponentName}>{name}</span>
      <p className={style.trainingComponentDescription}>{description}</p>
    </section>
  );
}

export default PersonalTraining;



