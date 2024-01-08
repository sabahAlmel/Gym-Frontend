import React, { useState } from "react";
import style from "./SideBar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import dash from "../../../assets/icons/dashLogo.svg";
import { IoIosArrowForward } from "react-icons/io";

const SideBar = () => {
  const [sidePanelWidth, setSidePanelWidth] = useState(0);
  const location = useLocation();

  const openNav = () => {
    setSidePanelWidth(280);
  };

  const closeNav = () => {
    setSidePanelWidth(0);
  };

  return (
    <>
      <div
        id="mySidepanel"
        className={style.sidepanel}
        style={{ width: sidePanelWidth + "px" }}
      >
        <div className={style.sideBarContainer}>
          <span className={style.dashLogoContainer}>
            <img src={dash} alt="Dashboard Logo" />
            Dashboard
          </span>
          <NavLink className={style.closebtn} onClick={closeNav}>
            &times;
          </NavLink>
        </div>
        <NavLink
          to="users"
          className={({ isActive }) =>
            isActive ? `${style.activeSideItem} ` : ``
          }
          onClick={closeNav}
        >
          Users
        </NavLink>
        <NavLink
          to="dashProducts"
          className={({ isActive }) =>
            isActive
              ? `${style.activeSideItem} `
              : `${
                  location.pathname === "/dash"
                    ? style.activeSideItem
                    : ({ isActive }) =>
                        isActive ? `${style.activeSideItem} ` : ``
                } 
          `
          }
          activeclassname={style.activeSideItem}
          onClick={closeNav}
        >
          Products
        </NavLink>
        
        <NavLink
          to="trainingDash"
          className={({ isActive }) =>
            isActive ? `${style.activeSideItem} ` : ``
          }
          onClick={closeNav}
        >
          Personnal Training
        </NavLink>
        <NavLink
          to="dashGymPlans"
          className={({ isActive }) =>
            isActive ? `${style.activeSideItem} ` : ``
          }
          onClick={closeNav}
        >
          Gym Plans
        </NavLink>
        <NavLink
          to="regimeDash"
          className={({ isActive }) =>
            isActive ? `${style.activeSideItem} ` : ``
          }
          onClick={closeNav}
        >
          Diet plan
        </NavLink>
        <NavLink
          to="/"
          style={{ position: "absolute", bottom: 20 }}
          className={({ isActive }) =>
            isActive ? `${style.activeSideItem} ` : ``
          }
        >
          Home Page
        </NavLink>
      </div>

      <button className={style.openbtn} onClick={openNav}>
        <IoIosArrowForward />
      </button>
    </>
  );
};

export default SideBar;
