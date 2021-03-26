import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../consts/index";
// import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul >
      <li>
          <NavLink
            exact to={ROUTES.HOME}

          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.CALCULATOR}
            exact

          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
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
