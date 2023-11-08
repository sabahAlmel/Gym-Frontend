import React from "react";
import style from "./SimilarProducts.module.css";
import { Link } from "react-router-dom";
export default function SimilarProduct(props) {

  const { imageSrc, name, category, price, description, categoryId, id } = props;
  const image = `${process.env.REACT_APP_PATH}${imageSrc}`;
  let splittedName
  if(name.split(' ').length > 3){
     splittedName = `${name.split(" ").splice(0, 3).join(" ")}...`;
  }else{
    splittedName = name
  }
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
      <p>{splittedName}</p>

    </div>
  );
}
