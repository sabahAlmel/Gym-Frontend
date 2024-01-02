import React, { useState, useEffect } from 'react';
import Styles from "./UpdateRegime.module.css";

const UpdateRegime = ({ onUpdate,onClose, onCancel, regimeData = {}, handleUpdates }) => {
  const [formData, setFormData] = useState({
    title: regimeData.title || "",
    description: regimeData.description || "",
    image: null, // Assuming image is initially null; adjust as needed
  });

  useEffect(() => {
    // This effect runs only once to set up the initial state
    setFormData({
      title: regimeData.title || "",
      description: regimeData.description || "",
      image: null, // Assuming image is initially null; adjust as needed
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any actions with the updated data (e.g., send it to the server)
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
            value={formData.title}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="description" className={Styles.title}>Description:</label>
          <textarea
            id="description"
            name="description"
            className={Styles.inpt}
            value={formData.description}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="image" className={Styles.title}>Image:</label>
          <input
          className={Styles.file}
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />

          <div style={{ gap: "0rem", display: "flex", flexDirection: "column" }}>
            <button type="submit" className={Styles.submitButton}>Update</button>
            <button type="button" onClick={handleCancel} className={Styles.cancelButton}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateRegime;
