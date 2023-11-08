import React, { useEffect, useState } from "react";
import style from "../../components/Product/Product.module.css";
import { fetchProducts } from "../../db/productsData";
import Product from "../../components/Product/Product";
import Error from "../Error/Error";
import ProductsLoading from "../productsLoading.js/ProductsLoading";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ state: false, message: "ok" });
  const error = {
    500: "Internal server Error",
    400: "Bad request",
    404: "Not Found !",
  };
  async function fetchData() {
    try {
      const response = await fetchProducts();
      if (response) {
        setProducts(response.data);
        setIsLoading(false);
      }else{
        setIsError({state: true, message: 'Network Error'})
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.productsSection}>
      <h2 id="products" className={style.productsTitle}>
        Products
      </h2>
      <div className={style.product}>
        {isError.state ? (
          <Error message={isError.message} />
        ) : isLoading ? (
          <ProductsLoading />
        ) : (
          products.map((product, i) => (
            <Product
              name={product.prodName}
              price={product.prodPrice}
              key={i}
              image={product.prodImage}
              description={product.prodDescription}
              categoryId={product.prodCategory}
              id={product._id}
              isOnDashboard={props.isOnDashboard}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
