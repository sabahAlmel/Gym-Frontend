
import React, { useState, useEffect } from "react";
import styles from "./regimedash.module.css";
import { TiPencil, TiDelete } from "react-icons/ti";
import axios from "axios";
import { fetchRegime } from "../../db/regimeData";

function Regimedash() {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);

  const resetFormFields = () => {
    setNewName("");
    setNewDescription("");
    setNewImageFile(null);
    setSelectedItemId(null);
  };

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
  const handleAdd = async () => {
    const formData = new FormData();
    formData.append("name", newName);
    formData.append("description", newDescription);
    if (newImageFile) {
      formData.append("regimeImage", newImageFile);
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_PATH}regime/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.message === "Regime Plan added successfully") {
        // If add is successful, update the items state with the added data
        setItems((prevItems) => [...prevItems, response.data.data]);
        // Reset form fields after adding new item
        setNewName("");
        setNewDescription("");
        setNewImageFile(null);
        // You can also show a success message or perform other actions after successful add
      } else {
        // Handle the case when the backend API returns an error message
        console.error(response.data.message);
      }
    } catch (error) {
      // Handle errors if the POST request fails
      console.error("Error adding regime plan:", error);
    }
  };

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
      <div className={styles.allItems}>
        <table >
          <thead  className={styles.tableHeaderItem}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th >Description</th>
              <th >Image</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td  className={styles.tableContent}>{item._id}</td>
                <td className={styles.tableContent}>{item.name}</td>
                <td className={styles.tableContent}>{item.description}</td>
                <td className={styles.tableContent}>
                  <img src={item.image} alt={item.name}  />
                </td>
                <td  className={styles.buttonContainer}>
                  <button className={`${styles.button} ${styles.buttonedit}`} onClick={() => handleEdit(item)}>
                    <TiPencil />
                  </button>
                  <button className={`${styles.button} ${styles.buttondelete}`} onClick={() => handleDelete(item._id)}>
                    <TiDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {selectedItemId ? ( // If selectedItemId is truthy, show update form
        <div className={styles.editForm}>
          <input
            type="text"
            placeholder="New Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          {/* Include input for updating image if applicable */}
          <input type="file" onChange={(e) => setNewImageFile(e.target.files[0])} />
          <button className={`${styles.button} ${styles.add}`} onClick={handleUpdate}>Update</button>
          <button className={`${styles.button} ${styles.add}`} onClick={resetFormFields}>Cancel</button>
        </div>
      ) : (
        // If selectedItemId is falsy, show add form
        <div className={styles.editForm}>
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          {/* Include input for adding image if applicable */}
          <input
            type="file"
            onChange={(e) => setNewImageFile(e.target.files[0])} />
          <button className={`${styles.button} ${styles.add}`} onClick={handleAdd}>Add</button>
        </div>
      )}
    </div>
  );
}







export default Regimedash;
