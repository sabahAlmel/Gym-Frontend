import React, { useState, useEffect } from "react";
import styles from "./Users.module.css";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { fetchRegime } from "../../db/regimeData";
import { RegimeModal } from "../../components/RegimePlanModal/RegimePlanModal";
import image from "../../assets/images/AboutUsImages/variant-1.png";
import AddRegime from "../../components/AddRegime/AddRegime";
import AddUser from "../../components/AddUser/AddUser";
import UpdateRegime from "../../components/UpdateRegime/UpdateRegime";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Users() {
  const [items, setItems] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isUpdateRegimeOpen, setIsUpdateRegimeOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PATH}users`
      );
      if (response) {
        const transformedData = response.data.map((item, index) => ({
          id: item.id, 
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
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

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post(
        `${process.env.REACT_APP_PATH}users/add`,
        formDataToSend
      );

      setItem((prevItems) => [...prevItems, response.data.data]);
      // console.log("aaaaaaaaaaaaaaaaaaaa"+response.data.data)

      setFormData({
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        verifyPassword:""
        // image: null
      });
      toast.success("User added successfully", {
        position: "top-right",
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
    fetchUsers()
  }, []);

  const columns = [
    // { field: 'id', headerName: 'id', width: 80 },
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
    { field: "firstName", headerName: "firstName", width: 270 },
    { field: "lastName", headerName: "lastName", width: 270 },
    { field: "email", headerName: "email", width: 270 },

    {
      field: 'Action',
    headerName: 'Actions',
    width: 140,
    renderCell: (params) => (
      <div>
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

  const handleEditt = (rowId) => {
    console.log(`Edit clicked for item with ID: ${rowId}`);
    setIsUpdateRegimeOpen(true)
    const selectedRow= item.find((row)=>row.id===rowId)
    setItem(selectedRow)
  };

  const handleDeletee = async (id) => {
    try {
      console.log("Deleting item with ID:", id);
      const response = await axios.delete(
        `${process.env.REACT_APP_PATH}users/delete`,
        {

          data: { id: id },
        }
      );
      if (response.data.message === "deleted") {
        await setItem((prevItems) => prevItems.filter((item) => item.id !== id));
        console.log("Regime plan deleted successfully");
        toast.success("User deleted successfully", {
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
    setIsAddUserOpen(true);
  };


  const handlecancel = (e) => {
    e.preventDefault();
    setIsAddUserOpen(false);
  };

  const emptyRow = { id: -1, name: "Loading..." };

  const rowsWithEmptyRow = isloading ? [emptyRow] : item;

  return (
    <div
      style={{
        width: "90%",
        float: "left",
        margin: "auto",
        height: "650px",
        marginBottom: "7rem",
        marginBottom: "3rem",
      }}
    >
      <h1 style={{ fontSize: 45, fontWeight: "bold", marginBottom: 30 }}>
        Users
      </h1>
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
        Add User
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
      {isAddUserOpen && (
        <AddUser
          formData={formData}
          setFormData={setFormData}
          onClose={() => setIsAddUserOpen(false)}
          handleSubmit={handleSubmit}
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
