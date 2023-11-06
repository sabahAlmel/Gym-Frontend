import { useState } from "react";
import style from "./ProductsModal.module.css";
import { useOutlet, useOutletContext } from "react-router-dom";
import { addProduct } from "../../../db/productsData";
// import { addMovie, updateMovie } from "../utils/Helper";

export const ProductsModal = (props) => {
    const {setIsModalOpen} = props
    const [dataToSend, setDataToSend]  = useState({
      prodName: '',
      prodPrice: '',
      prodDescription: '',
      prodImage: '',
      categoryName: ''
    })
    function updateObject(name, value){
      setDataToSend({...dataToSend, [name]: value})
    }
    function handleInputChange(e){
      updateObject(e.target.name, e.target.value)
      console.log(dataToSend)
    }
    function setCategory(e){
      updateObject('categoryName',e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        try {
          addProduct(dataToSend)
        } catch (error) {
          console.log(error)
        }
        // setIsModalOpen(false)
    }
  return (
    <section className={style.modalForm}>
      <form onSubmit={handleSubmit}>
        <h3>Add Product</h3>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name='prodName'
            type="text"
            value={dataToSend.prodName}
            onChange={handleInputChange}
            placeholder="Product Name"
          />
        </section>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="prodPrice"
            type="number"
            value={dataToSend.prodPrice}
            onChange={handleInputChange}
            placeholder="Price"
            
          />
        </section>
       

        <section className={style.inputContainer}>
          <textarea
            className={style.textarea}
            name="prodDescription"
            type="text"
            placeholder="Description"
            width="200"
            height="500px"
            value={dataToSend.prodDescription}
            onChange={handleInputChange}
          />
        </section>
        <section className={style.categoriesContainer}>
          <section className={style.category}>
            <label htmlFor="categoryName">
              Plant Protein
              <input type="radio" name="categoryName" value="Plant Protein" checked={dataToSend.categoryName === "Plant Protein"}
                onChange={setCategory} />
            </label>
          </section>
          <section className={style.category}>
            <label htmlFor="categoryName">
              Meal Replacements
              <input type="radio" name="categoryName" value="Meal Replacements" checked={dataToSend.categoryName === "Meal Replacements"}
                onChange={setCategory} />
            </label>
          </section>
          <section className={style.category}>
            <label htmlFor="categoryName">
              Weight Gainer
              <input type="radio" name="categoryName" value="Wheight Gainer" checked={dataToSend.categoryName === "Wheight Gainer"}
                onChange={setCategory} />
            </label>
          </section>
          <section className={style.category}>
            <label htmlFor="categoryName">
              Whey Protein
              <input
                type="radio"
                name="categoryName"
                value="Whey Protein"
                checked={dataToSend.categoryName === "Whey Protein"}
                onChange={setCategory}
              />
            </label>
          </section>
         
         
        </section>
        <section className={style.inputImageContainer}>
          <input type="file" name="prodImage" className={style.fileInput} onChange={(e)=> setDataToSend({...dataToSend, prodImage: e.target.files[0]})} />
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
