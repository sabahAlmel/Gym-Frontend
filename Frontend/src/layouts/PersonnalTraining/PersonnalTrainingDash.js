import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import styles from "./PersonnalTrainingDash.module.css";
import { deleteData, fetchTraining } from "../../db/trainingData";
import toast from "react-hot-toast";
import { TrainigEditModal } from "../../components/TrainingModal/TrainingEditModal";
import { TrainingModal } from "../../components/TrainingModal/TrianingModal";
export default function TrainingDash() {
  const [trainings, setTrainings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);


  const setTrainingImageUrl = (url, id) => {
    setTrainings((prevTrainings) => {
      return prevTrainings.map((training) =>
        training.id === id ? { ...training, imageUrl: url } : training
      );
    });
  };




  useEffect(() => {
    fetchData();
  }, [isModalOpen || isEditing]);

  useEffect(() => {
    fetchData();
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  async function fetchData() {
    try {
      const data = await fetchTraining();
      if (data && data.data) {
        setTrainings(data.data.data);
        setIsLoading(false);
      } else {
        setTrainings([]);
        console.error("Invalid or empty response:", data);
      }
    } catch (error) {
      setTrainings([]);
      console.log("Error fetching training data:", error);
    }
  }


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetchTraining();
  //       console.log('Fetched data:', response.data.data)
  //       if (response) {
  //         setTrainings(response.data.data)
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);



  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 90,
      renderCell: (params) => (
        <img
        src={params.row.imageUrl || `${process.env.REACT_APP_PATH}${params.row.image}`}
          alt="Image"
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
      ),
    },
    { field: "name", headerName: "Name", width: isDesktop ? 150 : 120 },
    {
      field: "description",
      headerName: "Description",
      width: isDesktop ? 400 : 300,
    },
    {
      field: "Action",
      headerName: "Actions",
      width: isDesktop ? 180 : 140,
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
            onClick={() => handleEdit(params.row.id)}
          >
            Edit
          </button>
          <button
            className={styles.btn}
            style={{ fontFamily: "bold", fontSize: "16px" }}
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (id) => {
    const selectedRow = trainings.find((row) => row.id === id);
    setSelectedRowData(selectedRow);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      toast("Loading...");
      await deleteData(id);
      toast.success("training Deleted Successfully");
      fetchData();
    } catch (error) {
      console.error("Error deleting training:", error);
      toast.error("Error deleting training");
    }
  };

  const emptyRow = { id: -1, title: "Loading..." };

  console.log("Type of trainings:", typeof trainings);
const rowsWithEmptyRow = isLoading ? [emptyRow] : Array.isArray(trainings) ? trainings : [];

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
       Personnal Training
      </h1>
      <button
        className={styles.btnAdd}
        style={{
          color: "white",
          marginBottom: "2rem",
          width: "12rem",
          borderRadius: "5px",
        }}
        onClick={() => {
          setIsEditing(false);
          setIsModalOpen(true);
        }}
      >
        Add Trainings
      </button>
      {isModalOpen &&
        (isEditing ? (
          <TrainigEditModal
            setIsModalOpen={setIsModalOpen}
            initialData={selectedRowData}
            fetchData={fetchData}
            setTrainingImageUrl={setTrainingImageUrl}
          />
        ) : (
          <TrainingModal
            setIsModalOpen={setIsModalOpen}
            fetchData={fetchData}
            setTrainingImageUrl={setTrainingImageUrl}
          />
        ))}
      <DataGrid
        rows={rowsWithEmptyRow}
        columns={columns}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        components={{
          Toolbar: CustomToolbar, // Use a custom toolbar component
        }}
        sx={{
          color: "white",
          // border:"none",
          paddingTop: "1rem",
          border: "1px solid white",
          borderRadius: "17px",
          "& .MuiDataGrid-root": {
            backgroundColor: "white",

            // Background color of the entire grid
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
    </div>
  );
}

const CustomToolbar = () => {
  return (
    <GridToolbar>{/* Add any custom elements or styling here */}</GridToolbar>
  );
};
