import React from 'react'
import style from './Product.module.css'
import ProductImage from '../../assets/images/ServicesImages/product-protein.png'

const Product = ({ name, price, key }) => {
    return (
        <div className={style.productCard} key={key}>
            <div className={style.productBackground}>
                <img className={style.productImage} src={ProductImage} alt='product-name' />
            </div>
            <div className={style.productDetails}>
                <h3 className={style.productName}>{name}</h3>
                <h3 className={style.productPrice}>{price}</h3>
                <button className={style.productButton}>Get Now</button>
            </div>
        </div>
    )
}


export default Product