import React, { useEffect, useState } from "react";
import Product from "../../../components/Product/Product";
import { fetchProducts } from "../../../db/productsData";
import style from "./DashProductsLayout.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { ProductsModal } from "../../../components/Product/ProductsModal/ProductsModal";

function DashProductsLayout(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  function openModal(){
    setIsModalOpen(true)
    console.log('openModal')
  }

  return (
    <div className={style.productsSection}>
      {isModalOpen ? <ProductsModal setIsModalOpen={setIsModalOpen} /> : ''}
      <h2 className={style.productsTitle}>Products</h2>
      <div className={style.product}>
        <div className={style.addProductCard}  onClick={() => openModal()}>
          <section className={style.addButton} >
            <AiOutlinePlus
              className={style.plusIcon}
            />
          </section>
            <span className={style.addButtonText}>Add a Product</span>
        </div>
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
}

export default DashProductsLayout;
