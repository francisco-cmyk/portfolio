import React from "react"
import Navbar from './navbar.js'
import Footer from './footer.js'
import Home from './home.js'

// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

function IndexPage() {


  return(
  <div className="index-container">
    <div className="index-navbar-container">
      <Navbar />
    </div>
    <div className="index-page-container">
      <Home />
    </div>
    <div className="index-footer-container">
      <Footer />
    </div>
  </div>
  )
};

export default IndexPage
