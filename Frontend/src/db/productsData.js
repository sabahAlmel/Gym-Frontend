import axios from "axios";

export async function fetchProducts() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_PATH}products/read`);
    if (data) {
      return data
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getProductByCategory(categoryId){
  try {
    const response = await axios.get(`${process.env.REACT_APP_PATH}products/read/category/${categoryId}`)
    if(response){
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}