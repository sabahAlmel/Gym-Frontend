import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import styles from "./Gymplan.module.css";
import { deleteGymPlan, fetchGymPlans } from "../../db/gymPlansData";
import { GymPlansModal } from "../../components/GymPlan/GymPlansModal/GymPlansModal";
import { GymPlansUpdateModal } from "../../components/GymPlan/GymPlansModal/GymPlansUpdateModal";
import toast from "react-hot-toast";
export default function GymPlan() {
  const [gymPlans, setGymPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

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
      const data = await fetchGymPlans();
      if (data) {
        setGymPlans(data.data);
        setIsLoading(false);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }

  const columns = [
    { field: "title", headerName: "Title", width: isDesktop ? 150 : 120 },
    {
      field: "price",
      headerName: "Price",
      width: 90,
    },
    { field: "feature", headerName: "Feature", width: isDesktop ? 500 : 300 },
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
    const selectedRow = gymPlans.find((row) => row.id === id);
    setSelectedRowData(selectedRow);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteGymPlan(id);
      toast.success("Plan Deleted Successfully");
      fetchData();
    } catch (error) {
      console.error("Error deleting plan:", error);
      toast.error("Error deleting plan");
    }
  };

  const emptyRow = { id: -1, title: "Loading..." };

  const rowsWithEmptyRow = isLoading ? [emptyRow] : gymPlans;

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
        Gym Plans
      </h1>
      <button
        className={styles.btnAdd}
        style={{
          color: "white",
          marginBottom: "2rem",
          width: "9rem",
          borderRadius: "5px",
        }}
        onClick={() => {
          setIsEditing(false);
          setIsModalOpen(true);
        }}
      >
        Add Plan
      </button>
      {isModalOpen &&
        (isEditing ? (
          <GymPlansUpdateModal
            setIsModalOpen={setIsModalOpen}
            initialData={selectedRowData}
            fetchData={fetchData}
          />
        ) : (
          <GymPlansModal
            setIsModalOpen={setIsModalOpen}
            fetchData={fetchData}
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
