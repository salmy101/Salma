import React from 'react'
import './index.scss'
import name from '../../assests/name.svg'
import role from '../../assests/role.svg'
import Logo from "./Logo/index"

import 'animate.css'
import Loader from 'react-loaders'
const images = [{ img: role }, { img: name }]

const Main = () => {
  return (
    <>
      <div className="container home-page">
        <div className="banner">
          {/* <img src={name} alt="Your SVG" className='rotating'/>
    {images.map((image) => {
          <img src={image.img} alt="role SVG" />
    })} */}
          <img src={name} alt="role SVG" />

          <img src={role} alt="role SVG" />
        </div>
        <Logo />
        
        
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Main
