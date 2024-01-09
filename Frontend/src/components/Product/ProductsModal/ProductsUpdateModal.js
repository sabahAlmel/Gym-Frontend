import { useState, useEffect } from "react";
import style from "./ProductsModal.module.css";
import { addProduct, updateProduct } from "../../../db/productsData";
import { toast } from "react-hot-toast";

export const ProductsUpdateModal = (props) => {
  const { setIsModalOpen, initialData, fetchData } = props;
  const [dataToSend, setDataToSend] = useState({
    prodName: initialData.prodName,
    prodPrice: initialData.prodPrice,
    prodDescription: initialData.prodDescription,
    prodImage: null,
    categoryName: initialData.categoryName,
  });

  useEffect(() => {
    setDataToSend({
      prodName: initialData.prodName,
      prodPrice: initialData.prodPrice,
      prodDescription: initialData.prodDescription,
      prodImage: null,
      categoryName: initialData.categoryName,
    });
  }, [initialData]);

  function updateObject(name, value) {
    setDataToSend({ ...dataToSend, [name]: value });
  }

  function handleInputChange(e) {
    updateObject(e.target.name, e.target.value);
  }

  function setCategory(e) {
    updateObject("categoryName", e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      Object.values(dataToSend).some((item) => item === "" || item === null)
    ) {
      toast.error("All fields are required");
    } else {
      dataToSend.prodPrice = parseInt(dataToSend.prodPrice);
      try {
        if (initialData.id) {
          toast("Loading...");
          await updateProduct(initialData.id, dataToSend);
          toast.success("Product Updated Successfully");
        } else {
          await addProduct(dataToSend);
          toast.success("A New Product has been added");
        }

        setIsModalOpen(false);
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={style.modalForm}>
      <form onSubmit={handleSubmit}>
        <h3>{initialData.id ? "Update Product" : "Add Product"}</h3>
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="prodName"
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
              <input
                type="radio"
                name="categoryName"
                value="Plant Protein"
                checked={dataToSend.categoryName === "Plant Protein"}
                onChange={setCategory}
              />
            </label>
          </section>
          <section className={style.category}>
            <label htmlFor="categoryName">
              Meal Replacements
              <input
                type="radio"
                name="categoryName"
                value="Meal Replacements"
                checked={dataToSend.categoryName === "Meal Replacements"}
                onChange={setCategory}
              />
            </label>
          </section>
          <section className={style.category}>
            <label htmlFor="categoryName">
              Weight Gainer
              <input
                type="radio"
                name="categoryName"
                value="Weight Gainer"
                checked={dataToSend.categoryName === "Weight Gainer"}
                onChange={setCategory}
              />
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
          <input
            type="file"
            name="prodImage"
            className={style.fileInput}
            onChange={(e) =>
              setDataToSend({ ...dataToSend, prodImage: e.target.files[0] })
            }
          />
        </section>
        <section className={style.btnContainer}>
          <button
            type="button"
            className={style.cancelBtn}
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button type="submit" className={style.submitBtn}>
            Submit
          </button>
        </section>
      </form>
    </section>
  );
};
