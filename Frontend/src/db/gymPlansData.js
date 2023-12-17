import axios from "axios";

export async function fetchGymPlans() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_PATH}gymPlans/read`);
    console.log("fetch");
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function deleteGymPlan(planId) {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_PATH}gymPlans/delete`,
      {
        data: { id: planId },
      }
    );
    if (response.status === 200) {
      return response.status;
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
}
export async function addPlan(planData) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_PATH}gymPlans/add`,
      {
        title: planData.title,
        price: planData.price,
        feature: planData.feature,
      }
    );
    if (response.status === 200) {
      return response.status;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updatePlan(planId, planData) {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_PATH}gymPlans/update`,
      {
        title: planData.title,
        price: planData.price,
        feature: planData.feature,
        id: planId,
      }
    );
    if (response.status === 200) {
      console.log(response.data);
      return response.status;
    }
  } catch (error) {
    console.log(error);
  }
}
