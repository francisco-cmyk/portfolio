import React, { useEffect } from "react"
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import AboutMe from '../pages/about.js'
import Projects from '../pages/projects'
import Contact from '../pages/contact'
import Index from '../pages/index.js'
import { Helmet } from "react-helmet"

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
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no target-densitydpi=device-dpi"
        />
        <meta name="viewport" content="minimum-scale=1"/>
        <meta
          name="description"
          content="Welcome to my personal page! I am a software engineer who likes to create cool and interesting things"
        />
        <meta
          name="image"
          property="og:image"
          content="https://i.imgur.com/Gh58r7f.png"
        />
        <title>Francisco Vera Porfolio</title>
        <link rel="icon" href="https://i.pinimg.com/600x315/d2/a4/7b/d2a47bc6021db28067a973c9901d2b65.jpg" />
      </Helmet>
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