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
          <p className={style.productName}>{name}</p>
          <span className={style.productPriceCat}>
            <p className={style.productPrice}>${price}</p>
            <p className={style.productCat}>{category}</p>
          </span>
          <section className={style.buttonsWrapper}>
            {!isOnDashboard &&
            <Link
            className={style.productButton}
            to="/services/singleProduct"
            state={{ data: props, imageSrc, category, categoryId }}
            >
              View More
            </Link>
              }
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
