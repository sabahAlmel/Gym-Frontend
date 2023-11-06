import React, { useState } from "react";
import style from "./Dashboard.module.css";

import SideNav from "./SideNav/SideNav";
import { Outlet } from "react-router";
function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.dashboardWrapper}>
      <SideNav />
      <Outlet context={[isModalOpen, setIsModalOpen]} />
    </div>
  );
}

export default Dashboard;
