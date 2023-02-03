import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import Navbar from '../Nav/Navbar'
import "./LayoutPage.css";

function LayoutPage() {
  return (
    <div className='Page-container'>
     <Navbar/>
     <Outlet/>
    </div>
  )
}

export default LayoutPage