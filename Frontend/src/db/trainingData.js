import axios from "axios";

export async function fetchTraining() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_PATH}training/read`);
    console.log('fetchTraining')
    if (data) {
      console.log(data) ;
      return data
    }
  } catch (error) {
    console.log(error);
  }
}
