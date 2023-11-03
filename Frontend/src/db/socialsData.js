import axios from "axios";

export async function fetchSocials() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_PATH}socials/read`);
    console.log('fetchSocials')
    if (data) {
      console.log(data) ;
      return data
    }
  } catch (error) {
    console.log(error);
  }
}
