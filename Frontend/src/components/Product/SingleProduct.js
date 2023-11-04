import React, { useEffect, useState } from "react";
import style from "./SingleProduct.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductByCategory } from "../../db/productsData";
import SimilarProduct from "./SimilarProduct/SimilarProduct";

const SingleProduct = () => {
  const location = useLocation();
  const { data, imageSrc, category, categoryId } = location.state;
  const { name, price, description, id } = data;
  console.log(id)
  
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
  const filteredProducts = products.filter(item => item._id !== id)
  console.log(filteredProducts)

  return (
    <main className={style.singleProductPageContainer}>
      <section className={style.productWrapper}>
          <img className={style.productImage} src={imageSrc} alt={name} />
        <section className={style.productDetailsWrapper}>
          <section className={style.productNameCat}>
            <p className={style.productName}>{name}</p>
            <span className={style.productCategory}> A {category} Product</span>
            <span className={style.productPrice}>${price}</span>
          </section>
          <section className={style.productDescription}>
            <p>{description}</p>
          </section>
          <section className={style.productShareAndReviews}>
            <section className={style.productReviewsWrapper}>
              <span>٭٭٭٭٭</span> <p>546 Reviews</p>
            </section>
            <button className={style.backButton} onClick={() => navigate(-1)}>
              Go Back
            </button>
            <section className={style.similarProductsContainer}>
              {filteredProducts.length > 0
                ? filteredProducts.map( item => (
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
        </section>
      </section>
    </main>
  );
};

export default SingleProduct;
