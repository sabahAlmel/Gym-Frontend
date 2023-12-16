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
            <span className={style.sideBarItem} onClick={toggleItems}>
              <img src={contentLogo} alt="Content management icon" /> Content
              Management{" "}
              <IoIosArrowBack
                className={
                  isSideItem
                    ? style.rotateSideBarItemArrow
                    : style.sideBarItemArrow
                }
              />
            </span>

            <ul
              className={style.ContentManagementItemsWrapper}
              style={{ height: isSideItem ? "800px" : "0" }}
            >
              <NavLink
                to="dashServices"
                exact={true}
                className={({ isActive }) =>
                  isActive
                    ? `${style.activeSideItem} ${style.sideBarItem}`
                    : `${style.sideBarItem} ${style.sideBarSubItem}`
                }
                // activeclassname={style.activeLink}
              >
                Services
              </NavLink>

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
          </section>
        </section>
      </section>
    </nav>
  );
}
