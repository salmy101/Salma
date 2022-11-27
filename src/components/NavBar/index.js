import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <div className="nav-bar">
            <h1>NAV BAR</h1>

      {/* <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
        >
          HOME
        </NavLink>
      </nav> */}
    </div>
  );
}

export default Nav; 