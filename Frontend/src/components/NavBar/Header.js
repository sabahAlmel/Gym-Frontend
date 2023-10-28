import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from '../../assets/images/logo/logo.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { NavLink } from "react-router-dom";

const Header = () => {
  const [nav, setnav] = useState(false);



  return (
    <header className={styles.navbar}>
      <img src={logo} alt="/" />
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li><NavLink exact to='/' activeClassName={styles.activeLink}>Home</NavLink></li>
          <li><NavLink to='/services' activeClassName={styles.activeLink}>Services</NavLink></li>
          <li><NavLink to='/portfolio' activeClassName={styles.activeLink}>Portfolio</NavLink></li>
          <li><NavLink to='/about' activeClassName={styles.activeLink}>About Us</NavLink></li>
          <li><NavLink to='/contact' activeClassName={styles.activeLink}>Contact Us</NavLink></li>
        </ul>

      </nav>
      <div onClick={() => setnav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

      </div>
    </header>
  )
};
export default Header