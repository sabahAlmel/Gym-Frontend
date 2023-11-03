import React, { useState } from "react";
import style from "./Product.module.css";
import ProductImage from "../../assets/images/ServicesImages/product-protein.png";
import SingleProduct from "./SingleProduct";
import { Link, Route, Routes } from "react-router-dom";

const Product = (props) => {
  const { name, price, image } = props;
  const imageSrc = `${process.env.REACT_APP_PATH}${image}`

  return (
    <>
      <div className={style.productCard}>
        <div className={style.productBackground}>
          <img className={style.productImage} src={imageSrc} alt="product-name" />
        </div>
        <div className={style.productDetails}>
          <h3 className={style.productName}>{name}</h3>
          <h3 className={style.productPrice}>{price}</h3>
          <Link
            to="/services/singleProduct"
            className={style.productButton}
            state={{ data: props, imageSrc: imageSrc }}
          >
            Get Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
