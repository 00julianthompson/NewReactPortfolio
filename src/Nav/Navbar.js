import React from 'react'
import { Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import armyboy from "../images/armyboylogo.png";

function Navbar() {
  return (
    <nav className='Nav-container'>
        <Link className = 'Link' to = '/'>Home</Link>
        <Link className = 'Link' to = './Projects'>Projects</Link>
        <Link className = 'Link' to = './Skills'>Skills</Link>
        <div className='army-logo'>
       <Link to="/"><img src= {armyboy} id="armyLogo" alt= "logo"></img></Link>
        </div>

    </nav>
  )
}

export default Navbar