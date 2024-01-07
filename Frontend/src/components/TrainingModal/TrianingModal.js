import { useState } from "react";
import style from "./TrainingModal.module.css";
import { addTraining } from "../../db/trainingData";
import { toast } from "react-hot-toast";

export const TrainingModal = (props) => {
  const { setIsModalOpen ,setTrainingImageUrl} = props;
  const [dataToSend, setDataToSend] = useState({
    name: "",
    description: "",
    image:null
  });
  const [image, setImage] = useState("");



  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setImage(value);
  }
}
  

  function updateObject(name, value) {
    setDataToSend({ ...dataToSend, [name]: value });
  }
  function handleInputChange(e) {
    updateObject(e.target.name, e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      Object.values(dataToSend).some((item) => item === "" || item === null)
    ) {
      toast.error("All fields are required");
    } else {
      try {
        addTraining(dataToSend);
        setIsModalOpen(false);
        toast.success("A New training has been added");
        props.fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={style.modalForm}>
      <form onSubmit={handleSubmit}>
        <h3>Add Training</h3>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="name"
            type="text"
            value={dataToSend.name}
            onChange={handleInputChange}
            placeholder="training Name"
          />
        </section>
        <section className={style.inputContainer}>
          <textarea
            className={style.textarea}
            name="description"
            type="text"
            placeholder="Description"
            width="200"
            height="500px"
            value={dataToSend.description}
            onChange={handleInputChange}
          />
        </section>
        <section className={style.inputImageContainer}>
          <input
            type="file"
            name="image"
            className={style.fileInput}
            onChange={handleChange}
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
