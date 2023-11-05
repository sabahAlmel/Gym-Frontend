import React, { useState } from 'react'
import style from './SideNav.module.css'
import dash from "../../../assets/icons/dashLogo.svg";
import contentLogo from "../../../assets/icons/ContentLogo.svg";
import { NavLink } from "react-router-dom";

export default function SideNav() {
    const [isSideItem, setIsSideItem] = useState(false);
    function toggleItems() {
      setIsSideItem(!isSideItem);
    }

  return (
    <div>
        <section className={style.dashboardSideNav}>
        <span className={style.dashLogoContainer}>
          <img src={dash} alt="Dashboard Logo" />
          Dashboard
        </span>
        <section className={style.navItemsWrapper}>
          <span className={style.sideBarItem} onClick={toggleItems}>
            <img src={contentLogo} alt="Content management icon" /> Content
            Management
          </span>

          <ul
            className={style.ContentManagementItemsWrapper}
            style={{ height: isSideItem ? "105px" : "0" }}
          >
          
              <NavLink
                exact
                to='dashServices'
                className={`${style.sideBarItem} ${style.sideBarSubItem}`}
                activeClassName={style.activeSideBar}
              >
                Services
              </NavLink>
          
              <NavLink
                to='dashProducts'
                className={`${style.sideBarItem} ${style.sideBarSubItem}`}
                activeClassName={style.activeSideItem}
              >
                Products
              </NavLink>
          </ul>
        </section>
      </section>
    </div>
  )
}
