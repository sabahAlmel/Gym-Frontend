import axios from "axios";

export async function fetchTraining() {
  try {
    const data = await axios.get(`http://localhost:5000/training/read`);
    console.log('fetchTraining')
    if (data) {
      console.log(data) ;
      return data
    }
  } catch (error) {
    console.log(error);
  }
}
