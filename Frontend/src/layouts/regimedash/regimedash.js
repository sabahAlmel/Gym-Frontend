// import React, { useState, useEffect } from "react";
// import styles from "./regimedash.module.css";
// import { TiPencil, TiDelete } from "react-icons/ti";
// import axios from "axios";
// import { fetchRegime } from "../../db/regimeData";


// function Regimedash() {
//   const [items, setItems] = useState([]);
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [newName, setNewName] = useState("");
//   const [newDescription, setNewDescription] = useState("");

//   const handleEdit = (item) => {
//     setSelectedItemId(item._id);
//     setNewName(item.name);
//     setNewDescription(item.description);
//   };

//   const handleUpdate = () => {
//     axios
//       .put(`${process.env.REACT_APP_PATH}regime/update?id=${selectedItemId}`, {
//         name: newName,
//         description: newDescription
//       })
//       .then((response) => {
//         if (response.data.message === "Updated Successfully") {
//           // If update is successful, update the items state with the updated data
//           setItems((prevItems) =>
//             prevItems.map((item) =>
//               item._id === selectedItemId
//                 ? { ...item, name: newName, description: newDescription }
//                 : item
//             )
//           );
//           // Reset form fields and selectedItemId after update
//           setNewName("");
//           setNewDescription("");
//           setSelectedItemId(null);
//           // You can also show a success message or perform other actions after successful update
//         } else {
//           // Handle the case when the backend API returns an error message
//           console.error(response.data.message);
//         }
//       })
//       .catch((error) => {
//         // Handle errors if the PUT request fails
//         console.error("Error updating item:", error);
//       });
//   };

//   const handleDelete = (itemId) => {
//  axios.delete(`${process.env.REACT_APP_PATH}regime/delete?id=${itemId}`)
//       .then((response) => {
//         if (response.data.message === "Deleted Successfully") {
//           // If deletion is successful, update the items state
//           setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
//           // Reset selectedItemId after deletion
//           setSelectedItemId(null);
//           // You can also show a success message or perform other actions after successful deletion
//         } else {
//           // Handle the case when the backend API returns an error message
//           console.error(response.data.message);
//         }
//       })
//       .catch((error) => {
//         // Handle errors if the DELETE request fails
//         console.error("Error deleting item:", error);
//       });
//   };


//   useEffect(() => {
//     async function fetchData() {
//         try {
//           const response = await fetchRegime();
//           console.log('Fetched data:', response.data.data)
//           if(response){
//             setItems(response.data.data)
//           }
//           }
//          catch (error) {
//           console.log(error);
//         }
//       }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className={styles.allItems}>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item) => (
//               <tr key={item._id}>
//                 <td>{item.name}</td>
//                 <td>{item.description}</td>
//                 <td className={styles.buttonContainer}>
//                   <button className={styles.updateDelete} onClick={() => handleEdit(item)}>
//                     <TiPencil />
//                   </button>
//                   <button className={styles.updateDelete} onClick={() => handleDelete(item._id)}>
//                     <TiDelete />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Edit form */}
//       {selectedItemId && (
//         <div className={styles.editForm}>
//           <input
//             type="text"
//             placeholder="New Name"
//             value={newName}
//             onChange={(e) => setNewName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="New Description"
//             value={newDescription}
//             onChange={(e) => setNewDescription(e.target.value)}
//           />
//           <button onClick={handleUpdate}>Update</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Regimedash;
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
const [newImageFile,setNewImageFile]=useState("")

  const handleEdit = (item) => {
    setSelectedItemId(item._id);
    setNewName(item.name);
    setNewDescription(item.description);
  };
  const handleUpdate = () => {
    if (selectedItemId) {
      const formData = new FormData();
      formData.append("id", selectedItemId);
      formData.append("name", newName);
      formData.append("description", newDescription);
      formData.append("file", newImageFile); // Assuming newImageFile is the updated image file, if applicable

      axios
        .patch(`${process.env.REACT_APP_PATH}regime/update`, formData)
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
            setNewImageFile(null); // Reset the new image file, if applicable
            setSelectedItemId(null);
            // You can also show a success message or perform other actions after successful update
          } else {
            // Handle the case when the backend API returns an error message
            console.error(response.data.message);
          }
        })
        .catch((error) => {
          // Handle errors if the PUT request fails
          console.error("Error updating item:", error);
        });
    } else {
      console.error("No selected item to update");
    }
  };


  const handleDelete = (itemId) => {
    console.log("Item ID to be deleted:", itemId); // Debugging line

    if (!itemId) {
      console.error("Invalid item id");
      return;
    }

    axios
      .delete(`${process.env.REACT_APP_PATH}regime/delete?id=${itemId}`)
      .then((response) => {
        if (response.data.message === "Deleted Successfully") {
          // If deletion is successful, update the items state
          setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
          // Reset selectedItemId after deletion
          setSelectedItemId(null);
          // You can also show a success message or perform other actions after successful deletion
        } else {
          // Handle the case when the backend API returns an error message
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        // Handle errors if the DELETE request fails
        console.error("Error deleting item:", error);
      });
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
    <div>
      <div className={styles.allItems}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td className={styles.buttonContainer}>
                  <button className={styles.updateDelete} onClick={() => handleEdit(item)}>
                    <TiPencil />
                  </button>
                  <button className={styles.updateDelete} onClick={() => handleDelete(item._id)}>
                    <TiDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update form */}
      {selectedItemId && (
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
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}

export default Regimedash;
