import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import me from "../images/smileJulian.jpg";


function Home() {
  return (
    <section className='Home-page'>
    <div className='Home-nav'>
    <div className='project-link'>
   {/* <button><Link to= "/Projects" className='btn'>Projects</Link></button> */}
   </div>
   </div>
      
    <div className="Home-wrapper">
    <div className="selfie-wrapper">
      <div className='aboutMe1'>
        <p>I'm a guy named Julian that's been on this earth for nearly
      three decades. Three years ago I found a new passion for software dev which shouldn't have
      been surprising considering that I love creating products.
      </p> 
      </div>
      <div className='selfie-container'>
    <img src = {me} alt = "Picture of Me" />
    </div>
    <div className='aboutMe2'>
      <p>
        I'm from Lillington NC but I currently reside in Concord NC.
        Music has always been my passion and I'm proud to say I've been producing
        music for over a decade now. I write and produce music for different artist as well.
        I'm planning to create apps that will help musicians in their creative process in the
        near future.

      </p>
      </div>
    </div>
    </div>

    
    </section>
  )
}

export default Home