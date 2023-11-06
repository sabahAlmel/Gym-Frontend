import React, { useEffect, useState } from "react";
import styles from "./regimeplan.module.css";
import Regimeplancomponent from "../../components/regimeplan/regimeplansection";
import { fetchRegime } from "../../db/regimeData";

const RegimePlan = (props) => {
  const [regimePlan, setRegimePlan] = useState([]);
  const isOnDashboard = false
  async function fetchData() {
    try {
      const response = await fetchRegime();
      console.log('Fetched data:', response.data.data)
      if(response){
        setRegimePlan(response.data.data)
      }
      }
     catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={styles.RegimePlanContainer}>
      <section className={styles.RegimePlanHeader}>
        <h2>
          {" "}
          {isOnDashboard
            ? "Regime Plans"
            : "Every Meals Counts: A Complete Body-Type Nutrition Guide!"}
        </h2>
      </section>
      <section className={styles.RegimeplanFlex}>
        {regimePlan.map((item, key) => (
          <Regimeplancomponent
            key={key}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </section>
    </section>
  );
};

export default RegimePlan;
