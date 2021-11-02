import React, { useEffect } from "react"
import { FaCode, FaProjectDiagram, FaPaintBrush, FaFutbol } from "react-icons/fa"
import Aos from 'aos'
import "aos/dist/aos.css"

function Index({ children }) {
  useEffect(() => {
    Aos.init({ duration: 7000, easing: 'ease-in' });
    Aos.refresh();
  }, []);
  return (
      <div className="home-container">
        <div className="home-text-container">
          <h1 className="home-title">Hola! My name is Francisco.</h1>
          <h2 className="home-title-sub">I am a jack of all trades:</h2>
          <div className="home-list-icon-container">
            <div className="home-text-list">
              <ul className="home-ul">
                <li data-aos="fade-left" data-aos-delay="500" className="home-li">Software Engineer</li>
                <li data-aos="fade-right" data-aos-delay="1200" className="home-li">Sociologist</li>
                <li data-aos="fade-left" data-aos-delay="1700" className="home-li">Artist</li>
                <li data-aos="fade-right" data-aos-delay="2400" className="home-li">Football/Soccer enthusiast</li>
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
  )
};

export default Index