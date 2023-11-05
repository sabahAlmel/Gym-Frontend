import React, { useEffect, useState } from "react";
import PersonalTraining from "../../components/PersonalTraining/PersonalTraining";
import style from "./PersonnalTraining.module.css";
import { fetchTraining } from "../../db/trainingData";

export default function PersonnalTraining() {

  const [personnalTrainings, setPersonnalTrainings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchData = async () => {
    try {
      const data = await fetchTraining()
      if (data) {
        setPersonnalTrainings(data.data)
        setIsLoading(false)
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className={style.personalTrainingContainer}>
      <section className={style.personalTrainingHeader}>
        <h2>Personal Trainings</h2>
        <p>
          Transform your potential into power with our training services and
          redefine what your body is capable of.
        </p>
      </section>
      <section className={style.personalTrainingFlex}>

        {isLoading ? <p>Loading....</p> :
          personnalTrainings.map((item, i) => (
            <PersonalTraining
              key={i}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
      </section>
    </section>
  );
}
