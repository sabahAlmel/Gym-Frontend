import axios from "axios";

export async function fetchOneCategory(id) {
  console.log(id);
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_PATH}categories/readOne/${id}`,
    );
    console.log("fetch One Category");
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
