
import React, { useState, useEffect } from "react";
import styles from "./regimedash.module.css";
import axios from "axios";
import { fetchRegime } from "../../db/regimeData";
import { RegimeModal } from '../../components/RegimePlanModal/RegimePlanModal'

function Regimedash() {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const resetFormFields = () => {
    setNewName("");
    setNewDescription("");
    setNewImageFile(null);
    setSelectedItemId(null);
  };

  // update regime plan 
  const handleEdit = (item) => {
    setSelectedItemId(item._id);
    setNewName(item.name);
    setNewDescription(item.description);
  };
  const handleUpdate = async () => {
    console.log('before', selectedItemId)
    if (selectedItemId) {
      console.log('after', newImageFile)

      const dataToSend = { id: selectedItemId, name: newName, description: newDescription }
      console.log(dataToSend)
      console.log(newImageFile)
      await axios
        .patch(`${process.env.REACT_APP_PATH}regime/update`, { regimeImage: newImageFile, ...dataToSend }, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.message === "Updated Successfully") {
            // If update is successful, update the items state with the updated data
            setItems((prevItems) =>
              prevItems.map((item) =>
                item._id === selectedItemId
                  ? { ...item, name: newName, description: newDescription, image: response.data.data.image }
                  : item
              )
            );
            // Reset form fields and selectedItemId after update
            setNewName("");
            setNewDescription("");
            setNewImageFile(null);
            setSelectedItemId(null);
            // You can also show a success message or perform other actions after successful update
          } else {
            // Handle the case when the backend API returns an error message
            console.error(response.data.message);
          }
        })
        .catch((error) => {
          // Handle errors if the PATCH request fails
          console.error("Error updating item:", error);
        });
    } else {
      console.error("No selected item to update");
    }
  };
  //   remove data 

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_PATH}regime/delete`, {
        data: { id: id }
      });

      if (response.data.message === "Deleted Successfully") {
        setItems((prevItems) => prevItems.filter((item) => item._id !== id));
        console.log("Regime plan deleted successfully");
      } else {
        console.log(`No regime plan found with the id ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // post data 
  const handleAdd = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }
  // fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchRegime();
        console.log('Fetched data:', response.data.data)
        if (response) {
          setItems(response.data.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.regimeDashWrapper}>
      {isModalOpen ? <RegimeModal setIsModalOpen={setIsModalOpen} /> : ''}
      <h2 className={styles.h2}>Regime Plan</h2>
      <div className={styles.allItems}>
        <table className={styles.regimTable} >
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.tableHeaderItem}>ID</th>
              <th className={styles.tableHeaderItem}>Name</th>
              <th className={styles.tableHeaderItem}>Description</th>
              <th className={styles.tableHeaderItem}>Image</th>
              <th className={styles.tableHeaderItem}>Actions</th>
            </tr>
          </thead>
          <tbody className={styles.tableContent}>
            {items.map((item) => (
              <tr key={item._id}>
                <td className={styles.tableContent}>{item._id}</td>
                <td className={styles.tableContent}>{item.name}</td>
                <td className={styles.tableContent}>{item.description}</td>
                <td className={styles.tableContent}>
                  <img src={item.image} alt={item.name} />
                </td >
                <td className={styles.buttonSection}>
                  <button className={`${styles.button} ${styles.buttonEdit}`} onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                  <button className={`${styles.button} ${styles.buttonDelete}`} onClick={() => handleDelete(item._id)}>
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* show update form */}

      {selectedItemId ? (
        <form className={styles.formcontainer}>
          <div className={styles.editForm}>
            <input
              type="text"
              placeholder="New Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className={styles.inputField}

            />
            <input
              type="text"
              placeholder="New Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className={styles.inputField}

            />
            <input type="file" onChange={(e) => setNewImageFile(e.target.files[0])} className={styles.fileInput}
            />
            <button className={`${styles.button} ${styles.add}`} onClick={handleUpdate}>Update</button>
            <button className={`${styles.button} ${styles.add}`} onClick={resetFormFields}>Cancel</button>
          </div>
        </form>
      ) : (
        // show add form
        <form className={styles.formcontainer}>
          <div className={styles.editForm}>
            <input
              type="text"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className={styles.inputField}

            />
            <input
              type="file"
              onChange={(e) => setNewImageFile(e.target.files[0])} className={styles.fileInput}
            />
            <button className={`${styles.button} ${styles.add}`} onClick={handleAdd}>Add</button>
          </div>
        </form>
      )}
    </div>
  );
}







export default Regimedash;
