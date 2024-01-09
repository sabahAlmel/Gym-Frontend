import axios from "axios";

export async function fetchTraining() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_PATH}training/read`);
    // console.log('fetchTraining')
    if (data) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export const addTraining = async (trainingData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_PATH}training/add`,
      {
        name: trainingData.name,
        description: trainingData.description,
        image: trainingData.image,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (response.status === 200) {
      return response.status;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editData = async (id, data) => {
  try {
    const response = await axios.patch(
       `${process.env.REACT_APP_PATH}training/update`,
    {
      name: data.name,
      description: data.description,
      image: data.image,
      id: id,
    },
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  if (response.status === 200) {
    console.log(response.data);
    return response.status;
  }
} catch (error) {
  console.log(error);
}
};

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_PATH}training/delete`,
      {
        data: { id: id },
      }
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in deleteData:', error);
    throw error;
  }
};
