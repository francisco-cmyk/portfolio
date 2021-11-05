import React from "react"
import { FaCode, FaProjectDiagram, FaPaintBrush, FaFutbol } from "react-icons/fa"
// import "aos/dist/aos.css"

function Index({ children }) {
  return (
      <div className="home-container">
        <div className="home-text-container">
          <h1 className="home-title">Hola! My name is Francisco.</h1>
          <h2 className="home-title-sub">I am a jack of all trades:</h2>
          <div className="home-list-icon-container">
            <div className="home-text-list">
              <ul className="home-ul">
                <li data-aos="fade-left" data-aos-delay="700" className="home-li">Software Engineer</li>
                <li data-aos="fade-right" data-aos-delay="1200" className="home-li">Sociologist</li>
                <li data-aos="fade-left" data-aos-delay="1700" className="home-li">Artist</li>
                <li data-aos="fade-right" data-aos-delay="2400" className="home-li">Football/Soccer enthusiast</li>
              </ul>
            </div>
            <div className="home-icon-container">
              <div className="home-icon-minis">
                <FaCode data-aos="fade-left" data-aos-delay="700" id="code" className="home-icons"></FaCode>
              </div>
              <div className="home-icon-minis">
                <FaProjectDiagram data-aos="fade-right" data-aos-delay="1200" id="soc" className="home-icons"></FaProjectDiagram>
              </div>
              <div className="home-icon-minis">
                <FaPaintBrush data-aos="fade-left" data-aos-delay="1700" id="brush" className="home-icons"></FaPaintBrush>
              </div>
              <div className="home-icon-minis">
                <FaFutbol data-aos="fade-right" data-aos-delay="2400" id="soccer" className="home-icons"></FaFutbol>
              </div> 
            </div>
          </div>
        </div>
      </div>
  )
};

export default Index