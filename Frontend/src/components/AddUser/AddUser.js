import React, { useState } from 'react';
import Styles from "./AddUser.module.css";

const AddUser = ({ onClose, handleSubmit, formData, setFormData }) => {
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
        <h2 className={Styles.h2}>Add User</h2>
        <form className={Styles.form} onSubmit={handleSubmitForm}>
          <label htmlFor={Styles.title} className={Styles.title}>
            FirstName:
          </label>
          <input
            type="text"
            className={Styles.inpt}
            name="firstName"
            onChange={handleInputChange}
            required
          />

          <label htmlFor={Styles.description} className={Styles.title}>
            LastName:
          </label>
          <input
          className={Styles.inpt}
            id={Styles.description}
            name="lastName"
            onChange={handleInputChange}
            required
          />
          <label htmlFor={Styles.description} className={Styles.title}>
            Email:
          </label>
          <input
          className={Styles.inpt}
            id={Styles.description}
            name="email"
            onChange={handleInputChange}
            required
          />
             <label htmlFor={Styles.description} className={Styles.title}>
            Password:
          </label>
          <input
          type='password'
          className={Styles.inpt}
            id={Styles.description}
            name="password"
            onChange={handleInputChange}
            required
          />
               <label htmlFor={Styles.description} className={Styles.title}>
            Confirm Password:
          </label>
          <input
          type='password'
          className={Styles.inpt}
            id={Styles.description}
            name="verifyPassword"
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

export default AddUser;
