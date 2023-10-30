import React from "react";
import style from './PortfolioEquipment.module.css'
import equipment from '../../assets/images/PortfolioImages/portfolio-gym-tools.png'

function GymEquipmentSection() {
  return (
    <section className={style.gymEquipmentSection}>
      <h2>Experience The Finest Gym Equipment!</h2>
      <section className={style.gymEquipmentFlex}>
        
      <p>
        At FitHub, we take pride in offering our members access to the absolute
        best gym equipment available. We understand that the quality of your
        workout hinges on the tools you use. Here's why our gym boasts the
        finest equipment, ensuring you get the most out of your fitness routine
      </p>
      <img src={equipment} alt="image displaying different gym equipments" />
      </section>
    </section>
  );
}

export default GymEquipmentSection;
