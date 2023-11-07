import axios from "axios";

export async function fetchTraining() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_PATH}training/read`);
    console.log('fetchTraining')
    if (data) {
      console.log(data);
      return data
    }
  } catch (error) {
    console.log(error);
  }
}

export const addTraining = async (createData) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_PATH}training/add`, createData)
    if (data)
      return data
  }
  catch (error) {
    console.log(error)
  }
}

export const editData = async (id, updateData) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_PATH}training/update/${id}`, updateData)
    if (data)
      return data
  }
  catch (error) {
    console.log(error)
  }
}

export const deleteData = async (id) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_PATH}training/delete/${i}`)
    if (data)
      return data
  }
  catch (error) {
    console.log(error)
  }
}
