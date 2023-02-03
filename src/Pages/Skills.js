import React from 'react'
import {Link} from "react-router-dom"
import { FaReact  } from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import { DiCss3 } from 'react-icons/di';
import { TiHtml5 } from 'react-icons/ti';
import { SiJquery } from 'react-icons/si';
import "./Skills.css";

function Skills() {
  return (
    <div className='Skills-container'>
   
    <div className='skill-wrapper'>
      <div className='skill-center'>

    <FaReact className='icons react'/>
    <TbBrandJavascript className='icons javascript'/>
    <DiCss3 className='icons cssicon'/>
    <TiHtml5 className='icons htmlicon'/>
    <SiJquery className='icons jquery'/>
    </div>
    </div>

    </div>
  )
}

export default Skills
