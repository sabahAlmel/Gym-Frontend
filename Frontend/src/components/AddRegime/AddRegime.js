import React, { useState } from 'react';
import Styles from "./AddRegime.module.css";

const AddRegime = ({ onClose, handleSubmit, formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('Submit button clicked!');
    handleSubmit();
    onClose()
  };
  
  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      <div className={Styles.overlay}></div>
      <div className={Styles.container}>
        <h2 className={Styles.h2}>Add Plan</h2>
        <form className={Styles.form} onSubmit={handleSubmitForm}>
          <label htmlFor={Styles.title} className={Styles.title}>
            Title:
          </label>
          <input
            type="text"
            className={Styles.inpt}
            name="name"
            onChange={handleInputChange}
            required
          />

          <label htmlFor={Styles.description} className={Styles.title}>
            Description:
          </label>
          <textarea
            style={{
              backgroundColor: "black",
              borderRadius: "16px",
              color: "white",
              border: "none",
            }}
            id={Styles.description}
            name="description"
            onChange={handleInputChange}
            required
          />

          <label htmlFor={Styles.image} className={Styles.title}>
            Image:
          </label>
          <input
            className={Styles.file}
            type="file"
            id={Styles.image}
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />

          <div style={{ gap: "0rem", display: "flex", flexDirection: "column" }}>
            <button type="submit" className={Styles.submitButton}>
              Submit
            </button>
            <button type="button" onClick={handleCancel} className={Styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRegime;
