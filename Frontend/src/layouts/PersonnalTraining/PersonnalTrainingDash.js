import React, { useEffect, useState } from "react";
import style from "./PersonnalTraining.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        setPersonnalTrainings(data.data.data)
        console.log(data.data.data)
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
    <section className='container'>
      <section className={style.personalTrainingHeader}>
        <h2>Personal Trainings</h2>
      </section>
      <section className={style.personalTrainingFlex}>
        <table className="table table-light text-center">
          <thead className="table-dark">
            <tr>
              <th className="fw-bold">No.</th>
              <th className="fw-bold">Name</th>
              <th className="fw-bold">Description</th>
              <th className="fw-bold">Image</th>
              <th className="fw-bold">Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              personnalTrainings.map((item, i) => (
                //   <PersonalTraining
                //     key={i}
                //     name={item.name}
                //     description={item.description}
                //     image={item.image}
                //   />
                <tr key={item._id}>
                  <td>{i + 1}</td>
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
      </section>
    </section>
  );
}


export default PersonnalTrainingDash