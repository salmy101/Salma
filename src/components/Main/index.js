import React from 'react'
import "./index.scss"
import name from "../../assests/name.svg"
import "animate.css"
import Loader from 'react-loaders'

const Main = () => {
  return (
    <div className="container home-page">
        <h1 className='logo'>
    <img src={name} alt="Your SVG" />
        </h1>
      <div className="text-zone">
        <p>LOREM IPPSUM</p>
        <Loader type="pacman"/>

    </div>
    </div>
  )
}

export default Main;
