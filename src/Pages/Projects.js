import React from 'react';
import {Link} from "react-router-dom";
import carti from "../images/carti.png";
import gen from "../images/passwordgen.png";
import "./Projects.css";

function Projects() {
  return (
    <div className Project-container>
    <div>Projects</div>
    <div className='player-wrapper'>
      <div className='player-container'>
    <a href="https://github.com/00julianthompson/ReactBeats" target="_blank"><img src= {carti}/></a>
    </div>
      <div className='generator-container'>
    <a href="https://github.com/00julianthompson/The-Generator" target="_blank"><img src= {gen}/></a>
    </div>

    </div>
    </div>
  )
}

export default Projects