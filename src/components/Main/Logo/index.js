import React from 'react'
import "./index.scss"
import role from '../../../assests/role.svg'


import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'


export default function Logo() {
  return (
    <div className="text-zone outline">
          {/* <h1>Hi, im Salma</h1> */}
          <img src={role} alt="role SVG" />

          
        </div>
  )
}
