import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";


const Nav = () => {
  return (
    <div className="nav-bar">
            <h1>SALMA</h1>
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
        >
          {/* <FontAwesomeIcon icon={faHome} color="#4d4d43"  />  */}
          Home
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          {/* <FontAwesomeIcon icon={faUser} color="#4d4d43"  />  */}
          About

        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          {/* <FontAwesomeIcon icon={faSuitcase} color="#4d4d43"  />  */}
          Portfolio

        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          {/* <FontAwesomeIcon icon={faEnvelope} color="#4d4d43"  />  */}
          Contact

        </NavLink>
      </nav>
    </div>
  );
}

export default Nav; 