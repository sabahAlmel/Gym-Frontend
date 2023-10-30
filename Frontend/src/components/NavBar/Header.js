import React, { useState,useEffect} from "react";
import styles from "./Header.module.css";
import logo from '../../assets/images/logo/logo.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { NavLink , useLocation} from "react-router-dom";

const Header = () => {
  const [nav, setnav] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Close the mobile menu when a NavLink is clicked
    setnav(false);
  }, [location]);



  return (
    <header className={styles.navbar}>
      <img src={logo} alt="/" />
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li><NavLink exact to='/' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/' ? styles.activeNavItem : ''}`}>Home</NavLink></li>
          <li><NavLink to='/services' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/services' ? styles.activeNavItem : ''}`}>Services</NavLink></li>
          <li><NavLink to='/portfolio' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/portfolio' ? styles.activeNavItem : ''}`}>Portfolio</NavLink></li>
          <li><NavLink to='/about' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/about' ? styles.activeNavItem : ''}`}>About Us</NavLink></li>
          <li><NavLink to='/contact' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/contact' ? styles.activeNavItem : ''}`}>Contact Us</NavLink></li>
        </ul>

      </nav>
      <div onClick={() => setnav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

      </div>
    </header>
  )
};
export default Header