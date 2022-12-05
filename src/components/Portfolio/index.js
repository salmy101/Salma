import './index.scss'
import React from 'react'
import Loader from 'react-loaders'
import portfolioData from "../../data/portfolio.json"

export default function Portfolio() {

  const renderPortfolio = () => {
    
  }
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">PORTFOLIO</h1>

        {/* <div>{renderPortfolio()}</div> */}
      </div>
      {/* <Loader type="ball-scale-ripple-multiple"/> */}
    </>
  )
}
