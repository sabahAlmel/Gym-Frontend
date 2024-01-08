import React, { useState } from "react";
import style from "./SideNav.module.css";
import dash from "../../../assets/icons/dashLogo.svg";
import contentLogo from "../../../assets/icons/ContentLogo.svg";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
export default function SideNav() {
  const [isSideItem, setIsSideItem] = useState(false);
  const [sideBar, setSideBar] = useState(true);
  function toggleItems() {
    setIsSideItem(!isSideItem);
  }

  return (
    <nav className={sideBar ? style.sideNav : style.collapsedSideNav}>
      <IoIosArrowBack
        className={sideBar ? style.expandArrow : style.rotateExpandArrow}
        onClick={() => setSideBar(!sideBar)}
      />
      <section className={style.dashboardSideNav}>
        <section className={style.dashNavContent}>
          <span className={style.dashLogoContainer}>
            <img src={dash} alt="Dashboard Logo" />
            Dashboard
          </span>
          <section className={style.navItemsWrapper}>
            <ul
              className={style.ContentManagementItemsWrapper}
              style={{ marginTop: 40, height: "600px" }}
            >
              <NavLink
                to="users"
                className={({ isActive }) =>
                  isActive
                    ? `${style.activeSideItem} ${style.sideBarItem}`
                    : `${style.sideBarItem} ${style.sideBarSubItem}`
                }
                activeclassname={style.activeSideItem}
              >Users</NavLink>
              <NavLink
                to="dashProducts"
                className={({ isActive }) =>
                  isActive
                    ? `${style.activeSideItem} ${style.sideBarItem}`
                    : `${style.sideBarItem} ${style.sideBarSubItem}`
                }
                activeclassname={style.activeSideItem}
              >
                Products
              </NavLink>

              <NavLink
                to="trainingDash"
                className={({ isActive }) =>
                  isActive
                    ? `${style.activeSideItem} ${style.sideBarItem}`
                    : `${style.sideBarItem} ${style.sideBarSubItem}`
                }
                activeclassname={style.activeSideItem}
              >
                Personnal Training
              </NavLink>



              <NavLink
                to="regimeDash"
                className={({ isActive }) =>
                  isActive
                    ? `${style.activeSideItem} ${style.sideBarItem}`
                    : `${style.sideBarItem} ${style.sideBarSubItem}`
                }
                activeclassname={style.activeSideItem}
              >
                Diet plan
              </NavLink>
              <NavLink
                to="dashGymPlans"
                exact={true}
                className={({ isActive }) =>
                  isActive
                    ? `${style.activeSideItem} ${style.sideBarItem}`
                    : `${style.sideBarItem} ${style.sideBarSubItem}`
                }
              >
                Gym Plans
              </NavLink>
            </ul>
            <NavLink
              to="/"
              exact={true}
              className={({ isActive }) =>
                isActive
                  ? `${style.activeSideItem} ${style.sideBarItem}`
                  : `${style.sideBarItem} ${style.sideBarSubItem}`
              }
            >
              Home Page
            </NavLink>
          </section>
        </section>
      </section>
    </nav>
  );
}
