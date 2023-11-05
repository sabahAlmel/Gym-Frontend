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
            <li className={`${style.sideBarItem} ${style.sideBarSubItem}`}>
              <NavLink
                exact
                to='dashServices'
                className={style.sideBarSubItem}
                activeClassName={style.activeSideBar}
              >
                Services
              </NavLink>
            </li>
            <li className={`${style.sideBarItem} ${style.sideBarSubItem}`}>
              <NavLink
                to='dashProducts'
                className={style.sideBarSubItem}
                activeClassName={style.activeSideItem}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </section>
      </section>
    </div>
  )
}
