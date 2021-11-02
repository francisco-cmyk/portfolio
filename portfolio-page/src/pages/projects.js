import * as React from "react"

function Projects() {
  return (
    <div className="Projects-outter-container">
       <h2 className="projects-title">Portfolio</h2>
      <div className="Projects-inner-container">
        <div className="projects-grid-container">
        <div className="projects-grid-box">
          <div className="grid-box-pic">
            Picture
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Pinch</p>
            <p className="grid-box-bio">Personal Finance Web App</p>
          </div>
        </div>
        <div className="projects-grid-box">
          <div className="grid-box-pic">
            Picture
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Palisade Fashion</p>
            <p className="grid-box-bio">Ecommerce Single Page App</p>
          </div>
        </div>
        <div className="projects-grid-box">
          <div className="grid-box-pic">
            Picture
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Caliche System</p>
            <p className="grid-box-bio">System Design</p>
          </div>
        </div>
        <div className="projects-grid-box">
          <div className="grid-box-pic">
            Picture
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Surfinch</p>
            <p className="grid-box-bio">Bird Watcher Web App</p>
          </div>
        </div>
        <div className="projects-grid-box">
          <div className="grid-box-pic">
            Picture
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Rubicon Football</p>
            <p className="grid-box-bio">Side Project: Sports App</p>
          </div>
        </div>
        <div className="projects-grid-box">
          <div className="grid-box-pic">
            Picture
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Coming Soon...</p>
            <p className="grid-box-bio">Should be Fun!</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects