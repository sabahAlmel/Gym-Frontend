import React, { useState, useEffect } from "react";
import styles from "./regimedash.module.css";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { fetchRegime } from "../../db/regimeData";
import { RegimeModal } from "../../components/RegimePlanModal/RegimePlanModal";
import image from "../../assets/images/AboutUsImages/variant-1.png";
import AddRegime from "../../components/AddRegime/AddRegime";
import UpdateRegime from "../../components/UpdateRegime/UpdateRegime";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToolbarGrid() {
  const [items, setItems] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isAddRegimeOpen, setIsAddRegimeOpen] = useState(false);
  const [isUpdateRegimeOpen, setIsUpdateRegimeOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const fetchRegime = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PATH}regime/read`
      );
      if (response) {
        const transformedData = response.data.data.map((item, index) => ({
          id: item.id, // Using index + 1 as a default ID
          name: item.name,
          description: item.description,
          image: item.image,
          // Add other properties as needed
        }));
        setItem(transformedData);
        setIsLoading(false);
      } else {
        // console.log('no data available')
        setItem([]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };
console.log(item)
  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post(
        `${process.env.REACT_APP_PATH}regime/add`,
        formDataToSend
      );

      setItem((prevItems) => [...prevItems, response.data.data]);
      // console.log("aaaaaaaaaaaaaaaaaaaa"+response.data.data)

      setFormData({
        title: "",
        description: "",
        // image: null
      });
      toast.success("Regime plan added successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // console.log("DATAAA" + response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRegime();
    handleSubmit();
    handleDeletee();
  }, []);

  const columns = [
    // { field: 'id', headerName: 'id', width: 80 },
    { field: "name", headerName: "Title", width: 140 },
    {
      field: "image",
      headerName: "Image",
      width: 110,
      renderCell: (params) => (
        <img
          src={`${process.env.REACT_APP_PATH}${params.row.image}`}
          alt="Image"
          style={{ width: 60, height: 60 }}
        />
      ),
    },
    {
      field: "description",
      headerName: "Description",
      width: 780,
      renderCell: (params) => (
        <div className={styles.description}>{params.row.description}</div>
      ),
    },
    {
      field: "Action",
      headerName: "Actions",
      width: 140,
      renderCell: (params) => (
        <div>
          <button
            className={`${styles.btn} ${styles}`}
            style={{
              marginRight: "0.5rem",
              fontFamily: "bold",
              fontSize: "16px",
              "&:hover": { color: "green" },
            }}
            onClick={() => setIsUpdateRegimeOpen(true)}
          >
            Edit
          </button>

          <button
            className={styles.btn}
            style={{ fontFamily: "bold", fontSize: "16px" }}
            onClick={() => handleDeletee(params.row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleEditt = (id) => {
    console.log(`Edit clicked for item with ID: ${id}`);
  };

  const handleDeletee = async (id) => {
    try {
      console.log("Deleting item with ID:", id);
      const response = await axios.delete(
        `${process.env.REACT_APP_PATH}regime/delete`,
        {
          data: { id: id },
        }
      );
      if (response.data.message === "Deleted Successfully") {
        setItem((prevItems) => prevItems.filter((item) => item.id !== id));
        console.log("Regime plan deleted successfully");
        toast.success("Regime plan deleted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  const myCustomData = [
    {
      id: 1,
      title: "Item 1",
      description:
        "John Doe John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe",
      image: "path-to-image-1.jpg",
    },
    {
      id: 2,
      title: "Item 2",
      description:
        "John Doe John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJoh",
      image: "path-to-image-2.jpg",
    },
    {
      id: 3,
      title: "Item 3",
      description:
        "JohnJohn Doe John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJoh",
      image: "path-to-image-3.jpg",
    },
    {
      id: 4,
      title: "Item 4",
      description:
        "John Doe John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJoh",
      image: "path-to-image-4.jpg",
    },
    {
      id: 5,
      title: "Item 5",
      description:
        "John DoeJohn Doe John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJoh",
      image: "path-to-image-5.jpg",
    },
    {
      id: 6,
      title: "Item 6",
      description:
        "John Doe John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJoh",
      image: "path-to-image-6.jpg",
    },
    // Add more rows as needed
  ];

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
    console.log("before", selectedItemId);
    if (selectedItemId) {
      console.log("after", newImageFile);

      const dataToSend = {
        id: selectedItemId,
        name: newName,
        description: newDescription,
      };
      console.log(dataToSend);
      console.log(newImageFile);
      await axios
        .patch(
          `${process.env.REACT_APP_PATH}regime/update`,
          { regimeImage: newImageFile, ...dataToSend },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          if (response.data.message === "Updated Successfully") {
            // If update is successful, update the items state with the updated data
            setItems((prevItems) =>
              prevItems.map((item) =>
                item._id === selectedItemId
                  ? {
                      ...item,
                      name: newName,
                      description: newDescription,
                      image: response.data.data.image,
                    }
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
      const response = await axios.delete(
        `${process.env.REACT_APP_PATH}regime/delete`,
        {
          data: { id: id },
        }
      );

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
    e.preventDefault();
    setIsAddRegimeOpen(true);
  };

  const handleUpdates = (e) => {
    console.log("clickedd");
    e.preventDefault();
    setIsUpdateRegimeOpen(true);
  };
  const handlecancel = (e) => {
    e.preventDefault();
    setIsAddRegimeOpen(false);
  };
  // fetch data
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetchRegime();
  //       console.log('Fetched data:', response.data.data)
  //       if (response) {
  //         setItems(response.data.data)
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  // const getRowId = (row) => row.id;
  const emptyRow = { id: -1, name: "Loading..." };

  const rowsWithEmptyRow = isloading ? [emptyRow] : item;

  return (
    <div
      style={{
        width: "90%",
        float: "left",
        margin: "auto",
        height: "800px",
        marginBottom: "7rem",
        marginBottom: "3rem",
      }}
    >
      <button
        className={styles.btnAdd}
        style={{
          color: "white",
          marginBottom: "1rem",
          width: "7rem",
          height: "2.5rem",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
        onClick={handleAdd}
      >
        Add Plan
      </button>
      <DataGrid
        // getRowId={getRowId}
        rows={rowsWithEmptyRow}
        columns={columns}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        components={{
          Toolbar: CustomToolbar,
        }}
        sx={{
          color: "white",
          // border:"none",
          paddingTop: "1rem",
          border: "1px solid white",
          borderRadius: "17px",
          "& .MuiDataGrid-root": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-columnHeader": {
            // Background color of column headers
            color: "white",
            fontFamily: "Outfit",
            fontSize: "19px",
            // Text color of column headers
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #ccc", // Border between cells
            color: "white",
            fontSize: "17px",
            // Text color of cells
          },
          "& .MuiTablePagination-root": {
            color: "white", // Text color of pagination
          },
          "& .MuiDataGrid-toolbar": {
            color: "white",
            backgroundColor: "white", // Background color of the toolbar
          },
          "& .MuiDataGrid-toolbarContainer": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            // color: 'blue',
          },
          "& .MuiButtonBase-root": {
            color: "white", // Text color for buttons in the toolbar
          },
          "& .MuiPaginationItem-icon": {
            color: "white", // Color of pagination icons
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
          "& .MuiDataGrid-row , & .MuiDataGrid-cell": {
            maxHeight: "80px !important",
            height: "80px !important",
          },
        }}
      />
      {isAddRegimeOpen && (
        <AddRegime
          formData={formData}
          setFormData={setFormData}
          onClose={() => setIsAddRegimeOpen(false)}
          handleSubmit={handleSubmit}
        />
      )}
      {isUpdateRegimeOpen && (
        <UpdateRegime
          item={item}
          setItem={setItem}
          onClose={() => setIsUpdateRegimeOpen(false)}
          handleUpdates={handleUpdates}
        />
      )}
      <ToastContainer />
    </div>
  );
}

const CustomToolbar = () => {
  return (
    <GridToolbar>{/* Add any custom elements or styling here */}</GridToolbar>
  );
};
//   return (
//     <div className={styles.regimeDashWrapper}>
//       {isModalOpen ? <RegimeModal setIsModalOpen={setIsModalOpen} /> : ''}
//       <h2 className={styles.h2}>Regime Plan</h2>
//       <div className={styles.allItems}>
//         <table className={styles.regimTable} >
//           <thead className={styles.tableHeader}>
//             <tr>
//               <th className={styles.tableHeaderItem}>ID</th>
//               <th className={styles.tableHeaderItem}>Name</th>
//               <th className={styles.tableHeaderItem}>Description</th>
//               <th className={styles.tableHeaderItem}>Image</th>
//               <th className={styles.tableHeaderItem}>Actions</th>
//             </tr>
//           </thead>
//           <tbody className={styles.tableContent}>
//             {items.map((item) => (
//               <tr key={item._id}>
//                 <td className={styles.tableContent}>{item._id}</td>
//                 <td className={styles.tableContent}>{item.name}</td>
//                 <td className={styles.tableContent}>{item.description}</td>
//                 <td className={styles.tableContent}>
//                   <img src={item.image} alt={item.name} />
//                 </td >
//                 <td className={styles.buttonSection}>
//                   <button className={`${styles.button} ${styles.buttonEdit}`} onClick={() => handleEdit(item)}>
//                     Edit
//                   </button>
//                   <button className={`${styles.button} ${styles.buttonDelete}`} onClick={() => handleDelete(item._id)}>
//                     Delete
//                   </button>

//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* show update form */}

//       {selectedItemId ? (
//         <form className={styles.formcontainer}>
//           <div className={styles.editForm}>
//             <input
//               type="text"
//               placeholder="New Name"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//               className={styles.inputField}

//             />
//             <input
//               type="text"
//               placeholder="New Description"
//               value={newDescription}
//               onChange={(e) => setNewDescription(e.target.value)}
//               className={styles.inputField}

//             />
//             <input type="file" onChange={(e) => setNewImageFile(e.target.files[0])} className={styles.fileInput}
//             />
//             <button className={`${styles.button} ${styles.add}`} onClick={handleUpdate}>Update</button>
//             <button className={`${styles.button} ${styles.add}`} onClick={resetFormFields}>Cancel</button>
//           </div>
//         </form>
//       ) : (
//         // show add form
//         <form className={styles.formcontainer}>
//           <div className={styles.editForm}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//               className={styles.inputField}
//             />
//             <input
//               type="text"
//               placeholder="Description"
//               value={newDescription}
//               onChange={(e) => setNewDescription(e.target.value)}
//               className={styles.inputField}

//             />
//             <input
//               type="file"
//               onChange={(e) => setNewImageFile(e.target.files[0])} className={styles.fileInput}
//             />
//             <button className={`${styles.button} ${styles.add}`} onClick={handleAdd}>Add</button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }

// export default Regimedash;

// import { useDemoData } from '@mui/x-data-grid-generator';
