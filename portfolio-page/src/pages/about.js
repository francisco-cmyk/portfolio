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
        <div className="AboutMe-text-box">
          {showText ? <p className="AboutMe-bio">I am a full stack engineer from Providence, Rhode Island. I have a passion for creativity and problem solving. Although this shines through in the front-end, my skill set is diverse and applicable to back-end and fullstack.</p> : null}
          {!showText ? <div className="tech-stack">
            <h4 className="tech-title">My Current Tech Stack</h4>
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
          </div> : null}
        </div>
        <div className="AboutMe-content-box">
          {showContent ? <IconGrid /> : null}
          {!showContent ? <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="blank person" /> : null}
        </div>
      </div>
      <div className="dot-buttons">
        {showBtns ? <button onClick={event => handleChange()} className="dot">
          <FaUserCircle className="dots-icons" />
        </button> : null}
        {!showBtns ? <button onClick={event => handleChange()} className="dot">
          <FaFileCode className="dots-icons" />
        </button> : null}
      </div>
    </div>
  )
}

export default AboutMe
