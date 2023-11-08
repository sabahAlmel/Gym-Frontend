import React, { useEffect, useState } from "react";
import style from "../../components/Product/Product.module.css";
import { fetchProducts } from "../../db/productsData";
import Product from "../../components/Product/Product";


const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    try {
      const data = await fetchProducts();
      if (data) {
        setProducts(data.data);
        setIsLoading(false);
      } else {
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
      <h2 id="products" className={style.productsTitle}>Products</h2>
      <div className={style.product}>
        {isLoading ? (
          <p>Loading.....</p>
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
