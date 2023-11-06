import React, { useEffect, useState } from "react";
import style from "../../components/Product/Product.module.css";
import Product from "../../components/Product/Product";
import { fetchProducts } from "../../db/productsData";
import { fetchOneCategory } from "../../db/categoryData";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import { ProductsModal } from "../../components/Product/ProductsModal/ProductsModal";
import { useOutletContext } from "react-router-dom";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = props.isModalOpen? props : ''
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
      <h2 className={style.productsTitle}>Products</h2>
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
        {props.isOnDashboard && (
          <AddProduct
            products={products}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setProducts={setProducts}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
