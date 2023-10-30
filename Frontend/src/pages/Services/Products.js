import React from 'react'
import style from './Products.module.css'
import ProductImage from '../../assets/images/ServicesImages/product-protein.png'

const Products = () => {

  const products = ['Product Name', 'Product Name', 'Product Name', 'Product Name', 'MASS GAINER SUPPLEMENTS']
  return (
    <div className={style.productsSection}>
      <h2 className={style.productsTitle}>Products</h2>
      <div className={style.product}>
        {
          products.map((product, i) => (
            <div className={style.productCard} key={i}>
              <div className={style.productBackground}>
                <img className={style.productImage} src={ProductImage} alt='product-name' />
              </div>
              <div className={style.productDetails}>
                <h3 className={style.productName}>{product}</h3>
                <h3 className={style.productPrice}>$45</h3>
                <button className={style.productButton}>Get Now</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}


export default Products
