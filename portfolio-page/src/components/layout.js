import React, { useEffect } from "react"
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import AboutMe from '../pages/about.js'
import Projects from '../pages/projects'
import Contact from '../pages/contact'
import Index from '../pages/index.js'

function Layout({ children }) {

  let Aos;

  useEffect(() => {
    const Aos = require('aos')
    Aos.init({ duration: 7000, easing: 'ease-in' });
    Aos.refresh();
  }, []);

  useEffect(() => {
    if (Aos) {
      Aos.refresh();
    }
  });
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div className="index-container">
        <Navbar />
        <section id="home">
          <Index />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
    </div>
  )
};

export default Layout