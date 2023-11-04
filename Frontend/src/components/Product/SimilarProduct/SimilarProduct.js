import React from "react";
import style from "./SimilarProducts.module.css";
import { Link } from "react-router-dom";
export default function SimilarProduct(props) {

  const { imageSrc, name, category, price, description, categoryId, id } = props;
  const image = `${process.env.REACT_APP_PATH}${imageSrc}`;
  const splittedName = name.split(" ").splice(0, 1).join(" ");
  return (
    <div className={style.similarProductsWrapper}>
         <Link
            to="/services/singleProduct"
            state={{
              data: {
                name: name,
                price: price,
                description: description,
                id
              },
              imageSrc:image,
              category:category,
              categoryId:categoryId,
            }}
          >
      <figure className={style.similarImageContainer}>
        <img src={image} alt="" />
      </figure>
          </Link>
      <p>{splittedName}...</p>

    </div>
  );
}
