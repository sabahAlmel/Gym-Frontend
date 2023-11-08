import { useState } from "react";
import style from "./RegimePlanModal.module.css";
import {addRegimeplan} from "../../db/regimeData";
import { toast } from "react-hot-toast";


export const RegimeModal = (props) => {
  const { setIsModalOpen } = props;
  const [dataToSend, setDataToSend] = useState({
    name: "",
    description: "",
    regimeImage: null,
  
  });
  function updateObject(name, value) {
    setDataToSend({ ...dataToSend, [name]: value });
  }
  function handleInputChange(e) {
    updateObject(e.target.name, e.target.value);
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    console.log(dataToSend)
    if (
      Object.values(dataToSend).some((item) => item === "" || item === null)
    ) {
      toast.error("All fields are required");
    } else {
      try {
        addRegimeplan(dataToSend);
        setIsModalOpen(false)
        toast.success('A New regime plan has been added')
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={style.modalForm}>
      <form onSubmit={handleSubmit}>
        <h3>Add Regime plan </h3>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="name"
            type="text"
            value={dataToSend.name}
            onChange={handleInputChange}
            placeholder="Regime Name"
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
            name="regimeImage"
            className={style.fileInput}
            onChange={(e) =>
              setDataToSend({ ...dataToSend,regimeImage: e.target.files[0] })
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
