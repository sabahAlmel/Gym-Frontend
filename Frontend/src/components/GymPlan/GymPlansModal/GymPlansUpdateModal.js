import { useState, useEffect } from "react";
import style from "./GymPlansModal.module.css";
import { updatePlan } from "../../../db/gymPlansData";
import { toast } from "react-hot-toast";

export const GymPlansUpdateModal = (props) => {
  const { setIsModalOpen, initialData, fetchData } = props;
  const [updatedData, setUpdatedData] = useState({
    title: initialData.title,
    price: initialData.price,
    feature: initialData.feature,
  });

  useEffect(() => {
    // Update the form data when initialData changes
    setUpdatedData({
      title: initialData.title,
      price: initialData.price,
      feature: initialData.feature,
    });
  }, [initialData]);

  function updateObject(name, value) {
    setUpdatedData({ ...updatedData, [name]: value });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    updateObject(name, value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      Object.values(updatedData).some((item) => item === "" || item === null)
    ) {
      toast.error("All fields are required");
    } else {
      try {
        toast("Loading...");
        await updatePlan(initialData.id, updatedData);
        setIsModalOpen(false);
        toast.success("Plan has been updated");
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={style.modalForm}>
      <form onSubmit={handleSubmit}>
        <h3>Update Plan</h3>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="title"
            type="text"
            value={updatedData.title}
            onChange={handleInputChange}
            placeholder="Plan Title"
          />
        </section>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="price"
            type="number"
            value={updatedData.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
        </section>

        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="feature"
            type="text"
            value={updatedData.feature}
            onChange={handleInputChange}
            placeholder="Feature"
          />
        </section>
        <section className={style.btnContainer}>
          <button
            type="button"
            className={style.cancelBtn}
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button type="submit" className={style.submitBtn}>
            Submit
          </button>
        </section>
      </form>
    </section>
  );
};
