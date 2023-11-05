import React, { useState } from "react";
import style from "./Dashboard.module.css";

import SideNav from "./SideNav/SideNav";
import { Outlet, Route, Routes } from "react-router";
import ServicesPageServices from "../../layouts/PersonnalTraining";
function Dashboard() {
  


  return (
    <div className={style.dashboardWrapper}>
      <SideNav />
      <Outlet />
    </div>
  );
}

export default Dashboard;
