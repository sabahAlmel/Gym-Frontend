import { useState, useEffect } from "react";
import style from "./TrainingModal.module.css";
import { addTraining, editData } from "../../db/trainingData";
import { toast } from "react-hot-toast";

export const TrainigEditModal = (props) => {
  const { setIsModalOpen, initialData, fetchData } = props;
  const [dataToSend, setDataToSend] = useState({
    name: initialData.name,
    description: initialData.description,
    image: null,
  });

  useEffect(() => {
    setDataToSend({
        name: initialData.name,
        description: initialData.description,
        image: null,
    });
  }, [initialData]);

  function updateObject(name, value) {
    setDataToSend({ ...dataToSend, [name]: value });
  }

  function handleInputChange(e) {
    updateObject(e.target.name, e.target.value);
  }


  async function handleSubmit(e) {
    e.preventDefault();
    if (
      Object.values(dataToSend).some((item) => item === "" || item === null)
    ) {
      toast.error("All fields are required");
    } else {
      try {
        if (initialData.id) {
          toast("Loading...");
          await editData(initialData.id, dataToSend);
          toast.success("Training Updated Successfully");
        } else {
          await addTraining(dataToSend);
          toast.success("A New Training has been added");
        }

        setIsModalOpen(false);
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={style.modalForm}>
      <form onSubmit={handleSubmit}>
        <h3>{initialData.id ? "Update Training" : "Add Training"}</h3>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="name"
            type="text"
            value={dataToSend.name}
            onChange={handleInputChange}
            placeholder="Training Name"
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
            onChange={(e) =>
              setDataToSend({ ...dataToSend, image: e.target.files[0] })
            }
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
            Save
          </button>
        </section>
      </form>
    </section>
  );
};
