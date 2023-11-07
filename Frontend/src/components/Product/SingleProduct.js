import React, { useEffect, useState } from "react";
import style from "./SingleProduct.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductByCategory } from "../../db/productsData";
import SimilarProduct from "./SimilarProduct/SimilarProduct";
import Header from "../NavBar/Header";

const SingleProduct = () => {
  const location = useLocation();
  const { data, imageSrc, category, categoryId } = location.state;
  const { name, price, description, id } = data;
  console.log(id);

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // const [isCatFetched, setIsCatFetched] = useState(false)

  async function fetchProdByCategoty() {
    try {
      const data = await getProductByCategory(categoryId);
      setProducts(data.data);
      console.log(data.data);
      // console.log('products');
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProdByCategoty();
  }, []);
  // const filteredProducts = products.filter((item) => item._id !== id);

  return (
    <main className={style.singleProductPageContainer}>
      <Header />
      <section className={style.singleProductMainView}>
        <section className={style.productWrapper}>
          <img className={style.productImage} src={imageSrc} alt={name} />
          <section className={style.productDetailsWrapper}>
            <section className={style.productNameCat}>
              <p className={style.productName}>{name}</p>
              <span className={style.productCategory}>
                {" "}
                A {category} Product
              </span>
              <section className={style.productReviewsWrapper}>
                <span>٭٭٭٭٭</span> <p>546 Reviews</p>
              </section>
              <span className={style.productPrice}>${price}</span>
            </section>
            <section className={style.productDescription}>
              <p>{description}</p>
            </section>

          </section>
        </section>
      </section>
            <section className={style.similarProductsContainer}>
              <h3>Similar Products</h3>
              <section className={style.similarProducts}>

              {products.length > 0
                ? products.map((item) => (
                    <SimilarProduct
                    price={item.prodPrice}
                    description={item.prodDescription}
                    name={item.prodName}
                    imageSrc={item.prodImage[0]}
                    category={category}
                    categoryId={categoryId}
                    id={item._id}
                    />
                    ))
                    : "Loading...."}
                    </section>
            </section>
    </main>
  );
};

export default SingleProduct;
