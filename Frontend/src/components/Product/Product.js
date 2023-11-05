import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import ProductImage from "../../assets/images/ServicesImages/product-protein.png";
import SingleProduct from "./SingleProduct";
import { Link, Route, Routes } from "react-router-dom";
import { toast } from "react-hot-toast";
import { fetchOneCategory } from "../../db/categoryData";

const Product = (props) => {
  const isOnDashboard = props.isOnDashboard;
  const { name, price, image, categoryId } = props;
  const imageSrc = `${process.env.REACT_APP_PATH}${image}`;
  const [category, setCategory] = useState("");
  // console.log(categoryId)

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

  function editMode(){
    console.log('Edit')
  }
  function handleDelete(){
    console.log('Delete')
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
          <input type="text" className={style.productName} disabled={isOnDashboard} value={name} />
          <span className={style.productPriceCat}>
            <input type="text" className={style.productPrice} disabled={isOnDashboard} value={price} />
            <input type='text' className={style.productCat} disabled={isOnDashboard} value={category} />
          </span>
          <section className={style.buttonsWrapper}>
            {!isOnDashboard ?
            <Link
            className={style.productButton}
            to="/services/singleProduct"
            state={{ data: props, imageSrc, category, categoryId }}
            >
              View More
            </Link>
              : <div name="delete" className={style.productButton} onClick={()=> handleDelete()}> Delete</div>}
            <Link
              onClick={() => isOnDashboard ? editMode()  : toast.success("Added") }
              className={style.productButton}
              >
              {isOnDashboard ? 'Edit' : 'Add to Cart'}
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Product;
