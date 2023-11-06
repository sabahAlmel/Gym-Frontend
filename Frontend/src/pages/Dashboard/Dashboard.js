import React, { useState } from "react";
import style from "./Dashboard.module.css";

import SideNav from "./SideNav/SideNav";
import { Outlet } from "react-router";
import { ProductsModal } from "../../components/Product/ProductsModal/ProductsModal";
function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.dashboardWrapper}>
      {isModalOpen ? <ProductsModal setIsModalOpen={setIsModalOpen} /> : ''}
      <SideNav />
      <Outlet context={[isModalOpen, setIsModalOpen]} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Dashboard;
