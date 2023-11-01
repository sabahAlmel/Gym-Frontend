import axios from "axios";

export async function fetchRegime() {
  try {
    const data = await axios.get(`http://localhost:5000/gymPlans/read`);
    console.log('fetchRegime')
    if (data) {
      console.log(data) ;
      return data
    }
  } catch (error) {
    console.log(error);
  }
}
