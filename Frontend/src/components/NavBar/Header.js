import React, { useState, useEffect, useContext } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../userContext/userContext";
import { fetchUser } from "../../db/authData";

const Header = () => {
  const { user } = useContext(UserContext);

  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  const location = useLocation();

  useEffect(() => {
    // Close the mobile menu when a NavLink is clicked
    setNav(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
      if (window.innerWidth > 720) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbar}>
        <img src={logo} alt="/" />
        <nav>
          <ul
            className={
              nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
            }
          >
            <li>
              <NavLink
                to="/"
                activeclassname={styles.activeLink}
                className={`${styles.menuItem} ${
                  location.pathname === "/" ? styles.activeNavItem : ""
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                activeclassname={styles.activeLink}
                className={`${styles.menuItem} ${
                  location.pathname === "/services" ? styles.activeNavItem : ""
                }`}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                activeclassname={styles.activeLink}
                className={`${styles.menuItem} ${
                  location.pathname === "/portfolio" ? styles.activeNavItem : ""
                }`}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeclassname={styles.activeLink}
                className={`${styles.menuItem} ${
                  location.pathname === "/about" ? styles.activeNavItem : ""
                }`}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeclassname={styles.activeLink}
                className={`${styles.menuItem} ${
                  location.pathname === "/contact" ? styles.activeNavItem : ""
                }`}
              >
                Contact Us
              </NavLink>
            </li>
            {user ? (
              user.role === "admin" ? (
                <li>
                  <NavLink
                    to="/dash"
                    activeclassname={styles.activeLink}
                    className={`${styles.menuItem} ${
                      location.pathname === "/dash" ? styles.activeNavItem : ""
                    }`}
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : null
            ) : null}
          </ul>
        </nav>
        <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </header>
  );
};
export default Header;
