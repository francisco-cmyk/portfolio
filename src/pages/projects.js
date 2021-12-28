import * as React from "react"

function Projects() {
  return (
    <div className="Projects-outter-container">
       <h2 className="projects-title">Portfolio</h2>
      <div className="Projects-inner-container">
        <div className="projects-grid-container">
        <button onClick={event =>  window.open('https://github.com/Pinch-Co/Pinch', '_blank')} className="projects-grid-box">
          <div id="pinch" className="grid-box-pic">
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Pinch</p>
            <p className="grid-box-bio">Personal Finance Web App</p>
          </div>
        </button>
        <button onClick={event =>  window.open('https://munchhunt.netlify.app/', '_blank')} className="projects-grid-box">
          <div id="munchHunt" className="grid-box-pic">
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Munch Hunt</p>
            <p className="grid-box-bio">Restaurant Picker (Web App)</p>
          </div>
        </button>
        <button onClick={event =>  window.open('https://github.com/francisco-cmyk/Palisade-Fashion', '_blank')} className="projects-grid-box">
          <div id="palisade" className="grid-box-pic">
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Palisade Fashion</p>
            <p className="grid-box-bio">Ecommerce Single Page App</p>
          </div>
        </button>
        <button onClick={event =>  window.open('https://github.com/Team-Caliche', '_blank')} className="projects-grid-box">
          <div id="caliche" className="grid-box-pic">
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Caliche System</p>
            <p className="grid-box-bio">System Design</p>
          </div>
        </button>
        <button onClick={event =>  window.open('https://github.com/Kauri-2021/Surfinch', '_blank')} className="projects-grid-box">
          <div id="Surfinch" className="grid-box-pic">
          </div>
          <div className="grid-box-text">
            <p className="grid-box-title">Surfinch</p>
            <p className="grid-box-bio">Bird Watcher Web App</p>
          </div>
        </button>
        <button onClick={event =>  window.open('https://github.com/francisco-cmyk/Rubicon-Football', '_blank')} className="projects-grid-box">
          <div id="Rubicon" className="grid-box-pic" />
          <div className="grid-box-text">
            <p className="grid-box-title">Rubicon Football</p>
            <p className="grid-box-bio">Side Project: Sports App</p>
          </div>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Projects