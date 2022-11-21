import React from "react";
import "./index.css";

function Nav() {
  return (
    <nav className="nav">
      <h2>Nav bar here</h2>

      <div className="links">
        <ul>
          <li to="/" className="nav-item">
            Home
          </li>
          <li to="/" className="nav-item">
            Skills
          </li>
          <li to="/" className="nav-item">
            Projects
          </li>
          <li to="/" className="nav-item">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
