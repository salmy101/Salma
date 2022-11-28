import React from "react";
import "./index.scss"
import Nav from "../NavBar/index";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="App">
      <Nav />
      <div className="page"> 
      <Outlet />

      </div>
    </div>
  )
}

export default Layout; 