import React, { useState, useEffect } from 'react';
import Styles from "./UpdateRegime.module.css";

const UpdateRegime = ({ item,setItem,onUpdate,onClose, onCancel, regimeData = {}, handleUpdates }) => {
  const [formData, setFormData] = useState({
    title: item.title || "",
    description: item.description || "",
    image: item.image, 
  });
  console.log(formData)
  



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleImageChange = (e) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     image: e.target.files[0],
  //   }));
  // };
  const handleImageChange=(e)=>{
    const file= e.target.file[0];
    if(file){
      setFormData({
        ...formData,
        image:file
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    
    onUpdate(formData);
  };

  const handleCancel=()=>{
    onClose()
  }

  return (
    <>
      <div className={Styles.overlay} onClick={onCancel}></div>
      <div className={Styles.container}>
        <h2 className={Styles.h2}>Edit Plan</h2>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <label htmlFor="title" className={Styles.title}>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className={Styles.inpt}
            defaultValue={formData.title}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="description" className={Styles.title}>Description:</label>
          <textarea
            id="description"
            name="description"
            className={Styles.inpt}
            defaultValue={formData.description}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="image" className={Styles.title}>Image:</label>
          <input
          className={Styles.file}
            type="file"
            id="image"
            name="image"
            defaultValue={formData.image}
            accept="image/*"
            onChange={handleImageChange}
          />

          <div style={{ gap: "0rem", display: "flex", flexDirection: "column" }}>
            <button type="submit" className={Styles.submitButton} onClick={handleUpdates}>Update</button>
            <button type="button" onClick={handleCancel} className={Styles.cancelButton}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateRegime;
