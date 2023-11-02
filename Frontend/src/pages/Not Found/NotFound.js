import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NotFound.module.css";

export default function NotFound(props) {
  return (
    <div className={style.NotFoundContainer}>
      <div className={style.NotFoundWrapper}>
        <div className={style.NotFoundText}>
          <h1>{"Couldn't Find The Dumbbell :("}</h1>
          <p>404</p>
        </div>
        <NavLink to={"/"} className={style.notFoundButton}>
          HomePage
        </NavLink>
      </div>
    </div>
  );
}
