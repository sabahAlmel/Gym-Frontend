import axios from "axios";

export async function fetchSignUp(formData) {
  try {
    const data = await axios.post(`${process.env.REACT_APP_PATH}users/add`, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      verifyPassword: formData.verifyPassword,
    });
    if (data && data.data.token) {
      console.log(data);
      localStorage.setItem("token", `Bearer ${data.data.token}`);
      return data.data;
    }
  } catch (error) {
    console.log(error.message);
  }
}
export async function fetchUser() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_PATH}users/readOne`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    if (data) {
      console.log(data);
      return data.data.user;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function fetchLogin(formData) {
  try {
    const data = await axios.post(`${process.env.REACT_APP_PATH}signin`, {
      email: formData.email,
      password: formData.password,
    });
    if (data && data.data.token) {
      console.log(data);
      localStorage.setItem("token", `Bearer ${data.data.token}`);
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function fetchGoogle(result) {
  try {
    const data = await axios.post(`${process.env.REACT_APP_PATH}google`, {
      firstName: result.user.displayName.split(" ")[0],
      lastName: result.user.displayName.split(" ").slice(1).join(" "),
      email: result.user.email,
      image: result.user.photoURL,
    });
    if (data && data.data.token) {
      console.log(data);
      localStorage.setItem("token", `Bearer ${data.data.token}`);
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
}
