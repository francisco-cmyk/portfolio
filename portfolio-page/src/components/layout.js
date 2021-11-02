import React from "react"
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Layout({ children }) {
  return (
    <div className="index-container">
      <div className="index-navbar-container">
        <Navbar />
      </div>
      <div className="index-page-container">
        { children }
      </div>
      <div className="index-footer-container">
        <Footer />
      </div>
    </div>
  )
};

export default Layout