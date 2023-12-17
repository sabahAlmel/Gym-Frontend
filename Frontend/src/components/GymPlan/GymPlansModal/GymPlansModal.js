import { useState } from "react";
import style from "./GymPlansModal.module.css";
import { addPlan } from "../../../db/gymPlansData";
import { toast } from "react-hot-toast";

export const GymPlansModal = (props) => {
  const { setIsModalOpen } = props;
  const [dataToSend, setDataToSend] = useState({
    title: "",
    price: "",
    feature: [],
  });
  function updateObject(name, value) {
    setDataToSend({ ...dataToSend, [name]: value });
  }
  function handleInputChange(e) {
    const { name, value } = e.target;
    updateObject(name, name === "feature" ? value.split(", ") : value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      Object.values(dataToSend).some((item) => item === "" || item === null)
    ) {
      toast.error("All fields are required");
    } else {
      try {
        addPlan(dataToSend);
        setIsModalOpen(false);
        toast.success("A New Plan has been added");
        props.fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={style.modalForm}>
      <form onSubmit={handleSubmit}>
        <h3>Add Plan</h3>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="title"
            type="text"
            value={dataToSend.title}
            onChange={handleInputChange}
            placeholder="Plan Title"
          />
        </section>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="price"
            type="number"
            value={dataToSend.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
        </section>

        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="feature"
            type="text"
            value={dataToSend.feature}
            onChange={handleInputChange}
            placeholder="feature"
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
          <button
            type="submit"
            className={style.submitBtn}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </section>
      </form>
    </section>
  );
};
