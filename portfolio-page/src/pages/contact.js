import * as React from "react"
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
  return (
    <div className="Contact-outter-container">
      <div className="Contact-inner-container">
        <div className="contact-title">
          Want to chat? Feel free to reach out!
        </div>
        <ul className="contact-ul">
          <li className="contact-li"><FaEnvelope className="contact-icons" /><a className="anchor-tag" href="mailto: fveranicola@gmail.com" target="_blank" rel="noopener noreferrer">Send me Mail</a></li>
          <li className="contact-li"><FaLinkedin className="contact-icons" />
            <a className="anchor-tag" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fveranicola">Connect with me on LinkedIn</a></li>
          <li className="contact-li"><FaGithubSquare className="contact-icons" /><a target="_blank" rel="noopener noreferrer" className="anchor-tag" href="https://github.com/francisco-cmyk">Checkout my Github</a></li>
          <li className="contact-li"><FaFile className="contact-icons" />
          <a className="anchor-tag" href={data.allFile.edges[0].node.publicURL} download rel="noopener noreferrer" target='_blank'>Download my resume</a></li>
        </ul>
      </div>
      <div className="footer-text-div">
        <p className="footer-text-p">By: Francisco Vera Nicola | {moment().format('YYYY')} | Built with passion.</p>
      </div>
    </div>
  )
}

export default Contact