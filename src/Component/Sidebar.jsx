import React from 'react'
import { Link } from 'react-router-dom'
import {FaTruckMoving , FaChalkboardTeacher} from 'react-icons/fa'


export default function Sidebar({toggle}) {
  return (
    <>
      {/* 
      <!-- ======= Sidebar ======= --> */}
      {/* { toggle && ( */}

      
        
      <aside id="sidebar" className="sidebar " >
      
      {/* <aside id="sidebar" class={open?"sidebar collapse":"sidebar"} > */}
      
       <ul className="sidebar-nav" id="sidebar-nav">

       <li className="nav-item">
         <Link className="nav-link " to="/admin-basic-info">
           <i><FaTruckMoving/></i>
           <span>Supplier Management</span>
         </Link>
       </li>


       <li className="nav-item">
         <Link className="nav-link " to='/admin-master-page'>
           <i><FaChalkboardTeacher/></i>
           <span>Master Page</span>
         </Link>
       </li>
       {/* 
       <!-- End Dashboard Nav --> */}
     </ul>
      
       

      </aside>






      
      {/* )} */}
    </>
  )
}
