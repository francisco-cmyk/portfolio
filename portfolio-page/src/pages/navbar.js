import React from "react"
import { Link } from "gatsby"

// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

function Navbar() {
  return (
    <div className="navbar-outter-container">
    <div className="navbar-inner-container">
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/about">About Me</Link>
      <Link className="navbar-link" to="/projects">Projects</Link>
      <Link className="navbar-link" to="/contact">Contact</Link>
    </div>
  </div>
  )
};

export default Navbar