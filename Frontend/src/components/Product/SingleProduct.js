import React, { useState } from "react";
import style from "./SingleProduct.module.css";
import { useLocation } from "react-router-dom";

const SingleProduct = (props) => {
  const location = useLocation()
  const {data, imageSrc} = location.state
  const {name, price, description, categoryId } = data
  return (
    <main className={style.singleProductPageContainer}>
      <section className={style.productWrapper}>
        <figure className={style.productImage}>
          <img src={imageSrc} alt={name} />
        </figure>
        <section className={style.productDetailsWrapper}>
          <section className={style.productNameCat}>
            <p className={style.productName}>{name}</p>
            <span className={style.productCategory}> A {categoryId} Product</span>
            <span className={style.productPrice}>${price}</span>
          </section>
          <section className={style.productDescription}>
            <p>{description}</p>
          </section>
          <section className={style.productShareAndReviews}>
            <section className={style.productReviewsWrapper}>
              <span>٭٭٭٭٭</span> <p>546 Reviews</p>
            </section>
            <button className={style.shareButton}>Share</button>
          </section>
        </section>
      </section>
    </main>
  );
};

export default SingleProduct;
