import React, { useEffect, useState } from "react";
import style from "./PersonnalTraining.module.css";
import PersonalTraining from "../../components/PersonalTraining/PersonalTraining";
import { fetchTraining } from "../../db/trainingData";

const PersonnalTrainingDash = () => {

  const [personnalTrainings, setPersonnalTrainings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const addData = async () => {

  }

  const deleteData = async () => {

  }

  const editData = async () => {

  }

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
    <section className={style.personnalTrainingContainer}>
      <section className={style.personalTrainingHeader}>
        <h2>Personal Trainings</h2>
      </section>
      <section className={style.personalTrainingFlex}>
        <div className={style.addItem}>
          <button className={style.buttonAdd}>+Add</button>
        </div>
        <table className={style.personnalTrainingTable}>
          <thead className={style.tableHeader}>
            <tr>
              <th className={style.tableHeaderItem}>ID</th>
              <th className={style.tableHeaderItem}>Name</th>
              <th className={style.tableHeaderItem}>Description</th>
              <th className={style.tableHeaderItem}>Image</th>
              <th className={style.tableHeaderItem}>Operations</th>
            </tr>
          </thead>
          <tbody className={style.tableContent}>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>lorem</td>
              <td>1</td>
              <td className={style.buttonSection}>
                <button className={style.buttonEdit}>Edit</button>
                <button className={style.buttonDelete}>Delete</button>
              </td>
            </tr>
            {
              personnalTrainings.map((item, i) => (
                <tr key={i}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.image}</td>
                  <td>
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div disabled>
          <label for='trainingName'>Name: <input type='text' name='trainingName' id='trainingName' /></label>
          <label for='trainingName'>Description: <input type='text' name='trainingName' id='trainingName' /></label>
          <label for='trainingName'>image: <input type='file' name='trainingName' id='trainingName' /></label>
        </div>
      </section>
    </section>
  );
}


export default PersonnalTrainingDash