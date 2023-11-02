import React, { useState } from 'react'
import style from './Product.module.css'
import ProductImage from '../../assets/images/ServicesImages/product-protein.png'
import SingleProduct from './SingleProduct'
import { Link } from 'react-router-dom'

const Product = ({ name, price, key }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
        <div className={style.productCard} key={key}>
            <div className={style.productBackground}>
                <img className={style.productImage} src={ProductImage} alt='product-name' />
            </div>
            <div className={style.productDetails}>
                <h3 className={style.productName}>{name}</h3>
                <h3 className={style.productPrice}>{price}</h3>
                <Link to='singleProduct' className={style.productButton}>Get Now</Link>
            </div>
        </div>
        <SingleProduct isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}


export default Product