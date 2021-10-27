import * as React from "react"
import Navbar from './navbar.js'
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

const IndexPage = () => (
  <div className="index-container">
    <div className="index-navbar-container">
    <Navbar />
    </div>
    <div className="index-page-container">
      <div className="home-container">
        <div className="home-text-container">
          <h2>Buenas! My name is Francisco.</h2>
          <h3>I am a jack of all trades:</h3>
          <div className="home-text-list">
            <ul className="home-ul">
              <li>Software Engineer</li>
              <li>Sociologist</li>
              <li>Artist</li>
              <li>Football/Soccer enthusiast</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
