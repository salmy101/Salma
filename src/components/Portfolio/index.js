import './index.scss'
import React from 'react'
import Loader from 'react-loaders'
import portfolioData from '../../data/portfolio.json'

export default function Portfolio() {
  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((project, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={project.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{project.title}</p>
                <h4 className="description">{project.description}</h4>
                <h3 className="stack">TECH STACK: {project.stack}</h3>

                <button
                  className="btn"
                  onClick={() => window.open(project.url)}
                >
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">PORTFOLIO</h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="ball-scale-ripple-multiple"/>
    </>
  )
}
