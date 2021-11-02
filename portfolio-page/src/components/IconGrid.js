import React from "react"
import { FaJsSquare,  FaReact, FaNode, FaDatabase, FaSass, FaHtml5 } from "react-icons/fa"
function IconGrid() {
  return (
    <div className="IconGrid-container">
      <div className="grid-div">
         <FaJsSquare className="grid-icon" />
      </div>
      <div className="grid-div">
      <FaReact className="grid-icon"/>
      </div>
      <div className="grid-div">
      <FaNode className="grid-icon"/>
      </div>
      <div className="grid-div">
      <FaDatabase className="grid-icon"/>
      </div>
      <div className="grid-div">
      <FaSass className="grid-icon"/>
      </div>
      <div className="grid-div">
      <FaHtml5 className="grid-icon"/>
      </div>
    </div>
  )
};

export default IconGrid