import * as React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Cards from '../components/Cards';
import storage from '../components/projectsData';

function Projects() {
  return (
    <div className="Projects-outter-container">
       <h2 className="projects-title">Portfolio</h2>
      <div className="Projects-inner-container">
     <Box>
        <Grid container spacing={5}>
          {storage.map((project, index) => (
            <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={4}>
              <Cards id={index} project={project}/>
            </Grid>
          ))}
        </Grid>
      </Box>
      </div>
    </div>
  )
}

export default Projects


// <div className="projects-grid-container">
// <button onClick={event =>  window.open('https://github.com/Pinch-Co/Pinch', '_blank')} className="projects-grid-box">
//   <div id="pinch" className="grid-box-pic">
//   </div>
//   <div className="grid-box-text">
//     <p className="grid-box-title">Pinch</p>
//     <p className="grid-box-bio">Personal Finance Web App</p>
//   </div>
// </button>
// <button onClick={event =>  window.open('https://munchhunt.netlify.app/', '_blank')} className="projects-grid-box">
//   <div id="munchHunt" className="grid-box-pic">
//   </div>
//   <div className="grid-box-text">
//     <p className="grid-box-title">Munch Hunt</p>
//     <p className="grid-box-bio">Restaurant Picker Web App</p>
//   </div>
// </button>
// <button onClick={event =>  window.open('https://github.com/francisco-cmyk/Palisade-Fashion', '_blank')} className="projects-grid-box">
//   <div id="palisade" className="grid-box-pic">
//   </div>
//   <div className="grid-box-text">
//     <p className="grid-box-title">Palisade Fashion</p>
//     <p className="grid-box-bio">Ecommerce Single Page App</p>
//   </div>
// </button>
// <button onClick={event =>  window.open('https://github.com/Team-Caliche', '_blank')} className="projects-grid-box">
//   <div id="caliche" className="grid-box-pic">
//   </div>
//   <div className="grid-box-text">
//     <p className="grid-box-title">Caliche System</p>
//     <p className="grid-box-bio">System Design</p>
//   </div>
// </button>
// <button onClick={event =>  window.open('https://github.com/Kauri-2021/Surfinch', '_blank')} className="projects-grid-box">
//   <div id="Surfinch" className="grid-box-pic">
//   </div>
//   <div className="grid-box-text">
//     <p className="grid-box-title">Surfinch</p>
//     <p className="grid-box-bio">Bird Watcher Web App</p>
//   </div>
// </button>
// <button onClick={event =>  window.open('https://github.com/francisco-cmyk/Rubicon-Football', '_blank')} className="projects-grid-box">
//   <div id="Rubicon" className="grid-box-pic" />
//   <div className="grid-box-text">
//     <p className="grid-box-title">Rubicon Football</p>
//     <p className="grid-box-bio">Side Project: Sports App</p>
//   </div>
// </button>
// </div>