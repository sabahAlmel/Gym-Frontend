import React from "react";
import style from "./PersonalTraining.module.css";

function PersonalTraining(props) {
  const { name, description, image } = props;
  const imageSrc = `${process.env.REACT_APP_PATH}${image}`
  return (
    <section
      className={style.trainingComponentWrapper}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <span className={style.trainingComponentName}>{name}</span>
      <p className={style.trainingComponentDescription}>{description}</p>
    </section>
  );
}

export default PersonalTraining;