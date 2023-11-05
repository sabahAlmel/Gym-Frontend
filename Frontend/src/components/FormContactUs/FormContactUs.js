import React, { useState } from "react";
import styles from "./FormContactUs.module.css";
import emailjs from "emailjs-com";

const FormContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const { firstName, lastName, email, phoneNumber, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i5x4w2r",
        "template_ebafout",
        e.target,
        "hL-eGHsw3g7UccNP5"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message. Please try again later.");
        }
      );
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h1 className={styles.heading}>DON'T WAIT A DAY LONGER!</h1>
        <p className={styles.content}>
          If you are serious about becoming confident in your own skin,
          overcoming your insecurities and achieving your dream body, then get
          in touch today. There are no tied-in contracts or upfront commitments,
          so sign-up now. We cannot wait to support your journey - to becoming
          the best version of you.
        </p>
      </div>
      <div className={styles.container2}>
        <form onSubmit={sendEmail} action="#" method="post">
          <div className={styles["form-group"]}>
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <label htmlFor="First_Name">First Name</label>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="First_Name"
                  name="firstName"
                  placeholder="Enter your First name"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles["label-input-group"]}>
                <label htmlFor="Last_Name">Last Name</label>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="Last_Name"
                  name="lastName"
                  placeholder="Enter your Last name"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <label htmlFor="Email">Email</label>
                <input
                  className={styles.formInputs}
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles["label-input-group"]}>
                <label htmlFor="Phone_number">Phone Number</label>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="Phone_number"
                  name="phoneNumber"
                  placeholder="Enter your Phone Number"
                  value={phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["label-input-group"]}>
              <label htmlFor="Message">Message</label>
              <textarea
                className={styles.formInputs}
                id="Message"
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={handleChange}
              />
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContactUs;
