import { useContext, useState } from "react";
import styles from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchLogin } from "../../db/authData";
import toast from "react-hot-toast";
import google from "../../assets/icons/Google.svg";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { fetchGoogle } from "../../db/authData";
import { UserContext } from "../../userContext/userContext";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const handleGoogleButton = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);

    console.log(result);
    try {
      toast("loading...");
      let data = await fetchGoogle(result);
      if (data.token && data.newUser) {
        toast.success("Helloo!!");
        setUser(data.newUser);
        return navigate("/", { replace: true });
      } else toast.error("can't continue with google");
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(formData).some((item) => item === "" || item === null)) {
      toast.error("All fields are required");
    } else {
      try {
        toast("loadingg..");
        let log = await fetchLogin(formData);
        if (log.token && log.newUser) {
          toast.success("Helloo!!");
          setUser(log.newUser);
          return navigate("/", { replace: true });
        } else toast.error("can't login");
      } catch (error) {
        console.error("Error log in:", error.message);
        toast.error("can't login");
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h1 className={styles.heading}>Log In</h1>
      </div>
      <div className={styles.container2}>
        <form method="post">
          <div className={styles["form-group"]}>
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
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
                Submit
              </button>
            </div>
            <div className={styles.or}>OR</div>
            <div className={styles.google} >
              <img src={google} />
              <p>Continue with Google</p>
            </div>
            <div className={styles.ref}>
              <p>Don't have an account?</p>
              <NavLink to="/signup" className={styles.log}>
                Sign Up
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
