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
export async function deleteProductById(productId){
  try {
    const response = await axios.delete(`${process.env.REACT_APP_PATH}products/delete`, {
      data : {id: productId}
    },
    {})
    if(response.status === 200){
      return response.status
    }
  } catch (error) {
    console.log(error)
  }
}
export async function addProduct(productData){
  try{
    const response = await axios.post(`${process.env.REACT_APP_PATH}products/add`, {
      prodName: productData.prodName,
      prodPrice: productData.prodPrice,
      prodDescription: productData.prodDescription,
      prodImage: productData.prodImage,
      categoryName: productData.categoryName
    },{
      headers: {'Content-Type' : 'multipart/form-data'}
    })
    if (response.status === 200){
      return response.status
    }
  }catch(error){
    console.log(error)
  }
}