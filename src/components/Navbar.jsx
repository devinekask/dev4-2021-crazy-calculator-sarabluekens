import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../consts/index";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className ={styles.nav}>
      <ul className ={styles.navList}>
        <li className ={styles.navItem}>
          <NavLink
            className ={styles.navLink}
            activeClassName ={styles.active}
            exact to={ROUTES.HOME}
          >
            Home
          </NavLink>
        </li>
        <li className ={styles.navItem}>
          <NavLink
           className ={styles.navLink}
           activeClassName ={styles.active}
            to={ROUTES.CALCULATOR}
            exact

          >
            Calculator
          </NavLink>
        </li>
        <li className ={styles.navItem}>
          
          <NavLink
           className ={styles.navLink}
           activeClassName ={styles.active}
           to={ROUTES.ALL}
          >
            All Answers
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
