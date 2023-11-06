import { useState } from "react";
import style from "./ProductsModal.module.css";
import { useOutlet, useOutletContext } from "react-router-dom";
// import { addMovie, updateMovie } from "../utils/Helper";

export const ProductsModal = (props) => {
    const {setIsModalOpen} = props
    function handleSubmit(e){
        e.preventDefault()
        setIsModalOpen(false)
    }
  return (
    <section className={style.modalForm}>
      <form>
        <h3>Add Product</h3>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="Prodname"
            type="text"
            placeholder="Product Name"
          />
        </section>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="Price"
            type="number"
            placeholder="Price"
            
          />
        </section>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="Category"
            type="text"
            placeholder="Category"
          />
        </section>

        <section className={style.inputContainer}>
          <textarea
            className={style.textarea}
            name="description"
            type="text"
            placeholder="Description"
            width="200"
            height="500px"
          />
        </section>
        <section className={style.categoriesContainer}>
          <section className={style.genre}>
            <label htmlFor="action">
              Plant Protein
              <input type="checkbox" name="action" id="action" value="Plant Protein" />
            </label>
          </section>
          <section className={style.genre}>
            <label htmlFor="horror">
              Meal Replacements
              <input type="checkbox" name="horror" id="horror" value="Meal Replacements" />
            </label>
          </section>
          <section className={style.genre}>
            <label htmlFor="crime">
              Weight Gainer
              <input type="checkbox" name="crime" id="crime" value="Wheight Gainer" />
            </label>
          </section>
          <section className={style.genre}>
            <label htmlFor="fantasy">
              Whey Protein
              <input
                type="checkbox"
                name="fantasy"
                id="fantasy"
                value="Whey Protein"
              />
            </label>
          </section>
         
         
        </section>
        <section className={style.inputImageContainer}>
          <input type="file" name="image" className={style.fileInput} />
        </section>
        <section className={style.btnContainer}>
          <button type="button" className={style.cancelBtn} onClick={ ()=> setIsModalOpen(false)} >
            Cancel
          </button>
          <button type="submit" className={style.submitBtn} onClick={handleSubmit} >
            Submit
          </button>
        </section>
      </form>
    </section>
  );
};
