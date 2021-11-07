import { Link } from "gatsby"
import React, { useState } from "react";
// import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [show, setShow] = useState(false);
  const mobileNav = () => {
    setShow(!show);
  }
  return (
    <div className="navbar-outter-container">
      <div className="mobile-navbar-icon">
        <GiHamburgerMenu className="mobile-icon" onClick={() => mobileNav()} />
        {show ? (<div className="mobile-nav-links-container">
          <Link onClick={() => mobileNav()} className="mobile-link" to="/#home">Home</Link>
          <Link onClick={() => mobileNav()} className="mobile-link" to="/#about">About Me</Link>
          <Link onClick={() => mobileNav()} className="mobile-link" to="/#projects">Projects</Link>
          <Link onClick={() => mobileNav()} className="mobile-link" to="/#contact">Contact</Link>
        </div>) : null}
      </div>
      <div className="navbar-inner-container">
        <Link className="navbar-link" to="/#home">Home</Link>
        <Link className="navbar-link" to="/#about">About Me</Link>
        <Link className="navbar-link" to="/#projects">Projects</Link>
        <Link className="navbar-link" to="/#contact">Contact</Link>
      </div>
    </div>
  )
};

export default Navbar