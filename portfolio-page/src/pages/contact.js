import React from "react"
import moment from 'moment'
import { FaLinkedin, FaGithubSquare, FaEnvelope, FaFile } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

function Contact({ children }) {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`)
const downloadFile = () => {
  console.log('download file');
  window.open(data.allFile.edges[0].node.publicURL, "_blank")
}
const openEmail = () => {
  window.location.href = "mailto: fveranicola@gmail.com"
}
  return (
    <div className="Contact-outter-container">
      <div className="Contact-inner-container">
        <div className="contact-title">
          Want to chat? Feel free to reach out!
        </div>
        <div className="contact-div">
          <button onClick={openEmail} className="contact-button"><FaEnvelope className="contact-icons" /><a className="anchor-tag" href="mailto: fveranicola@gmail.com" target="_blank" rel="noopener noreferrer">Send me Mail</a></button>
          <button onClick={event =>  window.open('https://www.linkedin.com/in/fveranicola', '_blank')} className="contact-button"><FaLinkedin className="contact-icons" />
            <a className="anchor-tag" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fveranicola">Connect on LinkedIn</a></button>
          <button onClick={event =>  window.open('https://github.com/francisco-cmyk', '_blank')}  className="contact-button"><FaGithubSquare className="contact-icons" /><a target="_blank" rel="noopener noreferrer" className="anchor-tag" href="https://github.com/francisco-cmyk">Checkout my Github</a></button>
          <button onClick={downloadFile} className="contact-button"><FaFile className="contact-icons" />
            <a className="anchor-tag" href={data.allFile.edges[0].node.publicURL} download rel="noopener noreferrer" target='_blank'>Download my resume</a></button>
        </div>
      </div>
      <div className="footer-text-div">
        <p className="footer-text-p">By: Francisco Vera Nicola | {moment().format('YYYY')} | Built with passion.</p>
      </div>
    </div>
  )
}

export default Contact