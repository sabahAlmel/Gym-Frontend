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



export async function addRegimeplan(RegimeData) {
  console.log(RegimeData)
  try {
    const response = await axios.post(`${process.env.REACT_APP_PATH}regime/add`,{    
      ...RegimeData
    },
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  if (response.status === 200) {
    return response.status;
  }
} catch (error) {
  console.log(error);
}
}
