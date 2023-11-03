import React, { useState } from "react";
import style from "./Product.module.css";
import ProductImage from "../../assets/images/ServicesImages/product-protein.png";
import SingleProduct from "./SingleProduct";
import { Link, Route, Routes } from "react-router-dom";
import { toast } from "react-hot-toast";

const Product = (props) => {
  const { name, price, image } = props;
  const imageSrc = `${process.env.REACT_APP_PATH}${image}`;

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
            <p className={style.productCat}>Whey Protein</p>
          </span>
          <section className={style.buttonsWrapper}>
            <Link
              className={style.productButton}
              to="/services/singleProduct"
              state={{ data: props, imageSrc: imageSrc }}
            >
              View More
            </Link>
            <Link
              onClick={() => toast.success("Added")}
              className={style.productButton}
            >
              Add to Card
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Product;
