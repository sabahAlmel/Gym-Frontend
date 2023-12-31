import React, { useState } from "react";
import style from "./Dashboard.module.css";
import SideNav from "./SideNav/SideNav";
import { Outlet } from "react-router";
import icon from "../../assets/icons/dashLogo.svg";
import { Helmet } from "react-helmet-async";
import { ProductsModal } from "../../components/Product/ProductsModal/ProductsModal";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.dashboardWrapper}>
      <Helmet>
        <title> Dashboard</title>

        <link rel="shortcut icon" href={icon} type="image/x-icon" />
      </Helmet>
      {isModalOpen ? <ProductsModal setIsModalOpen={setIsModalOpen} /> : ""}
      <SideNav />
      <section className={style.dashContentContainer}>
        <Outlet
          context={[isModalOpen, setIsModalOpen]}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </section>
    </div>
  );
}

export default Dashboard;
