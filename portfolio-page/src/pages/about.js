import React, { useState } from "react"
import { FaUserCircle, FaFileCode } from "react-icons/fa"
import IconGrid from "../components/IconGrid.js"

function AboutMe() {
  const [showBtns, setBtns] = useState(true);
  const [showText, setText] = useState(true);
  const [showContent, setContent] = useState(false);

  const handleChange = () => {
    setBtns(!showBtns)
    setText(!showText)
    setContent(!showContent)
  }
  return (
    <div className="AboutMe-outter-container">
      <div className="AboutMe-inner-container">
          {showText ? <div className="AboutMe-content-one">
            <div className="AboutMe-inner-content">
            <div className="AboutMe-bio-container">
              <p className="AboutMe-bio">I am a full stack engineer from Providence, Rhode Island. I have a passion for creativity and problem solving. Although this shines through in the front-end, my skill set is diverse and applicable to back-end and fullstack.</p>
            </div>
            <div className="AboutMe-image-container">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="blank person" />
            </div>
            </div>
          </div> : null}
          {showContent ? <div className="AboutMe-content-two">
            <div className="AboutMe-techStack-inner">
              <div className="tech-stack">
                <div className="tech-title">My Current Tech Stack</div>
                <hr className="tech-line-break" />
                <div className='tech-list'>
                  <div className="tech-div">Javascript</div>
                  <div className="tech-div">React</div>
                  <div className="tech-div">HTML5 | CSS3 | Sass</div>
                  <div className="tech-div">Nodejs</div>
                  <div className="tech-div">Express</div>
                  <div className="tech-div">Postgresql | MongoDB</div>
                  <div className="tech-div">Graphql</div>
                </div>
            </div>
            <div className="AboutMe-IconGrind-container">
              <IconGrid />
            </div>
            </div>
          </div> : null}
      </div>
      <div className="dot-buttons">
        {showBtns ? <button onClick={event => handleChange()} className="dot">
          <FaUserCircle className="dots-icons" />
          <p>Switch</p>
        </button> : null}
        {!showBtns ? <button onClick={event => handleChange()} className="dot">
          <FaFileCode id="codeFile" className="dots-icons" />
          <p>Switch</p>
        </button> : null}
      </div>
    </div>
  )
}

export default AboutMe
