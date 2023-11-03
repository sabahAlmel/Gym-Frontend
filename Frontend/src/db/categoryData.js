import axios from "axios";

export async function fetchOneCategory(id) {
    try {
        const data = await axios.get(`${process.env.REACT_APP_PATH}categories/readOne`,
        {
            id
        });
        console.log('fetch One Category')
        console.log(id)
    if (data) {
    //   console.log(data.name) ;
      return data.name
    }
  } catch (error) {
    console.log(error);
  }
}
