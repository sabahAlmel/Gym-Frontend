import React, { useEffect, useState } from "react";
import style from "./PersonnalTraining.module.css";
import axios from 'axios'
import { fetchTraining } from "../../db/trainingData";

const PersonnalTrainingDash = () => {

  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);

  const resetFormFields = () => {
    setNewName("");
    setNewDescription("");
    setNewImageFile(null);
    setSelectedItemId(null);
  };

  const handleCreate = async () => {
    const formData = new FormData()
    formData.append('name', newName)
    formData.append('description', newDescription)
    if (newImageFile)
      formData.append('image', newImageFile)
    try {
      const response = await axios.post(`${process.env.REACT_APP_PATH}training/add`, formData, {
        headers: { 'Content-type': 'multipart/formData' }
      })
      if (response.data.message === 'Personnal Training added successfully') {
        setItems((prevItems) => [...prevItems, response.data.data])
        setNewName('')
        setNewDescription('')
        setNewImageFile(null)
      }
      else
        console.error(response.data.message)
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_PATH}training/delete`, {
        data: { _id: id }
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async (item) => {
    setSelectedItemId(item._id)
    setNewName(item.name)
    setNewDescription(item.description)
    setNewImageFile(item.image)
  }

  const handleUpdate = async () => {
    console.log('before', selectedItemId)
    if (selectedItemId) {
      console.log('after', newImageFile)
      const dataToSend = { _id: selectedItemId, name: newName, description: newDescription, image: newImageFile }
      console.log(dataToSend)
      console.log(newImageFile)
      const response = await axios.patch(`${process.env.REACT_APP_PATH}training/update`, { image: newImageFile, ...dataToSend }, {
        headers: { 'Content-type': 'multipart: form-data' }
      })
        .then((response) => {
          if (response.data.message === 'Updated successfully') {
            setItems((prevItems) => prevItems.map((item) => item._id === selectedItemId ? { ...item, name: newName, description: newDescription, image: response.data.data.image }
              : item))
            setNewName("")
            setNewDescription("")
            setNewImageFile(null)
            setSelectedItemId(null)
          }
          else
            console.error(response.data.message)
        })
        .catch((error) => {
          console.error(error)
        })
    }
    else
      console.error('No such ID to be updated')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTraining()
        if (response)
          setItems(response.data.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <section className={style.personnalTrainingContainer}>
      <section className={style.personalTrainingHeader}>
        <h2>Personal Trainings</h2>
      </section>
      <section className={style.personalTrainingFlex}>
        <div className={style.addItem}>
          <button className={style.buttonAdd} onClick={handleCreate}>+Add</button>
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
              items.map((item, i) => (
                <tr key={i}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.image}</td>
                  <td className={style.buttonSection}>
                    <button className={style.buttonEdit} onClick={ () => handleEdit(item) }>Edit</button>
                    <button className={style.buttonDelete} onClick={ () => handleDelete(item._id) }>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {selectedItemId ? (
        <div className={style.editForm}>
          <input
            type="text"
            placeholder="New Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input type="file" onChange={(e) => setNewImageFile(e.target.files[0])} />
          <button className={`${style.button} ${style.add}`} onClick={handleUpdate}>Update</button>
          <button className={`${style.button} ${style.add}`} onClick={resetFormFields}>Cancel</button>
        </div>
      ) : (
        <div className={style.editForm}>
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setNewImageFile(e.target.files[0])} />
          <button className={`${style.button} ${style.add}`} onClick={handleCreate}>Add</button>
        </div>
      )}
      </section>
    </section>
  );

}


export default PersonnalTrainingDash