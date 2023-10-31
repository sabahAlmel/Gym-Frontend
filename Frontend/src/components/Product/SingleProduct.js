import React, { useState } from 'react'
import style from './SingleProduct.module.css'
import CloseModal from '../../assets/icons/close-modal.png'
import Supplement from '../../assets/images/ServicesImages/product-protein.png'

const SingleProduct = ({ isOpen, onClose }) => {

  if (!isOpen)
    return null

  return (
    <>
      <div className={style.modalOverlay}>
        <div className={style.modal}>
          <div className={style.modalContent}>
            <img className={style.modalClose} onClick={onClose} src={CloseModal} />
            <div className={style.modalContentOne}>
              <div className={style.modalFirstDiv}>
                <img className={style.modalImage} src={Supplement} />
                <div className={style.modalDetails}>
                  <div className={style.modalDetailsFirst}>
                    <div className={style.modalProductTitle}>
                      <h3 className={style.modalH3}>Title</h3>
                      <p className={style.modalTitleParagraph}>pro complex</p>
                    </div>
                    <div className={style.modalProductPrice}>
                      <h3 className={style.modalH3}>Price</h3>
                      <p className={style.modalPriceParagraph}>70$</p>
                    </div>
                  </div>

                  <div className={style.modalDetailsSecond}>
                    <div className={style.modalProductCategory}>
                      <h3 className={style.modalH3}>Category</h3>
                      <p className={style.modalCategoryParagraph}>supplement</p>
                    </div>
                    <div className={style.modalProductDescription}>
                      <h3 className={style.modalH3}>Description</h3>
                      <p className={style.modalDescriptionParagraph}>lorem..........</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className={style.modalContentTwo}>
              <div className={style.modalSecondDiv}>
                <div className={style.recommended}>
                  <h3 className={style.modalH3}>Recommended by category</h3>
                  <div className={style.recommendedContent}>
                    <img className={style.modalImageFlex} src={Supplement} />
                    <img className={style.modalImageFlex} src={Supplement} />
                    <img className={style.modalImageFlex} src={Supplement} />
                    <img className={style.modalImageFlex} src={Supplement} />
                    <img className={style.modalImageFlex} src={Supplement} />
                  </div>
                  <button className={style.addToCart}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default SingleProduct
