import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar({toggle}) {
  return (
    <>
      {/* 
      <!-- ======= Sidebar ======= --> */}
      {/* { toggle && ( */}

      
        
      <aside id="sidebar" class="sidebar " >
      
      {/* <aside id="sidebar" class={open?"sidebar collapse":"sidebar"} > */}
      
       <ul class="sidebar-nav" id="sidebar-nav">

       <li class="nav-item">
         <Link class="nav-link " to="/admin-basic-info">
           <i class="bi bi-grid"></i>
           <span>Supplier Management</span>
         </Link>
       </li>


       <li class="nav-item">
         <a class="nav-link " href="index.html">
           <i class="bi bi-grid"></i>
           <span>Master Page</span>
         </a>
       </li>
       {/* 
       <!-- End Dashboard Nav --> */}
     </ul>
      
       

      </aside>






      
      {/* )} */}
    </>
  )
}
