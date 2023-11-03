import axios from "axios";

export async function fetchRegime() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_PATH}regime/read`);
    console.log('fetchRegime')
    if (data) {
      console.log(data) ;
      return data
    }
  } catch (error) {
    console.log(error);
  }
}
