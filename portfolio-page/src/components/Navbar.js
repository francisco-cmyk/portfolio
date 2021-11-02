import { Link } from "gatsby"
import React from "react"

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