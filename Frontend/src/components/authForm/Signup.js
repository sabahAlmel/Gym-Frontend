import { useContext, useState } from "react";
import styles from "./Signup.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchSignUp } from "../../db/authData";
import toast from "react-hot-toast";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { fetchGoogle } from "../../db/authData";
import google from "../../assets/icons/Google.svg";
import icon from "../../assets/icons/logIn.png";

import { UserContext } from "../../userContext/userContext";
import { Helmet } from "react-helmet-async";

function Signup() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    verifyPassword: "",
  });
  const handleGoogleButton = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);

    console.log(result);
    try {
      var loadId = toast.loading("loadingg..");
      let data = await fetchGoogle(result);
      console.log(data);
      if (data.token && data.newUser) {
        toast.success(`Hello ${data.newUser.email.split("@")[0]}`, {
          id: loadId,
        });
        setUser(data.newUser);
        return navigate("/", { replace: true });
      } else toast.error("can't continue with google", { id: loadId });
    } catch (error) {
      console.log(error);
      toast.error("can't continue with google", { id: loadId });
    }
  };
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ email: "", password: "", verifyPassword: "" });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(formData).some((item) => item === "" || item === null)) {
      toast.error("All fields are required");
    } else {
      try {
        var loadId = toast.loading("loadingg..");
        let log = await fetchSignUp(formData);
        if (log.token && log.newUser) {
          toast.success(`Hello ${log.newUser.email.split("@")[0]}`, {
            id: loadId,
          });
          setUser(log.newUser);
          return navigate("/", { replace: true });
        } else {
          if (log.error.includes("Invalid email")) {
            setErrors({ ...errors, email: "Invalid email" });
            toast.error("Error", { id: loadId });
          } else if (log.error.includes("email")) {
            setErrors({ ...errors, email: log.error });
            toast.error("Error", { id: loadId });
          } else if (log.error === "Passwords do not match") {
            setErrors({ ...errors, verifyPassword: log.error });
            toast.error("Error", { id: loadId });
          } else if (log.error.includes("password should start")) {
            setErrors({ ...errors, password: "Invalid password" });
            toast.error("Error", { id: loadId });
          } else {
            toast.error("Can't sign up", { id: loadId });
          }
        }
      } catch (error) {
        console.error(error);
        toast.error("Can't sign up", { id: loadId });
      }
    }
  }
  return (
    <div className={styles.container}>
      <Helmet>
        <title> Signup</title>

        <link rel="shortcut icon" href={icon} type="image/x-icon" />
      </Helmet>
      <div className={styles.container1}>
        <h1 className={styles.heading}>Sign Up</h1>
      </div>
      <div className={styles.container2}>
        <form method="post">
          <div className={styles["form-group"]}>
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="First_Name"
                  name="firstName"
                  placeholder="FirstName"
                  onChange={handleChange}
                />
                <p></p>
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="Last_Name"
                  name="lastName"
                  placeholder="LastName"
                  onChange={handleChange}
                />
                <p></p>
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                {errors.email ? (
                  <p className={styles.error}>{errors.email}</p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                {errors.password ? (
                  <p className={styles.error}>{errors.password}</p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="password"
                  id="verifyPassword"
                  name="verifyPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                />
                {errors.verifyPassword ? (
                  <p className={styles.error}>{errors.verifyPassword}</p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["label-input-group"]}>
              <button
                type="submit"
                className={styles.btn}
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
            <div className={styles.or}>OR</div>
            <div className={styles.google} onClick={handleGoogleButton}>
              <img src={google} />
              <p>Continue with Google</p>
            </div>
            <div className={styles.ref}>
              <p>Already have an account?</p>
              <NavLink to="/login" className={styles.log}>
                Log In
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
