import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Nav.css";
import { IoStatsChart } from "react-icons/io5";
import { PiBag } from "react-icons/pi";
import { TiStarOutline } from "react-icons/ti";
import { IoDocumentOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";






export default function Nav() {
  return (
   <>
   <div   className='Nav1'>
   <ul >
             <li><NavLink to="/"><IoStatsChart /> &nbsp; Dashboard</NavLink></li>
             <li><NavLink to="/fulltimejobs"> <PiBag /> &nbsp; Fulltimes Jobs</NavLink></li>
             <li><NavLink to="/internship"><PiBag /> &nbsp; Internships</NavLink></li>
             <li><NavLink to="/otherjobs"><PiBag /> &nbsp; Others Jobs</NavLink></li>
             <li className='blue'><NavLink to="/guaranteedJob"> <TiStarOutline /> &nbsp; Guaranteed Job</NavLink></li>
             <li><NavLink to="/appled"><IoDocumentOutline /> &nbsp; Applied</NavLink></li>
             <li><NavLink to="/message"><FiMessageSquare /> &nbsp; Message</NavLink></li>

             {/* <li><NavLink to="/coin"> <img src="../public/coin.svg" /> &nbsp; Refer and Earn <br /> upto ₹1 Lac</NavLink></li> */}

     </ul>




   </div>
    
   
   </>
  )
}
