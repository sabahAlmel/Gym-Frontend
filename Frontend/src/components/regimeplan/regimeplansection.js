import React from "react";
import style from "./regimesection.module.css";

function Regimeplancomponent(props) {
  const { name, description, image } = props;
  return (
    <section className={style.regimeplanComponentWrapper}>
      <div className={style.regimeplanImageWrapper}>
        <img src={image}  alt="img" className={style.regimeplanImage} />
      </div>
      <div className={style.regimeplanContent}>
        <h3 className={style.regimeplanComponentName}>{name}</h3>
        <p className={style.regimeplanComponentDescription}>{description}</p>
      </div>
    </section>
  );
}

export default Regimeplancomponent;



