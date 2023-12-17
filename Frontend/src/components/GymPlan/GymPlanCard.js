import React, { useState } from "react";
import style from "./GymPlanCard.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { deleteGymPlan, updatePlan } from "../../db/gymPlansData";

const GymPlanCard = (props) => {
  const { title, price, id, feature } = props;
  const [editing, setEditing] = useState(false);
  const [dataToUpdate, setDataToUpdate] = useState({
    title: title,
    price: price,
    feature: feature,
  });

  function editMode() {
    console.log("Edit");
    setEditing(true);
  }
  async function handleDelete(id) {
    console.log("Delete");
    try {
      await deleteGymPlan(id);
      toast.success("Product Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error deleting plan");
    }
  }

  async function handleSubmit() {
    console.log("Submit");
    setEditing(false);
    setDataToUpdate(dataToUpdate);
    console.log(dataToUpdate);
    if (Object.values(dataToUpdate).some((item) => item === "")) {
      return toast.error("All fields are required");
    }
    try {
      await updatePlan(id, dataToUpdate);
      toast.success("Saved changes");
    } catch (error) {
      console.log(error);
    }
  }
  function handleInputChange(e) {
    const { name, value } = e.target;

    if (name.startsWith("feature-")) {
      const featureIndex = parseInt(name.split("-")[1]);
      const updatedFeatures = [...dataToUpdate.feature];
      updatedFeatures[featureIndex].name = value;
      setDataToUpdate({ ...dataToUpdate, feature: updatedFeatures });
    } else {
      setDataToUpdate({ ...dataToUpdate, [name]: value });
    }
  }

  return (
    <>
      <div className={style.productCard}>
        <div className={style.productDetails}>
          <input
            type="text"
            className={style.productName}
            disabled={!editing}
            name="title"
            value={dataToUpdate.title}
            onChange={handleInputChange}
          />
          <span className={style.productPriceCat}>
            <span className={style.productPriceBorder}>
              ${" "}
              <input
                type="text"
                className={style.productPrice}
                disabled={!editing}
                name="price"
                value={dataToUpdate.price}
                onChange={handleInputChange}
              />
            </span>
          </span>
          <div className={style.check}>
            {dataToUpdate.feature.map((feature, i) => (
              <div className={style.descriptionArray} key={i}>
                <input
                  type="text"
                  className={style.productName}
                  disabled={!editing}
                  name={`feature-${i}`}
                  value={feature.name}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>

          <section className={style.buttonsWrapper}>
            <div
              name="delete"
              className={style.productButton}
              onClick={() => handleDelete(id)}
            >
              Delete
            </div>
            {!editing ? (
              <Link onClick={() => editMode()} className={style.productButton}>
                Edit
              </Link>
            ) : (
              <div
                className={style.productButton}
                onClick={() => handleSubmit()}
              >
                Save
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default GymPlanCard;
