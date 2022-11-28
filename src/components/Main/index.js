import React from 'react'
import "./index.scss"
import name from "../../assests/name.svg"
import role from "../../assests/role.svg"

import "animate.css"
import Loader from 'react-loaders'

const Main = () => {
  return (
    <>
    <div className="container home-page">
      <div className='banner'>
        
    <img src={name} alt="Your SVG" />
    <img src={role} alt="role SVG" />

      </div>

       
      {/* <div className="text-zone">
        <h2>Hi, im Salma</h2>
        <Loader type="pacman"/>

    </div> */}
    </div>
    <Loader type="ball-scale-ripple-multiple"/>
    </>
  )
}

export default Main;
