import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import { Link, Route, Routes } from "react-router-dom";
import { toast } from "react-hot-toast";
import { fetchOneCategory } from "../../db/categoryData";
import { deleteProductById, updateProduct } from "../../db/productsData";

const Product = (props) => {
  const { name, price, categoryId, id, description, isOnDashboard } = props;
  const [image, setImage] = useState(props.image);
  const imageSrc = `${process.env.REACT_APP_PATH}${image}`;
  const [category, setCategory] = useState("");
  const [editing, setEditing] = useState(false);
  const [dataToUpdate, setDataToUpdate] = useState({
    prodName: name,
    prodPrice: price,
    prodDescription: description,
    prodImage: null,
    categoryName: category,
  });

  async function fetchCategoryName(categoryId) {
    try {
      const categoryName = await fetchOneCategory(categoryId);
      if (categoryName) {
        setCategory(categoryName.data.data.name);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCategoryName(categoryId);
  }, []);

  function editMode() {
    console.log("Edit");
    setEditing(true);
  }
  async function handleDelete(id) {
    console.log("Delete");
    try {
      await deleteProductById(id);
      toast.success("Product Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit() {
    console.log("Submit");
    setEditing(false);
    setDataToUpdate(dataToUpdate);
    console.log(dataToUpdate);
    try {
      await updateProduct(id, dataToUpdate);
    } catch (error) {
      console.log(error);
    }
  }
  function handleInputChange(e) {
    setDataToUpdate({ ...dataToUpdate, [e.target.name]: e.target.value });
  }
  function handleCategorySelect(e) {
    setDataToUpdate({ ...dataToUpdate, categoryName : e.target.value });
    setCategory(e.target.value)
    console.log(e.target.value);
  }
  function handleImage(e){
    setDataToUpdate({...dataToUpdate,  [e.target.name] : e.target.files[0]})
    console.log(e.target.files)
  }

  return (
    <>
      <div className={style.productCard}>
        <div className={style.productBackground}>
          <img
            className={style.productImage}
            src={imageSrc}
            alt="product-name"
          />
        </div>
        <div className={style.productDetails}>
          <input
            type="text"
            className={style.productName}
            disabled={!editing}
            name="prodName"
            value={dataToUpdate.prodName}
            onChange={handleInputChange}
          />
          <span className={style.productPriceCat}>
            <input
              type="text"
              className={style.productPrice}
              disabled={!editing}
              name="prodPrice"
              value={dataToUpdate.prodPrice}
              onChange={handleInputChange}
            />

            {!editing ? (
              <input
                type="text" 
                className={style.productCat}
                name="categoryName"
                disabled={!editing}
                value={category}
              />
            ) : (
              <select
                name="categoryName"
                className={`${
                  editing ? style.selectEnabled : style.selectDisabled
                }`}
                value={dataToUpdate.categoryName}
                onChange={handleCategorySelect}
                disabled={!editing}
              >
                <option value="Weight Gainer">Weight Gainer</option>
                <option value="Whey Protein">Whey Protein</option>
                <option value="Meal Replacements">Meal Replacements</option>
                <option value="Plant Protein">Plant Protein</option>
              </select>
            )}
          </span>

          {editing ? (
            <input type="file" name="prodImage" onChange={handleImage} />
          ) : (
            ""
          )}
          <section className={style.buttonsWrapper}>
            {!isOnDashboard ? (
              <Link
                className={style.productButton}
                to="/services/singleProduct"
                state={{ data: props, imageSrc, category, categoryId }}
              >
                View More
              </Link>
            ) : (
              <div
                name="delete"
                className={style.productButton}
                onClick={() => handleDelete(id)}
              >
                {" "}
                Delete
              </div>
            )}
            {!editing ? (
              <Link
                onClick={() =>
                  isOnDashboard ? editMode() : toast.success("Added")
                }
                className={style.productButton}
              >
                {isOnDashboard ? "Edit" : "Add to Cart"}
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

export default Product;
