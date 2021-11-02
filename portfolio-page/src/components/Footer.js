import React, { useEffect }from "react"
// import { Link } from "gatsby"
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa"
import Aos from 'aos'
import "aos/dist/aos.css"


function Footer() {
  useEffect(() => {
    Aos.init({ duration: 600, easing: 'ease-in' });
    Aos.refresh();
  }, []);
  return (
    <div className="Footer-outter-container">
      <div className="Footer-inner-container">
        <div className="Footer-icon-div">
          <a href="https://www.linkedin.com/in/fveranicola" target="_blank" rel="noopener noreferrer">
          <FaLinkedin data-aos="fade-in" data-aos-delay="600" id='linkedin' className="Footer-icon-logo"></FaLinkedin>
          </a>
        </div>
        <div className="Footer-icon-div" >
          <a href="https://github.com/francisco-cmyk" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare data-aos="fade-in" data-aos-delay="600" id="github" className="Footer-icon-logo"></FaGithubSquare>
          </a>
        </div>
        <div className="Footer-icon-div">
          <a href="mailto: fveranicola@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope data-aos="fade-in" data-aos-delay="600" id="email" className="Footer-icon-logo"></FaEnvelope>
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer