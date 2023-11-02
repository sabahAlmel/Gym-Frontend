import axios from "axios";

export async function fetchProducts() {
  try {
    const data = await axios.get(`localhost:5000/products/read`);
    console.log('fetchProducts')
    if (data) {
      console.log(data) ;
      return data
    }
  } catch (error) {
    console.log(error);
  }
}
