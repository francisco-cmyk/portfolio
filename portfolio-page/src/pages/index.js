import React, { useEffect }from "react"
import Navbar from './navbar.js'
import { FaCode, FaProjectDiagram, FaPaintBrush, FaFutbol } from "react-icons/fa"
import Aos from 'aos'
import "aos/dist/aos.css"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

function IndexPage() {

  useEffect(() => {
    Aos.init({ duration: 2000, easing: 'ease-in-out-sine' });
    Aos.refresh();
  }, []);
  return(
  <div className="index-container">
    <div className="index-navbar-container">
      <Navbar />
    </div>
    <div className="index-page-container">
      <div className="home-container">
        <div className="home-text-container">
          <h1>Hola! My name is Francisco.</h1>
          <h2>I am a jack of all trades:</h2>
          <div className="home-list-icon-container">
            <div className="home-text-list">
              <ul className="home-ul">
                <li data-aos="fade-left" data-aos-delay="500" className="home-li">Software Engineer</li>
                <li data-aos="fade-right" data-aos-delay="900" className="home-li">Sociologist</li>
                <li data-aos="fade-left" data-aos-delay="1300" className="home-li">Artist</li>
                <li data-aos="fade-right" data-aos-delay="1600" className="home-li">Football/Soccer enthusiast</li>
              </ul>
            </div>
            <div className="home-icon-container">
              <div className="home-icon-minis">
              <FaCode data-aos="fade-left" data-aos-delay="500" id="code" className="home-icons"></FaCode>
              </div>
              <div className="home-icon-minis">
              <FaProjectDiagram data-aos="fade-right" data-aos-delay="900" id="soc" className="home-icons"></FaProjectDiagram>
              </div>
              <div className="home-icon-minis">
              <FaPaintBrush data-aos="fade-left" data-aos-delay="1300" id="brush" className="home-icons"></FaPaintBrush>
              </div>
              <div className="home-icon-minis">
              <FaFutbol data-aos="fade-right" data-aos-delay="1600" id="soccer" className="home-icons"></FaFutbol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default IndexPage
