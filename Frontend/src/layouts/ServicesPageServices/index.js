import React from "react";
import stretchingImg from "../../assets/images/ServicesImages/Stretching.png";
import coreImg from "../../assets/images/ServicesImages/Core.png";
import boxingImg from "../../assets/images/ServicesImages/Boxing.png";
import PersonalTraining from "../../components/PersonalTraining/PersonalTraining";
import style from "./ServicesPageServices.module.css";

export default function ServicesPageServices() {
  const fakeData = [
    {
      name: "Core",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed, libero eos ipsa qui itaque possimus praesentium reiciendis, excepturi exercitationem asperiores aliquam nostrum voluptate pariatur consectetur architecto. Molestias, et maiores!",
      image: coreImg,
    },
    {
      name: "Boxing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed, libero eos ipsa qui itaque possimus praesentium reiciendis, excepturi exercitationem asperiores aliquam nostrum voluptate pariatur consectetur architecto. Molestias, et maiores!",
      image: boxingImg,
    },
    {
      name: "Stretching",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed, libero eos ipsa qui itaque possimus praesentium reiciendis, excepturi exercitationem asperiores aliquam nostrum voluptate pariatur consectetur architecto. Molestias, et maiores!",
      image: stretchingImg,
    },
  ];
  return (
    <section className={style.personalTrainingContainer}>
        <section className={style.personalTrainingHeader}>
      <h2>Services</h2>
      <p>
        Transform your potential into power with our training services and
        redefine what your body is capable of.
      </p>
        </section>
      <section className={style.personalTrainingFlex}>

      {fakeData.map((item, key) => (
          <PersonalTraining
          key={key}
          name={item.name}
          description={item.description}
          image={item.image}
          />
          ))}
          </section>
    </section>
  );
}
