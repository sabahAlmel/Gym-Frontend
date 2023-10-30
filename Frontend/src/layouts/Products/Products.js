import React from 'react'
import style from '../../components/Product/Product.module.css'
import Product from '../../components/Product/Product'

const Products = () => {

  const products = [
    {
      name: "Test",
      price: 20,
    },
    {
      name:'Test 2',
      price: 50
    },
    {
      name: "Test",
      price: 20,
    },
    {
      name:'Test 2',
      price: 50
    },
    {
      name: "Test",
      price: 20,
    },
    {
      name:'Test 2',
      price: 50
    }
  ]
  return (
    <div className={style.productsSection}>
      <h2 className={style.productsTitle}>Products</h2>
      <div className={style.product}>
        {
          products.map((product, i) => (
            <Product name={product.name} price={product.price} key={i}/>
          ))
        }
      </div>
    </div>
  )
}


export default Products
