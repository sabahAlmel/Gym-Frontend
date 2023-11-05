import axios from "axios";

export async function fetchOneCategory(id) {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_PATH}categories/readOne/${id}`,
    );
    if (data) {
      // console.log(data)
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
