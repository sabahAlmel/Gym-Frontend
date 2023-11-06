import React from "react";
import style from "./AddProduct.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
function AddProduct({ products, setProducts }) {
  const [isModalOpen, setIsModalOpen] = useOutletContext()
  console.log(isModalOpen)
  function openModal(){
    setIsModalOpen(true)
    console.log('openModal')
  }
  return (
    <div className={style.addProductCard}>
      <section className={style.addButton}>
        <AiOutlinePlus className={style.plusIcon} onClick={openModal} />
      </section>
    </div>
  );
}

export default AddProduct;
